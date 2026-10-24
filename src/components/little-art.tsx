"use client";
import { useId } from "react";

export type ToyKind =
  | "laptop"
  | "bulb"
  | "notebook"
  | "pencil"
  | "ai"
  | "lens"
  | "plant"
  | "envelope";

/** Original vector clay illustrations. They are concepts, never product screenshots. */
export function ClayToy({
  kind,
  className = "",
}: {
  kind: ToyKind;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const pink = `${uid}pink`,
    purple = `${uid}purple`,
    cream = `${uid}cream`,
    shadow = `${uid}shadow`,
    gold = `${uid}gold`;
  return (
    <svg
      className={`clay-toy ${className}`}
      viewBox="0 0 240 220"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={pink}
          x1="40"
          y1="20"
          x2="190"
          y2="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffe6df" />
          <stop offset=".5" stopColor="#f6b6c5" />
          <stop offset="1" stopColor="#d887a5" />
        </linearGradient>
        <linearGradient
          id={purple}
          x1="50"
          y1="20"
          x2="180"
          y2="210"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e8ddff" />
          <stop offset=".5" stopColor="#bca0e5" />
          <stop offset="1" stopColor="#9471bd" />
        </linearGradient>
        <linearGradient
          id={cream}
          x1="45"
          y1="40"
          x2="170"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fffefa" />
          <stop offset="1" stopColor="#e8d9cd" />
        </linearGradient>
        <linearGradient
          id={gold}
          x1="70"
          y1="20"
          x2="170"
          y2="190"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff0ac" />
          <stop offset="1" stopColor="#e8ac66" />
        </linearGradient>
        <filter id={shadow} x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow
            dx="0"
            dy="9"
            stdDeviation="5"
            floodColor="#685078"
            floodOpacity=".22"
          />
        </filter>
      </defs>
      <ellipse cx="121" cy="199" rx="80" ry="11" fill="#82678c" opacity=".09" />
      <g filter={`url(#${shadow})`}>
        {kind === "laptop" && (
          <>
            <rect
              x="34"
              y="38"
              width="174"
              height="123"
              rx="13"
              fill={`url(#${purple})`}
            />
            <rect
              x="42"
              y="46"
              width="158"
              height="105"
              rx="7"
              fill="#fffaf7"
            />
            <rect x="49" y="54" width="30" height="88" rx="4" fill="#eee5fa" />
            <circle cx="64" cy="66" r="6" fill="#a48acb" />
            <path
              d="M57 85h14m-14 12h14m-14 12h10"
              stroke="#bba3d9"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect x="87" y="55" width="104" height="16" rx="5" fill="#f7d9df" />
            <rect x="87" y="79" width="104" height="32" rx="6" fill="#eee5fa" />
            {[8, 16, 11, 22, 14, 24, 10, 19, 13, 7, 17, 9].map((h, i) => (
              <rect
                key={i}
                x={94 + i * 7.7}
                y={95 - h / 2}
                width="3.6"
                height={h}
                rx="1.8"
                fill="#a387c8"
              />
            ))}
            <rect x="87" y="118" width="48" height="25" rx="5" fill="#d7ecdf" />
            <rect
              x="142"
              y="118"
              width="49"
              height="25"
              rx="5"
              fill="#ffe5c9"
            />
            <path
              d="M34 160h174l22 24c3 5-1 10-9 10H20c-8 0-11-5-7-10Z"
              fill={`url(#${cream})`}
            />
            <path d="M48 164h145l9 12H37Z" fill="#cfbddb" />
            <path d="M96 180h49l5 7H91Z" fill="#d2c4d9" />
          </>
        )}
        {kind === "bulb" && (
          <>
            <path
              d="M88 139c0-18-27-29-27-64a59 59 0 0 1 118 0c0 35-27 46-27 64Z"
              fill={`url(#${gold})`}
            />
            <ellipse
              cx="98"
              cy="55"
              rx="17"
              ry="24"
              transform="rotate(28 98 55)"
              fill="#fffbe4"
              opacity=".7"
            />
            <path
              d="M104 139v-38l-16-17m48 55v-38l16-17m-48 24h32"
              stroke="#d79b56"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <rect
              x="87"
              y="139"
              width="66"
              height="39"
              rx="12"
              fill={`url(#${purple})`}
            />
            <path
              d="M94 150h51m-51 12h51"
              stroke="#e1d4f7"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M104 178h32l-7 11h-18Z" fill="#9073b3" />
            <path
              d="M26 66h15m158 0h15M43 20l12 12m133-12-12 12M29 120l14-7m155 7-14-7"
              stroke="#e5b370"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </>
        )}
        {kind === "notebook" && (
          <g transform="rotate(-9 120 110)">
            <rect
              x="57"
              y="29"
              width="135"
              height="164"
              rx="12"
              fill="#af8ecc"
            />
            <rect
              x="51"
              y="23"
              width="133"
              height="162"
              rx="12"
              fill={`url(#${pink})`}
            />
            <path d="M74 27v154" stroke="#da98ac" strokeWidth="3" />
            {[44, 70, 96, 122, 148, 172].map((y) => (
              <path
                key={y}
                d={`M44 ${y}h18`}
                stroke="#fff5e9"
                strokeWidth="7"
                strokeLinecap="round"
              />
            ))}
            <rect x="91" y="63" width="70" height="58" rx="7" fill="#fff4e8" />
            <path
              d="M105 81h41m-41 12h32m-32 12h21"
              stroke="#c19aa8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="m137 146 7-7 7 7-7 7Z" fill="#fff0b0" />
          </g>
        )}
        {kind === "pencil" && (
          <g transform="rotate(30 120 110)">
            <rect
              x="99"
              y="23"
              width="40"
              height="139"
              rx="7"
              fill={`url(#${gold})`}
            />
            <path d="M112 42v117" stroke="#fff2bc" strokeWidth="9" />
            <path d="m99 161 20 38 20-38Z" fill="#e9c4a3" />
            <path d="m112 185 7 14 7-14Z" fill="#725477" />
            <rect
              x="99"
              y="23"
              width="40"
              height="28"
              rx="7"
              fill={`url(#${pink})`}
            />
            <path d="M99 49h40" stroke="#e0cfdb" strokeWidth="9" />
          </g>
        )}
        {kind === "ai" && (
          <>
            <path
              d="m73 80 92-22-42 98-50-76 113 80"
              stroke="#b5a1cd"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <circle cx="73" cy="80" r="33" fill={`url(#${purple})`} />
            <circle cx="165" cy="58" r="27" fill={`url(#${pink})`} />
            <circle cx="123" cy="156" r="37" fill={`url(#${cream})`} />
            <circle cx="186" cy="160" r="20" fill="#9fc8b7" />
            <path
              d="m69 65-10 15 14 14m11-29 10 15-14 14"
              stroke="#fdf6ff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="m119 138-6 19 12-6 9 18 4-30Z" fill="#b79ad5" />
          </>
        )}
        {kind === "lens" && (
          <>
            <path
              d="m143 139 48 48"
              stroke="#b594cf"
              strokeWidth="27"
              strokeLinecap="round"
            />
            <circle cx="102" cy="94" r="65" fill={`url(#${purple})`} />
            <circle cx="102" cy="94" r="48" fill="#dcecf3" />
            <path
              d="M72 85c4-17 16-26 34-27"
              stroke="#fffaf4"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M84 108h36m-18-18v36"
              stroke="#b6cad6"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </>
        )}
        {kind === "plant" && (
          <>
            <path d="M119 147V51" stroke="#79a18c" strokeWidth="7" />
            <ellipse
              cx="91"
              cy="96"
              rx="20"
              ry="45"
              transform="rotate(-43 91 96)"
              fill="#b2cf9c"
            />
            <ellipse
              cx="146"
              cy="83"
              rx="20"
              ry="44"
              transform="rotate(38 146 83)"
              fill="#96ba98"
            />
            <ellipse
              cx="114"
              cy="48"
              rx="17"
              ry="35"
              transform="rotate(-10 114 48)"
              fill="#b6d5a8"
            />
            <path
              d="M69 137h103l-10 49c-4 21-78 21-82 0Z"
              fill={`url(#${pink})`}
            />
            <ellipse cx="120" cy="137" rx="51" ry="11" fill="#e8a5b5" />
            <path
              d="M111 163q9 9 18 0"
              stroke="#a76886"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="100" cy="158" r="3" fill="#a76886" />
            <circle cx="140" cy="158" r="3" fill="#a76886" />
          </>
        )}
        {kind === "envelope" && (
          <>
            <rect
              x="29"
              y="77"
              width="183"
              height="113"
              rx="15"
              fill={`url(#${gold})`}
            />
            <path d="m33 84 87-58 88 58-88 70Z" fill="#edbf83" />
            <rect
              x="65"
              y="43"
              width="112"
              height="122"
              rx="9"
              transform="rotate(-7 121 104)"
              fill={`url(#${cream})`}
            />
            <path
              d="M119 110s-31-18-24-34c5-13 20-11 25-1 5-12 23-13 28-1 7 17-29 36-29 36Z"
              fill={`url(#${pink})`}
            />
            <path
              d="m30 91 90 62 91-62v87q0 14-15 14H44q-14 0-14-14Z"
              fill={`url(#${gold})`}
            />
            <path
              d="m37 185 66-49q17-12 34 0l66 49"
              stroke="#f9ddb1"
              strokeWidth="3"
            />
            <path
              d="m189 32 4-11 5 11 11 4-11 5-5 11-4-11-11-5Z"
              fill="#c6a8e6"
            />
          </>
        )}
      </g>
    </svg>
  );
}

export function WorkspacePoster() {
  return (
    <div className="workspace-poster" aria-hidden="true">
      <div className="room-window">
        <i />
        <i />
      </div>
      <div className="room-shelf">
        <span />
        <span />
        <span />
      </div>
      <div className="desk-surface" />
      <ClayToy kind="laptop" className="desk-laptop" />
      <ClayToy kind="notebook" className="desk-notebook" />
      <ClayToy kind="plant" className="desk-plant" />
      <ClayToy kind="bulb" className="desk-bulb" />
      <ClayToy kind="pencil" className="desk-pencil" />
      <ClayToy kind="ai" className="desk-ai" />
    </div>
  );
}

export function GardenArt({ slug }: { slug: string }) {
  const kinds: Record<string, [ToyKind, ToyKind]> = {
    echonote: ["laptop", "bulb"],
    echoos: ["ai", "pencil"],
    lifecapital: ["plant", "notebook"],
    "ama-research": ["notebook", "lens"],
  };
  const pair = kinds[slug] || ["notebook", "pencil"];
  return (
    <figure className={`garden-art garden-${slug}`}>
      <div className="garden-pedestal" />
      <ClayToy kind={pair[0]} className="garden-main-toy" />
      <ClayToy kind={pair[1]} className="garden-small-toy" />
      {slug === "echonote" && (
        <div className="concept-note">
          <span>✦ A little more clarity</span>
          <strong>Listen. Connect. Act.</strong>
          <div>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      {slug === "echoos" && (
        <span className="art-sticker">ideas find their people ↗</span>
      )}
      {slug === "lifecapital" && (
        <span className="art-sticker">Your choices. Your future.</span>
      )}
      {slug === "ama-research" && (
        <span className="art-sticker">People + technology</span>
      )}
      <span className="art-spark spark-one">✦</span>
      <span className="art-spark spark-two">✧</span>
      <figcaption>
        Conceptual illustration · not a product screenshot
      </figcaption>
    </figure>
  );
}
