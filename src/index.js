//import ReactDOM from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import "./i18n";

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById("root")
);
