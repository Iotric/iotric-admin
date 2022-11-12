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
import IconButton from "@mui/material/IconButton";

import Step1 from "./edit-enterprise-steps/ProfileForm";
import Step2 from "./edit-enterprise-steps/MetadataForm";

import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../../redux/slice/auth-slice.js";
import { fetchEnterprise } from "../../redux/actions/auth-actions";

const steps = ["Step 1", "Step 2"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeStep = useSelector((store) => store.auth.activeStep);

  useEffect(() => {
    dispatch(fetchEnterprise());
  }, []);

  const handleClickDashboard = () => {
    dispatch(authActions.profileCompleteSuccess());
    dispatch(authActions.setLoadingTrue());
    setTimeout(() => {
      navigate("/dashboard");
      dispatch(authActions.handleReset());
      dispatch(authActions.setLoadingFalse());
    }, 2000);
  };

  return (
    <Box className="edit-profile">
      <Box className="edit-profile-nav">
        <Link to="/dashboard">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>

        <Button
          variant="outlined"
          onClick={() => dispatch(authActions.logout())}
        >
          Log Out
        </Button>
      </Box>
      <Box className="edit-profile-stepper">
        <Box className="edit-profile-stepper-container">
          <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
              position: "relative",
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
          ></AppBar>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Edit your Profile
              </Typography>

              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Congratulations Your Profile is Complete
                    </Typography>
                    {/* <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography> */}
                    <Box display="flex" mt={3} gap={2}>
                      <Button
                        variant="outlined"
                        onClick={() => dispatch(authActions.handleBack())}
                      >
                        back
                      </Button>
                      <Button
                        onClick={handleClickDashboard}
                        variant="contained"
                      >
                        go to dashboard
                      </Button>
                    </Box>
                  </React.Fragment>
                ) : (
                  <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
