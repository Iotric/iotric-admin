import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import SameDataComposedChart from "../../components/chart/SameDataComposedChart";
import CustomDrawer from "../../components/Drawer/CustomDrawer";

import { toast } from "react-toastify";

const Dashboard = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <CustomDrawer />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="domain" />
          <Widget type="total-api-request" />
          <Widget type="premium" />
        </div>
        <div className="charts">
          <Featured />
          <SameDataComposedChart title="API Statistics" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Orders</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
