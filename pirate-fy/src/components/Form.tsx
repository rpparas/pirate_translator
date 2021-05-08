import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
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
}));

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [translation, setTranslation] = useState("");

  const classes = useStyles();

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    const baseUrl = "https://api.funtranslations.com/translate/pirate.json?text=";
    fetch(baseUrl + encodeURIComponent(inputValue))
      .then((response) => response.json())
      .then((response) => {
        setTranslation(response.contents.translated)
        alert(response.contents.translated);
      })
      .catch((error) => alert(error));

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
          label="Your Textaaa:"
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
        >
          PIRATE-FY
          <FlagIcon />
        </Button>
      </form>
    </Container>
  );
};

export default Form;
