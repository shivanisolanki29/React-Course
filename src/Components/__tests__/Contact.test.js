import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load placeholder inside contactUs component", () => {
  render(<Contact />);

  const placeholder = screen.getAllByPlaceholderText("name");

  expect(placeholder.length).toBe(1);
});

test("Should load button inside contactUs component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});
