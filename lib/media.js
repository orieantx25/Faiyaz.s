/** Cinematic stills from public/sequence - used as posters / graphics */

export const SEQUENCE = (n) =>
  `/sequence/frame_${String(n).padStart(3, '0')}.webp`

/** Generated system-design posters for project rails */
export const PROJECT_DIAGRAMS = {
  Pact: '/diagrams/diagram-pact.jpg',
  DBRIEF: '/diagrams/diagram-dbrief.jpg',
  'InfraNova Labs': '/diagrams/diagram-infranova.jpg',
  'Analytical Dashboard & Report Hub': '/diagrams/diagram-hub.jpg',
  'Growth Analytics Dashboard': '/diagrams/diagram-growth.jpg',
  'ANPR Authentication System': '/diagrams/diagram-anpr.jpg',
  'Assamese-English Translator': '/diagrams/diagram-translator.jpg',
  'Real-Time Facial Recognition': '/diagrams/diagram-face.jpg',
  'Student Management Mini-ERP': '/diagrams/diagram-erp.jpg',
  'Matrix Multiplication Optimizer': '/diagrams/diagram-matrix.jpg',
}

export const PROJECT_ART = {
  Pact: SEQUENCE(18),
  DBRIEF: SEQUENCE(42),
  'Analytical Dashboard & Report Hub': SEQUENCE(55),
  'Growth Analytics Dashboard': SEQUENCE(68),
  'ANPR Authentication System': SEQUENCE(75),
  'Assamese-English Translator': SEQUENCE(88),
  'Real-Time Facial Recognition': SEQUENCE(95),
  'Student Management Mini-ERP': SEQUENCE(102),
  'Matrix Multiplication Optimizer': SEQUENCE(110),
}

export function artForProject(title) {
  return PROJECT_DIAGRAMS[title] || PROJECT_ART[title] || SEQUENCE(40)
}

export function diagramForProject(title) {
  return PROJECT_DIAGRAMS[title] || null
}

export const HERO_FRAMES = [8, 20, 32, 45, 58, 70, 85, 100].map(SEQUENCE)

export const STORY_FRAMES = [25, 50, 90].map(SEQUENCE)
