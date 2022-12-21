import React from "react";
import "./index.scss";
import {
  Typography,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DomainSettings = () => {
  return (
    <Box>
      <Navbar />
      <Box className="domainSettings">
        <Sidebar />
        <Box className="domainSettingsContainer">
          <Box className="wrapper">
            <Box className="top-header">
              <Typography variant="h5" fontWeight="700">
                Top-Level Domains
              </Typography>
              <Button variant="contained">Add New</Button>
            </Box>
            <Grid mt={3} container spacing={2}>
              <Grid item xs={6}>
                <Accordion
                // key={`KEY_${item_index}`}
                // expanded={expanded === `Key_${item_index}`}
                // onChange={handleChange(`Key_${item_index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      teacher<span className="bold">.com</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>hello</AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={6}>
                <Accordion
                // key={`KEY_${item_index}`}
                // expanded={expanded === `Key_${item_index}`}
                // onChange={handleChange(`Key_${item_index}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      teacher<span className="bold">.com</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>hello</AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DomainSettings;
