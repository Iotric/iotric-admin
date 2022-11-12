import React from "react";
import "./home.scss";
import Navbar from "../../components/home/navbar/Navbar";
import Hero from "../../components/home/hero/Hero";
import Footer from "../../components/home/footer/Footer";

import { Box } from "@mui/material";
import Customers from "../../components/home/Customers/Customers";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <Box className="main-home">
      <Banner />
      <Navbar />
      <Hero />
      <Customers />
      <Footer />
    </Box>
  );
};

export default Home;
