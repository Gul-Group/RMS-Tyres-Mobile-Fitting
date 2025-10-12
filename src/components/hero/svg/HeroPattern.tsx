export function HeroPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Geometric background pattern */}
      <defs>
        <pattern
          id="hero-pattern"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="20"
            cy="20"
            r="2"
            fill="currentColor"
            opacity="0.3"
          />
          <circle
            cx="0"
            cy="0"
            r="1"
            fill="currentColor"
            opacity="0.2"
          />
          <circle
            cx="40"
            cy="40"
            r="1"
            fill="currentColor"
            opacity="0.2"
          />
        </pattern>
      </defs>
      
      {/* Background with pattern */}
      <rect
        width="100%"
        height="100%"
        fill="url(#hero-pattern)"
      />
      
      {/* Decorative elements */}
      <g opacity="0.1">
        <path
          d="M50 50 L350 50 L350 350 L50 350 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 100 L300 100 L300 300 L100 300 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}
