import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { name } from "../package.json";
import App from "./view/App";

const rootEle = document.getElementById("root");
if (!rootEle) {
  document.write('<h1>no container named "root"</h1>');
} else {
  render(
    <StrictMode>
      <Router basename={`/${name}`}>
        <App />
      </Router>
    </StrictMode>,
    rootEle
  );
}
