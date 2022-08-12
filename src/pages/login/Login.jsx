import "./login.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <Paper className="paper">
        <Link to="/">
          <img className="logo" src={logoImg} alt="company_logo" />
        </Link>

        <Typography my={4} component="h1" variant="h4" className="title">
          Sign in to your account
        </Typography>
        <div className="signDetails">
          <TextField required label="Email" variant="outlined" />
          <TextField
            required
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button variant="contained">Sign In</Button>
        </div>
        <div className="bottom">
          <Link to="/reset">
            <Typography component="div" variant="h8">
              forgot password ?
            </Typography>
          </Link>
          <Link to="/register">
            <Typography component="div" variant="h8">
              Don't have an Account? Signup
            </Typography>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
