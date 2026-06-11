import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'src/content/docs');
const expectedRoutes = [
  'index',
  'market-landscape',
  'experience/onboarding-money-backoffice',
  'experience/trading-experience-fno-api',
  'experience/investor-research-ecosystem',
  'experience/pricing-margin-mtf',
  'experience/support-trust-brand',
  'strategy/feature-parity-matrix',
  'strategy/validated-feature-ideas',
  'strategy/go-to-market',
  'algo/regulatory-framework',
  'algo/platform-landscape',
  'algo/productizing-registration',
  'moats/competing-moats',
  'moats/segment-wedges',
  'moats/best-of-breed-blueprint',
  'moats/wow-validation',
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const pages = walk(docsDir).filter((file) => /\.(md|mdx)$/.test(file));
const routeToFile = new Map(
  pages.map((file) => {
    const rel = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
    return [rel, file];
  }),
);

const missing = expectedRoutes.filter((route) => !routeToFile.has(route));
if (missing.length) {
  throw new Error(`Missing expected docs routes: ${missing.join(', ')}`);
}

const routeSet = new Set(
  [...routeToFile.keys()].map((route) => (route === 'index' ? '/' : `/${route}/`)),
);
const linkProblems = [];
let diagrams = 0;

for (const file of pages) {
  const text = fs.readFileSync(file, 'utf8');
  diagrams += (text.match(/<Mermaid\b/g) ?? []).length;
  const route = [...routeToFile.entries()].find(([, value]) => value === file)?.[0] ?? '';
  const links = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const href of links) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    if (href.startsWith('/')) {
      const normalized = href.endsWith('/') ? href : `${href}/`;
      if (!routeSet.has(normalized)) linkProblems.push(`${route}: ${href}`);
    }
  }
}

if (diagrams < 4) {
  throw new Error(`Expected at least 4 Mermaid diagrams, found ${diagrams}`);
}

if (linkProblems.length) {
  throw new Error(`Dead internal links:\n${linkProblems.join('\n')}`);
}

console.log(`Verified ${expectedRoutes.length} routes, ${diagrams} Mermaid diagrams and internal links.`);
