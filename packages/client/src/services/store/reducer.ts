import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import leadersReducer from './leadersSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    leaders: leadersReducer
  },
})
