import React, { useState } from "react";
import "./register.scss";

import { TextField, Button, Typography, Box, Stack, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import nxbLogo from "../../assets/images/nxblogo.svg";
import circlesImg from "../../assets/images/circles.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validations/";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/auth-actions";
import { authActions } from "../../redux/slice/auth-slice";

import Navbar from "../../components/home/navbar/Navbar";
import Footer from "../../components/home/footer/Footer";
import Banner from "../../components/banner/Banner";
import CustomCarousel from "../../components/carousel/CustomCarousel";

import { CustomInputField } from "../../utils/UI/components";
import { errorHandler } from "../../utils/error-handler";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      organizationName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.auth.isLoading);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = (data) => {
    dispatch(registerAction(data));
    setTimeout(() => {
      navigate("/login");
      dispatch(authActions.setLoadingFalse());
    }, 3000);
  };

  return (
    <Box className="register">
      {/* { JSON.stringify(data)} */}
      {/* <Banner />
      <Navbar /> */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className="register-block">
            <Box className="circles-img">
              <img height="250px" width="250px" src={circlesImg} alt="brand" />
            </Box>

            <Box className="register-text-box">
              <Typography fontWeight="500" px={1} color="white" variant="h4">
                Create Your Ideal Investor Experience In Minutes
              </Typography>
              <Box mt={2}>
                <CustomCarousel />
              </Box>

              <Stack mt={1} direction="row" spacing={1}>
                <IconButton sx={{ color: "white" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
              <Stack px={1} mt={8} direction="row" spacing={3}>
                <Typography color="white">Privacy Policy</Typography>
                <Typography color="white">Contact</Typography>
                <Typography color="white">©nexbloc.com</Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="register-card">
            {isLoading ? (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress disableShrink size={40} value={100} />
              </div>
            ) : (
              <Box>
                <Box mt={4} className="register-top">
                  <Box className="register-logo-box">
                    <Link to="/">
                      <img className="logo" src={nxbLogo} alt="company_logo" />
                    </Link>
                  </Box>

                  <Typography my={1} align="center" component="h2" variant="h4">
                    Create your account
                  </Typography>
                  <Typography
                    color="textMute.main"
                    align="center"
                    component="h2"
                    variant="body1"
                  >
                    Enter the fields below to get started
                  </Typography>
                </Box>

                <Box
                  mt={4}
                  component="form"
                  onSubmit={handleSubmit(handleRegister)}
                  className="registerDetails"
                >
                  <Box>
                    <CustomInputField
                      name="firstName"
                      label="First Name *"
                      placeholder="Enter First name"
                      control={control}
                    />
                    {errorHandler(errors, "firstName")}
                  </Box>

                  <Box>
                    <CustomInputField
                      name="lastName"
                      label="Last Name *"
                      placeholder="Enter Last name"
                      control={control}
                    />
                    {errorHandler(errors, "lastName")}
                  </Box>

                  <Box>
                    <CustomInputField
                      name="organizationName"
                      label="Organization Name *"
                      placeholder="Enter Company name"
                      control={control}
                    />
                    {errorHandler(errors, "organizationName")}
                  </Box>

                  <Box>
                    <CustomInputField
                      name="email"
                      label="Email *"
                      type="email"
                      placeholder="Enter email"
                      control={control}
                    />
                    {errorHandler(errors, "email")}
                  </Box>

                  <Box>
                    <TextField
                      name="password"
                      {...register("password")}
                      label="Password *"
                      size="small"
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errorHandler(errors, "password")}
                  </Box>

                  <Button my={4} type="submit" variant="contained">
                    Create Account
                  </Button>
                </Box>

                <Typography my={2} align="center" component="div" variant="h8">
                  Already have an account?
                  <Link to="/login">
                    <Typography ml={1} component="span">
                      Log In
                    </Typography>
                  </Link>
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Register;
