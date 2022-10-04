import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const [data, setData] = useState({
    organizationName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    brandText: "",
  });
  const [showPassword, setShowPassword] = useState(0);
  const [showConfirmPassword, setShowConfirmPassword] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  return (
    <Box className="register">
      {/* { JSON.stringify(data)} */}
      <Box py={2} px={5} className="cross-card">
        <Link to="/">
          <CloseIcon style={{ color: "white" }} fontSize="large" />
        </Link>
      </Box>
      <Box className="register-card">
        <Paper className="paper">
          <Link to="/">
            <img className="logo" src={logoImg} alt="company_logo" />
          </Link>
          <Typography
            ml={1}
            mt={1}
            mb={3}
            component="h2"
            variant="h5"
            className="title"
          >
            Create your account
          </Typography>
          <Box className="signDetails">
            <TextField
              value={data.organizationName}
              name="organizationName"
              onChange={handleChange}
              required
              label="Organization Name"
              variant="outlined"
            />
            <Box display="flex" gap={5}>
              <TextField
                value={data.firstName}
                name="firstName"
                onChange={handleChange}
                required
                label="First Name"
                variant="outlined"
              />
              <TextField
                value={data.lastName}
                name="lastName"
                onChange={handleChange}
                required
                label="Last Name"
                variant="outlined"
              />
            </Box>
            <TextField
              value={data.email}
              name="email"
              onChange={handleChange}
              required
              label="Email"
              type="email"
              variant="outlined"
            />
            <Box display="flex" gap={5}>
              <TextField
                value={data.brandText}
                name="brandText"
                onChange={handleChange}
                required
                label="Brand Text"
                variant="outlined"
              />
              <Button size="small" variant="contained" component="label">
                Upload Brand Logo
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
            <TextField
              value={data.password}
              name="password"
              onChange={handleChange}
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
            <TextField
              required
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained">Continue</Button>
          </Box>
          <Box className="bottom">
            <Link to="/login">
              <Typography component="div" variant="h8">
                Already have an account? Login
              </Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;
