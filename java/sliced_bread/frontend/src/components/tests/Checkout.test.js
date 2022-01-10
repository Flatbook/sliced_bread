import { act, render, screen } from "@testing-library/react";
import React from "react";
import App from "../../App";

test("Back Button should route back to /", () => {
  render(<App />);

  // Click Button -> Checkout
  act(() => {
    const goCheckoutLink = document.querySelector("#to-checkout");
    goCheckoutLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Click Back Button -> Home
  act(() => {
    act(() => {
      const goHome = document.querySelector("#back-button");
      goHome.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  });

  // Confirm Home Page
  const titleElement = screen.getByText(/Life Smoothie/i);
  expect(titleElement).toBeInTheDocument();
});
