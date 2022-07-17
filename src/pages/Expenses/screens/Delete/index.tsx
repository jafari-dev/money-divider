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
import { ExpenseStoreType, useStore } from "@stores";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

interface Props {
  expenseId: string;
}

function DeleteExpenseButton({ expenseId }: Props): React.ReactElement {
  const store = useStore();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const showDialog = useCallback(() => setIsDialogOpen(true), []);
  const hideDialog = useCallback(() => setIsDialogOpen(false), []);

  const matchedExpense = store.expenses.find(({ id }) => id === expenseId) as ExpenseStoreType;

  const submitForm = useCallback(() => {
    store.deleteExpense(matchedExpense.id);
  }, [matchedExpense.id]);

  return (
    <>
      <Button onClick={showDialog} variant="outlined" size="small" color="error">
        <Delete />
      </Button>
      <Dialog open={isDialogOpen}>
        <DialogTitle>Delete Expense</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>Are your sure that you want to delete this expense?</Typography>
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

export default observer(DeleteExpenseButton);
