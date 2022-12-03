import { Button, CircularProgress } from "@mui/material";
import React from "react";

const TestCustomSpinningButton = ({ loading=false, children }) => {
  return (
    <>
    {loading}
      {loading ? (
        <Button variant="outlined">
          <CircularProgress sx={{ marginRight: "15px" }} size={24} />
          {children}
        </Button>
      ) : (
        <Button variant="outlined">{children}</Button>
      )}
    </>
  );
};

export default TestCustomSpinningButton;
