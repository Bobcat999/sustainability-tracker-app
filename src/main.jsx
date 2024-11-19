import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SettingsProvider } from "./state/SettingsContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SettingsProvider>
      <BrowserRouter basename="/sustainability-tracker-app">
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </StrictMode>
);
