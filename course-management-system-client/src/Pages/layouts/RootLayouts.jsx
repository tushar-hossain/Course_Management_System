import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import TitleMatch from "../../components/TitleMatch";

const RootLayouts = () => {
  return (
    <div>
      <TitleMatch />
      <Navbar />
      <div className="min-h-[calc(100vh-422px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;
