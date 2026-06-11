# Formal Complaint and Outage Evidence for Indian Brokers

Observation date: 2026-06-12 IST  
Preferred recency window: June 2025 to June 2026. Older comparator data is explicitly marked.

## Executive Readout

Formal data corroborates the social-media pain signals in `research/12-social-pain-reddit-forums.md` and `research/13-social-pain-appstores-x.md`.

- NSE's official complaint redressal data shows that even highly scaled brokers still generate hundreds to thousands of formal exchange complaints. In FY2026-27 YTD to 2026-05-31, Upstox had the highest formal complaint count among large brokers at 246 complaints, equal to 1.28 complaints per 10,000 active clients; Groww had 221 complaints but only 0.17 per 10,000 because of its much larger active-client base.
- FY2025-26 current-year complaint filings, from NSE Report 1A last updated 2026-06-05, show the largest raw complaint volumes at Groww 1,611, Angel One 1,313, Upstox 1,057, Motilal Oswal 937, Zerodha 858, Mirae/m.Stock 759, Kotak 734, and ICICI Securities 713.
- Outage evidence is concentrated around Zerodha and shared infrastructure. Press/X-proxy reports document Zerodha Kite incidents on 2025-09-03 and 2026-02-03, plus a 2025-12-05 Cloudflare outage affecting Zerodha, Groww, Angel One, and other brokers.
- Consumer complaint portals are noisy and less formal, but they repeat the same categories: withdrawal/fund-credit failures, app/chart/order failures, account freezes/blocks, hidden charges, and support non-response.
- Regulatory/disciplinary data adds a quantitative penalty signal: NSE Report 4B for FY2026-27 YTD lists monetary penalties for several brokers, including Motilal Oswal Rs 34.88312 lakh, Zerodha Rs 19.31774 lakh, Angel One Rs 4.642 lakh, Upstox/RKSV Rs 3.17 lakh, Groww/Nextbillion Rs 1.369 lakh, and Kotak Rs 0.3 lakh.

## Methodology and Caveats

- Primary formal source: NSE's Complaint / Arbitration Status page and its API, which lists downloadable arbitration/complaint reports. The page says the reports are "As per SEBI circular MRD/DoP/SE/Cir- 10/2009 dated September 03,2009." Sources: [NSE complaint/arbitration status](https://www.nseindia.com/complaints/arbitration-status), [static report page](https://www.nseindia.com/static/invest/arbitration-status), [NSE complaint-arbitration API](https://www.nseindia.com/api/complaint-arbitration).
- NSE Report 1C ratios are official percentages of complaints received against active clients. I also convert them to complaints per 10,000 active clients using `complaints / active clients * 10,000`.
- FY2026-27 means data from 2026-04-01 to 2026-05-31 unless otherwise stated. FY2025-26 Report 1A is full financial-year complaint filings, last updated 2026-06-05.
- NSE's current API exposed FY2026-27 Report 1C and FY2025-26 Report 1A/1B, but not FY2025-26 Report 1C. Therefore FY2025-26 per-broker active-client ratios are marked uncomputable from same-period Report 1C in this pass.
- Broker legal names differ: Groww appears as "Groww Invest Tech Private Limited" in Report 1A and as "Nextbillion Technology Private Limited" in Report 4B; Upstox appears as "Upstox Securities Private Limited" in Report 1C and "RKSV Securities India Private Limited" in Report 4B; Dhan appears as "Raise Securities Private Limited ... (dhan App)" or "Moneylicious Securities Private Limited" depending on report/version.
- Consumercomplaints.in and MouthShut are treated as consumer-sentiment sources, not adjudicated facts.

## NSE Formal Complaint Data

### Available NSE Reports

| Report | Period | Last updated in file | Use in this note | Source |
|---|---:|---:|---|---|
| Report 1A complaints received from clients against trading members | FY2025-26 | 2026-06-05 | Full-year raw complaint filings and complaint-type mix | [isc_report1A_2526.xls](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1A_2526.xls) |
| Report 1C redressal of complaints against trading members | FY2026-27 YTD | 2026-05-31 | Active clients, complaints, redressal, pending, complaint ratio | [isc_report1C_2627.xls](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1C_2627.xls) |
| Report 1C/1B redressal comparator | FY2024-25 | 2026-03-31 | Older baseline for complaint ratios | [isc_report1C_2425.xls](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1C_2425.xls) |
| Report 4B penal actions | FY2026-27 YTD | 2026-05-31 | Penalty count/value signal | [isc_report4B_2627.xls](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report4B_2627.xls) |
| Report 4A penal actions | FY2025-26 | 2026-03-31 | Prior-year penalty baseline | [isc_report4A_2526.xls](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report4A_2526.xls) |

