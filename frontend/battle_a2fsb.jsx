import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  // TESTING - START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING - END

  ReactDOM.render(<h1>Battle a2f SB</h1>, root);
});