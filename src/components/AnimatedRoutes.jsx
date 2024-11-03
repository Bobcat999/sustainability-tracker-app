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
import { pages } from "../constants";

// Function that takes all of our pages and animates them in and out of the DOM
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={
              <motion.div
                className="absolute w-full"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                exit={{ x: "100vw" }}
                transition={{ duration: 0.5 }}
              >
                {React.createElement(page.component)}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
