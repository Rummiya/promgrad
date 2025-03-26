'use client'
import { GalleryCategory } from "@/components/pages/homePages/home/Portfolio";
import { galleryData } from "@/contstants/links";
import { useState, useEffect } from "react";

export const usePortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(
    galleryData[0]
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    activeCategory,
    setActiveCategory,
    isMobile,
    galleryData,
  };
};