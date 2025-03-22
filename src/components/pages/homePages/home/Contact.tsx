// 'use client';

import contactImage from '@/assets/Contact/Contact.png';
import Image from 'next/image';

import From from '@/features/form/Form';
import scss from './Contact.module.scss';

const Contact = () => {
	return (
		<div className={scss.contact}>
			<div className='container'>
				<h2>Давайте обсудим ваш проект</h2>
				<div className={scss.contentWrapper}>
					<Image src={contactImage} alt='contact-image' />
					<From />
				</div>
			</div>
		</div>
	);
};

export default Contact;
