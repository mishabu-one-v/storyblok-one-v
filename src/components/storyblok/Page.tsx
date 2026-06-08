import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import type { PageBlok } from "./types";

export default function Page({ blok }: { blok: PageBlok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nested) => (
        <StoryblokServerComponent blok={nested} key={nested._uid} />
      ))}
    </main>
  );
}
