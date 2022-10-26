import React from "react";
import "./step1.scss";

import { TextField, Button, Typography, Box, Checkbox } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep1Schema } from "../../../utils/validations/";

import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";

const Step1 = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      BrandText: "iotric",
      BrandLogo: "",
      Favicon: "",
      ThemeColor: "blue",
      PrimaryAdmin: false,
      HomePageH1: "welcome to iotric",
    },
    resolver: yupResolver(profileStep1Schema),
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(() => dispatch(authActions.handleNext()))}
    >
      <Box className="step1Details">
        <TextField
          name="HomePageH1"
          {...register("HomePageH1")}
          label="Home Page Title"
          variant="outlined"
        />
        <Typography variant="body2" color="primary">
          {errors.HomePageH1?.message}
        </Typography>

        <TextField
          name="BrandText"
          {...register("BrandText")}
          label="Brand Text"
          variant="outlined"
        />
        <Typography variant="body2" color="primary">
          {errors.BrandText?.message}
        </Typography>

        <TextField
          name="ThemeColor"
          {...register("ThemeColor")}
          label="Theme Color"
          variant="outlined"
        />
        <Typography variant="body2" color="primary">
          {errors.ThemeColor?.message}
        </Typography>

        <Box display="flex" gap={5}>
          <Box>
            <Button size="small" variant="contained" component="label">
              Upload Favicon
              <input
                name="Favicon"
                {...register("Favicon")}
                hidden
                accept="image/*"
                multiple
                type="file"
              />
            </Button>
            <Typography variant="body2" color="primary">
              {errors.Favicon?.message}
            </Typography>
          </Box>
          <Box>
            <Button size="small" variant="contained" component="label">
              Upload Brand Logo
              <input
                name="BrandLogo"
                {...register("BrandLogo")}
                hidden
                accept="image/*"
                multiple
                type="file"
              />
            </Button>
            <Typography variant="body2" color="primary">
              {errors.BrandLogo?.message}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Step1;
