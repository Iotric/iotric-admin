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

export const registerSchema = yup.object({
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
    .required()
    .matches(
      PASSWORD_PATTERN,
      "Password should contain least 8 characters,minimum of 1 uppercase character [A-Z] , minimum of 1 numeric character [0-9],minimum of 1 special character: ~!@#$%"
    )
    .label("password"),
});

export const compeleteProfileScheme = yup.object({
  BrandText: "",
  BrandLogo: "",
  Favicon: "",
  ThemeColor: "",
  PrimaryAdmin: yup.boolean(),
  HomePageH1: "",
  SocialMedia: "",
  Tlds: "",
  RestrictedSignup: false,
  AllowedEmailType: "",
  DomainLimit: yup.number().required().positive().integer(),
  Deafult2Fa: false,
});
