"use client";

import Links from "./links/Links";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></div>
      )}

      <header
        className={styles.header}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Link href={"/"} className={styles.imgContainer}>
          <Image src={"/karcher-logo.png"} alt="Logo" fill />
        </Link>

        <div className={styles.contactInfo}>
          <h2>Клийн Стар ЕООД</h2>
          <p className={styles.red}>Безплатна доставка</p>
          <p>
            За поръчки: <span>0877 21 22 22</span>
          </p>
        </div>

        <nav
          className={`${styles.navbar} ${
            isMenuOpen ? styles.navOpen : styles.navClosed
          }`}
        >
          <Links />
        </nav>
        <div
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamOpen : styles.hamClosed
          }`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Header;
