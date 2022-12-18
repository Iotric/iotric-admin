import React from "react";
import "./index.scss";
import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const PremiumDomain = () => {
  return (
    <Box>
      <Navbar />
      <Box className="premiumDomain">
        <Sidebar />
        <Box className="premiumDomainContainer">
          <Box className="wrapper"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumDomain;
