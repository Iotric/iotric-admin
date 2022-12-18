import React from "react";
import "./credentials.scss";

import { Box, Typography, Paper, Switch, Drawer } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import KeysTable from "./KeysTable";
import Navbar from "../../components/navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { keyActions } from "../../redux/slice/key-slice.js";
import CustomDrawer from "../../components/Drawer/CustomDrawer";

const Credentials = () => {
  const dispatch = useDispatch();
  const isTestMode = useSelector((store) => store.key.isTestMode);

  const handleToggle = () => {
    dispatch(keyActions.setTestMode());
  };

  return (
    <Box>
      <Navbar />

      <Box className="credentials">
        <Sidebar />

        <Box className="credentials-container">
          <CustomDrawer />
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
            <KeysTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Credentials;
