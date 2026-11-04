import { useInView } from "../hooks/useInView.js";

// Fades its content up the first time it scrolls into view.
// `as` picks the HTML tag, `delay` (ms) staggers siblings.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...props }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      style={{ animationDelay: `${delay}ms`, ...style }}
      className={`${inView ? "motion-safe:animate-reveal-up" : "motion-safe:opacity-0"} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Delay for the nth item in a row/list: 0, 90, 180... capped so long lists don't drag.
export const stagger = (index) => Math.min(index, 5) * 90;
