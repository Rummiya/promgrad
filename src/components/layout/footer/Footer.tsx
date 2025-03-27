'use client';

import { mainFootContent, minFootLinks } from '@/constants/links';
import { useState } from 'react';

import DesktopContacts from '../../ui/DesktopContacts';
import MobileContacts from '../../ui/MobileContacts';
import scss from './Footer.module.scss';

const Footer = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleDropdown = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<footer id={scss.Footer}>
			<div className='container'>
				<h2>Контакты</h2>

				<div className={scss.desktopContent}>
					<DesktopContacts />
				</div>

				<div className={scss.mobileContent}>
					{mainFootContent.map((data, index) => (
						<MobileContacts
							data={data}
							isActive={openIndex === index}
							index={index}
							toggleDropdown={toggleDropdown}
							key={data.id}
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
