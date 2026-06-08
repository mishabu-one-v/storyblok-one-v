import { storyblokEditable } from '@storyblok/react/rsc';
import styles from './About.module.css';
import type { AboutBlok } from '@/components/storyblok/types';

const defaultPoints = [
  'Connect any source in minutes — SDKs, webhooks, or warehouse sync.',
  'Self-serve dashboards your whole team can actually understand.',
  'Privacy-first by design, GDPR & SOC 2 compliant out of the box.',
];

export default function About({
  blok = {} as AboutBlok,
}: {
  blok?: AboutBlok;
}) {
  const points = blok.points
    ? blok.points
        .split('\n')
        .map((p) => p.trim())
        .filter(Boolean)
    : defaultPoints;

  return (
    <section className={styles.about} id="about" {...storyblokEditable(blok)}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{blok.eyebrow || 'Why Nebula'}</span>
          <h2 className={styles.title}>
            {blok.title || 'One source of truth for every product decision'}
          </h2>
          <p className={styles.text}>
            {blok.text ||
              "We started Nebula because analytics shouldn't require a data team to decode. Our platform unifies your events, sessions, and revenue into a single, real-time picture — so you can stop guessing and start shipping what matters."}
          </p>

          <ul className={styles.list}>
            {points.map((point) => (
              <li key={point} className={styles.listItem}>
                <span className={styles.check} aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.panel} aria-hidden>
          <div className={styles.panelBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.chart}>
            {[42, 68, 55, 80, 62, 95, 74].map((h, i) => (
              <div key={i} className={styles.bar} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className={styles.panelMeta}>
            <span>{blok.chart_label || 'Weekly active users'}</span>
            <span className={styles.trend}>{blok.chart_trend || '▲ 0%'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
