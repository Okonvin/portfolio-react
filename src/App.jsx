import About from "./components/About.jsx";
import Brands from "./components/Brands.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Reviews from "./components/Reviews.jsx";
import Services from "./components/Services.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Works from "./components/Works.jsx";
// import Posts from "./components/Posts.jsx";
import { navItems } from "./data.js";
import { useScrollSpy } from "./hooks/useScrollSpy.js";

// Sections the nav highlights as you scroll (in nav order).
const sectionIds = navItems.map((item) => item.id);

export default function App() {
  const [active, setActive] = useScrollSpy(sectionIds);

  return (
    // On phones the nav is a fixed bottom bar, so leave room for it under the content.
    <div className="max-sm:pb-[calc(3.5rem_+_env(safe-area-inset-bottom,0px))]">
      <ThemeToggle />

      <div className="flex items-stretch gap-(--gap) p-(--gap) max-sm:flex-col max-sm:p-2">
        <Sidebar active={active} onSelect={setActive} />

        <main className="flex min-w-0 flex-1 flex-col gap-(--gap)">
          <Hero />
          <About />
          <Experience />
          <Services />
          <Works />
          <Reviews />
          <Brands />
          {/* <Posts /> */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
