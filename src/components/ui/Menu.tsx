"use client";

import React, { forwardRef, useEffect } from "react";
import Link from "next/link";
import scss from "./Menu.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderStore } from "@/Store/store";
import { minHeadLinks } from "@/constants/links";

const Menu = forwardRef<HTMLDivElement>(() => {
  const { isOpen, setIsOpen } = useHeaderStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest(`.${scss.menu}`)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, setIsOpen]);

  const menuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.32, 0.72, 0, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`${scss.menu} ${isOpen ? scss.open : ""}`}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div>
            {minHeadLinks.map((link, idx) => (
              <motion.div
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
                key={idx}
                className={scss.linkBox}
              >
                <Link href={link.link}>{link.title}</Link>
              </motion.div>
            ))}
            <button onClick={() => setIsOpen(false)} className={scss.btn}>
              Есть контакт!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

Menu.displayName = "Menu";

export default Menu;
