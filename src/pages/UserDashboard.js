import React from "react";
import TextButton from "../component/buttons/text/TextButton";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const clickHandler = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <TextButton text={"log out"} clickHandler={clickHandler} />
    </div>
  );
};

export default LayoutWrapper(UserDashboard);
