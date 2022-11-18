import React, { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  Box,
  Typography,
  Autocomplete,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import "./metadata.scss";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileStep2Schema } from "../../../utils/validations";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { errorHandler } from "../error-handler";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";
import {
  fetchMetaData,
  createMetaData,
  updateMetaData,
  isEnterpriseMinted,
} from "../../../redux/actions/auth-actions";

const Icons = (name) => {
  switch (name) {
    case "Facebook":
      return <FacebookIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Twitter":
      return <TwitterIcon />;
    case "Instagram":
      return <InstagramIcon />;
    default:
      return <FacebookIcon />;
  }
};

const Step2 = () => {
  const dispatch = useDispatch();

  // authState
  const authState = useSelector((store) => store.auth);
  const tlds = authState.tlds;
  const socialMedia = authState.socialMedia;
  const restrictedSignup = authState.restrictedSignup;
  const allowedEmailType = authState.allowedEmailType;
  const domainLimit = authState.domainLimit;
  const additionalInfo = authState.additionalInfo;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
    getValues,
    setValue,
  } = useForm({
    defaultValues: {
      socialMedia: [],
      tlds: [],
      restrictedSignup: false,
      allowedEmailType: [],
      domainLimit: 1000,
      additionalInfo: [],
      addLinks: "",
    },
    resolver: yupResolver(profileStep2Schema),
  });

  const {
    fields: additionalInfoFields,
    append: appendAdditionalInfo,
    remove: removeAdditionalInfo,
  } = useFieldArray({
    control,
    name: "additionalInfo",
  });

  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const [expanded, setExpanded] = useState("key_-1");

  const WatchRestrictedSignup = watch("restrictedSignup");

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
      additionalInfo,
    });
  }, [authState]);

  const socialMediaMetaData = {
    facebook: {
      name: "Facebook",
      placeholder: "https://facebook.com/yourusername",
    },
    linkedin: {
      name: "LinkedIn",
      placeholder: "https://linkedin.com/in/yourusername",
    },
    twitter: {
      name: "Twitter",
      placeholder: "https://twitter.com/yourusername",
    },
    instagram: {
      name: "Instagram",
      placeholder: "https://instagram.com/yourusername",
    },
  };

  const socialMediaOptions = [
    { type: "facebook", name: "Facebook" },
    { type: "linkedin", name: "LinkedIn" },
    { type: "twitter", name: "Twitter" },
    { type: "instagram", name: "Instagram" },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMetaFormNext = (data) => {
    dispatch(createMetaData(data));
    dispatch(isEnterpriseMinted());
  };

  const handleAddKey = () => {
    const newKey = {
      label: "",
      key: "",
      type: "",
    };

    appendAdditionalInfo(newKey);
  };

  const handleSocialMedia = (type) => {
    let includes = false;
    const socialMedia = getValues("socialMedia");

    socialMedia.forEach((item) => {
      if (item.type === type) {
        includes = true;
      }
    });

    if (!includes) {
      const newKey = {
        type,
        value: "",
      };

      appendSocialMedia(newKey);
    }
  };

  console.log(errors);

  return (
    <Box component="form" onSubmit={handleSubmit(handleMetaFormNext)}>
      <Box className="step2Details">
        {/* {JSON.stringify(watch())} */}
        <Box>
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
                      key={`TLDS_CHIP_${option}_${index}`}
                      color="primary"
                      variant="outlined"
                      value={value}
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    helperText="e.g .btc"
                    {...params}
                    label="tlds"
                    variant="outlined"
                  />
                )}
              />
            )}
          />
          {errorHandler(errors, "tlds")}
        </Box>

        <Box>
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
          {errorHandler(errors, "domainLimit")}
        </Box>

        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Controller
              name="addLinks"
              control={control}
              render={({ field: { value, onChange } }) => (
                <TextField
                  size="small"
                  select
                  sx={{ width: "50%" }}
                  label="Add Social Media Links"
                  value={value}
                  onChange={(e) => {
                    onChange();
                    handleSocialMedia(e.target.value);
                  }}
                >
                  {socialMediaOptions.map((item, item_index) => (
                    <MenuItem
                      key={`SOCIALOPTIONS_${item_index}`}
                      value={item.type}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
          <Box mt={3}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              {socialMediaFields.map(({ type, value }, item_index) => (
                <Box
                  key={`SOCIALMEDIA_${item_index}`}
                  sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  {Icons(socialMediaMetaData[type].name)}
                  <Controller
                    name={`socialMedia.${item_index}.value`}
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        size="small"
                        label={socialMediaMetaData[type].name}
                        placeholder={socialMediaMetaData[type].placeholder}
                        sx={{ width: "100%" }}
                        onChange={onChange}
                        value={value}
                        variant="outlined"
                        error={errors.label}
                      />
                    )}
                  />
                  <DeleteIcon onClick={() => removeSocialMedia(item_index)} />
                </Box>
              ))}
            </Box>
            {errorHandler(errors, "socialMedia")}
          </Box>
        </Box>
        {/* 
        <Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography component="h4">Add Key</Typography>
            <Fab
              onClick={handleAddKey}
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Box>
          <Box mt={2}>
            {additionalInfoFields.map((item, item_index) => (
              <Accordion
                key={`KEY_${item_index}`}
                expanded={expanded === `Key_${item_index}`}
                onChange={handleChange(`Key_${item_index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Key {item_index}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Controller
                      name={`additionalInfo.${item_index}.label`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          size="small"
                          label="Label"
                          sx={{ width: "100%" }}
                          onChange={onChange}
                          value={value}
                          variant="outlined"
                          error={errors.label}
                        />
                      )}
                    />
                  </Box>

                  <Box my={2}>
                    <Controller
                      name={`additionalInfo.${item_index}.key`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          size="small"
                          sx={{ width: "100%" }}
                          label="key/symbol"
                          onChange={onChange}
                          value={value}
                          variant="outlined"
                          error={errors.label}
                        />
                      )}
                    />
                  </Box>

                  <Box my={2}>
                    <Controller
                      name={`additionalInfo.${item_index}.type`}
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          size="small"
                          select
                          sx={{ width: "100%" }}
                          value={value}
                          label="Type"
                          onChange={onChange}
                        >
                          <MenuItem value="url">URL</MenuItem>
                          <MenuItem value="text">Text</MenuItem>
                          <MenuItem value="address">Address</MenuItem>
                          <MenuItem value="folder">Folder</MenuItem>
                        </TextField>
                      )}
                    />
                  </Box>
                  <Box>
                    <IconButton>
                      <DeleteIcon
                        onClick={() => removeAdditionalInfo(item_index)}
                        sx={{ color: "#E63946" }}
                      />
                    </IconButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box> */}

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

            <Typography component="p" variant="body1">
              Restricted Signup
            </Typography>
          </Box>
          {errorHandler(errors, "restrictedSignup")}
        </Box>

        {WatchRestrictedSignup ? (
          <Box>
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
                        key={`EMAILTYPE_CHIP_${option}_${index}`}
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText="e.g @iotric.com"
                      label="Allowed Email Type"
                      variant="outlined"
                    />
                  )}
                />
              )}
            />
            {errorHandler(errors, "allowedEmailType")}
          </Box>
        ) : null}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{ mt: 1, ml: 1 }}
          onClick={() => dispatch(authActions.handleBack())}
        >
          Back
        </Button>
        <Button
          sx={{ mt: 1, ml: 1 }}
          onClick={handleSubmit((data) => dispatch(updateMetaData(data)))}
        >
          Update
        </Button>
        <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Step2;
