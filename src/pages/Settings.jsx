import React from "react";
import { useSettings } from "../state/SettingsContext";

const Settings = () => {
  const { settings, dispatch } = useSettings();
  console.log("Settings State", settings);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col h-full w-fit bg-slate-200 dark:bg-slate-700 p-4">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Settings</h2>
        <ul>
          <li className="mb-2">
            <a href="#account" className="text-accent dark:text-tertiary">
              Account
            </a>
          </li>
          <li className="mb-2">
            <a href="#notifications" className="text-accent dark:text-tertiary">
              Notifications
            </a>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex flex-col flex-grow p-4">
        <SettingsSection title="Account Settings" id="account">
          <SettingsToggle
            label="Dark Mode"
            value={settings.darkMode}
            onChange={() => {
              dispatch({ type: "TOGGLE_DARK_MODE" });
            }}
          />
        </SettingsSection>
        <SettingsSection title="App Settings" id="notifications">
          <SettingsSelect
            label="Language"
            value={settings.language}
            onChange={(e) => {
              dispatch({
                type: "SET_LANGUAGE",
                payload: e.target.value,
              });
            }}
            options={[
              { value: "en", label: "English" },
              { value: "es", label: "Español" },
              { value: "fr", label: "French" },
              { value: "de", label: "Danish" },
            ]}
          />
        </SettingsSection>
      </div>
    </div>
  );
};

const SettingsSection = ({ title, id, children }) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
      {children ?? <div>No settings available for this section</div>}
    </section>
  );
};

const SettingsToggle = ({ label, value, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChange}
        checked={value}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
};

const SettingsSelect = ({ label, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="block w-full mt-1 p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Settings;
