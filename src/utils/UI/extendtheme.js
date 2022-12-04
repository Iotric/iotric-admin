import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import { checkboxClasses } from "@mui/material/Checkbox";

const { palette, spacing } = createTheme();

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6300FF",
    },
    textPrimary: {
      light: "",
      main: "#df3125cc",
      dark: "",
      contrastText: "",
    },
    textMute: {
      light: "",
      main: "#6C757D",
    },
    btnClr: {
      main: "#6300FF",
      contrastText: "#FFFFFF",
    },
    // btnClr: palette.augmentColor({ color: red }),
  },
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
        // inputProps: {
        //   style: {
        //     border: "1px solid yellow",
        //     hover: {
        //       border: "1px solid pink"
        //     },
        // },
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CBCBCB",
            // backgroundColor: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6300FF",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6300FF",
          },
          top: "12px",
          // height: "40px",
          color: "black",
          borderRadius: "7px",
        },
        notchedOutline: {},

        // root: {
        //   top: spacing(2),
        //   height: "40px",
        //   "&.Mui-focused $notchedOutline": {
        //     border: "8px solid red",
        //   },
        //   // "&.Mui-focused": {
        //   //   "&$notchedOutline": {
        //   //     borderColor: "red",
        //   //     borderWidth: "5px",
        //   //   },
        //   // },
        // },
        // input: {},
        // notchedOutline: {},
        // focused: {},
      },
    },
    // MuiInput: {
    //   defaultProps: {
    //     disableUnderline: true,
    //     inputProps: {
    //       style: {
    //         border: "1px solid pink"
    //       }
    //     }
    //   },
    //   root: {
    //     top: spacing(10),
    //     border: "1px solid pink"
    //   },
    //   input: {
    //     border: "1px solid pink"
    //   }
    // },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        disableAnimation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "20px",
          fontWeight: "400",
          color: "black",
          transform: "translate(0px, -9px) scale(0.75)",
          "&.Mui-focused": {
            color: "#6300FF",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          top: spacing(2),
          // border: "1px solid #CBCBCB",
          // padding: spacing(1),
          "&$focused": {
            border: "1px solid green",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#6300FF",
          "&:hover": {
            backgroundColor: "#6200ffe2",
          },
        },
        outlinedPrimary: {
          border: "1px solid #6200ffe2",
          color: "#6200ffe2",
          "&:hover": {
            border: "1px solid #6200ffe2",
            backgroundColor: "rgba(99, 0, 255, 0.1)",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          color: "#1985a1",
          [`&.${checkboxClasses.checked}`]: {
            color: "#6300FF",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#1985a1",
          "&.Mui-checked": {
            color: "#6300FF",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: spacing(2),
        },
      },
    },
  },
});
