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
    .required("Required!"),
  firstName: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required("Required!"),
  lastName: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required("Required!"),
  email: yup.string().email().required("Email is Required!").label("email"),
  password: yup
    .string()
    .min(8, "at least 8 chars")
    .matches(/[a-z]/, "at least one lowercase char")
    .matches(/[A-Z]/, "at least one uppercase char")
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    )
    .label("password"),
});

export const profileStep1Schema = yup.object().shape({
  BrandText: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required("Required!"),
  BrandLogo: yup.string().required(),
  Favicon: yup.string().required(),
  ThemeColor: yup.string(),
  PrimaryAdmin: yup.boolean(),
  HomePageH1: yup
    .string()
    .max(15, "Must be 15 character or less")
    .required("Required!"),
});

export const profileStep2Schema = yup.object().shape({
  SocialMedia: yup.array().required(),
  Tlds: yup.array().required(),
  RestrictedSignup: yup.boolean(),
  AllowedEmailType: yup.array().required(),
  DomainLimit: yup.number().required().positive().integer(),
  Deafult2Fa: yup.boolean(),
});
