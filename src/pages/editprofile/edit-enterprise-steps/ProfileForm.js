import React, { useEffect, useState } from "react";
import "./profile.scss";

import { TextField, Button, Typography, Box } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep1Schema } from "../../../utils/validations";

import { useDispatch, useSelector } from "react-redux";

import { updateProfileData } from "../../../redux/actions/auth-actions";
import { authActions } from "../../../redux/slice/auth-slice";

import { MuiColorInput } from "mui-color-input";
import { errorHandler } from "../error-handler";

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
      favicon: null,
      brandLogo: null,
    },
    resolver: yupResolver(profileStep1Schema),
  });

  const watchFavicon = watch("favicon");
  const watchBrandLogo = watch("brandLogo");

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
        <Box>
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
          {errorHandler(errors, "homepageH1Title")}
        </Box>

        <Box>
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
          {errorHandler(errors, "brandText")}
        </Box>

        <Box>
          <Controller
            name="themeColor"
            control={control}
            render={({ field: { value, onChange } }) => (
              <MuiColorInput
                format="hex"
                label="Theme Color"
                onChange={onChange}
                value={value}
                error={errors.themeColor}
              />
            )}
          />
          {errorHandler(errors, "themeColor")}
        </Box>

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
              {watchFavicon && watchFavicon.length > 0
                ? watchFavicon[0].name
                : null}
            </Typography>
            {errorHandler(errors, "favicon")}
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
              {watchBrandLogo && watchBrandLogo.length > 0
                ? watchBrandLogo[0].name
                : null}
            </Typography>
            {errorHandler(errors, "brandLogo")}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Save & Proceed
        </Button>
        <Button
          onClick={() => dispatch(authActions.handleNext())}
          sx={{ mt: 1, ml: 1 }}
        >
          Skip
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;
