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
import { Box, Button, Typography } from "@mui/material";

import "./keystable.scss";

const rows = [
  {
    name: "SECRET KEY",
    token: "surgfgeuyygt87y398r8y3utygfhkugherufwgrwofh",
  },
  {
    name: "SECRET KEY",
    token: "jshdfyshygfwreiuwfjwbfgujfehwegfbwrjgb",
  },
];

const KeysTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
          component="paragraph"
          variant="subtitle1"
        >
          These Keys will allow you to authenticate API requests.{" "}
          <span>Learn more</span>
        </Typography>
      </Box>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Token</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                <Box className="token-col">
                  <Box>
                    <Box>{row.token}</Box>
                    <Button variant="contained" size="small" color="error">
                      Hide Test key
                    </Button>
                  </Box>
                  <Box className="token-menu">
                    <IconButton onClick={handleClick}>
                      <MoreHorizIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem>Regenerate</MenuItem>
                      <MenuItem>View Logs</MenuItem>
                    </Menu>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeysTable;
