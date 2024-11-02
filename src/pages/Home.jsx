import React from "react";
import SustainabilityScore from "../components/SustainabilityScore";
import LogForm from "../components/LogForm";
import PastActions from "../components/PastActions";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full flex flex-col justify-start items-center gap-2 text-center">
      <SustainabilityScore />
      <LogForm />
      <PastActions />
    </div>
  );
};

export default Home;
