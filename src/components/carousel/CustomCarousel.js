import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { IndicatorIcon } from "../../assets/images/Indicator.js";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const carouselItems = [
  {
    text: "Brand your SaaS platform, create an offer, and configure the ideal user experience to meet your organization and investor needs in under 30 minutes.",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae! A vitae accusamus officiis eius!",
  },
  {
    text: "Lorem ipsum dolor sit amet  aliquid, velit eum assumenda autem, ipsa, aut suscipit pariatur esse recusandae ea non natus ducimus expedita?",
  },
];

const CustomCarousel = () => {
  return (
    <Carousel
      height="80px"
      animation="slide"
      // interval={4000}
      // duration={1000}
      navButtonsAlwaysInvisible="true"
      IndicatorIcon={<HorizontalRuleIcon fontSize="large" />}
      indicatorContainerProps={{
        style: {
          margin: 0,
          padding: 0,
          textAlign: "start",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "5px",
          left: 0,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "white",
        },
      }}
    >
      {carouselItems.map((item, item_index) => (
        <Typography
          pl={1}
          pr={10}
          fontWeight="400"
          color="white"
          key={`CAROUSEL_ITEM_${item_index}`}
        >
          {item.text}
        </Typography>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
