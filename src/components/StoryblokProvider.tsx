"use client";

import { ReactNode } from "react";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { accessToken, storyblokComponents } from "@/lib/storyblokConfig";

// CLIENT-side initialization — registers the same components on the client so
// the Visual Editor bridge can re-render content live as you edit.
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: storyblokComponents,
});

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  return children;
}
