import React from "react";
import TextButton from "../../buttons/text/TextButton";
import Category from "./category/Category";
import Rate from "./rate/Rate";
import Price from "./price/Price";

const FilterPanel = ({ filter, changeHandler, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full">
        <span className=" text-xl font-medium ">Category</span>
        <Category filter={filter} changeHandler={changeHandler} />
      </div>
      <div className="w-full">
        <span className="text-xl font-medium ">Filter By Price</span>
        <Price filter={filter} changeHandler={changeHandler}/>
      </div>
      <div className="w-full">
        <span className="text-xl font-medium">Filter By Rate</span>
        <Rate filter={filter} changeHandler={changeHandler} />
      </div>
      <div>
        <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
      </div>
    </div>
  );
};

export default FilterPanel;
