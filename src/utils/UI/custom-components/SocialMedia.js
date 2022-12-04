import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import "./social-media.scss";

const SocialMedia = ({ Icon, children }) => {
  return (
    <Box p={1} className="social-media">
      <Box className="social-box">
        <Box className="icon-box">
          <IconButton >{Icon}</IconButton>
        </Box>
        <Typography className="icon-text" fontWeight="500" variant="body2">{children}</Typography>
      </Box>
    </Box>
  );
};

export default SocialMedia;
