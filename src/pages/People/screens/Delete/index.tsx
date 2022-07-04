import { Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  DialogContent,
  Typography,
} from "@mui/material";
import { PersonStoreType, useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

interface Props {
  personId: string;
}

function DeletePersonButton({ personId }: Props): React.ReactElement {
  const store = useStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showDialog = useCallback(() => setIsDialogOpen(true), []);
  const hideDialog = useCallback(() => setIsDialogOpen(false), []);

  const matchedPerson = store.persons.find(({ id }) => id === personId) as PersonStoreType;

  const submitForm = useCallback(() => {
    store.deletePerson(matchedPerson.id);
  }, [matchedPerson.id]);

  return (
    <>
      <Button onClick={showDialog} size="small" color="error">
        <Delete />
      </Button>
      <Dialog open={isDialogOpen}>
        <DialogTitle>Delete Person</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>
            Are your sure that you want to delete{" "}
            <Typography fontWeight="bold" display="inline">
              {matchedPerson.name}
            </Typography>{" "}
            from the list of the people?
          </Typography>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="outlined" onClick={hideDialog}>
            Cancel
          </Button>
          <Button color="error" variant="contained" onClick={submitForm}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default observer(DeletePersonButton);
