import React, { FC, ReactNode } from "react";
import scss from "./LayoutSlice.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface LayoutSliceProps {
  children: ReactNode;
}

const LayoutSlice: FC<LayoutSliceProps> = ({ children }) => {
  return (
    <div id={scss.LayoutSlice}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSlice;
