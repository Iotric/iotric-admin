import "./reset.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <Box className="reset">
      <Paper className="paper">
        {/* <Link to="/">
          <img className="logo" src={logoImg} alt="company_logo" />
        </Link> */}
        <Typography mt={1} mb={4} component="h2" variant="h5" className="title">
          Forgot Password
        </Typography>
        <Box className="signDetails">
          <TextField
            size="small"
            placeholder="Enter your email"
            required
            label="Email"
            variant="outlined"
          />
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
