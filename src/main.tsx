import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./view/App";
import docConf from "../doc.config";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={docConf.basename}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
