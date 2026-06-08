import styles from "./Footer.module.css";

const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Status", "Community"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark} aria-hidden />
            Nebula
          </a>
          <p className={styles.tagline}>
            Analytics that turn signal into shipping decisions.
          </p>
        </div>

        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© 2026 Nebula, Inc. All rights reserved.</span>
        <div className={styles.legal}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
