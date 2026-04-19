import type { Metadata } from 'next';
import styles from '@/styles/legal.module.scss';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | CTRL MSP',
};

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <main className={styles.wrapper}>
      <BackButton />

      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Effective Date: [Insert Date]</p>

      <div className={styles.section}>
        <p>
          CTRL MSP (“we,” “our,” or “us”) provides IT, AV, and web services.
          This Privacy Policy explains how we collect, use, and protect information.
        </p>
      </div>

      <div className={styles.section}>
        <h2>1. Information We Collect</h2>
        <ul className={styles.list}>
          <li>Contact information (name, email, phone, company)</li>
          <li>Billing data (processed via Stripe)</li>
          <li>Technical data (IP address, browser, usage)</li>
          <li>Service data (projects, support requests, communications)</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>2. How We Use Information</h2>
        <ul className={styles.list}>
          <li>Provide and manage services</li>
          <li>Respond to inquiries</li>
          <li>Process payments</li>
          <li>Improve operations and security</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>3. Sharing of Information</h2>
        <p>
          We may share information with vendors, Stripe, or legal authorities when required.
          We do not sell personal information.
        </p>
      </div>

      <div className={styles.section}>
        <h2>4. Contact</h2>
        <p>CTRL MSP — CTRLMSP@gmail.com</p>
      </div>
    </main>
  );
}