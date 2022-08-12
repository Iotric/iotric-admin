import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="loading" />}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
