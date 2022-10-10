import React, { useState } from "react";
import "./step1.scss";

import {
  TextField,
  Button,
  Typography,
  Box,
  Checkbox,
} from "@mui/material";

const Step1 = () => {
  const [data, setData] = useState({
    BrandText: "",
    BrandLogo: "",
    Favicon: "",
    ThemeColor: "",
    PrimaryAdmin: false,
    HomePageH1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Box className="step1Details">
      <TextField
        name="HomePageH1"
        value={data.HomePageH1}
        onChange={handleChange}
        required
        label="Home Page Title"
        variant="outlined"
      />

      <TextField
        name="BrandText"
        value={data.BrandText}
        onChange={handleChange}
        required
        label="Brand Text"
        variant="outlined"
      />

      <TextField
        name="ThemeColor"
        value={data.ThemeColor}
        onChange={handleChange}
        required
        label="Theme Color"
        variant="outlined"
      />

      <Box display="flex" gap={5}>
        <Button size="small" variant="contained" component="label">
          Upload Favicon
          <input
            name="Favicon"
            value={data.Favicon}
            onChange={handleChange}
            hidden
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
        <Button size="small" variant="contained" component="label">
          Upload Brand Logo
          <input
            name="BrandLogo"
            value={data.BrandLogo}
            onChange={handleChange}
            hidden
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
      </Box>

      <Box display="flex" alignItems="center">
        <Checkbox
          name="PrimaryAdmin"
          checked={data.PrimaryAdmin}
          onChange={handleChange}
        />
        <Typography component="body1" variant="body1">
          Primary Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default Step1;
