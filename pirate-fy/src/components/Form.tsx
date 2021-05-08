import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlagIcon from "@material-ui/icons/Flag";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  const classes = useStyles();

  return (
    <Container>
      <form className="" noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="english-text"
          label="Your Text:"
          name="english-text"
          className={classes.input}
          placeholder="Enter English text to translate to Pirate lingo"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
        >
          PIRATE-FY
          <FlagIcon />
        </Button>
      </form>
    </Container>
  );
};

export default Form;
