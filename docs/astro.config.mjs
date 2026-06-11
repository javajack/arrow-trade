import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';

const BASE = '/arrow-trade';

// Prefix root-relative markdown links (e.g. /moats/...) with the deploy base path.
function rebaseRootLinks() {
  return (tree) => {
    (function walk(node) {
      if (
        (node.type === 'link' || node.type === 'definition') &&
        typeof node.url === 'string' &&
        node.url.startsWith('/') &&
        !node.url.startsWith('//') &&
        !node.url.startsWith(`${BASE}/`)
      ) {
        node.url = BASE + node.url;
      }
      for (const child of node.children ?? []) walk(child);
    })(tree);
  };
}

export default defineConfig({
  site: 'https://javajack.github.io',
  base: BASE,
  devToolbar: { enabled: false },
  markdown: {
    remarkPlugins: [rebaseRootLinks],
  },
  integrations: [
    starlight({
      title: "Arrow — Beating India's Brokers at Their Own Game",
      description:
        'Research and strategy for launching an Indian stock broking platform for serious F&O traders, API-first pros and long-term investors.',
      logo: {
        src: './src/assets/arrow-logo.svg',
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'Repository', href: 'https://example.com/arrow-trade' }],
      sidebar: [
        {
          label: 'Overview',
          items: [{ label: 'Arrow Strategy', link: '/' }],
        },
        {
          label: 'Market Landscape',
          items: [{ label: 'Indian Retail Broking Market', slug: 'market-landscape' }],
        },
        {
          label: 'Experience Research',
          items: [
            { label: 'Onboarding, Money and Back Office', slug: 'experience/onboarding-money-backoffice' },
            { label: 'Trading, F&O and APIs', slug: 'experience/trading-experience-fno-api' },
            { label: 'Investor Research Ecosystem', slug: 'experience/investor-research-ecosystem' },
            { label: 'Pricing, Margin and MTF', slug: 'experience/pricing-margin-mtf' },
            { label: 'Support, Trust and Brand', slug: 'experience/support-trust-brand' },
          ],
        },
        {
          label: 'Strategy',
          items: [
            { label: 'Feature Parity Matrix', slug: 'strategy/feature-parity-matrix' },
            { label: 'Validated Feature Ideas', slug: 'strategy/validated-feature-ideas' },
            { label: 'Go-To-Market Strategy', slug: 'strategy/go-to-market' },
          ],
        },
        {
          label: 'Pain Signals (Voice of the Market)',
          items: [
            { label: 'Verified Pain Registry', slug: 'pain-signals/verified-pain-registry' },
            { label: 'Pain by Customer Type', slug: 'pain-signals/pain-by-customer-type' },
          ],
        },
        {
          label: 'Algo Trading',
          items: [
            { label: 'Regulation — The Framework', slug: 'algo/regulatory-framework' },
            { label: 'Platform Landscape', slug: 'algo/platform-landscape' },
            { label: 'Productizing Compliance', slug: 'algo/productizing-registration' },
          ],
        },
        {
          label: 'Moats & Wedges (Deep Synthesis)',
          items: [
            { label: 'Competing Moats', slug: 'moats/competing-moats' },
            { label: 'Segment Wedges', slug: 'moats/segment-wedges' },
            { label: 'Best-of-Breed Blueprint', slug: 'moats/best-of-breed-blueprint' },
            { label: 'Wow Moments — Validation', slug: 'moats/wow-validation' },
          ],
        },
      ],
    }),
    mdx(),
  ],
});
