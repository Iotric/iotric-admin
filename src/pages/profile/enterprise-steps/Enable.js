import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Container,
  RadioGroup,
} from "@mui/material";
import React from "react";
import {
  CustomArrowButton,
  CustomCheckbox,
} from "../../../utils/UI/components";

import { Controller, useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";
import CustomRadioButton from "../../../utils/UI/components/CustomRadioButton";

const Enable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { control, watch } = useForm({
    defaultValues: {
      componentsEnabled: {
        premiumDomain: false,
        domainTransfer: false,
        discountingModule: false,
        userAuthMfa: false,
      },
      chainSupport: "",
      landingPageTemplate: {
        domainSearch: false,
        premiumDomain: false,
      },
    },
  });

  const watchChainSupport = watch("chainSupport");

  const handleClickDashboard = () => {
    dispatch(authActions.profileCompleteSuccess());
    dispatch(authActions.setLoadingTrue());
    setTimeout(() => {
      navigate("/dashboard");
      dispatch(authActions.handleReset());
      dispatch(authActions.setLoadingFalse());
    }, 1000);
  };


  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        elevation={2}
        sx={{
          my: { xs: 3, md: 2 },
          px: { xs: 3, md: 10 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Box>
          <Box>
            <Typography my={1} fontWeight="500" align="center" variant="h5">
              Components to enable
            </Typography>
            {/* {JSON.stringify(watch())} */}
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
          </Box>
          <Box my={5}>
            <Typography my={2} fontWeight="500" align="center" variant="h5">
              Chain support
            </Typography>
            <Controller
              control={control}
              name="chainSupport"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CustomRadioButton
                        selectedItem={watchChainSupport}
                        value="etherium"
                        control={control}
                      >
                        Etherium
                      </CustomRadioButton>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomRadioButton
                        selectedItem={watchChainSupport}
                        value="xinfin"
                        control={control}
                      >
                        Xinfin
                      </CustomRadioButton>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomRadioButton
                        selectedItem={watchChainSupport}
                        value="polygon"
                        control={control}
                      >
                        Polygon
                      </CustomRadioButton>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomRadioButton
                        selectedItem={watchChainSupport}
                        value="other"
                        control={control}
                      >
                        Other
                      </CustomRadioButton>
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
          </Box>

          <Box>
            <Typography my={2} fontWeight="500" align="center" variant="h5">
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
          </Box>

          <Box mt={4} display="flex" justifyContent="center">
            <Button onClick={() => dispatch(authActions.handleBack())}>
              back
            </Button>
            <CustomArrowButton onClick={handleClickDashboard}>
              Continue to dashboard
            </CustomArrowButton>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Enable;
