import arrowIcon from '@/assets/Footer/icons/arrow.png';
import locationIcon from '@/assets/Footer/icons/location.png';
import mailIcon from '@/assets/Footer/icons/mail.png';
import phoneIcon from '@/assets/Footer/icons/phone.png';

import { IFootContent } from '@/types/footer';
import Image from 'next/image';

import scss from './MobileContacts.module.scss';

const MobileContacts = ({
	data,
	isActive,
	index,
	toggleDropdown,
}: {
	data: IFootContent;
	isActive: boolean;
	index: number;
	toggleDropdown: (index: number) => void;
}) => {
	const { address, contacts, email, logo, socials, title } = data;

	return (
		<div className={scss.mobileContentItem} key={title}>
			<button onClick={() => toggleDropdown(index)}>
				<div className={scss.logo}>
					<Image
						src={logo.mobile}
						alt={title}
						width={40}
						height={40}
						priority
					/>
					<h4>{title}</h4>
				</div>
				<Image
					className={`${scss.arrow} ${isActive ? scss.open : ''}`}
					src={arrowIcon}
					alt={arrowIcon.src}
					width={20}
					height={9}
				/>
			</button>
			<div className={`${scss.dropdown} ${isActive ? scss.expanded : ''}`}>
				<div className={scss.dropdownContent}>
					<div className={scss.dropdownContentItem}>
						<Image src={phoneIcon} alt='phone' />
						<div className={scss.numbers}>
							{contacts.map(({ value, link }, index) => (
								<p key={index}>
									<a href={link}>{value}</a>
								</p>
							))}
						</div>
					</div>
					<div className={scss.dropdownContentItem}>
						<Image src={locationIcon} alt='location' />

						<span className={scss.address}>
							<a href={address.link}>{address.street}</a>
							<p>{address.floor}</p>
						</span>
					</div>
					<div className={scss.dropdownContentItem}>
						<Image src={mailIcon} alt='mail' />

						<span className={scss.email}>
							<a href={email.link}>{email.value}</a>
						</span>
					</div>
					<div className={scss.socials}>
						{socials.map(({ imageSrc, alt, link }) => (
							<a href={link} key={alt}>
								<Image src={imageSrc.mobile} alt={alt} width={40} height={40} />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileContacts;
