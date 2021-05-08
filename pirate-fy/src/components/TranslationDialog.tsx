import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import { makeStyles } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";

interface Props {
  showTranslation: boolean;
  translation: string;
}

const useStyles = makeStyles(() => ({
  output: {
    primary: amber
  },
  button: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
    primary: amber,
  },
}));

const TranslationDialog = (props: Props) => {
    const onCloseDialog = () => {};

    const classes = useStyles();

    return (
      <div>
        <Dialog
          open={props.showTranslation}
          aria-labelledby="Pirate Translation"
          aria-describedby="Your input shown as its translation in pirate lingo"
        >
          <DialogTitle>Pirate Translation:</DialogTitle>
          <DialogContent>
            <DialogContentText id="translation">
              <h3 className={classes.output}>{props.translation}</h3>
            </DialogContentText>
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
