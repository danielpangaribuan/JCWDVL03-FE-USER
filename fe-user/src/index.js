import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/login_overlay.css"; //
import "./assets/css/style6.css"; //
import "./assets/css/shop.css"; //
import "./assets/css/owl.carousel.css"; //
import "./assets/css/owl.theme.css"; //
import "./assets/css/style.css"; //
import "./assets/css/fontawesome-all.css"; //
import "./assets/css/bootstrap.css"; //
import { Provider } from "react-redux"; // Menyambungkan semua data di global store ke semua komponen di react

// main component
import Main from "./Main";

import { createReduxStore } from "./redux";

// create global store
const STORE = createReduxStore();

// render main component
ReactDOM.render(
  <Provider store={STORE}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
