import styles from './Nav.module.css';

interface NavProps {
  onOpenMenu: () => void;
}

export default function Nav({ onOpenMenu }: NavProps) {
  return (
    <header className={styles.header}>
      <a href="#top" data-cursor className={styles.logo}>
        PK<span className={styles.slash}>/</span>2026
      </a>
      <nav className={styles.nav}>
        <a href="#projekty" data-cursor className={styles.link}>
          Projekty
        </a>
        <a href="#doswiadczenie" data-cursor className={styles.link}>
          Doświadczenie
        </a>
        <a href="#kontakt" data-cursor className={styles.link}>
          Kontakt
        </a>
        <button
          type="button"
          data-cursor
          aria-label="Otwórz menu"
          className={styles.burger}
          onClick={onOpenMenu}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
