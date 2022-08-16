import React from 'react'
import './credentials.scss'

import { Box, Typography, Paper, Switch } from "@mui/material"
import Sidebar from '../../components/sidebar/Sidebar'
import KeysTable from './KeysTable'

const Credentials = () => {
    return (
      <Box className="credentials">
        <Sidebar />
        <Box className="credentials-container">
          <Typography component="h2" variant="h4">
            API KEYS
          </Typography>
          <Paper className="switch-paper">
            <Typography>
              Viewing Test API keys. Toogle to view live keys
            </Typography>
            <Switch></Switch>
          </Paper>
          <KeysTable />
        </Box>
      </Box>
    );
}

export default Credentials
