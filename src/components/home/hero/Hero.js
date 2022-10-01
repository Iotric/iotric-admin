import React from "react";
import "./hero.scss";

import heroImg from "../../../assets/images/img1.png";

import { Container, Typography, Box, Button } from "@mui/material";

const Hero = () => {
  return (
    <Container className="hero" maxWidth="full">
      <Box px={5} py={10} className="main-hero">
        <Box>
          <Typography
            style={{ color: "white" }}
            className="text-white"
            variant="h3"
          >
            Access to APIs, Documentation, SDK implemenation and API key
            generation in one place.
          </Typography>
          <Typography
            my={4}
            style={{ color: "white" }}
            className="text-white"
            variant="h5"
          >
            Access to APIs, Documentation, SDK implemenation and API key
            generation in one place.
          </Typography>
          <Button variant="contained" color="error">
            Get Started
          </Button>
        </Box>
        <img src={heroImg} alt="hero"></img>
      </Box>
    </Container>
  );
};

export default Hero;
