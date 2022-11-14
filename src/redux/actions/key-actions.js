import { keyActions } from "../slice/key-slice";
import axiosinstance from "../../utils/axios";
import { toast } from "react-toastify";

export const fetchApiKeys = () => {
  const token = localStorage.getItem("user-token");
  const enterpriseId = localStorage.getItem("enterpriseId");
  return async (dispatch) => {
    try {
      const response = await axiosinstance.get(
        `/enterprise/${enterpriseId}/get-key`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const keysData = response.data.result;

      keysData.forEach((data) => {
        if (data.type === "test") {
          dispatch(keyActions.setUser({ type: "testApplicationKey", data }));
        } else {
          dispatch(keyActions.setUser({ type: "liveApplicationKey", data }));
        }
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

export const softDeleteKey = () => {
  return async (dispatch, getState) => {
    const store = getState();
    const { isTestMode, user } = store.key;
    const enterpriseId = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      const url = isTestMode
        ? `enterprise/${enterpriseId}/delete-keys/${user.testApplicationKey._id}`
        : `enterprise/${enterpriseId}/delete-keys/${user.liveApplicationKey._id}`;
      await axiosinstance.delete(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (isTestMode) {
        dispatch(
          keyActions.setUser({
            type: "testApplicationKey",
            data: null,
          })
        );
        toast.success("Test api keys deleted");
      } else {
        dispatch(
          keyActions.setUser({
            type: "liveApplicationKey",
            data: null,
          })
        );
        toast.success("Live api keys deleted");
      }
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

export const generateAndRegenerateKeysAction = () => {
  return async (dispatch, getState) => {
    const store = getState();
    const { isTestMode, user } = store.key;
    const id = localStorage.getItem("enterpriseId");
    const token = localStorage.getItem("user-token");

    try {
      dispatch(keyActions.setKeyLoadingTrue());

      if (isTestMode) {
        const response = await axiosinstance.put(
          `/enterprise/${id}/generate-key?type=test`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(
          keyActions.setUser({
            type: "testApplicationKey",
            data: response.data.result,
          })
        );
      } else {
        const response = await axiosinstance.put(
          `/enterprise/${id}/generate-key?type=live`,
          {},
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(
          keyActions.setUser({
            type: "liveApplicationKey",
            data: response.data.result,
          })
        );
      }

      if (isTestMode) {
        toast.success("Test api keys generated successfully");
      } else {
        toast.success("Live api keys generated successfully");
      }

      dispatch(keyActions.setKeyLoadingFalse());
      dispatch(keyActions.setShowCredentials(false));
    } catch (err) {
      dispatch(keyActions.setKeyLoadingFalse());
      if (err.response.data.error) {
        toast.error(err.response.data.error);
      } else {
        toast.error("Something unusual happened profile !!!");
      }
      console.log(err);
    }
  };
};
