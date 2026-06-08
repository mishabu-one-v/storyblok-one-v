import { storyblokEditable } from "@storyblok/react/rsc";
import styles from "./Stats.module.css";
import type { StatsBlok } from "@/components/storyblok/types";

const defaults = [
  { value: "12k+", label: "Teams onboarded" },
  { value: "3.2B", label: "Events / month" },
  { value: "99.98%", label: "Uptime SLA" },
  { value: "<200ms", label: "Query latency" },
] as unknown as StatsBlok["items"];

export default function Stats({ blok = {} as StatsBlok }: { blok?: StatsBlok }) {
  const items = blok.items?.length ? blok.items : defaults!;

  return (
    <section className={styles.stats} {...storyblokEditable(blok)}>
      <div className={`container ${styles.grid}`}>
        {items.map((stat, i) => (
          <div
            key={stat._uid ?? i}
            className={styles.item}
            {...(stat._uid ? storyblokEditable(stat) : {})}
          >
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
