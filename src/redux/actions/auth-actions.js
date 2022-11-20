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

export const fetchUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.get("/user/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      dispatch(authActions.setUser(response.data.result));
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

// Enterprise-Profile

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

export const updateProfileData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      let formData = new FormData();
      if (data.brandText !== "") {
        formData.append("brandText", data.brandText);
      }
      if (data.brandLogo && data.brandLogo.length > 0) {
        formData.append("logo", data.brandLogo[0]);
      }
      if (data.favicon && data.favicon.length > 0) {
        formData.append("favicon", data.favicon[0]);
      }
      formData.append("themeColor", data.themeColor);
      if (data.homepageH1Title !== "") {
        formData.append("homepageH1Title", data.homepageH1Title);
      }

      const response = await axiosinstance.put(
        `enterprise/${id}/profile`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(authActions.setProfileData(response.data.result));
      toast.success("Profile Updated !!!");
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

// Meta-Data

export const createMetaData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    delete data.addLinks;
    data.socialMedia = data.socialMedia.filter((item) => item.value !== "");

    if (data.restrictedSignup && data.allowedEmailType.length === 0) {
      data.restrictedSignup = false;
    }

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
      await localStorage.setItem("metadataId", response.data.result._id);
      dispatch(authActions.setMetaData(response.data.result));
    } catch (err) {
      // if (err.response.data.error) {
      //   toast.error(err.response.data.error);
      // } else {
      //   toast.error("Something unusual happened profile !!!");
      // }
      console.log(err);
    }
  };
};

export const updateMetaData = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    delete data.addLinks;
    data.socialMedia = data.socialMedia.filter((item) => item.value !== "");

    if (data.restrictedSignup && data.allowedEmailType.length === 0) {
      data.restrictedSignup = false;
    }

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

export const isEnterpriseMinted = () => {
  return async (dispatch) => {
    const metadataId = localStorage.getItem("metadataId");
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.put(
        `enterprise/meta-data/${metadataId}/mint`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.info(response.data.message);
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
