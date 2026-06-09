import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import type { GlobalReferenceBlok } from "./types";

// Renders content that lives in ONE place (a separate "global" story) on many
// pages. The `reference` field stores a story UUID; the route resolves it via
// `resolve_relations: ["global_reference.reference"]`, after which `reference`
// is the full referenced story and `reference.content` is its root blok.
// Edit the referenced story once → every page using this block updates.
export default function GlobalReference({ blok }: { blok: GlobalReferenceBlok }) {
  const referenced = typeof blok.reference === "object" ? blok.reference.content : undefined;

  // Not resolved yet (UUID string), empty reference, or relation not requested.
  if (!referenced) return null;

  return (
    <div {...storyblokEditable(blok)}>
      <StoryblokServerComponent blok={referenced} />
    </div>
  );
}
