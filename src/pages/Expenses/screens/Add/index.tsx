import { Expense } from "#/types";
import { Button } from "@mui/material";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo, useState } from "react";

import { ExpenseInfoDialog } from "../../components";

interface Props {
  firstExpense?: boolean;
}

function AddPersonButton({ firstExpense = false }: Props): React.ReactElement {
  const store = useStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showForm = useCallback(() => setIsDialogOpen(true), []);
  const hideForm = useCallback(() => setIsDialogOpen(false), []);

  const submitForm = useCallback((personInfo: Expense) => {
    store.addExpense(personInfo);
  }, []);

  const persons = useMemo(
    () => store.persons.map(({ id, name }) => ({ id, label: name })),
    [store.persons.length]
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
        {firstExpense ? "Add first Expense" : "Add expense"}
      </Button>
      <ExpenseInfoDialog
        persons={persons}
        isOpen={isDialogOpen}
        title="Add Expense"
        sumbitButtonText="Add"
        onHide={hideForm}
        onSumbit={submitForm}
      />
    </>
  );
}

export default observer(AddPersonButton);
