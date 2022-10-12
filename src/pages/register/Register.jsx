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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validations/";

import { useNavigate } from "react-router-dom";

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
      brandText: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(0);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = (data) => {
    console.log(data);
    navigate("/login");
  };

  return (
    <Box className="register">
      {/* { JSON.stringify(data)} */}
      <Navbar />
      <Box className="register-container">
        <Box className="register-img">
          <img src={registerImg} alt="brand" />
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
            <Box
              component="form"
              onSubmit={handleSubmit(handleRegister)}
              className="registerDetails"
            >
              <TextField
                name="organizationName"
                {...register("organizationName")}
                label="Organization Name *"
                variant="outlined"
              />
              <Typography variant="body2" color="primary">
                {errors.organizationName?.message}
              </Typography>

              <TextField
                name="firstName"
                {...register("firstName")}
                label="First Name *"
                variant="outlined"
              />
              <Typography variant="body2" color="primary">
                {errors.firstName?.message}
              </Typography>
              <TextField
                name="lastName"
                {...register("lastName")}
                label="Last Name *"
                variant="outlined"
              />
              <Typography variant="body2" color="primary">
                {errors.lastName?.message}
              </Typography>
              <TextField
                name="email"
                {...register("email")}
                label="Email *"
                type="email"
                variant="outlined"
              />
              <Typography variant="body2" color="primary">
                {errors.email?.message}
              </Typography>
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
              <Typography variant="body2" color="primary">
                {errors.password?.message}
              </Typography>
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
          </Paper>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Register;
