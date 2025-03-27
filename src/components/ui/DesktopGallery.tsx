import { GalleryCategory } from "../pages/homePages/home/Portfolio";
import scss from "../pages/homePages/home/Portfolio.module.scss";
import Image from "next/image";

interface DesktopGalleryProps {
  activeCategory: GalleryCategory;
}

export const DesktopGallery = ({ activeCategory }: DesktopGalleryProps) => (
  <div className={scss.images}>
    <div className={scss.head}>
      <div className={scss.img}>
        <Image
          src={activeCategory.images[0][0]}
          alt="Portfolio 1"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
          priority
        />
      </div>
      <div className={scss.twoImg}>
        {activeCategory.images[0][1].map((image, idx) => (
          <div key={idx} className={scss.img}>
            <Image
              src={image}
              alt={`Portfolio ${idx + 2}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </div>
    <div className={scss.foot}>
      <div className={scss.forImg}>
        {activeCategory.images[1][0].map((image, idx) => (
          <div key={idx} className={scss.img4}>
            <Image
              src={image}
              alt={`Portfolio ${idx + 4}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 50vw, 25vw" 
            />
          </div>
        ))}
      </div>
      <div className={scss.img}>
        <Image
          src={activeCategory.images[1][1]}
          alt="Portfolio 8"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw" 
        />
      </div>
    </div>
  </div>
);