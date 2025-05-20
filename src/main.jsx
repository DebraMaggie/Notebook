import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import ReduxProvider from "./ReduxProvider";

ReactDom.createRoot(document.getElementById("root")).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
