import React from "react";

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const CustomMultilineInput = ({
  name = "",
  label = "",
  placeholder = "",
  type = "text",
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextField
          multiline
          rows={4}
          value={value}
          onChange={onChange}
          type={type}
          label={label}
          size="small"
          placeholder={placeholder}
          variant="outlined"
        />
      )}
    />
  );
};

export default CustomMultilineInput;
