import { Box, Button, Typography, Divider, IconButton } from "@mui/material";
import React from "react";
import "./organization.scss";

import { Link, useNavigate } from "react-router-dom";
import { Link as MUILink } from "@mui/material/";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import nexblocImg from "../../assets/images/logo.png";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slice/auth-slice";

const Organization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // authState
  const authState = useSelector((store) => store.auth);
  const firstName = authState.firstName;
  const lastName = authState.lastName;
  const organizationName = authState.organizationName;
  const brandText = authState.brandText;
  const homepageH1Title = authState.homepageH1Title;
  const enterpriseId = localStorage.getItem("enterpriseId");

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <Box className="organization">
      <Box className="org-nav">
        <Link to="/dashboard">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>

        <Button variant="outlined" onClick={handleLogout}>
          Log Out
        </Button>
      </Box>
      <Box className="org-hero">
        <Typography className="welcome-text" fontWeight="600" variant="h5">
          Hi! {firstName} {lastName}
        </Typography>
        <Typography color="textMute.main" fontWeight="500" variant="body1">
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
              <Typography variant="subtitle1" fontWeight="600">
                {organizationName}
              </Typography>
              <Typography variant="body2">
                Enterprise ID - {enterpriseId}
              </Typography>
              {homepageH1Title && homepageH1Title !== "" ? (
                <Typography variant="body2">
                  Home Page Title - {homepageH1Title}
                </Typography>
              ) : null}

              {brandText && brandText !== "" ? (
                <>
                  <Typography variant="body2">
                    Brand Title - {brandText}
                  </Typography>

                  <Typography variant="body2">
                    Portal Url -
                    <MUILink
                      href={`https://${brandText}.nexbloc.in/`}
                      underline="hover"
                    >
                      https://{brandText}.nexbloc.in/
                    </MUILink>
                  </Typography>
                </>
              ) : null}
            </Box>
            <Box className="org-edit">
              <Link to="/dashboard/edit-profile">
                <IconButton>
                  <EditIcon />
                </IconButton>
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
