'use client';

import { useRouter } from 'next/navigation';
import styles from '@/styles/legal.module.scss';

export default function BackButton(): JSX.Element {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <button onClick={handleBack} className={styles.back}>
      ← Back
    </button>
  );
}