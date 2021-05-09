import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
import TranslationModal from "../dialog/TranslationDialog";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./Form.styles";
import { translationState, dialogState } from "../../states";

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const setTranslation = useSetRecoilState(translationState);
  const setDialogOpen = useSetRecoilState(dialogState);

  const classes = useStyles();

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setLoading(true);

    // fetch translation via 3rd party API
    const baseUrl =
      "https://api.funtranslations.com/translate/pirate.json?text=";
    fetch(baseUrl + encodeURIComponent(inputValue))
      .then((response) => response.json())
      .then((response) => {
        setTranslation(
          response?.contents
            ? response.contents.translated
            : response.error.message
        );
      })
      .catch((error) => {
        setTranslation(error.message);
      })
      .finally(() => {
        setDialogOpen(true);
        setLoading(false);
      });
  };

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  return (
    <Container>
      <form
        className=""
        noValidate
        onClick={(evt): void => evt.stopPropagation()}
        onSubmit={onSubmit}
      >
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
          disabled={inputValue.trim().length == 0}
        >
          PIRATE-FY
          {!loading && <FlagIcon />}
          {loading && <CircularProgress className={classes.spinner} />}
        </Button>
      </form>

      <TranslationModal />
    </Container>
  );
};

export default Form;
