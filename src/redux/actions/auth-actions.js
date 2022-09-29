import { authActions } from "../slice/auth-slice";

export const LoginAction =  () => {
    return async (dispatch) => {
        dispatch(authActions.login())
    };
}