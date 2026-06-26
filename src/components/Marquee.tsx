import { Fragment } from 'react';
import { MARQUEE_TECH } from '../data/content';
import styles from './Marquee.module.css';

function Group() {
  return (
    <span className={styles.group}>
      {MARQUEE_TECH.map((tech) => (
        <Fragment key={tech}>
          <span className={styles.item}>{tech}</span>
          <span className={styles.diamond}>◆</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
