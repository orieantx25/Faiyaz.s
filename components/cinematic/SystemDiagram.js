'use client'

/** Unique architecture posters for project rails / overlays. */

const THEMES = {
  pact: { a: '#2DD4BF', b: '#14B8A6', label: 'OPS SURFACE' },
  dbrief: { a: '#E50914', b: '#F87171', label: 'RACE PIPELINE' },
  hub: { a: '#5B9FD4', b: '#93C5FD', label: 'REPORT HUB' },
  growth: { a: '#60A5FA', b: '#38BDF8', label: 'GTM FUNNEL' },
  anpr: { a: '#F59E0B', b: '#FBBF24', label: 'VISION PIPE' },
  translator: { a: '#A78BFA', b: '#C4B5FD', label: 'SEQ2SEQ' },
  face: { a: '#34D399', b: '#6EE7B7', label: 'CV ATTEND' },
  erp: { a: '#F472B6', b: '#F9A8D4', label: 'MINI ERP' },
  matrix: { a: '#FB923C', b: '#FDBA74', label: 'PARALLEL C++' },
  infranova: { a: '#818CF8', b: '#A5B4FC', label: 'LAB LOOP' },
  gyanx: { a: '#F5C542', b: '#FDE68A', label: 'EDTECH LOOP' },
}

function Node({ x, y, w, h, label, fill, stroke }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.2}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 3.5}
        textAnchor="middle"
        fill="#F5F5F5"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  )
}

function Arrow({ x1, y1, x2, y2, color }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={1.4}
      markerEnd="url(#arrow)"
      opacity={0.85}
    />
  )
}

function Shell({ children, accent, label, wide = false }) {
  return (
    <svg
      viewBox={wide ? '0 0 560 280' : '0 0 480 260'}
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c0c0c" />
          <stop offset="55%" stopColor="#121212" />
          <stop offset="100%" stopColor="#171717" />
        </linearGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
        </marker>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <circle cx="420" cy="40" r="90" fill={accent} opacity="0.08" />
      <circle cx="40" cy="220" r="70" fill={accent} opacity="0.06" />
      <text
        x="16"
        y="22"
        fill={accent}
        fontSize="9"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.22em"
      >
        {label}
      </text>
      {children}
    </svg>
  )
}

