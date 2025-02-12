// import { fireEvent, render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_Data from "../mocks/resListMockData.json";
// import { BrowserRouter } from "react-router";
// import { act } from "react";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_Data);
//     },
//   });
// });

// test("Should render the body component with search", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const searchBtn = screen.getByRole("button", { name: "search" });
//   const searchInput = screen.getByTestId("searchIn");

//   fireEvent.change(searchInput, { target: { value: "pizza" } });
//   fireEvent.click(searchBtn);
//   const cards = await screen.findAllByTestId("resCard");
//   console.log(cards.length);
//   expect(cards.length).toBe(2);
// });
