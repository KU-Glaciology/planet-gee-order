import React from "react";
import ReactDOM from "react-dom";
import getStore from "./app-bundles";
import cache from "./utils/cache";

import App from "./App";

import "./css/bootstrap/css/bootstrap.cosmo.min.css";
import "./css/mdi/css/materialdesignicons.min.css";

import "./css/index.css";

window.localStorage.removeItem("debug");
// window.localStorage.setItem("debug", true);

cache.getAll().then((initialData) => {
  const store = getStore(initialData);
  window.store = store;
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
});
