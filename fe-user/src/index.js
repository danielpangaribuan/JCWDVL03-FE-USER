import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// main component
import Main from "./Main";

// render main component
ReactDOM.render(
  // Penggunaan browser router ada di pembahasan practice session 17/11/21 menit 01:35:43
  <Main />,
  document.getElementById("root")
);
