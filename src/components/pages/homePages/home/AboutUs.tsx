"use client";
import { useRef, useState } from "react";
import scss from "./AboutUs.module.scss";
import Image, { StaticImageData } from "next/image";
import article from "@/assets/Image.png";
import { infos } from "@/constants/links";

interface IInfosType {
  id: number;
  img: StaticImageData;
  title: string;
  type: string;
  text: string;
  year: number;
  realisation: number;
  clients: number;
}

export const AboutUs = () => {
  const [activeInfo, setActiveInfo] = useState<IInfosType>(infos[0]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imagesRef = useRef<Map<number, HTMLDivElement | null>>(new Map());

  return (
    <section id={scss.aboutUs}>
      <div className="container">
        <div className={scss.about}>
          <div className={scss.images}>
            <Image className={scss.img} src={article} alt="article" />
          </div>
          <h1>О Нас</h1>
          <p>
            Наша компания объединяет три специализированные организации, каждая
            из которых занимается проектированием и разработкой строительных
            решений. Мы создаем качественные чертежи и техническую документацию,
            обеспечивая надежность и точность на всех этапах проектирования.
          </p>
        </div>
        <div className={scss.box}>
          <div className={scss.logos}>
            <div>
              
            </div>
            {infos.map((info, index) => (
              <div
                key={index}
                ref={(el) => {
                  imagesRef.current.set(index, el);
                }}
                className={`${scss.icon} ${
                  activeIndex === index ? scss.active : ""
                }`}
                onClick={() => {
                  setActiveInfo(info);
                  setActiveIndex(index);
                }}
              >
                <Image
                  className={`${scss.img} ${
                    activeIndex === index ? scss.active : ""
                  }`}
                  src={info.img}
                  alt={info.title}
                />
              </div>
            ))}
            <div />
          </div>
          <div className={scss.information}>
            <div className={scss.mainInfo}>
              <div id="title" className={scss.lines}>
                <h2>{activeInfo.title}</h2>
              </div>
              <h5>{activeInfo.type}</h5>
            </div>
            <div className={scss.infoCard}>
              <p>
                {activeInfo.text.split("\n").map((line, index) => (
                  <span key={index}>
                    • {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className={scss.footInfo}>
              <p>
                <strong>{activeInfo.year}+</strong> Лет на рынке
              </p>
              <p>
                <strong>{activeInfo.realisation}+</strong> Реализованных
                проектов
              </p>
              <p>
                <strong>{activeInfo.clients}+</strong> Довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
