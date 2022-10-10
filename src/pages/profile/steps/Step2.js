import React, { useState } from "react";
import { TextField, Checkbox, Box, Typography } from "@mui/material";
import "./step2.scss";

const Step2 = () => {
  const [data, setData] = useState({
    SocialMedia: "",
    Tlds: "",
    RestrictedSignup: false,
    AllowedEmailType: "",
    DomainLimit: 1000,
    Deafult2Fa: false,
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
    <Box className="step2Details">
      <TextField
        name="Tlds"
        value={data.Tlds}
        onChange={handleChange}
        required
        label="Tlds"
        variant="outlined"
      />

      <TextField
        name="SocialMedia"
        value={data.SocialMedia}
        onChange={handleChange}
        required
        label="Social Media"
        variant="outlined"
      />

      <TextField
        name="AllowedEmailType"
        value={data.AllowedEmailType}
        onChange={handleChange}
        required
        label="Allowed Email Type"
        variant="outlined"
      />

      <TextField
        name="DomainLimit"
        value={data.DomainLimit}
        onChange={handleChange}
        required
        type="number"
        label="Domain Limit"
        variant="outlined"
      />
      <Box display="flex" gap={5}>
        <Box display="flex" alignItems="center">
          <Checkbox
            name="RestrictedSignup"
            checked={data.RestrictedSignup}
            onChange={handleChange}
          />
          <Typography component="p" variant="body1">
            Restricted Signup
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox
            name="Deafult2Fa"
            checked={data.Deafult2Fa}
            onChange={handleChange}
          />
          <Typography display="flex" alignItems="center">
            Deafult2Fa
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Step2;
