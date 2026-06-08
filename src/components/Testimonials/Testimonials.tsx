import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Testimonials.module.css";
import type { TestimonialsBlok } from "@/components/storyblok/types";

const defaults = [
  { quote: "Nebula replaced three separate tools for us. Our PMs finally trust the numbers, and we cut reporting time in half.", name: "Maya Chen", role: "Head of Product, Quantix" },
  { quote: "Setup took an afternoon. The anomaly alerts caught a checkout bug before it hit revenue — paid for itself week one.", name: "Diego Ramos", role: "CTO, Loopr" },
  { quote: "The cleanest analytics UX I've used. My non-technical teammates build their own dashboards now.", name: "Hannah Weber", role: "Growth Lead, Vela" },
] as unknown as NonNullable<TestimonialsBlok["items"]>;

export default function Testimonials({ blok = {} as TestimonialsBlok }: { blok?: TestimonialsBlok }) {
  const items = blok.items?.length ? blok.items : defaults;

  return (
    <section className={styles.testimonials} id="testimonials" {...storyblokEditable(blok)}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>{blok.eyebrow || "Loved by teams"}</span>
          <h2 className={styles.title}>{blok.title || "Don't just take our word for it"}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((t, i) => (
            <figure
              key={t._uid ?? i}
              className={styles.card}
              {...(t._uid ? storyblokEditable(t) : {})}
            >
              <div className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden>
                  {(t.name ?? "?").charAt(0)}
                </span>
                <span>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
