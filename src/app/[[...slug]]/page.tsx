import { StoryblokStory, type ISbStoryData } from "@storyblok/react/rsc";

import { getStoryblokApi } from "@/lib/storyblok";
import Page from "@/components/storyblok/Page";
import { DEFAULT_PAGE } from "@/components/storyblok/defaultStory";

// Draft = show unpublished changes (needed for the Visual Editor preview).
// Switch to "published" + add revalidation for production traffic.
const VERSION = "draft";

async function fetchStory(slug: string): Promise<ISbStoryData | null> {
  // No token configured yet → fall back to the built-in default page.
  if (!process.env.NEXT_PUBLIC_STORYBLOK_TOKEN) return null;

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: VERSION,
    });
    return data.story;
  } catch {
    // 404 (story not created yet) or network error → use the default page.
    return null;
  }
}

export default async function CatchAllPage({
  params,
}: PageProps<"/[[...slug]]">) {
  const { slug } = await params;
  const path = slug?.join("/") || "home";

  const story = await fetchStory(path);
  if (!story) {
    // Dev-friendly fallback so the site renders before any content exists.
    return <Page blok={DEFAULT_PAGE} />;
  }

  // StoryblokStory renders the story AND loads the bridge for live editing.
  return <StoryblokStory story={story} />;
}
