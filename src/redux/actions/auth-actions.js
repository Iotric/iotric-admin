import { authActions } from "../slice/auth-slice";
import axiosinstance from "../../utils/axios";
import { toast } from "react-toastify";

export const loginAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.loginStart());
      dispatch(authActions.setLoadingTrue());
      const response = await axiosinstance.post("/user/login", {
        ...data,
      });
      await localStorage.setItem("user-token", response.data.result.token);
      await localStorage.setItem(
        "enterpriseId",
        response.data.result.user.enterpriseId
      );
      dispatch(authActions.loginSuccess());
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};

export const registerAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.registerStart());
      dispatch(authActions.setLoadingTrue());
      const response = await axiosinstance.post("/enterprise/create", {
        ...data,
      });
      toast.success("Registration Successfull !!!", {
        delay: 2000,
        autoClose: 7000,
      });
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};

export const fetchEnterprise = () => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");
    try {
      const response = await axiosinstance.get(`enterprise/${id}/profile`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      await dispatch(authActions.setEnterprise(response.data.result));
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};

export const fetchMetaData = () => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");
    try {
      const response = await axiosinstance.get(`enterprise/${id}/meta-data`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(authActions.setMetaData(response.data.result));
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};

export const updateProfileData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      // let formData = new FormData();
      // formData.append("brandText", data.brandText);
      // formData.append("logo", data.brandLogo[0]);
      // formData.append("favicon", data.favicon[0]);
      // formData.append("themeColor", data.themeColor);
      // formData.append("homepageH1Title", data.homepageH1Title);

      // console.log("formData", { ...formData });

      const response = await axiosinstance.put(
        `enterprise/${id}/profile`,
        { ...data },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        }
      );

      dispatch(authActions.setProfileData(response.data.result));
      toast.success("Profile Updated !!!");
      dispatch(authActions.handleNext());
    } catch (err) {
      if (err.response?.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};

export const createMetaData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.post(
        `enterprise/${id}/meta-data`,
        { ...data },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(authActions.setMetaData(response.data.result));
      toast.success("Metadata Updated !!!");
      dispatch(authActions.handleNext());
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened !!!");
      }
      console.log(err);
    }
  };
};

export const updateMetaData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.put(
        `enterprise/${id}/meta-data`,
        { ...data },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(authActions.setMetaData(response.data.result));
      toast.success("Metadata Updated !!!");
      dispatch(authActions.handleNext());
    } catch (err) {
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened !!!");
      }
      console.log(err);
    }
  };
};