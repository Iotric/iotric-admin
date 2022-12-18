import React from "react";
import "./index.scss";
import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Settings = () => {
  return (
    <Box>
      <Navbar />
      <Box className="settings">
        <Sidebar />
        <Box className="settingsContainer">
          <Box className="wrapper"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
