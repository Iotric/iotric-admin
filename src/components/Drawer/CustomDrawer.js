import React, { useEffect } from "react";
import "./customDrawer.scss";

import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Typography, IconButton } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import SettingsIcon from "@mui/icons-material/Settings";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dashboardActions } from "../../redux/slice/dashboard-slice";

import { fetchUser } from "../../redux/actions/auth-actions";

let anchor = "right";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDrawerOpen = useSelector((store) => store.dashboard.isDrawerOpen);

  // authState
  const authState = useSelector((store) => store.auth);
  const firstName = authState.firstName;
  const lastName = authState.lastName;
  const email = authState.email;
  const role = authState.role;
  const organizationName = authState.organizationName;

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleSetting = () => {
    dispatch(dashboardActions.toggleDrawer());
    navigate("/dashboard/organization");
  };

  return (
    <Drawer
      anchor={anchor}
      open={isDrawerOpen}
      onClose={() => dispatch(dashboardActions.toggleDrawer)}
    >
      <Box className="custom-drawer">
        <Box className="drawer-data">
          <IconButton onClick={() => dispatch(dashboardActions.toggleDrawer())}>
            <CancelIcon />
          </IconButton>

          <Box className="drawer-details">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />

            <Box className="user-details">
              <Typography
                mt={1}
                align="center"
                className="welcome-text"
                variant="subtitle1"
              >
                {firstName} - {lastName}
              </Typography>
              <MUILink align="center" underline="hover">
                <Typography mb="4px" variant="body2">
                  {email}
                </Typography>
              </MUILink>
              <Typography align="center" variant="body2">
                {role}
              </Typography>
            </Box>

            <Box mt={1} display="flex" gap={4} mt={2}>
              <Button mx={2} variant="contained">
                My Account
              </Button>
              <Button variant="text">Log Out</Button>
            </Box>
          </Box>
        </Box>

        <Box className="drawer-edit">
          <Typography variant="body1">{organizationName}</Typography>
          <IconButton>
            <SettingsIcon sx={{ color: "#00b0ff" }} onClick={handleSetting} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
