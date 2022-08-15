import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

const Home = () => {
    return (
      <Box className="nav">
        <Link to="/dashboard">
          <Typography>Dashboard</Typography>
        </Link>
        <Link to="/login">
          <Typography>Login</Typography>
        </Link>
        <Link to="/register">
          <Typography>Register</Typography>
        </Link>
      </Box>
    );
}

export default Home
