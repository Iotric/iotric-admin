import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/auth-slice'
import keySlice from './slice/key-slice'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        key: keySlice.reducer
    }
})

export default store