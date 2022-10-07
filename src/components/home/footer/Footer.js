import React from "react";
import "./footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Container, Grid, Typography, Link, Box } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https:nexbloc.com">
        NexBloc
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Container
      className="footer"
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [4, 6],
      }}
    >
      <Grid py={5} container spacing={4} justifyContent="space-evenly">
        <Grid item xs={6} sm={4}>
          <Typography mx={3} variant="h5" color="text.primary" gutterBottom>
            About NexBloC
          </Typography>
          <Typography mt={3} mx={3} variant="body1" color="text.primary" gutterBottom>
            NexBloc is building the next generation of the internet with
            blockchain DNS at the core. Blockchain digital entities tied to the
            decentralized web is the future of personal data protection and use.
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography mx={3} variant="h5" color="text.primary" gutterBottom>
            Resources
          </Typography>
          <Box mt={3}>
            <ul>
              <li>
                <Link
                  className="footer-items"
                  href="#"
                  variant="subtitle1"
                  color="text.primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="footer-items"
                  href="#"
                  variant="subtitle1"
                  color="text.primary"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography mx={3} variant="h5" color="text.primary" gutterBottom>
            We’d love to hear from you
          </Typography>
          <Box mt={3} mx={3} gap={1} display="flex">
            <TwitterIcon />
            <TelegramIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
          <Typography
            my={2}
            mx={3}
            variant="body1"
            color="text.primary"
            gutterBottom
          >
            contact@nexbloc.com
          </Typography>
          <Typography mx={3} variant="body1" color="text.primary" gutterBottom>
            (+1) 888-639-9321
          </Typography>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footer;
