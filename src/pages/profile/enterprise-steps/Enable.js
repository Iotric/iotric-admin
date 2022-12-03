import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import {
  CustomArrowButton,
  CustomCheckbox,
} from "../../../utils/UI/components";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";

const Enable = () => {
  const dispatch = useDispatch();
  const { control } = useForm({
    defaultValues: {
      componentsEnabled: {
        premiumDomain: false,
        domainTransfer: false,
        discountingModule: false,
        userAuthMfa: false,
      },
      chainSupport: {
        etherium: false,
        xinfin: false,
        polygon: false,
        other: false,
      },
      landingPageTemplate: {
        domainSearch: false,
        premiumDomain: false,
      },
    },
  });
  return (
    <Box>
      <Typography align="center" variant="h5">
        Components to enable
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCheckbox
            name="componentsEnabled.premiumDomain"
            control={control}
          >
            Premium Domain
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox
            name="componentsEnabled.domainTransfer"
            control={control}
          >
            Domain Transfer
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox
            name="componentsEnabled.discountingModule"
            control={control}
          >
            Discounting Module
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox
            name="componentsEnabled.userAuthMfa"
            control={control}
          >
            User auth MFA
          </CustomCheckbox>
        </Grid>
      </Grid>
      <Typography align="center" variant="h5">
        Chain support
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCheckbox name="chainSupport.etherium" control={control}>
            Etherium
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name="chainSupport.xinfin" control={control}>
            Xinfin
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name="chainSupport.polygon" control={control}>
            Polygon
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox name="chainSupport.other" control={control}>
            Other
          </CustomCheckbox>
        </Grid>
      </Grid>
      <Typography align="center" variant="h5">
        Landing Page template
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCheckbox
            name="landingPageTemplate.domainSearch"
            control={control}
          >
            Domain Search
          </CustomCheckbox>
        </Grid>
        <Grid item xs={6}>
          <CustomCheckbox
            name="landingPageTemplate.premiumDomain"
            control={control}
          >
            Premium Domain
          </CustomCheckbox>
        </Grid>
      </Grid>

      <Button onClick={() => dispatch(authActions.handleBack())}>back</Button>
      <CustomArrowButton>Continue to dashboard</CustomArrowButton>
    </Box>
  );
};

export default Enable;
