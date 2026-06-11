# Trading Experience Research: Indian F&O, Commodity, Pro and API-First Traders

Date: 2026-06-11  
Scope: Indian retail brokers with emphasis on active F&O/derivatives traders, commodity/currency users, desktop/web terminals, and API/algo-first users. Coverage includes the major NSE active-client brokers and pro-trader challengers: Zerodha, Groww, Angel One, Upstox, Dhan, Fyers, Kotak Neo, ICICI Direct, HDFC Sky, Paytm Money, 5paisa, Shoonya/Finvasia, m.Stock, SBI Securities, Motilal Oswal, IIFL, Sahi, INDmoney, and adjacent algo/options tools.

## Executive takeaways

| Theme | Best current owner(s) | Why it matters for a new entrant | Word-of-mouth mechanic |
|---|---|---|---|
| Chart-led active trading | Dhan, Fyers, Zerodha, m.Stock | Active intraday traders now expect TradingView-quality charting, multi-chart layouts, chart order placement, and fast order management. Dhan explicitly offers live TradingView trading, 20+ layouts, drag-and-drop orders, option chain from charts, baskets from charts, and live P&L on charts ([Dhan TradingView](https://dhan.co/tradingview/)). | Traders share screen recordings of one-window execution, especially when it saves seconds on expiry days. |
| Options execution surface | Dhan, Fyers, Zerodha + Sensibull ecosystem, Quantsapp-integrated brokers | Dhan has a trader-native option product story: advanced option chain, Greeks, OI, Flash Trade, baskets, margin benefit and chart execution ([Dhan Options](https://dhan.co/options/)). Fyers pushes scalper terminal with 3-in-1 charts, option chain and 50-depth ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Options traders refer tools that reduce strike-selection time and show margin/payoff before order placement. |
| API/algo wedge | Zerodha Kite Connect, DhanHQ, FYERS API, Upstox API, Angel SmartAPI, Shoonya | Zerodha has the oldest ecosystem and SDK footprint; its current public pricing lists Personal free and Connect at Rs 500/month for realtime WebSocket and historical candles ([Zerodha API](https://zerodha.com/products/api/)). DhanHQ and FYERS market free APIs; Dhan documents rate limits and option-chain APIs ([DhanHQ docs](https://dhanhq.co/docs/v2/)); FYERS claims free APIs, up to 1 lakh requests/day, and 7 ms order placement ([FYERS API](https://fyers.in/products/api)). | Algo users talk about SDKs, rate limits, data quality, and whether backtests can become live systems without broker friction. |
| Reliability transparency | Fyers, Zerodha, Dhan | Fyers exposes a status page with component-level uptime and 90-day history ([FYERS Status](https://status.fyers.in/)). Dhan has a public status monitor URL for exchange/connectivity status ([Dhan Status](https://status-monitor.dhan.co/)). Public broker outages still dominate trader perception; a December 2025 Cloudflare incident reportedly affected Zerodha, Groww and Angel One during market hours ([Times of India](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms)). | Public incident timelines, postmortems, and failover proof turn reliability into a trust feature, especially for expiry traders. |
| Commodity focus | Dhan, Zerodha, Fyers, Shoonya, m.Stock | Dhan explicitly packages a commodity dashboard, pledge margin and charts ([Dhan commodity](https://dhan.co/commodity/)); Zerodha, Fyers, Shoonya and m.Stock disclose MCX memberships ([Zerodha Kite](https://zerodha.com/products/kite/), [FYERS Web/App](https://fyers.in/products/web-and-app/), [Shoonya](https://shoonya.com/), [m.Stock](https://www.mstock.com/)). | Commodity traders are underserved in mainstream UX; MCX-specific watchlists, night-session reliability and OCO risk controls travel well in communities. |

## Market lens: active clients vs pro-trader wedge

Large active-client brokers do not automatically win pro-trader experience. Groww is now widely reported as India's largest broker by active clients, and media citing NSE data reported active demat accounts rising to 45.11 million in January 2026 with Groww leading additions ([Economic Times](https://m.economictimes.com/markets/stocks/news/groww-adds-more-demat-accounts-than-angel-one-and-zerodha-on-nse-in-january/articleshow/128104118.cms)). But the active F&O/API wedge clusters around platforms with execution depth: Zerodha Kite/Kite Connect, Dhan, Fyers, Upstox, Angel SmartAPI/SpeedPro, Shoonya and m.Stock.

Implication: build for the trader who opens multiple charts, option-chain panels, baskets, API logs and margin calculators during live market hours. Do not benchmark only onboarding, mutual funds or casual equity investing.

## Feature heatmap

| Feature | Broker(s) doing it best | What makes it "wow" | Word-of-mouth / retention mechanic |
|---|---|---|---|
| TradingView chart trading | Dhan, Fyers, m.Stock, Paytm Money | Dhan's page is unusually explicit: trade options, futures, stocks and commodities from TradingView charts; 20+ layouts; drag-and-drop orders; instant orders; baskets; option chain; live P&L ([Dhan TradingView](https://dhan.co/tradingview/)). Fyers states TradingView supplies charting for its web/app ([FYERS Web/App](https://fyers.in/products/web-and-app/)). m.Stock advertises order from live TradingView charts ([m.Stock](https://www.mstock.com/)). Paytm Money advertises TradingView and Open API as platform choices ([Paytm Money](https://www.paytmmoney.com/stocks)). | Traders share setups. A beautiful, fast multi-chart layout becomes a daily habit and a social screenshot. |
| ChartIQ/alternate chart engine choice | Zerodha | Zerodha historically offered TradingView and ChartIQ choices in Kite; its current product page emphasizes advanced charting, hundreds of indicators, tools and extensive historical data ([Zerodha Kite](https://zerodha.com/products/kite/)). | Predictability and familiarity reduce switching anxiety for legacy Kite users. |
| Multi-chart layouts | Dhan, Fyers | Dhan calls out 20+ layouts for big-screen trading ([Dhan TradingView](https://dhan.co/tradingview/)); Fyers markets scalper terminal with 3-in-1 charts ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Multi-monitor traders promote the broker that reduces tab-switching. |
| Chart-based order placement | Dhan, m.Stock, Paytm Money, Fyers | Dhan offers instant orders, drag-and-drop orders, basket execution and position management from charts ([Dhan TradingView](https://dhan.co/tradingview/)); m.Stock advertises "Trade from charts real time" and live TradingView order placement ([m.Stock](https://www.mstock.com/)). | Saves seconds in fast markets; easy to demo in videos. |
| Level 3 / deeper market depth | Zerodha, Fyers | Zerodha advertises 20-market-depth / level 3 data on Kite ([Zerodha Kite](https://zerodha.com/products/kite/)); Fyers advertises 50 market depth in its options scalper terminal ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Scalpers talk about depth because it changes fill confidence and entry sizing. |
| GTT / forever orders | Zerodha, Dhan, Upstox, Paytm Money, m.Stock | Zerodha GTT remains valid for one year and supports single-trigger and OCO-style exits for holdings ([Zerodha GTT](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/gtt/articles/what-is-the-good-till-triggered-gtt-feature)). Dhan has Forever Orders in API docs ([DhanHQ docs](https://dhanhq.co/docs/v2/)). Upstox exposes GTT in API navigation ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). Paytm Money advertises GTT & AMO ([Paytm Money](https://www.paytmmoney.com/stocks)). | GTT creates passive retention: users leave triggers and holdings in the broker. |
| Basket orders | Zerodha, Dhan, m.Stock | Zerodha baskets support multi-stock baskets and real-time margins for F&O strategies ([Zerodha Kite](https://zerodha.com/products/kite/)). Dhan lets users create/execute baskets from TradingView charts and option chain ([Dhan TradingView](https://dhan.co/tradingview/), [Dhan Options](https://dhan.co/options/)). m.Stock advertises smart orders with 1-click basket execution ([m.Stock](https://www.mstock.com/)). | Multi-leg options traders migrate when baskets are lower-friction and margin is visible pre-trade. |
| Iceberg / slicing | Zerodha, Dhan | Zerodha Iceberg divides large orders into sequential legs, supports up to 50 legs, and helps overcome freeze limits; not available for MCX yet ([Zerodha Iceberg](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/iceberg-orders)). Dhan's order API has `/orders/slicing` for F&O freeze-limit quantities ([Dhan Orders API](https://dhanhq.co/docs/v2/orders/)). | Big-quantity traders remember the broker that avoids manual order splitting during expiry volatility. |
| Bracket / cover orders | Dhan, Angel, Fyers, legacy terminals | Dhan explicitly lists Bracket and Cover orders for options and API product types include BO/CO ([Dhan Options](https://dhan.co/options/), [Dhan Orders API](https://dhanhq.co/docs/v2/orders/)). | BO/CO are sticky for intraday risk discipline when implemented cleanly with trailing and fast exit. |
| One-click / scalping mode | Fyers, Dhan, m.Stock | Fyers advertises Quick Trade and an options scalper terminal ([FYERS Web/App](https://fyers.in/products/web-and-app/)). Dhan's Flash Trade helps identify ATM, highest OI and most-traded contracts ([Dhan Options](https://dhan.co/options/)). m.Stock advertises Watchlist PRO 1-click orders ([m.Stock](https://www.mstock.com/)). | "I can enter/exit faster here" is the strongest trader referral line. |
| Order-latency claims | Fyers, Zerodha, Dhan | Fyers claims order placement in 7 ms for its API ([FYERS API](https://fyers.in/products/api)). Zerodha claims zero-latency universal search and public API scale metrics, but API docs expose risk and rate limits rather than fill-latency guarantees ([Zerodha Kite](https://zerodha.com/products/kite/), [Kite rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)). Dhan claims "lightning fast API collection" ([DhanHQ docs](https://dhanhq.co/docs/v2/)). | Latency claims attract algo users, but only retained if verified with transparent order timestamps and postbacks. |
| Advanced option chain | Dhan, Fyers, Upstox API, m.Stock | Dhan: Greeks, OI, volume, order placement from chain ([Dhan Options](https://dhan.co/options/)); Fyers: option chain embedded in scalper terminal ([FYERS Web/App](https://fyers.in/products/web-and-app/)); Upstox exposes option-chain API ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)); m.Stock advertises Advanced Option Chain ([m.Stock](https://www.mstock.com/)). | The option chain is the trader's cockpit; quality here drives daily active use. |
| Greeks / OI analytics | Dhan, Sensibull, Quantsapp, Fyers | Dhan directly shows Delta, Theta, Gamma, Vega, Rho and PCR references ([Dhan Options](https://dhan.co/options/)). Sensibull and Quantsapp remain strong adjacent tools for strategy analytics and broker tie-ups. | Traders retain where they can validate directional, volatility and theta risk without exporting to another site. |
| Strategy builder / payoff | Zerodha via Sensibull, Dhan, Fyers, Quantsapp-integrated brokers | Zerodha's ecosystem page lists Sensibull and Streak among integrated products ([Zerodha API](https://zerodha.com/products/api/)); Dhan options trader markets strategy builder/Flash Trade/margin ([Dhan Options](https://dhan.co/options/)); Fyers has Insta Options and scalper tooling. | Strategy screenshots and payoff diagrams are naturally shareable. |
| Margin benefit visibility | Zerodha, Dhan, m.Stock | Zerodha baskets support real-time margins for F&O strategy/spread orders ([Zerodha Kite](https://zerodha.com/products/kite/)). Dhan highlights pledge margin across segments including commodity and currency options on 1450+ stocks ([Dhan Options](https://dhan.co/options/)). m.Stock highlights instant pledge/margin and F&O tools ([m.Stock](https://www.mstock.com/)). | Margin clarity prevents rejection surprises and builds trust on high-stakes entries. |
| Commodity dashboard / MCX UX | Dhan, Zerodha, Fyers, Shoonya, m.Stock | Dhan explicitly markets commodity dashboard, pledge margin and charts ([Dhan commodity](https://dhan.co/commodity/)). Zerodha, Fyers, Shoonya and m.Stock disclose MCX memberships ([Zerodha Kite](https://zerodha.com/products/kite/), [FYERS Web/App](https://fyers.in/products/web-and-app/), [Shoonya](https://shoonya.com/), [m.Stock](https://www.mstock.com/)). | MCX traders are loyal if night-session stability, contract search and order protection are better than equity-first apps. |
| Public status / uptime | Fyers, Dhan, Zerodha | Fyers status page shows component statuses and 90-day uptime, including trading via API and exchange connectivity ([FYERS Status](https://status.fyers.in/)). Dhan has a public status monitor URL ([Dhan Status](https://status-monitor.dhan.co/)). Zerodha has a status site, but visibility varies by incident and page rendering ([Zerodha Status](https://status.zerodha.com/)). | A public status page turns reliability from a hidden promise into a shareable trust asset. |

## Charting experience

### TradingView vs ChartIQ

| Broker | Integration posture | Pro-trader assessment | Gap/opportunity |
|---|---|---|---|
| Dhan | Deep TradingView-centric positioning: trade stocks, futures, options and commodities from TradingView charts; multiple layouts; chart baskets; option chain; live P&L; drag/drop orders ([Dhan TradingView](https://dhan.co/tradingview/)). | Best current chart-trading story for active traders. Strongest "wow" because chart, chain, order and P&L converge. | Match this, then add deterministic latency indicators, exchange timestamp overlays and order lifecycle replay. |
| Fyers | TradingView supplies charting; app/web includes quick trade, smart orders, scalper terminal, 3-in-1 charts and 50-depth ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Strong for scalpers and chart-first users; more pro-trader flavor than mass retail apps. | Make scalper terminal configurable enough for power users without clutter. |
| Zerodha Kite | Strong historical reputation; current page emphasizes advanced charting, hundreds of indicators/tools, extensive historical data for stocks and F&O, and 20-depth ([Zerodha Kite](https://zerodha.com/products/kite/)). | Still benchmark for predictability and minimal UI. Less "flashy" than Dhan/Fyers but trusted. | New entrant can beat with richer multi-layout and options cockpit without sacrificing Kite-like speed. |
| m.Stock | Advertises trade from live TradingView charts, F&O Watch, Watchlist PRO, one-click orders, baskets and GTT ([m.Stock](https://www.mstock.com/)). | Aggressive pro-trader messaging at low brokerage. | Validate real execution depth; public docs are more marketing than detailed workflow. |
| Paytm Money | Advertises mobile, web, TradingView and Open API choices ([Paytm Money](https://www.paytmmoney.com/stocks)). | Good breadth, less evidence of pro-grade options/commodity depth. | Opportunity is to convert simple retail UI into F&O cockpit without alienating casual investors. |
| Groww, INDmoney, HDFC Sky | Strong mass-market investing/onboarding, weaker public pro-trader charting story. | Not the benchmark for active derivatives UX. | Pro wedge can win users despite lower mass-market brand awareness. |

### Latency and predictability

Public latency claims are uneven and should be treated as broker claims, not audited measurements:

| Broker | Public claim / evidence | Product implication |
|---|---|---|
| FYERS | Claims free API access, up to 1 lakh requests/day and order placement in 7 ms ([FYERS API](https://fyers.in/products/api)). | Compete by instrumenting order journey: client send, broker ack, OMS accepted, exchange time, trade fill. |
| Zerodha | Kite page claims instant search with "zero latency"; Kite Connect docs give rate limits, WebSocket binary tick streaming, 3000 instruments per connection and 3 WebSocket connections per API key ([Zerodha Kite](https://zerodha.com/products/kite/), [Kite WebSocket](https://kite.trade/docs/connect/v3/websocket/)). | Zerodha's trust is more from longevity and ecosystem than single latency claim. |
| Dhan | Claims lightning-fast API collection and live TradingView chart trading ([DhanHQ docs](https://dhanhq.co/docs/v2/), [Dhan TradingView](https://dhan.co/tradingview/)). | Strong perceived speed; new entrant needs transparent proof, not only adjectives. |
| Upstox | Documents 10 requests/sec regular algo order limit and 50 requests/sec for SEBI-registered algos under 2025 framework ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). | Useful for serious algo users who care about regulatory categories and throttles. |

Opportunity: create a "Latency Ledger" per order with immutable event timestamps, API and UI parity, WebSocket ack, exchange timestamp, OMS error path and downloadable logs. This becomes both reliability defense and trader advocacy content.

## Order types and speed

| Capability | Current best | What is wow | Why it retains users |
|---|---|---|---|
| GTT / OCO-style triggers | Zerodha | GTT valid for one year; triggers can place limit orders when conditions and funds are met; OCO for holdings ([Zerodha GTT](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/gtt/articles/what-is-the-good-till-triggered-gtt-feature)). | Users leave long-lived automation inside broker, creating switching friction. |
| Baskets with margin | Zerodha, Dhan | Zerodha gives real-time margins in baskets for F&O spreads ([Zerodha Kite](https://zerodha.com/products/kite/)); Dhan executes baskets from TradingView charts and option chain ([Dhan TradingView](https://dhan.co/tradingview/)). | Multi-leg option traders trust the broker that prevents margin surprises. |
| Iceberg | Zerodha | Up to 50 legs, sequential execution, freeze-limit workaround, with constraints clearly documented ([Zerodha Iceberg](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/iceberg-orders)). | High-quantity traders refer brokers that reduce manual stress. |
| API slicing | Dhan | `/orders/slicing` for orders over F&O freeze limits ([Dhan Orders API](https://dhanhq.co/docs/v2/orders/)). | Algo/pro users need broker-native slicing to avoid brittle client loops. |
| Bracket / cover | Dhan, Fyers, Angel terminal users | Dhan documents BO/CO product types and markets bracket/cover for options ([Dhan Orders API](https://dhanhq.co/docs/v2/orders/), [Dhan Options](https://dhan.co/options/)). | Intraday traders stay where position risk is controlled in one ticket. |
| One-click/scalping | Fyers, Dhan, m.Stock | Fyers Quick Trade + scalper terminal; Dhan Flash Trade; m.Stock Watchlist PRO one-click ([FYERS Web/App](https://fyers.in/products/web-and-app/), [Dhan Options](https://dhan.co/options/), [m.Stock](https://www.mstock.com/)). | Speed becomes muscle memory, which is hard to switch away from. |

Design implication for new entrant: order tickets must have "simple" and "pro" modes, but pro mode cannot be hidden behind too many clicks. Default to fast keyboard-first order entry, pre-saved lot sizes, slippage guards, order slicing, basket margin preview, and emergency flatten.

## Options tooling

### Option chain quality

| Broker/tool | Strength | Wow feature | WOM / retention |
|---|---|---|---|
| Dhan Options Trader | Advanced option chain with Greeks, OI, volume and order placement; Flash Trade for ATM/highest-OI/most-traded contracts; TradingView option chart trading ([Dhan Options](https://dhan.co/options/)). | One cockpit for chain + chart + order + margin. | Traders recommend it because it reduces expiry-day strike hunting. |
| Fyers | Scalper terminal with 3-in-1 charts, option chain and 50-depth ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Scalp-oriented layout instead of generic investing UI. | Appeals to active intraday communities. |
| Zerodha + Sensibull | Zerodha ecosystem lists Sensibull integration ([Zerodha API](https://zerodha.com/products/api/)); Sensibull is widely used for option strategies/payoff. | Deep strategy analysis without rebuilding everything inside Kite. | Integration gives Zerodha users fewer reasons to move brokers. |
| Upstox API | Option chain API in developer documentation navigation ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). | Programmatic chain access for algo users. | API traders value consistent chain schemas and rate limits. |
| DhanHQ API | Option chain, expired options data, historical data and live feeds are first-class docs sections ([DhanHQ docs](https://dhanhq.co/docs/v2/)). | API-native options tooling, not only UI. | Good fit for systematic options desks. |
| m.Stock | F&O Watch, Advanced Option Chain, smart orders, chart trading ([m.Stock](https://www.mstock.com/)). | Low-cost broker packaging pro F&O features. | Price-sensitive active traders compare screenshots and fees. |

### Strategy builders, payoff and margin benefit

| Need | Best current owner(s) | Gap for entrant |
|---|---|---|
| Strategy construction | Sensibull/Zerodha, Dhan, Fyers, Quantsapp tie-ups | Build native payoff, Greeks and margin in the same order flow. Do not make users copy strikes to a separate website. |
| Payoff diagrams | Sensibull, Quantsapp | Add live payoff that moves with LTP/IV, supports "what if exit one leg", and explains max risk in plain language. |
| Margin benefit visibility | Zerodha baskets, Dhan pledge/margin, m.Stock pledge/margin | Show margin before and after each leg, incremental benefit, worst-case rejected-leg scenario, and expiry-day margin changes. |
| Rollover tooling | Underdeveloped across retail brokers | Build rollover wizard: current leg, next expiry liquidity, carry cost, IV skew, calendar payoff and one-click basket rollover. |
| Expiry-day tooling | Dhan/Fyers closest | Add expiry cockpit: ATM ladder, gamma risk, premium decay heatmap, freeze-limit warnings, ban-period/quantity guards, and emergency exit all. |

## Commodity and currency experience

| Broker | Commodity/currency posture | Best/wow feature | WOM / retention |
|---|---|---|---|
| Dhan | Commodity Dashboard, pledge margin and charts are explicit product navigation; supports commodity options in options page ([Dhan commodity](https://dhan.co/commodity/), [Dhan Options](https://dhan.co/options/)). | Commodity trading is treated as a first-class trader workflow, not a buried segment. | MCX traders refer night-session reliability and better contract UX. |
| Zerodha | Member of NSE, BSE, MCX and MSEI; Kite supports metals/derivatives search and advanced charting ([Zerodha Kite](https://zerodha.com/products/kite/)). | Trust + mature platform + historical data. | Commodity users stay if Kite remains stable and margins are predictable. |
| Fyers | MCX member; web/app includes charting, quick trade and pro tools ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Chart-first scalping and API positioning. | Pro users like one broker for F&O and commodities. |
| Shoonya | SEBI registration covers Cash, F&O, CDS, Commodity; MCX member disclosed ([Shoonya](https://shoonya.com/)). | Cost-led pitch and API reputation among algo users. | Free/low-cost API and zero-brokerage positioning can spread in trader groups. |
| m.Stock | MCX member; F&O and currency offerings; TradingView chart trading and low flat brokerage ([m.Stock](https://www.mstock.com/)). | Price disruption plus TradingView order flow. | Brokerage savings are easy to quantify and share. |

Commodity-specific opportunity: build an MCX cockpit with evening-session status, spread/near-far contracts, physical-delivery warnings, commodity-specific margin calendars, circuit/volatility alerts, and a "do not carry into delivery risk" guardrail.

## Desktop and web terminals

| Terminal | Broker | Public positioning | Pro-trader assessment |
|---|---|---|---|
| Kite Web | Zerodha | Universal search across 90,000+ instruments, 20-depth, advanced charting, GTT, baskets, alerts, nudges, ecosystem extensibility ([Zerodha Kite](https://zerodha.com/products/kite/)). | Best minimalist benchmark. Wins on trust, clean UX and ecosystem. |
| Dhan Web / Dhan TradingView / DEXT T3 | Dhan | DEXT T3 is positioned as a terminal for power traders; Dhan TradingView supports chart trading, baskets, option chain and live P&L ([Dhan TradingView](https://dhan.co/tradingview/), [Dhan DEXT T3](https://dhan.co/dext-t3-trading-terminal/)). | Strongest pro-trader product packaging. |
| FYERS Web & App / FYERS One | Fyers | Web/app highlights AI assistant, scalper terminal, smart orders, quick trade, uptime and TradingView charting ([FYERS Web/App](https://fyers.in/products/web-and-app/)). | Strong for active traders who want features beyond Kite. |
| Angel SpeedPro | Angel One | Known as a legacy desktop terminal for active traders; current public pages are less accessible in crawlable form. SmartAPI remains relevant for developers. | Large broker distribution, but pro-user perception depends on terminal stability and API quality. |
| Kotak Neo terminal | Kotak Securities | Bank-backed broker with Neo platform; pro depth varies by workflow. | Trust/brand strong; less visible "wow" for API-first traders. |
| ICICI Direct, HDFC Sky, SBI Securities, Motilal Oswal, IIFL | Bank/full-service terminals | Strong research, advisory, relationship and bank integration. | Less compelling as F&O/API-first wedge unless terminal speed and order tooling are modernized. |
| m.Stock Web/App | m.Stock | F&O Watch, Watchlist PRO, live TradingView chart orders, baskets/GTT, 7,467 trades/min claim ([m.Stock](https://www.mstock.com/)). | Challenger worth watching for low brokerage plus trader tools. |

New entrant terminal requirements:

- Workspace persistence across browser, desktop and mobile.
- Multi-monitor layouts with detachable charts, chain, order book, positions and logs.
- Keyboard command palette for symbols, orders, exits, baskets and rollovers.
- Fast "flatten", "reverse", "add hedge", "convert to basket" actions.
- Unified order audit trail across manual, basket, chart and API orders.

## API and algo platforms

### Broker API comparison

| Broker API | Pricing / access | Rate limits / data | WebSocket / historical | SDK/community/integrations | Wow | Retention/WOM mechanic |
|---|---|---|---|---|---|---|
| Zerodha Kite Connect | Current public page: Personal free for order/GTT/alerts/margins/portfolio; Connect Rs 500/month for full APIs with realtime WebSocket and historical candles ([Zerodha API](https://zerodha.com/products/api/)). | 10 order requests/sec, 400 orders/min, 5000 orders/day, quote 1/sec, historical 3/sec, max 25 modifications/order ([Kite rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)). | WebSocket supports up to 3000 instruments per connection and up to 3 connections per API key; historical API supports minute to daily candles, OI and continuous futures for NFO/MCX futures ([Kite WebSocket](https://kite.trade/docs/connect/v3/websocket/), [Kite historical](https://kite.trade/docs/connect/v3/historical/)). | Official SDK links for Python, Java, Node.js, C#/.NET, Go, Rust, PHP, C++; ecosystem includes Sensibull, smallcase, Streak, Quicko ([Zerodha API](https://zerodha.com/products/api/)). | Most mature developer ecosystem. | Developers trust stable docs, SDKs and community answers. |
| DhanHQ | Markets trading APIs as free; docs cover orders, super orders, forever orders, conditional triggers, funds/margin, live order updates, market quote, live feed, full depth, historical, expired options, option chain ([DhanHQ docs](https://dhanhq.co/docs/v2/)). | Rate limits: order APIs 10/sec, 250/min, 1000/hr, 7000/day; data APIs 5/sec and 100000/day; quote and non-trading have separate limits; 25 modifications/order ([DhanHQ docs](https://dhanhq.co/docs/v2/)). | Live market feed, historical data and option-chain APIs are documented sections ([DhanHQ docs](https://dhanhq.co/docs/v2/)). | Python package shown in docs; strong Dhan community positioning. | API-native options chain and free access. | Algo users can start without subscription friction. |
| FYERS API | Free trading APIs; up to 1 lakh requests/day; claims 7 ms order placement ([FYERS API](https://fyers.in/products/api)). | Public product page gives daily request headline; detailed docs require separate access/navigation. | Product page lists trading, historical data and real-time data APIs ([FYERS API](https://fyers.in/products/api)). | REST, Python, Node.js, JavaScript, C#, Java, Go, C listed ([FYERS API](https://fyers.in/products/api)). | Strong speed and free positioning. | "Free + fast" is simple to share in algo groups. |
| Angel SmartAPI | SmartAPI is a known Angel One developer platform; docs page is JavaScript-rendered in crawl but publicly available ([Angel SmartAPI docs](https://smartapi.angelbroking.com/docs)). | Current crawlable public pages did not expose rate-limit detail clearly. | Market data/order API positioning is public, but exact entitlements should be validated from logged-in/current docs before product benchmarking. | Popular among retail algo platforms due to Angel scale. | Large client base and free/accessible developer story. | Algo vendors integrate where client base is large. |
| Shoonya API | Shoonya has a public API product page and knowledge-base API link; site discloses NSE/BSE/MCX membership and SEBI segments ([Shoonya API](https://shoonya.com/apis), [Shoonya](https://shoonya.com/)). | Current crawlable public pages did not expose rate-limit detail clearly. | Known in trader communities for free API access; exact current limits should be validated from official/live docs before implementation planning. | Active community SDKs exist, but official crawlable detail is limited. | Cost-led API access. | Free API is a strong acquisition hook for hobby algos. |
| Upstox API | Developer docs public; regulatory update for API/algo trading live ([Upstox API docs](https://upstox.com/developer/api-documentation/)). | Regular algos: 10 order requests/sec, 500/min, 2000/30 min; SEBI-registered algos: 50/sec, 500/min, 2000/30 min; standard APIs 50/sec ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). | Historical candle docs include 1-minute, 30-minute, daily, weekly and monthly ranges in v2 doc; WebSocket docs are in realtime/streaming section ([Upstox Historical](https://upstox.com/developer/api-documentation/get-historical-candle-data/), [Upstox Market Feed](https://upstox.com/developer/api-documentation/get-market-data-feed/)). | SDKs and API community linked in docs ([Upstox API docs](https://upstox.com/developer/api-documentation/)). | Clear regulatory-rate-limit categories. | Serious algo users appreciate explicit limits and compliance posture. |
| m.Stock API | Homepage advertises zero-cost Trading & Data APIs ([m.Stock](https://www.mstock.com/)). | Need detailed docs verification. | Product navigation confirms Trading API. | Emerging. | Free data/trading API as part of low-cost challenger pitch. | Price-sensitive API traders test and share if stable. |

### Algo-platform integrations

| Platform | Broker relevance | What matters |
|---|---|---|
| Streak | Listed in Zerodha's ecosystem links ([Zerodha API](https://zerodha.com/products/api/)). | No-code strategy creation and backtest-to-live bridge; reduces developer friction. |
| Tradetron | Common broker integration target across Indian algo users. | Marketplace strategies need reliable broker order APIs and clear failure handling. |
| AlgoTest | Popular for options backtesting/execution workflows. | Strategy-to-basket execution and broker-side margin accuracy are the critical handoff. |
| Sensibull | Zerodha ecosystem, options strategy analytics. | Payoff/Greeks/margin education plus execution bridge. |
| Quantsapp | Options analytics and broker tie-up ecosystem. | Advanced options analytics for traders not ready to code. |

Entrant API requirements:

- Free personal API tier with explicit limits.
- Paid pro tier only if it adds audited value: higher rate limits, more WebSockets, deeper history, SLA, priority incident channel.
- WebSocket for LTP/quote/full/depth/order updates with sequence numbers and heartbeat.
- Historical data with corporate action handling, continuous futures, expired options metadata and OI.
- Option chain endpoint with Greeks, IV, OI change, volume, PCR and liquidity flags.
- Broker-supported SDKs in Python, TypeScript/Node, Go and Java; OpenAPI spec; Postman collection.
- Sandbox with exchange-like rejects, partial fills, freeze limits and RMS errors.
- API order logs downloadable for dispute/debug.

## Reliability and risk management

| Reliability surface | Current evidence | What "best" should mean |
|---|---|---|
| Public uptime | Fyers shows component-level operational status and 90-day uptime; as of the crawl it displayed 100% for trading, API trading, realtime data, historical data, login and exchange connectivity over 90 days ([FYERS Status](https://status.fyers.in/)). | Component-level, exchange-level, API/UI-level status with historical incidents and postmortems. |
| Outage communication | December 5, 2025 Cloudflare outage reportedly hit Zerodha, Groww and Angel One, with login/order delays and platform unavailability during market hours ([Times of India](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms)). | Status page should distinguish broker infra, ISP/CDN, exchange, OMS, market data vendor and client app issues. |
| Regulatory framework | SEBI updated technical-glitch handling/reporting for brokers in January 2026, reducing some compliance burden for smaller firms while retaining oversight ([Economic Times](https://m.economictimes.com/markets/stocks/news/sebi-eases-technical-glitch-norms-for-stock-brokers-cuts-compliance-burden-for-smaller-firms/articleshow/126435737.cms)). SEBI discontinued IRRA in May 2026 after assessing stronger cyber security, DR and BCP systems ([Times of India](https://timesofindia.indiatimes.com/business/india-business/sebi-shuts-down-risk-reduction-access-trading-platform-asks-exchanges-to-strengthen-contingency-systems/articleshow/130907106.cms)). | Reliability must be designed as a regulatory, product and comms feature. |
| RMS / risk quality | Zerodha Nudge warns about illiquid instruments, corporate actions and risk before trades ([Zerodha Kite](https://zerodha.com/products/kite/)). Dhan API exposes order status, OMS error code/description and exchange time in order responses ([Dhan Orders API](https://dhanhq.co/docs/v2/orders/)). | Best RMS explains rejects before submission, provides exact exchange/RMS reason after rejection, and never leaves users guessing. |

Reliability "wow" feature for entrant: an "Order Health Center" combining live status, personal order timeline, broker/exchange incident mapping, kill switch, API heartbeat and downloadable audit bundle. This converts angry outage threads into evidence-based support flows.

## Broker-by-broker notes

| Broker | Trading-experience position | Best/wow features | Gaps for pro wedge |
|---|---|---|---|
| Zerodha | Trust benchmark for active retail, clean Kite UI, strongest developer ecosystem. | Kite advanced charting, 20-depth, GTT, baskets, Iceberg, Kite Connect SDKs, Streak/Sensibull ecosystem ([Zerodha Kite](https://zerodha.com/products/kite/), [Zerodha API](https://zerodha.com/products/api/), [Zerodha Iceberg](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/iceberg-orders)). | Less visually aggressive than Dhan/Fyers for modern options cockpit; paid Connect tier may push hobby algos to free APIs. |
| Groww | Largest/mass-market active-client force; clean investing UX. | Scale, onboarding, consumer trust. | Public pro-trader/F&O/API tool story is weaker than Dhan/Fyers/Zerodha. |
| Angel One | Large broker with SmartAPI and legacy active-trader terminals. | Distribution, SmartAPI developer base, SpeedPro familiarity. | Public crawlable details on current rate limits/terminal features need verification; perception depends on reliability. |
| Upstox | Strong app and public developer docs. | Clear 2025 algo rate-limit categories, GTT/order/market-data APIs ([Upstox Rate Limits](https://upstox.com/developer/api-documentation/rate-limiting/)). | Need sharper options-trader UX story versus Dhan/Fyers. |
| Dhan | Most explicit "made for traders" challenger. | TradingView chart trading, option chain, Flash Trade, Greeks, baskets, DhanHQ free APIs, DEXT T3 ([Dhan TradingView](https://dhan.co/tradingview/), [Dhan Options](https://dhan.co/options/), [DhanHQ docs](https://dhanhq.co/docs/v2/)). | Must keep reliability and support matching feature velocity. |
| Fyers | Pro-trader/scalper brand. | TradingView charting, scalper terminal, quick trade, smart orders, 50-depth, free API, 7 ms claim, public status page ([FYERS Web/App](https://fyers.in/products/web-and-app/), [FYERS API](https://fyers.in/products/api), [FYERS Status](https://status.fyers.in/)). | Needs continuous proof of latency and uptime claims under expiry load. |
| Kotak Neo | Bank-backed broker with modern app push. | Brand trust, bank ecosystem. | Needs stronger visible F&O/API-first differentiation. |
| ICICI Direct | Full-service/bank-integrated. | Research, bank integration, full-service trust. | Pricing and UX may feel less trader-native to scalpers/API users. |
| HDFC Sky | Bank-backed low-cost entrant. | HDFC trust and simplified pricing. | Pro F&O tooling less visible than Dhan/Fyers. |
| Paytm Money | Simple app, TradingView/Open API positioning. | GTT/AMO, TradingView, Open API, consumer app reach ([Paytm Money](https://www.paytmmoney.com/stocks)). | Needs deeper option-chain, margin and terminal proof. |
| 5paisa | Discount/full-service hybrid. | Low-cost history, research/tooling. | Less distinctive in chart/API pro wedge. |
| Shoonya/Finvasia | Cost/API/commodity-aware trader base. | SEBI coverage across cash, F&O, CDS and commodity; MCX membership; API product page ([Shoonya](https://shoonya.com/), [Shoonya API](https://shoonya.com/apis)). | Public docs and status transparency should be easier to evaluate. |
| m.Stock | Low brokerage challenger with pro feature marketing. | F&O Watch, Watchlist PRO, live TradingView chart orders, baskets/GTT, zero-cost API, low flat brokerage ([m.Stock](https://www.mstock.com/)). | Need proof of API limits, uptime and deep options execution quality. |
| SBI Securities | Bank/full-service. | SBI trust and relationship reach. | Not currently perceived as pro/API-first. |
| Motilal Oswal | Advisory/research-led. | Research, advisory, full-service relationship. | Less chart/API-native. |
| IIFL | Full-service plus digital. | Research/advice and branch/distribution. | Need sharper active trader product identity. |
| Sahi | Newer derivatives-focused challenger. | Potentially focused on F&O-native UX. | Needs trust, regulatory scale and reliability proof. |
| INDmoney | Wealth/investing-first super-app. | Portfolio aggregation and investing UX. | Not a primary active F&O/pro terminal benchmark. |

## Product opportunities for Arrow Trade

| Opportunity | Build | Why it can beat incumbents | WOM hook |
|---|---|---|---|
| Options cockpit | Unified chain, chart, payoff, margin, Greeks, IV, OI, basket and position controls. | Dhan/Fyers are closest, but there is room for a cleaner "one screen from idea to hedge to exit" workflow. | "I don't need Sensibull + broker + calculator open." |
| Latency Ledger | Per-order event timestamps, exchange time, OMS time, API/UI source, rejects, retries and downloadable logs. | Most brokers claim speed; few give user-visible proof. | "They show exactly where my order spent time." |
| Expiry Mode | ATM ladder, gamma/theta heatmap, freeze-limit warnings, margin stress, emergency flatten, one-click hedge. | Expiry is where traders feel pain and talk online. | "Built for Thursday, not generic investing." |
| API-first personal tier | Free API, generous but transparent limits, SDKs, sandbox, OpenAPI, sequence-number WebSockets. | Competes directly with Dhan/Fyers/Shoonya while matching Zerodha ecosystem quality. | Developers share working code and limits. |
| Commodity Pro | MCX night-session dashboard, delivery warnings, spread view, contract calendar, OCO risk controls. | Commodity traders are underserved by equity-first apps. | "Finally a broker that understands MCX." |
| Reliability-as-product | Status page, incident postmortems, user-specific impact view, failover mode, kill switch. | Outages are a top switching trigger. | "Even when things break, I know what's happening." |
| Margin simulator | Pre-trade margin, post-trade margin, rejected-leg scenario, pledge impact, expiry-day changes. | Margin surprises create rage and losses. | "No more rejected second leg." |
| Pro layout system | Multi-monitor persistent workspaces, detachable panels, keyboard actions, compact/dense UI. | Dhan/Fyers are feature-rich; a more polished dense terminal can win serious users. | Traders share layouts as templates. |

## Must-not-miss implementation principles

- Treat charts, chain, order book, positions and margin as one live system, not separate pages.
- Every order type should show exchange support, segment support, fees, failure modes and margin impact before submission.
- API and UI must share the same order engine and audit trail.
- Reliability needs first-class UX: status, fallback, order logs, incident mapping and support export.
- Avoid a beginner-first interface for the core wedge. Provide beginner guardrails, but keep pro workflows fast and dense.
- Build community loops: shareable layouts, strategy templates, API examples, expiry playbooks and public changelogs.

## Source index

- [Zerodha Kite](https://zerodha.com/products/kite/)
- [Zerodha Kite Connect/API pricing](https://zerodha.com/products/api/)
- [Kite Connect docs](https://kite.trade/docs/connect/v3/)
- [Kite Connect rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)
- [Kite WebSocket docs](https://kite.trade/docs/connect/v3/websocket/)
- [Kite historical data docs](https://kite.trade/docs/connect/v3/historical/)
- [Zerodha GTT](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/gtt/articles/what-is-the-good-till-triggered-gtt-feature)
- [Zerodha Iceberg](https://support.zerodha.com/category/trading-and-markets/charts-and-orders/order/articles/iceberg-orders)
- [Dhan TradingView](https://dhan.co/tradingview/)
- [Dhan Options](https://dhan.co/options/)
- [Dhan Commodity](https://dhan.co/commodity/)
- [Dhan DEXT T3](https://dhan.co/dext-t3-trading-terminal/)
- [DhanHQ API docs](https://dhanhq.co/docs/v2/)
- [Dhan Orders API](https://dhanhq.co/docs/v2/orders/)
- [Dhan Status Monitor](https://status-monitor.dhan.co/)
- [FYERS Web/App](https://fyers.in/products/web-and-app/)
- [FYERS API](https://fyers.in/products/api)
- [FYERS Pricing](https://fyers.in/pricing)
- [FYERS Status](https://status.fyers.in/)
- [Upstox API docs](https://upstox.com/developer/api-documentation/)
- [Upstox rate limits](https://upstox.com/developer/api-documentation/rate-limiting/)
- [Upstox historical candles](https://upstox.com/developer/api-documentation/get-historical-candle-data/)
- [Upstox market data feed](https://upstox.com/developer/api-documentation/get-market-data-feed/)
- [Angel SmartAPI docs](https://smartapi.angelbroking.com/docs)
- [Shoonya](https://shoonya.com/)
- [Shoonya API](https://shoonya.com/apis)
- [Shoonya pricing](https://shoonya.com/pricing)
- [m.Stock](https://www.mstock.com/)
- [Paytm Money Stocks](https://www.paytmmoney.com/stocks)
- [NSE find a stock broker](https://www.nseindia.com/static/invest/find-a-stock-broker)
- [Economic Times: Groww January 2026 active demat additions](https://m.economictimes.com/markets/stocks/news/groww-adds-more-demat-accounts-than-angel-one-and-zerodha-on-nse-in-january/articleshow/128104118.cms)
- [Times of India: December 2025 Cloudflare broker outage](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms)
- [Economic Times: SEBI technical glitch framework changes](https://m.economictimes.com/markets/stocks/news/sebi-eases-technical-glitch-norms-for-stock-brokers-cuts-compliance-burden-for-smaller-firms/articleshow/126435737.cms)
- [Times of India: SEBI discontinues IRRA](https://timesofindia.indiatimes.com/business/india-business/sebi-shuts-down-risk-reduction-access-trading-platform-asks-exchanges-to-strengthen-contingency-systems/articleshow/130907106.cms)
