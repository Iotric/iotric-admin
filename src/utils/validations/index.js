import * as yup from "yup";
export const PASSWORD_PATTERN =
  /(?=^.{8,64}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])(?!.*\s).*$/;
export const THEMECOLOR_PATTERN = /^#([0-9a-f]{3}){1,2}$/i;
export const EMPTY_STRING_PATTERN = /^$/;
export const TLDS_PATTERN = /^[.][a-z]+/;
export const ALLOWED_EMAIL_TYPE_PATTERN = /^[@][a-z]+\.[a-z]+$/;

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
    .label("Brand Text"),
  // brandLogo: yup.string(),
  // favicon: yup.string(),
  themePrimaryColor: yup
    .string()
    .label("Theme Primary Color")
    .matches(THEMECOLOR_PATTERN, {
      message: "Only HexCode color format is allowed",
      excludeEmptyString: true,
    }),
  themeSecondaryColor: yup
    .string()
    .label("Theme Secondary Color")
    .matches(THEMECOLOR_PATTERN, {
      message: "Only HexCode color format is allowed",
      excludeEmptyString: true,
    }),
  primaryAdmin: yup.boolean(),
  homepageH1Title: yup
    .string()
    .max(30, "Must be 30 character or less")
    .label("Home Page Title"),
});

export const profileStep2Schema = yup.object().shape({
  // socialMedia: yup.array().of(
  //   yup.object().shape({
  //     value: yup.string().url("URL is invalid!"),
  //   })
  // ),
  tlds: yup
    .array()
    .of(
      yup
        .string()
        .matches(TLDS_PATTERN, "Start with a period")
        .min(3, "min 2 characters are required, excluding period!")
    )
    .min(1, "Atleast one tld is required!"),
  allowedEmailType: yup
    .array()
    .of(
      yup
        .string()
        .matches(
          ALLOWED_EMAIL_TYPE_PATTERN,
          "follow email type format e.g @iotric.com, @iotric.in"
        )
    ),
  restrictedSignup: yup.boolean(),
  domainLimit: yup
    .number()
    .required()
    .positive()
    .integer()
    .label("Domain Limit"),
});
