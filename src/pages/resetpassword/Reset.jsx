import "./reset.scss";
import logoImg from "../../assets/images/logo.png";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="main">
      <Paper className="paper">
        <Link to="/">
          <img className="logo" src={logoImg} alt="company_logo" />
        </Link>
        <Typography my={4} component="h1" variant="h4" className="title">
          Forgot Password
        </Typography>
        <div className="signDetails">
          <TextField required label="Email" variant="outlined" />
        </div>
        <div className="bottom">
          <Link to="/login">
            <Typography component="div" variant="h8">
              back to login
            </Typography>
          </Link>
          <Button variant="contained">Continue &rarr;</Button>
        </div>
      </Paper>
    </div>
  );
};

export default Reset;
