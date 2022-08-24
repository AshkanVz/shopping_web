import { products } from "../data/productsApi/products";

export const categoryNumber = (category) => {
  if ((category === "")) {
    return products.length;
  } else {
    return products.filter((item) => item.category === category).length;
  }
};
