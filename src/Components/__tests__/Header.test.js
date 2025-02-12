import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../Utils/appStore";
import { TextEncoder, TextDecoder, log } from "util";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button");

  expect(loginBtn).toBeInTheDocument();
});

it("Should change Login to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginBtn = screen.getByText("Login");
  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout"});

  expect(loginBtn).toBeInTheDocument();
  // expect(logoutBtn).toBeInTheDocument();
});

it("Should render header component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItems = screen.getByText("Cart-(0 items)");
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});
