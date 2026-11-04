import { reviews } from "../data.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Reviews() {
  const review = reviews[0];

  return (
    <Section id="hire" labelledBy="reviews-title">
      <SectionTitle id="reviews-title">Clients &amp; Reviews</SectionTitle>

      <Reveal className="mx-auto max-w-160 text-center">
        <figure>
          <div className="mx-auto mb-5 grid size-[90px] place-items-center rounded-full bg-[#6c6ce0]">
            <img src="/assets/User.svg" alt="" className="size-[48%] object-contain brightness-0" />
          </div>

          <figcaption>
            <span className="block text-xl font-semibold text-ink-strong uppercase">{review.name}</span>
            <span className="mt-[0.2rem] block text-[0.9rem] text-ink">{review.role}</span>
          </figcaption>

          <blockquote className="mt-8 rounded-[28px] bg-bubble px-[clamp(1.1rem,3vw,1.9rem)] py-[clamp(1.1rem,3vw,1.6rem)] text-left text-white shadow-[8px_10px_16px_rgba(0,0,0,0.25)]">
            <p className="text-[length:clamp(0.95rem,0.9rem_+_0.3vw,1.1rem)] leading-[1.55]">{review.quote}</p>
          </blockquote>
        </figure>
      </Reveal>
    </Section>
  );
}
