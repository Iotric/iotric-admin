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

      dispatch(keyActions.setKeyLoadingFalse());
      dispatch(keyActions.setShowCredentials(false));
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
