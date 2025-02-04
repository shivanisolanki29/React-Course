import { Sum } from "../sum";

test("Sum fucntion should calculate the sum of 2 numbers", () => {
  const result = Sum(2, 4);

  //Assertion
  expect(result).toBe(6);
});
