import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Hero.module.css";
import type { HeroBlok } from "@/components/storyblok/types";

export default function Hero({ blok = {} as HeroBlok }: { blok?: HeroBlok }) {
  const title = blok.title || "Ship faster with";
  const highlight = blok.highlight || "data you can trust";
  const subtitle =
    blok.subtitle ||
    "Nebula is the analytics platform that turns raw product events into clear, actionable decisions — without the spreadsheet chaos.";
  const logos = (blok.trust_logos || "Acme,Quantix,Loopr,Vela")
    .split(",")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <section className={styles.hero} id="top" {...storyblokEditable(blok)}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>{blok.badge || "✦ New — Realtime insights 2.0"}</span>

        <h1 className={styles.title}>
          {title} <span className={styles.gradient}>{highlight}</span>
        </h1>

        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.actions}>
          <a href={blok.primary_href || "#contact"} className={styles.primary}>
            {blok.primary_label || "Start free trial"}
          </a>
          <a href={blok.secondary_href || "#features"} className={styles.secondary}>
            {blok.secondary_label || "Explore features →"}
          </a>
        </div>

        <div className={styles.trust}>
          {blok.trust_label || "Trusted by fast-growing teams at"}
          <div className={styles.logos}>
            {logos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.glow} aria-hidden />
    </section>
  );
}
