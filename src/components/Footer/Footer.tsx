import styles from './Footer.module.scss';
import Link from 'next/link';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* FULL WIDTH CONTENT */}
      <div className={styles.content}>

        {/* TOP GRID */}
        <div className={styles.columns}>
          <div className={styles.col}>
            <span className={styles.title}>SERVICES</span>
            <Link href="/services">IT Support</Link>
            <Link href="/services">Device Management</Link>
            <Link href="/services">AV Setup</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.title}>COMPANY</span>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.title}>RESOURCES</span>
            <Link href="/help">Help Center</Link>
            <Link href="/status">Status</Link>
          </div>

          <div className={styles.col}>
            <span className={styles.title}>LEGAL</span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className={styles.bottom}>
          <span>© 2026 CTRL MSP</span>

          <div className={styles.socials}>
            <Link href="#"><FaTwitter size={16} /></Link>
            <Link href="#"><FaFacebookF size={16} /></Link>
            <Link href="#"><FaLinkedinIn size={16} /></Link>
            <Link href="#"><FaInstagram size={16} /></Link>
          </div>
        </div>

      </div>
    </footer>
  );
}