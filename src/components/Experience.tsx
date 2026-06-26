import { CERTS, EXPERIENCE, INFRA, LANGUAGES, STACK } from '../data/content';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="doswiadczenie" className={styles.section}>
      <div className={`${styles.head} reveal`}>
        <h2 className={styles.title}>Doświadczenie</h2>
        <span className={styles.tag}>CV</span>
      </div>

      <div className={styles.timeline}>
        {EXPERIENCE.map((item) => (
          <div key={item.title} className={`${styles.item} reveal`}>
            <span className={styles.period}>{item.period}</span>
            <div>
              <h3 className={styles.role}>{item.title}</h3>
              <p className={styles.org}>{item.org}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${styles.group} ${styles.groupFirst} reveal`}>
        <span className={styles.groupLabel}>STACK</span>
        <div className={styles.chips}>
          {STACK.map((skill) => (
            <span key={skill} className={styles.chip}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className={`${styles.group} reveal`}>
        <span className={styles.groupLabel}>INFRA &amp; OPS</span>
        <div className={styles.chips}>
          {INFRA.map((skill) => (
            <span key={skill} className={styles.chip}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className={`${styles.group} reveal`}>
        <span className={styles.groupLabel}>CERTYFIKATY</span>
        <div className={styles.certs}>
          {CERTS.map((cert) => (
            <span key={cert} className={styles.cert}>
              <span className={styles.diamond}>◆</span>
              {cert}
            </span>
          ))}
          <span className={styles.langs}>{LANGUAGES}</span>
        </div>
      </div>
    </section>
  );
}
