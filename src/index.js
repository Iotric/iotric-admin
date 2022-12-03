import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppNew from "./AppNew";
import Spinner from "./components/Spinner/Spinner";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./redux/store";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/UI/extendtheme";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <DarkModeContextProvider>
          <Provider store={store}>
            <AppNew />
            {/* <App/> */}
          </Provider>
        </DarkModeContextProvider>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
