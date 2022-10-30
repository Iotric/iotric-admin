import React from "react";
import "./customDrawer.scss";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Typography, IconButton } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import SettingsIcon from "@mui/icons-material/Settings";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dashboardActions } from "../../redux/slice/dashboard-slice";

let anchor = "right";

const CustomDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDrawerOpen = useSelector((store) => store.dashboard.isDrawerOpen);

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
          <IconButton>
            <CancelIcon
              onClick={() => dispatch(dashboardActions.toggleDrawer())}
            />
          </IconButton>

          <Box className="drawer-details">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />

            <Typography variant="body2">IOTPY16 - Patwa</Typography>

            <Typography variant="body2">yashdeep.patwa@iotric.com</Typography>

            <Typography variant="body2">Software Engineer</Typography>

            <Button variant="outlined">Log Out</Button>
          </Box>
        </Box>

        <Box className="drawer-edit">
          <Typography variant="body1">PDRP Technology Pvt. Ltd.</Typography>
          <IconButton>
            <SettingsIcon sx={{ color: "#00b0ff" }} onClick={handleSetting} />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
