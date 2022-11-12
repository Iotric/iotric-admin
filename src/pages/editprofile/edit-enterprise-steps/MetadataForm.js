import React, { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  Box,
  Typography,
  Autocomplete,
  Chip,
  Button,
} from "@mui/material";
import "./metadata.scss";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep2Schema } from "../../../utils/validations";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";
import {
  fetchMetaData,
  updateMetaData,
} from "../../../redux/actions/auth-actions";

const Step2 = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // authState
  const authState = useSelector((store) => store.auth);
  const tlds = authState.tlds;
  const socialMedia = authState.socialMedia;
  const restrictedSignup = authState.restrictedSignup;
  const allowedEmailType = authState.allowedEmailType;
  const domainLimit = authState.domainLimit;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      socialMedia: [],
      tlds: [],
      restrictedSignup: false,
      allowedEmailType: [],
      domainLimit: 1000,
    },
    resolver: yupResolver(profileStep2Schema),
  });

  useEffect(() => {
    dispatch(fetchMetaData());
  }, []);

  // on Created
  useEffect(() => {
    reset({
      tlds,
      socialMedia,
      restrictedSignup,
      allowedEmailType,
      domainLimit,
    });
  }, [authState]);

  const WatchRestrictedSignup = watch("restrictedSignup");

  const handleMetaFormNext = (data) => {
    dispatch(updateMetaData(data));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleMetaFormNext)}>
      <Box className="step2Details">
        {/* {JSON.stringify(watch())} */}
        <Controller
          name="tlds"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              freeSolo
              multiple
              options={[]}
              value={value}
              onChange={(event, values) => onChange(values)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={`CHIP_${option}_${index}`}
                    color="primary"
                    variant="outlined"
                    value={value}
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} label="tlds" variant="outlined" />
              )}
            />
          )}
        />

        {Array.isArray(errors.tlds) ? (
          errors.tlds?.map((message, index) => (
            <Typography
              key={`TLD_ERROR_${index}`}
              variant="body2"
              color="primary"
            >
              In Tag {index + 1}, {message.message}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" color="primary">
            {errors.tlds?.message}
          </Typography>
        )}

        <Controller
          name="socialMedia"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              freeSolo
              multiple
              options={[]}
              value={value}
              onChange={(event, values) => onChange(values)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Social Media"
                  variant="outlined"
                />
              )}
            />
          )}
        />
        {Array.isArray(errors.socialMedia) ? (
          errors.socialMedia?.map((message, index) => (
            <Typography
              key={`socialMedia_ERROR_${index}`}
              variant="body2"
              color="primary"
            >
              Tag {index + 1}, {message.message}
            </Typography>
          ))
        ) : (
          <Typography variant="body2" color="primary">
            {errors.socialMedia?.message}
          </Typography>
        )}

        <Controller
          name="domainLimit"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextField
              value={value}
              onChange={onChange}
              type="number"
              label="Domain Limit"
              variant="outlined"
            />
          )}
        />

        <Typography variant="body2" color="primary">
          {errors.domainLimit?.message}
        </Typography>
        <Box display="flex" gap={5}>
          <Box display="flex" alignItems="center">
            <Controller
              name="restrictedSignup"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                />
              )}
            />

            <Box>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    General settings
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I am an accordion
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Typography component="p" variant="body1">
              Restricted Signup
            </Typography>
          </Box>
          <Typography variant="body2" color="primary">
            {errors.restrictedSignup?.message}
          </Typography>
        </Box>

        {WatchRestrictedSignup ? (
          <>
            <Controller
              name="allowedEmailType"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  freeSolo
                  multiple
                  options={[]}
                  value={value}
                  onChange={(event, values) => onChange(values)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Allowed Email Type"
                      variant="outlined"
                    />
                  )}
                />
              )}
            />
            <Typography variant="body2" color="primary">
              {errors.allowedEmailType?.message}
            </Typography>
          </>
        ) : null}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ mt: 1, ml: 1 }}
          onClick={() => dispatch(authActions.handleBack())}
        >
          Back
        </Button>
        <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
