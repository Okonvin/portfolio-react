import { navItems } from "../data.js";

// Desktop: a sticky sidebar. Phones: a bar pinned to the bottom of the screen.
export default function Sidebar({ active, onSelect }) {
  return (
    <nav
      aria-label="Main"
      className="sticky top-(--gap) h-[calc(100svh_-_var(--gap)*2)] w-[clamp(56px,6vw,80px)] shrink-0 grow-0 self-start overflow-y-auto bg-navy [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-sm:fixed max-sm:inset-x-0 max-sm:top-auto max-sm:bottom-0 max-sm:z-10 max-sm:h-auto max-sm:w-full max-sm:overflow-visible max-sm:border-t max-sm:border-white/10 max-sm:pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="flex min-h-full flex-col items-center py-[clamp(1rem,4vh,2rem)] max-sm:min-h-0 max-sm:flex-row max-sm:px-1 max-sm:py-[0.35rem]">
        <a
          href="#home"
          aria-label="Victor, back to top"
          onClick={() => onSelect("home")}
          className="relative text-[length:clamp(1.5rem,2.4vw,2rem)] leading-none font-extrabold text-white after:absolute after:right-[-0.45em] after:bottom-[0.05em] after:size-[0.3em] after:bg-accent-red after:content-[''] short:text-[1.4rem] max-sm:hidden"
        >
          V
        </a>

        <div className="my-auto pt-4 max-sm:m-0 max-sm:w-full max-sm:p-0">
          <ul className="flex flex-col items-center gap-[clamp(0.35rem,2vh,1.1rem)] max-sm:flex-row max-sm:justify-around max-sm:gap-0">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-label={item.label}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => onSelect(item.id)}
                    className={`grid size-[2.6rem] place-items-center rounded-[10px] transition hover:scale-[1.08] hover:bg-glow/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-glow short:size-[2.1rem] max-sm:size-10 ${
                      isActive ? "bg-glow/12" : ""
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="size-[1.4rem] object-contain short:size-[1.1rem] min-[1600px]:size-[1.6rem]"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
