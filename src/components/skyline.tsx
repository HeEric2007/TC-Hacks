// Flat, 2.5D illustration of downtown Minneapolis at night (no gradients).
// Each building has a lit front face, a shadowed side and a visible roof.

const FRONT = "#2A2549";
const SIDE = "#17142C";
const ROOF = "#3A3463";
const PINK = { front: "#E06AB2", side: "#A94886", roof: "#F39AD0" };
const LOW = { front: "#18152E", side: "#100E20", roof: "#262143" };
const GROUND = 300;

type BlockProps = {
  x: number;
  top: number;
  w: number;
  f: number; // width of the lit front face; the rest is the side
  front?: string;
  side?: string;
  roof?: string;
  rise?: number;
};

function Block({ x, top, w, f, front = FRONT, side = SIDE, roof = ROOF, rise = 6 }: BlockProps) {
  return (
    <g>
      <rect x={x} y={top} width={f} height={GROUND - top} fill={front} />
      <polygon points={`${x + f},${top} ${x + w},${top - rise} ${x + w},${GROUND} ${x + f},${GROUND}`} fill={side} />
      <polygon points={`${x},${top} ${x + w - f},${top - rise} ${x + w},${top - rise} ${x + f},${top}`} fill={roof} />
    </g>
  );
}

function Cap({ x, top, w, f, h, front, side, roof, rise = 6 }: BlockProps & { h: number }) {
  return (
    <g>
      <rect x={x} y={top} width={f} height={h} fill={front} />
      <polygon points={`${x + f},${top} ${x + w},${top - rise} ${x + w},${top - rise + h} ${x + f},${top + h}`} fill={side} />
      <polygon points={`${x},${top} ${x + w - f},${top - rise} ${x + w},${top - rise} ${x + f},${top}`} fill={roof} />
    </g>
  );
}

function Windows({ x, y, w, warm = false, opacity = 0.32 }: { x: number; y: number; w: number; warm?: boolean; opacity?: number }) {
  return <rect x={x} y={y} width={w} height={GROUND - y} fill={warm ? "url(#tc-win-warm)" : "url(#tc-win-cool)"} opacity={opacity} />;
}

const skyStars: [number, number, number, number][] = [
  [24, -20, 1.2, 0.7], [68, 34, 1.6, 0.9], [112, -6, 1, 0.5], [150, 96, 1.3, 0.6], [182, 18, 1.8, 0.95],
  [246, -28, 1.1, 0.6], [290, 40, 1.4, 0.8], [352, 6, 1, 0.5], [398, 72, 1.6, 0.85], [440, -18, 1.2, 0.6],
  [492, 30, 1.9, 1], [536, 82, 1, 0.5], [574, -4, 1.3, 0.7], [620, 22, 1, 0.5], [736, -24, 1.5, 0.8],
  [760, 58, 1.1, 0.6], [862, 12, 1.2, 0.7], [944, -30, 1.7, 0.9], [980, 48, 1.1, 0.55], [1012, 102, 1.4, 0.7],
  [1068, -12, 1, 0.5], [1120, 40, 1.8, 0.95], [1166, -26, 1.2, 0.6], [1214, 70, 1, 0.5], [1250, 10, 1.5, 0.85],
  [1302, -16, 1.1, 0.6], [1336, 64, 1.6, 0.8], [1384, 22, 1.2, 0.65], [1420, -30, 1.4, 0.75], [1410, 118, 1, 0.5],
  [40, 130, 1, 0.45], [1180, 112, 1.1, 0.5],
];

const farBuildings: [number, number, number][] = [
  [0, 200, 120], [100, 186, 70], [430, 168, 50], [478, 188, 70], [580, 148, 44],
  [940, 158, 44], [996, 176, 54], [1100, 190, 84], [1272, 180, 64], [1380, 196, 60],
];

const trees: [number, number, number][] = [
  [0, 300, 26], [44, 298, 20], [86, 302, 28], [140, 300, 18], [190, 304, 24], [250, 300, 16],
  [300, 302, 22], [470, 304, 20], [520, 300, 26], [580, 304, 18], [760, 306, 16], [1000, 302, 22],
  [1050, 300, 28], [1110, 304, 18], [1170, 300, 24], [1330, 304, 20], [1380, 300, 28], [1430, 302, 22],
];

