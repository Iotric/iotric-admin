import axiosinstance from "../../utils/axios";
import { toast } from "react-toastify";
import { adminActions } from "../slice/admin-slice";

export const fetchAllAdmins = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("user-token");
    const enterpriseId = localStorage.getItem("enterpriseId");
    try {
      const response = await axiosinstance.get(
        `/enterprise/${enterpriseId}/admins`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      const formatedResponse = response.data.result.map((item, item_index) => {
        const newObj = {
          id: item_index + 1,
          userId: item._id,
          username: item.firstName + item.lastName,
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: item.email,
          status: "ADMIN",
          age: 22,
        };
        return newObj;
      });

      dispatch(adminActions.setAllAdmins(formatedResponse));
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerAdmin = (data) => {
  return async (dispatch) => {
    const token = localStorage.getItem("user-token");
    try {
      const response = axiosinstance.post(
        "/enterprise/admin/registration",
        {
          ...data,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("user registration successfull");
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAdmin = (userId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.get(`/enterprise/admins/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const item = response.data.result;

      const formatedResponse = {
        userId: item._id,
        username: item.firstName + item.lastName,
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: item.email,
        status: "ADMIN",
        age: 22,
      };

      dispatch(adminActions.setCurrentAdmin(formatedResponse));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteAdmin = (userId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("user-token");

    try {
      const response = await axiosinstance.delete(
        `/enterprise/admins/${userId}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message)

      dispatch(adminActions.setDeleteAdmin(userId));
    } catch (err) {
      console.log(err);
    }
  };
};
