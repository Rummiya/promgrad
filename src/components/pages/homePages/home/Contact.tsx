import contactImage from '@/assets/Contact/Contact.png';
import From from '@/features/form/Form';
import Image from 'next/image';

import scss from './Contact.module.scss';

const Contact = () => {
	return (
		<section id={scss.contact}>
			<div className='container'>
				<h2>Давайте обсудим ваш проект</h2>
				<div className={scss.contentWrapper}>
					<Image src={contactImage} alt='contact-image' />
					<From />
				</div>
			</div>
		</section>
	);
};

export default Contact;
