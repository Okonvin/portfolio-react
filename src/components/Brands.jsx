import { brands } from "../data.js";
import Reveal, { stagger } from "./Reveal.jsx";
import Section from "./Section.jsx";

export default function Brands() {
  return (
    <Section label="Technologies and tools" tight>
      <ul className="mx-auto grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-x-4 gap-y-[clamp(1.5rem,4vw,3rem)]">
        {brands.map((brand, index) => (
          <Reveal as="li" key={brand.name} delay={stagger(index)} className="grid place-items-center">
            <img
              src={brand.icon}
              alt={brand.name}
              className="h-[clamp(2.5rem,6vw,4rem)] w-full max-w-[5.5rem] object-contain opacity-40 transition-opacity hover:opacity-100"
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
