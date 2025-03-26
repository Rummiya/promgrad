'use client';

import { mainFootContent, minFootLinks } from '@/constants/links';
import { useState } from 'react';

import CompanyInfo from '../../ui/CompanyInfo';
import DropdownMenu from '../../ui/DropdownMenu';
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
					<CompanyInfo />
				</div>

				<div className={scss.mobileContent}>
					{mainFootContent.map((data, index) => (
						<DropdownMenu
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
