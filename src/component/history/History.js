import React from "react";
import history1 from "../../assets/history1.jpg";
import history2 from "../../assets/history2.jpg";
import { GiSewingMachine , GiSewingNeedle} from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import TextButton from "../buttons/text/TextButton";

const History = () => {
  return (
    
      <div>
        <div className="bg-violet-300 flex flex-row ">
        <div
          className=" w-1/2 bg-no-repeat bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1879154/data/69b4edecf17743469c8a693815055708/16x9_two-columns/637/data.png)` }}
        ></div>
        <div className=" w-full md:w-1/2 px-8 lg:px-16 pt-3 pb-9 flex flex-col">
          <span className=" text-3xl my-6 mx-auto">
            A Brief History of the wilsons
          </span>
          <p className="leading-6 text-gray-900 m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in. Consectetur adipiscing elit.
            Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed sapien.
          </p>
          <span className="text-2xl font-semibold py-3">1950-1999</span>
          <p className="m-0">
            Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed
            sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
            scelerisque felis. consectetur adipiscing elit. Maecenas nibh dolor
          </p>
          <span className="text-2xl font-semibold py-3"> 2000-2018</span>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien.
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-violet-100">
        <div className=" w-full md:w-1/2 flex flex-col px-8 lg:px-16 pt-3 pb-9">
          <span className=" text-3xl my-6 mx-auto">
            Fully Customizability Options Look Beautiful in 2018
          </span>
          <p className="mx-auto leading-6 text-gray-900 m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius.
          </p>
          <div className="flex flex-row justify-between text-6xl my-9">
            <div className="text-center">
              <GiSewingMachine className="mx-auto my-4" />
              <p className="font-semibold text-base">Fully Customizability</p>
            </div>
            <div className="text-center">
              <GiSewingNeedle className="mx-auto my-4" />
              <p className="font-semibold text-base ">Fully Hand Made</p>
            </div>
            <div className="text-center">
              <RiShirtFill className="mx-auto my-4" />
              <p className="font-semibold text-base">Elegant Looks</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/shop">
              <TextButton text={"SHOP NOW"} />
            </Link>
          </div>
        </div>
        <div
          className="w-1/2 bg-no-repeat bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485574/data/dbf60d813f589cd33fd1105e1bdf95a7/16x9_two-columns/637/data.png)` }}
        ></div>
      </div>
      </div>
  );
};

export default History;
