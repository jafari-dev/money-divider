import { Person } from "#/types";
import { Button } from "@mui/material";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

import { PersonInfoDialog } from "../../components";

interface Props {
  firstUser?: boolean;
}

function AddPersonButton({ firstUser = false }: Props): React.ReactElement {
  const store = useStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showForm = useCallback(() => setIsDialogOpen(true), []);
  const hideForm = useCallback(() => setIsDialogOpen(false), []);

  const submitForm = useCallback((personInfo: Person) => {
    store.addPerson(personInfo);
  }, []);

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
      <PersonInfoDialog
        isOpen={isDialogOpen}
        title="Add Person"
        sumbitButtonText="Add"
        onHide={hideForm}
        onSumbit={submitForm}
      />
    </>
  );
}

export default observer(AddPersonButton);
