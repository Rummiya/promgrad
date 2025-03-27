import imageOne from "@/assets/aboutImages/archiitect.png";
import imageTwo from "@/assets/aboutImages/center.png";
import imageThree from "@/assets/aboutImages/chert.png";
import promgrad from "@/assets/promgrad.svg";
import bimkg from "@/assets/Bim.svg";
import archivibe from "@/assets/Archi.svg";
import {
  promgradImg1,
  promgradImg2,
  promgradImg3,
  promgradImg4,
  promgradImg5,
  promgradImg6,
  promgradImg7,
  promgradImg8,
} from "@/assets/portfolio/promgrad";
import {
  bimKgImg1,
  bimKgImg2,
  bimKgImg3,
  bimKgImg4,
  bimKgImg5,
  bimKgImg6,
  bimKgImg7,
  bimKgImg8,
} from "@/assets/portfolio/bimkg";
import {
  archiVibeImg1,
  archiVibeImg2,
  archiVibeImg3,
  archiVibeImg4,
  archiVibeImg5,
  archiVibeImg6,
  archiVibeImg7,
  archiVibeImg8,
} from "@/assets/portfolio/archivibe";

import { StaticImageData } from "next/image";

interface IAboutImage {
  title: string;
  text: string;
  images: StaticImageData;
  id: number;
}
export const AboutImages: IAboutImage[] = [
  {
    title: "Архитектурное проектирование",
    text: "Мы создаём функциональные, эстетичные и современные архитектурные решения для жилых, коммерческих и промышленных объектов. В нашей работе сочетаются креативность, технологии и внимание к деталям, чтобы каждый проект был удобным, гармоничным и отвечал всем требованиям заказчика.",
    images: imageOne,
    id: 1,
  },
  {
    title: "Инженерные коммуникации",
    text: "Проектируем комплексные инженерные системы, обеспечивающие комфорт и безопасность зданий. Электроснабжение, водоснабжение, отопление, вентиляция и кондиционирование — мы разрабатываем решения, которые оптимизируют энергопотребление, соответствуют нормативам и создают идеальные условия для жизни и работы.",
    images: imageTwo,
    id: 2,
  },
  {
    title: "Конструктивные решения",
    text: "Разрабатываем надёжные и экономически эффективные конструкции, гарантирующие прочность и долговечность зданий. Опираясь на расчёты, современные технологии и строительные нормы, мы создаём проекты, которые выдерживают нагрузки, соответствуют требованиям безопасности и обеспечивают устойчивость объектов в любых условиях.",
    images: imageThree,
    id: 3,
  },
];

interface GalleryCategory {
logo:StaticImageData;
  category: string;
  images: [
    [StaticImageData, StaticImageData[]],
    [StaticImageData[], StaticImageData]
  ];
}

export const galleryData: GalleryCategory[] = [
  {
    logo:promgrad,
    category: "Промградстрой",
    images: [
      [promgradImg1, [promgradImg2, promgradImg3]],
      [
        [promgradImg4, promgradImg5, promgradImg6, promgradImg7],
        promgradImg8,
      ],
    ],
  },
  {
    logo:bimkg,
    category: "BIM.KG",
    images: [
      [bimKgImg1, [bimKgImg2, bimKgImg3]],
      [
        [bimKgImg4, bimKgImg5, bimKgImg6, bimKgImg7],
        bimKgImg8,
      ],
    ],    
  },
  {
    logo:archivibe,
    category: "Archi Vibe",
    images: [
      [archiVibeImg1, [archiVibeImg2, archiVibeImg3]],
      [
        [archiVibeImg4, archiVibeImg5, archiVibeImg6, archiVibeImg7],
        archiVibeImg8,
      ],
    ],
  },
];
