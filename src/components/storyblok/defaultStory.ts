import type { PageBlok } from "./types";

// Rendered when no matching Storyblok story exists yet (e.g. before you create
// content in your Space). Each blok has empty fields, so every section falls
// back to its built-in default copy and the site looks identical to the static
// version. Once you create a "home" story in Storyblok, real content takes over.
export const DEFAULT_PAGE: PageBlok = {
  _uid: "default-page",
  component: "page",
  body: [
    { _uid: "default-hero", component: "hero" },
    { _uid: "default-stats", component: "stats" },
    { _uid: "default-about", component: "about" },
    { _uid: "default-features", component: "features" },
    { _uid: "default-testimonials", component: "testimonials" },
    { _uid: "default-cta", component: "cta" },
    { _uid: "default-contact", component: "contact" },
  ],
};
