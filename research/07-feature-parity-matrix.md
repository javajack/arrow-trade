# 07 - Feature Parity Matrix

Research date: 2026-06-11. This matrix synthesizes `01` through `06` into a product decision tool for a new Indian broking platform. Primary wedge: active F&O, derivatives, pro, algo and API-first users. Secondary expansion: long-term investors and first-time investors.

Verdict definitions:

- **Table-stakes parity**: Must match credible incumbents at launch or the product feels incomplete.
- **Parity-plus**: Match the market pattern and add clearer workflow, proof, transparency or integration.
- **Leapfrog**: Build a meaningfully better version because the gap is strategic.
- **Skip-with-reason**: Do not build now; leave to partners, later phases or explicit opt-in.

## Executive Feature Thesis

Arrow should not be "another Rs 20 broker" or a generic investing app. The defensible position is a professional trading and automation broker that makes every cost, risk, order state, outage, tax implication and collateral rupee visible.

The market evidence is consistent across the six research files:

- Active-client growth has softened after F&O curbs, with NSE active clients at 4.56 crore in May 2026 versus 4.92 crore in March 2025; SEBI's October 2024 derivatives measures tightened option premium collection, lot sizes, weekly expiries and expiry-day risk controls ([01-market-landscape](01-market-landscape.md), [SEBI circular](https://www.sebi.gov.in/legal/circulars/oct-2024/measures-to-strengthen-equity-index-derivatives-framework-for-increased-investor-protection-and-market-stability_87208.html)).
- Dhan proves a focused pro-trader wedge can still gain share, while Groww proves simplicity can win first-time investors and bank brokers prove trust still matters ([01-market-landscape](01-market-landscape.md)).
- The biggest unmet need is not one more order type. It is a connected operating system: terminal, API, margin, ledger, support, tax, community and transparent trust center.

