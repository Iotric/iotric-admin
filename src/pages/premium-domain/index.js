import React from "react";
import "./index.scss";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const PremiumDomain = () => {
  return (
    <Box>
      <Navbar />
      <Box className="premiumDomain">
        <Sidebar />
        <Box className="premiumDomainContainer">
          <Box className="wrapper">
            <Box className="search-bar">
              <Box className="search">
                <TextField
                  placeholder="type here domain"
                  size="small"
                  vairant="outline"
                />
                <Button variant="contained">Search</Button>
              </Box>
              <Box className="add-button">
                <Button variant="contained">Add New</Button>
              </Box>
            </Box>
            <Typography mt={3} mb={4}>
              RESULT FOR : <span className="bold">Teacher</span>
            </Typography>
            <Box className="buttons-wrapper">
              <Box className="buttons-left">
                <Button variant="contained">All</Button>
                <Button variant="outlined">Available</Button>
              </Box>
              <Box className="buttons-right">
                <Button variant="contained">Add Price</Button>
                <Button variant="contained">Edit Price</Button>
              </Box>
            </Box>

            <Grid className="grid-wrapper" mt={4} container>
              <Grid item xs={6} className="domain-status-box">
                <Box>
                  <Typography>
                    teacher<span className="bold">.com</span>
                  </Typography>
                </Box>
                <Box className="domain-metadata">
                  <Typography>$15.00</Typography>
                  <Button variant="outlined">Reserve</Button>
                </Box>
              </Grid>
              <Grid item xs={6} className="domain-status-box">
                <Box>
                  <Typography>
                    teacher<span className="bold">.com</span>
                  </Typography>
                </Box>
                <Box className="domain-metadata">
                  <Typography>$15.00</Typography>
                  <Button variant="outlined">Reserve</Button>
                </Box>
              </Grid>
              <Grid item xs={6} className="domain-status-box">
                <Box>
                  <Typography>
                    teacher<span className="bold">.com</span>
                  </Typography>
                </Box>
                <Box className="domain-metadata">
                  <Typography>$15.00</Typography>
                  <Button disabled variant="outlined">
                    Unavailable
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumDomain;
