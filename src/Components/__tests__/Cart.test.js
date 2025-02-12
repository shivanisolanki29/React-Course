import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RES_MENU from "../mocks/resMenuMockData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_MENU);
    },
  });
});

it("Should render Restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const accordionHeader = screen.getByText("Recommended (20)");

  expect(accordionHeader).toBeInTheDocument();
});

it("Should render items on click accordian header", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);
});

it("Should add item on cart on click Add+ Button", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const cartItemsBeforeAddItem = screen.getByText("🛒Cart - (0 items)");
  expect(cartItemsBeforeAddItem).toBeInTheDocument();
  const accordionHeader = screen.getByText("Veg Pizza (14)");
  fireEvent.click(accordionHeader);

  //   const foodItems = screen.getAllByTestId("foodItems");
  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("🛒Cart - (1 items)");
  expect(cartItems).toBeInTheDocument();

  fireEvent.click(cartItems);

  const items = screen.getAllByTestId("foodItems");
  // console.log(items.length);

  expect(items.length).toBe(15);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  const cartItemsAfterClearCart = screen.getByText("🛒Cart - (0 items)");
  expect(cartItemsAfterClearCart).toBeInTheDocument();

  const itemsAfterClearCart = screen.getAllByTestId("foodItems");
  // console.log(itemsAfterClearCart.length);
  expect(itemsAfterClearCart.length).toBe(14);
  expect(screen.getByText("Cart is empty.Please add item to the cart!")).toBeInTheDocument()
});
