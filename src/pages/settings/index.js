import React, { useEffect } from "react";
import "./index.scss";
import { Typography, Box, IconButton, Button, Divider } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MuiColorInput } from "mui-color-input";

import { profileStep1Schema } from "../../utils/validations";
import { errorHandler } from "../../utils/error-handler";
import { ImagePreview } from "../../assets/images/ImagePreview";

const Settings = () => {
  const dispatch = useDispatch();

  // authState
  const authState = useSelector((state) => state.auth);
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
      themePrimaryColor,
      themeSecondaryColor,
    });
  }, [authState]);

  return (
    <Box>
      <Navbar />
      <Box className="settings">
        <Sidebar />
        <Box className="settingsContainer">
          <Box className="wrapper">
            <Box className="brand-logo-wrapper" px={3} py={3}>
              <Box>
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
              </Box>

              <Box>
                <Typography variant="body2">FAV Icon</Typography>

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
              </Box>
            </Box>

            <Box className="brand-colors">
              <Typography variant="body1">Brand Colors</Typography>
              <Box className="brand-colors-box">
                <Box display="flex" gap="12px" alignItems="center" ml={3}>
                  <Typography mt="20px">Primary Color</Typography>
                  <Controller
                    name="themePrimaryColor"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <MuiColorInput
                        format="hex"
                        size="small"
                        onChange={onChange}
                        value={value}
                        error={errors.themePrimaryColor}
                      />
                    )}
                  />
                  {errorHandler(errors, "themePrimaryColor")}
                </Box>

                <Divider
                  className="divider"
                  orientation="vertical"
                  flexItem
                ></Divider>

                <Box px="20px" gap="12px" display="flex" alignItems="center">
                  <Typography mt="20px">Secondary Color</Typography>

                  <Controller
                    name="themeSecondaryColor"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <MuiColorInput
                        format="hex"
                        size="small"
                        onChange={onChange}
                        value={value}
                        error={errors.themeSecondaryColor}
                      />
                    )}
                  />
                  {errorHandler(errors, "themeSecondaryColor")}
                </Box>
              </Box>
            </Box>
            <Box className="save-button" mt={5}>
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
