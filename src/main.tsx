import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./view/App";
import { name } from "../package.json";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${name}`}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
