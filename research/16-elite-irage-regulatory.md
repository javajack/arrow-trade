# Arrow Elite (Algo Cloud): iRage Validation and Broker-Registered Algo Mechanics

Research date: 2026-06-19  
Scope: domestic Indian securities/commodity markets only: NSE, BSE and MCX. This note deliberately excludes GIFT City, USD/global markets, PMS and AIF structuring. It is product/regulatory research, not legal advice. Items marked **Unverified** could not be confirmed from a primary source in this pass.

## Executive answer

| Question | Current answer | Confidence |
|---|---|---:|
| Is Arrow visibly connected to iRage? | Yes. iRage's official site links to "ARROW Product of iRage" and `arrow.trade` from its "What we do" and "Who we are" pages ([iRage What We Do](https://irage.in/what_do_we_do.php), [iRage Who We Are](https://irage.in/who_we_are.php)). | High |
| What is the regulated broking entity? | The footer and compliance documents identify **iRage Broking Services LLP**, LLP identification number **AAD-8258**, registered office at Gift City, Gandhinagar ([iRage home](https://irage.in/), [iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf)). | High |
| Is iRage a SEBI-registered stock broker? | Yes, iRage's contract-note template states **SEBI Registration No. INZ000011262** and says proprietary trading may be done in cash and derivatives at **NSE, BSE and MCX** ([iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf)). I did not independently retrieve the matching SEBI stock-broker registry row, so the registration number is verified from iRage's own statutory document, not from SEBI's broker registry. | Medium-High |
| Is iRage SEBI-registered as a Research Analyst? | Yes. SEBI's Research Analyst list shows **Irage Broking Services LLP**, registration **INH000025425**, contact person **Gaurav Raizada**, validity **Mar 12, 2026 - Perpetual** ([SEBI RA registry search](https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&name=irage)). | High |
| Is iRage an HFT / market-making firm? | Yes, from iRage's own site. It says iRage runs automated high-frequency strategies, including liquidity providing/market-making, arbitrage liquidity-consuming and statistical arbitrage, and manages millions of orders/trades daily ([iRage What We Do](https://irage.in/what_do_we_do.php)). It also discloses designated market-maker status in NSE silver options ([iRage Disclosure PDF](https://irage.in/assets/Disclosure.pdf)). | High |
| Is Quantsapp an iRage sister concern? | **Do not assert.** I found no primary source in this pass showing Quantsapp is an iRage sister concern, group company, associate or venture. iRage's own "Ventures" section names **QuantInsti**, not Quantsapp ([iRage Who We Are](https://irage.in/who_we_are.php)). | High for "unverified / do not assert" |
| Can a client use a broker-generated, exchange-registered algo without registering their own strategy? | Yes, if the algo is genuinely broker-generated/provider-generated and already registered by the broker through the exchange process. The client still needs broker onboarding, consent, API/static-IP/access controls, risk controls, and order tagging. The client's separate strategy registration is required only for **client-developed** algos above the specified OPS threshold. | High for NSE; BSE operational circular details unverified |
| Does black-box treatment apply to broker-provided strategies? | Yes, if the client cannot know/replicate the logic. The algo provider must be SEBI-registered as an RA, maintain a detailed research report for each such algo, confirm that report to the exchange, and fresh-register on logic changes ([SEBI Feb 4, 2025 circular](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | High |
| Can Arrow Elite show past/expected returns? | No. SEBI's Sep 2, 2022 circular barred brokers providing algo services from directly or indirectly referring to past or expected returns/performance of algos/strategies, including when associated with algo platforms ([NSE/COMP/53555 carrying SEBI circular](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf)). | High |

## 1. iRage / iRageCapital validation

### Verifiable corporate and regulatory facts

| Item | Verified fact | Source | Notes |
|---|---|---|---|
| Legal broking entity | **iRage Broking Services LLP** | iRage footer lists "iRage Broking Services LLP" and LLP ID **AAD-8258** ([iRage home](https://irage.in/)). | The brand is commonly styled "iRage" / "iRageCapital"; regulated documents use iRage Broking Services LLP. |
| LLP ID | **AAD-8258** | iRage footer and ECN template ([iRage home](https://irage.in/), [iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf)). | iRage ECN labels this field "CIN", but for LLP it is the LLP identification number. |
| SEBI stock-broker registration | **INZ000011262** | iRage contract-note / ECN template ([iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf)). | **Partly independently unverified:** the exact SEBI broker registry row was not retrieved, but the registration appears in a statutory client document. |
| Exchange / segment footprint | ECN template references NSECAP, NSEFNO and says proprietary trading in cash and derivatives at **NSE, BSE and MCX** | [iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf). | iRage policy document also describes clients trading on NSE, BSE, MCX and NCDEX ([Policies & Procedures PDF](https://irage.in/assets/Policies-Procedures.pdf)); Arrow Elite scope should stay NSE/BSE/MCX per this task. |
| SEBI Research Analyst registration | **INH000025425**, validity **Mar 12, 2026 - Perpetual** | [SEBI RA registry search](https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&name=irage). | This is important because black-box retail algos require RA status. |
| RA investor-facing compliance | iRage publishes RA investor charter and RA complaint-status page | [iRage RA investor charter](https://irage.in/assets/INVESTOR-CHARTER-IN-RESPECT-OF-RAs.pdf), [iRage RA complaint status](https://irage.in/investor-complaint-status-ra.php). | Complaint page showed March 2026 RA complaint status as zero complaints in the crawled page. |
| Retail broker investor compliance | iRage publishes investor complaint status and investor charters | [iRage investor complaint status](https://irage.in/investor-complaint-status.php), [iRage Investor Charter PDF](https://irage.in/assets/Investor-Charter.pdf). | May 2026 page showed zero stock-broker complaints in the crawled page. |
| Arrow linkage | iRage site links to "ARROW Product of iRage" and `arrow.trade` | [iRage What We Do](https://irage.in/what_do_we_do.php), [iRage Who We Are](https://irage.in/who_we_are.php). | This is a primary-source brand/product linkage. |
| Proprietary algo/HFT reputation | iRage says it runs automated high-frequency liquidity providing, arbitrage and statistical-arbitrage strategies; started after DMA introduction in India in 2009 | [iRage What We Do](https://irage.in/what_do_we_do.php), [iRage Who We Are](https://irage.in/who_we_are.php). | This is self-described but primary-source. |
| Market-maker status | iRage discloses it is a **designated market maker in options contracts of silver at National Stock Exchange India** | [iRage Disclosure PDF](https://irage.in/assets/Disclosure.pdf). | Useful for conflict disclosure. Exact contract program/circular not independently retrieved. |

### Not verified and should not be asserted

| Claim | Status | Treatment in Arrow Elite docs |
|---|---|---|
| "Quantsapp is an iRage sister concern" | **Unverified and contradicted by absence from iRage's own ventures page.** | Do not say this. If needed: "No primary source found establishing Quantsapp as an iRage sister concern." |
| iRage ownership/control structure beyond named partners/leadership | **Partly verified only at website bio level.** | You may cite the iRage "Who We Are" page for named partners/leadership, but do not infer shareholding or group control. |
| Exact NSE/BSE/MCX member codes and membership categories | **Unverified in this pass from exchange member directories.** | Use INZ000011262 and the exchange/segment references in iRage client documents; confirm member codes with exchange member portals before filing compliance material. |
| Exact designated-market-maker scheme circular for silver options | **Unverified beyond iRage disclosure PDF.** | Treat market-maker status as disclosed by iRage, not independently exchange-verified. |

## 2. Broker-pre-registered algos: can clients subscribe without own strategy registration?

### The core legal distinction

SEBI's Feb 4, 2025 circular creates three relevant sources of retail algo orders:

| Algo source | Who registers? | Client needs separate strategy registration? | Key obligations |
|---|---|---:|---|
| Client self-developed algo within TOPS | No formal strategy registration, but broker controls still apply | No | Static IP/API key/2FA, broker detection/tagging, generic algo treatment under NSE modalities. |
| Client self-developed algo above TOPS | Client registers through broker | Yes | SEBI says self-developed tech-savvy retail algos are registered through the broker **only if they cross** the specified OPS threshold ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). |
| Broker-generated algo | Broker obtains exchange permission for each algo and tags orders with exchange ID | No separate client strategy registration, if client uses the broker's registered strategy as offered | Broker remains principal, responsible for exchange permission, tagging, risk controls, surveillance, complaints and change approval. |
| Empanelled provider/vendor algo | Provider must be exchange-empanelled; broker onboards/due-diligences; strategy registered through exchange process | No separate client strategy registration, if the client subscribes to the registered provider strategy | Provider is broker's agent; broker handles complaints and monitoring. Black-box provider must be RA. |

SEBI's wording is the basis for the "broker registers once, many clients subscribe" mechanics:

| SEBI obligation | Product meaning for Arrow Elite |
|---|---|
| Brokers are the **principal** for API algo trading; algo provider/vendor is the broker's **agent** when using the broker API ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Arrow cannot tell clients "this is between you and the strategy vendor." Arrow owns broker-level compliance. |
| All algo orders through broker APIs to algo providers must be tagged with a unique identifier from the exchange ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Strategy subscription must map each live order to exchange algo ID and broker correlation ID. |
| Self-developed tech-savvy retail algos are registered through the broker **only if** they cross the OPS threshold ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | This is the carve-out for personal algos. It does not impose a client registration requirement where the client is merely using a broker/provider registered strategy. |
| Broker facility may be provided only after obtaining exchange permission **for each algo**; broker must seek exchange approval for modification/change to approved algos ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Arrow Elite cannot launch 100+ strategies as a purely internal product toggle. Each algorithm needs exchange approval and an ongoing change-control process. |
| Algo providers must be empanelled with exchanges; brokers must do due diligence before onboarding them ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | If iRage/Arrow is the provider, registration can sit inside the broker/RA governance stack; if third-party, exchange empanelment and due diligence are mandatory. |

### NSE implementation details relevant to the answer

| NSE implementation item | Product consequence | Source |
|---|---|---|
| Initial TOPS is **not exceeding 10 orders per second per exchange per segment**, measured by broker-server calendar clock second. | A client-developed strategy above this threshold needs exchange registration. A broker-generated strategy needs registration regardless of TOPS because it is not the client's personal low-OPS algo. | [NSE/INVG/67858, May 5, 2025](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf). |
| Static IP applies to client-generated, vendor-generated and broker-generated algos; for broker-generated algos, static IP may be the broker's or the client's. | Arrow Elite Algo Cloud can use broker static egress, but must still maintain client-level traceability, API/session controls and order audit. | [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf). |
| Broker may charge API service fees/subscription charges over brokerage, including exchange registration charges recovered from client. | A premium subscription for Arrow Elite is feasible, but fees must be disclosed and cannot be tied to return promises. | [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf). |
| NSE detailed modalities in the existing Arrow research show generic algo ID **99999** for unregistered within-10-OPS client algos and normal/execution algo registration TATs of T+10/T+7 working days. | Product must separate "subscribe to registered broker algo" from "bring your own self-developed strategy." | [Arrow research summary of NSE/INVG/69255](research/10-algo-regulation.md), [NSE/INVG/69255 zip](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip). |

### BSE implementation status

**Unverified from primary BSE notices in this pass.** SEBI's circular applies to all recognized stock exchanges, so BSE members must implement aligned controls. I could not retrieve BSE's equivalent operational notice/circular number, TAT table, generic ID treatment, or file formats from public search. For Arrow Elite, assume the NSE standard as the design baseline and obtain BSE member circulars from the broker compliance portal before operational launch.

## 3. Black-box vs white-box broker-provided strategies

### Definitions and consequences

| Category | SEBI definition | Arrow Elite treatment |
|---|---|---|
| White-box / execution algo | Logic is disclosed and replicable; rules, decision process and underlying logic are accessible and understandable to users ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Suitable for execution tooling: TWAP/VWAP/slicer/rebalancer/spread executor where user understands the rule. Exchange registration still required if broker-generated. |
| Black-box algo | Logic is not known to the user and is not replicable ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | Most "HFT-style alpha", market-making, scalping, statistical arbitrage, signal-following and proprietary parameterized strategies will likely be black-box unless fully disclosed. |

### RA and research report requirement

For black-box algos, SEBI says the algo provider shall:

| Obligation | Arrow Elite implementation |
|---|---|
| Register as a **Research Analyst** | iRage Broking Services LLP already appears in SEBI's RA list as **INH000025425** ([SEBI RA registry search](https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&name=irage)). Maintain renewal/status monitoring and show registration in disclosures. |
| Maintain a detailed research report **for each such algo** | Create an internal RA-controlled research dossier per strategy: objective, universe, instruments, signal families, risk controls, assumptions, model limitations, stress behavior, conflicts, capacity limits, and approval record. |
| Confirm to exchanges that such report has been maintained | Add this as a filing checklist item for every black-box strategy registration. |
| On any logic change, register the algo as a **fresh algo** and maintain a detailed research report for the new algo | Treat alpha model changes, signal weighting changes, entry/exit logic changes, risk-model changes that alter trade decisions, and venue/leg logic changes as fresh registration triggers. Cosmetic UI copy, fee display or user risk cap changes may be separate, but compliance must decide. |

### Practical line between "parameter change" and "logic update"

| Change | Likely treatment | Rationale |
|---|---|---|
| User sets max capital, daily loss cap, allowed instruments, stop after N losses | Usually risk parameter, not strategy logic, if bounded by the registered algorithm design | Should still be logged and enforced by RMS. |
| Broker changes the signal, ranking model, fair-value model, order placement logic, hedge logic or alpha filters | Logic update; fresh registration for black-box | SEBI explicitly requires fresh registration when black-box logic changes. |
| Broker changes latency infrastructure but not decision logic | Re-registration/approval may still be needed under exchange system-change rules | Confirm under NSE/BSE operational modalities. |
| Broker adds a new segment/exchange/instrument family | Likely modification or fresh registration depending on exchange forms | Must be pre-cleared before launch. |
| Broker only updates explanatory text without changing algo logic | Usually no fresh algo, but maintain versioned disclosure and research report | Must avoid return claims. |

## 4. 2022 SEBI return-claim ban and compliant quality display

### What SEBI banned

SEBI circular **SEBI/HO/MIRSD/DOP/P/CIR/2022/117**, dated **September 2, 2022**, was circulated by NSE as **NSE/COMP/53555**. It observed that unregulated platforms were offering algorithmic strategies/services to investors and making claims of high returns, ratings and rankings that could lead to mis-selling. It directed that stock brokers providing algo services shall not:

| Ban | Product meaning |
|---|---|
| Directly or indirectly refer to past or expected returns/performance of algorithms/strategies | No CAGR, monthly return, "expected profit", "backtested return", "top-return strategy", "win rate to sell subscription", or creator leaderboard ranked by returns. |
| Associate with platforms providing such references to past or expected returns/performance | If Arrow lists third-party strategies, the partner's landing pages, screenshots, push messages, videos and marketplace cards must also be compliant. |
| Use ratings or rankings that imply performance | Avoid "5-star alpha", "best performer", "highest ROI" and similar labels. |

Source: [NSE/COMP/53555 carrying SEBI Sep 2, 2022 circular](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf). NSE required member undertakings by Oct 10, 2022 via [NSE/COMP/53765](https://nsearchives.nseindia.com/content/circulars/COMP53765.zip) and reiterated the restriction on Jan 19, 2024 via [NSE/COMP/60341](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf).

### What Arrow Elite can show instead

| Allowed quality signal | How to present without return claims | Guardrails |
|---|---|---|
| Strategy category and mechanism | "Execution: VWAP participation"; "Options hedged intraday spread"; "Market-neutral pair monitor" | If black-box, do not disclose proprietary details, but disclose enough risk and product behavior for informed consent. |
| Risk controls | Max order size, max open quantity, max position value, max intraday loss halt, order-price protection, legging rules, kill-switch design | These are controls, not performance claims. |
| Market / instrument scope | NSE/BSE/MCX, segment, symbol universe, liquidity screens, expiry restrictions | Do not imply "selected for high returns." |
| Operational metrics | Uptime, order reject rate, median broker-side processing time, strategy halt counts, kill-switch events, RMS rejects | Ensure latency claims are measured, reproducible and not framed as profit edge. |
| Live transparency | User's own live order/trade log, slippage vs user's submitted limit/protection price, fills, brokerage/statutory charges, drawdown of user's realized/unrealized P&L | User-specific realized data can be shown after execution as account reporting, not marketing. |
| Backtest diagnostics | Stress windows, assumptions, sample period, survivorship bias warnings, transaction-cost model, slippage sensitivity | Avoid headline returns, expected returns and ranking by performance. Use as research record and suitability/risk education, not advertising. |
| Capacity and liquidity warnings | "Strategy may be paused when order book depth is insufficient"; "fills may differ by queue and liquidity" | Critical for HFT-style strategies to avoid alpha-decay mis-selling. |
| Disclaimers | "No assurance of profit"; "losses can exceed expected slippage"; "strategy may stop trading"; F&O loss-risk disclosure | Disclaimers do not cure return claims; they support risk explanation only. |

### Prohibited examples for Arrow Elite copy

| Do not say | Safer alternative |
|---|---|
| "Backtested 38 percent annual return" | "Backtest available in internal research dossier; client-facing material shows methodology limits, risk controls and assumptions without return claims." |
| "Expected monthly profit: 3-5 percent" | "No expected return is represented. Strategy may produce losses and may be halted by risk controls." |
| "Top 10 performing strategies" | "Strategies grouped by instrument, holding period, automation type and risk-control profile." |
| "HFT edge from iRage prop desk for clients" | "Broker-registered automated strategies with disclosed conflicts, capacity controls and information barriers." |

## 5. Suitability and accredited-investor relevance

### Accredited investor framework

SEBI's accredited-investor framework is real, but it is not a general permission slip to sell leveraged black-box retail algos. The core framework was operationalized by **SEBI/HO/IMD/IMD-I/DF9/P/CIR/2021/620**, dated **August 26, 2021** ([SEBI Accredited Investors modalities](https://www.sebi.gov.in/legal/circulars/aug-2021/circular-on-modalities-for-implementation-of-the-framework-for-accredited-investors_52116.html)). SEBI separately created relaxations for investment advisory services to accredited investors via **SEBI/HO/IMD/IMD-I DOF1/P/CIR/2021/694**, dated **December 21, 2021** ([SEBI IA services for Accredited Investors](https://www.sebi.gov.in/legal/circulars/dec-2021/investment-advisory-services-for-accredited-investors_54830.html)).

| Product question | Answer for Arrow Elite |
|---|---|
| Can Arrow use "accredited investor only" as a safer segmentation? | Yes, as an additional eligibility filter for high-ticket/complex strategies, if accreditation is verified through the prescribed framework. |
| Does accreditation remove retail algo registration, RA, research-report, return-claim, broker-principal, static-IP or RMS duties? | No. Those duties come from the stock-broker/algo framework and continue to apply. |
| Does accreditation allow PMS/AIF-like discretionary portfolio management? | No for this product scope. The task explicitly excludes PMS/AIF; Arrow Elite should remain a broker-executed strategy subscription / algo facility, not pooled or discretionary portfolio management. |
| Does accreditation solve F&O suitability? | No. It helps evidence sophistication/net worth, but the broker still needs product-risk disclosure, appropriateness checks, loss capacity, consent, audit trail and high-risk warnings. |

### Suitability controls SEBI would expect for leveraged HFT-style strategies

| Control | Implementation |
|---|---|
| Product governance committee | Approves each strategy before exchange filing: target customer, risk class, leverage, drawdown behavior, capacity, kill criteria, conflicts, RA dossier and customer disclosures. |
| Client segmentation | Minimum net worth/income, derivatives activation, experience, loss-bearing capacity, accredited-investor status where applicable, no minors/vulnerable categories for high-risk algos. |
| Explicit F&O/commodity risk acceptance | Use SEBI-mandated derivatives risk disclosures and strategy-specific risk acceptance before activation. iRage already surfaces the SEBI F&O loss-risk disclosure in its site footer ([iRage home](https://irage.in/)). |
| Per-client risk caps | Hard caps on capital allocation, max open exposure, max orders/sec, daily loss, max slippage, max order value, and emergency stop. |
| Cooling-off and review | Require cooling-off for first activation; periodic re-consent after material changes; immediate deactivation after profile mismatch. |
| No guaranteed/assured return arrangements | iRage's own investor alert says brokers/authorized persons/associates are not authorized to offer fixed/guaranteed/regular returns or capital protection ([iRage home](https://irage.in/)). |

## 6. Conflict-of-interest surface for an HFT prop-linked broker distributing strategies

Arrow Elite has a sharper conflict profile than a normal retail API product because the same organization publicly describes proprietary high-frequency trading/market-making and also plans to distribute automated strategies to clients. SEBI will expect conflicts to be identified, disclosed, controlled and audited, not merely disclaimed.

### Conflict map

| Conflict / optic | Why it matters | Governance answer |
|---|---|---|
| Broker sees client strategy subscriptions and orders while affiliated prop systems trade same markets | Creates front-running and misuse-of-client-order-information concerns. | Strict information barriers between client-algo operations and prop trading; no client order/position data to prop researchers/traders; access logs; surveillance alerts for trading ahead of client flow. |
| Prop desk competes with client strategies for queue position/liquidity | HFT and market-making returns are capacity-sensitive; clients may receive worse fills if prop participates first. | Strategy capacity limits; fair allocation policy; client-vs-prop crossing/priority policy; documented order-routing fairness; surveillance of queue-priority conflicts. |
| Broker sells strategies based on prop reputation | Could imply clients receive the prop desk's alpha or expected returns. | Marketing must avoid prop-performance references; describe regulated controls and risks, not prop P&L. |
| Strategy alpha decays as more clients subscribe | Client outcomes can deteriorate with capacity and crowding. | Per-strategy capacity cap, subscription close rules, periodic capacity review, no new clients after cap, transparent pause/halt logic. |
| Market-maker obligations vs client strategy interests | iRage discloses designated market-maker status in NSE silver options ([iRage Disclosure PDF](https://irage.in/assets/Disclosure.pdf)). | Avoid distributing client strategies in instruments where the firm has designated market-maker obligations unless conflict is specifically approved, disclosed and monitored. |
| Broker/proprietary trading and retail RA research under same legal entity | RA regulations require conflict disclosure and unbiased recommendations. | RA committee independence, research report conflicts section per algo, personal/prop dealing controls, restricted lists, pre-publication confidentiality. |
| Broker earns subscription plus brokerage from high-turnover algos | Incentive to maximize churn/order flow. | Fee disclosure, OTR/OPS/risk controls, subscription not tied to turnover, suitability approval, strategy kill criteria and client cost dashboard. |
| Same strategy logic used by prop and client products | Creates allocation and dilution questions. | Either do not share prop logic with client products, or document separation: different signals, venues, instruments, latency classes, capacity pools and approval. If shared, disclose conflict and capacity policy. |

### Minimum governance package for Arrow Elite

| Governance layer | Required artifacts |
|---|---|
| Board / designated senior management oversight | Product approval memo, conflict inventory, risk appetite, launch approval, periodic review minutes. |
| Information barriers | Access matrix, network/data segregation, code repository segregation, audit logs, production data access approvals, exception reports. |
| RA governance | Per-algo research dossier, RA approval, conflict disclosures, annual RA audit, report retention, update/fresh-registration triggers. |
| Exchange registration governance | Strategy inventory, exchange algo ID, exchange filing date, approval status, version, allowed clients, allowed segments, re-registration history. |
| Client consent and disclosures | Charges, brokerage, statutory charges, strategy risk, black-box/white-box category, RA registration, conflicts, no-return-claim statement, kill-switch terms. |
| Surveillance | Client-prop trade sequencing surveillance, front-running alerts, spoofing/layering/OTR alerts, runaway algo detection, market-impact/capacity reports. |
| Incident handling | Per-strategy kill switch, client-level disable, exchange kill-switch mapping, root-cause analysis, client notification templates, regulator reporting checklist. |

## Product conclusion for Arrow Elite (Algo Cloud)

Arrow Elite can be designed as a premium broker-hosted algo tier in which Arrow/iRage pre-registers a catalogue of strategies with exchanges and eligible clients subscribe without filing their own strategy registration. That conclusion depends on the strategies being broker/provider-generated and exchange-approved, not client-developed. The client still needs onboarding, consent, suitability/appropriateness checks, risk caps, access controls, fees disclosure and full audit trail.

The highest-risk product posture is "100+ HFT-style black-box strategies from iRage's prop expertise." If Arrow uses that positioning, it must treat nearly all of the catalogue as black-box RA-governed research products, with a research report per algo, fresh registration on logic changes, no return/performance claims, capacity controls, and especially strong client-prop information barriers. The cleanest compliant positioning is:

> "Exchange-registered broker-hosted automated strategies with institutional-grade risk controls, transparent charges, conflict disclosures and client-level kill switches. No returns are promised or represented."

## Source index

| Source | Used for |
|---|---|
| [SEBI Feb 4, 2025 circular: Safer participation of retail investors in Algorithmic trading](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html) | Broker-principal framework, client self-developed threshold registration, exchange permission, black-box/white-box and RA obligations. |
| [SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf) | Exact circular number **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/0000013** and text. |
| [NSE/INVG/67858, May 5, 2025](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf) | NSE implementation standards: TOPS, static IP, broker/client/vendor generated algo access. |
| [NSE/INVG/69255, July 22, 2025](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip) | NSE detailed modalities, cited via prior Arrow research where extraction was already done. |
| [NSE/COMP/53555](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf) | SEBI Sep 2, 2022 return/performance-claim restriction. |
| [NSE/COMP/53765](https://nsearchives.nseindia.com/content/circulars/COMP53765.zip) | NSE undertaking follow-up to 2022 algo-return-claim circular. |
| [NSE/COMP/60341](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf) | NSE Jan 19, 2024 reiteration of algo-platform return-claim restrictions. |
| [SEBI RA registry search for iRage](https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14&name=irage) | iRage RA registration **INH000025425**, validity **Mar 12, 2026 - Perpetual**. |
| [iRage home](https://irage.in/) | Legal entity footer, LLP ID, investor alerts, account-freeze contact, document links. |
| [iRage What We Do](https://irage.in/what_do_we_do.php) | Proprietary high-frequency trading, market-making/arbitrage/stat-arb, institutional low-latency platform, Arrow link. |
| [iRage Who We Are](https://irage.in/who_we_are.php) | iRage story, partners, QuantInsti venture, Arrow link. |
| [iRage ECN PDF](https://irage.in/assets/Irage-ECN.pdf) | SEBI broker registration **INZ000011262**, proprietary trading disclosure at NSE/BSE/MCX. |
| [iRage Disclosure PDF](https://irage.in/assets/Disclosure.pdf) | Designated market maker disclosure in NSE silver options. |
| [iRage RA investor charter](https://irage.in/assets/INVESTOR-CHARTER-IN-RESPECT-OF-RAs.pdf) | RA duties and investor expectations. |
| [iRage investor complaint status](https://irage.in/investor-complaint-status.php) | Stock-broker complaint disclosure page. |
| [iRage RA complaint status](https://irage.in/investor-complaint-status-ra.php) | RA complaint disclosure page. |
| [SEBI Accredited Investors modalities, Aug 26, 2021](https://www.sebi.gov.in/legal/circulars/aug-2021/circular-on-modalities-for-implementation-of-the-framework-for-accredited-investors_52116.html) | Accredited-investor framework circular **SEBI/HO/IMD/IMD-I/DF9/P/CIR/2021/620**. |
| [SEBI Investment Advisory Services for Accredited Investors, Dec 21, 2021](https://www.sebi.gov.in/legal/circulars/dec-2021/investment-advisory-services-for-accredited-investors_54830.html) | IA-accredited-investor relaxation circular **SEBI/HO/IMD/IMD-I DOF1/P/CIR/2021/694**. |
| [Existing Arrow research: Algo regulation](research/10-algo-regulation.md) | Cross-check of NSE circular chain, generic algo ID and prior extraction notes. |
