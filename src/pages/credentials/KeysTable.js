import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button, Typography } from "@mui/material";

import "./keystable.scss";

const KeysTable = ({ isTestMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [showCredentials, setShowCredentials] = useState(false);
  const [isKeyLoading, setIsKeyLoading] = useState(false);
  const [user, setUser] = useState({
    testApplicationKey: null,
    liveApplicationKey: null,
  });

  const open = Boolean(anchorEl);

  const toggleCredentials = () => {
    setShowCredentials((prev) => !prev);
    setIsKeyLoading(true);

    setTimeout(() => {
      setIsKeyLoading(false);
    }, 1000);
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      console.log(err);
    }
  };

  const generateAndRegenerateKeys = () => {
    setIsKeyLoading(true);
    setTimeout(() => {
      setIsKeyLoading(false);
      if (isTestMode) {
        setUser((prev) => ({
          ...prev,
          testApplicationKey: "sfvbjsbvfuysbgf875ty87354y38",
        }));
      } else {
        setUser((prev) => ({
          ...prev,
          liveApplicationKey: "uhsgbsjgreruigb48745yt84y7thjebej",
        }));
      }
    }, 2000);
    setShowCredentials(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
      <Box className="table-head">
        <Typography component="h2" variant="h6">
          Standard KEYS
        </Typography>
        <Typography
          className="table-head-para"
          component="p"
          variant="subtitle1"
        >
          These Keys will allow you to authenticate API requests.
          <span>Learn more</span>
        </Typography>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Token</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isKeyLoading ? (
            <TableRow>
              <TableCell colSpan="3" style={{ textAlign: "center" }}>
                <CircularProgress disableShrink size={40} value={100} />
              </TableCell>
            </TableRow>
          ) : (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Secret Key
              </TableCell>
              <TableCell align="left">
                <Box className="token-col">
                  {isTestMode ? (
                    user.testApplicationKey === null ? (
                      <Button
                        onClick={generateAndRegenerateKeys}
                        variant="contained"
                        size="small"
                        color="success"
                      >
                        Generate Test Key
                      </Button>
                    ) : showCredentials ? (
                      <Tooltip title="Click to copy">
                        <Box>
                          <Box
                            onCick={copyToClipBoard(user.testApplicationKey)}
                          >
                            {user.testApplicationKey}
                          </Box>
                          <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={toggleCredentials}
                          >
                            Hide Test key
                          </Button>
                        </Box>
                      </Tooltip>
                    ) : (
                      <div className="bg-blur">
                        <div className="bg-blur-btn">
                          <Button
                            onClick={toggleCredentials}
                            size="small"
                            variant="contained"
                            color="error"
                          >
                            Reveal test key
                          </Button>
                        </div>
                      </div>
                    )
                  ) : user.liveApplicationKey === null ? (
                    <Button
                      onClick={generateAndRegenerateKeys}
                      variant="contained"
                      size="small"
                      color="success"
                    >
                      Generate Live Key
                    </Button>
                  ) : showCredentials ? (
                    <Tooltip title="Click to copy">
                      <Box>
                        <Box>{user.liveApplicationKey}</Box>
                        <Button
                          onClick={toggleCredentials}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          Hide Live key
                        </Button>
                      </Box>
                    </Tooltip>
                  ) : (
                    <div className="bg-blur">
                      <div className="bg-blur-btn">
                        <Button
                          onClick={toggleCredentials}
                          size="small"
                          variant="contained"
                          color="error"
                        >
                          Reveal Live key
                        </Button>
                      </div>
                    </div>
                  )}
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box className="token-menu">
                  <IconButton onClick={handleClick}>
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={generateAndRegenerateKeys}>
                      Regenerate
                    </MenuItem>
                    <MenuItem>View Logs</MenuItem>
                  </Menu>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeysTable;