## 1. Positioning, Trust and Brand

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| "Honest broker" trust system | Zerodha | Trust is a coherent system: no tips, transparent pricing, founder candor, Varsity, Z-Connect, support escalation and ecosystem credibility ([06-support-trust-brand](06-support-trust-brand.md), [Zerodha Charges](https://zerodha.com/charges), [Z-Connect](https://zerodha.com/z-connect/)). | Recommending Zerodha makes the referrer look prudent. | **Parity-plus**: match transparency, but add inspectable uptime, custody, complaint and order-state proof. |
| "Made for traders" product identity | Dhan | Product surface reads like a trader wishlist: Options Trader, TradingView, DEXT, APIs, Super Orders, Flash Trade, Scalper, Iceberg Plus and no-spam policy ([06-support-trust-brand](06-support-trust-brand.md), [Dhan](https://dhan.co/)). | Traders share feature screenshots and say it was built by people who trade. | **Parity-plus**: own "serious trader operating system", not only feature velocity. |
| Beginner confidence brand | Groww | Low-cognitive-load investing app, strong app ratings, simple help, mutual-fund DNA and broad retail trust ([06-support-trust-brand](06-support-trust-brand.md), [Groww Help](https://groww.in/help)). | "My parents can use it" family referrals. | **Skip-with-reason** for Phase 1; **parity** in Phase 2 through an investor mode, not by diluting pro UX. |
| Bank-grade reassurance | ICICI Direct, HDFC, Kotak, SBI, Axis | Existing bank relationship, RM comfort and branch escalation reduce custody anxiety. | Conservative investors stay because switching feels risky. | **Leapfrog**: create bank-grade custody proof without bank-broker UX density. |
| No RM / no spam / no advice by default | Dhan, Zerodha | Removes fear of sales pressure, tips, churn and data misuse ([06-support-trust-brand](06-support-trust-brand.md), [Dhan](https://dhan.co/)). | "They leave me alone" becomes a trust compliment. | **Table-stakes parity** for pro wedge. Explicit opt-in only for premium support or advisory. |
| Founder/engineering candor | Zerodha, Dhan/Fyers partly | Users trust public explanations of market structure, product tradeoffs and outages. | Founder posts become shareable trust artifacts. | **Parity-plus**: publish engineering/risk notes, but avoid personality dependence. |
| Referral as trust statement | Zerodha | Zerodha said referrals drove up to 50% of new accounts at peak and nearly 30% even without incentives ([06-support-trust-brand](06-support-trust-brand.md), [Zerodha referral program](https://zerodha.com/z-connect/business-updates/zerodhas-referral-program-is-back)). | "My serious trader friend uses this." | **Parity-plus**: product-led referral with fee credits and transparent terms. |
| Mass distribution and brand recall | Angel One, Upstox, Groww | Cricket, celebrities, influencers, app campaigns and regional content reduce demat hesitation ([06-support-trust-brand](06-support-trust-brand.md), [Upstox](https://upstox.com/)). | Familiarity converts low-intent users. | **Skip-with-reason** early. Use targeted trader/community acquisition first; mass media later. |
| Public complaint scoreboard | White-space leapfrog | Complaint data exists in exchange/SEBI flows but no broker owns it as a product. | Traders screenshot proof after bad days. | **Leapfrog**: publish complaints per 10,000 active clients, median resolution, reopen rate, escalation outcomes and compensation decisions. |
| Custody transparency after Karvy | White-space leapfrog | Karvy made "can my broker misuse holdings?" a durable category fear ([06-support-trust-brand](06-support-trust-brand.md)). | Users share an understandable "assets safe" proof screen. | **Leapfrog**: holdings reconciliation, pledge audit, CDSL/NSDL CAS education and discrepancy alerts. |

## 2. Onboarding and Account Readiness

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| 10-minute application promise | Dhan | Dhan says demat account opening takes less than 10 minutes before exchange approval ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Dhan](https://dhan.co/)). | "I opened during lunch and traded the same day." | **Table-stakes parity** with honest readiness states. |
| Fully digital resident KYC | Groww, Zerodha, Upstox, Dhan, Angel | PAN, Aadhaar, bank verification, IPV, eSign and segment selection are baseline. | Fewer handoffs reduce abandonment. | **Table-stakes parity**. |
| F&O-first segment activation | Dhan, Fyers, Zerodha | Traders care about F&O, currency, commodity and MCX readiness, not only demat creation ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md)). | Avoids "segment not active" rage at order time. | **Parity-plus**: ask income proof, segment intent, margin mode and API intent during onboarding. |
| Two-status readiness model | Dhan implied, market gap | Separates "KYC complete" from "exchange/DP/F&O/funds ready." | Reduces confusion after application completion. | **Leapfrog**: readiness dashboard by exchange, DP, segment, bank, DDPI/TPIN, pledge and first-order state. |
| NRI onboarding | Zerodha, bank brokers | Zerodha exposes NRI as a first-class path; banks have relationship advantage ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha NRI](https://zerodha.com/open-account/nri/)). | High-value users ask peers which broker actually works. | **Fast-follow parity-plus**: waitlist at launch if operations are not ready; build clean path in Phase 2. |
| Minor account path | Zerodha, Groww, bank brokers | Dedicated minor account entry points support family acquisition ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha minor](https://zerodha.com/open-account/minor/)). | Parents open where their own reporting works. | **Fast-follow parity** for Phase 2. |
| HUF account path | Zerodha, Groww, bank brokers | HUF support wins affluent families and tax/accounting stickiness ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha HUF](https://zerodha.com/open-account/huf/), [Groww HUF](https://groww.in/open-huf-demat-account)). | Family accountant/referral loop. | **Fast-follow parity-plus** in Phase 2. |
| Assisted fallback for KYC failures | Angel, ICICI, Motilal, IIFL, Geojit, bank brokers | Human help resolves Aadhaar/PAN/bank mismatches. | "They called and fixed it." | **Parity-plus**: high-value exception handling without sales calls. |
| PAN/Aadhaar/bank preflight checks | White-space leapfrog | Most users discover mismatch too late. | Avoids abandoned applications and support tickets. | **Leapfrog**: preflight name, bank, proof and segment eligibility before lengthy KYC. |
| API-first onboarding | DhanHQ, Fyers, Upstox, Kite Connect | Developers can see API products near signup ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [DhanHQ](https://dhanhq.co/), [Fyers API](https://fyers.in/products/api/)). | GitHub repos, YouTube demos and code snippets become acquisition. | **Leapfrog**: sandbox, API key, webhook, SDK and first paper order before live activation. |
| First-trade checklist | Dhan implied, market gap | Converts opened accounts into active accounts. | "The app got me from signup to first basket." | **Leapfrog**: checklist for F&O activation, funds, risk limits, API key, watchlist import, first basket and first report. |

## 3. Money Movement and Ledger

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Weekend instant withdrawal | Zerodha | Published terms: 9 AM-4 PM, all days including weekends, one request/day, Rs 100-Rs 2,00,000, no charges and clear exclusions ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha instant payout](https://support.zerodha.com/category/funds/fund-withdrawal/withdrawal-process/articles/instant-fund-withdrawal)). | "Money came instantly on Sunday" is a high-trust story. | **Table-stakes parity** for trust; exceed limits if possible. |
| Regular payout SLA transparency | Zerodha, Groww, Upstox | Zerodha is clearest about cutoffs and settlement exceptions. | Users forgive settlement; they do not forgive uncertainty. | **Parity-plus**: show exact settlement and payout eligibility per credit. |
| Balance bucket ledger | Zerodha partial | Differentiates cash, unsettled equity sale, unsettled F&O credit, collateral, margin used, withdrawable and instant-withdrawable. | Reduces panic tickets. | **Leapfrog**: live ledger with reason codes and settlement dates. |
| Payment traceability | White-space leapfrog | Payment success but delayed balance is common and under-explained. | Users trust trace IDs more than generic "wait 24 hours." | **Leapfrog**: gateway state, bank reference, UTR, trace ID, reversal SLA and auto-escalation. |
| Margin top-up rescue | Dhan/Fyers/Zerodha by perception, gap in explicit UX | Active traders need funds reflected before order windows close. | Saves positions at 9:14 AM or during volatile moves. | **Leapfrog**: top-up amount linked to pending basket, shortfall and deadline. |
| Large-value funding with virtual account | Bank brokers, Zerodha | Useful for high-ticket traders and UPI limits. | High-value users trust predictable funding. | **Parity-plus**: virtual account, IMPS/NEFT/RTGS auto-reconciliation and status. |
| UPI limits explanation | Market gap | Broker, UPI and bank limits are usually buried. | Avoids failed funding attempts. | **Leapfrog**: show broker limit, UPI limit, bank limit and remaining daily capacity before payment. |
| Payout failure autopilot | White-space leapfrog | Failed instant withdrawal usually becomes user work. | Turns failure into a trust moment. | **Leapfrog**: auto-create regular payout or show retry eligibility and ETA. |
| Quarterly settlement preview | White-space leapfrog | SEBI running account settlement surprises users. | "They warned me before money moved." | **Leapfrog**: preview amount, date, reason and bring-back flow. |
| IPO UPI mandate state tracker | Zerodha, Dhan, Groww, Upstox | IPO demand is hot, but UPI state failures create public anger ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [Zerodha IPO](https://zerodha.com/ipo/), [Dhan IPO](https://dhan.co/ipo/)). | Users invite friends during hot IPOs. | **Parity-plus**: broker, exchange, bank, NPCI and user-action states in one timeline. |

## 4. Trading Terminal, Charting and Order Entry

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| TradingView chart trading | Dhan, Fyers, m.Stock, Paytm Money | Dhan offers chart trading for options, futures, stocks and commodities, 20+ layouts, drag/drop orders, baskets, option chain and live P&L ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Dhan TradingView](https://dhan.co/tradingview/)). | Traders share screen recordings of one-window execution. | **Table-stakes parity** for pro wedge; must feel native, not embedded afterthought. |
| Alternate chart engine choice | Zerodha | Kite's advanced charting and historical reputation reduce switching anxiety ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Zerodha Kite](https://zerodha.com/products/kite/)). | Familiarity retains legacy users. | **Fast-follow parity**; launch with one excellent engine before adding choice. |
| Multi-chart and multi-monitor layouts | Dhan, Fyers | Dhan calls out 20+ layouts; Fyers markets 3-in-1 charts. | Multi-monitor traders share setups. | **Parity-plus**: persistent layouts, detachable panels and shareable templates. |
| Chart-based order placement and drag/drop modification | Dhan, m.Stock, Fyers | Saves seconds and reduces context switching. | Easy to demo in videos. | **Table-stakes parity**. |
| Live P&L on chart | Dhan | Positions and execution impact are visible where decisions happen. | Screenshot-friendly trading flow. | **Parity-plus**: add charge-adjusted and slippage-adjusted P&L overlays. |
| Level 3 / deeper market depth | Zerodha, Fyers | Zerodha advertises 20-depth; Fyers advertises 50-depth ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [FYERS Web/App](https://fyers.in/products/web-and-app/)). | Scalpers discuss fill confidence and depth. | **Table-stakes parity** for liquid F&O; **parity-plus** with liquidity risk flags. |
| Fast universal search | Zerodha | Kite is known for minimal, fast symbol search. | Reduces friction hundreds of times per day. | **Table-stakes parity**. |
| Keyboard command palette | White-space implied | Pro users need symbols, orders, exits, baskets and rollovers without mouse travel. | Power users share shortcuts/layouts. | **Leapfrog**: command palette across terminal, orders, reports and API docs. |
| Pro/simple order ticket modes | Research implication | Beginners need safety; pros need speed. | Avoids alienating either segment. | **Parity-plus**: simple mode for investors, pro mode for F&O; never bury core pro actions. |
| Workspace persistence across devices | Market gap | Traders recreate layouts too often across web/desktop/mobile. | Shared layouts create community loops. | **Leapfrog**: cloud-synced workspaces, templates and import/export. |
| Emergency flatten / reverse / hedge | Dhan/Fyers closest, market gap | Panic actions are critical on expiry and outage days. | "It saved me when things moved." | **Leapfrog**: role-gated, confirmation-tuned, audit-logged emergency actions. |

## 5. Options, Derivatives, Commodity and Risk Tools

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Advanced option chain | Dhan, Fyers, Upstox API, m.Stock | Dhan combines Greeks, OI, volume and order placement; Fyers embeds chain in scalper terminal ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Dhan Options](https://dhan.co/options/)). | The option chain is the trader cockpit. | **Table-stakes parity**. |
| Greeks / OI / IV / PCR analytics | Dhan, Sensibull, Quantsapp, Fyers | Validates directional, volatility and theta risk without leaving broker. | Traders share OI/payoff screenshots. | **Parity-plus**: built into order, basket, journal and API. |
| Flash Trade / strike discovery | Dhan | ATM, highest-OI and most-traded shortcuts reduce strike hunting. | Expiry-day speed clips are shareable. | **Parity-plus**: add liquidity, spread and exit-depth filters. |
| Native strategy builder and payoff | Sensibull/Zerodha, Dhan, Fyers, Quantsapp | Payoff diagrams are inherently shareable. | Strategy screenshots spread. | **Leapfrog**: live payoff with IV sensitivity, exit-one-leg simulation and margin effects inside execution flow. |
| Basket orders with real-time margins | Zerodha, Dhan, m.Stock | Multi-leg F&O users avoid margin surprises ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Zerodha Kite](https://zerodha.com/products/kite/)). | Traders migrate when baskets work cleanly. | **Table-stakes parity**. |
| Rejected-leg scenario preview | White-space leapfrog | Users fear partial multi-leg execution and second-leg rejection. | "No more rejected second leg." | **Leapfrog**: simulate partial fills, margin after each leg and contingency order. |
| Rollover wizard | White-space leapfrog | Retail brokers under-serve carry cost, IV skew, next-expiry liquidity and calendar payoff. | Rollover screenshots and reduced error risk. | **Leapfrog**. |
| Expiry Mode | Dhan/Fyers closest, white-space for full cockpit | ATM ladder, gamma/theta heatmap, freeze-limit warnings, margin stress and emergency flatten focus on the highest-pain day. | "Built for Thursday, not generic investing." | **Leapfrog** and core Phase 1 differentiator. |
| Expiry-day guardrails | White-space leapfrog | SEBI curbs target expiry-day risk; users need premium-at-risk, position limits and exit-depth warnings ([01-market-landscape](01-market-landscape.md)). | Safer trading creates regulator-friendly differentiation. | **Leapfrog**. |
| Holdings-linked hedge simulator | Dhan/Sensibull style, white-space in broker UX | Covered call, protective put, collar and physical-settlement risk tied to holdings ([04-investor-research-ecosystem](04-investor-research-ecosystem.md)). | "The broker showed me how to hedge my portfolio." | **Fast-follow leapfrog** in Phase 2. |
| Commodity dashboard / MCX UX | Dhan, Zerodha, Fyers, Shoonya, m.Stock | Dhan treats commodities as first-class with dashboard, charts and pledge margin ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Dhan commodity](https://dhan.co/commodity/)). | MCX traders refer night-session reliability. | **Parity-plus**: evening status, spread view, delivery warnings and MCX margin calendar. |
| Currency derivatives support | Zerodha, Dhan, Fyers, Shoonya, m.Stock | Important for pro segment but smaller than index options. | Pro users value one broker for all segments. | **Table-stakes parity** if exchange memberships are ready; otherwise explicit roadmap. |
| "Can I exit?" depth warning | White-space leapfrog | Option traders need exit liquidity before entering. | Avoids trapped-position stories. | **Leapfrog**: depth, spread, OI, impact and circuit/liquidity warning. |

## 6. Order Types, Execution and Auditability

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| GTT / forever orders | Zerodha, Dhan, Upstox, Paytm Money, m.Stock | Zerodha GTT remains valid for one year and supports single-trigger/OCO exits for holdings ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Zerodha GTT](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/gtt/articles/what-is-the-good-till-triggered-gtt-feature)). | Long-lived automation creates switching friction. | **Table-stakes parity**. |
| Iceberg / slicing | Zerodha, Dhan | Zerodha supports up to 50 legs; Dhan has API slicing for F&O freeze limits ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Dhan Orders API](https://dhanhq.co/docs/v2/orders/)). | Big-quantity traders avoid manual stress. | **Table-stakes parity** for pro wedge. |
| Bracket / cover orders | Dhan, Fyers, Angel terminal users | Risk-defined intraday control in one ticket. | Intraday traders retain where exits are disciplined. | **Parity-plus**: include trailing logic, margin explanation and failure modes. |
| One-click / scalping mode | Fyers, Dhan, m.Stock | Quick Trade, Flash Trade and Watchlist PRO make speed muscle memory. | "I can enter/exit faster here." | **Parity-plus** with configurable safeguards. |
| Order latency claims | Fyers, Dhan, Zerodha | Fyers claims 7 ms API order placement; Dhan claims fast APIs; Zerodha wins on trust ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [FYERS API](https://fyers.in/products/api)). | Latency claims attract algo users. | **Leapfrog**: do not merely claim; prove with Latency Ledger. |
| Deterministic order-state machine | White-space leapfrog | Current APIs often make state/error semantics painful. | Developers trust idempotent, replayable order flows. | **Leapfrog**: idempotency keys, versioned states, replayable events and audit logs. |
| Latency Ledger | White-space leapfrog | Per-order timestamps for client send, broker ack, OMS, exchange, fill, reject and postback. | "They show exactly where my order spent time." | **Leapfrog** and flagship trust feature. |
| Order Health Center | White-space leapfrog | Combines live status, personal order timeline, broker/exchange incident mapping, kill switch and audit bundle ([03-trading-experience-fno-api](03-trading-experience-fno-api.md)). | Turns angry outage threads into evidence-based support. | **Leapfrog**. |
| Unified audit trail across manual, chart, basket and API orders | Research implication | Disputes and strategy analysis require one truth. | Developers and traders can debug quickly. | **Leapfrog**. |
| RMS explainability | Zerodha Nudge, Dhan API | Zerodha warns on illiquid instruments; Dhan API exposes OMS error code/description/exchange time ([03-trading-experience-fno-api](03-trading-experience-fno-api.md)). | Users forgive rejects when reason is exact. | **Parity-plus**: pre-submit reject prediction plus post-reject exact reason. |

## 7. API, Algo and Developer Platform

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Mature API ecosystem | Zerodha Kite Connect | Battle-tested, SDKs, ecosystem integrations, Personal free and Connect Rs 500/month with WebSocket/historical data ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Kite Connect](https://zerodha.com/products/api/)). | Developers trust stable docs and community answers. | **Parity-plus**: match maturity with more complete lifecycle. |
| Free API access | DhanHQ, Fyers, Shoonya, m.Stock | Removes subscription friction for hobby/pro users ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [DhanHQ docs](https://dhanhq.co/docs/v2/), [FYERS API](https://fyers.in/products/api)). | "Free + fast" spreads in algo groups. | **Table-stakes parity** for personal tier. |
| Clear rate limits and regulatory categories | Upstox, Zerodha, Dhan | Upstox documents regular and SEBI-registered algo limits; Zerodha and Dhan document request limits ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). | Serious algo users need predictable throttles. | **Parity-plus**: user dashboard for live quota, throttle reason and endpoint health. |
| Option-chain API | DhanHQ, Upstox | Systematic options desks need chain, Greeks, IV, OI, expired options and historical data. | API users share schemas and examples. | **Table-stakes parity**. |
| WebSocket with sequence numbers and heartbeat | Zerodha baseline, white-space for stronger semantics | Current feeds exist, but reconciliation is painful. | Developers value provable stream health. | **Leapfrog**: sequence numbers, replay, heartbeat, gap detection and status webhooks. |
| Sandbox with realistic fills/rejects | White-space leapfrog | Current APIs lack full lifecycle from sandbox to live. | Developers can build without risking capital. | **Leapfrog**: exchange holidays, RMS errors, partial fills, freeze limits, margin and corporate actions. |
| Paper trading tied to live data | Market gap | External tools do partial simulation; broker-grade RMS simulation is rare. | "Try before funded account" activation. | **Leapfrog**. |
| Backtest/paper/live promotion path | Streak/AlgoTest adjacent, white-space broker-native | Users want strategy lifecycle, not disconnected tools. | YouTube and GitHub creators can show end-to-end builds. | **Leapfrog** with compliance guardrails. |
| Versioned SDKs and OpenAPI spec | Zerodha, Fyers, Dhan | Reduces integration friction. | SDK users become evangelists. | **Table-stakes parity**: Python, TypeScript/Node, Go, Java; OpenAPI and Postman collection. |
| API changelog and endpoint uptime | White-space leapfrog | API ops transparency is thin. | Developers defend platforms that communicate. | **Leapfrog**: public developer changelog, deprecation policy and endpoint-level uptime. |
| Strategy risk limits server-side | White-space leapfrog | Client bots fail; broker-side controls protect users and platform. | Serious users trust guardrails. | **Leapfrog**: per-strategy max loss, size, instrument, time and kill-switch limits. |
| Partner OAuth and marketplace | Zerodha ecosystem | Sensibull, smallcase, Streak, Quicko and others market Zerodha indirectly ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [Kite Connect](https://zerodha.com/products/api/)). | Third-party products pull users into broker. | **Fast-follow leapfrog**: regulated partner program with OAuth, scopes, review and revenue share. |

## 8. Pricing, Fees, Margin, Pledge and Capital Efficiency

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Simple public tariff | Zerodha, Dhan, m.Stock | Charges are predictable and public ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [Zerodha charges](https://zerodha.com/charges/), [Dhan pricing](https://dhan.co/pricing/)). | Users recommend "no nonsense" brokers. | **Table-stakes parity**. |
| Rs 10 F&O/intraday brokerage | m.Stock, Kotak Neo | Half the standard Rs 20 fee; savings are obvious ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [m.Stock pricing](https://www.mstock.com/pricing), [Kotak Neo pricing](https://www.kotakneo.com/pricing/)). | Traders share monthly savings screenshots. | **Parity-plus**: launch with Rs 10/order or API plan with equivalent economics. |
| Rs 0 delivery | Zerodha, Dhan, many discount brokers | Long-term investing feels free. | Dormant investors keep the account open. | **Table-stakes parity**. |
| Rs 0 AMC / no platform fee | m.Stock, Dhan, Fyers, Groww | No inactivity penalty. | Retains dormant accounts until they become active. | **Table-stakes parity**. |
| Rs 0 API brokerage/order | Kotak Neo | Directly attacks algo trader cost pain ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [Kotak Neo pricing](https://www.kotakneo.com/pricing/)). | API communities share economics quickly. | **Strategic choice**: **parity-plus** via fair-use API plan or subscription that makes marginal order cost negligible. |
| Intro free brokerage | Angel One, m.Stock | Lowers first-month anxiety. | Trial converts if product delivers. | **Skip-with-reason** as broad giveaway; use targeted pro activation credits. |
| Hidden-charge disclosure | Zerodha, Dhan, m.Stock | Prevents DP, pledge, auto-square-off and gateway bill shock. | "They do not trick you." | **Table-stakes parity**. |
| Low or no auto-square-off charge | Angel, Dhan | RMS action does not feel punitive ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [Angel One pricing](https://www.angelone.in/exchange-transaction-charges)). | Retains users after bad trading days. | **Parity-plus**: low fee, pre-warning and reason log. |
| Free call and trade | m.Stock | Rare crisis-time benefit. | Users remember urgent execution help. | **Fast-follow parity-plus**: include for paid pro/support tier or outage scenarios. |
| Zero payment gateway | Dhan, m.Stock | Funding has no toll booth. | More frequent funding and less drop-off. | **Table-stakes parity** for UPI; low/transparent netbanking. |
| Low MTF headline | m.Stock, Kotak Neo | m.Stock markets from 8.99% p.a.; Kotak 9.69% p.a. ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [m.Stock MTF](https://www.mstock.com/margin-trading-facility)). | "My funding rate is under 10%." | **Parity-plus**: target 9.49%-9.99% public rate if capital allows. |
| MTF free trial | Angel One | 0% for first 30 days up to Rs 1 lakh creates activation ([05-pricing-margin-mtf](05-pricing-margin-mtf.md), [Angel One MTF](https://www.angelone.in/margin-trading-facility)). | Try-before-paying for funded delivery. | **Parity-plus**: controlled 14-30 day first-use trial with risk caps. |
| MTF interest rupees/day meter | White-space leapfrog | Incumbents disclose rates but do not make cost controllable. | Reduces fear and support burden. | **Leapfrog**. |
| One-tap repay / partial repay / convert MTF to delivery | White-space leapfrog | Funding should be manageable, not hidden debt. | Users trust funding when exit paths are clear. | **Leapfrog**. |
| Large MTF stock universe | Dhan, m.Stock | Fewer "not eligible" moments. | Users consolidate holdings. | **Parity-plus** if risk and capital permit; quality over raw count. |
| Instant pledge | Dhan, Angel, m.Stock, Zerodha | Turns holdings into margin in minutes ([05-pricing-margin-mtf](05-pricing-margin-mtf.md)). | Users transfer holdings to get clean collateral. | **Table-stakes parity**. |
| Transparent haircuts and cash/non-cash split | Zerodha, Fyers, Kotak, Dhan | Margin calculator must match live behavior. | Prevents rejection surprises. | **Leapfrog**: always show cash, cash-equivalent, non-cash, blocked and usable margin. |
| Collateral against MF/bonds/G-Secs | Bank/wealth brokers, Zerodha ecosystem potential | Capital efficiency for option sellers and HNIs. | Sticky for high-AUM clients. | **Fast-follow parity-plus** in Phase 2/3 after clearing/risk maturity. |
| True-cost pre-trade calculator | White-space leapfrog | Static calculators do not show live breakeven, fees, taxes, funding and slippage. | Viral trust artifact. | **Leapfrog** and Phase 1 launch feature. |
| Monthly true-cost statement | White-space leapfrog | Shows brokerage, taxes, DP, pledge, MTF interest, slippage and platform/API fees. | "Where my money went" screenshots. | **Leapfrog**. |
| Shareable savings card | White-space leapfrog | Brokers have calculators, not monthly proof. | Active traders post savings vs old broker. | **Leapfrog**. |
| Smart Cash / idle-cash assistant | White-space leapfrog | Idle trading cash is dead money; direct interest is constrained. | Ethical capital optimization. | **Fast-follow leapfrog**: liquid ETF/fund/T-bill suggestions with risk labels. |
| Capital efficiency score | White-space leapfrog | One score for cash, collateral, leverage and funding cost. | Broker feels like a trading CFO. | **Later leapfrog** after core ledger is strong. |

## 9. Back Office, Reports, Tax and Journal

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Named back office product | Zerodha Console | Console is a recognizable product for reports, portfolio, funds and tax ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Console](https://console.zerodha.com/)). | "Download it from Console" is brand shorthand. | **Table-stakes parity-plus**: name Arrow back office and make it direct/fast. |
| Tax P&L | Zerodha | Familiar, exportable and CA-accepted ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha Tax P&L](https://support.zerodha.com/category/console/reports/tax-p-l/articles/what-is-tax-p-l-report)). | Tax season pulls users back. | **Table-stakes parity**. |
| CA-ready F&O tax packet | Zerodha Console, Quicko ecosystem | Heavy F&O users need turnover, charges, STT, stamp, ledger, contract notes and assumptions. | "My CA accepted it." | **Leapfrog**: one-click CA share link and ZIP/PDF/Excel packet. |
| F&O turnover and strategy tax attribution | Zerodha baseline, white-space for strategy-level | Current reports are tax-centric, not strategy-centric. | CAs and serious traders recommend clarity. | **Leapfrog**. |
| Live settlement explainer ledger | Zerodha partial | Shows why amount is or is not withdrawable. | Prevents angry tickets. | **Leapfrog**. |
| Trade journal | White-space across brokers; Dhan/Fyers opportunity | Auto-tags orders by strategy, expiry, setup, screenshot, notes, R-multiple, slippage and charges. | Traders share post-trade reviews. | **Leapfrog** and Phase 1 differentiator. |
| Strategy-level P&L | White-space leapfrog | Tags every order to strategy, expiry, thesis, setup and rules; shows net after charges/taxes ([01-market-landscape](01-market-landscape.md)). | Serious traders can prove what actually works. | **Leapfrog**. |
| Order replay and chart screenshot archive | White-space leapfrog | Helps learn from errors and debug execution. | Shareable replay clips and support evidence. | **Leapfrog**. |
| Report APIs | DhanHQ, Fyers, Kite Connect, Upstox partial | Quant users want ledger, contract notes, Tax P&L, holdings and corporate actions by API ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md)). | Automation increases switching cost. | **Leapfrog**: report APIs equal trading APIs. |
| Corporate actions reports | Zerodha, ICICI Direct, bank brokers, INDmoney | Dividends, splits, bonuses, buybacks and F&O adjustments need reconciliation. | Trust moments when app explains why holdings changed. | **Parity-plus** with F&O adjustment notes. |
| Family portfolio | Zerodha, INDmoney, bank brokers | One user brings household accounts ([02-onboarding-money-backoffice](02-onboarding-money-backoffice.md), [Zerodha family](https://support.zerodha.com/category/console/portfolio/family/articles/what-is-family-portfolio), [INDmoney](https://www.indmoney.com/)). | Family workspace creates multi-account lock-in. | **Fast-follow parity-plus** in Phase 2. |
| US/global reports | INDmoney, Upstox | Global assets make tax complex. | Affluent users retain where reports are clean. | **Later parity**; not core Phase 1. |

## 10. Investor Research, Wealth and Product Breadth

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Unified stock page | Tickertape, INDmoney, Groww, Angel, ICICI | Fundamentals, valuation, peers, events and screeners in one clean page ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [Tickertape](https://www.tickertape.in/)). | Users share stock pages. | **Fast-follow parity-plus** in Phase 2; include holdings/F&O/hedge context. |
| Stock screener | Tickertape, Groww, INDmoney, HDFC Sky, ICICI | Tickertape exposes thousands of stocks, export and filters like PE, ROE and PB ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [Tickertape Screener](https://www.tickertape.in/screener/equity)). | Screen links and YouTube strategies spread. | **Fast-follow parity-plus**: screen to watchlist/basket/SIP. |
| Thematic discovery | smallcase, ICICI, INDmoney, Groww | Themes are easy to explain and rebalance. | "Buy India's defence/EV theme." | **Fast-follow parity** via partner first, native later. |
| Research reports | ICICI Direct, HDFC Sky, Motilal, Angel | ICICI claims 220+ stocks, 15+ sectors, baskets, picks, intraday ideas and F&O strategies ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [ICICI Direct Research](https://www.icicidirect.com/research)). | Reports and WhatsApp ideas are forwarded. | **Phase 2 parity-plus** only if scorecard and conflicts are transparent. |
| Research with public scorecard | White-space leapfrog | Brokers publish ideas, but not enough misses, drawdown and change logs. | Trust rises when misses are visible. | **Leapfrog** in Phase 2; no black-box AI picks. |
| Direct mutual funds | Groww, Zerodha Coin, INDmoney, Dhan, HDFC Sky, Angel | SIPs create recurring habits. | Family/first-time investor referrals. | **Phase 2 table-stakes parity**. |
| ETFs with liquidity/tracking analytics | Groww, HDFC Sky, INDmoney | ETF investors need tracking error, liquidity and premium/discount. | ETF SIP and basket sharing. | **Phase 2 parity-plus**. |
| IPO flow | Zerodha, Groww, Dhan, Upstox, Angel, ICICI | Hot IPOs create natural acquisition. | "Apply before 5 PM." | **Phase 1/2 parity-plus** with mandate tracker. |
| Bonds/NCD/G-Secs/SGB/54EC | ICICI Direct, Angel, Groww, Upstox, INDmoney | Fixed income wins family/HNI trust ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [ICICI Direct Bonds](https://www.icicidirect.com/bonds)). | Retirees/HNIs ask where to buy safely. | **Phase 2/3 parity-plus**: fixed-income cockpit. |
| NPS | ICICI Direct, Upstox, INDmoney | Sticky retirement/tax product. | Annual tax planning. | **Later parity**; not Phase 1. |
| US/global investing | INDmoney, Angel, HDFC Sky | Cross-asset net worth habit. | "One app for all investments." | **Later parity** after domestic core. |
| Portfolio intelligence console | INDmoney + Zerodha Console + Tickertape | One dashboard for direct equity, F&O P&L, MFs, ETFs, bonds, taxes, dividends, XIRR, benchmarks and family accounts ([04-investor-research-ecosystem](04-investor-research-ecosystem.md)). | Portfolio health screenshots. | **Leapfrog** in Phase 2, anchored in Phase 1 reports. |
| External portfolio aggregation | INDmoney | App is useful before assets transfer. | Migration funnel. | **Phase 2 parity-plus** via CAS and compliant imports. |
| Portfolio risk analytics | ICICI, HDFC Sky, Tickertape, INDmoney partial | Few brokers make risk truly personal. | "My portfolio is 42% financials." | **Leapfrog**: concentration, sector/factor, drawdown, liquidity, pledge, stress tests. |
| Dividend and cashflow calendar | Groww, HDFC Sky, Tickertape, INDmoney | Income events create repeat visits. | Dividend income screenshots. | **Phase 2 parity-plus**. |
| Goal planning | Groww, INDmoney, bank brokers | Emotional, recurring long-term investing. | Family/goal referrals. | **Later parity** after analytics correctness. |
| Stock/ETF SIP | ICICI Direct, HDFC Sky, smallcase workflows | Creates recurring accumulation in equities/ETFs. | "I SIP into Nifty leaders." | **Phase 2 parity-plus** with tax/slippage/cash handling. |
| Baskets/model portfolios | smallcase, ICICI, Angel, Dhan, HDFC Sky | Rebalances create retention and creator distribution. | Basket templates are shareable. | **Phase 2 parity-plus**: self-created baskets first; partners later. |

## 11. Education, Community, Support and Incident Trust

| Feature / pattern | Best-in-class broker(s) | Why it is "wow" | Word-of-mouth mechanic | Parity verdict for Arrow |
|---|---|---|---|---|
| Free structured education | Zerodha Varsity | Free, open, ad-free, no signup, covers investing, taxation, options and psychology ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [Varsity](https://zerodha.com/varsity/)). | Default link Indians send to beginners. | **Parity-plus**: partner or build, but focus on risk/product mechanics first. |
| Public Q&A forum | Zerodha TradingQ&A | Searchable answers across market/product/tax topics ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [TradingQ&A](https://tradingqna.com/)). | Public answers reduce support load and rank in search. | **Fast-follow parity-plus**: launch with product team participation and accepted answers. |
| Trader community | Dhan MadeForTrade | Serious community with product announcements, APIs, algos and strategies ([04-investor-research-ecosystem](04-investor-research-ecosystem.md), [MadeForTrade](https://madefortrade.in/)). | Members become early testers and advocates. | **Parity-plus**: pro workflows, no hype/P&L bait. |
| App-native learning | Angel Smart Money, Upstox Learning, HDFC Sky Learn, Groww | Learning tied to activation can be effective. | Improves first action completion. | **Parity** for onboarding; keep trading surfaces uncluttered. |
| Vernacular education | Groww, Angel, Zerodha videos | Expands trust beyond English-speaking traders. | WhatsApp and YouTube sharing. | **Fast-follow parity-plus**: risk, order mechanics, tax, IPO, MFs and APIs in Hindi + regional languages. |
| Contextual education from real portfolio risk | White-space leapfrog | Lessons based on holdings/F&O losses/SIP gaps are more memorable. | "The app warned me with my own data." | **Leapfrog** in Phase 2; must avoid patronizing tone. |
| Creator/webinar program | Zerodha Varsity Live, Angel, Upstox, Dhan, LearnApp | Creators distribute workflows. | Templates and videos spread. | **Parity-plus** with compliance review and transparent affiliate labels. |
| Searchable support center | Zerodha, Groww, Angel | Zerodha exposes tickets, escalation, SCORES, ODR and updates in one place ([06-support-trust-brand](06-support-trust-brand.md), [Zerodha Support](https://support.zerodha.com/)). | Users share links instead of screenshots. | **Table-stakes parity**. |
| Ticket audit trail | Zerodha, Groww, Dhan | Ticket IDs and order references matter for disputes. | Traders judge follow-up quality. | **Parity-plus**: ticket linked to order IDs, timestamps, ledger lines and incident status. |
| Market-literate pro support | Dhan, Fyers, Zerodha Kite Connect | API/pro users need agents who understand orders, RMS, WebSockets and exchange states. | "Support actually understood the order." | **Leapfrog**: severity-based SLA and pro/API incident channel. |
| Public status page | Fyers, Dhan, Zerodha | Fyers shows component status and 90-day history; Dhan has public status monitor ([03-trading-experience-fno-api](03-trading-experience-fno-api.md), [FYERS Status](https://status.fyers.in/), [Dhan Status](https://status-monitor.dhan.co/)). | Public uptime turns reliability into a trust asset. | **Table-stakes parity-plus** with exchange/API/UI/component detail. |
| Incident postmortems | Under-owned | Outages shape trader trust; current comms are incomplete ([06-support-trust-brand](06-support-trust-brand.md)). | Users defend broker when facts are public. | **Leapfrog**: postmortem template before launch. |
| User-specific outage impact view | White-space leapfrog | Generic status does not answer "was my order affected?" | Support evidence reduces anger. | **Leapfrog**: map incidents to user orders, feeds, login and positions. |
| Compensation/accountability policy | White-space leapfrog | No broker owns transparent trader compensation rules. | Trust after bad market days. | **Leapfrog** with conservative, pre-defined rules. |
| Formal grievance timeline | Zerodha baseline, white-space UX | SCORES, SMART ODR and exchange paths are mandatory but fragmented. | Users feel protected. | **Parity-plus**: one-click timeline with broker SLA, escalation and documents. |
| Regional pro support/education without hype | White-space | Existing regional content skews beginner/acquisition. | Serious non-English traders trust risk-first content. | **Leapfrog** in GTM and education. |

## Launch Priority Summary

| Priority | Must ship for Phase 1 F&O/API wedge | Fast-follow | Later / skip |
|---|---|---|---|
| Trust | No-spam stance, public pricing, status page, support escalation, custody proof basics | Complaint dashboard, incident postmortems, order impact view | Mass celebrity brand campaigns |
| Onboarding | 10-minute resident KYC, F&O activation, API intent, readiness checklist | NRI/HUF/minor, assisted high-value rescue | Broad RM model |
| Trading | TradingView-grade charts, option chain, baskets, GTT, slicing, depth, pro order ticket | Expiry Mode, rollover wizard, strategy journal | Beginner-first simplification as default |
| API | Free personal API, docs, SDKs, option-chain API, WebSockets, sandbox v1 | Paper trading, live promotion, endpoint uptime, partner OAuth | Closed partner-only API model |
| Money/capital | Instant payout, live ledger, Rs 10/order, public tariff, pledge, MTF plan, true-cost calculator | MTF meter, Smart Cash, savings card, advanced collateral | Opaque teaser pricing |
| Reports | Tax P&L, CA packet, ledger, contract notes, report APIs | Strategy P&L, journal, family view | Advisory-heavy research before trust |
| Investor expansion | IPO tracker, basic holdings analytics | MF/ETF/bonds, stock pages, screeners, portfolio intelligence | Insurance/loans before product trust |
