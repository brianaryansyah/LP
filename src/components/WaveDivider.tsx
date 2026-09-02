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
  height = "h-12 sm:h-16 md:h-20 lg:h-24",
}: WaveDividerProps) {
  const posClass =
    position === "bottom"
      ? "bottom-0 translate-y-px"
      : "top-0 -translate-y-px rotate-180";

  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${posClass} pointer-events-none`}
      aria-hidden="true"
      style={{ background: bg }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full ${height} block will-change-transform ${flip ? "scale-x-[-1]" : ""}`}
        style={{ color: fill }}
      >
        {/* Smooth single sine wave - no benjol, no double bump */}
        <path
          d="M0,60 C 180,110 320,10 600,60 C 880,110 1020,10 1200,60 L 1200,120 L 0,120 Z"
          className="fill-current"
        />
      </svg>
    </div>
  );
}
