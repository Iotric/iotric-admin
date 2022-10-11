import React from "react";
import {
  TextField,
  Checkbox,
  Box,
  Typography,
  Autocomplete,
  Chip,
  Button,
} from "@mui/material";
import "./step2.scss";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep2Schema } from "../../../utils/validations/";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      SocialMedia: [],
      Tlds: [],
      RestrictedSignup: false,
      AllowedEmailType: [],
      DomainLimit: 1000,
      Deafult2Fa: false,
    },
    resolver: yupResolver(profileStep2Schema),
  });

  const handleDummySubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  console.log(errors);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleDummySubmit)}
      className="step2Details"
    >
      {/* {JSON.stringify(data)} */}
      <Controller
        name="Tlds"
        control={control}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            multiple
            options={[]}
            defaultValue={[]}
            onChange={(event, value) => field.onChange(value)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={`CHIP_${option}_${index}`}
                  color="primary"
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Tlds" variant="outlined" />
            )}
          />
        )}
      />
      <Typography variant="body2" color="primary">
        {errors.Tlds?.message}
      </Typography>

      <Controller
        name="SocialMedia"
        control={control}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            multiple
            options={[]}
            defaultValue={[]}
            onChange={(event, value) => field.onChange(value)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} label="Social Media" variant="outlined" />
            )}
          />
        )}
      />
      <Typography variant="body2" color="primary">
        {errors.SocialMedia?.message}
      </Typography>

      <Controller
        name="AllowedEmailType"
        control={control}
        render={({ field }) => (
          <Autocomplete
            freeSolo
            multiple
            options={[]}
            defaultValue={[]}
            onChange={(event, value) => field.onChange(value)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Allowed Email Type"
                variant="outlined"
              />
            )}
          />
        )}
      />
      <Typography variant="body2" color="primary">
        {errors.AllowedEmailType?.message}
      </Typography>

      <TextField
        name="DomainLimit"
        {...register("DomainLimit")}
        type="number"
        label="Domain Limit"
        variant="outlined"
      />
      <Typography variant="body2" color="primary">
        {errors.DomainLimit?.message}
      </Typography>
      <Box display="flex" gap={5}>
        <Box display="flex" alignItems="center">
          <Checkbox name="RestrictedSignup" {...register("RestrictedSignup")} />
          <Typography component="p" variant="body1">
            Restricted Signup
          </Typography>
        </Box>
        <Typography variant="body2" color="primary">
          {errors.RestrictedSignup?.message}
        </Typography>
        <Box display="flex" alignItems="center">
          <Checkbox name="Deafult2Fa" {...register("Deafult2Fa")} />
          <Typography display="flex" alignItems="center">
            Deafult2Fa
          </Typography>
        </Box>
        <Typography variant="body2" color="primary">
          {errors.Deafult2Fa?.message}
        </Typography>
      </Box>
      <Button type="submit">dummy button</Button>
    </Box>
  );
};

export default Step2;
