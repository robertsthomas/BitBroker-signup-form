import React, { Component } from "react";
import { render } from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.css";

render(<AppRouter />, document.getElementById("app"));
