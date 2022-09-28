import React from "react";
import "./navbar.scss";

import companyLogo from "../../../assets/images/logo.png";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "inherit",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Link to="/dashboard">
          <img height="60px" width="150px" src={companyLogo} />
        </Link>

        <nav>
          <Button color="primary" href="#" sx={{ my: 1, mx: 1.5 }}>
            Features
          </Button>
          <Link to="/enterprise">
            <Button color="primary" href="#" sx={{ my: 1, mx: 1.5 }}>
              Enterprise
            </Button>
          </Link>

          <Link to="/register">
            <Button color="primary" href="#" sx={{ my: 1, mx: 1.5 }}>
              Register
            </Button>
          </Link>

          <Link to="/login">
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
