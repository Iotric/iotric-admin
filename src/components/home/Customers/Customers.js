import React from "react";
import "./customers.scss";

import faberImg from "../../../assets/images/customers/faber.png";
import protocolImg from "../../../assets/images/customers/Protocol_Labs_black.png";
import fileCoinImg from "../../../assets/images/customers/Filecoin-logo-blueblack.png";
import hederaImg from "../../../assets/images/customers/hedera-hashgraph-hbar-black-logo.png";
import xinFinImg from "../../../assets/images/customers/XinFin.png";
import platoImg from "../../../assets/images/customers/plato.png";
import ineryImg from "../../../assets/images/customers/inery.png";

import { Box, Typography } from "@mui/material";

const Customers = () => {
  return (
    <>
      <Box id="customers" className="customers">
        <Typography align="center" variant="h3">
          Our Customers
        </Typography>
        <Box className="customers-container">
          <Box className="customers-flexbox">
            <Box className="customer-item">
              <img src={faberImg} alt="faber" />
            </Box>
            <Box className="customer-item">
              <img src={protocolImg} alt="faber" />
            </Box>
            <Box className="customer-item">
              <img src={fileCoinImg} alt="faber" />
            </Box>
            <Box className="customer-item">
              <img src={hederaImg} alt="faber" />
            </Box>
            <Box className="customer-item">
              <img src={xinFinImg} alt="faber" />
            </Box>
            <Box className="customer-item">
              <img src={platoImg} alt="faber" />
            </Box>
            <Box mt={13} className="customer-item">
              <img src={ineryImg} alt="faber" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Customers;
