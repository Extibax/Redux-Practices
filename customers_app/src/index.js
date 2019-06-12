/* Modules */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

/* Components */
import App from "./App";

/* Styles */
import "./index.css";

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootComponent, document.getElementById("root"));
