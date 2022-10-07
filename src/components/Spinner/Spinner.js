import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Spinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress disableShrink size={40} value={100} />
    </div>
  );
};

export default Spinner;
