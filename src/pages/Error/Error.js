import React from 'react'
import './error.scss'
import { Button, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const Error = () => {
    return (
      <div className="error">
        <div className="error-content">
          <Typography className="error-type" variant="h2" component="div">
            404
          </Typography>
          <Typography className="error-flash" variant="h4" component="div">
            Ohh Snap!!!
          </Typography>
          <p>There was a problem on our end. Please try again later.</p>
          <Link to="/login">
            <Button variant="outlined">&larr; Dashboard</Button>
          </Link>
        </div>
      </div>
    );
}

export default Error
