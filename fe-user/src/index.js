import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/login_overlay.css";
import "./assets/css/style6.css";
import "./assets/css/shop.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/owl.theme.css";
import "./assets/css/style.css";
import "./assets/css/fontawesome-all.css";

// main component
import Main from "./Main";

// render main component
ReactDOM.render(
  // Penggunaan browser router ada di pembahasan practice session 17/11/21 menit 01:35:43
  <Main />,
  document.getElementById("root")
);
