import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useSettings } from "./state/SettingsContext";

function App() {
  const { settings, dispatch } = useSettings();

  return (
    <div className={`${settings.darkMode ? "dark" : ""}`}>
      <div
        className={`relative bg-white dark:bg-secondary h-screen z-0 ${
          settings.darkMode ? "dark" : ""
        }`}
      >
        <Navbar />
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
