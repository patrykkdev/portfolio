import { forwardRef } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className={styles.bar} aria-hidden="true" />
));

ProgressBar.displayName = 'ProgressBar';
export default ProgressBar;
