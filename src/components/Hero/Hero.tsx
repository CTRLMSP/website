import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <span>Your technology,</span>
          <span>under control.</span>
        </h1>

        <p className={styles.sub}>
          Managed IT and AV services for Los Angeles businesses.
        </p>

        <Link
          href="/contact"
          className={styles.cta}
          aria-label="Book a free IT consultation"
        >
          Book a free consultation
        </Link>
      </div>
    </section>
  );
}