// yarn run build
// yarn run lint
// yarn run lint:fix

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppLoader from "./components/common/app-loader/AppLoader";

ReactDOM.render(
  <React.StrictMode>
    <AppLoader />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
