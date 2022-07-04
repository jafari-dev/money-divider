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
import { useStore, PersonStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { userSchema, UserFormData } from "../../utilities/form-schema";
import { StyledDialogContent } from "./styles";

interface Props {
  firstUser?: boolean;
}

function AddPersonButton({ firstUser = false }: Props): React.ReactElement {
  const store = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({ resolver: zodResolver(userSchema) });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = useCallback(() => {
    reset();
    setIsFormVisible(true);
  }, [reset]);

  const hideForm = useCallback(() => setIsFormVisible(false), []);

  const submitForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      void handleSubmit((values) => {
        const newPerson = PersonStore.create({ ...values });

        store.addPerson(newPerson);
        hideForm();
      })(event);
    },
    [handleSubmit, hideForm]
  );

  return (
    <>
      <Button
        sx={{ display: "block", marginX: "auto", marginBottom: "32px" }}
        color="success"
        size="large"
        variant="contained"
        onClick={showForm}
      >
        {firstUser ? "Add first person" : "Add person"}
      </Button>
      <Dialog open={isFormVisible}>
        <DialogTitle>Add Person</DialogTitle>
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
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default observer(AddPersonButton);
