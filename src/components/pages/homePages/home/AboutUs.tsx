"use client";
import { useRef, useState } from "react";
import scss from "./AboutUs.module.scss";
import Image, { StaticImageData } from "next/image";
import article from "@/assets/Image.png";
import { infos } from "@/constants/links";
import { useSize } from "@/hooks";

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
  const images = useRef<Map<number, HTMLImageElement | null>>(new Map());
  const size = useSize("#title");
  const handleIconClick = (info: IInfosType, index: number) => {
    setActiveInfo(info);
    setActiveIndex(index);
  };

  const GetAnchor = (index: number) => {
    const el = images.current.get(index);
    if (el && index !==0) {
      const rect = el.getBoundingClientRect();
      return rect.left;
    }
    return size.width + 10;
  };

  return (
    <section id={scss.aboutUs}>
      {}
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
          {GetAnchor(activeIndex)}
          <div className={scss.logos}>
            {infos.map((info, index) => (
              <div
                key={index}
                className={scss.icon}
                onClick={() => handleIconClick(info, index)}
              >
                <Image
                  ref={(e) => {
                    images.current.set(index, e);
                  }}
                  className={scss.img}
                  src={info.img}
                  alt={info.title}
                />
              </div>
            ))}
          </div>
          <div className={scss.information}>
            <div className={scss.mainInfo}>
              <div id="title" className={scss.lines}>
                <h2>{activeInfo.title}</h2>
                <hr
                  className={scss.horizontalHr}
                  style={{
                    left: GetAnchor(activeIndex),
                  }}
                />
              </div>
              <hr
                className={scss.line}
                style={{
                  width: GetAnchor(activeIndex),
                }}
              />
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
