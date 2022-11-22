import React, { useEffect } from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import { fetchAllAdmins } from "../../redux/actions/admin-actions";

import { useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAdmins());
  }, []);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CustomDrawer />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
