import React from "react";
import "./industry.scss";

import { Box, Grid, Typography } from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";

import {
  CustomCheckbox,
  CustomArrowButton,
} from "../../../utils/UI/components";

import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";

const IndustoryTypeForm = () => {
  const dispatch = useDispatch();

  const { control, watch } = useForm({
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

  return (
    <Box component="form">
      {/* {JSON.stringify(watch())} */}
      <Typography align="center" variant="h5">
        What is your industry type?
      </Typography>
      <Grid container xs={12} spacing={2}>
        <Grid item xs={6}>
          <CustomCheckbox name={`industryType.nfts`} control={control}>
            Non-fungible tokens (NFTs)
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name={`industryType.moneyTransfer`} control={control}>
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
          <CustomCheckbox name={`industryType.healthcare`} control={control}>
            Healthcare
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name={`industryType.logistics`} control={control}>
            Logistics
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name={`industryType.government`} control={control}>
            Government
          </CustomCheckbox>
        </Grid>
      </Grid>

      <CustomArrowButton onClick={() => dispatch(authActions.handleNext())}>
        Next Step
      </CustomArrowButton>
    </Box>
  );
};

export default IndustoryTypeForm;
