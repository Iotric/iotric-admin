import React from "react";
import "./modal.scss";

import {
  Modal,
  Box,
  Typography,
  TextField,
  Paper,
  IconButton,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { CustomInputField } from "../../utils/UI/components";

const CustomModal = ({
  Icon,
  placeholder,
  openModal,
  handleModalClose,
  control,
  name
}) => {
  return (
    <Modal
      className="modal"
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper className="modal-paper">
        <Box className="modal-header">
          <Typography ml={7} variant="h6" align="center">
            Enter your Social Profile URL
          </Typography>
          <IconButton onClick={handleModalClose}>
            <CancelIcon />
          </IconButton>
        </Box>
        <Box mt={3} className="modal-input">
          <Box mt={3}>{Icon}</Box>

          <CustomInputField
            control={control}
            name={name}
            sx={{ width: "100%" }}
            size="small"
            placeholder={placeholder}
          />
        </Box>
      </Paper>
    </Modal>
  );
};

export default CustomModal;
