import { CurrencyUnit, Expense, SelectorOption } from "#/types";
import { CURRENCY_UNITS_LABELS } from "#/utilities/constants";
import { InputError } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Payment } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import React, { useCallback, memo, useState, Fragment } from "react";
import { useForm } from "react-hook-form";

import { expenseSchema, ExpenseFormData } from "../../utilities/form-schema";
import { StyledDialogContent } from "./styles";

interface Props {
  persons: SelectorOption[];
  isOpen: boolean;
  title: string;
  sumbitButtonText: string;
  onSumbit: (info: Expense) => void;
  onHide: () => void;
  defaultValues?: Partial<Expense>;
}

function InfoDialog({
  persons,
  isOpen,
  title,
  sumbitButtonText,
  onSumbit,
  onHide,
  defaultValues,
}: Props): React.ReactElement {
  const [debtors, setDebtors] = useState<{ id: string; name: string; amount: string }[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(expenseSchema), defaultValues });

  const hideForm = useCallback(() => {
    onHide();
    reset();
  }, [onHide, reset]);

  const handleSelectDebtors = useCallback(
    (_event: React.SyntheticEvent<Element, Event>, values: SelectorOption[]) => {
      setDebtors(values.map(({ id, label }) => ({ id, name: label, amount: "0" })));
    },
    []
  );

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

  const handleChangeDebtAmount = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { ariaLabel: ownerId, value: amount } = event.target as {
        ariaLabel: string;
        value: string;
      };
      const updatedDebts = debtors.map((debtor) => {
        if (ownerId === debtor.id) return { ownerId, amount: Number(amount) };
        else return { ownerId: debtor.id, amount: Number(debtor.amount) };
      });

      setValue("debts", updatedDebts);
    },
    [debtors.map(({ id, amount }) => `${id}-${amount}`).join()]
  );

  console.log(errors.debts);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <Divider />
      <form onSubmit={submitForm}>
        <StyledDialogContent>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Title *"
              autoComplete="off"
              {...register("title")}
              error={errors.title != null}
            />
            <InputError error={errors.title} />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              multiline={true}
              aria-required="true"
              label="description"
              autoComplete="off"
              {...register("description")}
              error={errors.description != null}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-unit-label">Currency unit *</InputLabel>
            <Select
              labelId="select-unit-label"
              label="Currency unit *"
              defaultValue=""
              {...register("currencyUnit")}
              error={errors.currencyUnit != null}
            >
              <MenuItem value={CurrencyUnit.USD}>{CURRENCY_UNITS_LABELS.USD}</MenuItem>
              <MenuItem value={CurrencyUnit.IRT}>{CURRENCY_UNITS_LABELS.IRT}</MenuItem>
            </Select>
            <InputError error={errors.currencyUnit} />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Total cost *"
              autoComplete="off"
              {...register("totalCost")}
              error={errors.totalCost != null}
            />
            <InputError error={errors.totalCost} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="payer-label">Payer *</InputLabel>
            <Select
              labelId="payer-label"
              label="Payer *"
              defaultValue=""
              {...register("payerId")}
              error={errors.payerId != null}
            >
              {persons.map((person) => (
                <MenuItem key={`payer-${person.id}`} value={person.id}>
                  {person.label}
                </MenuItem>
              ))}
            </Select>
            <InputError error={errors.payerId} />
          </FormControl>
          <FormControl fullWidth>
            <Autocomplete
              multiple
              options={persons}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="Debtors *" />}
              renderOption={(props, option) => (
                <MenuItem {...props} value={option.id}>
                  {option.label}
                </MenuItem>
              )}
              onChange={handleSelectDebtors}
            />
            {errors.debts?.length != null && errors.debts.length > 0
              ? errors.debts.map((error) => <InputError error={error?.amount} />)
              : null}
          </FormControl>
          <FormControl fullWidth onChange={handleChangeDebtAmount}>
            {debtors.map((debtor, index) => {
              const error =
                errors.debts?.length != null && errors.debts[index] != null
                  ? errors.debts[index]?.amount
                  : undefined;

              return (
                <FormControl key={`debtor-${debtor.id}`}>
                  <TextField
                    sx={{ marginBottom: 2 }}
                    label={`Debt of ${debtor.name}`}
                    defaultValue={debtor.amount}
                    error={error != null}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Payment color="error" />
                        </InputAdornment>
                      ),
                    }}
                    aria-required="true"
                    autoComplete="off"
                  />
                  <InputError error={error} />
                </FormControl>
              );
            })}
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
