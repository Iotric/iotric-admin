import React, { useEffect, useState } from "react";
import "./profile.scss";

import { TextField, Button, Typography, Box } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep1Schema } from "../../../utils/validations";

import { useDispatch, useSelector } from "react-redux";

import { updateProfileData } from "../../../redux/actions/auth-actions";

const Step1 = () => {
  const dispatch = useDispatch();

  // authState
  const authState = useSelector((state) => state.auth);
  const brandText = authState.brandText;
  const homepageH1Title = authState.homepageH1Title;
  const themeColor = authState.themeColor;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
  } = useForm({
    defaultValues: {
      brandText: "iotric",
      homepageH1Title: "welcome to iotric",
      themeColor: "",
    },
    resolver: yupResolver(profileStep1Schema),
  });

  // On Created
  useEffect(() => {
    reset({
      brandText,
      homepageH1Title,
      themeColor,
    });
  }, [authState]);

  const handleFormNext = (data) => {
    dispatch(updateProfileData(data));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleFormNext)}>
      {/* {JSON.stringify(watch())} */}
      <Box className="step1Details">
        <Controller
          name="homepageH1Title"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Home Page Title"
              onChange={onChange}
              value={value}
              variant="outlined"
              error={errors.homepageH1Title}
            />
          )}
        />
        <Typography variant="body2" color="primary">
          {errors.homepageH1Title?.message}
        </Typography>

        <Controller
          name="brandText"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Brand Text"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={errors.brandText}
            />
          )}
        />

        <Typography variant="body2" color="primary">
          {errors.brandText?.message}
        </Typography>

        <Controller
          name="themeColor"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Theme Color"
              variant="outlined"
              onChange={onChange}
              value={value}
              error={errors.themeColor}
            />
          )}
        />

        <Typography variant="body2" color="primary">
          {errors.themeColor?.message}
        </Typography>

        <Box display="flex" gap={5}>
          <Box>
            <Button size="small" variant="contained" component="label">
              Upload favicon
              <input
                name="favicon"
                {...register("favicon")}
                hidden
                accept="image/*"
                type="file"
              />
            </Button>
            <Typography variant="body2" color="primary">
              {errors.favicon?.message}
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" component="label">
              Upload Brand Logo
              <input
                name="brandLogo"
                {...register("brandLogo")}
                hidden
                accept="image/*"
                type="file"
              />
            </Button>
            <Typography variant="body2" color="primary">
              {errors.brandLogo?.message}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Save & Proceed
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;
