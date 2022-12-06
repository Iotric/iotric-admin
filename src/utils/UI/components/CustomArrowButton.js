import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";

const CustomArrowButton = ({ children, onClick, type = "submit" }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      endIcon={<ChevronRightIcon />}
      type={type}
    >
      {children}
    </Button>
  );
};

export default CustomArrowButton;
