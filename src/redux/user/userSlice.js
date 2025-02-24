import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import authorizedAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'

const initialState = {
  currentUser: null
}

export const loginUserAPI = createAsyncThunk('user/loginUserAPI', async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/v1/users/login`, data)
  return response.data
})

export const logoutUserAPI = createAsyncThunk('user/logoutUserAPI', async (showSuccessMessage = true) => {
  const response = await authorizedAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
  if (showSuccessMessage) {
    toast.success('Logged out successfully')
  }
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      //action.payload == response.data
      const user = action.payload
      state.currentUser = user
    })
    builder.addCase(logoutUserAPI.fulfilled, (state) => {
      state.currentUser = null
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions

export const selectCurrentUser = (state) => {
  return state.user.currentUser //state.name.current
}

export const userReducer = userSlice.reducer
