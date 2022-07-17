import { Grid } from "@mui/material";
import { useStore } from "@stores";
import { observer } from "mobx-react-lite";

import ExpenseCard from "./item";

function ExpensesList() {
  const store = useStore();

  return (
    <Grid container spacing={4}>
      {store.expenses.map((expense) => (
        <Grid item key={expense.id} xs={12} md={8} marginX="auto">
          <ExpenseCard expense={expense} />
        </Grid>
      ))}
    </Grid>
  );
}

export default observer(ExpensesList);
