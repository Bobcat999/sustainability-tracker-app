import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LogForm from "../components/LogForm";
import { getActiveElement } from "@testing-library/user-event/dist/cjs/utils/index.js";

describe("LogForm Component", () => {
  it("displays the current date", () => {
    const { getByText } = render(<LogForm />);
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const currentDate = `${month}-${day}-${year}`;
    expect(getByText(`Date: ${currentDate}`)).toBeInTheDocument();
  });

  it("resets the form when the reset button is clicked", () => {
    const { getByText, getByTestId } = render(<LogForm />);
    const actionInput = getByTestId("action-select");
    const submitButton = getByText("Log it!");

    // Simulate use selecting option
    fireEvent.change(actionInput, { target: { value: "Recycling" } });
    expect(actionInput.value).toBe("Recycling");

    // Simulate user submitting form
    fireEvent.click(submitButton);
    expect(actionInput.value).toBe("");
  });
});
