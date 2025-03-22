import archiBlueLogo from '@/assets/Footer/logos/archi-blue.png';
import archiLogo from '@/assets/Footer/logos/archi.png';
import bimBlueLogo from '@/assets/Footer/logos/bim-blue.png';
import bimLogo from '@/assets/Footer/logos/bim.png';
import promgradBlueLogo from '@/assets/Footer/logos/promgrad-blue.png';
import promgradLogo from '@/assets/Footer/logos/promgrad.png';

import instagramBlueIcon from '@/assets/Footer/socials/instagram-blue.png';
import instagramIcon from '@/assets/Footer/socials/instagram.png';
import telegramBlueIcon from '@/assets/Footer/socials/telegram-blue.png';
import telegramIcon from '@/assets/Footer/socials/telegram.png';
import whatsappBlueIcon from '@/assets/Footer/socials/whatsApp-blue.png';
import whatsappIcon from '@/assets/Footer/socials/whatsApp.png';

import { FootContent } from '@/types/footer';
import { CiMail } from 'react-icons/ci';

export const mainFootContent: FootContent[] = [
	{
		title: 'ПРОМГРАДСТРОЙ',
		logo: {
			desktop: promgradLogo,
			mobile: promgradBlueLogo,
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
		title: 'BIM.KG',
		logo: {
			desktop: bimLogo,
			mobile: bimBlueLogo,
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
		title: 'Archi Vibe',
		logo: {
			desktop: archiLogo,
			mobile: archiBlueLogo,
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
		link: '/#',
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
