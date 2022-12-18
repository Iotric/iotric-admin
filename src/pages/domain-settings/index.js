import React from "react";
import "./index.scss";
import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const DomainSettings = () => {
  return (
    <Box>
      <Navbar />
      <Box className="domainSettings">
        <Sidebar />
        <Box className="domainSettingsContainer">
          <Box className="wrapper"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DomainSettings;
