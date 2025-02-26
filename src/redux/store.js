import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlice'
import { userReducer } from './user/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { activeCardReducer } from './activeCard/activeCardSlice'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whiteList: ['user']
}

const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  user: userReducer,
  activeCard: activeCardReducer
})

const persistedReducer = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})
