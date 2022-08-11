import "./reset.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography } from "@mui/material";

const Reset = () => {
  return (
    <div className="main">
      <Paper className="paper">
        <img className="logo" src={logoImg} alt="company_logo" />
        <Typography my={4} component="h1" variant="h4" className="title">
          Forgot Password
        </Typography>
        <div className="signDetails">
          <TextField required label="Email" variant="outlined" />
        </div>
        <div className="bottom">
          <Typography component="div" variant="h8">
            back to login
          </Typography>
          <Button variant="contained">Sign In</Button>
        </div>
      </Paper>
    </div>
  );
};

export default Reset;
