import { motion } from "framer-motion";
import React, { useState } from "react";
import PastActionCard from "./PastActionCard";

const actions = [
  {
    action: "idk",
    date: new Date(),
  },
  {
    action: "idk2",
    date: new Date(),
  },
];

const PastActions = () => {
  const [showPastActions, setShowPastActions] = useState(false);
  return (
    <div className="bg-cream w-80 rounded-lg shadow-lg font-bold">
      {!showPastActions ? (
        <button
          onClick={() => {
            setShowPastActions(true);
          }}
        >
          Show Past Actions
        </button>
      ) : (
        <motion.div
          initial={{
            height: "0",
          }}
          animate={{
            height: "auto",
          }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <button
            onClick={() => {
              setShowPastActions(false);
            }}
          >
            Hide Past Actions
          </button>
          {actions.map((value, index) => {
            return (
              <PastActionCard
                action={value.action}
                date={value.date}
                key={index}
              />
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default PastActions;
