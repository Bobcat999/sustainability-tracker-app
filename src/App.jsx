import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-white h-screen z-0">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
