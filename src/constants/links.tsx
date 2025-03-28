// rummia
import archivibe from '@/assets/Archi.svg';
import archiLogo from '@/assets/logos/archi-gray.svg';
import bimLogo from '@/assets/logos/bim-gray.svg';
import promgradLogo from '@/assets/logos/promgrad-gray.svg';
import promgrad from '@/assets/promgrad.svg';
import bimkg from '@/assets/welcome/Bim.svg';

import instagramBlueIcon from '@/assets/Footer/socials/instagram-blue.png';
import instagramIcon from '@/assets/Footer/socials/instagram.png';
import telegramBlueIcon from '@/assets/Footer/socials/telegram-blue.png';
import telegramIcon from '@/assets/Footer/socials/telegram.png';
import whatsappBlueIcon from '@/assets/Footer/socials/whatsapp-blue.png';
import whatsappIcon from '@/assets/Footer/socials/whatsapp.png';

import { IFootContent } from '@/types/footer';
import { StaticImageData } from 'next/image';

import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';

export const mainFootContent: IFootContent[] = [
	{
		id: 1,
		title: 'ПРОМГРАДСТРОЙ',
		logo: {
			desktop: promgradLogo,
			mobile: promgrad,
		},
		contacts: [
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 552-89-88-58',
				link: '/#',
			},
			{
				value: '+996 778-89-88-58',
				link: '/#',
			},
		],
		address: {
			street: 'ул. Турусбекова, 31',
			floor: '​410 кабинет; 4 этаж',
			link: '/#',
		},
		email: {
			value: 'mail@mail.kg',
			link: '/#',
			icon: <CiMail />,
		},
		socials: [
			{
				imageSrc: {
					desktop: whatsappIcon,
					mobile: whatsappBlueIcon,
				},
				alt: 'whatsapp',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: telegramIcon,
					mobile: telegramBlueIcon,
				},
				alt: 'telegram',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: instagramIcon,
					mobile: instagramBlueIcon,
				},
				alt: 'instagram',
				link: '/#',
			},
		],
	},
	{
		id: 2,
		title: 'BIM.KG',
		logo: {
			desktop: bimLogo,
			mobile: bimkg,
		},
		contacts: [
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 552-89-88-58',
				link: '/#',
			},
			{
				value: '+996 778-89-88-58',
				link: '/#',
			},
		],
		address: {
			street: 'ул. Турусбекова, 31',
			floor: '​410 кабинет; 4 этаж',
			link: '/#',
		},
		email: {
			value: 'mail@mail.kg',
			link: '/#',
			icon: <CiMail />,
		},
		socials: [
			{
				imageSrc: {
					desktop: whatsappIcon,
					mobile: whatsappBlueIcon,
				},
				alt: 'whatsapp',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: telegramIcon,
					mobile: telegramBlueIcon,
				},
				alt: 'telegram',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: instagramIcon,
					mobile: instagramBlueIcon,
				},
				alt: 'instagram',
				link: '/#',
			},
		],
	},
	{
		id: 3,
		title: 'Archi Vibe',
		logo: {
			desktop: archiLogo,
			mobile: archivibe,
		},
		contacts: [
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 555-70-76-60',
				link: '/#',
			},
			{
				value: '+996 552-89-88-58',
				link: '/#',
			},
			{
				value: '+996 778-89-88-58',
				link: '/#',
			},
		],
		address: {
			street: 'ул. Турусбекова, 31',
			floor: '​410 кабинет; 4 этаж',
			link: '/#',
		},
		email: {
			value: 'mail@mail.kg',
			link: '/#',
			icon: <CiMail />,
		},
		socials: [
			{
				imageSrc: {
					desktop: whatsappIcon,
					mobile: whatsappBlueIcon,
				},
				alt: 'whatsapp',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: telegramIcon,
					mobile: telegramBlueIcon,
				},
				alt: 'telegram',
				link: '/#',
			},
			{
				imageSrc: {
					desktop: instagramIcon,
					mobile: instagramBlueIcon,
				},
				alt: 'instagram',
				link: '/#',
			},
		],
	},
];

export const minFootLinks = [
	{
		title: 'Главная',
		link: '/#',
	},
	{
		title: 'О Нас',
		link: '/about',
	},
	{
		title: 'Портфолио',
		link: '/#',
	},
	{
		title: 'Контакты',
		link: '/#',
	},
];


// bekza
export const mainHeadLinks = [
	{
		icon: <CiMail />,
		title: 'mail.@gmail.com',
		link: '/#',
	},
	{
		icon: <IoCallOutline />,
		title: '+996 (555) 123 123',
		link: '/#',
	},
	{
		icon: <CiLocationOn />,
		title: 'company_adress',
		link: '/#',
	},
];

export const minHeadLinks = [
	{
	  title: "Главная",
	  link: "home",
	},
	{
	  title: "О Нас",
	  link: "about",
	},
	{
	  title: "Портфолио",
	  link: "portfolio",
	},
	{
	  title: "Контакты",
	  link: "contact",
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
		title: 'Промградстрой',
		type: 'архитектурное проектирование',
		text: `Разработка концепций зданий \n 3D-визуализация и моделирование \n Создание архитектурных чертежей`,
		year: 15,
		realisation: 500,
		clients: 150,
	},
	{
		id: 2,
		img: bimkg,
		title: 'BIM.KG',
		type: 'инженерные коммуникации',
		text: `Проектирование систем отопления и вентиляции \n Разработка инженерных сетей \n Автоматизация процессов`,
		year: 12,
		realisation: 400,
		clients: 100,
	},
	{
		id: 3,
		img: archivibe,
		title: 'Archi Vibe',
		type: 'конструированные решения',
		text: `расчеты нагрузок и материалов \n Проектирование несущих конструкции \n Разработка каркасных решений`,
		year: 10,
		realisation: 300,
		clients: 65,
	},
];
