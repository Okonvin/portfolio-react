import { profile, socials } from "../data.js";

// Each piece fades up in turn when the page loads.
const enterClass = "motion-safe:animate-reveal-up";
const enterDelay = (step) => ({ animationDelay: `${0.1 + step * 0.15}s` });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-[calc(100svh_-_var(--gap)*2)] place-items-center bg-navy px-5 pt-8 pb-[5.5rem] text-white short:pb-8 max-sm:min-h-[calc(100svh_-_4.25rem_-_env(safe-area-inset-bottom,0px))] max-sm:px-4 max-sm:pb-20"
    >
      <div className="flex flex-col items-center gap-[0.6rem] text-center">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          style={enterDelay(0)}
          className={`mb-2 aspect-square w-[clamp(96px,13vw,170px)] rounded-full bg-avatar object-cover shadow-[0_0_clamp(30px,5vw,60px)_rgba(25,211,197,0.45)] ${enterClass}`}
        />

        <h1
          style={enterDelay(1)}
          className={`text-[length:clamp(1.15rem,0.9rem_+_1.1vw,1.9rem)] font-semibold tracking-[0.02em] uppercase ${enterClass}`}
        >
          {profile.name}
        </h1>

        <p
          style={enterDelay(2)}
          className={`max-w-[32ch] text-[length:clamp(0.85rem,0.78rem_+_0.35vw,1.1rem)] leading-normal font-light text-soft ${enterClass}`}
        >
          {profile.tagline}
        </p>

        <ul style={enterDelay(3)} className={`mt-[0.4rem] flex flex-wrap justify-center gap-[0.35rem] ${enterClass}`}>
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow"
              >
                <img src={social.icon} alt="" className="size-[clamp(1.1rem,1vw_+_0.6rem,1.4rem)] object-contain" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-[0.3rem] text-[0.85rem] whitespace-nowrap short:hidden motion-safe:animate-fade-in"
      >
        <span
          aria-hidden="true"
          className="relative h-6 w-4 rounded-[10px] border-[1.5px] border-white after:absolute after:top-[5px] after:left-1/2 after:ml-[-1.5px] after:size-[3px] after:rounded-full after:bg-white after:content-[''] motion-safe:after:animate-wheel"
        />
        <span>Scroll Down</span>
      </a>
    </section>
  );
}
