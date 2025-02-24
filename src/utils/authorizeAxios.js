import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from './formatter'
import { logoutUserAPI } from '~/redux/user/userSlice'
import { refreshTokenAPI } from '~/apis'

//Inject store
let axiosReduxStore
export const injectStore = (mainStore) => {
  axiosReduxStore = mainStore
}

let authorizedAxiosInstance = axios.create()

authorizedAxiosInstance.defaults.timeout = 1000 * 60 * 10

//withCredentials: Cho phép axios auto sends cookie in every request to BE
authorizedAxiosInstance.defaults.withCredentials = true

authorizedAxiosInstance.interceptors.request.use(
  (config) => {
    interceptorLoadingElements(true)

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

let refreshTokenPromise = null

authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    interceptorLoadingElements(false)
    return response
  },
  (error) => {
    //Chặn spam click
    interceptorLoadingElements(false)

    //TH1: 401 from BE, call API logout
    if (error.response?.status === 401) {
      axiosReduxStore.dispatch(logoutUserAPI(false))
    }

    const originalRequests = error.config
    if (error.response?.status === 410 && !originalRequests._retry) {
      console.log(originalRequests)
      originalRequests._retry = true
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshTokenAPI()
          .then((data) => {
            return data?.accessToken
          })
          .catch((_error) => {
            console.log(_error)
            axiosReduxStore.dispatch(logoutUserAPI(false))
            return Promise.reject(_error)
          })
          .finally(() => {
            refreshTokenPromise = null
          })
      }

      //Handle refreshtokenPromise success
      return refreshTokenPromise.then(() => {
        return authorizedAxiosInstance(originalRequests)
      })
    }

    let errorMessage = error?.message
    if (error.response?.data?.message) {
      errorMessage = error.response?.data?.message
      toast.error(errorMessage)
    }
    //Hiển thị bất kể mọi mã lỗi trừ 410 - GONE (auto refreshToken)
    if (error.response?.status !== 410) {
      toast.error(errorMessage)
    }
    return Promise.reject(error)
  }
)

export default authorizedAxiosInstance
