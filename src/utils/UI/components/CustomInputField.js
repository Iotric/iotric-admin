import React from "react";

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const CustomInputField = ({
  name = "",
  label = "",
  placeholder = "",
  type = "text",
  control,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextField
          {...rest}
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

export default CustomInputField;
