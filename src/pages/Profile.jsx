import React from "react";
import { tree } from "../assets";

const Profile = () => {
  const personDetails = {
    userName: "Bob",
    sustainabilityScore: 999,
  };
  return (
    <div className="flex flex-col justify-start align-middle">
      <div className="my-20 flex flex-col justify-center align-middle gap-3">
        <img
          src={tree}
          className="w-24 h-24 m-auto bg-secondary p-2 rounded-full"
        ></img>
        <div className="m-auto text-3xl">{personDetails.userName}</div>
      </div>
      <div className="flex flex-col justify-start align-middle text-center bg-cream w-80 m-auto rounded-lg">
        <div className="text-xl m-2">Account Details</div>
        <AccountDetail
          detailName={"Sustainability Score"}
          value={personDetails.sustainabilityScore}
        />
      </div>
    </div>
  );
};

export const AccountDetail = ({ detailName, value }) => {
  return (
    <div className="mx-6">
      <span className="text-primary font-bold text-lg">{detailName}:</span>
      <span className="ml-2 font-bold">{value}</span>
    </div>
  );
};

export default Profile;
