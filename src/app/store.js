import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '../screens/signup/signupSlice'

export default configureStore({
  reducer: {
    users: signupReducer
  },
})