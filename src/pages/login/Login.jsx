import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import Navbar from "../../components/home/navbar/Navbar";
import Footer from "../../components/home/footer/Footer";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Stack,
  Checkbox,
} from "@mui/material";
import loginImg from "../../assets/images/about1.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations/";

import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/auth-actions";
import { authActions } from "../../redux/slice/auth-slice";
import Banner from "../../components/banner/Banner";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import nxbLogo from "../../assets/images/nxblogo.svg";
import circlesImg from "../../assets/images/circles.svg";

import { CustomInputField } from "../../utils/UI/components";
import { errorHandler } from "../../utils/error-handler";
import CustomCarousel from "../../components/carousel/CustomCarousel";
import { CustomCheckbox } from "../../utils/UI/components";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(0);

  const isLoading = useSelector((store) => store.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    await dispatch(loginAction(data));

    const token = localStorage.getItem("user-token");
    if (token) {
      navigate(`/complete-profile/`);
    }
    dispatch(authActions.setLoadingFalse());
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Box className="login">
        {/* <Banner />
        <Navbar /> */}

        {/* {JSON.stringify(data)} */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box className="login-block">
              <Box className="circles-img">
                <img
                  height="250px"
                  width="250px"
                  src={circlesImg}
                  alt="brand"
                />
              </Box>

              <Box className="login-text-box">
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
            <Box className="login-card">
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
                  <Box mt={14} className="login-top">
                    <Box className="login-logo-box">
                      <Link to="/">
                        <img
                          className="logo"
                          src={nxbLogo}
                          alt="company_logo"
                        />
                      </Link>
                    </Box>

                    <Typography
                      my={1}
                      align="center"
                      component="h2"
                      variant="h4"
                    >
                      Login your account
                    </Typography>
                    <Typography
                      color="textMute.main"
                      align="center"
                      component="h2"
                      variant="body1"
                    >
                      Enter the fields below to get login
                    </Typography>
                  </Box>

                  <Box
                    mt={4}
                    component="form"
                    onSubmit={handleSubmit(handleLogin)}
                    className="loginDetails"
                  >
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

                    <Grid container spacing={1}>
                      <Grid display="flex" alignItems="center" item xs={7}>
                        <Checkbox />
                        <Typography>Remember me</Typography>
                      </Grid>

                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        item
                        xs={5}
                      >
                        <Link to="/reset">
                          <Typography>Forgot Password?</Typography>
                        </Link>
                      </Grid>
                    </Grid>

                    <Button my={4} type="submit" variant="contained">
                      Login
                    </Button>
                  </Box>

                  <Typography
                    my={2}
                    align="center"
                    component="div"
                    variant="h8"
                  >
                    Not register yet?
                    <Link to="/register">
                      <Typography ml={1} component="span">
                        Create an Account
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default Login;