### FY2026-27 YTD Report 1C: Complaints per Active Client

Data period: 2026-04-01 to 2026-05-31. File last updated: 2026-05-31. Source: [NSE Report 1C FY2026-27](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1C_2627.xls).

| Rank by complaints | Broker / TM | Active clients | Complaints | Complaints per 10,000 active clients | Pending with exchange | Redressal rate |
|---:|---|---:|---:|---:|---:|---:|
| 1 | Upstox Securities Private Limited | 1,923,729 | 246 | 1.28 | 121 | 50.8% |
| 2 | Groww Invest Tech Private Limited | 13,059,756 | 221 | 0.17 | 141 | 36.2% |
| 3 | Angel One Limited | 6,684,223 | 205 | 0.31 | 77 | 62.4% |
| 4 | Zerodha Broking Limited | 6,847,049 | 150 | 0.22 | 64 | 57.3% |
| 5 | Motilal Oswal Financial Services Limited | 893,172 | 139 | 1.56 | 67 | 51.8% |
| 6 | Kotak Securities Ltd. | 1,380,379 | 119 | 0.86 | 46 | 61.3% |
| 7 | ICICI Securities Limited | 2,105,295 | 109 | 0.52 | 53 | 51.4% |
| 8 | IIFL Capital Services Ltd. | 328,655 | 96 | 2.92 | 47 | 51.0% |
| 9 | Mirae Asset Capital Markets (India) Private Limited / m.Stock | 218,110 | 73 | 3.35 | 42 | 42.5% |
| 10 | HDFC Securities Ltd. | 1,361,209 | 64 | 0.47 | 42 | 34.4% |
| 17 | Raise Securities Private Limited / Dhan app | 1,061,986 | 28 | 0.26 | 15 | 46.4% |

Market-wide FY2026-27 YTD totals in Report 1C: 45,593,194 active clients across all stock brokers; complaints equal 0.005% of active clients, or about 0.50 per 10,000; overall market redressal rate 51.45%.

Interpretation:

- Raw complaint volume tracks scale, but ratios reveal different risk: Upstox's 246 complaints on 1.92 million clients is a materially higher rate than Groww's 221 on 13.06 million.
- Pending counts are high because this is early-year YTD data. The low redressal rates in May 2026 should not be compared directly with full-year closed FY2024-25 rates.

### FY2025-26 Report 1A: Raw Complaints by Broker

Data period: 2025-04-01 to 2026-03-31, with file updated 2026-06-05. Source: [NSE Report 1A FY2025-26](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1A_2526.xls).

| Rank | Broker / TM | Complaints filed | Top complaint types in file | Status snapshot in file |
|---:|---|---:|---|---|
| 1 | Groww Invest Tech Private Limited | 1,611 | Type V 866; Type IV 361; Type IX 229 | 1,604 resolved; 7 under process |
| 2 | Angel One Limited | 1,313 | Type V 676; Type IX 272; Type IV 225 | 1,300 resolved; 13 under process |
| 3 | Upstox Securities Private Limited | 1,057 | Type V 609; Type IX 228; Type IV 140 | 1,051 resolved; 6 under process |
| 4 | Motilal Oswal Financial Services Limited | 937 | Type V 363; Type IV 313; Type IX 214 | 921 resolved; 16 under process |
| 5 | Zerodha Broking Limited | 858 | Type V 503; Type IX 167; Type IV 99 | 855 resolved; 3 under process |
| 6 | Mirae Asset Capital Markets (India) Private Limited / m.Stock | 759 | Type V 510; Type IX 144; Type IV 71 | 756 resolved; 3 under process |
| 7 | Kotak Securities Ltd. | 734 | Type V 425; Type IV 134; Type IX 116 | 728 resolved; 6 under process |
| 8 | ICICI Securities Limited | 713 | Type V 366; Type IX 146; Type IV 124 | 709 resolved; 4 under process |
| 9 | IIFL Capital Services Ltd. | 446 | Type V 209; Type IX 101; Type IV 76 | 444 resolved; 2 under process |
| 10 | HDFC Securities Ltd. | 418 | Type V 224; Type IX 78; Type IV 62 | 415 resolved; 3 under process |
| 17 | Raise Securities Private Limited / Dhan app | 179 | Type V 85; Type IV 39; Type IX 38 | 174 resolved; 5 under process |
| 22 | Fyers Securities Private Limited | 136 | Type V 73; Type IX 26; Type IV 22 | 132 resolved; 4 under process |

