import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders landing page components ", () => {
  render(<App />);

  // Hero section
  const titleElement = screen.getByText(/Life Smoothie/i);
  expect(titleElement).toBeInTheDocument();

  // About Us section
  const aboutElement = screen.getByText(/About Us/i);
  expect(aboutElement).toBeInTheDocument();
});
