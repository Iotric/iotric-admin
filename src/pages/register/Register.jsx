import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/home/navbar/Navbar";
import Footer from "../../components/home/footer/Footer";

import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import registerImg from "../../assets/images/about1.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validations/";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/auth-actions";
import { authActions } from "../../redux/slice/auth-slice";

import Banner from "../../components/banner/Banner";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    }, 1000);
  };

  return (
    <Box className="register">
      {/* { JSON.stringify(data)} */}
      <Banner />
      <Navbar />
      <Box className="register-container">
        <Box className="register-img">
          <img src={registerImg} alt="brand" />
        </Box>
        <Box className="register-card">
          <Paper className="paper">
            {/* <Link to="/">
              <img className="logo" src={logoImg} alt="company_logo" />
            </Link> */}
            {isLoading ? (
              <div
                style={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress disableShrink size={40} value={100} />
              </div>
            ) : (
              <Box>
                <Typography
                  ml={1}
                  mt={2}
                  mb={3}
                  component="h2"
                  variant="h5"
                  className="title"
                >
                  Create your account
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit(handleRegister)}
                  className="registerDetails"
                >
                  <Box>
                    <TextField
                      name="organizationName"
                      {...register("organizationName")}
                      label="Organization Name *"
                      variant="outlined"
                    />
                    <Typography mt={1} variant="body2" color="textPrimary.main">
                      {errors.organizationName?.message}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      name="firstName"
                      {...register("firstName")}
                      label="First Name *"
                      variant="outlined"
                    />
                    <Typography mt={1} variant="body2" color="textPrimary.main">
                      {errors.firstName?.message}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      name="lastName"
                      {...register("lastName")}
                      label="Last Name *"
                      variant="outlined"
                    />
                    <Typography mt={1} variant="body2" color="textPrimary.main">
                      {errors.lastName?.message}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      name="email"
                      {...register("email")}
                      label="Email *"
                      type="email"
                      variant="outlined"
                    />
                    <Typography mt={1} variant="body2" color="textPrimary.main">
                      {errors.email?.message}
                    </Typography>
                  </Box>

                  <Box>
                    <TextField
                      name="password"
                      {...register("password")}
                      label="Password *"
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
                    <Typography mt={1} variant="body2" color="textPrimary.main">
                      {errors.password?.message}
                    </Typography>
                  </Box>

                  <Button type="submit" variant="contained">
                    Continue
                  </Button>
                </Box>
                <Box className="bottom">
                  <Link to="/login">
                    <Typography component="div" variant="h8">
                      Already have an account? Login
                    </Typography>
                  </Link>
                </Box>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
