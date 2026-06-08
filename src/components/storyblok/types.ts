import type { SbBlokData } from "@storyblok/react/rsc";

export interface HeroBlok extends SbBlokData {
  badge?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  primary_label?: string;
  primary_href?: string;
  secondary_label?: string;
  secondary_href?: string;
  trust_label?: string;
  trust_logos?: string; // comma-separated
}

export interface StatItemBlok extends SbBlokData {
  value?: string;
  label?: string;
}

export interface StatsBlok extends SbBlokData {
  items?: StatItemBlok[];
}

export interface AboutBlok extends SbBlokData {
  eyebrow?: string;
  title?: string;
  text?: string;
  points?: string; // newline-separated
  chart_label?: string;
  chart_trend?: string;
}

export interface FeatureCardBlok extends SbBlokData {
  icon?: string;
  title?: string;
  text?: string;
}

export interface FeaturesBlok extends SbBlokData {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items?: FeatureCardBlok[];
}

export interface TestimonialBlok extends SbBlokData {
  quote?: string;
  name?: string;
  role?: string;
}

export interface TestimonialsBlok extends SbBlokData {
  eyebrow?: string;
  title?: string;
  items?: TestimonialBlok[];
}

export interface ContactBlok extends SbBlokData {
  eyebrow?: string;
  title?: string;
  text?: string;
  email?: string;
  phone?: string;
  location?: string;
  submit_label?: string;
}

export interface PageBlok extends SbBlokData {
  body?: SbBlokData[];
}
