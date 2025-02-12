import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });

  afterAll(() => {
    // console.log("After All");
  });

  afterEach(() => {
    // console.log("After each");
  });

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

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const buttons = screen.getAllByRole("textbox");
    // console.log(buttons.length);

    expect(buttons.length).toBe(2);
  });
});
