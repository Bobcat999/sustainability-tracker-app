import React, { createContext, useContext, useReducer } from "react";
import { settingsInitialState, settingsReducer } from "./settingsReducer";

export const SettingsContext = createContext(null);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(
    settingsReducer,
    settingsInitialState
  );
  return (
    <SettingsContext.Provider value={{ settings, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
