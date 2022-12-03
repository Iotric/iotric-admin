import { Autocomplete, Chip, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const CustomMultipleInputField = ({
  name = "",
  control,
  helperText = "",
  label = "",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Autocomplete
          freeSolo
          multiple
          options={[]}
          value={value}
          onChange={(event, values) => onChange(values)}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={`${name}_CHIP_${option}_${index}`}
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={helperText}
              label={label}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
};

export default CustomMultipleInputField;
