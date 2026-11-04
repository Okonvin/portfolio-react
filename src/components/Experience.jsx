import { resume } from "../data.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Experience() {
  const single = resume.length === 1;

  return (
    <Section id="resume" labelledBy="experience-title">
      <SectionTitle id="experience-title">Experience</SectionTitle>

      <div
        className={`mx-auto grid max-w-[1100px] gap-[clamp(1.5rem,4vw,3rem)] ${
          single ? "grid-cols-1" : "grid-cols-2 max-[900px]:grid-cols-1"
        }`}
      >
        {resume.map((card, cardIndex) => (
          <Reveal
            key={card.id}
            id={card.id}
            aria-labelledby={`${card.id}-heading`}
            delay={stagger(cardIndex)}
            className="rounded-3xl bg-navy px-[clamp(1rem,3vw,1.75rem)] py-[clamp(1.25rem,3vw,2rem)] text-white shadow-[0_16px_34px_rgba(53,51,83,0.28)]"
          >
            <h3 id={`${card.id}-heading`} className="sr-only">
              {card.heading}
            </h3>

            <ol>
              {card.items.map((item) => (
                <li key={item.title} className="group grid grid-cols-[1.6rem_1fr] gap-4">
                  <div className="flex flex-col items-center gap-[0.45rem] pt-[0.1rem]">
                    <img src={item.icon} alt="" className="h-[1.2rem] w-[1.4rem] object-contain" />
                    <span className="min-h-10 w-px flex-1 bg-linear-to-b from-white to-white/25 group-last:hidden" />
                  </div>

                  <div className="pb-[1.6rem] group-last:pb-1">
                    <span className="text-[0.8rem] font-light text-soft">{item.date}</span>
                    <h4 className="mt-1 mb-[0.3rem] text-[length:clamp(1.05rem,1rem_+_0.3vw,1.25rem)] font-extrabold">
                      {item.title}
                    </h4>
                    {item.org && <span className="mb-[0.6rem] block text-[0.9rem] font-semibold text-glow">{item.org}</span>}
                    <p className="text-[length:clamp(0.95rem,0.9rem_+_0.3vw,1.15rem)] leading-normal font-light">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
