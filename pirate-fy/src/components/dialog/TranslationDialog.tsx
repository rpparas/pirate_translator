import { useRecoilState, useRecoilValue } from "recoil";
import { translators } from "../../lib/translators";
import { translationState, dialogState } from "../../states";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import { useStyles } from "./TranslationDialog.styles";

const capitalizeFirst = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

const TranslationDialog = () => {
  const translation = useRecoilValue(translationState);
  const [dialogOpen, setDialogOpen] = useRecoilState(dialogState);

  const onCloseDialog = () => setDialogOpen(false);

  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={dialogOpen}
        aria-labelledby="Pirate Translation"
        aria-describedby="Your input shown as its translation in pirate lingo"
      >
        <DialogTitle>Pirate Translation:</DialogTitle>
        <DialogContent className="classes.box">
          <DialogContentText id="translation">
            <h3 className={classes.output}>{translation.translated}</h3>
          </DialogContentText>
          <Autocomplete
            id="combo-box-demo"
            options={translators}
            getOptionLabel={(option) => capitalizeFirst(option)}
            style={{ width: 300 }}
            // onChange={}
            renderInput={(params) => (
              <TextField {...params} label="Translate in another language" variant="outlined" />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onCloseDialog}
            color="primary"
            autoFocus
            className={classes.button}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TranslationDialog;
