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
import Spinner from "../../components/Spinner/Spinner";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validations/";

import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/auth-actions";
import { authActions } from "../../redux/slice/auth-slice";

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

  const handleLogin = (data) => {
    dispatch(LoginAction());
    setTimeout(() => {
      navigate("/dashboard");
      dispatch(authActions.setLoadingFalse());
    }, 2000);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box className="login">
          <Navbar />
          {/* {JSON.stringify(data)} */}
          <Box className="login-container">
            <Box className="login-img">
              <img src={loginImg} alt="brand" />
            </Box>
            <Box className="login-card">
              <Paper className="paper">
                <Link to="/">
                  <img className="logo" src={logoImg} alt="company_logo" />
                </Link>

                <Typography
                  ml={1}
                  mt={1}
                  mb={5}
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
                  <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    {...register("email")}
                    helperText="please enter your email"
                  />
                  <Typography variant="body2" color="primary">
                    {errors.email?.message}
                  </Typography>

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
                  <Typography variant="body2" color="primary">
                    {errors.password?.message}
                  </Typography>
                  <Button type="submit" variant="contained">
                    Sign In
                  </Button>
                </Box>

                <Box className="bottom">
                  <Link to="/reset">
                    <Typography component="div" variant="h8">
                      Forgot password ?
                    </Typography>
                  </Link>
                  <Link to="/register">
                    <Typography component="div" variant="h8">
                      Don't have an Account? Signup
                    </Typography>
                  </Link>
                </Box>
              </Paper>
            </Box>
          </Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export default Login;
