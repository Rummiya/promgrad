"use client";
import Image from "next/image";
import scss from "./Header.module.scss";
import { mainHeadLinks, minHeadLinks } from "@/constants/links";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/promgrad.svg";
import Link from "next/link";
import { useHeaderStore } from "@/Store/store";
import { useEffect, useRef } from "react";
import BurgerMenu from "@/components/ui/BurgerMenu";
import { AnimatePresence } from "framer-motion";
import Menu from "@/components/ui/Menu";

const Header = () => {
  const { isOpen, setIsOpen } = useHeaderStore();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header id={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.upperHead}>
            <ol className={scss.mainNav}>
              {mainHeadLinks.map((item, idx) => (
                <div key={idx} className={scss.mainLinks}>
                  <li className={scss.icon}>{item.icon}</li>
                  <li>{item.title}</li>
                </div>
              ))}
            </ol>
            <hr className={scss.verticalHr} />
            <div className={scss.messangers}>
              <Link href={"/#"}>
                <FaInstagram />
              </Link>
              <Link href={"/#"}>
                <FaTelegram />
              </Link>
              <Link href={"/#"}>
                <FaWhatsapp />
              </Link>
            </div>
            <hr className={scss.verticalHr2} />
          </div>
          <hr className={scss.horizontalHr1} />
          <div className={scss.minHead}>
            <div className={scss.layer}>
              <div className={scss.minLogo}>
                <Image
                  src={logo}
                  alt="logo"
                  priority
                  
                  style={{
                    width: "clamp(40px, 5vw, 60px)",
                    height: "clamp(40px, 5vw, 60px)",
                  }}
                />
                <h5>
                  ПРОМ
                  <br />
                  ГРАД
                  <br />
                  СТРОЙ
                </h5>
              </div>
              <nav>
                {minHeadLinks.map((item, idx) => (
                  <Link href={item.link} key={idx}>
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className={scss.blockMenu}>
                <BurgerMenu />
                <AnimatePresence>
                  {isOpen && <Menu ref={menuRef} />}
                </AnimatePresence>
              </div>
              <button className={scss.btn}>Есть контакт!</button>
            </div>
          </div>
        </div>
        <hr className={scss.horizontalHr2} />
      </div>
    </header>
  );
};

export default Header;
