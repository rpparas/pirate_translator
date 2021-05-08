import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import { useStyles } from "./TranslationDialog.styles";
import { translationState, dialogState } from "../states";

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
                    <h3 className={classes.output}>{translation}</h3>
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
