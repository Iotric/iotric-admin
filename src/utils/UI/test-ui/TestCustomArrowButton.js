import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TestCustomArrowButton = ({ children }) => {
  return (
    <Button variant="contained" endIcon={<ChevronRightIcon />}>
      {children}
    </Button>
  );
};

export default TestCustomArrowButton;
