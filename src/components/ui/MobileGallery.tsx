import Image from 'next/image';
import { GalleryCategory } from '../pages/homePages/home/Portfolio';
import scss from '../pages/homePages/home/Portfolio.module.scss';

interface MobileGalleryProps {
	activeCategory: GalleryCategory;
}

export const MobileGallery = ({ activeCategory }: MobileGalleryProps) => (
	<div className={scss.mobileImages}>
		<div className={scss.mobileHead}>
			<div className={scss.threeImgs}>
				<div className={scss.img}>
					<Image
						src={activeCategory.images[0][0]}
						alt='Portfolio 1'
						fill
						style={{ objectFit: 'cover' }}
						sizes='357px'
						priority
					/>
				</div>
				{activeCategory.images[0][1].map((image, idx) => (
					<div key={idx} className={scss.img}>
						<Image
							src={image}
							alt={`Portfolio ${idx + 2}`}
							fill
							style={{ objectFit: 'cover' }}
							sizes='357px'
						/>
					</div>
				))}
			</div>
			<div className={scss.img}>
				<Image
					src={activeCategory.images[1][0][0]}
					alt={`Portfolio 2`}
					fill
					style={{ objectFit: 'cover' }}
					sizes='357px'
				/>
			</div>
			<div className={scss.footThreeImgs}>
				{activeCategory.images[1][0].slice(1).map((image, idx) => (
					<div key={idx} className={scss.img4}>
						<Image
							src={image}
							alt={`Portfolio ${idx + 4}`}
							fill
							style={{ objectFit: 'cover' }}
							sizes='169px'
						/>
					</div>
				))}
			</div>
		</div>
		<div className={scss.mobileFoot}>
			<div className={scss.img4}>
				<Image
					src={activeCategory.images[0][0]}
					alt={`Portfolio 4`}
					fill
					style={{ objectFit: 'cover' }}
					sizes='169px'
				/>
			</div>
			<div className={scss.img}>
				<Image
					src={activeCategory.images[1][1]}
					alt='Portfolio 8'
					fill
					style={{ objectFit: 'cover' }}
					sizes='357px'
				/>
			</div>
		</div>
	</div>
);
