import { Typography } from "@mui/material";
import { memo } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

function InputError({ error }: Props) {
  return error ? (
    <Typography marginTop={1} variant="body1" color="error">
      {error.message}
    </Typography>
  ) : null;
}

export default memo(InputError);
