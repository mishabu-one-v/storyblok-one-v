'use client';

import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark} aria-hidden />
          Nebula
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.cta}
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`${styles.burgerBar} ${open ? styles.burgerBarOpen : ''}`}
          />
        </button>
      </div>
    </header>
  );
}
