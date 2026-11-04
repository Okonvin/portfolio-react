import { useEffect, useState } from "react";

// Tracks which section crosses the middle of the screen. If more than one does,
// the one that comes first in `ids` wins. Ids with no matching element are ignored.
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const targets = ids.map((id) => document.getElementById(id));
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        const index = targets.findIndex((target) => target && visible.has(target));
        if (index >= 0) setActive(ids[index]);
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    targets.forEach((target) => target && observer.observe(target));
    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive];
}
