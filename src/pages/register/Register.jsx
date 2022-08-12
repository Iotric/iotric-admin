import "./register.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="main">
      <Paper className="paper">
        <Link to="/">
          <img className="logo" src={logoImg} alt="company_logo" />
        </Link>
        <Typography my={4} component="h1" variant="h4" className="title">
          Create your account
        </Typography>
        <div className="signDetails">
          <TextField required label="Full Name" variant="outlined" />
          <TextField required label="Email" variant="outlined" />
          <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            required
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
          <Button variant="contained">Continue</Button>
        </div>
        <div className="bottom">
          <Link to="/login">
            <Typography component="div" variant="h8">
              Already have an account? Login
            </Typography>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Register;
