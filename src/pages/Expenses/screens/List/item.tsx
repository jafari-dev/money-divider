import { formatDate } from "#/utilities";
import { Paid, GroupRemove } from "@mui/icons-material";
import { colors, Tooltip, Button } from "@mui/material";
import { ExpenseStoreType } from "@stores";
import { observer } from "mobx-react-lite";

import { DeleteExpenseButton } from "..";
import { Paper, Section, Row, SectionHeading, Title, Description, Actions } from "./styles";

interface Props {
  expense: ExpenseStoreType;
}

function ExpenseCard({ expense }: Props) {
  const [expenseDate, expenseTime] = formatDate(expense.date);

  return (
    <Paper>
      <Title variant="h5">{expense.title}</Title>
      <Description>
        <span>Description: </span>
        {expense.description === "" ? (
          <span className="empty">No description</span>
        ) : (
          <span>{expense.description}</span>
        )}
      </Description>
      <Section>
        <SectionHeading color={colors.green[600]} variant="h6">
          <Paid />
          Payment Info
        </SectionHeading>
        <Row>
          <span>Total Cost</span>
          <span>{expense.totalCost}</span>
        </Row>
        <Row>
          <span>Currency Unit</span>
          <span>{expense.currencyUnit}</span>
        </Row>
        <Row>
          <span>Payer</span>
          <Tooltip title={`Mobile: ${expense.payer.phoneNumber}`}>
            <span>{expense.payer.name}</span>
          </Tooltip>
        </Row>
        <Row>
          <span>Date</span>
          <span>
            {expenseDate} | {expenseTime}
          </span>
        </Row>
      </Section>
      <Section>
        <SectionHeading color={colors.red[500]} variant="h6">
          <GroupRemove />
          Debts
        </SectionHeading>
        {expense.debts.map(({ owner, amount }) => (
          <Row key={`${expense.id}-${owner.id}`}>
            <Tooltip title={`Mobile: ${owner.phoneNumber}`}>
              <span>{owner.name}</span>
            </Tooltip>
            <span>{amount}</span>
          </Row>
        ))}
      </Section>
      <Actions>
        <Button variant="contained" color="info" size="small">
          Edit
        </Button>
        <DeleteExpenseButton expenseId={expense.id} />
      </Actions>
    </Paper>
  );
}

export default observer(ExpenseCard);
