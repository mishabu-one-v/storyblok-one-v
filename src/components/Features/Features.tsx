import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Features.module.css";
import type { FeaturesBlok } from "@/components/storyblok/types";

const defaults = [
  { icon: "⚡", title: "Realtime pipelines", text: "Stream events and watch dashboards update live — no batch delays, no stale numbers." },
  { icon: "🧭", title: "Smart funnels", text: "Build conversion funnels by drag-and-drop and spot drop-offs before they cost you." },
  { icon: "🔔", title: "Anomaly alerts", text: "Get pinged in Slack the moment a metric drifts outside its expected range." },
  { icon: "🧩", title: "200+ integrations", text: "Plug into your stack — from Stripe and Segment to your own data warehouse." },
  { icon: "🔒", title: "Enterprise security", text: "SSO, role-based access, audit logs, and SOC 2 Type II compliance included." },
  { icon: "🤝", title: "Team collaboration", text: "Share annotated reports, leave comments, and keep everyone on the same page." },
] as unknown as NonNullable<FeaturesBlok["items"]>;

export default function Features({ blok = {} as FeaturesBlok }: { blok?: FeaturesBlok }) {
  const items = blok.items?.length ? blok.items : defaults;

  return (
    <section className={styles.features} id="features" {...storyblokEditable(blok)}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>{blok.eyebrow || "Features"}</span>
          <h2 className={styles.title}>
            {blok.title || "Everything you need, nothing you don't"}
          </h2>
          <p className={styles.subtitle}>
            {blok.subtitle ||
              "A focused toolkit that scales from your first thousand users to your billionth event."}
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((feature, i) => (
            <article
              key={feature._uid ?? i}
              className={styles.card}
              {...(feature._uid ? storyblokEditable(feature) : {})}
            >
              <div className={styles.icon} aria-hidden>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
