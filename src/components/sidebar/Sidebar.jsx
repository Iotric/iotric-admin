import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { Box } from "@mui/material";
import nexBlocLogo from "../../assets/images/logo.png";
import { authActions } from "../../redux/slice/auth-slice";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <Box p={2} className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={nexBlocLogo} alt="company_logo" />
        </Link>
      </Box>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/dashboard/credentials" style={{ textDecoration: "none" }}>
            <li>
              <KeyIcon className="icon" />
              <span>Api Keys</span>
            </li>
          </Link>
          <Link to="/dashboard/admins" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          {/* <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
