import React from "react";
import "./step1.scss";

import { TextField, Button, Typography, Box, Checkbox } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep1Schema } from "../../../utils/validations/";

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      BrandText: "",
      BrandLogo: "",
      Favicon: "",
      ThemeColor: "",
      PrimaryAdmin: false,
      HomePageH1: "",
    },
    resolver: yupResolver(profileStep1Schema),
  });

  const handleDummySubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleDummySubmit)}
      className="step1Details"
    >
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

      <Box display="flex" alignItems="center">
        <Checkbox name="PrimaryAdmin" {...register("PrimaryAdmin")} />
        <Typography component="p" variant="body1">
          Primary Admin
        </Typography>
      </Box>
      <Typography variant="body2" color="primary">
        {errors.PrimaryAdmin?.message}
      </Typography>

      <Button type="submit">dummy button</Button>
    </Box>
  );
};

export default Step1;
