# Social Pain: Reddit and Indian Trading Community Forums

Research window: June 2025 to June 2026. Older material is explicitly marked.

## Methodology and Access Notes

- Primary sources searched: Reddit subreddits named in the brief (`r/IndianStockMarket`, `r/IndianStreetBets`, `r/DalalStreetTalks`, `r/StockMarketIndia`, `r/Daytrading`, `r/personalfinanceindia`) plus Indian broker/community forums.
- Reddit access was materially limited. Direct Reddit HTML, JSON, RSS, and old.reddit endpoints returned network-policy/403 blocks from this environment. Search-engine result pages also returned sparse or blocked results for site-scoped Reddit queries. I therefore did not treat Reddit-only claims as verified unless a search result exposed enough source/date detail.
- Best accessible corpus: Discourse JSON/HTML from TradingQnA (Zerodha), MadeForTrade (Dhan), and Upstox Community. These provided direct links, dates, post counts, and user language.
- Supplemental sources: public news reports for broad social-media outage patterns and broker/market context. These are marked as non-forum when used.
- Frequency labels are qualitative: `one-off` = one distinct thread/post; `cluster` = 2-4 distinct threads/posts or multiple confirmations in a thread; `recurring` = repeated threads plus high-reply discussion or the same theme across brokers.

## Executive Readout

| Theme | What users keep saying | Brokers most visible in accessible corpus | Arrow Trade implication |
|---|---|---|---|
| Reliability during live trading | Rage spikes when orders execute oddly, cannot be exited, prices/data lag, or apps are inaccessible during market hours. Users ask for compensation and clear RCA. | Upstox, Dhan, Zerodha/Groww/Angel One in outage news | Publish real-time status, incident RCAs, degraded-mode behavior, and compensation policy before scale. |
| Charges transparency | Users distrust unexplained AMC, withdrawal, brokerage, DP, pledge/MTF, and contract-note differences. | Upstox, Dhan, Zerodha | Put charge preview and post-trade charge attribution directly in the order/ledger flow. |
| Support escalation | Users are angry when phone/ticket support is unresponsive or gives template replies. | Upstox, Dhan | Build market-hours escalation lanes for order/funds issues with SLA timers. |
| API/algo stability | Active traders want stable auth, static-IP clarity, token refresh, clean deprecation, good historical/live data, and order semantics that do not silently change. | Dhan, Upstox, Zerodha, Angel One | Treat API as a first-class product with versioning, sandbox, migration windows, and incident webhooks. |
| Active-trader UX | Repeated asks: one-tap orders, chart trading, trailing SL, easier order cancellation/reversal, better watchlists, logos, chart-in-order-ticket, bulk watchlist APIs. | Zerodha, Dhan, Upstox | Do not only copy investor UX; F&O scalpers want speed, fewer clicks, and deterministic order controls. |
| Data/holding trust | Missing MF holdings, mismatched app/web views, MF data discrepancies, bad API contract data erode confidence fast. | Upstox, Dhan | Reconciliation views and "as of" timestamps matter. |

## Evidence Table

