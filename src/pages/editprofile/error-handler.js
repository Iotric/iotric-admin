import { Typography } from "@mui/material";

// A custom error handler for react-hook-form
// Handles - string, boolean, object, array, array of objects
export const errorHandler = (errors, fieldName) => {
  if (Array.isArray(errors[fieldName])) {
    return errors[fieldName]?.map((message, index) =>
      message.value ? (
        <Typography
          key={`${fieldName}_ERROR_${index}`}
          mx={1}
          my={1}
          variant="body2"
          color="textPrimary.main"
        >
          In Tag {index + 1}, {message.value.message}
        </Typography>
      ) : (
        <Typography
          key={`${fieldName}_ERROR_${index}`}
          mx={1}
          my={1}
          variant="body2"
          color="textPrimary.main"
        >
          In Tag {index + 1}, {message.message}
        </Typography>
      )
    );
  } else {
    return (
      <Typography mx={1} my={1} variant="body2" color="textPrimary.main">
        {errors[fieldName]?.message}
      </Typography>
    );
  }
};
