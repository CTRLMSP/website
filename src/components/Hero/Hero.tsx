import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.headline}>
        Your technology,<br />under control.
      </h1>
      <p className={styles.sub}>
        Managed IT and AV services for businesses in Los Angeles.
      </p>
      <Link href="/contact" className={styles.cta}>Book a free consultation</Link>
    </section>
  );
}