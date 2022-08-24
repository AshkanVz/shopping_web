import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { menuList } from "../../data/dummyData/dummyData";
import { Tooltip } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const { user } = UserAuth();
  const wishList = useSelector((state) => state.wish.wishListItems);
  const [show, setShow] = useState(false);
  const showHandler = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  return (
    <div
      onClick={() => setShow(false)}
      className=" max-w-full flex flex-row justify-between items-center p-5 bg-white sticky top-0 left-0 right-0 z-40 shadow-md"
    >
      {/* hamburger menu */}
      <button className="md:hidden " onClick={showHandler}>
        {show ? (
          <IoMdClose className=" text-3xl text-slate-800 transition-opacity duration-1000" />
        ) : (
          <FiMenu className=" text-3xl text-slate-800 transition-opacity duration-1000" />
        )}
      </button>

      {/* logo */}
      <div className="hidden sm:inline">
        <Link to="/">
          <img src="https://www.wilsonsleather.com/media/logo/stores/22/WL_LeatherMadeSince1899_Blk_logo.png" width="200" className="w-8 h-8" alt="site logo" />
        </Link>
      </div>

      {/* menu items */}
      <div className="flex flex-row items-center">
        <ul
          className={`${
            show ? `h-52 md:h-0` : `h-0 `
          } transition-height duration-200 flex-col w-full absolute top-20 left-0 right-0 flex md:flex-row md:static md:items-center px-5 bg-white shadow-md`}
        >
          {menuList.map((item) => (
            <Link
              to={item.to}
              key={item.id}
              className={`${
                show ? ` visible ` : ` invisible  md:visible `
              } md:px-1 md:py-1 py-2 mx-2 text-slate-800 font-semibold hover:border-b hover:border-yellow-400`}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>

        {/* btns */}
        <div>
          <ul className="flex flex-row">
            <Tooltip title="Log In/ SignUp">
              <Link
                to={user ? "/dashboard" : "/login"}
                className="p-2 m-1  rounded-full   text-xl text-gray-500 hover:bg-slate-800 hover:text-gray-50 transition duration-500"
              >
                <AiOutlineUser />
              </Link>
            </Tooltip>
            <Tooltip title="Shopping Cart">
              <Link
                to="/cart"
                className=" relative p-2 m-1  rounded-full  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500"
              >
                <AiOutlineShoppingCart />
                
              </Link>
            </Tooltip>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
