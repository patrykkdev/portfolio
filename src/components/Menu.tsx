import { useEffect } from 'react';
import { CONTACT, MENU_LINKS } from '../data/content';
import styles from './Menu.module.css';

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

export default function Menu({ open, onClose }: MenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`}>
      <div className={styles.top}>
        <span className={styles.logo}>
          PK<span className={styles.slash}>/</span>2026
        </span>
        <button
          type="button"
          data-cursor
          aria-label="Zamknij menu"
          className={styles.close}
          onClick={onClose}
        >
          &#10005;
        </button>
      </div>

      <div className={styles.body}>
        <nav className={styles.links}>
          {MENU_LINKS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor
              className={styles.navLink}
              style={{ transitionDelay: open ? `${0.12 + i * 0.07}s` : '0s' }}
              onClick={() => setTimeout(onClose, 60)}
            >
              <span className={styles.navNo}>{item.no}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.aside}>
          <div>
            <div className={styles.metaLabel}>Lokalizacja</div>
            <div className={styles.metaValue}>{CONTACT.location}</div>
          </div>
          <div>
            <div className={styles.metaLabel}>Email</div>
            <a href={`mailto:${CONTACT.email}`} data-cursor className={styles.metaValue}>
              {CONTACT.email}
            </a>
          </div>
          <div>
            <div className={styles.metaLabel}>Social</div>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className={styles.metaValue}
            >
              GitHub &#8599;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
