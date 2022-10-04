import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppNew from "./AppNew";
import Spinner from "./components/Spinner/Spinner";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <DarkModeContextProvider>
        <Provider store={store}>
          <AppNew />
          {/* <App/> */}
        </Provider>
      </DarkModeContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
