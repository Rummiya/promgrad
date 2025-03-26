"use client";
import scss from "./Portfolio.module.scss";
import { DesktopGallery } from "@/components/ui/DesktopGallery";
import { MobileGallery } from "@/components/ui/MobileGallery";
import { usePortfolio } from "@/hooks/usePortfolio";
import Image, { StaticImageData } from "next/image";

export interface GalleryCategory {
  logo: StaticImageData;
  category: string;
  images: [
    [StaticImageData, StaticImageData[]],
    [StaticImageData[], StaticImageData]
  ];
}

const Portfolio = () => {
  const { activeCategory, setActiveCategory, isMobile, galleryData } =
    usePortfolio();

  return (
    <section id={scss.gallery}>
      <div className="container">
        <h1>ПОРТФОЛИО</h1>
        <p>Работы наших организаций</p>
        <nav className={scss.nav}>
          {galleryData.map((cat) => (
            <button
              key={cat.category}
              className={
                activeCategory.category === cat.category ? scss.active : ""
              }
              onClick={() => setActiveCategory(cat)}
            >
              {isMobile && (
                <Image src={cat.logo} alt="logo" width={25} height={25}  className={scss.logo}/>
              )}
              {cat.category}
            </button>
          ))}
        </nav>
        {isMobile ? (
          <MobileGallery activeCategory={activeCategory} />
        ) : (
          <DesktopGallery activeCategory={activeCategory} />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
