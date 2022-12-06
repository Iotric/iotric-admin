import React, { useEffect } from "react";
import "./industry.scss";

import { Box, Grid, Typography, Container, Paper } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";

import {
  CustomCheckbox,
  CustomArrowButton,
} from "../../../utils/UI/components";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";

const IndustoryTypeForm = () => {
  const dispatch = useDispatch();

  // authState
  const authState = useSelector((store) => store.auth);
  const industryType = authState.industryType;

  const { control, watch, handleSubmit , reset} = useForm({
    defaultValues: {
      industryType: {
        nfts: false,
        moneyTransfer: true,
        smartContracts: false,
        iot: false,
        personalIdentitySecurity: false,
        healthcare: false,
        logistics: false,
        government: false,
      },
    },
  });

  // On Created
  useEffect(() => {
    reset({
      industryType
    });
  }, [authState]);

  const handleFormNext = (data) => {
    dispatch(authActions.setIndustryType(data));
    dispatch(authActions.handleNext());
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper elevation={2} sx={{ my: { xs: 3, md: 10 }, p: { xs: 3, md: 5 } }}>
        <Box component="form" onSubmit={handleSubmit(handleFormNext)}>
          {/* {JSON.stringify(watch())} */}
          <Typography fontWeight="500" align="center" variant="h5">
            What is your industry type?
          </Typography>
          <Grid mt={3} mb={4} container spacing={2}>
            <Grid item xs={6}>
              <CustomCheckbox name={`industryType.nfts`} control={control}>
                Non-fungible tokens (NFTs)
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox
                name={`industryType.moneyTransfer`}
                control={control}
              >
                Money transfer
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox
                name={`industryType.smartContracts`}
                control={control}
              >
                Smart contracts
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox name={`industryType.iot`} control={control}>
                Internet of Things (IoT)
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox
                name={`industryType.personalIdentitySecurity`}
                control={control}
              >
                Personal identity security
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox
                name={`industryType.healthcare`}
                control={control}
              >
                Healthcare
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox name={`industryType.logistics`} control={control}>
                Logistics
              </CustomCheckbox>
            </Grid>
            <Grid item xs={6}>
              <CustomCheckbox
                name={`industryType.government`}
                control={control}
              >
                Government
              </CustomCheckbox>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center">
            <CustomArrowButton type="submit">Next Step</CustomArrowButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default IndustoryTypeForm;
