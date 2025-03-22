import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import promgrad from "@/assets/promgrad.svg";
import bimkg from "@/assets/welcome/Bim.svg";
import archivibe from "@/assets/Archi.svg";
import { StaticImageData } from "next/image";

export const mainHeadLinks = [
  {
    icon: <CiMail />,
    title: "mail.@gmail.com",
    link: "/#",
  },
  {
    icon: <IoCallOutline />,
    title: "+996 (555) 123 123",
    link: "/#",
  },
  {
    icon: <CiLocationOn />,
    title: "company_adress",
    link: "/#",
  },
];

export const minHeadLinks = [
  {
    title: "Главная",
    link: "/#",
  },
  {
    title: "О Нас",
    link: "/#",
  },
  {
    title: "Портфолио",
    link: "/#",
  },
  {
    title: "Контакты",
    link: "/#",
  },
];

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

export const infos: IInfosType[] = [
  {
    id: 1,
    img: promgrad,
    title: "Промградстрой",
    type: "архитектурное проектирование",
    text: `Разработка концепций зданий \n 3D-визуализация и моделирование \n Создание архитектурных чертежей`,
    year: 15,
    realisation: 500,
    clients: 150,
  },
  {
    id: 2,
    img: bimkg,
    title: "BIM.KG",
    type: "инженерные коммуникации",
    text: `Проектирование систем отопления и вентиляции \n Разработка инженерных сетей \n Автоматизация процессов`,
    year: 12,
    realisation: 400,
    clients: 100,
  },
  {
    id: 3,
    img: archivibe,
    title: "Archi Vibe",
    type: "конструированные решения",
    text: `расчеты нагрузок и материалов \n Проектирование несущих конструкции \n Разработка каркасных решений`,
    year: 10,
    realisation: 300,
    clients: 65,
  },
];
