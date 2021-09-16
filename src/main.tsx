import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./view/App";
import { name } from "../package.json";

ReactDOM.render(
  <StrictMode>
    <Router basename={`/${name}`}>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
