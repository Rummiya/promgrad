'use client';

import { mainFootContent, minFootLinks } from '@/constants/links';
import { useState } from 'react';

import scss from './Footer.module.scss';
import FooterContacts from './FooterContacts';
import FooterMobileMenu from './FooterMobileMenu';

const Footer = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleDropdown = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<footer className={scss.Footer}>
			<div className='container'>
				<h2>Контакты</h2>

				<FooterContacts />

				<div className={scss.mobileContent}>
					{mainFootContent.map((data, index) => (
						<FooterMobileMenu
							data={data}
							isActive={openIndex === index}
							index={index}
							toggleDropdown={toggleDropdown}
							key={data.title}
						/>
					))}
				</div>

				<div className={scss.minContent}>
					<nav>
						{minFootLinks.map(({ link, title }) => (
							<a href={link} key={title}>
								{title}
							</a>
						))}
					</nav>
					<p>© 2025 ПРОМГРАД - Приложение, Сайт, Портфолио, Контакты.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