Uncomputable item: FY2025-26 complaints per 10,000 active clients by broker are not computed from same-period NSE Report 1C because the current NSE API did not expose FY2025-26 Report 1C. Using FY2026-27 active-client counts against FY2025-26 complaints would be a mismatched-period ratio.

### Older Baseline: FY2024-25 Report 1C Ratios

This is outside the preferred 12-month window but useful as the nearest complete formal active-client ratio baseline. Source: [NSE Report 1C/1B FY2024-25](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report1C_2425.xls).

| Broker / TM | Active clients | Complaints | Complaints per 10,000 active clients | Redressal rate |
|---|---:|---:|---:|---:|
| Angel One Limited | 7,577,878 | 2,008 | 2.65 | 100.0% |
| Groww Invest Tech Private Limited | 12,921,210 | 1,994 | 1.54 | 100.0% |
| Mirae Asset Capital Markets (India) Private Limited / m.Stock | 518,180 | 1,206 | 23.27 | 99.8% |
| Motilal Oswal Financial Services Limited | 1,014,875 | 1,078 | 10.62 | 100.0% |
| Zerodha Broking Limited | 7,888,964 | 1,075 | 1.36 | 99.9% |
| ICICI Securities Limited | 1,946,882 | 1,067 | 5.48 | 100.0% |
| Kotak Securities Ltd. | 1,484,038 | 1,065 | 7.18 | 100.0% |
| HDFC Securities Ltd. | 1,525,058 | 814 | 5.34 | 99.9% |
| Upstox Securities Private Limited | 2,747,330 | 735 | 2.68 | 100.0% |
| Paytm Money Ltd. | 664,294 | 354 | 5.33 | 100.0% |

## NSE Penal Action Signal

Source: [NSE Report 4B FY2026-27](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report4B_2627.xls), last updated 2026-05-31. This report covers penal actions against trading members during FY2026-27 YTD.

| Broker / TM | Complaints in Report 4B | Penal orders for others | Monetary penalties for others, Rs lakh | Arbitration awards against |
|---|---:|---:|---:|---:|
| Motilal Oswal Financial Services Limited | 139 | 1 | 34.88312 | 0 |
| Zerodha Broking Limited | 150 | 2 | 19.31774 | 0 |
| Angel One Limited | 205 | 5 | 4.642 | 0 |
| RKSV Securities India Private Limited / Upstox | 246 | 6 | 3.17 | 0 |
| Nextbillion Technology Private Limited / Groww | 221 | 4 | 1.369 | 0 |
| 5paisa Capital Limited | 23 | 3 | 1.292 | 0 |
| Kotak Securities Ltd. | 119 | 1 | 0.3 | 0 |
| Mirae Asset Capital Markets (India) Private Limited / m.Stock | 73 | 3 | 0.279 | 0 |
| IIFL Securities Limited | 96 | 2 | 0.5 | 0 |
| Moneylicious Securities Private Limited / Dhan legacy entity | 28 | 4 | 0.172 | 0 |

Interpretation:

- These are exchange disciplinary/penalty signals, not necessarily complaint-specific penalties. The file separates "for complaints" and "for others"; the rows above show penalties under "for others."
- The presence of penalties for large, modern digital brokers supports the broader point that broker operational/compliance pain is not just social-media noise.

## SEBI SCORES and SMART ODR

