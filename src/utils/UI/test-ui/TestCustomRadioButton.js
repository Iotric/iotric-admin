import React from "react";
import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const boxCheckedStyle = {
  border: "1px solid #6300FF",
  borderRadius: "8px",
  backgroundColor: "rgba(99, 0, 255, 0.1)",
  display: "flex",
  alignItems: "center",
};

const boxDefaultStyle = {
  border: "1px solid #CBCBCB",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
};

const TestCustomRadioButton = ({ value, selectedItem, onChange, children }) => {
  return (
    <Box
      sx={selectedItem === value ? boxCheckedStyle : boxDefaultStyle}
      display="flex"
      gap="8px"
      px={1}
      py={0}
    >
      <FormControlLabel value={value} control={<Radio disableRipple />} />

      <Typography fontWeight="500" variant="body1">
        {children}
      </Typography>
    </Box>
  );
};

export default TestCustomRadioButton;
