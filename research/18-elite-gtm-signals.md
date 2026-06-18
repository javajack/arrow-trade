# Arrow Elite (Algo Cloud): GTM Signal-and-Source Map

Research date: 2026-06-19  
Scope: Indian NSE/BSE/MCX serious individual traders, HNI/UHNI active traders, high-frequency/API users, pro option writers, quant builders, prop-desk alumni, and referral channels.  
Strategy: inverse profiling: find public footprints that make a person demonstrably unlikely to be small retail, then qualify with compliant first-party consent before any sales process.

This is product and GTM research, not legal advice. Items marked **Unverified** are plausible public signals that could not be fully confirmed from live primary sources in this pass or came from prior local scrapes.

## Executive Read

Arrow Elite should not mass-target "algo traders." It should build a narrow sourcing engine around public proof of scale, frequency, sophistication, or influence:

1. **Money proof:** broker-linked P&L screenshots, large daily P&L brags, crore withdrawal/margin screenshots, high charges, option-selling scale, verified annual P&L posts.
2. **Frequency proof:** API users asking for millisecond timestamps, 10+ OPS limits, static IP, option-chain subscriptions, 5,000+ instruments, cloud/VPS, order-lifecycle debugging.
3. **Tooling proof:** Quantsapp, Sensibull, Streak, Tradetron, AlgoTest, smallcase quant portfolios, DhanHQ, Kite Connect, GitHub strategy repos.
4. **Community proof:** Dhan MadeForTrade, TradingQnA, Upstox Community, Reddit, X/Fintwit, GitHub, Telegram/Discord groups, prop/quant hiring networks.
5. **Referral proof:** CAs handling F&O tax audits, wealth managers serving HNIs, prop-desk alumni, quant educators, fintech/algo vendors and serious fintwit creators.

The compliant motion is **invite-only concierge qualification**, not scraped cold spam. Use public signals only to prioritize outreach; convert every lead through consented opt-in, risk/suitability checks, and no-return-claim messaging.

## Signal-and-Source Map

