import React, { useState } from "react";
import { TextField } from "@mui/material";

const TestCustomMultilineInput = ({ type = "text" }) => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <TextField
      multiline
      rows={2}
      value={username}
      onChange={handleChange}
      type={type}
      label="Username"
      variant="outlined"
    />
  );
};

export default TestCustomMultilineInput;
