import { blogs } from "../data/blogs/blogs";

export const yearNumber = (year) => {
  if ((year === "All")) {
    return blogs.length;
  } else {
    return blogs.filter((item) => item.year == year).length;
  }
};
