import { makeStyles } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";

export const useStyles = makeStyles(() => ({
  box: {
    minWidth: "500px",
  },
  output: {
    primary: amber,
  },
  button: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginTop: "1rem",
    primary: amber,
  },
}));
