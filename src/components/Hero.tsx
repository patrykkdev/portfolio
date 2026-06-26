import { HERO_WORDS } from '../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.topRow}>
        <span className={styles.eyebrow}>Portfolio — Bydgoszcz, PL</span>
        <span className={styles.eyebrow}>Software Developer</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.l1}>Patryk</span>
        <span className={styles.l2}>
          Kulpa<span className={styles.dot}>.</span>
        </span>
      </h1>

      <div className={styles.bottomRow}>
        <p className={styles.bio}>
          Mam 23 lata, studiuję na <em>Politechnice Bydgoskiej</em> i tworzę oprogramowanie w{' '}
          <em>Exon Computer Systems</em>. Buduję aplikacje webowe end-to-end — od API w Node.js po
          interfejsy w React.
        </p>

        <div className={styles.status}>
          <span className={styles.statusLabel}>Aktualnie</span>
          <div className={styles.wordsWindow}>
            <div className={styles.words}>
              {HERO_WORDS.map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <span className={styles.scrollArrow}>↓</span>
        <span className={styles.scrollText}>Przewiń</span>
      </div>
    </section>
  );
}