function DiagramPact({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.pact.label}>
      <Node x={20} y={50} w={90} h={32} label="Meetings" fill="#1a1a1a" stroke={accent} />
      <Node x={20} y={100} w={90} h={32} label="Events" fill="#1a1a1a" stroke={accent} />
      <Node x={20} y={150} w={90} h={32} label="Outcomes" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={110} y1={66} x2={170} y2={110} color={accent} />
      <Arrow x1={110} y1={116} x2={170} y2={116} color={accent} />
      <Arrow x1={110} y1={166} x2={170} y2={130} color={accent} />
      <Node x={170} y={95} w={110} h={42} label="Ops Model" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={280} y1={116} x2={330} y2={116} color={accent} />
      <Node x={330} y={70} w={120} h={36} label="KPI Board" fill="#1a1a1a" stroke={accent} />
      <Node x={330} y={120} w={120} h={36} label="Weekly Report" fill="#1a1a1a" stroke={accent} />
      <Node x={330} y={170} w={120} h={36} label="Filters / UI" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramDbrief({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.dbrief.label}>
      <Node x={18} y={55} w={100} h={34} label="Timing Feed" fill="#1a1a1a" stroke={accent} />
      <Node x={18} y={110} w={100} h={34} label="Results API" fill="#1a1a1a" stroke={accent} />
      <Node x={18} y={165} w={100} h={34} label="History" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={118} y1={72} x2={170} y2={115} color={accent} />
      <Arrow x1={118} y1={127} x2={170} y2={127} color={accent} />
      <Arrow x1={118} y1={182} x2={170} y2={140} color={accent} />
      <Node x={170} y={100} w={120} h={50} label="Feature Store" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={290} y1={125} x2={335} y2={90} color={accent} />
      <Arrow x1={290} y1={125} x2={335} y2={150} color={accent} />
      <Node x={335} y={55} w={125} h={36} label="Predict Model" fill="#1a1a1a" stroke={accent} />
      <Node x={335} y={110} w={125} h={36} label="Race Briefing" fill="#1a1a1a" stroke={accent} />
      <Node x={335} y={165} w={125} h={36} label="Standings UI" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramHub({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.hub.label}>
      <Node x={20} y={70} w={95} h={34} label="Source SQL" fill="#1a1a1a" stroke={accent} />
      <Node x={20} y={130} w={95} h={34} label="Sheets / CSV" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={115} y1={87} x2={165} y2={115} color={accent} />
      <Arrow x1={115} y1={147} x2={165} y2={125} color={accent} />
      <Node x={165} y={95} w={115} h={48} label="Validate + ETL" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={280} y1={119} x2={325} y2={85} color={accent} />
      <Arrow x1={280} y1={119} x2={325} y2={150} color={accent} />
      <Node x={325} y={55} w={130} h={36} label="Looker Views" fill="#1a1a1a" stroke={accent} />
      <Node x={325} y={115} w={130} h={36} label="Python Hub UI" fill="#1a1a1a" stroke={accent} />
      <Node x={325} y={175} w={130} h={36} label="Schedulers" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramGrowth({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.growth.label}>
      <Node x={20} y={100} w={80} h={36} label="Acquire" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={100} y1={118} x2={130} y2={118} color={accent} />
      <Node x={130} y={100} w={80} h={36} label="Activate" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={210} y1={118} x2={240} y2={118} color={accent} />
      <Node x={240} y={100} w={80} h={36} label="Retain" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={320} y1={118} x2={350} y2={118} color={accent} />
      <Node x={350} y={100} w={90} h={36} label="Revenue" fill="#1a1a1a" stroke={accent} />
      <Node x={130} y={170} w={220} h={36} label="Power BI · SQL · Cohorts" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={240} y1={136} x2={240} y2={170} color={accent} />
    </Shell>
  )
}

function DiagramAnpr({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.anpr.label}>
      <Node x={20} y={100} w={90} h={40} label="Camera Feed" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={110} y1={120} x2={150} y2={120} color={accent} />
      <Node x={150} y={70} w={100} h={36} label="YOLOv8 Det" fill="#1f1f1f" stroke={accent} />
      <Node x={150} y={130} w={100} h={36} label="EasyOCR" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={250} y1={88} x2={295} y2={120} color={accent} />
      <Arrow x1={250} y1={148} x2={295} y2={130} color={accent} />
      <Node x={295} y={100} w={100} h={40} label="Plate Match" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={395} y1={120} x2={430} y2={120} color={accent} />
      <Node x={430} y={100} w={40} h={40} label="OK" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramTranslator({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.translator.label}>
      <Node x={20} y={105} w={95} h={40} label="Asm Corpus" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={115} y1={125} x2={155} y2={125} color={accent} />
      <Node x={155} y={70} w={110} h={36} label="Tokenize" fill="#1f1f1f" stroke={accent} />
      <Node x={155} y={130} w={110} h={36} label="Clean / Align" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={265} y1={88} x2={310} y2={125} color={accent} />
      <Arrow x1={265} y1={148} x2={310} y2={125} color={accent} />
      <Node x={310} y={100} w={130} h={50} label="Transformer" fill="#1a1a1a" stroke={accent} />
      <text x={375} y={190} textAnchor="middle" fill={accent} fontSize="9" fontFamily="ui-monospace, monospace">
        EN output
      </text>
    </Shell>
  )
}

function DiagramFace({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.face.label}>
      <Node x={20} y={100} w={85} h={40} label="Webcam" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={105} y1={120} x2={145} y2={120} color={accent} />
      <Node x={145} y={100} w={100} h={40} label="OpenCV" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={245} y1={120} x2={285} y2={120} color={accent} />
      <Node x={285} y={85} w={110} h={36} label="Embed Match" fill="#1a1a1a" stroke={accent} />
      <Node x={285} y={140} w={110} h={36} label="Flask API" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={395} y1={120} x2={430} y2={120} color={accent} />
      <Node x={430} y={100} w={40} h={40} label="SQL" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramErp({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.erp.label}>
      <Node x={30} y={60} w={120} h={36} label="CustomTkinter" fill="#1a1a1a" stroke={accent} />
      <Node x={30} y={115} w={120} h={36} label="CRUD Forms" fill="#1a1a1a" stroke={accent} />
      <Node x={30} y={170} w={120} h={36} label="Search / Upload" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={150} y1={78} x2={210} y2={125} color={accent} />
      <Arrow x1={150} y1={133} x2={210} y2={133} color={accent} />
      <Arrow x1={150} y1={188} x2={210} y2={145} color={accent} />
      <Node x={210} y={105} w={120} h={50} label="SQL Store" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={330} y1={130} x2={370} y2={130} color={accent} />
      <Node x={370} y={105} w={90} h={50} label="Reports" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramMatrix({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.matrix.label}>
      <Node x={30} y={100} w={90} h={40} label="Matrix A×B" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={120} y1={120} x2={165} y2={120} color={accent} />
      <Node x={165} y={70} w={110} h={36} label="OpenMP" fill="#1f1f1f" stroke={accent} />
      <Node x={165} y={130} w={110} h={36} label="SIMD Lanes" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={275} y1={88} x2={320} y2={120} color={accent} />
      <Arrow x1={275} y1={148} x2={320} y2={120} color={accent} />
      <Node x={320} y={100} w={130} h={40} label="Throughput Out" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

function DiagramInfranova({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.infranova.label}>
      <Node x={20} y={70} w={95} h={34} label="Discover" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={115} y1={87} x2={145} y2={87} color={accent} />
      <Node x={145} y={70} w={95} h={34} label="Ideate" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={240} y1={87} x2={270} y2={87} color={accent} />
      <Node x={270} y={70} w={95} h={34} label="Build" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={365} y1={87} x2={395} y2={87} color={accent} />
      <Node x={395} y={70} w={65} h={34} label="Ship" fill="#1f1f1f" stroke={accent} />
      <Node x={40} y={140} w={100} h={32} label="Sentinel" fill="#1a1a1a" stroke={accent} />
      <Node x={155} y={140} w={100} h={32} label="Helix IDE" fill="#1a1a1a" stroke={accent} />
      <Node x={270} y={140} w={100} h={32} label="Analytics" fill="#1a1a1a" stroke={accent} />
      <Node x={385} y={140} w={75} h={32} label="Funding" fill="#1a1a1a" stroke={accent} />
      <Node x={120} y={195} w={240} h={32} label="Learn in public · AI-native" fill="#1f1f1f" stroke={accent} />
    </Shell>
  )
}

function DiagramGyanx({ accent }) {
  return (
    <Shell accent={accent} label={THEMES.gyanx.label}>
      <Node x={24} y={70} w={100} h={36} label="Learner" fill="#1a1a1a" stroke={accent} />
      <Node x={24} y={130} w={100} h={36} label="Course" fill="#1a1a1a" stroke={accent} />
      <Arrow x1={124} y1={88} x2={176} y2={112} color={accent} />
      <Arrow x1={124} y1={148} x2={176} y2={128} color={accent} />
      <Node x={176} y={96} w={120} h={44} label="AI Tutor" fill="#1f1f1f" stroke={accent} />
      <Arrow x1={296} y1={118} x2={340} y2={90} color={accent} />
      <Arrow x1={296} y1={118} x2={340} y2={150} color={accent} />
      <Node x={340} y={64} w={116} h={36} label="Practice" fill="#1a1a1a" stroke={accent} />
      <Node x={340} y={128} w={116} h={36} label="Progress" fill="#1a1a1a" stroke={accent} />
      <Node x={176} y={180} w={280} h={32} label="Analytics board" fill="#1a1a1a" stroke={accent} />
    </Shell>
  )
}

const BY_TITLE = {
  Pact: DiagramPact,
  DBRIEF: DiagramDbrief,
  'Analytical Dashboard & Report Hub': DiagramHub,
  'Growth Analytics Dashboard': DiagramGrowth,
  'ANPR Authentication System': DiagramAnpr,
  'Assamese-English Translator': DiagramTranslator,
  'Real-Time Facial Recognition': DiagramFace,
  'Student Management Mini-ERP': DiagramErp,
  'Matrix Multiplication Optimizer': DiagramMatrix,
  'InfraNova Labs': DiagramInfranova,
  GyanX: DiagramGyanx,
}

const ACCENT_BY_TITLE = {
  Pact: THEMES.pact.a,
  DBRIEF: THEMES.dbrief.a,
  'Analytical Dashboard & Report Hub': THEMES.hub.a,
  'Growth Analytics Dashboard': THEMES.growth.a,
  'ANPR Authentication System': THEMES.anpr.a,
  'Assamese-English Translator': THEMES.translator.a,
  'Real-Time Facial Recognition': THEMES.face.a,
  'Student Management Mini-ERP': THEMES.erp.a,
  'Matrix Multiplication Optimizer': THEMES.matrix.a,
  'InfraNova Labs': THEMES.infranova.a,
  GyanX: THEMES.gyanx.a,
}

export default function SystemDiagram({ title, className = '' }) {
  const Diagram = BY_TITLE[title] || DiagramHub
  const accent = ACCENT_BY_TITLE[title] || '#E50914'
  return (
    <div className={`relative overflow-hidden bg-[#111] ${className}`}>
      <Diagram accent={accent} />
    </div>
  )
}
