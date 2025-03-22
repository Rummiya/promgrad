"use client";
import React, { useState, useEffect } from "react";
import scss from "./ImageAbout.module.scss";
import { AboutImages } from "@/contstants/links";
import Image from "next/image";

const AboutImage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          {AboutImages.map((el) => (
            <div
              className={scss.mobileWrapper}
              key={el.id}
              style={{
                flexDirection:
                  windowWidth <= 768
                    ? "column"
                    : el.id % 2 === 1
                    ? "row-reverse"
                    : "row",
              }}
            >
              <div className={scss.information}>
                <h1 className={scss.title}>{el.title}</h1>
                <p className={scss.text}>{el.text}</p>
              </div>
              <div className={scss.images}>
                <Image className={scss.image} src={el.images} alt={el.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
