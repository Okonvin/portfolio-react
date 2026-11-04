import { posts } from "../data.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";

// Not shown right now: your Latest Posts section was commented out.
// To bring it back, uncomment <Posts /> in App.jsx and the "notes" item in data.js.
export default function Posts() {
  return (
    <Section id="notes" labelledBy="posts-title">
      <SectionTitle id="posts-title">Latest Posts</SectionTitle>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,280px),1fr))] gap-[clamp(1.25rem,3vw,2.25rem)]">
        {posts.map((post, index) => (
          <Reveal as="li" key={index} delay={stagger(index)}>
            <article className="h-full overflow-hidden rounded-[22px] shadow-[0_10px_26px_rgba(53,51,83,0.14)]">
              <a
                href={post.href}
                className="flex h-full flex-col bg-surface-2 text-ink-strong transition-colors hover:bg-post-hover focus-visible:-outline-offset-3 focus-visible:outline-3 focus-visible:outline-focus"
              >
                <div className="aspect-[4/3] bg-surface-3">
                  <img src={post.image} alt="" className="size-full object-contain" />
                </div>
                <div className="flex flex-1 flex-col gap-[0.9rem] px-[1.1rem] pt-4 pb-5">
                  <h3 className="text-[length:clamp(1.25rem,1.1rem_+_0.6vw,1.55rem)] leading-[1.2] font-extrabold">
                    {post.title}
                  </h3>
                  <p className="mt-auto flex flex-wrap gap-x-5 gap-y-1 text-[0.8rem] font-semibold">
                    <time dateTime={post.date}>{post.dateLabel}</time>
                    <span className="uppercase">{post.author}</span>
                  </p>
                </div>
              </a>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