export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Illustration of the downtown Minneapolis skyline at night"
      viewBox="0 -40 1440 340"
      preserveAspectRatio="xMidYMax slice"
      className={className}
    >
      <defs>
        <pattern id="tc-win-warm" width="14" height="12" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="6" height="4" fill="#F2C66D" />
        </pattern>
        <pattern id="tc-win-cool" width="10" height="14" patternUnits="userSpaceOnUse">
          <rect x="2" y="4" width="5" height="6" fill="#A9C8F0" />
        </pattern>
      </defs>

      <rect x="0" y="-40" width="1440" height="340" fill="#2E2950" />
      <g fill="#EDE9FB">
        {skyStars.map(([cx, cy, r, o]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} opacity={o} />
        ))}
      </g>
      <g fill="#3D3666">
        {farBuildings.map(([x, y, w]) => (
          <rect key={x} x={x} y={y} width={w} height={GROUND - y} />
        ))}
      </g>

      {/* Pink-topped tower */}
      <Block x={200} top={84} w={66} f={44} />
      <Cap x={200} top={84} w={66} f={44} h={18} {...PINK} />
      <Cap x={212} top={70} w={40} f={26} h={14} rise={4} {...PINK} />
      <Windows x={206} y={110} w={32} />

      {/* Small tower with white pyramid */}
      <Block x={300} top={128} w={42} f={28} />
      <polygon points="300,128 318,104 328,128" fill="#E7E3F3" />
      <polygon points="318,104 342,122 328,128" fill="#AFA8CC" />

      {/* Blue-rimmed tower */}
      <Block x={560} top={112} w={56} f={38} />
      <rect x="560" y="112" width="38" height="4" fill="#A9C8F0" />
      <Windows x={564} y={122} w={30} />

      {/* IDS Center */}
      <polygon points="640,74 652,60 676,60 676,300 640,300" fill={FRONT} />
      <polygon points="676,60 698,60 710,74 710,300 676,300" fill={SIDE} />
      <polygon points="698,60 710,74 710,300 704,300 704,70" fill="#110F22" />
      <rect x="652" y="60" width="24" height="4" fill="#A9C8F0" />
      <rect x="676" y="60" width="22" height="4" fill="#7E9CC4" />
      <Windows x={644} y={84} w={30} opacity={0.34} />

      <Block x={720} top={124} w={60} f={40} />
      <Windows x={726} y={136} w={30} />

      {/* Capella Tower and its ring crown */}
      <Block x={790} top={56} w={58} f={38} />
      <Cap x={790} top={56} w={58} f={38} h={7} rise={4} front="#D94FC0" side="#A93594" roof="#F27ED9" />
      <rect x="792" y="32" width="54" height="20" fill="#D94FC0" />
      <rect x="826" y="32" width="20" height="20" fill="#A93594" />
      <ellipse cx="819" cy="52" rx="27" ry="5" fill="#D94FC0" />
      <path d="M826 52 A27 5 0 0 0 846 50 L846 52 A27 5 0 0 1 826 57 Z" fill="#A93594" />
      <rect x="803" y="36" width="2" height="18" fill="#A93594" />
      <rect x="818" y="37" width="2" height="18" fill="#A93594" />
      <rect x="833" y="36" width="2" height="18" fill="#8A2A79" />
      <ellipse cx="819" cy="32" rx="27" ry="5.5" fill="#F27ED9" />
      <ellipse cx="819" cy="32" rx="22" ry="3.4" fill="#2E2950" />
      <Windows x={796} y={70} w={28} />

      {/* Wells Fargo Center */}
      <Block x={866} top={110} w={62} f={40} />
      <polygon points="866,110 866,92 874,92 874,76 884,76 884,62 906,62 906,110" fill="#E8B04A" />
      <polygon points="906,62 910,62 910,76 920,76 920,92 928,92 928,104 906,110" fill="#B9862F" />
      <rect x="895" y="48" width="4" height="14" fill="#E8B04A" />
      <Windows x={872} y={118} w={30} warm opacity={0.38} />

      {/* Foshay Tower */}
      <polygon points="958,300 960,142 972,122 972,300" fill={FRONT} />
      <polygon points="972,122 984,142 986,300 972,300" fill={SIDE} />

      <Block x={1040} top={94} w={62} f={42} roof="#CFC9E4" />
      <rect x="1040" y="94" width="42" height="5" fill="#E7E3F3" />
      <Windows x={1046} y={106} w={32} />

      <Block x={1118} top={138} w={46} f={30} />
      <Windows x={1122} y={148} w={22} />
      <Block x={1190} top={128} w={72} f={48} />
      <Cap x={1190} top={128} w={72} f={48} h={10} {...PINK} />
      <Windows x={1196} y={146} w={36} />
      <Block x={1290} top={160} w={50} f={34} />
      <Block x={1352} top={172} w={88} f={58} />
      <Windows x={1358} y={184} w={46} />

      {/* US Bank Stadium */}
      <polygon points="170,300 170,238 236,202 548,192 574,246 574,300" fill="#2B2652" />
      <polygon points="170,238 206,222 206,300 170,300" fill="#3A3470" />
      <polygon points="548,192 566,214 574,246 574,300 560,300 556,214" fill="#1E1A3A" />
      <polygon points="206,222 240,198 548,190 566,214" fill="#8B6FE0" />
      <polygon points="206,222 566,214 568,220 206,228" fill="#6E54C4" />
      <path d="M206 248 H558 M206 262 H562 M206 276 H566" stroke="#3A3470" strokeWidth="3" />

      {/* Low-rise foreground */}
      <Block x={0} top={240} w={170} f={150} rise={4} {...LOW} />
      <Windows x={6} y={246} w={140} warm opacity={0.35} />
      <Block x={600} top={224} w={380} f={340} rise={5} {...LOW} />
      <Windows x={606} y={230} w={330} warm opacity={0.6} />
      <Block x={1000} top={246} w={190} f={168} rise={4} {...LOW} />
      <Block x={1196} top={232} w={244} f={214} rise={4} {...LOW} />
      <Windows x={1204} y={238} w={204} warm opacity={0.45} />
      <Block x={330} top={218} w={112} f={92} rise={5} front="#B9643F" side="#8A4630" roof="#D27A53" />
      <Windows x={334} y={224} w={84} warm opacity={0.7} />

      <g fill="#0F0D1F">
        {trees.map(([cx, cy, r]) => (
          <circle key={cx} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <rect x="-40" y="292" width="1520" height="8" fill="#0F0D1F" />
    </svg>
  );
}

// Deterministic star field for the hero background (same on server and client).
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = seeded(7);
const heroStars = Array.from({ length: 70 }, () => ({
  cx: Math.round(rand() * 1440),
  cy: Math.round(4 + rand() * 536),
  r: [0.9, 1.1, 1.3, 1.6, 1.9][Math.floor(rand() * 5)],
  o: [0.35, 0.5, 0.65, 0.8, 0.95][Math.floor(rand() * 5)],
}));

export function HeroStars() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute inset-x-0 top-0 h-[560px] w-full"
    >
      <g fill="#EDE9FB">
        {heroStars.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} opacity={s.o} />
        ))}
      </g>
    </svg>
  );
}
