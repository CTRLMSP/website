import type { Metadata } from 'next';
import styles from '@/styles/legal.module.scss';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Terms of Service | CTRL MSP',
};

export default function TermsPage(): JSX.Element {
  return (
    <main className={styles.wrapper}>
      <BackButton />

      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.updated}>Effective Date: [Insert Date]</p>

      <div className={styles.section}>
        <h2>1. Acceptance</h2>
        <p>
          By using our services, you agree to these Terms.
        </p>
      </div>

      <div className={styles.section}>
        <h2>2. Services</h2>
        <p>
          CTRL MSP provides IT, AV, and web development services as defined in agreements or proposals.
        </p>
      </div>

      <div className={styles.section}>
        <h2>3. Payment</h2>
        <p>
          Payments are processed via Stripe. Late payments may result in suspension of services.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Customer Responsibilities</h2>
        <ul className={styles.list}>
          <li>Provide accurate information</li>
          <li>Maintain backups</li>
          <li>Comply with applicable laws</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>5. Limitation of Liability</h2>
        <p>
          CTRL MSP is not liable for indirect or consequential damages.
          Liability is limited to fees paid for services.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Contact</h2>
        <p>CTRL MSP — CTRLMSP@gmail.com</p>
      </div>
    </main>
  );
}