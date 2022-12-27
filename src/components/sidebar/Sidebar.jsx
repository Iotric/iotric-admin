import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from "@mui/icons-material/Key";
import PeopleIcon from "@mui/icons-material/People";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { NavLink, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { Box, Typography } from "@mui/material";
import nexBlocLogo from "../../assets/images/logo.png";
import { authActions } from "../../redux/slice/auth-slice";

import DiamondIcon from "@mui/icons-material/Diamond";
import PublicIcon from "@mui/icons-material/Public";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <li>
            <NavLink
              to="/dashboard"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
              end={true}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          {/* <p className="title">LISTS</p> */}
          <li>
            <NavLink
              to="/dashboard/credentials"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
            >
              <KeyIcon className="icon" />
              <span>Api Keys</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/admins"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
            >
              <PeopleIcon className="icon" />
              <span>Admins</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/premium-domain"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
            >
              <DiamondIcon className="icon" />
              <span>Premium Domain</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/domain-settings"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
            >
              <PublicIcon className="icon" />
              <span>Domain Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              style={({ isActive }) =>
                isActive ? { borderLeft: "5px solid white" } : undefined
              }
            >
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </NavLink>
          </li>
          {/* <p className="title">USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
        </ul>
        {/* <Box p={2} className="top">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img className="logo" src={nexBlocLogo} alt="company_logo" />
          </NavLink>
        </Box>
        <hr /> */}
      </div>
    </div>
  );
};

export default Sidebar;
