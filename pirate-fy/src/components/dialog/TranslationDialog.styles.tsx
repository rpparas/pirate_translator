import { makeStyles } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import red from "@material-ui/core/colors/red";

export const useStyles = makeStyles(() => ({
    dialog: {
        minHeight: "35vh",
        minWidth: "40vh",
    },
    output: {
        primary: amber,
        color: "#fff",
    },
    error: {
        color: "#f63c41",
    },
    button: {
        fontSize: "1rem",
        fontWeight: "bold",
        marginTop: "1rem",
        primary: amber,
    },
}));
