import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import "./social-media.scss";

const SocialMedia = ({ Icon, children }) => {
  return (
    <Box p={2} className="social-media">
      <Box className="social-box">
        <Box className="icon-box">
          <IconButton >{Icon}</IconButton>
        </Box>
        <Typography fontWeight="500" variant="body1">{children}</Typography>
      </Box>
    </Box>
  );
};

export default SocialMedia;
