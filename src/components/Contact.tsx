import { CONTACT } from '../data/content';
import { useClock } from '../hooks/useClock';
import styles from './Contact.module.css';

export default function Contact() {
  const time = useClock();

  return (
    <>
      <section id="kontakt" className={styles.contact}>
        <span className={`${styles.eyebrow} reveal`}>Masz projekt? Napisz.</span>
        <a href={`mailto:${CONTACT.email}`} data-cursor className={`${styles.big} reveal`}>
          Porozmawiajmy<span className={styles.dot}>.</span>
        </a>

        <div className={styles.details}>
          <div className={styles.col}>
            <a href={`mailto:${CONTACT.email}`} data-cursor className={styles.detailLink}>
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className={styles.detailLink}
            >
              {CONTACT.githubLabel} ↗
            </a>
          </div>
          <div className={`${styles.col} ${styles.colRight}`}>
            <span className={styles.detailMuted}>
              {CONTACT.location} — {time}
            </span>
            <span className={styles.detailMuted}>Dostępny do współpracy</span>
          </div>
        </div>
      </section>

      <div className={styles.band}>
        <div className={styles.bandTrackWrap} aria-hidden="true">
          <div className={styles.bandTrack}>
            <span className={styles.bandName}>PATRYK KULPA&nbsp;—&nbsp;</span>
            <span className={styles.bandName}>PATRYK KULPA&nbsp;—&nbsp;</span>
          </div>
        </div>
        <div className={styles.bandFoot}>
          <span className={styles.copy}>© 2026 Patryk Kulpa</span>
          <a href="#top" data-cursor className={styles.toTop}>
            Do góry ↑
          </a>
        </div>
      </div>
    </>
  );
}
