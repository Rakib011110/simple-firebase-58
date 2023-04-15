import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
