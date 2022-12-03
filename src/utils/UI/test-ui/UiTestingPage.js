import React, { useState } from "react";
import "./index.scss";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import SocialMedia from "../custom-components/SocialMedia";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InstagramIcon } from "../../../assets/images/InstagramIcon.js";
import { ImagePreview } from "../../../assets/images/ImagePreview";

import TestCustomSpinningButton from "./TestCustomSpinningButton";
import TestCustomArrowButton from "./TestCustomArrowButton";
import TestCustomMultilineInput from "./TestCustomMultilineInput";
import TestCustomMultipleInput from "./TestCustomMultipleInput";
import TestCustomCheckbox from "./TestCustomCheckbox";
import TestCustomInputField from "./TestCustomInputField";
import TestCustomRadioButton from "./TestCustomRadioButton";

const UiTestingPage = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("female");

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  return (
    <Paper sx={{ padding: "10px 20px", minHeight: "100vh" }}>
      <Typography variant="h5">I am UI Testing Page</Typography>

      <Stack spacing={4}>
        <Grid container xs={6} spacing={2}>
          <Grid item xs={6}>
            <TestCustomCheckbox
              onChange={() => setChecked((prev) => (prev = !prev))}
              checked={checked}
            >
              Non-fungible tokens (NFTs)
            </TestCustomCheckbox>
          </Grid>
          <Grid item xs={6}>
            <TestCustomCheckbox
              onChange={() => setChecked((prev) => (prev = !prev))}
              checked={checked}
            >
              Money transfer
            </TestCustomCheckbox>
          </Grid>
          <Grid item xs={6}>
            <TestCustomCheckbox
              onChange={() => setChecked((prev) => (prev = !prev))}
              checked={checked}
            >
              Smart contracts
            </TestCustomCheckbox>
          </Grid>
          <Grid item xs={6}>
            <TestCustomCheckbox
              onChange={() => setChecked((prev) => (prev = !prev))}
              checked={checked}
            >
              Internet of Things (IoT)
            </TestCustomCheckbox>
          </Grid>
        </Grid>
        <TestCustomCheckbox
          onChange={() => setChecked((prev) => (prev = !prev))}
          checked={checked}
        >
          Non-fungible tokens (NFTs)
        </TestCustomCheckbox>

        <TestCustomInputField />
        <TestCustomMultilineInput />
        <TestCustomMultipleInput />

        {/* <Box className="container-grid"> */}
        <Grid container xs={6} spacing={2}>
          <Grid item xs={6}>
            <SocialMedia Icon={<TwitterIcon style={{ color: "#00ACEE" }} />}>
              Connect to Twitter
            </SocialMedia>
          </Grid>
          <Grid item xs={6}>
            <SocialMedia Icon={<FacebookIcon style={{ color: "#3B5998" }} />}>
              Connect to Facebook
            </SocialMedia>
          </Grid>
          <Grid item xs={6}>
            <SocialMedia Icon={<LinkedInIcon style={{ color: "#0077B5" }} />}>
              Connect to LinkedIn
            </SocialMedia>
          </Grid>

          <Grid item xs={6}>
            <SocialMedia Icon={<InstagramIcon />}>
              Connect to Instagram
            </SocialMedia>
          </Grid>
        </Grid>
        {/* </Box> */}

        <Grid container xs={6}>
          <Grid item xs={6}>
            <Box p={3} className="logo-upload">
              <Box p={2} className="logo-preview">
                <IconButton>
                  <ImagePreview />
                </IconButton>
              </Box>
              <Button variant="outlined" component="label">
                Browse
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={3} className="logo-upload">
              <Box p={2} className="logo-preview">
                <IconButton>
                  <ImagePreview />
                </IconButton>
              </Box>
              <Button variant="outlined" component="label">
                Browse
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <FormControl>
          <RadioGroup onChange={handleRadioChange} value={radioValue}>
            <Grid container xs={6} spacing={2}>
              <Grid item xs={6}>
                <TestCustomRadioButton
                  value="Etherium"
                  selectedItem={radioValue}
                >
                  Etherium
                </TestCustomRadioButton>
              </Grid>
              <Grid item xs={6}>
                <TestCustomRadioButton value="Xinfin" selectedItem={radioValue}>
                  Xinfin
                </TestCustomRadioButton>
              </Grid>
              <Grid item xs={6}>
                <TestCustomRadioButton
                  value="Polygon"
                  selectedItem={radioValue}
                >
                  Polygon
                </TestCustomRadioButton>
              </Grid>
              <Grid item xs={6}>
                <TestCustomRadioButton value="Other" selectedItem={radioValue}>
                  Other
                </TestCustomRadioButton>
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <TestCustomSpinningButton loading={true}>
          Loading
        </TestCustomSpinningButton>
        <TestCustomSpinningButton>Create your account</TestCustomSpinningButton>
        <TestCustomArrowButton>Next Step</TestCustomArrowButton>
        <Button variant="text">text </Button>
      </Stack>
    </Paper>
  );
};

export default UiTestingPage;
