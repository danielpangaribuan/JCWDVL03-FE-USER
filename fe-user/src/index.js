import React from "react";
import ReactDOM from "react-dom";
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

// main component
import Main from "./Main";

// render main component
ReactDOM.render(
  // <Provider>
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  // </Provider>,
  document.getElementById("root")
);
