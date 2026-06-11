import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd(), '..');
const outRoot = path.resolve(process.cwd(), 'src/content/docs');

const pages = [
  ['01-market-landscape.md', 'market-landscape', 'Indian Retail Broking Market Landscape', 'Market structure, share shifts, revenue models, regulatory pressure and strategic whitespace.'],
  ['02-onboarding-money-backoffice.md', 'experience/onboarding-money-backoffice', 'Onboarding, Money Movement and Back Office', 'How Indian brokers handle account opening, pay-ins, withdrawals, ledgers, reports and tax workflows.'],
  ['03-trading-experience-fno-api.md', 'experience/trading-experience-fno-api', 'Trading Experience: F&O, Commodities and APIs', 'A pro-trader benchmark across charting, options tooling, APIs, order types, latency and reliability.'],
  ['04-investor-research-ecosystem.md', 'experience/investor-research-ecosystem', 'Investor Research, Analytics and Ecosystem', 'Research, wealth, education, community and ecosystem patterns for the investor expansion layer.'],
  ['05-pricing-margin-mtf.md', 'experience/pricing-margin-mtf', 'Pricing, Margin, MTF and Capital Efficiency', 'Value-for-money mechanics across brokerage, hidden charges, pledge, funding and true cost.'],
  ['06-support-trust-brand.md', 'experience/support-trust-brand', 'Support, Trust, Brand and Marketing', 'Support models, trust systems, brand playbooks and word-of-mouth loops in Indian broking.'],
  ['07-feature-parity-matrix.md', 'strategy/feature-parity-matrix', 'Feature Parity Matrix', 'A product decision matrix for what Arrow must match, improve, leapfrog or defer.'],
  ['09-validated-feature-ideas.md', 'strategy/validated-feature-ideas', 'Validated Feature Ideas', 'Prioritized backlog of product, operations, trust, pricing and GTM ideas.'],
  ['08-go-to-market.md', 'strategy/go-to-market', 'Go-To-Market Strategy', 'Positioning, rollout, pricing, regulatory path, channels, metrics, risks and roadmap.'],
];

const linkMap = new Map([
  ['01-market-landscape.md', '/market-landscape/'],
  ['02-onboarding-money-backoffice.md', '/experience/onboarding-money-backoffice/'],
  ['03-trading-experience-fno-api.md', '/experience/trading-experience-fno-api/'],
  ['04-investor-research-ecosystem.md', '/experience/investor-research-ecosystem/'],
  ['05-pricing-margin-mtf.md', '/experience/pricing-margin-mtf/'],
  ['06-support-trust-brand.md', '/experience/support-trust-brand/'],
  ['07-feature-parity-matrix.md', '/strategy/feature-parity-matrix/'],
  ['08-go-to-market.md', '/strategy/go-to-market/'],
  ['09-validated-feature-ideas.md', '/strategy/validated-feature-ideas/'],
]);

function stripYaml(text) {
  return text.startsWith('---\n') ? text.replace(/^---\n[\s\S]*?\n---\n+/, '') : text;
}

function rewriteLinks(text) {
  let next = text;
  for (const [from, to] of linkMap) {
    next = next.replaceAll(`](${from})`, `](${to})`);
  }
  return next;
}

