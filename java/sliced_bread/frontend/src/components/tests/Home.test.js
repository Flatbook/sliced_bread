import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../../App";
import React from "react";

test("Hero button should route to /checkout", () => {
  render(<App />);

  // click button
  act(() => {
    const goCheckoutLink = document.querySelector("#to-checkout");
    goCheckoutLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // confirm page has moved to Checkout
  const checkoutText = screen.getByText(/Checkout/i);
  expect(checkoutText).toBeInTheDocument;
});
