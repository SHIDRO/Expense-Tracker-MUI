import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { SpeechProvider } from "@speechly/react-client";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SpeechProvider
      appId="033f9651-6818-497e-836f-e9dfa2d4844c"
      language="en-US"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SpeechProvider>
  </BrowserRouter>
);
