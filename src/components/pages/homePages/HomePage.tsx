import React from "react";
import Home from "./home/Welcome";
import ImageAbout from "./home/ImageAbout";
import Portfolio from "./home/Portfolio";

const HomePage = () => {
  return (
    <>
      <Home />
      {/* <ImageAbout/> */}

      <Portfolio/>
    </>
  );
};

export default HomePage;
