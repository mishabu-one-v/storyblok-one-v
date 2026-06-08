// SERVER-side Storyblok initialization.
// Because this module has no "use client" directive, its top-level code runs
// during the React Server Component render — so getStoryblokApi() and the
// component registry are available on the server. The route imports
// getStoryblokApi from here, which guarantees init ran before any fetch.
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { accessToken, storyblokComponents } from "./storyblokConfig";

export const getStoryblokApi = storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: storyblokComponents,
  // If your Space is NOT in the EU, set the region here, e.g.:
  // apiOptions: { region: "us" },
});
