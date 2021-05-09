import React from "react";
import { useRecoilState } from "recoil";
import { translators } from "../../lib/translators";
import { translationDataModel } from "../../data-model";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import { useStyles } from "./TranslationDialog.styles";

interface Props {
    fetchTranslation: (lang: string) => void;
}

const capitalizeFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const TranslationDialog = (props: Props) => {
    const [translation, setTranslation] = useRecoilState(translationDataModel);

    const onCloseDialog = () => {
        setTranslation({
            ...translation,
            openDialog: false,
        });
    };

    const onChangeLanguage = (evt: React.ChangeEvent<HTMLInputElement | {}>, lang: string) => {
        // only make request if selected lang is in known list of available languages
        if (translators.includes(lang.toLowerCase())) {
            props.fetchTranslation(lang.toLowerCase());
        }
    };

    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={translation.openDialog}
                classes={{ paper: classes.dialog }}
                aria-labelledby="Translation"
                aria-describedby="Your input shown as its translation in pirate lingo"
            >
                <DialogTitle>Translation:</DialogTitle>
                <DialogContent>
                    <DialogContentText className={`${classes.output} ${!!translation.errorMessage ? classes.error : ""}`}>
                        {!!translation.translated && translation.translated}
                        {!!translation.errorMessage && translation.errorMessage}
                    </DialogContentText>
                    <Autocomplete
                        options={translators}
                        getOptionLabel={(option) => capitalizeFirst(option)}
                        style={{ paddingTop: 20 }}
                        onInputChange={onChangeLanguage}
                        renderInput={(params) => <TextField {...params} label="Translate in another language:" variant="outlined" />}
                    />
                    {translation.isLoading && <CircularProgress style={{ marginTop: 5 }} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog} color="primary" autoFocus className={classes.button}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TranslationDialog;
