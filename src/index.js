import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="loading" />}>
      <DarkModeContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </DarkModeContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
