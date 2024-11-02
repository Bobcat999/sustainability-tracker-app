import React from "react";
import { render } from "@testing-library/react";
import Profile, { AccountDetail } from "../pages/Profile";

describe("AccountDetail Component", () => {
  it("displays the correct detail name", () => {
    const { getByText } = render(
      <AccountDetail detailName="Sustainability Score" value={999} />
    );
    expect(getByText("Sustainability Score:")).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    const { getByText } = render(
      <AccountDetail detailName="Sustainability Score" value={999} />
    );
    expect(getByText("999")).toBeInTheDocument();
  });
});
