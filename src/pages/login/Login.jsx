import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";

import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useSelector, useDispatch } from 'react-redux'
import { LoginAction } from "../../redux/actions/auth-actions"


const Login = () => {
  const [showPassword, setShowPassword] = useState(0);

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn)
  const dispatch = useDispatch()
  
  const handleLogin = () => {
    dispatch(LoginAction())
  }

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Box className="login">
      {isLoggedIn ? "yes" : "no"}
      <Box px={5} className="cross-card">
        <Link to="/">
          <CloseIcon
            style={{ color: "white" }}
            fontSize="large"
          />
        </Link>
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
          <Box className="signDetails">
            <TextField required label="Email" variant="outlined" />
            <TextField
              required
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
            <Button variant="contained" onClick={handleLogin}>
              Sign In
            </Button>
          </Box>
          <Box className="bottom">
            <Link to="/reset">
              <Typography component="div" variant="h8">
                forgot password ?
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
  );
};

export default Login;
