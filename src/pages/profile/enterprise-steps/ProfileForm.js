import React, { useEffect, useState } from "react";
import "./profile.scss";

import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  IconButton,
  Container,
  Paper,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep1Schema } from "../../../utils/validations";

import { useDispatch, useSelector } from "react-redux";

import { updateProfileData } from "../../../redux/actions/auth-actions";
import { authActions } from "../../../redux/slice/auth-slice";

import { MuiColorInput } from "mui-color-input";
import { errorHandler } from "../../../utils/error-handler";
import { ImagePreview } from "../../../assets/images/ImagePreview";
import {
  CustomArrowButton,
  CustomMultilineInput,
} from "../../../utils/UI/components";

const Step1 = () => {
  const dispatch = useDispatch();

  // authState
  const authState = useSelector((state) => state.auth);
  const brandText = authState.brandText;
  const homepageH1Title = authState.homepageH1Title;
  const themePrimaryColor = authState.themePrimaryColor;
  const themeSecondaryColor = authState.themeSecondaryColor;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
  } = useForm({
    defaultValues: {
      brandText: "",
      homepageH1Title: "",
      themePrimaryColor: "#000000",
      themeSecondaryColor: "#000000",
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
      themePrimaryColor,
      themeSecondaryColor,
    });
  }, [authState]);

  const handleFormNext = (data) => {
    dispatch(updateProfileData(data));
    dispatch(authActions.handleNext());
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper elevation={2} sx={{ my: { xs: 3, md: 4 }, p: { xs: 3, md: 3 } }}>
        <Typography mb={1} fontWeight="500" align="center" variant="h5">
          Basic Info
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleFormNext)}>
          {/* {JSON.stringify(watch())} */}
          <Grid container>
            <Grid item xs={6}>
              <Box className="step1Details">
                <Box>
                  <Controller
                    name="homepageH1Title"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        label="Home Page Title"
                        size="small"
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
                        size="small"
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
                  <CustomMultilineInput
                    name="description"
                    label="Description"
                    control={control}
                  >
                    Description
                  </CustomMultilineInput>
                </Box>
              </Box>
            </Grid>
            <Grid px={3} py={1} item xs={6}>
              <Typography variant="body1">Platform logo</Typography>
              <Box p={3} className="logo-upload">
                <Box p={2} className="logo-preview">
                  <IconButton>
                    <ImagePreview />
                  </IconButton>
                </Box>
                <Button variant="outlined" component="label">
                  Browse
                  <input
                    name="brandLogo"
                    {...register("brandLogo")}
                    hidden
                    accept="image/*"
                    type="file"
                  />
                </Button>
              </Box>
              <Typography variant="body1" color="primary">
                {watchBrandLogo && watchBrandLogo.length > 0
                  ? watchBrandLogo[0].name
                  : null}
              </Typography>
              {errorHandler(errors, "brandLogo")}
              <Typography mt={2} variant="body2">
                FAV Icon
              </Typography>

              <Box p={3} className="logo-upload">
                <Box p={2} className="logo-preview">
                  <IconButton>
                    <ImagePreview />
                  </IconButton>
                </Box>
                <Button variant="outlined" component="label">
                  Browse
                  <input
                    name="favicon"
                    {...register("favicon")}
                    hidden
                    accept="image/*"
                    type="file"
                  />
                </Button>
              </Box>
              <Typography variant="body2" color="primary">
                {watchFavicon && watchFavicon.length > 0
                  ? watchFavicon[0].name
                  : null}
              </Typography>
              {errorHandler(errors, "favicon")}
            </Grid>
          </Grid>
          <Typography px="20px" variant="body1">
            Brand Colors
          </Typography>

          <Grid container p="20px">
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Primary Color</Typography>
                <Controller
                  name="themePrimaryColor"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <MuiColorInput
                      format="hex"
                      label="Hex"
                      size="small"
                      onChange={onChange}
                      value={value}
                      error={errors.themePrimaryColor}
                    />
                  )}
                />
                {errorHandler(errors, "themePrimaryColor")}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                px="20px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Secondary Color</Typography>

                <Controller
                  name="themeSecondaryColor"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <MuiColorInput
                      format="hex"
                      label="Hex"
                      size="small"
                      onChange={onChange}
                      value={value}
                      error={errors.themeSecondaryColor}
                    />
                  )}
                />
                {errorHandler(errors, "themeSecondaryColor")}
              </Box>
            </Grid>
          </Grid>

          <Box mt={2} display="flex" justifyContent="center">
            <Button type="submit">Save & Proceed</Button>
            <CustomArrowButton
              onClick={() => dispatch(authActions.handleNext())}
            >
              Next Step
            </CustomArrowButton>
            <Button onClick={() => dispatch(authActions.handleBack())}>
              Back
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Step1;
