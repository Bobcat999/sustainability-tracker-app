import React from "react";

const PastActionCard = ({ action, date }) => {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };
  return (
    <div className="bg-cream w-80 rounded-lg h-auto p-4 flex flex-col justify-start align-middle gap-5 shadow-lg border-secondary">
      <div className="self-start text-secondary font-bold text-sm">
        Date: {formatDate(date)}
      </div>
      <div className="bg-primary border border-gray-300 rounded-lg p-2 text-white">
        {action}
      </div>
    </div>
  );
};

export default PastActionCard;
