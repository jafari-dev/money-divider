import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Typography,
  Checkbox,
  FormLabel,
} from "@mui/material";
import { memo, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { InputError } from "../../../../components";
import { currencyUnitLabels } from "../../../../utilities";
import { CurrencyUnit } from "../../../../utilities/types";
import { initializationSchema, FormInitializationData } from "../../utilities/forms-schema";
import TermsLink from "./terms-link";

function InitializerForm() {
  const [isTermsApproved, setIsTermsApproved] = useState(false);
  const toggleTermsApproval = useCallback(() => setIsTermsApproved((previous) => !previous), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInitializationData>({
    resolver: zodResolver(initializationSchema),
  });

  const submitForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      void handleSubmit((values) => values)(event);
    },
    [handleSubmit]
  );

  return (
    <form onSubmit={submitForm}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={2}>
        Application Configuration
      </Typography>
      <Grid container paddingY={4} columnSpacing={2} rowGap={4}>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Full name *"
              autoComplete="off"
              {...register("fullName")}
              error={errors.fullName != null}
            />
            <InputError error={errors.fullName} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Password *"
              autoComplete="off"
              {...register("password")}
              error={errors.password != null}
            />
            <InputError error={errors.password} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <TextField
              aria-required="true"
              label="Phone number *"
              autoComplete="off"
              {...register("phone")}
              error={errors.phone != null}
            />
            <InputError error={errors.phone} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="select-unit-label">Currency unit *</InputLabel>
            <Select
              labelId="select-unit-label"
              label="Currency unit *"
              defaultValue=""
              {...register("defaultCurrencyUnit")}
              error={errors.defaultCurrencyUnit != null}
            >
              <MenuItem value={CurrencyUnit.USD}>{currencyUnitLabels.USD}</MenuItem>
              <MenuItem value={CurrencyUnit.IRR}>{currencyUnitLabels.IRR}</MenuItem>
            </Select>
          </FormControl>
          <InputError error={errors.defaultCurrencyUnit} />
        </Grid>
        <Grid item xs={12} textAlign="center" marginTop={2}>
          <Checkbox id="terms-checkbox" onChange={toggleTermsApproval} checked={isTermsApproved} />
          <FormLabel htmlFor="terms-checkbox">I agree the terms and conditions</FormLabel>
          <TermsLink />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            disabled={!isTermsApproved}
            size="large"
            color="secondary"
            type="submit"
            variant="contained"
          >
            Initialize Application
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default memo(InitializerForm);
