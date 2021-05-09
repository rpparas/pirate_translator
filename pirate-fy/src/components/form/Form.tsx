import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
import TranslationModal from "../dialog/TranslationDialog";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./Form.styles";
import { translationDataModel } from "../../data-model";

const Form = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [translation, setTranslation] = useRecoilState(translationDataModel);

    const classes = useStyles();

    const onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();
        fetchTranslation("pirate");
    };

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    };

    // fetch translation via 3rd party API
    const fetchTranslation = (lang: string | null) => {
        setTranslation({
            ...translation,
            isLoading: true,
        });

        // TODO: figure out the limit for text to be added as url param
        // TODO: check if text send via header has a higher limit
        if (inputValue.trim().length > 2048) {
          alert("Your input is too long to be processed (exceeds 2048 chars).")
          return;
        }

        const baseUrl = `https://api.funtranslations.com/translate/${!!lang ? lang : "pirate"}.json?text=`;
        fetch(baseUrl + encodeURIComponent(inputValue.trim()))
            .then((response) => response.json())
            .then((response) => {
                setTranslation({
                    ...translation,
                    translated: response?.contents ? response.contents.translated : "",
                    errorMessage: response?.error?.message ? response.error.message : "",
                    isLoading: false,
                    openDialog: true,
                });
            })
            .catch((error) => {
                setTranslation({
                    ...translation,
                    translated: "",
                    errorMessage: "There was an error requesting translation.",
                    isLoading: false,
                    openDialog: true,
                });
            });
    };

    return (
        <Container>
            <form className="" noValidate onClick={(evt): void => evt.stopPropagation()} onSubmit={onSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="input-text"
                    label="Your Text:"
                    name="input-text"
                    className={classes.input}
                    placeholder="Enter English text to translate to Pirate lingo"
                    autoFocus
                    value={inputValue}
                    onChange={onChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    onSubmit={onSubmit}
                    disabled={inputValue.trim().length === 0}
                >
                    PIRATE-FY
                    {!translation.isLoading && !translation.openDialog && <FlagIcon />}
                    {translation.isLoading && !translation.openDialog && <CircularProgress className={classes.spinner} />}
                </Button>
            </form>

            <TranslationModal fetchTranslation={fetchTranslation} />
        </Container>
    );
};

export default Form;
