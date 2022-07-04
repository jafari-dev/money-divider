import { Typography } from "@mui/material";
import { memo } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  error?: FieldError;
}

function InputError({ error }: Props) {
  return error ? (
    <Typography marginTop={1} fontSize="14px" variant="body1" color="error">
      {error.message}
    </Typography>
  ) : null;
}

export default memo(InputError);
