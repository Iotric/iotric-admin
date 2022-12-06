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
  Grid,
  Container,
  Paper,
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
// import InstagramIcon from "@mui/icons-material/Instagram";

import SocialMedia from "../../../utils/UI/custom-components/SocialMedia";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { InstagramIcon } from "../../../assets/images/InstagramIcon.js";

import { errorHandler } from "../../../utils/error-handler";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slice/auth-slice";
import {
  fetchMetaData,
  createMetaData,
  updateMetaData,
  isEnterpriseMinted,
} from "../../../redux/actions/auth-actions";

import {
  CustomArrowButton,
  CustomCheckbox,
} from "../../../utils/UI/components";
import CustomModal from "../../../components/modal/CustomModal";

const Icons = (type) => {
  switch (type) {
    case "Facebook":
      return {
        icon: <FacebookIcon style={{ color: "#3B5998" }} />,
        name: "facebook",
        placeholder: "https://facebook.com/yourusername",
      };
    case "LinkedIn":
      return {
        icon: <LinkedInIcon style={{ color: "#0077B5" }} />,
        name: "linkedin",
        placeholder: "https://linkedin.com/in/yourusername",
      };
    case "Twitter":
      return {
        icon: <TwitterIcon style={{ color: "#00ACEE" }} />,
        name: "twitter",
        placeholder: "https://twitter.com/yourusername",
      };
    case "Instagram":
      return {
        icon: <InstagramIcon />,
        name: "instagram",
        placeholder: "https://instagram.com/yourusername",
      };
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
  } = useForm({
    defaultValues: {
      socialMedia: { facebook: "", twitter: "", instagram: "", linkedin: "" },
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

  // const {
  //   fields: socialMediaFields,
  //   append: appendSocialMedia,
  //   remove: removeSocialMedia,
  // } = useFieldArray({
  //   control,
  //   name: "socialMedia",
  // });

  const [expanded, setExpanded] = useState("key_-1");
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("");

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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMetaFormNext = (data) => {
    dispatch(createMetaData(data));
    dispatch(authActions.handleNext());
    // dispatch(isEnterpriseMinted());
  };

  const handleAddKey = () => {
    const newKey = {
      label: "",
      key: "",
      type: "",
    };

    appendAdditionalInfo(newKey);
  };

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSocialIconClick = (type) => {
    setType(type);
    handleModalOpen();
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      {/* {JSON.stringify(watch())} */}
      <CustomModal
        Icon={Icons(type).icon}
        placeholder={Icons(type).placeholder}
        openModal={modalOpen}
        handleModalClose={handleModalClose}
        control={control}
        name={`socialMedia[${Icons(type).name}]`}
      />

      <Paper
        elevation={2}
        sx={{
          my: { xs: 3, md: 1 },
          py: { xs: 1, md: 2 },
          px: { xs: 2, md: 20 },
        }}
      >
        <Typography fontWeight="500" align="center" variant="h5">
          Basic Info
        </Typography>
        <Box
          className="metadata"
          component="form"
          onSubmit={handleSubmit(handleMetaFormNext)}
        >
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
                        size="small"
                        label="TLDS"
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
                    size="small"
                    label="Domain Limit"
                    variant="outlined"
                  />
                )}
              />
              {errorHandler(errors, "domainLimit")}
            </Box>

            <Box sx={{ width: "50% !important" }} mt={1}>
              <CustomCheckbox name="restrictedSignup" control={control}>
                Restricted Signup
              </CustomCheckbox>
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
                          size="small"
                        />
                      )}
                    />
                  )}
                />
                {errorHandler(errors, "allowedEmailType")}
              </Box>
            ) : null}

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
              <Box mt={1}>
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

                      <Box my={4}>
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

                      <Box my={4}>
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
            </Box>

            <Typography variant="body1">Add social media</Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleSocialIconClick("Twitter")}
                >
                  <SocialMedia
                    Icon={<TwitterIcon style={{ color: "#00ACEE" }} />}
                  >
                    Connect to Twitter
                  </SocialMedia>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleSocialIconClick("Facebook")}
                >
                  <SocialMedia
                    Icon={<FacebookIcon style={{ color: "#3B5998" }} />}
                  >
                    Connect to Facebook
                  </SocialMedia>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleSocialIconClick("LinkedIn")}
                >
                  <SocialMedia
                    Icon={<LinkedInIcon style={{ color: "#0077B5" }} />}
                  >
                    Connect to LinkedIn
                  </SocialMedia>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleSocialIconClick("Instagram")}
                >
                  <SocialMedia Icon={<InstagramIcon />}>
                    Connect to Instagram
                  </SocialMedia>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box mt={2} display="flex" justifyContent="center">
            <Button onClick={() => dispatch(authActions.handleBack())}>
              Back
            </Button>
            <CustomArrowButton
              onClick={() => dispatch(authActions.handleNext())}
            >
              Next Step
            </CustomArrowButton>
            {/* <Button
          sx={{ mt: 1, ml: 1 }}
          onClick={handleSubmit((data) => dispatch(updateMetaData(data)))}
        >
          Update
        </Button> */}
            {/* <Button sx={{ mt: 1, ml: 1 }} type="submit">
          Submit
        </Button> */}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Step2;
