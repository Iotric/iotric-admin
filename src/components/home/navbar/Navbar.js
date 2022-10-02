import React from "react";
import "./navbar.module.scss";

import companyLogo from "../../../assets/images/logo.png";
import { AppBar, Toolbar, Button } from "@mui/material";
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
          <Button color="primary" sx={{ my: 1, mx: 1.5 }}>
            Features
          </Button>
          <Link style={{ textDecoration: "none" }} to="/enterprise">
            <Button color="primary" sx={{ my: 1, mx: 1.5 }}>
              Enterprise
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/register">
            <Button color="primary" sx={{ my: 1, mx: 1.5 }}>
              Register
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/login">
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
