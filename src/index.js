import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const { worker } = require("./mocks/browser");
worker.start({
  onUnhandledRequest: "bypass"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
