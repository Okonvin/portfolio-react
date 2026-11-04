import { about, profile, skills, stats } from "../data.js";
import { useInView } from "../hooks/useInView.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { btnClass } from "./ui.js";

export default function About() {
  // The skill bars start empty and fill once this section is on screen.
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <Section id="about" labelledBy="about-title">
      <div ref={ref}>
        <SectionTitle id="about-title">About Me</SectionTitle>

        <div className="grid grid-cols-[clamp(150px,18vw,260px)_1fr] items-center gap-[clamp(1.5rem,4vw,3.5rem)] max-lg:grid-cols-1 max-lg:justify-items-center max-lg:gap-9">
          <Reveal
            as="img"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="aspect-square w-full rounded-full bg-navy object-cover shadow-[0_12px_40px_rgba(53,51,83,0.35)] max-lg:w-[clamp(140px,28vw,220px)]"
          />

          <Reveal
            delay={90}
            className="relative grid w-full grid-cols-2 gap-[clamp(1.5rem,4vw,3rem)] rounded-[28px] bg-surface p-[clamp(1.25rem,3vw,2.5rem)] shadow-[0_18px_40px_rgba(53,51,83,0.16)] before:absolute before:top-[3.25rem] before:-left-[22px] before:h-9 before:w-6 before:bg-surface before:content-[''] before:[clip-path:polygon(100%_0,100%_100%,0_55%)] max-[760px]:grid-cols-1 max-lg:before:-top-5 max-lg:before:left-1/2 max-lg:before:h-[22px] max-lg:before:w-10 max-lg:before:-translate-x-1/2 max-lg:before:[clip-path:polygon(0_100%,100%_100%,50%_0)]"
          >
            <div className="flex flex-col items-start justify-between gap-6">
              <p className="max-w-[52ch] text-[length:clamp(0.95rem,0.85rem_+_0.45vw,1.2rem)] leading-[1.65] font-light">
                {about.text}
              </p>
              <a className={btnClass} href={about.cv} download>
                Download CV
              </a>
            </div>

            <ul className="flex flex-col justify-center gap-[1.1rem]">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-[0.3rem] flex justify-between text-[0.9rem] font-semibold">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={skill.name}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.level}
                    className="h-3.5 overflow-hidden rounded-full bg-track"
                  >
                    <span
                      className="block h-full rounded-full motion-safe:transition-[width] motion-safe:duration-[1.1s] motion-safe:ease-[cubic-bezier(0.2,0.7,0.2,1)]"
                      style={{ width: inView ? `${skill.level}%` : 0, backgroundColor: skill.color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <ul className="mt-[clamp(2rem,5vw,3.5rem)] grid grid-cols-4 gap-x-6 gap-y-8 max-lg:grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-6">
          {stats.map((stat, index) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={stagger(index)}
              className="flex min-w-0 items-center gap-[0.9rem] max-sm:flex-col max-sm:items-start max-sm:gap-2"
            >
              <img src={stat.icon} alt="" className="size-[clamp(2.5rem,4vw,3.5rem)] shrink-0 object-contain" />
              <div className="flex min-w-0 flex-col">
                <span className="text-[length:clamp(1.8rem,1.3rem_+_1.6vw,2.9rem)] leading-[1.05] font-extrabold">
                  {stat.value}
                </span>
                <span className="text-[length:clamp(0.85rem,0.8rem_+_0.3vw,1.1rem)] font-light text-ink-soft">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
