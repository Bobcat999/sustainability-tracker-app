import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Friends from "../pages/Friends";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Challenges from "../pages/Challenges";
import Achievements from "../pages/Achievements";
import Feedback from "../pages/Feedback";
import { motion, AnimatePresence } from "framer-motion";

const routes = [
  { path: "/", element: <Home />, exact: true },
  { path: "/profile", element: <Profile /> },
  { path: "/friends", element: <Friends /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/challenges", element: <Challenges /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/feedback", element: <Feedback /> },
];

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element, exact }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            element={
              <motion.div
                initial={{ translateX: "-100vw", className: "absolute" }}
                animate={{ translateX: 0, className: "relative" }}
                exit={{ translateX: "100vw" }}
                transition={{ duration: 0.5 }}
              >
                {element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
