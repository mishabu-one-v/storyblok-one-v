import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Cta.module.css";
import type { CtaBlok } from "@/components/storyblok/types";

export default function Cta({ blok = {} as CtaBlok }: { blok?: CtaBlok }) {
  return (
    <section className={styles.cta} {...storyblokEditable(blok)}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.panel}>
          {(blok.eyebrow || !blok.title) && (
            <span className={styles.eyebrow}>{blok.eyebrow || "Get started"}</span>
          )}
          <h2 className={styles.title}>{blok.title || "Ship faster with Nebula"}</h2>
          <p className={styles.text}>
            {blok.text ||
              "Join thousands of teams turning product signal into shipping decisions. Start free, no credit card required."}
          </p>
          <div className={styles.actions}>
            <a href={blok.primary_href || "#contact"} className={styles.primary}>
              {blok.primary_label || "Start free"}
            </a>
            {(blok.secondary_label || !blok.primary_label) && (
              <a href={blok.secondary_href || "#features"} className={styles.secondary}>
                {blok.secondary_label || "See how it works"}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
