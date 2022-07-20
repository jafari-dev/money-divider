import { Grid, Typography } from "@mui/material";
import { useStore } from "@stores";
import { Empty } from "_/images";
import { observer } from "mobx-react-lite";

import { AddExpenseButton } from "..";
import ExpenseCard from "./item";
import { EmptyListWrapper } from "./styles";

function ExpensesList() {
  const { expenses } = useStore();

  if (expenses.length === 0) {
    return (
      <EmptyListWrapper>
        <Empty />
        <Typography variant="h6">Nothing to show!</Typography>
        <AddExpenseButton firstExpense />
      </EmptyListWrapper>
    );
  } else {
    return (
      <>
        <AddExpenseButton />
        <Grid container spacing={4}>
          {expenses.map((expense) => (
            <Grid item key={expense.id} xs={12} md={8} marginX="auto">
              <ExpenseCard expense={expense} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default observer(ExpensesList);
