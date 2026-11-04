import Reveal from "./Reveal.jsx";

// The heading with the decorative SVG behind it.
export default function SectionTitle({ id, children }) {
  return (
    <Reveal
      as="h2"
      id={id}
      className="relative z-0 mb-[clamp(1.5rem,4vw,2.5rem)] ml-[clamp(1.5rem,4vw,3rem)] inline-block text-[length:clamp(1.9rem,1.3rem_+_2vw,3rem)] leading-[1.1] font-extrabold max-sm:ml-8"
    >
      <img
        src="/assets/removebg.svg"
        alt=""
        className="pointer-events-none absolute top-1/2 -left-[1.5em] -z-10 h-auto w-[2.1em] -translate-y-1/2"
      />
      {children}
    </Reveal>
  );
}
