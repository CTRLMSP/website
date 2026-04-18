'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // run once on load
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* LEFT */}
      <Link href="/" className={styles.logo}>
        CTRL MSP
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
        <Link href="/contact" className={styles.btnFill}>
          Book a call
        </Link>
      </div>
    </nav>
  );
}