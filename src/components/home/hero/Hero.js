import React from "react";
import "./hero.scss";

import heroImg from "../../../assets/images/img1.png";

import { Container, Typography, Box, Button } from "@mui/material";

const Hero = () => {
  return (
    <Container className="main" maxWidth="full">
      <Box px={5} py={5} className="main-hero">
        <Box>
          <Typography
            style={{ color: "white" }}
            className="text-white"
            variant="h2"
          >
            Access to APIs, Documentation, SDK implemenation and API key
            generation in one place.
          </Typography>
          <Typography
            style={{ color: "white" }}
            className="text-white"
            variant="h6"
          >
            Access to APIs, Documentation, SDK implemenation and API key
            generation in one place.
          </Typography>
          <Button color="error">Get Started</Button>
        </Box>
        <img src={heroImg}></img>
      </Box>
    </Container>
  );
};

export default Hero;
