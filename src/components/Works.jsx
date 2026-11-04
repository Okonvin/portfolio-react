import { works } from "../data.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Works() {
  return (
    <Section id="work" labelledBy="work-title">
      <SectionTitle id="work-title">Recent works</SectionTitle>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-[clamp(1.25rem,3vw,2.25rem)]">
        {works.map((work, index) => (
          <Reveal as="li" key={work.name} delay={stagger(index)}>
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[16/10] overflow-hidden rounded-[14px] bg-surface shadow-[0_8px_20px_rgba(53,51,83,0.16)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus"
            >
              <img src={work.image} alt="" loading="lazy" className="size-full object-cover object-top" />

              <span className="absolute inset-0 flex items-center bg-[rgba(115,255,246,0.94)] p-5 text-black opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-focus-visible:opacity-100 after:absolute after:bottom-4 after:left-4 after:size-[22px] after:rounded-full after:bg-[#c8f31d] after:content-['']">
                <span className="absolute top-0 left-[12%] rounded-b-[14px] bg-[#17d117] px-4 pt-[0.15rem] pb-[0.3rem] text-base font-extrabold text-white">
                  {work.tag}
                </span>
                <span className="text-[length:clamp(1.2rem,1rem_+_0.8vw,1.6rem)] leading-[1.2] font-extrabold">
                  {work.name}
                </span>
              </span>

              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
