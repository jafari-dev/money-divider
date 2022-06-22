import {
  Button,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { memo, useCallback, useState } from "react";

function TermsLink() {
  const [isTermsDialogOpen, setIsTermsDialogOpen] = useState(false);
  const showTermsDialog = useCallback(() => setIsTermsDialogOpen(true), []);
  const hideTermsDialog = useCallback(() => setIsTermsDialogOpen(false), []);

  return (
    <>
      <Button
        color="info"
        variant="text"
        onClick={showTermsDialog}
        sx={{ marginTop: "-4px", marginLeft: "8px" }}
      >
        (Terms)
      </Button>
      <Dialog open={isTermsDialogOpen}>
        <DialogTitle color="orangered">Terms and Conditions</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography>
            1. This application uses your browser's cookies and local storage to improve the
            performance and your exprerince, nothing any more.
            <br />
            <br />
            2. Avoid entering your important passwords (like the passowrd of your email acccount or
            any social app) because we haven't any responsibility for them.
          </Typography>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant="contained" onClick={hideTermsDialog} children="Close" />
        </DialogActions>
      </Dialog>
    </>
  );
}

export default memo(TermsLink);
