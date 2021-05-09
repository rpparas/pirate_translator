import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import amber from "@material-ui/core/colors/amber";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: amber,
    secondary: {
      main: "#b9f6ca",
    },
  },
});

ReactDOM.render(
  // use Recoil for global state management
  <RecoilRoot>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);

reportWebVitals();
