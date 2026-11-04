export default function Section({ id, labelledBy, label, tight = false, className = "", children }) {
  const spacing = tight ? "py-[clamp(1.5rem,5vw,3.5rem)]" : "py-[clamp(3rem,8vw,6rem)]";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={`mx-auto w-full max-w-[1280px] px-[clamp(1rem,4vw,3rem)] text-ink max-sm:px-3 ${spacing} ${className}`}
    >
      {children}
    </section>
  );
}
