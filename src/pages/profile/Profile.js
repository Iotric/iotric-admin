import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";

import { Paper, TextField, Button, Typography, Box, Switch  } from "@mui/material";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <Box className="main">
          <Box className="login-card">
            <Paper className="paper">
              <Typography
                ml={1}
                mt={1}
                mb={5}
                component="h2"
                variant="h5"
                className="title"
              >
                Onboarding
              </Typography>
              <Box className="profileDetails">
                <TextField required label="Enterprise ID" variant="outlined" />
                <Box display="flex" gap={5}>
                  <Button size="small" variant="contained" component="label">
                    Upload Favicon
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <TextField required label="Theme Color" variant="outlined" />
                </Box>
                <TextField required label="Social Media" variant="outlined" />
                <TextField required label="Tlds" variant="outlined" />
                <TextField
                  required
                  label="Allowed Email Type"
                  variant="outlined"
                />
                <Box display="flex" gap={5}>
                  <Box>
                    <Typography component="h6" variant="h6">Restricted Signup</Typography>

                    <Switch />
                  </Box>

                  <TextField
                    required
                    type="number"
                    label="Domain Limit"
                    variant="outlined"
                  />
                </Box>

                <Button variant="contained">Proceed</Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
