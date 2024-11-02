import React from "react";
import { tree } from "../assets";

const SustainabilityScore = () => {
  //Todo hookup a backend database
  const sustainabilityScore = 99999;
  return (
    <div className="text-white font-extrabold font-mono text-6xl mt-12 mb-12 bg-secondary p-4 rounded-lg shadow-lg shadow-slate-500 flex flex-row justify-center align-middle">
      <span>{sustainabilityScore}</span>
      <img src={tree} alt="tree" className="w-14 h-14" />
    </div>
  );
};

export default SustainabilityScore;
