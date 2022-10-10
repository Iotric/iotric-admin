import React, { useState } from "react";
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

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/home/navbar/Navbar";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/slice/auth-slice.js";

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

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleClickDashboard = () => {
    dispatch(authActions.profileCompleteSuccess());
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box className="profile-stepper">
      {/* <Sidebar /> */}
      <Box className="profile-stepper-container">
        {/* <Navbar /> */}
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Complete your Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Complete your Profile
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
                  <Button onClick={handleClickDashboard} variant="contained">
                    go to dashboard
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
