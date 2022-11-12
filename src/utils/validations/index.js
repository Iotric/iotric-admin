import * as yup from "yup";
export const PASSWORD_PATTERN =
  /(?=^.{8,64}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?!.*\s).*$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is Required!").label("email"),
  password: yup.string().required().label("Password"),
});

export const registerSchema = yup.object().shape({
  organizationName: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required()
    .label("Organization Name"),
  firstName: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required()
    .label("First Name"),
  lastName: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required()
    .label("Last Name"),
  email: yup.string().email().required("Email is Required!").label("email"),
  password: yup
    .string()
    .required()
    .matches(
      PASSWORD_PATTERN,
      "Password should contain least 8 characters,minimum of 1 uppercase character [A-Z] , minimum of 1 numeric character [0-9],minimum of 1 special character: ~!@#$%"
    )
    .label("Password"),
});

export const profileStep1Schema = yup.object().shape({
  brandText: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required()
    .label("Brand Text"),
  // brandLogo: yup.string(),
  // favicon: yup.string(),
  themeColor: yup.string(),
  primaryAdmin: yup.boolean(),
  homepageH1Title: yup
    .string()
    .max(30, "Must be 30 character or less")
    .required()
    .label("Home Page Title"),
});

export const profileStep2Schema = yup.object().shape({
  socialMedia: yup.array().of(yup.string().url("URL is invalid!")),
  tlds: yup.array().of(yup.string().min(2, "min 2 characters are required!")),
  allowedEmailType: yup.array(),
  restrictedSignup: yup.boolean(),
  domainLimit: yup.number().required().positive().integer(),
});
