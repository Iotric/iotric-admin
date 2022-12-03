import React, { useState } from "react";
import { TextField } from "@mui/material";

const TestCustomInputField = ({ type = "text" }) => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <TextField
      value={username}
      onChange={handleChange}
      type={type}
      size="small"
      label="Username"
      variant="outlined"
    />
  );
};

export default TestCustomInputField;
