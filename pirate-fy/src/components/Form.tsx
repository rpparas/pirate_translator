import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
import TranslationModal from "./TranslationDialog";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  input: {
    marginTop: "1.5rem",
  },
  button: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  spinner: {
    marginLeft: 5
  }
}));

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const classes = useStyles();

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    setLoading(true);

    // const baseUrl = "https://api.funtranslations.com/translate/pirate.json?text=";
    const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(baseUrl + encodeURIComponent(inputValue))
      .then((response) => response.json())
      .then((response) => {
        setTranslation(response.contents.translated);
        setShowTranslation(true);
        // alert(response.contents.translated);
      })
      // .catch((error) => alert(error.message))
      .catch((error) => {
        setTranslation("Invalid translation");
        setShowTranslation(true);
        // alert(response.contents.translated);
      })
      .finally(() => setLoading(false));

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
      <TranslationModal
        showTranslation={showTranslation}
        translation={translation}
      />
    </Container>
  );
};

export default Form;
