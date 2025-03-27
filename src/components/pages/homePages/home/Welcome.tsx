"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import scss from "./Welcome.module.scss";
import promgrad from "@/assets/promgrad.svg";
import bimkg from "@/assets/welcome/Vector (2).png";
import archvibe from "@/assets/Archi.svg";
import ModalWindow from "@/components/ui/ModalWindow";

const slides = [
  { logo: promgrad, company: "ПРОМГРАД" },
  { logo: bimkg, company: "BIM.KG" },
  { logo: archvibe, company: "ARCHI VIBE" },
];

const Welcome = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.slideContainer}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={
                  index === activeSlide ? scss.slideActive : scss.slideHidden
                }
              >
                <div className={scss.logoWrapper}>
                  <Image
                    src={slide.logo}
                    alt={slide.company}
                    width={185}
                    height={185}
                  />
                </div>
                <h2>{slide.company}</h2>
              </div>
            ))}
          </div>
          <div>
            <h1>
              ОТ ИДЕИ ДО ГОТОВОГО ПРОЕКТА
              <br />
              ТОЧНОСТЬ И КАЧЕСТВО В КАЖДОМ ЧЕРТЕЖЕ
            </h1>
          </div>
          <h4>Профессиональные чертежи и проектирование зданий</h4>
          <button className={scss.btn} onClick={() => setModalActive(true)}>
            ПромГрад!
          </button>
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </section>
  );
};

export default Welcome;
