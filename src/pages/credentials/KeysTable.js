import React, { useState, useEffect } from "react";
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

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./keystable.scss";

import { useDispatch, useSelector } from "react-redux";
import { keyActions } from "../../redux/slice/key-slice.js";
import {
  generateAndRegenerateKeysAction,
  fetchApiKeys,
  softDeleteKey,
} from "../../redux/actions/key-actions.js";

const KeysTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const isTestMode = useSelector((store) => store.key.isTestMode);
  const isKeyLoading = useSelector((store) => store.key.isKeyLoading);
  const user = useSelector((store) => store.key.user);
  const showCredentials = useSelector((store) => store.key.showCredentials);

  const toggleCredentials = () => {
    dispatch(keyActions.toggleCredentials());
    // setTimeout(() => {
    //   dispatch(keyActions.setKeyLoadingFalse());
    // }, 1000);
  };

  useEffect(() => {
    dispatch(fetchApiKeys());
  }, []);

  const generateAndRegenerateKeys = () => {
    dispatch(generateAndRegenerateKeysAction());
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      console.log(err);
    }
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
                      >
                        Generate Test Key
                      </Button>
                    ) : (
                      <Box display="flex" gap="7px" alignItems="center">
                        <div>
                          {showCredentials ? (
                            user.testApplicationKey.key
                          ) : (
                            <div className="bg-blur"></div>
                          )}
                        </div>

                        <IconButton onClick={toggleCredentials}>
                          {showCredentials ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </Box>
                    )
                  ) : user.liveApplicationKey === null ? (
                    <Button
                      onClick={generateAndRegenerateKeys}
                      variant="contained"
                      size="small"
                    >
                      Generate Live Key
                    </Button>
                  ) : (
                    <Box display="flex" gap="7px" alignItems="center">
                      <div>
                        {showCredentials ? (
                          user.liveApplicationKey.key
                        ) : (
                          <div className="bg-blur"></div>
                        )}
                      </div>

                      <IconButton onClick={toggleCredentials}>
                        {showCredentials ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </Box>
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
                    <MenuItem onClick={() => dispatch(softDeleteKey())}>
                      Delete
                    </MenuItem>
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
