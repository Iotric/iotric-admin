import React from "react";
import "./banner.scss";

import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box className="banner">
      <Box mx={10} p="4px" justifyContent="flex-end" display="flex" gap={1}>
        <Typography color="white" variant="body2" component="h4">
          Login
        </Typography>
        <Typography color="white" component="h4">|</Typography>
        <Typography color="white" variant="body2" component="h4">
          Request a Demo
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
