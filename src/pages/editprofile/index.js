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
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

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

  const editActiveStep = useSelector((store) => store.auth.editActiveStep);

  useEffect(() => {
    dispatch(fetchEnterprise());
  }, []);

  const handleClickDashboard = () => {
    dispatch(authActions.setLoadingTrue());
    navigate("/dashboard");
    dispatch(authActions.handleEditReset());
    dispatch(authActions.setLoadingFalse());
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

              <Stepper activeStep={editActiveStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {editActiveStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Your Profile is Updated
                    </Typography>
                    <Box my={3}>
                      <Alert variant="filled" severity="info">
                        We have emailed your order confirmation, and will send
                        you an update when your order has shipped.
                      </Alert>
                    </Box>
                    <Box>
                      <Alert variant="filled" severity="warning">
                        Till we mint your transaction, you can checkout to
                        dashboard.
                      </Alert>
                    </Box>
                    <div
                      style={{
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress
                        color="success"
                        disableShrink
                        size={40}
                        value={100}
                      />
                    </div>
                    <Box display="flex" mt={3} gap={2}>
                      <Button
                        variant="outlined"
                        onClick={() => dispatch(authActions.editHandleBack())}
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
                  <React.Fragment>
                    {getStepContent(editActiveStep)}
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
