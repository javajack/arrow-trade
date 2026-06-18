# Arrow Elite (Algo Cloud): Competitive Landscape and Pricing Benchmarks

Research date: 2026-06-19  
Scope: India domestic markets only: NSE, BSE and MCX. This note is for Arrow Trade / iRage product strategy. It is not legal, investment, tax or compliance advice. Items marked **Unverified** were not confirmed from a current primary public source in this pass.

## Executive readout

Arrow Elite does not have a clean public like-for-like competitor in India. The closest public substitutes sell one of four pieces: options analytics, no-code strategy building, backtesting/paper-to-live tooling, or broker APIs. None publicly combines all of the following in one domestic broker product: iRage-derived strategy IP, broker/provider pre-registration, broker-native execution in the client's own account, strategy capacity governance, and HNI/UHNI white-glove service.

The market price anchors are much lower than Arrow Elite's likely value proposition:

| Anchor type | Public price band observed | Why it matters |
|---|---:|---|
| Retail broker API | Free to Rs. 500/month. Zerodha Personal API is free and Connect is Rs. 500/month ([Zerodha API](https://zerodha.com/products/api/)); DhanHQ markets APIs for free via Dhan pricing copy ([Dhan pricing](https://dhan.co/pricing/)); m.Stock has publicly advertised zero API/setup/recurring/data charges and Rs. 10/order in prior Arrow research from its page, but current crawl hit a bot challenge, so mark **Unverified live** ([m.Stock Trading API](https://www.mstock.com/trading-api)). | API access alone cannot justify premium pricing. |
| Broker brokerage | Most discount brokers anchor at Rs. 20/order or less: Zerodha Rs. 20 or 0.03% intraday/F&O, options Rs. 20/order ([Zerodha charges](https://zerodha.com/charges/)); Dhan flat Rs. 20 intraday/F&O from page metadata and text ([Dhan pricing](https://dhan.co/pricing/)); Upstox up to Rs. 20/order, with Plus up to Rs. 30/order and priority features ([Upstox pricing](https://upstox.com/pricing/)); Groww Rs. 20 or 0.1%, minimum Rs. 5 ([Groww pricing](https://groww.in/pricing)). | Premium brokerage must be tied to execution, service, risk and reporting, not just lower brokerage. |
| No-code/strategy platform | Free to around Rs. 9,000/month. Tradetron public plans: Free Rs. 0, Starter Rs. 300, Retail Rs. 1,200, Retail+ Rs. 2,500, Creator Rs. 5,000, Creator+ Rs. 9,000/month ([Tradetron](https://tradetron.tech/)). AlgoTest JS shows Backtest Rs. 599/7 days and Rs. 1,499/month, ClickTrade Rs. 999/month to Rs. 4,999/year, Signals Rs. 1,499/month, RA Algo Rs. 1,500/month, static-IP/VEE Rs. 849/month or Rs. 1,999/3 months ([AlgoTest pricing page](https://www.algotest.in/pricing)). | This is the visible ceiling for self-serve retail algo tooling, not for broker-run strategy IP. |
| Options analytics | Pricing often not crawlable or login/app gated. Sensibull pricing page is JS shell only in this pass ([Sensibull pricing](https://web.sensibull.com/pricing)); Quantsapp public page and app bundle did not expose a reliable price table in crawlable text ([Quantsapp](https://www.quantsapp.com/pricing)). | Treat as adjacent "decision support", not a direct strategy-execution benchmark. |
| VPS/static IP | AWS Lightsail Linux public IPv4 bundles start at USD 5/month and include static IP in plans ([AWS Lightsail pricing](https://aws.amazon.com/lightsail/pricing/)); DigitalOcean Droplets are a global VPS anchor, but exact page extraction was JS-heavy in this pass ([DigitalOcean Droplets](https://www.digitalocean.com/pricing/droplets)). | Static IP and managed runtime are real hidden costs that Arrow can absorb. |
| Exchange/registration ops | NSE retail algo standards permit brokers to recover API service/subscription charges and exchange algo-registration charges, but the exact retail algo registration fee schedule was not found publicly in this pass ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Arrow should price an "ops/compliance layer" separately or bundle it transparently. |

The clean pricing thesis is: Arrow Elite should not price against APIs or no-code tools. It should price against the scarce bundle: regulated pre-registered strategy access, managed execution, capacity management, HNI service, and governance. That supports a premium subscription plus brokerage/revenue share, but any return-linked fee, performance claim, or PMS/AIF-like custody/control posture is outside this product's intended model.

## Regulatory baseline that shapes competition

| Rule / constraint | Public source | Impact on competitors and Arrow |
|---|---|---|
| Broker is principal for retail API-algo trading; providers/vendors are broker agents. | SEBI's Feb. 4, 2025 retail algo circular ([SEBI](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Third-party platforms cannot be treated as independent, ungoverned apps for live execution. |
| Static IP, unique API keys, OAuth/2FA, no open APIs, and exchange permission/tagging for registered algos. | SEBI circular and NSE implementation standards ([SEBI PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Broker-native hosting becomes a product advantage because clients do not want to operate static-IP/VPS infrastructure. |
| Registration-free personal algos are only for client self-developed algos within TOPS; broker/vendor algos require exchange permission. | NSE TOPS initially not exceeding 10 orders/sec per exchange/segment ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)); NSE detailed modalities extracted in existing Arrow research ([research/10-algo-regulation.md](research/10-algo-regulation.md)). | Arrow's "pre-registered catalogue" is plausible only if Arrow/iRage files and controls strategy registrations. |
| Black-box algos require RA status and detailed research report per algo. | SEBI Feb. 2025 circular ([SEBI](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | iRage's RA registration is a real differentiator for proprietary/opaque strategies, but it also creates RA governance work. |
| Brokers providing algo services cannot directly or indirectly refer to past or expected returns/performance of strategies. | SEBI Sep. 2, 2022 circular carried by NSE ([NSE/COMP/53555](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf)); NSE reiterated in 2024 ([NSE/COMP/60341](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf)). | Competitor return leaderboards and marketplace performance rankings are compliance-sensitive. Arrow must sell controls, not returns. |

## Competitor and adjacent-player map

### Direct-adjacent retail algo and strategy platforms

| Player | What they sell | Public pricing | Compliance posture visible publicly | Gap vs Arrow Elite | Will a big-ticket trader be satisfied? |
|---|---|---:|---|---|---|
| **Tradetron** | Cloud algo engine, no-code strategy builder, marketplace/social trading, backtesting, paper trading, live-auto execution, 100+ broker APIs, strategy creator/subscriber model ([Tradetron](https://tradetron.tech/)). | Free Rs. 0; Starter Rs. 300; Retail Rs. 1,200; Retail+ Rs. 2,500; Creator Rs. 5,000; Creator+ Rs. 9,000/month ([Tradetron](https://tradetron.tech/)). | Publicly markets marketplace/social trading. ET reported NSE empanelled Tradetron as an authorised algo-trading technology provider in Dec. 2025, but official NSE circular was not retrieved here, so mark official status **Unverified** ([ET report](https://m.economictimes.com/markets/options/nse-empanels-tradetron-a-big-step-in-indias-evolving-algo-trading-landscape/articleshow/125741311.cms)). | Strong marketplace and tooling, but not broker-native custody/execution and not an iRage/IP-backed broker catalogue. Marketplace quality, strategy crowding, and compliance governance are the weak points. | Useful for creators and DIY traders; insufficient for UHNI unless capacity, conflict, execution and support are contractually governed. |
| **AlgoTest** | Options backtesting, forward testing, live execution, signals, ClickTrade, RA algo packages, static-IP/VEE plan; page is JS-rendered but pricing constants are present in its public JS bundle ([AlgoTest pricing](https://www.algotest.in/pricing)). | Backtest: Rs. 599/7 days, Rs. 1,499/month. Signals: Rs. 1,499/month or Rs. 7,499/6 months. ClickTrade: Rs. 999/month, Rs. 2,499/6 months, Rs. 4,999/year. RA Algo: Rs. 1,500/month. VEE/static-IP plan: Rs. 849/month or Rs. 1,999/3 months. | Pricing bundle names explicitly include "RA Algo" and "static_ip"; exact live exchange-registration posture not verified from a primary compliance page. | Good backtest-to-live and options workflow; not broker-native and not a catalogue of broker-pre-registered proprietary strategies in client's own Arrow account. | Strong for HNI DIY options traders; big-ticket users still face slippage, broker dependency, capacity and support gaps. |
| **uTrade Algos** | AI/no-code algo software for Indian markets, AI insights, strategy builder, automated execution, broker integration; public FAQ says uTrade is an NSE and BSE-approved algo vendor ([uTrade Algos](https://www.utradealgos.com/)). | 30-day free trial; structured data says currently free and paid subscription plans will launch soon ([uTrade Algos](https://www.utradealgos.com/)). | Strongest public claim among vendors: "NSE and BSE-approved algo vendor." Exact exchange circular/list item not retrieved; mark official list confirmation **Unverified**. | Institutionally credible vendor, but still a third-party platform rather than Arrow's own broker account, service desk, execution stack and strategy IP. | Could satisfy serious DIY users who want vendor support; UHNI will still want broker-level guarantees, capacity terms and named escalation. |
| **Streak** | Systematic trading/no-code strategy, scanners, backtesting, virtual deployment and live-order workflows; Zerodha lists Streak in Kite Connect ecosystem ([Zerodha API](https://zerodha.com/products/api/)); current Streak page title says "Free Systematic Trading Platform" ([Streak pricing](https://www.streak.tech/pricing)). | Current page did not expose a reliable price table; title/metadata says free systematic trading. Older paid-plan claims should be treated **Unverified**. | Current exchange empanelment and post-2025 live execution posture not verified from public crawl. | Friendly no-code UX, but no visible broker-pre-registered HFT-derived strategy catalogue and no HNI white-glove brokerage. | Good for non-coders; not enough for crores-scale capital without execution, risk and support contracts. |
| **Quantman** | Options strategy backtesting/automation platform; relevant as no-code/options automation peer. | Current pricing page not found in this pass; mark **Unverified** ([Quantman](https://quantman.in/)). | Current exchange empanelment/registration posture not verified. | Similar to AlgoTest/Streak category: tooling rather than broker-owned registered strategy IP. | Useful for DIY strategy construction; not a full managed broker algo cloud. |

### Options analytics and discretionary decision-support products

| Player | What they sell | Public pricing | Compliance posture visible publicly | Gap vs Arrow Elite | Big-ticket fit |
|---|---|---:|---|---|---|
| **Sensibull** | Options analysis, option chain, strategy builder, virtual trade, broker-integrated options tooling. | Pricing page loaded as JS shell only; exact current pricing **Unverified** ([Sensibull pricing](https://web.sensibull.com/pricing)). Zerodha charges page separately lists Tickertape optional paid tiers, but not Sensibull ([Zerodha charges](https://zerodha.com/charges/)). | Analytics/decision support, not primarily a live black-box algo marketplace in public material reviewed. | Helps traders decide, but does not take over pre-registered strategy execution and client-specific capacity/risk governance. | Big-ticket discretionary option traders may use it, but it does not remove execution, infra, compliance or service pain. |
| **Quantsapp** | Options analytics platform focused on options analytics, learning and advisory; public metadata says "Options Analytics App" ([Quantsapp](https://www.quantsapp.com/pricing)). | Current public page/app bundle did not expose reliable crawlable price table; mark **Unverified**. | Advisory/analytics posture; exact current RA/RIA status and subscription disclosures not verified in this pass. | Deep analytics, not broker-native strategy execution in Arrow account. | Useful as analytics add-on, not a substitute for broker-run Algo Cloud. |

### Broker API and premium-brokerage substitutes

| Player | What they sell | Public price points | Compliance posture visible publicly | Gap vs Arrow Elite | Big-ticket fit |
|---|---|---:|---|---|---|
| **Zerodha Kite Connect** | Trading/investment HTTP APIs, order/GTT/alerts/margins/portfolio APIs, WebSocket and historical data, SDKs; positions API as "manage and automate trading strategies" ([Zerodha API](https://zerodha.com/products/api/)). | Personal API free; Connect Rs. 500/month for full APIs with realtime WebSocket and historical candles ([Zerodha API](https://zerodha.com/products/api/)). Brokerage: equity delivery Rs. 0, intraday/F&O Rs. 20 or 0.03%, options flat Rs. 20 ([Zerodha charges](https://zerodha.com/charges/)). | Rate limits: order placement 10 req/sec, 400 orders/min and 5,000 orders/day; max 25 modifications/order ([Kite API docs](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)). Public static-IP/algo registration UI not verified here. | Excellent API ecosystem, but no proprietary pre-registered strategy catalogue or white-glove HNI execution service. | Strong for developers; crores-scale users still need managed strategy ops, risk reporting, incident support and capacity governance. |
| **Dhan / DhanHQ** | Free trading/data APIs, option chain, full-depth data, order slicing, trader controls, Dhan products for Super Traders ([DhanHQ docs](https://dhanhq.co/docs/v2/), [Dhan pricing](https://dhan.co/pricing/)). | API marketed free; brokerage flat Rs. 20 for intraday/F&O from public page metadata/text ([Dhan pricing](https://dhan.co/pricing/)). | DhanHQ docs require static IP whitelisting for order placement/modification/cancellation and expose `algoId` in order book ([Dhan orders](https://dhanhq.co/docs/v2/orders/)). Rate limits extracted in prior Arrow research: order APIs 10/sec, 250/min, 1,000/hr, 7,000/day; 25 modifications/order ([research/11-algo-platforms-practices.md](research/11-algo-platforms-practices.md)). | Developer-first broker, not strategy-IP provider. | Very attractive to pro traders on cost/tools; Arrow must beat Dhan on strategy access, execution governance and named service. |
| **Upstox API / Algoverse** | Developer APIs, Algoverse/algo community, trading APIs and broker products. | Pricing page anchors at Rs. 0 AMC first year, Rs. 0 brokerage on MF/IPOs, max Rs. 20/order; Plus has priority/VIP features and up to Rs. 30/order ([Upstox pricing](https://upstox.com/pricing/)). | Developer docs split "Regular Algos" at 10/sec and "SEBI-Registered Algos" at 50/sec ([Upstox rate limits](https://upstox.com/developer/api-documentation/rate-limiting/)); community announced static IP, algo registration above 10 OPS, market-order restrictions and rollout friction ([Upstox community](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). | Compliance-visible API broker; no public iRage-like strategy catalogue. | Good for API users who can manage infra; less satisfying for UHNI wanting institutional service and governance. |
| **ICICI Direct Breeze** | Bank-broker API for NSE equities/F&O, live/historical data, order APIs, option chain, GTT and streams ([ICICI Breeze docs](https://api.icicidirect.com/breezeapi/documents/index.html)). | Public docs show 100 API calls/min and 5,000/day; current subscription charges not found. | Regulatory changes section: orders only from registered static IP, primary/secondary IP update once per week, one API key for unregistered users, combined 10 OPS, market orders prohibited, Margin/Option Plus order placement/modification/cancellation prohibited ([ICICI Breeze docs](https://api.icicidirect.com/breezeapi/documents/index.html)). | High compliance clarity, but less broad exchange coverage and no proprietary strategy cloud. | Bank trust helps; active algo users may find constraints and coverage limiting. |
| **FYERS API** | Free trading/data APIs, SDKs, app permissions; markets up to 1 lakh requests/day and 7 ms order placement ([FYERS API](https://fyers.in/products/api)). | API page says free trading APIs; exact post-framework API pricing not otherwise found. | Static-IP/algo-ID flow not visible in crawlable public page; mark **Unverified**. | Free/fast API story, no HNI managed strategy layer. | Attractive for DIY scalpers; Arrow must be honest where it wins: broker-managed execution and strategy access, not just API speed. |
| **m.Stock** | API product plus low-cost brokerage. | Prior Arrow research from public page captured Rs. 0 setup/API/data charges, no subscription, Rs. 10/order and 10 orders/sec; current live crawl hit bot challenge, so **Unverified live** ([m.Stock Trading API](https://www.mstock.com/trading-api), [research/11-algo-platforms-practices.md](research/11-algo-platforms-practices.md)). | Static-IP/registered-algo flow not verified. | Aggressive commodity API/brokerage price anchor. | Price-sensitive algo users may try it; UHNI satisfaction depends on reliability/support. |

### Quant smallcases, quant PMS and non-goal references

These are not the target model because Arrow Elite should not be PMS/AIF and clients keep custody/control in their own trading accounts. They are useful as context for quant-led wealth products and minimum-ticket expectations.

| Player / category | What they sell | Pricing / ticket | Compliance posture | Why it is a non-goal but useful reference |
|---|---|---:|---|---|
| **smallcase / quant smallcases** | Researcher-curated equity baskets and thematic/factor portfolios through broker-linked smallcase execution; smallcase publisher ecosystem includes many managers ([smallcase discover](https://www.smallcase.com/discover/all)). | Per-smallcase subscription varies; Wright Research/smallcase pricing not reliably extracted here. Zerodha charges page lists smallcase transaction fee: Buy & Invest More Rs. 100 and SIP Rs. 10 ([Zerodha charges](https://zerodha.com/charges/)). | Securities research/portfolio basket model, not live intraday algo execution. | Shows users pay for curated quant ideas while keeping broker custody, but it is long-only/basket oriented and not F&O/HFT strategy execution. |
| **Wright Research** | Quant-led portfolios, equity smallcases, mutual funds, PMS and algo strategies; site advertises PMS for Rs. 50 lakh+ ([Wright Research](https://wrightresearch.in/pricing)). | PMS ticket Rs. 50 lakh+ visible in site text; exact smallcase/subscription fees not extracted. | Site shows live performance/disclosure language; PMS is a regulated portfolio-management product, outside Arrow Elite's non-PMS model. | Useful HNI price/ticket anchor: Rs. 50 lakh is accepted as institutional-ish portfolio entry, but Arrow should not inherit PMS custody/discretion model. |
| **Quant PMS/AIF managers** | Discretionary portfolio management, model portfolios, AIF strategies, often high minimums. | PMS regulatory minimum typically Rs. 50 lakh; exact manager fees vary and were not benchmarked here. | PMS/AIF regulated products with manager discretion/custody/reporting rules. | Reference for HNI willingness to pay, not product design. Arrow must remain broker strategy facility, not pooled/discretionary asset management. |

### Prop-as-a-service / prop firms and institutional vendors

| Category / player | What they offer | Public pricing | Compliance posture | Gap vs Arrow Elite |
|---|---|---:|---|---|
| **Prop firms / funded-trader challenges** | Evaluation or capital-access model where trader trades firm/virtual capital under rules. India-specific, exchange-compliant client-owned-account examples were not verified. | **Unverified** for India domestic markets in this pass. | Not a broker-run client-owned NSE/BSE/MCX account model; often global/CFD/futures challenge model. | Adjacent only. Big-ticket Indian traders who want custody/control will not accept it as substitute. |
| **Institutional OMS/algo vendors: Greeksoft, Symphony/Presto, ODIN/63 moons, TradeLab** | OMS, low-latency trading stack, exchange connectivity, broker/institutional infrastructure, strategy execution engines. | Enterprise/demo pricing; not public self-serve. Greeksoft markets low-latency/HFT, risk tools and co-location/managed IT services ([Greeksoft](https://greeksoft.co.in/)). | Closer to exchange-approved institutional infra, but retail distribution still needs broker-principal controls, static IP/registration/RA obligations. | They can power broker technology; they do not by themselves provide an Arrow-branded strategy catalogue in the client's own broker account. |
| **Ready-made strategy marketplaces** | Tradetron is the clearest public strategy marketplace; uTrade markets pre-built strategies and strategy builder; some broker partner ecosystems list AlgoTest, Quantman, Tradetron, Algomojo, Stratzy, etc. | Tradetron Rs. 0-Rs. 9,000/month; others often free/trial/login-gated. | Highest compliance risk because public listings, ratings and performance references can trigger SEBI 2022 restrictions. | Arrow can win by avoiding open bazaar dynamics: curated, capped, registered, serviced and conflict-governed strategies only. |

## Pricing benchmark table

| Benchmark | Public price point | What it includes | Source | Arrow pricing lesson |
|---|---:|---|---|---|
| Zerodha Kite Connect Personal | Free | Order/GTT/alerts/margins/portfolio APIs without full data suite | [Zerodha API](https://zerodha.com/products/api/) | Do not charge premium for basic order APIs. |
| Zerodha Kite Connect | Rs. 500/month | Full API suite with realtime WebSocket and historical candle data | [Zerodha API](https://zerodha.com/products/api/) | Paid API/data tier ceiling for retail self-build is low. |
| Kite order limits | 10 order req/sec, 400 orders/min, 5,000 orders/day, 25 modifications/order | API rate/risk limits | [Kite docs](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit) | Arrow managed strategies need published rate/capacity policy. |
| Zerodha brokerage | Rs. 0 delivery; intraday/F&O Rs. 20 or 0.03%; options Rs. 20/order | Discount-broker price anchor | [Zerodha charges](https://zerodha.com/charges/) | Premium service must justify any higher effective cost. |
| DhanHQ APIs | Free | Trading/data APIs, option chain, full-depth data, orders and controls | [Dhan pricing](https://dhan.co/pricing/), [DhanHQ](https://dhanhq.co/docs/v2/) | Free API is table stakes for challenger brokers. |
| Dhan static IP / algo ID | Static IP required for order APIs; `algoId` visible in order book | Compliance implementation evidence | [Dhan orders](https://dhanhq.co/docs/v2/orders/) | Arrow should expose algo ID and audit logs cleanly. |
| Upstox brokerage | Max Rs. 20/order; Plus up to Rs. 30/order | Discount brokerage plus optional VIP features | [Upstox pricing](https://upstox.com/pricing/) | Premium broker plan can exist, but must include priority/service benefits. |
| Upstox algo rate limits | Regular algos 10/sec; SEBI-registered algos 50/sec | Public split between registered and regular algos | [Upstox rate limits](https://upstox.com/developer/api-documentation/rate-limiting/) | Registration can unlock higher operational limits, but not return claims. |
| ICICI Breeze API | 100 calls/min, 5,000/day; charges not found | Bank broker API with regulatory rules | [ICICI Breeze](https://api.icicidirect.com/breezeapi/documents/index.html) | Compliance clarity can be a selling point even when product is constrained. |
| FYERS API | Free; up to 1 lakh requests/day; 7 ms order-placement claim | Developer API marketing | [FYERS API](https://fyers.in/products/api) | Speed claims are common; Arrow should publish measured, auditable latency only. |
| Tradetron Free | Rs. 0 | 10 private strategies, 1 public strategy, limited deployment | [Tradetron](https://tradetron.tech/) | Self-serve algo starts free. |
| Tradetron Starter/Retail/Retail+ | Rs. 300 / Rs. 1,200 / Rs. 2,500 per month | More deployments and execution notifications | [Tradetron](https://tradetron.tech/) | Low-to-mid retail SaaS reference. |
| Tradetron Creator/Creator+ | Rs. 5,000 / Rs. 9,000 per month | Marketplace creator scale, more strategies/deployments | [Tradetron](https://tradetron.tech/) | Upper bound for public retail creator SaaS, not HNI broker-native service. |
| AlgoTest backtest plan | Rs. 599/7 days; Rs. 1,499/month | Unlimited backtesting period bundle | [AlgoTest pricing](https://www.algotest.in/pricing) | Backtesting is a commodity price anchor. |
| AlgoTest ClickTrade | Rs. 999/month; Rs. 2,499/6 months; Rs. 4,999/year | Discretionary/click execution tooling | [AlgoTest pricing](https://www.algotest.in/pricing) | Execution assistance is still low monthly SaaS. |
| AlgoTest Signals / RA Algo | Signals Rs. 1,499/month; RA Algo Rs. 1,500/month | Signal/RA-labelled product bundles | [AlgoTest pricing](https://www.algotest.in/pricing) | RA-labelled algo subscriptions are visibly around Rs. 1,500/month in retail market. |
| AlgoTest VEE/static IP | Rs. 849/month; Rs. 1,999/3 months | Static-IP/VEE plan | [AlgoTest pricing](https://www.algotest.in/pricing) | Managed static IP has a public price anchor below Rs. 1,000/month. |
| uTrade Algos | Free / 30-day free trial; paid plans "coming soon" | AI/no-code algo platform | [uTrade Algos](https://www.utradealgos.com/) | Free trial helps adoption; paid vendor plans may rise with compliance burden. |
| AWS Lightsail Linux public IPv4 | USD 5/month starter bundle; includes static IP in Lightsail plans | VPS with stable public IP for bots | [AWS Lightsail pricing](https://aws.amazon.com/lightsail/pricing/) | Client-managed VPS cost is small, but operational burden is high. |
| NSE retail algo operations | Brokers may charge API service/subscription and recover exchange registration charges; exact fee not public in this pass | Exchange/broker compliance cost | [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf) | Arrow can charge a compliance/registration/hosting fee if disclosed. |

## Arrow's differentiation thesis

| Differentiator | Why it genuinely wins | Evidence / basis | Vulnerability |
|---|---|---|---|
| **iRage HFT/IP lineage** | Retail platforms sell tools; iRage can credibly claim institutional automated trading know-how. iRage says it runs liquidity providing/market-making, arbitrage liquidity-consuming and statistical-arbitrage HFT systems and manages millions of orders/trades daily ([iRage What We Do](https://irage.in/what_do_we_do.php)). | Existing Arrow research verifies iRage-Arrow linkage and broker/RA facts ([research/16-elite-irage-regulatory.md](research/16-elite-irage-regulatory.md)). | Must not imply clients receive core prop/HFT edge or expected returns. Prop-client conflicts need hard information barriers. |
| **Pre-registration / zero client registration burden** | Client avoids self-developed strategy filings, auditor write-ups and T+ delays by subscribing to broker/provider-registered strategies. | SEBI/NSE framework allows broker/provider algos with exchange permission and tagging; client self-developed registration is only the separate high-OPS path ([SEBI](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html), [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Each strategy still needs filing, RA dossier if black-box, versioning, fresh registration on logic change and capacity controls. "100+" can become an ops bottleneck. |
| **Broker-native execution** | Orders run inside Arrow's own broker/risk/audit stack; avoids fragile third-party API-key/VPS chains. | NSE says brokers are principal and require API/static-IP/risk controls ([SEBI](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Broker outages or execution defects become Arrow's direct problem. Need redundancy, status, incident RCA and compensation policy. |
| **Client-owned account, not PMS/AIF** | Solves trust/custody objection: client keeps funds/securities in own broker account and can disable strategies. | Product design constraint from this task; aligned with broker API/algo framework rather than pooled/discretionary management. | Must avoid discretionary portfolio-management optics: no pooled allocation, no guaranteed return, no hidden mandate. |
| **Big-ticket white-glove service** | Discount brokers optimize self-serve tickets/forums; UHNI users need named desk, audit exports, tax packs, incident escalation and strategy review. | Upstox/Dhan community examples in existing Arrow research show support and order-incident pain ([research/17-elite-bigticket-painpoints.md](research/17-elite-bigticket-painpoints.md)). | High-cost service model. Pricing must cover relationship managers, market-hours support, compliance and SRE. |
| **Domestic-only focus** | NSE/BSE/MCX rules, taxes, margins and settlement are India-specific; global prop platforms do not solve this. | Domestic scope of iRage broker documents and NSE/BSE/MCX references in existing research ([research/16-elite-irage-regulatory.md](research/16-elite-irage-regulatory.md)). | Limits TAM and strategy universes. Domestic F&O regulatory scrutiny is high, especially with 91% individual F&O loss backdrop cited in prior research. |

## Where Arrow wins

| Battle | Arrow advantage | What product proof is needed |
|---|---|---|
| Versus APIs | APIs give pipes; Arrow gives governed strategy operation. | Strategy inventory, exchange algo IDs, capacity caps, risk controls, latency/order audit. |
| Versus no-code platforms | No-code asks client to create/select/operate strategies; Arrow absorbs strategy design, registration, hosting and service. | RA dossiers, change-control matrix, suitability checks, kill switches and client-level allocation controls. |
| Versus marketplaces | Marketplaces crowd strategies and often rely on performance discovery; Arrow can curate, cap and retire strategies. | No return leaderboard; publish capacity status, risk class, instrument scope and operational health. |
| Versus PMS/AIF | PMS/AIF may manage money but client cedes discretion/custody/mandate; Arrow keeps execution in client account. | Clear consent, client kill switch, account-level control, no pooling, no custody transfer. |
| Versus prop/funded models | Prop models do not solve client-owned domestic brokerage execution. | Client-owned account, domestic exchange coverage, transparent charges and tax exports. |

## Where Arrow is vulnerable

| Risk | Why it matters | Mitigation |
|---|---|---|
| Return-claim pressure | Big-ticket users will ask "what do these strategies make?" but SEBI 2022 restricts past/expected algo performance references. | Sell risk controls, capacity, operational metrics and client-specific post-trade reporting. Keep backtests inside RA/compliance dossiers, not marketing. |
| Alpha decay and crowding | A strategy that works for Rs. 25 lakh may not work for Rs. 5 crore or 200 subscribers. | Hard capacity ledger per strategy, close-to-new-capital, per-client caps, randomized/sliced execution and periodic decay review. |
| Prop-client conflict | iRage prop/HFT reputation is the differentiator and the conflict. | Information barriers, restricted lists, client-vs-prop sequencing surveillance, conflict disclosures and board oversight. |
| Operational liability | Broker-native execution means Arrow owns outages, rejects, bad state transitions and complaints. | SRE discipline, market-hours bridge, broker/dealer fallback, incident RCA, status page and compensation matrix. |
| Regulatory classification drift | Black-box strategies may look like research/advice; discretionary toggles may look like portfolio management. | RA governance per algo, client controls, suitability, no pooled funds, no assured return and legal review of every activation flow. |
| Pricing disbelief | Competitors are cheap/free; a premium subscription can look expensive without proof. | Price against service/governance and minimum capital, not against APIs. Show tangible inclusions: desk, audit, tax, risk and managed hosting. |

## Capacity and alpha-decay realism

### How marketplaces and copy-style products usually handle capacity

Public retail platforms often emphasize strategy discovery, backtesting, paper/live deployment and marketplace access. Tradetron's public page advertises a social trading marketplace, creator/subscriber model, paper trading and live-auto execution ([Tradetron](https://tradetron.tech/)). uTrade markets pre-built strategies, AI strategy builder and automated execution ([uTrade Algos](https://www.utradealgos.com/)). These products can technically limit deployments by plan, but public pages usually do not disclose hard market-capacity numbers per strategy.

That opacity is the product gap. For HNI/UHNI clients, "strategy available" is not enough. They need to know whether the strategy is open, near capacity, closed to new capital, throttled on high-impact days, or degraded.

### Honest capacity model for Arrow Elite

| Control | Implementation detail |
|---|---|
| Strategy capacity ledger | Maintain internal capacity by exchange/segment/symbol/expiry/time bucket, not only by AUM. Capacity should be defined in max lots, max notional, expected market-depth share, max participation rate and max concurrent accounts. |
| Per-client allocation cap | Each strategy gets a maximum capital/notional/lot cap per client based on liquidity, client risk grade and current aggregate subscriptions. |
| Capacity states | Public client-facing states should be: Open, Limited, Waitlist, Closed to new capital, Reduce-only, Paused, Retired. |
| Fill fairness | If many clients trigger same order, define deterministic allocation/ordering policy: pro-rata, randomized waves, time slicing, or account-specific limits. Avoid privileging higher-fee clients unless explicitly disclosed and compliant. |
| Decay monitoring | Track order-book impact, slippage versus model, reject rate, latency, queue-position proxy, hit ratio after costs, and correlation with aggregate subscribed capital. |
| Kill criteria | Predefine when to pause/retire: slippage breach, liquidity collapse, regulatory change, repeated RMS rejects, model drift, capacity breach, or crowding evidence. |
| No return claims | Capacity reports should discuss liquidity and execution health, not expected returns. Client-specific P&L reporting is account reporting, not marketing. |

### Why an HFT firm would license medium-frequency or decayed-but-still-good strategies

It would be unrealistic for iRage to hand out core latency-arbitrage IP. The plausible product is a ladder of strategies whose edge does not depend on nanosecond exclusivity:

| Strategy type | Why it can be client-facing | Why core HFT stays private |
|---|---|---|
| Execution algos: slicers, TWAP/VWAP, participation, hedged execution | Improves client execution quality and is easier to explain/register as white-box/execution logic. | Core prop edge may depend on queue position and private infrastructure. |
| Medium-frequency options/stat-arb variants | Can tolerate seconds/minutes holding periods and controlled capital; useful to clients if capacity capped. | High-frequency market-making and latency-arb decays immediately when crowded. |
| Risk overlays and hedging bots | Valuable for big-ticket clients without promising alpha. | Prop models may include proprietary fair-value and adverse-selection logic. |
| Decayed prop research | Signals no longer strong enough for prop capital may still be useful as a risk-controlled retail strategy if costs/capacity are honest. | If the edge is still capacity-constrained and high Sharpe for prop, rational firm keeps it internal. |

The honest Arrow claim is not "we give clients our core HFT edge." It is: "iRage's experience in automated markets informs a broker-registered, capacity-capped strategy catalogue and execution/risk system for eligible clients."

## Pricing architecture implications for Arrow Elite

### Public benchmark-based positioning

| Layer | Public market anchor | Arrow recommendation |
|---|---:|---|
| Basic API | Free to Rs. 500/month | Include API access in Elite or keep it free; do not make this the paid story. |
| Static-IP/managed runtime | Around Rs. 849/month on AlgoTest VEE/static-IP; AWS VPS USD 5/month | Bundle managed runtime; charge only if giving strong monitoring/SRE/security. |
| Retail strategy SaaS | Rs. 300-Rs. 9,000/month | Arrow base Elite subscription can exceed this only with explicit service/compliance/strategy inclusions. |
| RA-labelled algo subscription | Around Rs. 1,500/month retail anchor from AlgoTest RA Algo | Per-strategy add-ons can reference this, but proprietary/broker-hosted strategies can command more if capacity-capped and serviced. |
| Premium brokerage | Rs. 20/order is market anchor; Upstox Plus up to Rs. 30/order | Brokerage premium must include named service, desk, incident support, risk reports, tax pack and execution analytics. |
| HNI quant/PMS reference | Wright PMS Rs. 50 lakh+ ticket | Use minimum capital / eligibility threshold rather than PMS-like structure. |

### Possible compliant price shapes, without return claims

| Model | How it would work | Pros | Risks |
|---|---|---|---|
| **Elite membership fee** | Rs. X/month or Rs. X/year for service desk, managed runtime, risk cockpit, tax/audit reports and access to strategy catalogue. | Clean, predictable, not return-linked. | Must be valuable even when strategies are paused. |
| **Per-strategy subscription** | Fixed fee per activated registered strategy, possibly tiered by capacity bucket and support level. | Aligns price with scarce strategy slots. | Needs capacity disclosure; cannot imply return potential. |
| **AUM/capital-tiered platform fee** | Fee based on allocated capital bands, e.g., up to Rs. 25L / 25L-1cr / 1cr+. | Matches service and risk cost. | Must avoid PMS/AIF optics; client keeps control and account ownership. |
| **Infra/compliance pass-through** | Explicit line items for exchange registration fees, audit/certification, managed hosting/VPS/static IP, data feeds where applicable. | Transparent and defensible. | Exact exchange fees need primary confirmation. |
| **Premium brokerage + subscription** | Lower fixed subscription but higher brokerage/desk plan for active users. | Familiar broker economics. | High-turnover incentive conflict; disclose and monitor churn/order-count incentives. |
| **Capacity reservation fee** | Client pays to reserve limited capacity in a strategy, independent of return. | Honest scarcity pricing. | Needs careful wording; no profit expectation. |

Avoid performance fees, profit share, guaranteed monthly payouts, capital protection claims, or "expected return" tiers. Those create PMS/AIF/advisory/mis-selling issues and contradict the intended model.

## Strategic conclusion

Arrow Elite can win if it refuses to compete as "another algo platform." The commodity layers are already cheap: APIs are free/Rs. 500, no-code algo SaaS is free to Rs. 9,000/month, and VPS/static IP can be under Rs. 1,000/month. The premium must come from scarce and regulated things: iRage-informed strategy IP, exchange registration, broker-native execution, capacity discipline, risk governance, client-owned accounts, and real service for large capital.

The product should be positioned as a governed broker-hosted strategy facility, not a strategy marketplace, not PMS/AIF, and not a returns product. The strongest line is:

> Broker-registered automated strategies in the client's own Arrow account, with iRage-informed execution/risk design, capacity caps, transparent charges, conflict disclosures and a named market-hours service desk. No returns are promised or represented.

## Source index

| Source | Used for |
|---|---|
| [SEBI Feb. 4, 2025 retail algo circular](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html) | Retail algo framework, broker principal role, black-box/white-box, RA duties. |
| [SEBI Feb. 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf) | Circular text and implementation detail. |
| [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf) | TOPS, static IP, API subscription/recovery language. |
| [NSE/COMP/53555](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf) | SEBI 2022 algo return/performance claim restrictions. |
| [NSE/COMP/60341](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf) | NSE 2024 reiteration of algo-platform return-claim restrictions. |
| [Tradetron](https://tradetron.tech/) | Marketplace/product claims and public pricing. |
| [AlgoTest pricing](https://www.algotest.in/pricing) | Public JS-extracted pricing for backtest, ClickTrade, signals, RA Algo and static-IP/VEE plans. |
| [uTrade Algos](https://www.utradealgos.com/) | Product, approved-vendor claim, free/current pricing status. |
| [Streak pricing](https://www.streak.tech/pricing) | Current page metadata/title for free systematic trading. |
| [Quantman](https://quantman.in/) | Relevant peer, pricing not verified. |
| [Sensibull pricing](https://web.sensibull.com/pricing) | Options analytics peer, pricing not crawlable. |
| [Quantsapp](https://www.quantsapp.com/pricing) | Options analytics peer, pricing not crawlable. |
| [Zerodha API](https://zerodha.com/products/api/) | Kite Connect offering and pricing. |
| [Kite API rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit) | Order/API limits. |
| [Zerodha charges](https://zerodha.com/charges/) | Brokerage, optional service charges, smallcase fee and API fee. |
| [DhanHQ docs](https://dhanhq.co/docs/v2/) | API product scope. |
| [Dhan orders](https://dhanhq.co/docs/v2/orders/) | Static IP and algo ID evidence. |
| [Dhan pricing](https://dhan.co/pricing/) | Brokerage and free API language. |
| [Upstox pricing](https://upstox.com/pricing/) | Broker pricing and Plus plan details. |
| [Upstox rate limits](https://upstox.com/developer/api-documentation/rate-limiting/) | Regular vs SEBI-registered algo limits. |
| [Upstox community retail-algo rollout](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874) | Static-IP, market-order and rollout friction evidence. |
| [ICICI Breeze API docs](https://api.icicidirect.com/breezeapi/documents/index.html) | Static IP, 10 OPS, market-order ban and API limits. |
| [FYERS API](https://fyers.in/products/api) | Free API, request/day and latency marketing claims. |
| [m.Stock Trading API](https://www.mstock.com/trading-api) | Prior benchmark; current crawl blocked by CAPTCHA. |
| [smallcase discover](https://www.smallcase.com/discover/all) | Quant smallcase ecosystem context. |
| [Wright Research](https://wrightresearch.in/pricing) | PMS Rs. 50 lakh+ and quant portfolio context. |
| [Greeksoft](https://greeksoft.co.in/) | Institutional OMS/algo/low-latency adjacent vendor context. |
| [AWS Lightsail pricing](https://aws.amazon.com/lightsail/pricing/) | VPS/static IP cost anchor. |
| [DigitalOcean Droplets](https://www.digitalocean.com/pricing/droplets) | VPS benchmark; exact current values not extracted. |
| [iRage What We Do](https://irage.in/what_do_we_do.php) | iRage HFT/IP positioning and Arrow linkage. |
| [Existing Arrow algo regulation research](research/10-algo-regulation.md) | NSE detailed modalities extraction and regulatory baseline. |
| [Existing Arrow algo platforms research](research/11-algo-platforms-practices.md) | Prior broker/platform source synthesis. |
| [Existing Arrow iRage regulatory research](research/16-elite-irage-regulatory.md) | iRage broker/RA/Arrow validation. |
| [Existing Arrow big-ticket pain research](research/17-elite-bigticket-painpoints.md) | HNI/UHNI pain evidence and product implications. |
