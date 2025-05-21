import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import ReduxProvider from "./ReduxProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
