import * as yup from "yup";
export const PASSWORD_PATTERN =
  /(?=^.{8,64}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?!.*\s).*$/;

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is Required!").label("email"),
  password: yup
    .string()
    .required()
    .matches(
      PASSWORD_PATTERN,
      "Password should contain least 8 characters,minimum of 1 uppercase character [A-Z] , minimum of 1 numeric character [0-9],minimum of 1 special character: ~!@#$%"
    )
    .label("password"),
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
    .label("password"),
});

export const profileStep1Schema = yup.object().shape({
  BrandText: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required()
    .label("Brand Text"),
  BrandLogo: yup.string().required(),
  Favicon: yup.string().required(),
  ThemeColor: yup.string(),
  PrimaryAdmin: yup.boolean(),
  HomePageH1: yup
    .string()
    .max(30, "Must be 30 character or less")
    .required()
    .label("Home Page Title"),
});

export const profileStep2Schema = yup.object().shape({
  SocialMedia: yup
    .array()
    .of(yup.string().url("URL is invalid!"))
    .min(3, "min three tags of social media url is required!"),
  Tlds: yup
    .array()
    .of(yup.string().min(2, "min 2 characters are required!"))
    .min(1, "min one tld is required!"),
  AllowedEmailType: yup.array().min(1, "min one email type is required!"),
  RestrictedSignup: yup.boolean(),
  DomainLimit: yup.number().required().positive().integer(),
  Deafult2Fa: yup.boolean(),
});