| Date | Broker | Source | Category | Severity | Frequency signal | User language / close paraphrase |
|---|---|---|---|---|---|---|
| 2026-02-13 | Upstox | [Complaint Regarding System Failure on 3 February 2026](https://community.upstox.com/t/complaint-regarding-system-failure-on-3-february-2026/14094) | Outage / execution anomaly | Rage | cluster: 3 posts; user says multiple customers saw it | User says a NIFTY option buy order executed at a significantly higher price than available funds/margin and that "multiple customers reported facing the same problem." |
| 2026-01-14 | Upstox | [Unresponsive Customer Care at Upstox](https://community.upstox.com/t/complaint-regarding-unresponsive-customer-care-at-upstox-no-response-on-022-24229920/13475) | Support | Rage | cluster: 6 posts | "Extremely disappointed with Upstox's poor customer service. Repeated calls ... get no response. Urgently resolve or escalate to SEBI." |
| 2025-07-01 | Upstox | [Loosing all hope on upstox](https://community.upstox.com/t/loosing-all-hope-on-upstox-which-once-upon-a-time-use-to-be-a-wonderful-platform/9856) | App/web quality decline | Rage | recurring: 25 posts, 21 replies | Long-time user since 2017 says quality is "getting detoriated with every update" and feels like a "total fractured platform" on both web and mobile. |
| 2025-07-01 | Upstox | [same thread](https://community.upstox.com/t/loosing-all-hope-on-upstox-which-once-upon-a-time-use-to-be-a-wonderful-platform/9856) | Support / unresolved bugs | Rage | recurring inside thread | Reply says nobody listens and that replies feel like "Thanks for your query, we will forward it..." with no real fix. |
| 2026-04-18 | Upstox | [Hidden/AMC charges concern](https://community.upstox.com/t/alarming-concern-over-hidden-charges-being-applied-without-notice-and-calling-upon-people-to-raise-their-voice-aginst-amc-charges/15294) | Charges / AMC | Rage | cluster: one thread plus related AMC thread | User says they were promised lifetime free AMC, sees "everyday one mail about AMC charges," and asks how terms can be changed. |
| 2026-04-08 | Upstox | [Hidden charges despite Zero AMC](https://community.upstox.com/t/hidden-charges-being-charged-despite-f-zero-amc-account/15111) | Charges / ledger | Rage | cluster: 11 posts | User reports negative balance and "unpaid hidden charges" despite a zero-AMC account. |
| 2025-06-25 | Upstox | [Now pay charges for withdrawing my own money](https://community.upstox.com/t/now-pay-charges-for-withdrawing-my-own-money/9742) | Withdrawal charges | Rage | one-off | "How is this even justified?" after seeing charges for withdrawing account money. |
| 2026-05-07 | Upstox | [Brokerage & charges for intraday F&O](https://community.upstox.com/t/clarification-required-on-brokerage-charges-for-intraday-f-o-trade/15665) | Charge explainability | Annoyance | cluster: 7 posts | User compares contract-note brokerage/charges with calculator expectations and asks for detailed clarification. |
| 2026-05-08 | Upstox | [Brokerage & charges for GTT order](https://community.upstox.com/t/clarification-required-on-brokerage-charges-for-gtt-order/15669) | Charge explainability | Annoyance | cluster: 9 posts | Same charge-calculation confusion repeated for GTT/intraday option trade. |
| 2026-01-01 | Upstox | [Unable to exit intraday orders before 3:15 PM](https://community.upstox.com/t/unable-to-exit-intraday-orders-before-3-15-pm-orders-got-rejected-and-auto-square-off-happened-please-explain-the-reason/13292) | Order rejection / square-off | Rage | one-off | User says exit orders placed at 15:13:05 were rejected and auto square-off happened; asks for reason and exact window. |
| 2025-09-15 | Upstox | [Priceline hidden when order rejected](https://community.upstox.com/t/priceline-is-getting-hidden-when-order-is-rejected/11543) | Rejection UX | Annoyance | cluster: 6 posts | User posts rejection payload and complains price line gets hidden when order is rejected. |
| 2026-01-07 | Upstox | [MF holdings missing on web](https://community.upstox.com/t/mutual-fund-holdings-not-showing-in-upstox-web-application-but-showing-in-upstox-mobile-app/13370) | Holdings mismatch | Annoyance | one-off | MF holdings show in mobile but not web; user asks how to see MTF holdings on web. |
| 2025-06-18 | Upstox | [MF holdings discrepancy](https://community.upstox.com/t/discrepancy-in-mutual-fund-holdings-missing-funds-and-reduced-quantities/9589) | Holdings/data trust | Rage | recurring: 40 posts, 31 replies | Thread title reports missing funds and reduced quantities in MF holdings. |
| 2025-07-11 | Upstox | [Feature request for order management](https://community.upstox.com/t/feature-request-for-order-management/10099) | Feature request / order speed | Annoyance | cluster: 9 posts | User asks for cancel-existing-orders-on-same-strike while placing a new order, "very helpful to scalpers." |
| 2025-07-07 | Upstox | [Bad data in expired contracts API](https://community.upstox.com/t/data-missing-and-bad-data-in-expired-contracts-api/10007) | API data quality | Annoyance | one-off | User reports bad/missing expired option contract data with reproducible API call. |
| 2025-09-04 | Upstox | [410 discontinued API endpoint](https://community.upstox.com/t/410-client-error-get-https-api-upstox-com-v2-feed-market-data-feed-authorize-resulted-in-a-410-gone-response/11243) | API migration | Annoyance | one-off | User hits 410 Gone after endpoint discontinuation and needs migration clarity. |
| 2026-02-11 | Upstox | [Historical candle intraday options error](https://community.upstox.com/t/400-client-error-bad-request-https-api-upstox-com-v2-historical-candle-intraday-nse-fo-48216-15minute/14039) | API data availability | Annoyance | one-off | User asks whether intraday OHLC data for option strikes is supported. |
| 2026-05-20 | Upstox | [How to check withdrawal request](https://community.upstox.com/t/how-to-check-my-withdrawal-request/15886) | Funds workflow | Annoyance | one-off | User cannot find withdrawal request status. |
| 2025-09-23 | Dhan | [DhanHQ API auth process changes](https://madefortrade.in/t/update-for-api-traders-new-changes-in-dhanhq-api-authentication-process-and-updates/56286) | API auth / static IP | Annoyance to rage | recurring: 153 posts, 98 replies | Users ask whether daily login sessions are required, how to refresh tokens, whether Google Sheets/order placement needs static IPs, and whether partner platforms are affected. |
| 2025-09-24 | Dhan | [same DhanHQ API thread](https://madefortrade.in/t/update-for-api-traders-new-changes-in-dhanhq-api-authentication-process-and-updates/56286) | API token UX | Annoyance | recurring inside thread | User asks Dhan to "add generating the authentication code in mobile" because refresh would help instead of deleting/recreating. |
| 2026-03-09 | Dhan | [Market orders automatically converted to limit order](https://madefortrade.in/t/market-orders-automatically-converted-to-limit-order/61603) | Order semantics / algo execution | Rage | recurring: 13 posts, multiple users | User asks why market orders are converted to limit orders and says they "missed out on a huge profit." |
| 2026-03-09 | Dhan | [same market-to-limit thread](https://madefortrade.in/t/market-orders-automatically-converted-to-limit-order/61603) | Compensation / trust | Rage | recurring inside thread | Multiple users say sell legs did not execute, money was lost, and Dhan should provide compensation because the error was at broker end. |
| 2026-04-26 | Dhan | [DH-905 invalid IP despite whitelisted VPS](https://madefortrade.in/t/order-api-returning-dh-905-invalid-ip-despite-whitelisted-vps-ip/63927) | API static IP | Rage | cluster: 7 posts | User says whitelisted VPS still receives DH-905 Invalid IP even after IP verification API says orders are allowed. |
| 2025-10-01 | Dhan | [Generate API token with Telegram Bot](https://madefortrade.in/t/generate-api-token-with-a-telegram-bot/56631) | API auth workaround | Annoyance | cluster: 11 posts | Post frames 24-hour token refresh as "tedious, time-sensitive" and offers Telegram automation. |
| 2025-09-16 | Dhan | [Super Orders need more flexibility](https://madefortrade.in/t/feedback-super-orders-need-more-flexibility-convert-edit-scale-out-feature-implemented/56019) | Feature request / order management | Annoyance | recurring: 18 posts, implemented | User likes Super Orders but says they are rigid: cannot convert intraday to delivery within same order, quantities locked, no partial adjustment/scale-out. |
| 2026-03-30 | Dhan | [Some More Features requests](https://madefortrade.in/t/some-more-features-requests/63298) | Feature requests / UX | Annoyance | cluster: 9 posts | Requests company logos, charts on order page, failed GTT fixes, navigation from GTT/Forever orders to stock page, and sorting. |
| 2025-07-30 | Dhan | [Suggestions / Feature Requests](https://madefortrade.in/t/suggestions-feature-requests/53940) | Feature requests / charting | Annoyance | one-off | User asks for RSI divergence indicator, alert-click behavior to open a new tab, and grid/chart handling improvements. |
| 2025-06-07 | Dhan | [Total Charges for both Buy and Sell per Stock](https://madefortrade.in/t/total-charges-for-both-buy-and-sell-per-stock/51511) | Charge explainability | Annoyance | cluster: 4 posts | User likes Journal but wants buy-side and sell-side charges per scrip so they know how much went into charges for the whole trade. |
| 2026-02-06 | Dhan | [MTF conversion/pledge/interest charges](https://madefortrade.in/t/are-interest-and-pledging-charges-collected-if-mtf-position-is-converted-to-delivery-and-delivery-is-closed-intraday/60808) | MTF/pledge charges | Annoyance | cluster: 8 posts | User asks whether interest and pledging charges apply if MTF is converted to delivery and closed intraday. |
| 2026-04-10 | Dhan | [MF data discrepancies & UX feedback](https://madefortrade.in/t/responded-data-discrepancies-ux-feedback-for-mutual-funds/63637) | Data trust / UX | Annoyance | one-off | User says MF data/UX friction is impacting confidence; app and web feel cluttered and non-intuitive. |
| 2026-04-16 | Zerodha | [One-tap orders, chart trading & trailing SL in Kite](https://tradingqna.com/t/feature-request-one-tap-orders-chart-trading-trailing-sl-in-kite/193285) | Feature request / active trading | Annoyance | one-off, aligns with older recurring Kite requests | User wants one-tap orders, chart trading, and trailing SL on Kite mobile for active trading when laptop unavailable. |
| 2025-10-14 | Zerodha | [Requesting Feature: stock logos](https://tradingqna.com/t/requesting-feature/187667) | Feature request / watchlist UX | Annoyance | cluster: 10 posts | User requests logos in search/watchlist because Groww, Upstox, Dhan already offer them and logos improve recognition. |
| 2025-08-23 | Zerodha | [Bulk add stocks to Kite watchlist via API](https://tradingqna.com/t/feature-request-bulk-add-stocks-to-kite-watchlist-via-api/185825) | API feature request | Annoyance | cluster: 6 posts | User says Kite API lacks watchlist management, making manual one-by-one additions inefficient for algo traders/analysts. |
| 2026-05-13 | Zerodha | [Predefined Watchlists on Kite API](https://tradingqna.com/t/provide-access-of-predefined-watchlists-on-kite-api/194032) | API feature request | Annoyance | one-off | User says APIs already exist internally and asks Zerodha to expose predefined watchlists because instruments.json is hard to use. |
| 2026-02-23 | Zerodha | [DP charges are often overlooked](https://tradingqna.com/t/dp-charges-are-often-overlooked/191692) | Charges education | Annoyance | one-off | Topic flags that DP charges are often missed by traders/investors. |
| 2026-06-03 | Zerodha | [Transfer charge refunds and no AMC for new accounts](https://tradingqna.com/t/transfer-charge-refunds-and-no-amc-for-new-accounts-for-the-first-year/194683) | Transfer/AMC incentive | Neutral/request | cluster: 11 posts | Zerodha announces transfer charge refunds and first-year AMC waiver, implicitly addressing multi-demat consolidation friction. |
| 2026-03-16 | Angel One | [AngelOne API not working on Oracle Cloud](https://tradingqna.com/t/angelone-api-not-working-on-oracle-cloud-ip-blocked/192367) | API/IP blocking | Annoyance | cluster: 7 posts | User says AngelOne API works locally but not on Oracle Free Tier and suspects Oracle IP ranges are blacklisted. |
| 2025-12-05 | Zerodha, Groww, Angel One | [TOI: broker websites hit by Cloudflare outage](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms) | Outage / login / order delay | Rage | broad social-media wave, news-reported | Report says users flagged login issues, delayed order execution, and platform unavailability during market hours. |
| 2025-09-03 | Zerodha | [ET: Zerodha hit by technical glitch](https://economictimes.indiatimes.com/markets/stocks/news/zerodha-hit-by-technical-glitch-users-face-login-price-update-issues/articleshow/123669430.cms) | Outage / stale prices | Rage | broad social-media wave, news-reported | Report says users could not log in or see updated prices, causing widespread social-media frustration. |
| 2025-11-04 | Zerodha | [ET: Mumbai doctor's withdrawal complaint](https://m.economictimes.com/news/new-updates/hi-dr-nithin-kamath-responds-to-mumbai-doctors-claim-about-the-zerodha-scam/articleshow/125074689.cms) | Withdrawal/payout transparency | Rage | one high-profile social complaint | Investor alleged he could not withdraw Rs 5 crore despite Rs 18 crore shown as withdrawable; Zerodha responded publicly. |
| 2025-06-04 | Zerodha impersonation | [ET: fake Zerodha trading scam](https://economictimes.indiatimes.com/markets/stocks/news/hyderabad-man-duped-of-rs-70-lakh-in-fake-zerodha-trading-scam/articleshow/121619415.cms) | Brand impersonation / fraud | Rage | recurring cyber-scam pattern, not broker fault | User was defrauded by people posing as Zerodha representatives; useful for trust/safety product surface. |
| 2026-01-21 | Shoonya impersonation | [TOI: fake Shoonya Securities scam](https://timesofindia.indiatimes.com/city/mumbai/navi-mumbai-ex-assistant-general-manager-of-steel-company-duped-of-rs-75-lakh-in-online-stock-market-trading-fraud/articleshow/127022889.cms) | Brand impersonation / withdrawal trap | Rage | one news case, not verified broker-client issue | Fraudsters posed as Shoonya Securities, showed virtual profits, then blocked withdrawals demanding taxes/charges. |
| 2026-04-15 | Cross-broker / Sahi positioning | [ET: Sahi F&O trading platform](https://m.economictimes.com/markets/options/why-sahi-is-the-right-platform-for-futures-and-options-trading-in-india/articleshow/130273455.cms) | Market pain / product positioning | Neutral | sponsored/news, not user complaint | Article names common F&O pain points: slow charts in volatile sessions, fragmented screens, no discipline guardrails. Treat as positioning, not independent user evidence. |

## Broker-by-Broker Notes

### Zerodha

Observed pain:

- Recent outage/social-media wave: login and live-price update issues on September 3, 2025; a December 5, 2025 Cloudflare outage also affected Zerodha, Groww, and Angel One.
- High-profile payout confusion: a user claimed Rs 18 crore showed as withdrawable but Rs 5 crore payout was blocked/limited; Zerodha publicly responded.
- TradingQnA feature asks continue to cluster around active-trader speed: one-tap orders, chart trading, trailing SL, reverse/quick order controls, and richer watchlist/API surfaces.
- Charges/AMC/transfer friction appears in TradingQnA, but less rage-filled in accessible corpus than Upstox.

Repeated asks:

- One-tap mobile order placement, chart trading, trailing SL.
- Bulk watchlist management through Kite API and predefined watchlist API access.
- Company logos in watchlists/search, partly because competitors already show them.
- Older recurring Kite thread also contains reverse position, mini trade window, keyboard shortcuts, and showing percentage plus absolute P&L; older than current window.

Switching signals:

- Zerodha users compare missing visual features to Groww/Upstox/Dhan rather than explicitly saying they switched.
- News-reported outages are switching-risk moments, but no directly accessible Reddit switching post was verified.

### Groww

Observed pain:

- In accessible sources, Groww appears mainly in the December 5, 2025 Cloudflare outage report alongside Zerodha and Angel One.
- Search results and existing market context point to fee sensitivity after prior brokerage changes, but recent Reddit/forum evidence could not be directly verified in this environment.

Repeated asks:

- Not enough accessible user-forum evidence in this pass. Indirect competitor comparisons show Groww setting expectations for logos/visual watchlists.

Switching signals:

- Not verified from direct Reddit/forum sources due access limits.

### Angel One

Observed pain:

- December 5, 2025 Cloudflare outage report includes Angel One with login/order-delay/platform-unavailable complaints.
- A March 16, 2026 TradingQnA thread reports AngelOne API failing from Oracle Cloud while working locally, suspected IP block.

Repeated asks:

- API/IP whitelisting transparency and cloud-hosting compatibility.

Switching signals:

- Not verified from direct Reddit/forum sources.

### Upstox

Observed pain:

- Strongest accessible rage corpus. Users complain about system failure/execution anomalies, hidden AMC/withdrawal charges, unresponsive support, deteriorating app/web quality, rejected exits, and holding mismatches.
- The July 2025 "Loosing all hope" thread is a high-signal long-time-user degradation narrative with 25 posts.
- Charges distrust is repeated: zero-AMC accounts receiving charges, withdrawal charges, and unclear F&O/GTT charge calculations.

Repeated asks:

- Faster order management for scalpers: cancel existing same-strike orders while placing new ones.
- Clear order window/square-off rules.
- API data correctness and deprecation clarity.
- Better visibility into withdrawal status.

Switching signals:

- The strongest signal is emotional churn: "lose major users" is explicitly mentioned in thread replies, though no direct "I switched to X" post was accessible.

### Dhan

Observed pain:

- API traders are vocal. The September 2025 DhanHQ auth change thread has 153 posts and 98 replies, dominated by static-IP, token, daily login, Google Sheets, and partner-platform questions.
- March 2026 market-to-limit conversion thread is severe: multiple users report losses, sell legs not executing, and demand compensation.
- Feature request culture is active and responsive; Super Orders flexibility was marked implemented.

Repeated asks:

- Stable API auth with easier token refresh and mobile auth-code generation.
- Clear static-IP behavior; fewer false invalid-IP errors.
- Super Order convert/edit/scale-out/partial-adjust features.
- Chart-in-order page, sorting in GTT/Forever orders, better navigation, logos.
- Charges split by buy/sell side per scrip.

Switching signals:

- Dhan market-order issue includes a direct churn phrase: user is "considering" leaving/alternatives due to websocket/feed vs market price gaps and order behavior.

### Fyers

Observed pain:

- Fyers community pages were not accessible via the same Discourse JSON pattern during this pass, and web search did not surface enough recent forum/Reddit evidence to quote safely.

Repeated asks / switching signals:

- Unverified in accessible corpus. Needs follow-up with authenticated/community-specific access or alternate search index.

### m.Stock

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment. Web search did not surface stable forum threads for m.Stock in the target window.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### Shoonya

Observed pain:

- Accessible recent source is a January 2026 news case involving fraudsters impersonating Shoonya Securities; this is not a verified complaint against the broker's app/service.

Repeated asks / switching signals:

- No direct recent Reddit/forum evidence verified.

### Paytm Money

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### Kotak Neo

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### ICICI Direct

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### HDFC Sky

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### 5paisa

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

### Sahi

Observed pain:

- April 2026 Economic Times coverage positions Sahi against general F&O platform pain points: slow charts, fragmented screens, weak discipline guardrails. This is useful market messaging but not independent community evidence.

Repeated asks / switching signals:

- No direct recent Reddit/forum evidence verified.

### INDmoney

Observed pain:

- No recent, directly quotable Reddit/forum corpus was accessible from this environment.

Repeated asks / switching signals:

- Unverified in accessible corpus.

## Cross-Broker Product Requirements Inferred From Community Pain

| Requirement | Evidence | Severity if missing | Concrete Arrow Trade design response |
|---|---|---|---|
| Live incident transparency | Zerodha/Groww/Angel One outage reports; Upstox/Dhan execution complaints | High | Public status page, in-app incident banner, order-impact classification, post-incident RCA archive. |
| Deterministic order behavior | Dhan market-to-limit conversion; Upstox rejected exits | High | Never silently change order type; show exchange/broker rule before submit; expose "why rejected" with fix action. |
| Market-hours support lane | Upstox unresponsive support and template-reply anger | High | Separate live-trade queue, call-back SLA, ticket state visible in app, escalation to compliance. |
| Charge preview and attribution | Upstox AMC/withdrawal/F&O charge confusion; Dhan buy/sell charges request; Zerodha DP-charge education | High | Pre-order estimated charges, post-trade exact charge breakdown per leg, daily charge digest, contract-note reconciliation. |
| API as product | Dhan API auth mega-thread; Upstox API bad data/deprecation; Zerodha watchlist API asks; AngelOne IP block | High | Versioned API, migration calendar, token lifecycle controls, webhook alerts, clear static-IP diagnostics, sandbox. |
| Active-trader mobile speed | Zerodha one-tap/chart trading/trailing SL; Upstox scalper order management; Dhan Super Orders | High | One-tap guarded order modes, chart trading, trailing SL, quick reverse/cancel/replace, scale-out controls. |
| Holdings reconciliation | Upstox MF missing/reduced quantities; Dhan MF data discrepancy | Medium-high | "As of" timestamps, CDSL/RTA reconciliation state, missing-holding incident flow, user-downloadable audit trail. |
| Fraud/impersonation defense | Fake Zerodha and fake Shoonya scam reports | Medium-high | Verified communication center, anti-scam education in onboarding, official handle registry, report-impersonation flow. |

## Open Gaps and Follow-Ups

- Reddit direct extraction remains the largest gap. To complete the brief literally, run with an authenticated Reddit API token or from a network allowed by Reddit; then query each target subreddit by broker name and pain keywords.
- Broker coverage is uneven because Zerodha, Dhan, and Upstox run accessible communities; several brokers do not expose comparable public forums.
- Search terms to rerun with authenticated Reddit/API access: `broker app down`, `left Zerodha`, `switched from Groww`, `Dhan API`, `Upstox charges`, `Angel One support`, `m.Stock charges`, `Shoonya app`, `Paytm Money demat`, `Kotak Neo app`, `ICICI Direct charges`, `HDFC Sky`, `5paisa app`, `INDmoney broker`, `Sahi F&O`.

