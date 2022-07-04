import { Person } from "#/types";
import { InputError } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  FormControl,
  TextField,
} from "@mui/material";
import { useCallback, memo } from "react";
import { useForm } from "react-hook-form";

import { userSchema, UserFormData } from "../../utilities/form-schema";
import { StyledDialogContent } from "./styles";

interface Props {
  isOpen: boolean;
  title: string;
  sumbitButtonText: string;
  onSumbit: (info: Person) => void;
  onHide: () => void;
  defaultValues?: Partial<Person>;
}

function InfoDialog({
  isOpen,
  title,
  sumbitButtonText,
  onSumbit,
  onHide,
  defaultValues,
}: Props): React.ReactElement {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userSchema), defaultValues });

  const hideForm = useCallback(() => {
    onHide();
    reset();
  }, [onHide, reset]);

  const submitForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      void handleSubmit((values) => {
        onSumbit({ ...values });
        hideForm();
      })(event);
    },
    [onSumbit, hideForm]
  );

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <form onSubmit={submitForm}>
        <StyledDialogContent>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Name *"
              autoComplete="off"
              {...register("name")}
              error={errors.name != null}
            />
            <InputError error={errors.name} />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Phone number *"
              autoComplete="off"
              {...register("phoneNumber")}
              error={errors.phoneNumber != null}
            />
            <InputError error={errors.phoneNumber} />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Email"
              autoComplete="off"
              {...register("email")}
              error={errors.email != null}
            />
            <InputError error={errors.email} />
          </FormControl>
        </StyledDialogContent>
        <Divider />
        <DialogActions>
          <Button variant="outlined" onClick={hideForm}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            {sumbitButtonText}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default memo(InfoDialog);
