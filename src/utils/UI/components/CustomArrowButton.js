import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

const CustomArrowButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={<ChevronRightIcon />}
    >
      {children}
    </Button>
  );
};

export default CustomArrowButton;
