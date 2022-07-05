import { Person } from "#/types";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { PersonStoreType, useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

import { PersonInfoDialog } from "../../components";

interface Props {
  personId: string;
}

function EditPersonButton({ personId }: Props): React.ReactElement {
  const store = useStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showForm = useCallback(() => setIsDialogOpen(true), []);
  const hideForm = useCallback(() => setIsDialogOpen(false), []);

  const matchedPerson = store.persons.find(({ id }) => id === personId) as PersonStoreType;

  const submitForm = useCallback(
    (personInfo: Person) => matchedPerson.edit(personInfo),
    [store.persons.map(({ id }) => id).join("|")]
  );

  return (
    <>
      <Button onClick={showForm} size="small" color="info">
        <Edit />
      </Button>
      <PersonInfoDialog
        isOpen={isDialogOpen}
        title="Edit Person"
        sumbitButtonText="Edit"
        onHide={hideForm}
        onSumbit={submitForm}
        defaultValues={{
          name: matchedPerson.name,
          phoneNumber: matchedPerson.phoneNumber,
          email: matchedPerson.email ?? "",
        }}
      />
    </>
  );
}

export default observer(EditPersonButton);
