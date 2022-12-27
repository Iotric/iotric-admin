import React, { useState, useEffect } from "react";
import "./index.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import Step0 from "./enterprise-steps/IndustoryTypeForm";
import Step1 from "./enterprise-steps/ProfileForm";
import Step2 from "./enterprise-steps/MetadataForm";
import Step3 from "./enterprise-steps/Enable";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/slice/auth-slice.js";
import { fetchEnterprise } from "../../redux/actions/auth-actions";

import logoTitleImg from "../../assets/images/logo-title.svg";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step0 />;
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;

    default:
      throw new Error("Unknown step");
  }
}

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeStep = useSelector((store) => store.auth.activeStep);
  const completionIndicator = useSelector(
    (store) => store.auth.completionIndicator
  );

  useEffect(() => {
    dispatch(fetchEnterprise());
  }, []);

  // useEffect(() => {
  //   mapCompletionWithStep();
  // }, [completionIndicator]);

  // const mapCompletionWithStep = () => {
  //   let step = 0;
  //   if (completionIndicator.registration) {
  //     step = 0;
  //     if (completionIndicator.profileForm) {
  //       step = 1;
  //       if (completionIndicator.metaInfoForm) {
  //         step = 2;
  //         navigate("/dashboard");
  //         if (completionIndicator.isMinted) {
  //           step = 2;
  //         }
  //       }
  //     }
  //   }
  //   dispatch(authActions.setActiveStep(step));
  // };

  const handleClickDashboard = () => {
    dispatch(authActions.profileCompleteSuccess());
    dispatch(authActions.setLoadingTrue());
    setTimeout(() => {
      navigate("/dashboard");
      dispatch(authActions.handleReset());
      dispatch(authActions.setLoadingFalse());
    }, 1000);
  };

  return (
    <Box className="profile-stepper">
      {/* {JSON.stringify(completionIndicator)} */}
      <Box className="profile-stepper-container">
        <AppBar
          position="absolute"
          color="primary"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Box sx={{ padding: "10px", flexGrow: 1 }}>
              <img height="35px" src={logoTitleImg} alt="" />
            </Box>
            <Typography mr={3} variant="body1" color="inherit" noWrap>
              Contact
            </Typography>
          </Toolbar>
        </AppBar>

        <React.Fragment>
          <Box className="stepper-box">
            <Box className="stepper">
              <Stepper activeStep={activeStep} sx={{ pt: 3 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          {getStepContent(activeStep)}
        </React.Fragment>
      </Box>
    </Box>
  );
}
