'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        
        {/* LEFT: LOGO */}
        <Link href="/" className={styles.logo}>
          <img
            src="/favicon.ico"
            alt="CTRL MSP logo"
            width={26}
            height={26}
          />
          <span>CTRL MSP</span>
        </Link>

        {/* CENTER */}
        <div className={styles.links}>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <Link href="/contact" className={styles.btnOutline}>
            Get in touch
          </Link>

          {/* HAMBURGER */}
          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles.hamburgerOpen : ''
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <Link href="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileCTA}
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}