import { foodData } from "./fakeData";

export const foodItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(foodData);
    }, 1000);
  });
};
