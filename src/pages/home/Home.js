import React from "react";
import "./home.scss";
import Navbar from "../../components/home/navbar/Navbar";
import Hero from "../../components/home/hero/Hero";
import Footer from "../../components/home/footer/Footer";

import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box className="main-home">
      <Navbar />
      <Hero />
      <Footer />
    </Box>
  );
};

export default Home;
