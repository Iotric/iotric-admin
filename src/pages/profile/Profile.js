import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";

import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Switch,
} from "@mui/material";

const Profile = () => {
  const [data, setData] = useState({
    tlds: "",
    socialMedia: "",
    favicon: "",
    themeColor: "",
    restrictedSignup: false,
    allowedEmailType: "",
    domainLimit: 0,
  });


  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <Box className="main-profile">
          {/* {JSON.stringify(data)} */}
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
                <TextField
                  name="tlds"
                  value={data.tlds}
                  onChange={handleChange}
                  required
                  label="Tlds"
                  variant="outlined"
                />
                <TextField
                  name="socialMedia"
                  value={data.socialMedia}
                  onChange={handleChange}
                  required
                  label="Social Media"
                  variant="outlined"
                />
                <Box display="flex" gap={5}>
                  <Button size="small" variant="contained" component="label">
                    Upload Favicon
                    <input
                      name="favicon"
                      value={data.favicon}
                      onChange={handleChange}
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                    />
                  </Button>
                  <TextField
                    name="themeColor"
                    value={data.themeColor}
                    onChange={handleChange}
                    required
                    label="Theme Color"
                    variant="outlined"
                  />
                </Box>

                <TextField
                  name="allowedEmailType"
                  value={data.allowedEmailType}
                  onChange={handleChange}
                  required
                  label="Allowed Email Type"
                  variant="outlined"
                />
                <Box display="flex" gap={5}>
                  <Box>
                    <Typography component="h6" variant="h6">
                      Restricted Signup
                    </Typography>

                    <Switch
                      name="restrictedSignup"
                      checked={data.restrictedSignup}
                      onChange={handleChange}
                      on 
                    />
                  </Box>

                  <TextField
                    name="domainLimit"
                    value={data.domainLimit}
                    onChange={handleChange}
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
