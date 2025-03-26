import { StaticImageData } from 'next/image';
import { JSX } from 'react';

interface IContact {
	value: string;
	link: string;
}

interface IAddress {
	street: string;
	floor: string;
	link: string;
}

interface IEmail {
	value: string;
	link: string;
	icon: JSX.Element;
}

interface IPicture {
	desktop: StaticImageData;
	mobile: StaticImageData;
}

interface ISocial {
	imageSrc: IPicture;
	alt: string;
	link: string;
}

export interface IFootContent {
	id: number;
	title: string;
	logo: IPicture;
	contacts: IContact[];
	address: IAddress;
	email: IEmail;
	socials: ISocial[];
}
