"use client";

type WaveDividerProps = {
  fill?: string;
  bg?: string;
  position?: "top" | "bottom";
  flip?: boolean;
  height?: string;
};

export default function WaveDivider({
  fill = "#fdf8f5",
  bg = "transparent",
  position = "bottom",
  flip = false,
  height = "h-10 sm:h-16 md:h-24 lg:h-32",
}: WaveDividerProps) {
  const posClass =
    position === "bottom"
      ? "bottom-0 translate-y-[1px]"
      : "top-0 -translate-y-[1px] rotate-180";

  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-none z-20 ${posClass} pointer-events-none`}
      aria-hidden="true"
      style={{ background: bg }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full ${height} block transform-gpu will-change-transform ${flip ? "scale-x-[-1]" : ""}`}
        style={{ color: fill }}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.45,130.34,124.63,195.4,108.27c44.87-11.28,87.65-29.67,126-51.83Z"
          className="fill-current"
        />
      </svg>
    </div>
  );
}
