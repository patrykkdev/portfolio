import { useRef, useState } from 'react';
import { PROJECTS } from '../data/content';
import styles from './Projects.module.css';

export default function Projects() {
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const finePointer =
    typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches;

  const move = (e: React.MouseEvent) => {
    if (!finePointer || !previewRef.current) return;
    previewRef.current.style.transform = `translate(${e.clientX - 280}px, ${e.clientY - 90}px)`;
  };

  return (
    <section id="projekty" className={styles.section}>
      <div className={`${styles.head} reveal`}>
        <h2 className={styles.title}>
          Wybrane
          <br />
          projekty
        </h2>
        <span className={styles.count}>(01 — 03)</span>
      </div>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <a
            key={project.no}
            href={project.href}
            data-cursor
            className={`${styles.row} reveal`}
            onMouseEnter={() => {
              if (!finePointer) return;
              setLabel(project.preview);
              setVisible(true);
            }}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={move}
          >
            <span className={styles.no}>{project.no}</span>
            <span className={styles.name}>{project.title}</span>
            <span className={styles.meta}>
              <span className={styles.tech}>{project.tech}</span>
              <span className={styles.arrow}>↗</span>
            </span>
          </a>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`${styles.preview} ${visible ? styles.visible : ''}`}
        aria-hidden="true"
      >
        <span className={styles.previewLabel}>{label || 'project shot'}</span>
      </div>
    </section>
  );
}
