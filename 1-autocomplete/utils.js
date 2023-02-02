import { cars } from "./data.js";

export const getSuggestions = (keyword) => {
  const result = cars.filter(
    (car) =>
      car.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
  );
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), 1000);
  });
};
