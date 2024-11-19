import React, { useRef, useState } from "react";
import Confetti from "react-confetti";

const actions = [
  "Recycling",
  "Using public transport",
  "Planting a tree",
  "Reducing water usage",
  "Using renewable energy",
];

const LogForm = () => {
  const [action, setAction] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const buttonRef = useRef(null);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const resetForm = () => {
    setAction("");
  };

  const submitForm = () => {
    //check if the form has all of the contents
    if (action === "") {
      return;
    }
    const formContents = {
      action: action,
      date: new Date(),
    };
    resetForm();
    console.log(formContents); //Communicate with backend
    if (showConfetti === false) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  return (
    <div className="bg-cream dark:bg-slate-700 w-80 rounded-lg h-auto p-4 flex flex-col justify-start align-middle gap-5 shadow-lg">
      {showConfetti && (
        <Confetti
          className="absolute top-20"
          numberOfPieces={500}
          gravity={0.3}
          wind={0}
          recycle={false}
          confettiSource={{
            x:
              buttonRef.current.getBoundingClientRect().left +
              buttonRef.current.offsetWidth / 2,
            y:
              buttonRef.current.getBoundingClientRect().top +
              buttonRef.current.offsetHeight / 2,
          }}
        />
      )}
      <div className="self-start text-secondary dark:text-white font-bold text-sm">
        Date: {getCurrentDate()}
      </div>
      <div className="font-bold text-xl text-secondary dark:text-white">
        Log a sustainable action
      </div>
      <select
        className="bg-primary border border-gray-300 rounded-lg p-2 text-white"
        value={action}
        onChange={(e) => {
          setAction(e.target.value);
        }}
        data-testid="action-select"
      >
        <option disabled value="" className="text-gray-300">
          Select an action
        </option>
        {actions.map((action, index) => (
          <option key={index} value={action} className="text-white">
            {action}
          </option>
        ))}
      </select>
      <div className="text-error font-bold">
        TODO: figure out how to authenticate this
      </div>
      <button
        ref={buttonRef}
        className="bg-primary w-fit m-auto text-center text-xl text-white font-bold px-2 rounded-full"
        onClick={submitForm}
      >
        Log it!
      </button>
    </div>
  );
};

export default LogForm;
