import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./Layouts/main";

import "./app.scss";

ReactDOM.render(
  <Router>
    <MainLayout />
  </Router>,
  document.getElementById("root")
);
