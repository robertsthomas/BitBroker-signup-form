import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import SignUp from "../components/SignUp";
import LoginPage from "../components/LoginPage";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#192b41"
    }
  }
});

export default class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/" component={SignUp} exact />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
