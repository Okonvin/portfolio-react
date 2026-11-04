import { services } from "../data.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <SectionTitle id="services-title">Services</SectionTitle>

      <ul className="mx-auto grid max-w-[1100px] grid-cols-3 gap-[clamp(1.25rem,3vw,2.25rem)] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <Reveal
            as="li"
            key={service.title + index}
            delay={stagger(index)}
            className="flex flex-col items-center gap-[0.7rem] rounded-[28px] bg-navy px-5 pt-6 pb-7 text-center text-white shadow-[8px_12px_20px_rgba(53,51,83,0.3)] transition hover:-translate-y-1"
          >
            <img src={service.icon} alt="" className="size-12 object-contain" />
            <h3 className="text-[length:clamp(1rem,0.95rem_+_0.3vw,1.2rem)] font-extrabold uppercase">{service.title}</h3>
            <p className="max-w-[28ch] text-[length:clamp(0.92rem,0.88rem_+_0.25vw,1.05rem)] leading-normal font-light">
              {service.text}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
