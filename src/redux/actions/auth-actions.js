import { authActions } from "../slice/auth-slice";
import axiosinstance from "../../utils/axios";

export const LoginAction = () => {
  return async (dispatch) => {
    try {
      dispatch(authActions.loginStart());
      dispatch(authActions.setLoadingTrue());
      const data = await axiosinstance.post(
        "/774c05bc-3c7f-4a99-9f30-1ef5aabecf45"
      );
      await localStorage.setItem("user-token", data.data.token);
      dispatch(authActions.loginSuccess());
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.registerStart());

      const response = await axiosinstance.post("/enterprise/create", {
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
