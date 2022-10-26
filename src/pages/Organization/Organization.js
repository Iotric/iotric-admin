import { Box, Button, Typography, Divider } from "@mui/material";
import React from "react";
import "./organization.scss";

import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import nexblocImg from "../../assets/images/logo.png";

import { useDispatch } from "react-redux";
import { authActions } from "../../redux/slice/auth-slice";

const Organization = () => {
  const dispatch = useDispatch();
  return (
    <Box className="organization">
      <Box className="org-nav">
        <Link to="/dashboard">
          <ArrowBackIcon />
        </Link>

        <Button variant="outlined" onClick={() => dispatch(authActions.logout())}>Log Out</Button>
      </Box>
      <Box className="org-hero">
        <Typography variant="h6"> Hi! Yash Patwa</Typography>
        <Typography variant="body2">
          You belong to the following organizations.Please select the
          organization you wish to access.
        </Typography>
      </Box>

      <Box className="org-details">
        <ul className="org-list">
          <Divider variant="middle" />
          <li className="org-list-item">
            <Box className="org-icon">
              <img src={nexblocImg} alt="" />
            </Box>
            <Box className="org-data">
              <Typography variant="subtitle1">
                PDRP Technology Pvt. Ltd.
              </Typography>
              <Typography variant="body2">
                Organization ID - 60000788481
              </Typography>
              <Typography variant="body2">Portal Name - iotric</Typography>
              <Typography variant="body2">
                Portal Url - https://people.zoho.in/iotric/zp
              </Typography>
            </Box>
            <Box className="org-edit">
              <Link to="/dashboard/edit-profile">
                <EditIcon />
              </Link>
            </Box>
          </li>
          <Divider variant="middle" />
        </ul>
      </Box>
    </Box>
  );
};

export default Organization;
