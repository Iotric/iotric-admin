import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import Navbar from "../../components/home/navbar/Navbar";
import Footer from "../../components/home/footer/Footer";

import { Paper, TextField, Button, Typography, Box } from "@mui/material";
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    
    const id = localStorage.getItem("enterpriseId");
    navigate(`/complete-profile/${id}`);
    dispatch(authActions.setLoadingFalse());
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <Box className="login">
        <Banner />
        <Navbar />

        {/* {JSON.stringify(data)} */}
        <Box className="login-container">
          <Box className="login-img">
            <img src={loginImg} alt="brand" />
          </Box>
          <Box className="login-card">
            <Paper className="paper">
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
                    mt={1}
                    mb={3}
                    component="h2"
                    variant="h5"
                    className="title"
                  >
                    Sign in to your account
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit(handleLogin)}
                    className="signDetails"
                  >
                    <Box>
                      <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        {...register("email")}
                      />
                      <Typography
                        mt={1}
                        variant="body2"
                        color="textPrimary.main"
                      >
                        {errors.email?.message}
                      </Typography>
                    </Box>

                    <Box>
                      <TextField
                        name="password"
                        {...register("password")}
                        label="Password"
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
                      <Typography
                        mt={1}
                        variant="body2"
                        color="textPrimary.main"
                      >
                        {errors.password?.message}
                      </Typography>
                    </Box>

                    <Button type="submit" variant="contained">
                      Sign In
                    </Button>
                  </Box>
                  <Box className="bottom">
                    <Link to="/reset">
                      <Typography component="div" variant="h8">
                        Forgot Password ?
                      </Typography>
                    </Link>
                    <Link to="/register">
                      <Typography component="div" variant="h8">
                        Don't have an Account? Signup
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
    </>
  );
};

export default Login;
