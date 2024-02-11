import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import App from "./App";
import { store } from "./store";
import { history } from "./services/axios.service";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
