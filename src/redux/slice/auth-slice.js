import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, isLoading: false, isProfileComplete: false },
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
        profileCompleteSuccess(state){
            state.isProfileComplete = true
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
