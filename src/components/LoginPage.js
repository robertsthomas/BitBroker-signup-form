import React from "react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const LoginPage = () => (
  <div className="login">
    <div>
      <h2>Logged In!</h2>
    </div>
    <div>
      <Link to="/">
        <Typography align="center" color="secondary">
          Home
        </Typography>
      </Link>
    </div>
  </div>
);

export default LoginPage;
