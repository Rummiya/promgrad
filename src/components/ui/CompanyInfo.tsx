import { mainFootContent } from '@/constants/links';
import Image from 'next/image';

import scss from './CompanyInfo.module.scss';

const CompanyInfo = () => {
	return (
		<div className={scss.mainContent}>
			{mainFootContent.map(
				({ id, title, logo, contacts, address, email, socials }) => (
					<div className={scss.mainContentItem} key={id}>
						<div className={scss.logo}>
							<Image src={logo.desktop} alt={title} />
							<h4>{title}</h4>
						</div>
						<div className={scss.numbers}>
							{contacts.map(({ value, link }, index) => (
								<p key={index}>
									<a href={link}>{value}</a>
								</p>
							))}
						</div>
						<span className={scss.address}>
							<a href={address.link}>{address.street}</a>
							<p>{address.floor}</p>
						</span>
						<span className={scss.email}>
							<a href={email.link}>{email.value}</a>
						</span>
						<div className={scss.socials}>
							{socials.map(({ imageSrc, link, alt }) => (
								<a href={link} key={alt}>
									<Image src={imageSrc.desktop} alt={alt} />
								</a>
							))}
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default CompanyInfo;
