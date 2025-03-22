import { StaticImageData } from 'next/image';
import { JSX } from 'react';

interface Contact {
	value: string;
	link: string;
}

interface Address {
	street: string;
	floor: string;
	link: string;
}

interface Email {
	value: string;
	link: string;
	icon: JSX.Element;
}

interface Icon {
	desktop: StaticImageData;
	mobile: StaticImageData;
}

interface Social {
	imageSrc: Icon;
	alt: string;
	link: string;
}

export interface FootContent {
	title: string;
	logo: Icon;
	contacts: Contact[];
	address: Address;
	email: Email;
	socials: Social[];
}
