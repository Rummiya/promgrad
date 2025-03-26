import { GalleryCategory } from "../pages/homePages/home/Portfolio";
import scss from "../pages/homePages/home/Portfolio.module.scss";
import Image from "next/image";

interface MobileGalleryProps {
  activeCategory: GalleryCategory;
}

export const MobileGallery = ({ activeCategory }: MobileGalleryProps) => (
  <div className={scss.mobileImages}>
    <div className={scss.mobileHead}>
      <div className={scss.img}>
        <Image
          src={activeCategory.images[0][0]}
          alt="Portfolio 1"
          fill
          style={{ objectFit: "cover" }}
          sizes="357px" 
          priority
        />
      </div>
      {activeCategory.images[0][1].map((image, idx) => (
        <div key={idx} className={scss.img}>
          <Image
            src={image}
            alt={`Portfolio ${idx + 2}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="357px" 
          />
        </div>
      ))}
    </div>
    <div className={scss.mobileFoot}>
      {activeCategory.images[1][0].map((image, idx) => (
        <div key={idx} className={scss.img4}>
          <Image
            src={image}
            alt={`Portfolio ${idx + 4}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="169px"
          />
        </div>
      ))}
      <div className={scss.img}>
        <Image
          src={activeCategory.images[1][1]}
          alt="Portfolio 8"
          fill
          style={{ objectFit: "cover" }}
          sizes="357px" 
        />
      </div>
    </div>
  </div>
);