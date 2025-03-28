'use client';
import { AboutImages } from '@/contstants/links';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import scss from './ImageAbout.module.scss';

const ImageAbout = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={scss.About}>
			<div className='container'>
				<div className={scss.content}>
					{AboutImages.map(el => (
						<div
							className={scss.mobileWrapper}
							key={el.id}
							style={{
								flexDirection:
									windowWidth <= 768
										? 'column'
										: el.id % 2 === 1
										? 'row-reverse'
										: 'row',
							}}
						>
							<div className={scss.information}>
								<h1 className={scss.title}>{el.title}</h1>
								<p className={scss.text}>{el.text}</p>
							</div>
							<div className={scss.images}>
								<Image
									className={scss.image}
									src={el.images}
									alt={el.title}
									style={{ width: '100%', height: '100%' }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageAbout;
