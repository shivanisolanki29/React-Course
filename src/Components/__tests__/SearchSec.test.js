import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
// import {act } from "react"
import Mock_data from "../mocks/resListMockData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_data);
    },
  });
});

it("Should search Res List for Pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  //   console.log(cardsBeforeSearch.length);
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchIn");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  //   console.log(cards.length);

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filte Top Rated Resataurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  // console.log(cardsBeforeFilter.length)
expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", { name: "Top rated restaurant" });

  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  // console.log(cardsAfterFilter);
  expect(cardsAfterFilter.length).toBe(1);
});
