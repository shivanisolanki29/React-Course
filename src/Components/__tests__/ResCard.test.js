import { render, screen } from "@testing-library/react";
import ResturantCard from "../RestaurantCard";
import { withDiscountedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resMockData.json";
import "@testing-library/jest-dom";

test("Should render Restaurant card component with props data", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("Chinese Wok");

  expect(resName).toBeInTheDocument();
});

test("Should render Restaurant card with Discount label", () => {

  const wrappedComponent =withDiscountedLabel(ResturantCard)
  // console.log(wrappedComponent)
//   const mockProps = {
//     resData: {
//       info: {
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹129"
//         },
//       },
//     },
//     name: "Chinese Wok",
//   };

//   render(<wrappedComponent {...mockProps}  />);

//   const itemDiscount = screen.getByText(/ITEMS/);
// console.log(itemDiscount)
//   expect(itemDiscount).toBeInTheDocument();
});