| Source / channel | What was verified | Quantification status | Notes |
|---|---|---|---|
| SEBI SCORES | SCORES remains the formal SEBI investor grievance system, and NSE's complaint mechanism routes through exchange/IGRC/arbitration disclosures. | Unverified for broker-level June 2025-June 2026 in this pass | I did not find a current, broker-level SCORES disposal table for Zerodha/Groww/Angel/Upstox/Dhan in accessible official pages. Treat as follow-up if SEBI publishes monthly or annual category tables. |
| SMART ODR | NSE links to online dispute resolution as the mechanism for filing complaints; [NSE online dispute resolution page](https://www.nseindia.com/complaints/online-dispute-resolution) and SMART ODR login are visible in NSE navigation. | Unverified/uncomputable | I did not find published broker-level or market-wide SMART ODR volume tables for June 2025-June 2026. Marked uncomputable from public sources found. |

## Documented Outages and Glitches

### Press/X-Proxy and Status Evidence

| Date | Broker(s) | What broke | Duration | User impact | Broker / infra response | Source |
|---|---|---|---|---|---|---|
| 2026-02-03 | Zerodha Kite | Forced logouts, login failures, incorrect portfolio data, chart settings reset, delayed price updates. | Not quantified in article. | During market hours, users said they could not enter/exit positions at critical moments. | Zerodha responded on X that teams were looking into the issue and would update users. | [Economic Times, 2026-02-03](https://m.economictimes.com/markets/stocks/news/zerodha-down-traders-flag-multiple-issues-company-responds/articleshow/127877293.cms) |
| 2025-12-05 | Zerodha, Groww, Angel One, and other Cloudflare-dependent brokers/fintechs | Login issues, delayed order execution, platform unavailability tied to Cloudflare outage. | Cloudflare incident reported around 8:47 UTC for about 25 minutes; some reports mention lingering issues. | Market-hours disruption across major Indian broker platforms. | Brokers pointed to Cloudflare. Zerodha's Nithin Kamath apologized, cited over-reliance on one internet backbone, said Zerodha was diversifying infra, and pointed users to Kite Backup over WhatsApp for exits. | [TOI, 2025-12-05](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms), [ET Zerodha response](https://m.economictimes.com/markets/stocks/news/cloudflare-outage-nithin-kamath-apologises-for-kite-disruption-recommends-whatsapp-backup-to-exit-trades/articleshow/125789808.cms), [TOI Zerodha response](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-ceo-nithin-kamath-apologises-for-cloudflare-outage-with-a-promise-to-users-we-are-actively-/articleshow/125788977.cms), [Windows Central/Cloudflare timing](https://www.windowscentral.com/software-apps/cloudflare-is-down-causing-outages-at-x-openai-and-even-taking-some-multiplayer-games-offline) |
| 2025-09-03 | Zerodha Kite | Login problems and stale/incorrect price updates around market open. | Not quantified in articles. | Social-media complaint wave; traders raised concerns about inability to act on live prices. | Zerodha acknowledged a glitch affecting price updates for some users. | [Economic Times, 2025-09-03](https://economictimes.indiatimes.com/markets/stocks/news/zerodha-hit-by-technical-glitch-users-face-login-price-update-issues/articleshow/123669430.cms), [TOI, 2025-09-03](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-faces-outage-company-acknowledges-glitch/articleshow/123670091.cms) |
| 2026-02-03 | Upstox | User-reported system failure/execution anomaly in NIFTY options. | User forum, not a formal outage duration. | A user alleged buy order executed at a much higher price than funds/margin and said multiple customers reported similar problems. | Community thread; no formal compensation policy found in accessible source. | [Upstox Community, 2026-02-13 thread about 2026-02-03](https://community.upstox.com/t/complaint-regarding-system-failure-on-3-february-2026/14094) |
| 2026-03-09 | Dhan | Market orders automatically converted to limit orders; sell legs allegedly not executed. | User forum, not a formal outage duration. | Multiple users claimed missed exits/losses and asked for compensation. | Dhan community discussion; no public compensation amount verified. | [MadeForTrade/Dhan, 2026-03-09](https://madefortrade.in/t/market-orders-automatically-converted-to-limit-order/61603) |

### Outage Counts in the Window

| Broker | Documented press/status/forum incidents found, June 2025-June 2026 | Severity | Notes |
|---|---:|---|---|
| Zerodha | 3 | Critical | 2025-09-03, 2025-12-05, 2026-02-03. Strongest press/X corroboration. |
| Groww | 1 | Critical | 2025-12-05 Cloudflare incident; otherwise app-store complaints exist but formal outage record not found. |
| Angel One | 1 | Critical | 2025-12-05 Cloudflare incident; otherwise store/support complaints and NSE formal complaint volume. |
| Upstox | 1 forum-documented system-failure thread | Critical but unverified as platform-wide outage | Formal NSE data shows high complaint ratio YTD. |
| Dhan | 1 forum-documented order-behavior incident | Critical but unverified as platform-wide outage | Strong API/order-semantics pain in community, lower formal complaint count. |
| Fyers | 0 press/status incidents found | Unverified | App-store/chart/support pain exists; no formal outage report found in this pass. |
| m.Stock | 0 press/status incidents found | Unverified | Store and NSE formal complaints show pain; no outage record found in press/status pages. |

## Consumer Complaint Portals

### Consumercomplaints.in

Source pages are useful for category patterns and complaint counts but are not adjudicated. Search pages also show historical noise and occasional scam-recovery spam, so I use them qualitatively.

| Broker | Portal count / search evidence | Recent/category pattern observed | Source |
|---|---:|---|---|
| Zerodha | 541 complaints on company page; search result page says 973 matches for "zerodha." | Recent page samples include 2026-05 account blocked/resolved, 2026-01 no payment, 2025-10 exit issue, 2025-05 kill-switch loss, plus older fund-credit and chart-visibility issues. | [Zerodha company page](https://www.consumercomplaints.in/zerodha-b114862), [Zerodha search](https://www.consumercomplaints.in/?search=zerodha) |
| Angel One / Angel Broking | Company page exists as Angel Broking; search results include account suspension, funds debited but not credited, payout delay, referral/reward issues, and alleged loss/order problems. | Fund credit/payout, account suspension, service/support, rewards/referrals, execution/loss allegations. | [Angel Broking company page](https://www.consumercomplaints.in/angel-broking-b101395), [Angel One search](https://www.consumercomplaints.in/?search=angel+one) |
| Groww | Search page accessible but company-page id not verified in this pass. | Unverified from this portal; use app-store/NSE evidence instead. | [Groww search](https://www.consumercomplaints.in/?search=groww) |
| Upstox | Search page accessible but company-page id not verified in this pass. | Unverified from this portal; use NSE, app-store and Upstox Community evidence instead. | [Upstox search](https://www.consumercomplaints.in/?search=upstox) |
| Dhan | Search term is noisy because "dhan" matches banks, schemes, and other brands. | Not usable without more precise entity matching. | [Dhan search](https://www.consumercomplaints.in/?search=dhan) |
| Fyers | Sparse/noisy portal results. | Not enough verified portal evidence in this pass. | [Fyers search](https://www.consumercomplaints.in/?search=fyers) |

### MouthShut

MouthShut was not quantitatively scraped in this pass. Treat it as a qualitative follow-up source for broker-rating trend and review category coding. This is marked unverified/uncomputable for current quantitative tables.

## Regulatory and Press Signals of Systemic Pain

| Date | Signal | Quantification | Why it matters | Source |
|---|---|---:|---|---|
| 2026-05-31 | NSE Report 4B FY2026-27 YTD penalties against trading members. | Large-broker examples: Motilal Oswal Rs 34.88312 lakh, Zerodha Rs 19.31774 lakh, Angel One Rs 4.642 lakh, Upstox/RKSV Rs 3.17 lakh, Groww/Nextbillion Rs 1.369 lakh. | Confirms exchange-level disciplinary/penalty surface exists alongside complaint counts. | [NSE Report 4B FY2026-27](https://nsearchives.nseindia.com/miscellaneous/ArbitrationReports/isc_report4B_2627.xls) |
| 2025-07-07 | SEBI/press-reported F&O loss study. | Press reports say 91% of individual F&O traders lost money in FY2024-25 despite SEBI curbs. | Explains why broker outages, stale prices, order failures, margin errors, and charges feel existential to active traders: they operate in a loss-prone segment. | [Economic Times](https://economictimes.indiatimes.com/markets/stocks/news/91-of-individual-fo-traders-lost-money-in-fy25-despite-sebi-curbs-study/articleshow/122302956.cms), [TOI](https://timesofindia.indiatimes.com/business/india-business/sebi-study-flags-high-risk-trading-trend-91-individual-traders-posted-net-losses-in-fy25-turnover-dips-after-oct-2024-curbs-but-volumes-still-high-vs-two-years-ago/articleshow/122304141.cms) |
| 2025-12-05 | Cloudflare outage exposed concentration risk in broker infra. | Cloudflare outage roughly 25 minutes by one technical report; affected Zerodha, Groww, Angel One and broader internet services. | Broker reliability is partly third-party infrastructure risk. Arrow should design backup order/exit channels and transparent dependency health. | [TOI broker outage](https://timesofindia.indiatimes.com/technology/tech-news/zerodha-groww-and-other-major-stocker-broker-websites-hit-by-cloudflare-outage-go-offline/articleshow/125786127.cms), [ET Zerodha response](https://m.economictimes.com/markets/stocks/news/cloudflare-outage-nithin-kamath-apologises-for-kite-disruption-recommends-whatsapp-backup-to-exit-trades/articleshow/125789808.cms) |
| 2025-11-04 | High-profile Zerodha withdrawal/payout dispute in press. | User alleged Rs 18 crore withdrawable shown, Rs 5 crore payout blocked/limited; Zerodha responded publicly. | Even if broker response is valid, the public pain category is payout transparency and ledger trust. | [Economic Times](https://m.economictimes.com/news/new-updates/hi-dr-nithin-kamath-responds-to-mumbai-doctors-claim-about-the-zerodha-scam/articleshow/125074689.cms) |

## Broker-Level Synthesis

| Broker | Formal complaint signal | Outage/glitch signal | Consumer/social corroboration | Arrow product implication |
|---|---|---|---|---|
| Zerodha | FY2026-27 YTD: 150 complaints, 0.22 per 10k active clients; FY2025-26 Report 1A: 858 complaints; NSE FY2026-27 penalty Rs 19.31774 lakh. | Three documented incidents: 2025-09-03, 2025-12-05, 2026-02-03. | Consumercomplaints.in 541 company-page complaints; app-store/social corpus shows stale price, order rejection, IPO visibility, charges, payout confusion. | Reliability/status transparency, stale-data warnings, backup exit channel, payout ledger clarity. |
| Groww | FY2026-27 YTD: 221 complaints, 0.17 per 10k; FY2025-26 Report 1A: 1,611 complaints, highest raw count; NSE penalty Rs 1.369 lakh under Nextbillion. | 2025-12-05 Cloudflare outage. | Store reviews in prior research show slippage, chart-price mismatch, spam/OTP, high charges, support. | Scale makes raw complaint volume large; need order-price parity and support triage. |
| Angel One | FY2026-27 YTD: 205 complaints, 0.31 per 10k; FY2025-26 Report 1A: 1,313 complaints; NSE penalty Rs 4.642 lakh. | 2025-12-05 Cloudflare outage. | Consumercomplaints and app-store samples show support, account/device, funds not credited, negative balance, order-loss allegations. | Strong support and fund-credit reconciliation differentiator. |
| Upstox | FY2026-27 YTD: 246 complaints, 1.28 per 10k, highest raw count among top brokers; FY2025-26 Report 1A: 1,057 complaints; NSE penalty Rs 3.17 lakh under RKSV. | 2026-02-03 user-reported system failure thread; no formal press outage found beyond Cloudflare not specifically naming Upstox in retrieved source. | Prior research shows hidden AMC/withdrawal charges, unresponsive support, execution anomalies, app/web quality decline. | Publish critical-ticket SLA, charge ledger, order audit trail, and incident RCA. |
| Dhan | FY2026-27 YTD: 28 complaints, 0.26 per 10k under Raise; FY2025-26 Report 1A: 179 complaints; NSE penalty Rs 0.172 lakh under Moneylicious. | 2026-03-09 market-to-limit conversion thread. | Community evidence is API-heavy: token/static-IP/auth, market order semantics, compensation demands. | API versioning, deterministic order semantics, machine-readable incidents/webhooks. |
| Fyers | FY2025-26 Report 1A: 136 complaints. FY2026-27 Report 1C not in top 20 rows shown. | No formal outage found. | Store/review corpus shows chart regressions, support, holdings visibility. | Chart reliability and visible sync status. |
| m.Stock / Mirae | FY2026-27 YTD: 73 complaints, 3.35 per 10k; FY2025-26 Report 1A: 759 complaints. | No formal outage found. | Store corpus shows withdrawal delays, hidden/quarterly charges, crash/exit failures. | Fee disclosure and trade-exit reliability are the wedge. |

## Open Items

- FY2025-26 Report 1C: not exposed via the NSE API during this pass. If obtained, recompute full-year per-10,000 active-client ratios for the same period.
- SEBI SCORES: broker-level current-year complaint/disposal stats were not found in accessible official sources. Requires SEBI report scrape or RTI/official dataset if not published.
- SMART ODR: public volume tables were not found; mark uncomputable until SMART ODR or MIIs publish statistics.
- MouthShut: not quantitatively scraped. Useful next pass: collect rating counts, latest 50 reviews per broker, and code categories.
- Broker status pages/postmortems: Zerodha press responses were found; public postmortems/status pages for Groww, Angel One, Upstox, Dhan, Fyers were not verified in this pass.
