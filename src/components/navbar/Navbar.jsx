import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { IconButton, Box, Typography, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../redux/slice/dashboard-slice";

import brandLogo from "../../assets/images/brandLogo.svg";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  const dispatch = useDispatch();

  // authState
  const authState = useSelector((store) => store.auth);
  const firstName = authState.firstName;
  const lastName = authState.lastName;

  return (
    <div className="navbar">
      <Box className="navbar-welcome">
        <Box py={2} pl={3} className="brand-logo">
          <img src={brandLogo} alt="brand" />
        </Box>
        <Box className="brand-texts">
          <Typography variant="h6" fontWeight="700">
            Good Morning {firstName} {lastName}
          </Typography>
          <Typography variant="body1">It's great to see you again</Typography>
        </Box>
      </Box>

      <Divider />

      <Box className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <IconButton
              onClick={() => dispatch(dashboardActions.toggleDrawer())}
            >
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </IconButton>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
