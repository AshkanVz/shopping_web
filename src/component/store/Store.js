import React, { useEffect, useState } from "react";
import { products } from "../../data/productsApi/products";
import ProductsList from "./productsList/ProductsList";
import FilterPanel from "./filterPanel/FilterPanel";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaSadTear } from "react-icons/fa";

const Store = () => {
  const [filteredList, setFilteredList] = useState(products);
  const [filter, setFilter] = useState({
    category: "",
    price: [0, 300],
    rate: "All",
    sort: "",
  });
  const applyFilter = () => {
    let filtered = products;

    if (filter.category === "") {
      filtered = filtered.filter(
        (item) =>
          item.category === "men's clothing" ||
          item.category === "jewelery" ||
          item.category === "electronics" ||
          item.category === "women's clothing"
      );
    } else {
      filtered = filtered.filter((item) => item.category === filter.category);
    }

    const minPrice = filter.price[0];
    const maxPrice = filter.price[1];
    filtered = filtered.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    if (filter.rate === "All") {
      filtered = filtered.filter(
        (item) =>
          Math.floor(item.rating.rate) === 1 ||
          Math.floor(item.rating.rate) === 2 ||
          Math.floor(item.rating.rate) === 3 ||
          Math.floor(item.rating.rate) === 4 ||
          Math.floor(item.rating.rate) === 5
      );
    } else {
      filtered = filtered.filter(
        (item) => Math.floor(item.rating.rate) === Number(filter.rate)
      );
    }

    if (filter.sort === "lthp") {
      filtered.sort((a, b) => a.price - b.price);
    }
    if (filter.sort === "htlp") {
      filtered.sort((a, b) => b.price - a.price);
    }
    if (filter.sort === "lthr") {
      filtered.sort((a, b) => a.rating.rate - b.rating.rate);
    }
    if (filter.sort === "htlr") {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredList(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilter({ category: "", price: [1, 300], rate: "All", sort: "" });
  };

  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop{" "}
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Shop</span>
      </div>
      <div className="flex flex-col sm:flex-row items-start bg-gray-50">
        <div className="flex flex-col w-full sm:w-80 lg:w-96 p-5 bg-gray-50">
          <FilterPanel
            changeHandler={changeHandler}
            filter={filter}
            setFilter={setFilter}
            applyFilter={applyFilter}
            resetFilters={resetFilters}
          />
        </div>

        <div className=" flex flex-col w-full justify-start items-start p-5">
          <div className="pb-2">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Sort
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={filter.sort}
                onChange={changeHandler}
                label="Age"
                name="sort"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"lthp"}>Price:Low-High</MenuItem>
                <MenuItem value={"htlp"}>Price:High-Low</MenuItem>
                <MenuItem value={"lthr"}>Rate:Low-High</MenuItem>
                <MenuItem value={"htlr"}>Rate:High-Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ProductsList filteredList={filteredList} />

          {filteredList.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-auto py-40">
              <FaSadTear className="text-9xl text-slate-800" />
              <br />
              <span className="text-2xl text-slate-800">
                Oops...!!
                <br /> Filter Again
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Store;