| # | Detectable signal | Source/platform | Real public examples found | Qualifying heuristic: why this is big-ticket or serious | Detection workflow | Compliant approach |
|---:|---|---|---|---|---|---|
| 1 | Dhan "Super Trader" / pro-trader community participation | Dhan MadeForTrade, Dhan product pages, Dhan social handles | MadeForTrade describes itself as a "Community of Super Traders & Long Term Investors" and had a 20,000+ trader welcome thread visible on 2026-06-18 ([MadeForTrade home, 2026-06-18](https://madefortrade.in/)). Dhan's options page links to MadeForTrade as "India's most active community of Super Traders & Long-Term Investors" ([Dhan options page, accessed 2026-06-19](https://dhan.co/options/)). | Community membership alone is weak; repeated posts on APIs, options, margin, order execution, charts or tax are stronger. | Monitor public MadeForTrade categories: APIs, Automation, Algos & Code; Product Feedback; Options/F&O threads; high-reply educational posts. | Join as a disclosed Arrow representative, contribute technical answers, invite only users who opt in to a design-partner call. |
| 2 | Dhan badges, leaderboards, "gift box", merchandise brags | X/Fintwit, Instagram, LinkedIn, Dhan community | **Unverified live.** Search did not confirm a stable public Dhan leaderboard, trader-of-the-month page, or gift-box archive in this pass. Treat individual gift/merch brag screenshots as user-generated, not official qualification. | A merch/gift/brag is a weak signal unless paired with P&L, volume, DhanHQ usage, or visible pro-tool workflow. | Search X/Instagram for "DhanHQ gift", "Dhan super trader", "MadeForTrade gift", "badge"; preserve source URL, date, screenshot hash, and mark unverified until manually opened. | Do not imply Dhan endorsed or shared the lead. If engaging, reply publicly only with neutral product-research invitation, then move to consented form. |
| 3 | Dhan API power-user behavior | MadeForTrade API category, DhanHQ docs, GitHub | A May 23, 2026 MadeForTrade post asks Dhan to add millisecond timestamps to order APIs to diagnose broker, network and execution delays ([MadeForTrade, 2026-05-23](https://madefortrade.in/t/why-is-there-no-millisecond-timestamp-in-the-order-api/90002)). DhanHQ docs expose order/data/quote APIs and static-IP/order controls ([DhanHQ docs, accessed 2026-06-19](https://dhanhq.co/docs/v2/)). | Requesting millisecond lifecycle data is a strong frequency/latency signal; ordinary retail does not need broker-side event timing. | Track users requesting timestamp precision, WebSocket fixes, static-IP help, option-chain APIs, order-state audit, kill switches, and market-order semantics. | Offer a technical advisory call: "We are researching low-latency order observability for high-frequency retail/API users." Avoid product performance claims. |
| 4 | Broker-linked verified annual P&L | Reddit, X/Fintwit, YouTube community, broker screenshots | **Prior local scrape / unverified live:** Reddit title "AMA Verified Zerodha PnL - 25L profit in last 365 days" had 203 points in `scrape/out/reddit-search.json` with URL `https://old.reddit.com/r/IndianStockMarket/comments/1mqsp43/ama_verified_zerodha_pnl_25l_profit_in_last_365/`. Reddit blocked live retrieval in this pass. | Rs 25L annual trading profit, if broker-verified, implies serious capital, skill or leverage. Need verify screenshot authenticity and whether this is gross/net/realized. | Search exact phrases: "Verified Zerodha PnL", "verified PnL", "365 days", "broker verified", "Sensibull verified", "Console P&L". Record broker name, period, realized/unrealized, charges and instrument. | Do not comment on returns. Invite the user to a private "execution/cost audit" where they consent to share ledger exports. |
| 5 | Broker-linked P&L screenshots on X/Fintwit | X, LinkedIn, YouTube, Telegram reposts | **Partly unverified.** Live X search was not reliably retrievable. Dhan product pages embed named X testimonials for pro-trading features, but not P&L ([Dhan options page, accessed 2026-06-19](https://dhan.co/options/)). | Strong only when screenshot includes broker watermark, account-period page, verified-PnL URL, or cross-verified trade ledger. Weak if image-only. | Build a watchlist of public accounts that repeatedly share broker screenshots, option-chain execution clips, or annual tax/P&L recaps. Use manual review, not automated scraping at scale. | Public reply should be generic: "We are interviewing active F&O/API traders about execution and reporting pain." Ask permission before DM. |
| 6 | Big daily P&L brags: "X lakh in a day" | X/Fintwit, Reddit, YouTube Shorts, Telegram screenshots | **Unverified live pattern.** Not enough stable live examples retrieved. This remains a known discovery pattern to validate manually. | Large one-day P&L can be luck or gambling; qualify by repeatability, broker proof, capital used, max drawdown, instruments and charges. | Search weekly for "lakh profit today", "BankNifty profit", "expiry profit", "verified PnL"; cluster accounts by repeated posts over 3+ months. | Never lead with "we saw your profit." Lead with execution/risk tooling: slippage, charges, tax pack, strategy-level reporting. |
| 7 | Crore-scale withdrawal, margin, or broker-ledger disputes | Reddit, press, X | ET reported a public Zerodha dispute where a doctor alleged Rs 18 crore withdrawable and inability to withdraw Rs 5 crore; Zerodha responded publicly ([Economic Times, 2025-11-04](https://m.economictimes.com/news/new-updates/hi-dr-nithin-kamath-responds-to-mumbai-doctors-claim-about-the-zerodha-scam/articleshow/125074689.cms)). **Prior local scrape:** related r/IndianStreetBets thread had 572 points. | Crore withdrawable screenshots or payout issues indicate UHNI capital, though the facts may be disputed. | Track press/social stories involving Rs 1cr+ ledger, payout, pledge, MTF or margin disputes. | Never exploit a dispute publicly. Use it as category learning; for the individual, only engage if they ask for alternatives or opt into a call. |
| 8 | High-volume option writer charges exceed profit | Reddit, broker forums, tax forums | **Prior local scrape / unverified live:** "High-volume option writer paying Rs 3.3L in charges for Rs 1.98L profit" appeared on r/IndianStockMarket and r/IndianStreetBets (`scrape/out/reddit-search.json`; Reddit live blocked). | Charges in lakhs imply high turnover; option writer likely has material capital/margin even if net profit is small. | Search "option writer charges", "brokerage 3 lakh", "STT charges option selling", "zero brokerage API lot based UI". | Offer a true-cost audit, not performance pitch. Ask for uploaded contract notes only after consent. |
| 9 | Option-selling crore-margin screenshots | X, Telegram, Reddit, YouTube | **Unverified live.** Could not confirm specific public examples in this pass. | Margin deployed above Rs 50L-1cr is a direct Arrow Elite fit. Option sellers need collateral, pledge, hedge, risk and tax support. | Search for "crore margin", "option selling capital", "pledged shares margin", "BankNifty short straddle margin". Require evidence of broker margin page or contract notes. | Approach through an opt-in "option seller desk" webinar with no trade calls, focused on margin, costs, risk controls and tax. |
| 10 | Requests for 5,000+ option-chain subscriptions or broad market data | Reddit, TradingQnA, broker API forums, GitHub issues | **Prior local scrape / unverified live:** r/IndianStreetBets title "Looking to track Nifty and BankNifty options across all expiries via API. Any broker support 5000+ instrument subscriptions?" had 20 points. | 5,000+ subscriptions is a strong quant/data-infrastructure signal, not ordinary manual trading. | Monitor API forums for instrument-subscription count, tick data, WebSocket multiplexing, option-chain refresh, historical expired options. | Offer beta access to market-data infrastructure interviews; ask whether they are self-developed, vendor, or registered algo users. |
| 11 | Sub-millisecond, colocation, HFT and exchange-proximity discussions | GitHub, LinkedIn, X, forums, quant blogs, institutional vendor sites | iRage says its institutional system has order-send latency below one microsecond and runs HFT, market-making, arbitrage and stat-arb ([iRage What We Do, accessed 2026-06-19](https://irage.in/what_do_we_do.php)). NSE colocation remains a major public topic, including 2026 news that SEBI panel cleared a Rs 1,800 crore settlement offer for NSE colocation/dark-fibre cases ([TOI, 2026-04-23](https://timesofindia.indiatimes.com/business/india-business/nse-ipo-moves-closer-with-1800-crore-settlement-approved-by-sebi/articleshow/130456928.cms)). | True sub-ms interest is usually institutional/prop/algo professional. Retail "fast execution" claims are weaker. | Search "NSE colocation", "low latency", "TBT", "microsecond", "UDP multicast", "FIX", "order gateway", "tick by tick". Look for employment history or code depth. | Do not promise retail HFT. Position Arrow Elite as broker-hosted execution observability, risk controls and registered strategies with honest latency disclosures. |
| 12 | Static IP, TOPS, algo-ID, exchange registration questions | Upstox Community, Dhan MadeForTrade, ICICI Breeze docs, NSE circulars | Upstox users asked if static IP applies below 10 OPS; the public thread says static IP/API changes went live around 2026-03-31/2026-04-01 ([Upstox Community, 2026-03-31](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). NSE set an initial 10 orders/sec threshold and static-IP requirements ([NSE/INVG/67858, 2025-05-05](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Anyone worrying about OPS, static-IP mapping or exchange algo registration is running or planning automation. | Monitor keywords: "static IP", "TOPS", "algo ID", "In Review", "market order disabled", "MPP", "registered algo", "vendor empanelment". | Provide a compliance-readiness checklist and invite to an "Algo Cloud design partner" program. Do not imply bypassing registration. |
| 13 | Quantsapp power-user footprint | Quantsapp app, YouTube/webinars, Telegram/social, user testimonials | Quantsapp says it has 100+ options analytics, 17 lakh+ traders, institutions/brokers/HNIs/traders, backtesting, optimizer, order/trade analytics and 1-second interval analytics ([Quantsapp, accessed 2026-06-19](https://www.quantsapp.com/)). | Quantsapp use is a medium signal; paid/pro features plus order/trade analytics and options strategy use are stronger. | Search public posts sharing Quantsapp screenshots: OI, Max Pain, IV, PCR, strategy builder, optimizer, order analytics. | Partner/referral route: sponsor an options-risk workshop; collect explicit opt-ins. No scraping of Quantsapp users. |
| 14 | Sensibull power-user footprint | Zerodha ecosystem, Sensibull web, YouTube, X screenshots | Zerodha's API ecosystem lists Sensibull alongside smallcase, Streak and Quicko ([Zerodha Kite Connect page, accessed 2026-06-19](https://zerodha.com/products/api/)). Sensibull's JS app was not crawlable in this pass. | Sensibull payoff/strategy-builder screenshots indicate options sophistication; verified broker link or paid plan is stronger. | Search X/YouTube for "Sensibull payoff", "strategy builder", "verified P&L", "option strategy screenshot". | Invite to compare execution/risk controls and tax reporting, not to switch for "higher returns." |
| 15 | Streak strategy/backtesting/automation use | Zerodha ecosystem, Streak site, YouTube, public strategy discussions | Zerodha's Kite Connect ecosystem links to Streak ([Zerodha Kite Connect page, accessed 2026-06-19](https://zerodha.com/products/api/)). Streak's site was JS-heavy/unreadable in this pass. | Streak users are systematic, but capital may vary widely. Stronger if they discuss live deployment, alerts, API, slippage or backtest/live divergence. | Search "Streak strategy", "Streak backtest", "Streak live", "Streak algo" and public YouTube comments/forums. | Use education-led outreach: "We are interviewing systematic traders about backtest-to-live gap and broker execution." |
| 16 | Tradetron creator, subscriber or marketplace operator | Tradetron site, ET article, YouTube, X, Telegram | Tradetron says it has 405k+ signups, around 60k algos, around 175k live trades daily and 100+ broker APIs ([Tradetron, accessed 2026-06-19](https://tradetron.tech/)). ET reported NSE empanelled Tradetron as an authorised algo-trading technology provider in Dec 2025 ([Economic Times, 2025-12-03](https://m.economictimes.com/markets/options/nse-empanels-tradetron-a-big-step-in-indias-evolving-algo-trading-landscape/articleshow/125741311.cms)). | Creator plans, live-auto executions, strategy subscribers and broker API use indicate strong automation intent. | Identify public strategy creators, YouTube tutorials, marketplace sellers, and forum complaints about execution/slippage. | Partner route with compliance: no performance rankings; pitch broker-hosted controls, risk reports, algo registration pipeline. |
| 17 | AlgoTest / Quantman / uTrade users | Platform communities, YouTube, webinars, X, Discord/Telegram | AlgoTest site was JS-heavy/unreadable live. Prior Arrow landscape research identified AlgoTest as an options backtest/paper/live platform but marks current retail adaptation unverified. | Options backtest-to-live users are strong Arrow Elite leads if they run real execution or manage subscriber capital. | Search exact platform names with "live execution", "broker", "slippage", "backtest", "option selling", "Telegram". | Invite through platform partnerships or educational webinars, not direct scraping of private groups. |
| 18 | Quant smallcase users/managers | smallcase, Tickertape, public manager pages, LinkedIn, X | smallcase says it has 1 crore+ installs, 1 lakh+ daily orders, SEBI-registered expert-managed portfolios, and labels stock portfolios including "Quality Bluechips - Quant" ([smallcase, accessed 2026-06-19](https://www.smallcase.com/)). | Quant smallcase managers and heavy rebalancers are not necessarily F&O algos, but they understand systematic portfolios and broker workflows. | Track public smallcase manager content, quant-themed portfolios, rebalancing commentary, manager LinkedIn bios. | Approach managers as referral/partnership channels, not as targets for high-risk F&O unless their profile shows derivatives/API use. |
| 19 | Indian-market algo GitHub repos | GitHub, package repos, README links, issues | `deshwalmahesh/NSE-Stock-Scanner` has 320 stars and 202 forks, supports NSE live data, Zerodha Kite, risk management, screening, strategies and backtesting ([GitHub, accessed 2026-06-19](https://github.com/deshwalmahesh/NSE-Stock-Scanner)). `bhanukaranwal/Options-Trading-Bot` describes a modular NSE/BSE options platform with Zerodha Kite paper/live execution ([GitHub, accessed 2026-06-19](https://github.com/bhanukaranwal/Options-Trading-Bot)). | Repo owners/contributors are technical traders; stars/forks show influence. Capital is unverified until they opt in. | GitHub search for `zerodha`, `dhanhq`, `nse`, `banknifty`, `options`, `backtest`, `live execution`, `websocket`, `order placement`. | Open-source-friendly outreach: file no spam issues. Use public email only if provided for collaboration; sponsor examples/SDKs; invite maintainers to developer council. |
| 20 | Broker API SDK authors and issue participants | GitHub, PyPI, npm, TradingQnA, Dhan MadeForTrade | Zerodha lists official SDKs in Python, Java, Node, C#/.NET, Go, Rust, PHP and C++ ([Zerodha Kite Connect, accessed 2026-06-19](https://zerodha.com/products/api/)). | SDK contributors and issue posters can influence many users, even if personal capital is unknown. | Identify maintainers of active wrappers, frequent bug reporters, and users requesting idempotency, WebSocket scale, retries, and order-state fixes. | Offer developer credits, sandbox access, and public documentation feedback channels. |
| 21 | Quant Telegram/Discord community operators | Telegram public groups, Discord invites, YouTube descriptions, platform communities | Quantsapp footer links Telegram/social channels ([Quantsapp, accessed 2026-06-19](https://www.quantsapp.com/)); Zerodha footer links Telegram and TradingQnA ([Zerodha Kite Connect, accessed 2026-06-19](https://zerodha.com/products/api/)). **Unverified:** specific Indian quant Discord communities were not reliably found via live search. | Community admins are distribution nodes; members may include high-value traders, but private group data must not be scraped. | Discover public invite links from YouTube descriptions, GitHub READMEs, platform bios and event pages. Do not collect member lists without consent. | Sponsor AMA sessions with explicit risk/no-advice framing; use opt-in landing page and affiliate disclosures if paid. |
| 22 | Zerodha 60 Day Challenge winners / broker challenge alumni | Zerodha historical pages, blogs, X, YouTube | **Unverified current.** Live search did not retrieve a stable current 60 Day Challenge leaderboard/winner archive. Treat as historical sourcing only if a public winner page/post can be opened and dated. | Past winners may have discipline, but many are stale leads; stronger if they still post trading/tooling content. | Search "Zerodha 60 day challenge winner", "certificate", "profitable 60 days", "Kite challenge". | Avoid "winner" claims unless source is public and dated. Invite to closed trader council. |
| 23 | Trading competition winners | Broker contests, Sensibull/Quantsapp webinars, university quant contests, X | **Unverified live for current Indian broker competitions.** | Winners are influence signals, not capital proof. Option/quant competition winners may be excellent product testers. | Track public contest pages, YouTube prize announcements, LinkedIn certificates, leaderboard screenshots. | Ask for consented beta testing; avoid using contest performance in marketing unless rules allow and compliance approves. |
| 24 | Prop-firm alumni and HFT/quant employees | LinkedIn, GitHub, conference talks, college quant clubs, company career pages | iRage's own site validates a domestic HFT/market-making/stat-arb context ([iRage What We Do](https://irage.in/what_do_we_do.php)). Public prop/HFT employer histories on LinkedIn are useful but were not scraped in this pass. | Prior prop/HFT employment is the strongest sophistication signal, but may not imply personal trading eligibility or interest. | Search LinkedIn manually for past roles: iRage, AlphaGrep, Graviton, Estee, Quadeye, NK Securities, Tower, Futures First, Dolat, Share India, APT, quant developer/trader. | Recruit as advisors, ambassadors or design partners via professional outreach. Do not ask for employer secrets. Use conflict-of-interest and confidentiality declarations. |
| 25 | CA referrals from F&O tax/audit practices | CA LinkedIn, tax YouTube, Quicko/TaxBuddy ecosystems, local CA networks | TOI says F&O profits/losses for FY 2024-25 must be reported as business income and books/tax-audit thresholds can apply ([TOI, 2025-08-19](https://timesofindia.indiatimes.com/business/financial-literacy/taxation/itr-filing-fy-2024-25-how-to-report-fo-income-in-your-income-tax-return-check-details/articleshow/123379622.cms)). ET reported ITR-3 filing enabled for AY 2025-26 for taxpayers with share trading/F&O/business income ([ET, 2025-07-30](https://economictimes.indiatimes.com/wealth/tax/online-itr-3-filing-enabled-income-taxpayers-with-share-trading-unlisted-shares-investment-professional-business-other-incomes-can-now-file-itr-3-online-on-incometax-gov-in/iec/foportal/articleshow/122986882.cms)). | CAs know which clients have high turnover, charges, tax-audit pain and capital, but cannot share personal data without client consent. | Build CA partner list by content footprint: "F&O tax audit", "ITR-3 trading", "turnover calculation", "option trading tax". | Offer CA-ready reports and a client opt-in referral form. Pay/referral terms must be transparent and compliant. |
| 26 | Wealth managers / family-office advisors serving active HNIs | LinkedIn, PMS/AIF ecosystem, True Beacon-like UHNI networks, CA/estate planners | Nikhil Kamath's True Beacon is publicly described as UHNI-focused in press/wiki sources, but Arrow should not infer access to its clients. | Advisors can introduce HNI capital with suitability filters. | Map RIAs, PMS distributors, family-office consultants, and tax advisors who publish derivatives/risk content. | Use introducer agreements, client consent, no assured-return language, and clear conflict disclosure because Arrow/iRage has prop/HFT activity. |
| 27 | Fintwit influencers with serious trader audiences | X, YouTube, Substack, LinkedIn, podcasts | Dhan embeds X testimonials and MadeForTrade/community links in product pages ([Dhan options, accessed 2026-06-19](https://dhan.co/options/)). Public influencer proof must be reviewed account-by-account. | Influencer audience quality matters more than follower count: look for API, options, tax, execution, risk, broker comparisons. | Create a scored creator list: topics, audience comments, paid promotions, SEBI registration status, complaint history, claims made. | Paid partnerships need affiliate labels, no return claims, no advisory unless registered, and compliance-reviewed scripts. |
| 28 | Public broker/API pain posts from serious users | MadeForTrade, Upstox Community, TradingQnA, Reddit, X | Dhan market-order conversion thread had multiple users alleging missed exits/losses and asking for compensation ([MadeForTrade, 2026-03-09](https://madefortrade.in/t/market-orders-automatically-converted-to-limit-order/61603)). Upstox public thread shows static-IP and market-order transition pain ([Upstox Community, 2026-03-31](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). | Pain plus technical specificity is a strong lead signal: order-state, API, static IP, market protection, compensation, slippage. | Monitor public threads and tag by pain category, not person first. | Contribute helpful public explanations. Invite only if the user asks for alternatives or opts into research. |
| 29 | Large active-client or HNI trend articles | Press, broker founder posts, exchange reports | ET reported Dhan FY25 profit and revenue growth in 2026 ([ET, 2026-02-03](https://m.economictimes.com/tech/technology/stockbroker-dhans-profit-jumps-2-5-times-to-rs-408-crore-revenue-up-2-3x/articleshow/127883525.cms)). ET reported Zerodha MTF reached 5% market share in eight months and MTF users' net P&L was positive per Nithin Kamath ([ET, 2025-09-02](https://economictimes.indiatimes.com/markets/stocks/news/zerodhas-mtf-gains-5-market-share-in-8-months-traders-still-in-the-green-nithin-kamath/articleshow/123658267.cms)). | Useful for channel prioritization, not individual targeting. | Track press for products attracting active/HNI users: MTF, API fees, options tools, pro terminals. | Use as category proof in internal planning; avoid targeting individuals mentioned in distress stories. |
| 30 | Exchange/regulatory framework awareness | SEBI, NSE, broker docs | SEBI's Feb 4, 2025 circular defines retail algo framework and black-box/white-box obligations ([SEBI, 2025-02-04](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). NSE's implementation standards set static IP/TOPS mechanics ([NSE/INVG/67858, 2025-05-05](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Traders who ask about this are more serious than generic signal buyers. | Track forum questions citing SEBI/NSE circulars, static IP, auditor cert, registration TATs, black-box. | Offer "bring-your-own-algo registration readiness" for eligible users, clearly separate from broker-registered Arrow strategies. |

## Source Qualification Scoring

Use a two-layer score. Public signals only decide whether to invite. Eligibility must be confirmed privately with consent.

| Score | Public signal | Examples | Action |
|---:|---|---|---|
| 5 | Direct scale proof | Broker-verified P&L Rs 10L+ annual; margin Rs 50L+; charges Rs 1L+; crore ledger; repeated large daily P&L with broker proof | Invite to concierge qualification after opt-in. |
| 4 | Direct frequency proof | Static IP/TOPS/registered algo questions; millisecond timestamp requests; 5,000+ instrument subscriptions; live execution bot repo | Invite to Algo Cloud technical interview. |
| 3 | Tool sophistication | Tradetron creator, Quantsapp/Sensibull/Streak advanced screenshots, GitHub repo owner, public backtest/live bridge | Invite to community/design partner program. |
| 2 | Influencer/channel | CA, wealth manager, quant educator, smallcase manager, Telegram/Discord admin | Approach as referral or content partner with compliance terms. |
| 1 | Generic interest | "Algo trading" bio, small P&L screenshots, course followers, meme/YOLO posts | Nurture through public education only. |

Private qualification after opt-in:

| Dimension | Ask for | Threshold for Elite |
|---|---|---|
| Capital | Self-declared trading capital, margin deployed, collateral composition | Rs 20L+ for HNI active desk; Rs 1cr+ for UHNI concierge |
| Activity | Orders/day, trades/month, instruments, segments | Active F&O/API/MCX user or high-turnover discretionary trader |
| Automation | Self-coded, no-code, vendor, broker API, VPS/static IP | Any live or near-live automation, or intent to subscribe to broker-hosted strategies |
| Pain | Slippage, charges, latency, tax, compliance, support | At least two acute pains Arrow can solve |
| Suitability | Income/net worth, experience, loss capacity, risk acceptance | Must pass product governance; no "growth hack" exceptions |

## Approach Plays by Segment

| Segment | Entry message | Proof object to offer | Conversion step |
|---|---|---|---|
| Verified-P&L pro | "We are researching execution, charges and reporting for high-frequency F&O traders. Would you be open to a confidential cost/execution audit?" | True Cost Meter, latency/order-state ledger, CA packet | Consent form, ledger upload, 30-minute concierge review |
| Option writer with large margin | "We are building an option-seller desk around collateral, hedge risk, slippage and tax reporting." | Margin stress, pledge/cash optimizer, expiry risk cockpit | Invite-only webinar, then suitability call |
| API/scalper | "We are interviewing API traders about static IP, rate limits, timestamps, postbacks and broker-side observability." | API sandbox, order lifecycle trace, kill switch | Developer council and beta API key |
| Tradetron/Streak/AlgoTest user | "We are studying backtest-to-live gaps and broker registration friction under the 2025 framework." | Registration-readiness checklist, live-shadow mode | Strategy inventory interview |
| Prop/HFT alumni | "We need external reviewers for broker-hosted algo controls, not trade secrets." | Architecture review panel, conflict controls | Advisor/design-partner NDA |
| CA/tax advisor | "We are creating CA-ready F&O reports for high-turnover clients." | Sample tax packet, turnover calculation, charge ledger | Opt-in referral program |
| Wealth/family-office advisor | "We are building a broker-hosted automated strategy tier with risk controls, capacity limits and no return claims." | Governance memo, conflict policy, RA/strategy dossier outline | Advisor roundtable |

## DPDP Act and Outreach Guardrails

Public footprints are not a free pass to build shadow profiles. Treat every signal as a pointer to a public page, not as permission to process a person's data indefinitely.

| Risk | Practical rule for Arrow |
|---|---|
| Personal data processing | Store only minimal lead data: public URL, handle, signal category, date accessed, and reviewer note. Do not store sensitive inferences like income, net worth, caste/religion, health, family, or political views. |
| Purpose limitation | Use public signals only for "invitation to product research/Elite qualification." Do not reuse for unrelated campaigns. |
| Consent | Before DM/email/phone outreach beyond a public reply, get platform-permitted contact basis or explicit opt-in. For referrals, require the client to opt in before the CA/wealth manager shares details. |
| Notice | Opt-in forms must state Arrow/iRage entity, purpose, data categories, retention, withdrawal route, grievance contact and whether data will be shared with group entities or vendors. |
| Data minimization | Do not ask for PAN, contract notes, ledger, net worth proof, broker exports or screenshots until the user has opted in and understands why. |
| Retention | Keep unqualified public-signal leads for a short window, for example 90-180 days, then delete unless they opt in. |
| Children's data | Do not target minors or student communities with leveraged F&O/algo invitations. |
| Automated profiling | Avoid automated "wealth score" decisions that materially affect users. Use human review and private suitability checks. |
| Breach/security | Treat P&L screenshots, contract notes and ledgers as confidential financial data with restricted access and audit logs. |

Sources for legal backdrop: DPDP Act overview and commencement details are summarized in public legal references ([DPDP Act, 2023 overview](https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Act%2C_2023)); press reports say DPDP Rules 2025 operationalized the framework in November 2025 ([TOI, 2025-11-17](https://timesofindia.indiatimes.com/technology/tech-news/indias-first-full-fledged-privacy-law-goes-live-what-dpdp-rules-2025-mean-for-your-daily-apps/articleshow/125379900.cms)). Confirm exact current obligations with counsel before launch.

## SEBI, Exchange and Advertising Constraints

| Constraint | Source | GTM implication |
|---|---|---|
| No past/expected return claims for broker algo services | SEBI's 2022 restriction was circulated through NSE/COMP/53555 and summarized in existing Arrow regulatory research. | No "top performing strategy", no backtested return cards, no creator rankings by returns, no P&L screenshots as acquisition bait. |
| Broker is principal for retail algo access | SEBI Feb 4, 2025 circular ([SEBI](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)) | Arrow cannot say "vendor is responsible." Broker owns onboarding, tagging, monitoring, complaints and controls. |
| Black-box algo provider must be RA and maintain research reports | SEBI Feb 4, 2025 circular | Arrow Elite black-box strategies need RA dossiers, exchange confirmation and fresh registration on logic changes. |
| Static IP/TOPS/registration controls | NSE/INVG/67858 ([NSE PDF](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)) | Outreach cannot imply bypassing static IP, TOPS, algo-ID or registration. Position Algo Cloud as compliance-absorbing, not compliance-evading. |
| F&O risk disclosure | SEBI-mandated derivative disclosures are visible in broker footers such as iRage ([iRage site](https://irage.in/what_do_we_do.php)) | Every Elite funnel must carry F&O loss risk, no assurance of profit, and loss-capacity/suitability checks. |
| Influencer/affiliate risk | SEBI has tightened stance on regulated entities associating with finfluencers; exact current circular text should be verified by counsel before paid campaigns. | Use registered educators where advice is involved; label paid partnerships; compliance-review scripts; ban P&L bait, assured-return, and signal-selling language. |

## Overall GTM Motion

### 1. Concierge, invite-only Elite qualification

Arrow Elite should feel like a controlled desk, not a mass SaaS subscription.

Funnel:

1. Public signal detected.
2. Human reviewer classifies signal: capital, frequency, tooling, influence, referral.
3. Public-safe first touch or warm introduction.
4. Opt-in form with DPDP notice.
5. Suitability and loss-capacity qualification.
6. Execution/cost/risk audit call.
7. Trial in paper/live-shadow or limited-capital mode.
8. Elite onboarding with hard risk caps, named support, and strategy governance.

### 2. Community as trust engine

Build a public Arrow Elite Council with disclosed members only after consent. Content should be about controls:

- order-state timelines,
- latency measurement,
- static-IP readiness,
- tax/CA packets,
- option-seller margin,
- slippage analysis,
- exchange algo registration,
- kill switches,
- incident RCAs.

Avoid:

- P&L contests,
- "top trader" return rankings,
- copy-trading hype,
- signal rooms,
- screenshots of client profits,
- "HFT alpha for retail" claims.

### 3. Referral channels

| Channel | Why it works | Offer |
|---|---|---|
| CA/tax advisors | They see high-turnover F&O pain and tax-audit clients. | CA packet, turnover report, contract-note reconciliation, client opt-in referral. |
| Wealth/family-office advisors | They know capital but need controls and trust. | Governance memo, conflict policy, capacity controls, withdrawal SLA. |
| Quant educators | They influence API/backtest users. | Compliance-safe workshops, sandbox, no-return-claim examples. |
| Platform vendors | Tradetron/AlgoTest/Streak-like users need broker execution and registration clarity. | Broker-hosted runtime, registration pipeline, risk dashboards. |
| Prop/HFT alumni | They validate the seriousness of controls. | Advisor council, architecture review, hiring/referral network. |

### 4. Arrow retail-base funnel-up

Arrow's existing or future retail base should create Elite leads through first-party behavior, not third-party scraping.

| Retail behavior inside Arrow | Upgrade trigger | Elite offer |
|---|---|---|
| F&O turnover above threshold | Charges, tax and risk dashboard pain | Pro true-cost audit and CA packet |
| Margin/collateral above Rs 20L | Pledge/cash optimization | Option-seller concierge |
| API key created and order APIs used | Static IP, rate limits, postbacks | Algo Cloud technical beta |
| Repeated basket/iceberg/expiry trades | Legging and slippage risk | Expiry cockpit and execution audit |
| High support severity during market hours | Needs named escalation | Elite support desk |
| Multiple accounts/family/HUF/company | Reporting and permissioning | Family/pro-desk workspace |
| Strategy tags/journal used heavily | Systematic behavior | Broker-hosted strategy consultation |

The retail-to-Elite funnel should be permissioned:

- show in-product "You may qualify for Arrow Elite" only when thresholds are met;
- explain why: high activity, API use, margin, tax complexity;
- ask the user to request a call;
- never expose hidden wealth scores to sales teams without consent and policy basis.

## Operating Checklist

| Workstream | Must exist before launch |
|---|---|
| Lead governance | Source URL, date, reviewer, signal type, lawful basis, retention date |
| Outreach policy | Allowed public replies, DM rules, email rules, referral consent rules |
| Compliance copy bank | No-return-claim templates; F&O risk; no-advice disclaimers; RA/broker registration disclosures |
| Suitability | Capital, experience, loss capacity, derivatives activation, risk acceptance |
| Data security | Restricted uploads for P&L/ledger/contract notes; access logs; deletion SLA |
| Creator policy | Affiliate labels, script review, no P&L bait, no signal-selling |
| Product proof | Latency ledger, order audit, true-cost report, tax packet, strategy risk dossier |
| Conflict controls | iRage/Arrow prop-client information barriers, capacity policy, client-prop conflict disclosures |

## Source Index

| Source | Date / accessed | Used for |
|---|---|---|
| [MadeForTrade home](https://madefortrade.in/) | Accessed 2026-06-19; homepage topics dated 2026-06-18 | Dhan community, Super Traders positioning, API/algo categories |
| [Dhan options page](https://dhan.co/options/) | Accessed 2026-06-19 | Dhan pro options features, MadeForTrade link, embedded X testimonials |
| [DhanHQ API docs](https://dhanhq.co/docs/v2/) | Accessed 2026-06-19 | API signal, DhanHQ source |
| [MadeForTrade millisecond timestamp thread](https://madefortrade.in/t/why-is-there-no-millisecond-timestamp-in-the-order-api/90002) | 2026-05-23 | Low-latency/API power-user signal |
| [MadeForTrade market-order conversion thread](https://madefortrade.in/t/market-orders-automatically-converted-to-limit-order/61603) | 2026-03-09 | Execution pain signal |
| [Upstox API regulatory changes thread](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874) | 2026-03-31 | Static IP, market-order, TOPS transition pain |
| [Zerodha Kite Connect](https://zerodha.com/products/api/) | Accessed 2026-06-19 | API ecosystem, Sensibull/smallcase/Streak links, SDKs, API scale claims |
| [Quantsapp](https://www.quantsapp.com/) | Accessed 2026-06-19 | Options analytics, 17 lakh+ trader claim, tools, Telegram/social |
| [Tradetron](https://tradetron.tech/) | Accessed 2026-06-19 | Algo marketplace, signups/algos/live trades/pricing |
| [ET: NSE empanels Tradetron](https://m.economictimes.com/markets/options/nse-empanels-tradetron-a-big-step-in-indias-evolving-algo-trading-landscape/articleshow/125741311.cms) | 2025-12-03 | Tradetron regulatory/status example |
| [smallcase](https://www.smallcase.com/) | Accessed 2026-06-19 | Quant/model portfolios, daily orders, installs, SEBI/RBI regulated products |
| [GitHub: NSE-Stock-Scanner](https://github.com/deshwalmahesh/NSE-Stock-Scanner) | Accessed 2026-06-19 | Indian-market open-source algo/screener repo |
| [GitHub: Options-Trading-Bot](https://github.com/bhanukaranwal/Options-Trading-Bot) | Accessed 2026-06-19 | NSE/BSE options bot with Zerodha Kite |
| [GitHub: nifty-strategy-backtest](https://github.com/khanadnan22/nifty-strategy-backtest) | Accessed 2026-06-19 | Zerodha Kite Nifty backtest repo |
| [iRage What We Do](https://irage.in/what_do_we_do.php) | Accessed 2026-06-19 | HFT/market-making/stat-arb and low-latency context |
| [TOI: NSE colocation settlement](https://timesofindia.indiatimes.com/business/india-business/nse-ipo-moves-closer-with-1800-crore-settlement-approved-by-sebi/articleshow/130456928.cms) | 2026-04-23 | Colocation/dark-fibre public context |
| [SEBI retail algo circular](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html) | 2025-02-04 | Retail algo framework, broker principal, black-box/RA |
| [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf) | 2025-05-05 | Static IP, TOPS, retail algo implementation standards |
| [ET: Zerodha withdrawal dispute](https://m.economictimes.com/news/new-updates/hi-dr-nithin-kamath-responds-to-mumbai-doctors-claim-about-the-zerodha-scam/articleshow/125074689.cms) | 2025-11-04 | Crore-scale ledger/withdrawal public signal |
| [ET: Dhan profit/revenue](https://m.economictimes.com/tech/technology/stockbroker-dhans-profit-jumps-2-5-times-to-rs-408-crore-revenue-up-2-3x/articleshow/127883525.cms) | 2026-02-03 | Dhan traction context |
| [ET: Zerodha MTF share](https://economictimes.indiatimes.com/markets/stocks/news/zerodhas-mtf-gains-5-market-share-in-8-months-traders-still-in-the-green-nithin-kamath/articleshow/123658267.cms) | 2025-09-02 | MTF traction and margin-user signal |
| [TOI: F&O tax reporting](https://timesofindia.indiatimes.com/business/financial-literacy/taxation/itr-filing-fy-2024-25-how-to-report-fo-income-in-your-income-tax-return-check-details/articleshow/123379622.cms) | 2025-08-19 | CA/F&O tax referral channel |
| [ET: ITR-3 enabled](https://economictimes.indiatimes.com/wealth/tax/online-itr-3-filing-enabled-income-taxpayers-with-share-trading-unlisted-shares-investment-professional-business-other-incomes-can-now-file-itr-3-online-on-incometax-gov-in/iec/foportal/articleshow/122986882.cms) | 2025-07-30 | F&O/business-income tax workflow |
| [TOI: DPDP Rules operationalized](https://timesofindia.indiatimes.com/technology/tech-news/indias-first-full-fledged-privacy-law-goes-live-what-dpdp-rules-2025-mean-for-your-daily-apps/articleshow/125379900.cms) | 2025-11-17 | DPDP operational backdrop |
| [DPDP Act overview](https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Act%2C_2023) | Accessed 2026-06-19 | High-level DPDP Act background; confirm with counsel |
| Local `scrape/out/reddit-search.json` | Prior scrape, 2026-06-12; unverified live | Reddit P&L, high-charges, crore/large-capital examples where live Reddit blocked |

