import React, { useState } from "react";
import "./credentials.scss";

import { Box, Typography, Paper, Switch } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import KeysTable from "./KeysTable";
import Navbar from "../../components/navbar/Navbar";

const Credentials = () => {
  const [isTestMode, setIsTestMode] = useState(false);

  const handleToggle = () => {
    setIsTestMode((prev) => !prev);
  };

  return (
    <Box className="credentials">
      <Sidebar />
      <Box className="credentials-container">
        <Navbar />
        <Box className="credentials-main">
          <Typography component="h2" variant="h4">
            API KEYS
          </Typography>
          <Paper className="switch-paper">
            <Typography>
              {isTestMode
                ? "Viewing test API keys. Toggle to   view Live keys."
                : "Viewing Live API keys. Toggle to view test keys."}
            </Typography>
            <Box
              style={{
                marginRight: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
              display="flex"
            >
              <Switch checked={isTestMode} onChange={handleToggle}></Switch>
              <Typography>Test Mode</Typography>
            </Box>
          </Paper>
          <KeysTable isTestMode={isTestMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default Credentials;
