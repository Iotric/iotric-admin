import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, isLoading: false },
    reducers: {
        loginStart(state){
          
        },
        loginSuccess(state){
            state.isLoggedIn = true
        },
        registerStart(state){
            state.isLoggedIn = true;
        },
        registerSuccess(state){
            state.isLoggedIn = false;
        },
        logout(state){
            state.isLoggedIn = false
            localStorage.removeItem('user-token')
        },
        setLoadingTrue(state){
            state.isLoading = true
        },
        setLoadingFalse(state){
            state.isLoading = false
        }
    }
})

export const authActions = authSlice.actions

export default authSlice