function bodyWithoutH1(text) {
  return text.replace(/^# .+\n+/, '');
}

function frontmatter(title, description) {
  return `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\n---\n\n`;
}

function imports(mermaid = false) {
  const lines = [`import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';`];
  if (mermaid) lines.push(`import Mermaid from '../../components/Mermaid.astro';`);
  return `${lines.join('\n')}\n\n`;
}

function localImportPrefix(slug) {
  const depth = slug.split('/').length - 1;
  return depth === 0 ? '../..' : '../../..';
}

function pageImport(slug, mermaid = false) {
  const prefix = localImportPrefix(slug);
  const lines = [`import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';`];
  if (mermaid) lines.push(`import Mermaid from '${prefix}/components/Mermaid.astro';`);
  return `${lines.join('\n')}\n\n`;
}

const diagrams = {
  'market-landscape': `quadrantChart
  title Indian broker landscape by acquisition scale and pro depth
  x-axis Mass retail acquisition --> Pro trader depth
  y-axis Weak trust moat --> Strong trust moat
  quadrant-1 Pro trust benchmark
  quadrant-2 Bank or trust-led mass
  quadrant-3 Undifferentiated challengers
  quadrant-4 Product-led trader wedge
  Groww: [0.22, 0.72]
  Zerodha: [0.78, 0.86]
  Dhan: [0.88, 0.62]
  Angel One: [0.45, 0.55]
  ICICI Direct: [0.34, 0.82]
  Upstox: [0.58, 0.42]
  Arrow target: [0.93, 0.88]`,
  'experience/support-trust-brand': `flowchart LR
  A[Inspectable trust proof] --> B[Trader confidence]
  B --> C[High-quality referrals]
  C --> D[More serious users]
  D --> E[More incident, cost and API data]
  E --> A
  B --> F[Lower support panic]
  F --> A`,
  'strategy/feature-parity-matrix': `flowchart TD
  A[Candidate feature] --> B{Required for credible launch?}
  B -->|Yes| C[Table-stakes parity]
  B -->|No| D{Known pattern with execution gap?}
  D -->|Yes| E[Parity-plus]
  D -->|No| F{Strategic white space?}
  F -->|Yes| G[Leapfrog]
  F -->|No| H[Skip with reason]
  C --> I[Ship in Phase 1]
  E --> J[Ship or fast-follow]
  G --> K[Prioritize if wedge-critical]
  H --> L[Partner, defer or avoid]`,
  'strategy/go-to-market': `timeline
  title Arrow launch roadmap
  0-3 months : Entity, regulatory strategy, compliance leadership, design partners
  3-9 months : Exchange, clearing, DP, KYC, OMS and RMS decisions
  9-15 months : Terminal, APIs, reports, status page, security and DR
  12-18 months : Closed beta, incident drills, tax packet and payout drills
  18 months : Phase 1 public launch if gates pass
  18-24 months : Expiry Mode, paper trading, journal, complaint dashboard
  24+ months : Investor products, family wealth and ecosystem expansion`,
};

const pageCallouts = {
  'market-landscape': `<Aside type="tip" title="Strategic read">\nThe market is large but less forgiving: active-client growth has softened, F&O monetisation is under regulatory pressure and the clearest opening is a pro-trader system built around reliability, transparency and API depth.\n</Aside>\n\n<Mermaid title="Landscape overview" chart={\`${diagrams['market-landscape']}\`} />\n\n`,
  'experience/support-trust-brand': `<Aside type="caution" title="Trust is operational">\nFor Arrow, trust cannot be a brand claim alone. It has to show up as order-state clarity, public incident timelines, custody proof, complaint metrics and no-spam support defaults.\n</Aside>\n\n<Mermaid title="Word-of-mouth trust loop" chart={\`${diagrams['experience/support-trust-brand']}\`} />\n\n`,
  'strategy/feature-parity-matrix': `<Aside type="tip" title="How to use this matrix">\nRead each row as a decision, not a wishlist. Phase 1 should ship table-stakes credibility and the leapfrogs that directly support the F&O/API wedge.\n</Aside>\n\n<Mermaid title="Feature verdict flow" chart={\`${diagrams['strategy/feature-parity-matrix']}\`} />\n\n`,
  'strategy/go-to-market': `<Aside type="note" title="Launch posture">\nThe plan prioritizes high-intent design partners and public proof objects before mass acquisition. The first outage, tax season and expiry day are treated as brand-defining moments.\n</Aside>\n\n<Mermaid title="Phase roadmap" chart={\`${diagrams['strategy/go-to-market']}\`} />\n\n`,
};

const overview = `${frontmatter("Arrow Strategy Overview", "A polished research hub for Arrow Trade's Indian broking strategy.")}${pageImport('overview', true)}
<div class="hero-panel">

<Badge text="Research synthesis" variant="tip" /> <Badge text="India broking" variant="note" /> <Badge text="F&O and API wedge" variant="caution" />

Arrow should not launch as another cheap brokerage app. The strongest wedge is a professional trading and automation broker for serious F&O traders, API-first pros and small pro desks, then an investor-grade wealth layer once trust is earned.

</div>

<div class="metric-strip">
  <div class="metric"><strong>4.56cr</strong><span>NSE active clients in May 2026, down from 4.92cr in March 2025.</span></div>
  <div class="metric"><strong>28.64%</strong><span>Groww's May 2026 NSE active-client share.</span></div>
  <div class="metric"><strong>Rs 10</strong><span>New active-trader pricing anchor set by m.Stock and Kotak Neo.</span></div>
  <div class="metric"><strong>9</strong><span>Research and strategy documents transformed into this site.</span></div>
</div>

<Aside type="tip" title="Core thesis">
The open mindshare gap is not "cheaper Zerodha" or "Groww for pros." It is a broker where order state, latency, margin, fees, tax, API behavior and incident impact are visible enough for serious users to trust under stress.
</Aside>

## Site Map

<CardGrid>
  <Card title="Market Landscape" icon="seti:chart">
    Share shifts, F&O regulation, broker economics and the whitespace for a pro-trader operating system. Start with [Market Landscape](/market-landscape/).
  </Card>
  <Card title="Experience Research" icon="seti:folder">
    The five operating dimensions: onboarding and money movement, trading and APIs, investor research, pricing and margin, and trust.
  </Card>
  <Card title="Strategy" icon="seti:config">
    The parity matrix, validated backlog and go-to-market plan translate research into launch choices.
  </Card>
</CardGrid>

## Strategic Narrative

Arrow's launch position should be **the serious trader's broker: pro execution, transparent risk, reliable APIs and inspectable trust**. This is not a beginner-first wedge. Beginner simplicity matters later, but Phase 1 should feel dense, fast and respectful to traders who already know Zerodha, Dhan, Fyers, Upstox, Angel SmartAPI and m.Stock.

<Mermaid title="Arrow strategic flywheel" chart={\`flowchart LR
  A[Pro F&O and API wedge] --> B[Order, cost and risk telemetry]
  B --> C[Trust during expiry, outages and tax season]
  C --> D[High-quality referrals and API community]
  D --> E[More active usage and better product data]
  E --> B
  C --> F[Investor-grade wealth layer]
  F --> G[Household assets and lower F&O dependence]
  G --> C\`} />

## What Matters Most

| Priority | Why it matters | Where to read |
|---|---|---|
| Inspectable execution | Traders switch when order state, latency, rejects and incident impact stop being guesswork. | [Trading, F&O and APIs](/experience/trading-experience-fno-api/) |
| Money and reports as product | Instant payout, ledgers, Tax P&L and CA packets create trust outside the trading screen. | [Onboarding, Money and Back Office](/experience/onboarding-money-backoffice/) |
| True total cost | Rs 20 brokerage is no longer enough; the winning product shows brokerage, statutory charges, funding, slippage and DP/pledge costs live. | [Pricing, Margin and MTF](/experience/pricing-margin-mtf/) |
| Trust by proof | No-spam support, public status, complaint metrics, custody proof and postmortems should be product surfaces. | [Support, Trust and Brand](/experience/support-trust-brand/) |
| Phase discipline | Ship the F&O/API wedge first, then investor wealth, then ecosystem. | [Go-To-Market Strategy](/strategy/go-to-market/) |

## Recommended Launch Shape

1. Launch with resident KYC, F&O-first activation, Rs 10/order or equivalent pro economics, public tariff, TradingView-grade charts, advanced option chain, free personal API, sandbox v1, True Cost Meter, Latency Ledger, public status page, instant payout if supported, named back office, Tax P&L and CA packet v1.
2. Fast-follow with Expiry Mode, paper trading, order replay, strategy journal, complaint dashboard, shareable savings card, realistic sandbox, endpoint uptime and MTF cost controls.
3. Expand into Portfolio Intelligence, MFs, ETFs, IPOs, bonds, family workspace, research scorecards and partner marketplace only after the pro wedge has reliability proof.
`;

fs.mkdirSync(outRoot, { recursive: true });
fs.writeFileSync(path.join(outRoot, 'overview.mdx'), overview);

for (const [sourceFile, slug, title, description] of pages) {
  const sourcePath = path.join(repoRoot, 'research', sourceFile);
  let text = fs.readFileSync(sourcePath, 'utf8');
  text = rewriteLinks(bodyWithoutH1(stripYaml(text))).replaceAll('—', '-');
  text = text.replaceAll('<=', '&lt;=').replaceAll('>=', '&gt;=');
  const hasDiagram = Object.hasOwn(pageCallouts, slug);
  const body = `${frontmatter(title, description)}${pageImport(slug, hasDiagram)}${pageCallouts[slug] ?? ''}${text}`;
  const outPath = path.join(outRoot, `${slug}.mdx`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body);
}

console.log(`Generated ${pages.length + 1} documentation pages.`);
