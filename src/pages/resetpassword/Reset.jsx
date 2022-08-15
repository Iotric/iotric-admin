import "./reset.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <Box className="main">
      <Paper className="paper">
        <Link to="/">
          <img className="logo" src={logoImg} alt="company_logo" />
        </Link>
        <Typography ml={1} mt={1} mb={3} component="h2" variant="h5" className="title">
          Forgot Password
        </Typography>
        <Box className="signDetails">
          <TextField required label="Email" variant="outlined" />
        </Box>
        <Box className="bottom">
          <Link to="/login">
            <Typography component="div" variant="h8">
              back to login
            </Typography>
          </Link>
          <Button variant="contained">Continue &rarr;</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Reset;
