# Algo Trading Regulation in India: Retail API and Algorithmic Trading Framework

Research date: 2026-06-12  
Scope: SEBI and exchange framework for retail algorithmic trading in India, with emphasis on API-based F&O and active-trader use cases for Arrow Trade. This is compliance-grade product research, not legal advice. Items marked **Unverified** could not be confirmed from primary sources during this pass.

## Executive summary

| Topic | Current position as of 2026-06-12 | Why it matters for Arrow Trade |
|---|---|---|
| Legal source | SEBI circular **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/0000013**, dated **February 4, 2025**, created the retail algo framework ([SEBI Feb 4, 2025](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)). | API trading is now a regulated product surface, not just a developer feature. |
| Effective date | Original go-live was **August 1, 2025**; SEBI extended implementation standards to **May 1, 2025** and applicability to **August 1, 2025** via **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/46** ([SEBI Apr 1, 2025](https://www.sebi.gov.in/legal/circulars/apr-2025/extension-of-timeline-for-formulation-of-implementation-standards-pertaining-to-sebi-circular-on-safer-participation-of-retail-investors-in-algorithmic-trading-_93166.html)); later extended the operative date to **October 1, 2025** via **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/108** dated **July 29, 2025**, referenced in NSE circular **NSE/INVG/69372** ([NSE Jul 30, 2025](https://nsearchives.nseindia.com/content/circulars/INVG69372.zip)); then gave a glide path and final universal applicability from **April 1, 2026** via **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/132** ([SEBI Sep 30, 2025](https://www.sebi.gov.in/legal/circulars/sep-2025/extension-of-timeline-for-implementation-of-sebi-circular-dated-february-04-2025-on-safer-participation-of-retail-investors-in-algorithmic-trading-_96979.html)). | New broker build should assume the framework is live for all brokers. |
| Broker liability | Broker is **principal**; algo provider/vendor is broker's **agent**. Broker handles complaints, API monitoring, exchange approvals, due diligence, surveillance, audit trail and prohibited activity monitoring ([SEBI Feb 4, 2025](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Arrow cannot outsource regulatory accountability to vendors. |
| OPS threshold | Threshold Order Per Second (**TOPS**) is initially **not exceeding 10 orders/second per exchange/segment**, measured by the **calendar clock second of the broker server**; exchanges may revise after notice ([NSE/INVG/67858, May 5, 2025](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | Product must hard-rate-limit low-friction retail API users at or below 10 OPS and reject/stop excess per policy. |
| Registration-free personal algos | Client-developed algos below 10 OPS do **not** require formal strategy registration, but still require API controls, static IP, tagging and risk checks. NSE says such orders use generic algo ID **99999** and NNF 13th digit **0** ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | "No exchange registration" does not mean "unregulated". |
| Registration-required algos | Client-developed algos above 10 OPS, all broker-generated algos, and all vendor/provider algos must be registered with exchanges and receive unique algo IDs ([SEBI Feb 4, 2025](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Strategy registration workflow must be part of API onboarding. |
| Vendor empanelment | Algo providers must be empanelled with exchanges; NSE TAT is **T+30 working days** from complete application. Vendor product/strategy registration is separate ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Marketplace/partner strategy business needs an exchange-vendor ops function. |
| Algo registration TAT | NSE TAT for algo registration is **T+10 working days**, with **T+7 working days** for execution algos ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Retail expectations must be managed; this is not instant app-store approval. |
| White-box vs black-box | White-box/execution algos disclose logic and are replicable. Black-box algos hide logic; provider must be SEBI-registered **Research Analyst**, maintain a detailed research report for each algo, and fresh-register on logic change ([SEBI Feb 4, 2025](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)). | A black-box strategy marketplace triggers RA and research-record controls. |
| Static IP | Static IP is mandatory for API access for client-generated algos, vendor-generated algos and broker-generated algos. Client may map one primary static IP and optional secondary IP; updates normally not more than once per calendar week; same static IP maps to one client except defined family sharing ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | This is the biggest retail friction point and must be designed carefully. |
| Open APIs | Brokers must **not permit open APIs**; access only through unique client/vendor-client API key and whitelisted static IP, with OAuth/SEBI-permitted auth and 2FA ([SEBI Feb 4, 2025](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). | "Open API" should not be used in marketing if it implies unrestricted unauthenticated access. |
| Hosting/data flow | NSE implementation standards say all retail algorithms, including those from empanelled providers, should be hosted on broker servers; detailed modalities say order messages originate from broker servers and client data must not flow beyond broker servers ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf), [NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | This materially affects architecture for third-party strategy platforms. |

## Pre-2025 history

### 2012: institutional algo framework

SEBI's first broad algo framework for stock exchanges was circular **CIR/MRD/DP/09/2012**, dated **March 30, 2012**, which defined controls for algorithmic trading and required exchange/broker oversight ([SEBI Mar 30, 2012 listing](https://www.sebi.gov.in/legal/circulars/mar-2012/broad-guidelines-on-algorithmic-trading_22471.html)). The 2025 retail circular explicitly cites that 2012 circular and defines algo orders as orders generated using automated execution logic ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)).

SEBI later strengthened the framework through additional controls such as unique identifiers, order-to-trade ratio, co-location/proximity-hosting controls and commodity segment OPS rules. Relevant examples include **May 21, 2013** broad guidelines ([SEBI May 21, 2013](https://www.sebi.gov.in/legal/circulars/may-2013/broad-guidelines-on-algorithmic-trading_24790.html)), **April 9, 2018** co-location/proximity-hosting strengthening ([SEBI Apr 9, 2018](https://www.sebi.gov.in/legal/circulars/apr-2018/measures-to-strengthen-algorithmic-trading-and-co-location-proximity-hosting-framework_38605.html)), **June 24, 2020** OTR guidelines ([SEBI Jun 24, 2020](https://www.sebi.gov.in/legal/circulars/jun-2020/guidelines-for-order-to-trade-ratio-otr-for-algorithmic-trading_46925.html)), and **March 17, 2022** commodity OPS revision ([SEBI Mar 17, 2022](https://www.sebi.gov.in/legal/circulars/mar-2022/revision-in-orders-per-second-limit-for-algorithmic-trading-in-commodity-derivatives-segment-of-the-stock-exchange_56977.html)).

### 2021-2022: retail algo concern and mis-selling controls

SEBI issued a discussion paper on **December 9, 2021** titled "Algorithmic Trading by Retail Investors", focused on API access and automation of trades; this is cited directly in the February 2025 circular ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)).

In 2022 SEBI separately targeted unregulated platforms selling algorithmic strategies with return claims. SEBI circular **SEBI/HO/MIRSD/DOP/P/CIR/2022/117**, dated **September 2, 2022**, said some unregulated algo platforms were marketing strategies with high-return claims and ratings, creating mis-selling risk. It barred stock brokers providing algo services from making direct or indirect references to past/expected algorithm performance and from associating with platforms that did so; compliance was immediate ([NSE/COMP/53555 carrying SEBI Sep 2, 2022 circular](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf)). NSE required member undertakings by **October 10, 2022** via **NSE/COMP/53765** ([NSE Sep 21, 2022](https://nsearchives.nseindia.com/content/circulars/COMP53765.zip)) and reiterated the restriction on **January 19, 2024** via **NSE/COMP/60341** ([NSE Jan 19, 2024](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf)).

### Unregulated retail-algo era

Before the 2025 framework, retail API users and no-code/low-code algo platforms operated in a grey zone: brokers offered APIs, platforms sold strategy automation, and the formal institutional algo approval regime did not map cleanly to personal retail scripts. ET's August 1, 2025 explainer described the previous environment as involving open APIs and little regulatory oversight, and said only approved software would be allowed once the new regime began ([Economic Times, Aug 1, 2025](https://economictimes.indiatimes.com/markets/stocks/news/indias-retail-traders-get-green-light-for-regulated-algo-trading/articleshow/123032053.cms)).

The practical change in 2025-2026 is not "retail algo became legal for the first time"; it is that **retail API automation became formalized** with: broker-as-principal liability, exchange registration/empanelment, algo IDs, static IP traceability, hard OPS categories, white-box/black-box categorization, and broker/exchange kill-switch and surveillance obligations.

## SEBI February 2025 framework in detail

### Primary circulars and dates

| Date | Circular | What it did | Source |
|---|---|---|---|
| February 4, 2025 | **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/0000013** | Created the retail algo framework. Original implementation standards by April 1, 2025; provisions applicable August 1, 2025. | [SEBI page](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html), [PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf) |
| April 1, 2025 | **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/46** | Extended implementation standards effective date to May 1, 2025; provisions still applicable August 1, 2025. | [SEBI page](https://www.sebi.gov.in/legal/circulars/apr-2025/extension-of-timeline-for-formulation-of-implementation-standards-pertaining-to-sebi-circular-on-safer-participation-of-retail-investors-in-algorithmic-trading-_93166.html), [PDF](https://www.sebi.gov.in/sebi_data/attachdocs/apr-2025/1743506236509.pdf) |
| July 29, 2025 | **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/108** | Extended implementation from August 1, 2025 to October 1, 2025. I found this only via NSE circular **NSE/INVG/69372** annexure/reference, not a standalone SEBI web listing. | [NSE/INVG/69372 zip](https://nsearchives.nseindia.com/content/circulars/INVG69372.zip) |
| September 30, 2025 | **SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/132** | Allowed ready brokers to go live October 1, 2025; created glide path; barred non-compliant brokers from onboarding new retail API-algo clients from January 5, 2026; full applicability for all brokers from April 1, 2026. | [SEBI page](https://www.sebi.gov.in/legal/circulars/sep-2025/extension-of-timeline-for-implementation-of-sebi-circular-dated-february-04-2025-on-safer-participation-of-retail-investors-in-algorithmic-trading-_96979.html), [PDF](https://www.sebi.gov.in/sebi_data/attachdocs/sep-2025/1759232056254.pdf) |

### Stakeholder obligations

| Stakeholder | Obligations |
|---|---|
| Broker | Principal for API-based algo trading; no open APIs; unique vendor/client API key; static IP whitelisting; OAuth/SEBI-permitted auth; 2FA; detect/categorize algo orders; exchange permission for each algo; tag all algo orders with exchange-provided unique identifier; seek exchange approval for changes; handle investor grievances; monitor APIs for prohibited activities; deal only with empanelled algo providers; do due diligence before onboarding vendors ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)). |
| Algo provider/vendor | Broker's agent when using broker API; must be empanelled with exchanges if providing facility to place algo orders with brokers through API; may share subscription/brokerage with broker if disclosed and conflict-free; black-box provider must be SEBI-registered Research Analyst and maintain detailed research report per algo ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)). |
| Exchange | Supervise algorithmic trading; issue SOP for testing; monitor all algo order behavior including simulation testing; maintain kill switch by algo ID; define broker roles, provider roles/criteria/process; inspect broker ability to distinguish algo vs non-algo orders; issue operational modalities/FAQs; define TAT for fast-track execution algos and normal algos ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)). |
| Retail client | May run self-developed algos. If above OPS threshold, must register through broker. Same registered algo may be used by the investor's family, defined as self, spouse, dependent children and dependent parents ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)). |

### Static IP, 2FA and API access policy

SEBI requires brokers to avoid open APIs and allow access only through unique API keys and static IPs. NSE's implementation standards make this operational:

| Control | Operational detail |
|---|---|
| Static IP | Client must provide static IP address(es) for API access; one primary static IP is mandatory, optional secondary static IP may be used for redundancy ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| Multiple API keys | Multiple API keys may be mapped to the same primary/secondary static IPs or separate primary/secondary IPs. If multiple API keys are used, non-registered algos must run only through one predefined API key; other keys may be used only for registered algos ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| Static IP source | For client-generated algos, the static IP is the client's; for vendor-generated algos, static IP may be vendor's or client's; for broker-generated algos, static IP may be broker's or client's ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| IP updates | Client can update mapped static IPs as needed, normally not more than once a calendar week; extraordinary cases may be taken up with the broker ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| IP sharing | Static IP can map to only one client at a time, except family sharing as defined in SEBI circular **SEBI/HO/MIRSD/MIRSD-PoD1/P/CIR/2024/169** dated December 3, 2024; family sharing requires written/email/2FA-validated request to broker ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| Daily logout | All API sessions must be compulsorily logged out every day before the next trading day ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |
| Authentication | OAuth/SEBI-permitted authentication plus 2FA; other mechanisms discontinued unless allowed by SEBI/exchange ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |

### OPS threshold and what counts as an algo

NSE implementation standards set TOPS at **not exceeding 10 orders/second per exchange/segment** and say the threshold is applied by the **calendar clock second of the broker server** ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)).

Important distinctions:

| Category | Exchange strategy registration? | Static IP/API controls? | Algo ID treatment |
|---|---:|---:|---|
| Client self-developed API algo below or equal to 10 OPS | No formal strategy registration required. | Yes. | NSE detailed modalities require broker to send generic algo ID **99999** and NNF 13th digit **0** for unregistered within-10-OPS client algos ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| Client self-developed API algo above 10 OPS | Yes, through broker; exchange assigns unique algo ID. | Yes. | Exchange-provided unique algo ID. |
| Broker-generated algo | Yes, each algorithm registered with exchange. | Yes. | Exchange-specific algo ID. |
| Vendor/provider algo | Yes, all vendor algos registered; vendor must be exchange-empanelled. | Yes. | Unique algo IDs may be used across members once registered; if provider operationalizes same algo through another TM, application should contain existing exchange algo ID ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |

NSE also says all orders received via API from clients/algo-provider platforms shall be considered algo and tagged as defined in the operational modalities ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). This creates a practical ambiguity: a discretionary user placing a manually decided order through their own API client is still flowing through the API channel and is treated under the API/algo controls.

### White-box vs black-box

| Category | SEBI definition | Registration consequences |
|---|---|---|
| White-box / execution algo | Logic is disclosed and replicable; decision process/rules are accessible and understandable to users. NSE strategy types include Execution, TWAP and VWAP ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Registration with write-up/RMS/auditor certificate depending on source. NSE fast-track TAT for execution algos is **T+7 working days**. |
| Black-box algo | Logic is not known to the user and is not replicable. NSE strategy types include arbitrage, alpha seeking, high frequency, scalping and others ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). | Provider must register as Research Analyst, maintain detailed research report per algo, confirm report to exchanges, and register a fresh algo if logic changes. NSE says no modification is allowed for registered black-box algos; fresh registration is required for logic change ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |

## Exchange-level implementation

### NSE circular chain

| Date | NSE circular | Purpose | Source |
|---|---|---|---|
| February 5, 2025 | **NSE/INVG/66524** | Disseminated SEBI Feb 4, 2025 circular. | [NSE circular zip](https://nsearchives.nseindia.com/content/circulars/INVG66524.zip) |
| April 15, 2025 | **NSE/INVG/67554** | Disseminated SEBI Apr 1, 2025 extension of implementation standards. | [NSE circular zip](https://nsearchives.nseindia.com/content/circulars/INVG67554.zip) |
| May 5, 2025 | **NSE/INVG/67858** | Issued implementation standards: static IP, 10 OPS threshold, API controls, algo ID tagging, broker/server hosting, kill authority. | [NSE PDF](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf) |
| July 22, 2025 | **NSE/INVG/69255** | Issued detailed operational modalities: vendor empanelment, product registration, algo strategy registration, TAT, re-registration, RMS, testing, data flow. | [NSE zip](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip) |
| July 24, 2025 | **NSE/INVG/69289** | Corrigendum to NNF ID tables. | [NSE PDF](https://nsearchives.nseindia.com/content/circulars/INVG69289.pdf) |
| July 30, 2025 | **NSE/INVG/69372** | Disseminated SEBI July 29, 2025 extension from August 1 to October 1, 2025. | [NSE zip](https://nsearchives.nseindia.com/content/circulars/INVG69372.zip) |
| September 19, 2025 | **NSE/INVG/70309** | Corrigendum to detailed modalities, including frontend wording, algo-provider undertaking clarifications, ISO 27001:2022 provisional empanelment, VAPT/ATR requirements. | [NSE zip](https://nsearchives.nseindia.com/content/circulars/INVG70309.zip) |
| September 23, 2025 | **NSE/CMTR/70373**, **NSE/COM/70372**, **NSE/FAOP/70371**, **NSE/CD/70369** | Mock sessions for September 27, 2025 related to safer retail algo participation. | [CMTR](https://nsearchives.nseindia.com/content/circulars/CMTR70373.pdf), [COM](https://nsearchives.nseindia.com/content/circulars/COM70372.pdf), [FAOP](https://nsearchives.nseindia.com/content/circulars/FAOP70371.pdf), [CD](https://nsearchives.nseindia.com/content/circulars/CD70369.pdf) |
| September 30, 2025 | **NSE/INVG/70541** | Disseminated SEBI Sep 30, 2025 glide path. | [NSE zip](https://nsearchives.nseindia.com/content/circulars/INVG70541.zip) |
| November 25, 2025 | **NSE/INVG/71469** | Reminder on glide path: complete registration milestone by November 30, 2025; mock session by January 3, 2026; non-compliant brokers barred from new retail API-algo clients from January 5, 2026. | [NSE zip](https://nsearchives.nseindia.com/content/circulars/INVG71469.zip) |

### NSE registration flow and TAT

NSE defines a three-step chronology for registration:

| Step | Detail |
|---|---|
| 1. Vendor empanelment | Existing empanelled exchange vendors need no new empanelment; new algo providers follow the exchange vendor empanelment process and submit undertaking, criteria documents, application, and proof of **2 years' securities-market experience** for proprietor/one director/one partner ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| 2. Algo product registration | UI/product registration, product name, frontend write-up, password policy, version, segments, URL/portal, RMS write-up, audit certificate. Black-box product additionally needs RA registration certificate and undertakings on research reports and RA renewal ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| 3. Algo strategy registration | Trading Member applies for strategy registration and exchange grants unique algo ID. Application includes five-level category disclosure: frontend, developer, user, logical grouping, strategy type. For tech-savvy client category, broker discloses PAN and UCC ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |

TATs:

| Activity | NSE TAT |
|---|---:|
| Algo provider empanelment | **T+30 working days** from complete application. |
| Normal algo registration | **T+10 working days** from complete application. |
| Execution algo registration | **T+7 working days** from complete application. |

### NSE fees

The NSE circulars reviewed here did not disclose a specific algo-registration fee schedule in the text extracted. NSE implementation standards say brokers may charge clients fees/subscription charges for API services over brokerage, including any exchange charges for algorithm registration and recovered from the client ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). **Unverified:** exact NSE/BSE retail algo registration fees, if any, should be confirmed from exchange member portals/contracts before pricing.

### BSE implementation status

**Unverified from primary BSE notices during this pass.** I could not retrieve BSE's equivalent operational circulars from BSE's notice API/search with enough confidence to cite circular numbers. Because SEBI directions apply to all recognized stock exchanges, Arrow should assume BSE has aligned operational requirements for its members. However, exact BSE notice numbers, BSE-specific TATs, file formats, fees and mock-session calendars should be obtained directly from BSE member compliance/notice archives before filing broker SOPs.

Product implication: implement to the stricter NSE-documented requirements and maintain exchange-specific adapters for BSE/MCX/MSEI once their primary circulars are confirmed.

## End-customer journey today: self-written retail algo

This is the practical flow for a retail F&O/API trader writing their own strategy.

### Case A: self-written algo at or below 10 OPS

| Step | What happens | Owner |
|---|---|---|
| 1. Trading account and segment readiness | Client opens trading/demat account and activates required segments, including F&O/commodity where applicable. | Client/broker |
| 2. API access request | Client creates/enables API app/key under broker process; broker collects client consent/terms for API/algo facility. | Broker |
| 3. Static IP submission | Client submits one primary static IP and optional secondary IP. Broker maps API key(s) to the IP(s). Static IP changes generally not more than once per calendar week. | Client/broker |
| 4. Auth | OAuth/SEBI-permitted auth and 2FA. API sessions must be logged out before next trading day. | Broker/client |
| 5. Broker RMS and category tagging | Broker treats API orders as algo/API orders, applies pre-trade RMS, monitors OPS on broker-server calendar seconds, and tags unregistered low-OPS client algo with generic ID **99999** for NSE. | Broker |
| 6. No exchange strategy approval | No formal strategy write-up/auditor certificate/exchange strategy approval is needed if the client remains within 10 OPS. | Client/broker |
| 7. Audit trail | Broker maintains audit trail for at least 5 years, including actual user identification, order/trade logs and unique numbering. | Broker |
| 8. If OPS breach occurs | Broker must reject/not accept/not process orders exceeding TOPS per its policy, or require strategy registration for >10 OPS use. | Broker |

### Case B: self-written algo above 10 OPS

| Step | What happens | Owner |
|---|---|---|
| 1. Broker application | Client applies to broker for exchange registration of self-developed algo. | Client |
| 2. Classification | Broker classifies as "Tech Savvy retail investor (beyond OPS threshold)" under NSE's five-level category. Broker discloses PAN and UCC as reported in UCI portal. | Broker |
| 3. Documents | NSE modalities require auditor certificate, strategy write-up and RMS write-up for client-developed algo registration. | Client/broker/auditor |
| 4. Exchange submission | Trading Member submits registration application to exchange. | Broker |
| 5. Exchange processing | NSE TAT is **T+10 working days** for normal algo registration or **T+7 working days** for execution algo if eligible. | Exchange |
| 6. Algo ID | Exchange assigns unique algo ID. Broker maps it to the client's API/orders. | Exchange/broker |
| 7. Mock/simulation | All registered retail algos must participate in mock/simulation monthly; brokers can use NSE simulated environment. | Broker/client |
| 8. Ongoing change control | Logic change, OMS/RMS code change affecting algo, segment/version addition, exchange/SEBI-mandated changes, login/password policy changes, algo-provider URL changes, and member API changes may require re-registration. | Broker/client |

### Practical timing

| Journey | Minimum expected time | Realistic friction |
|---|---:|---|
| Below 10 OPS self-written API algo | Potentially same day to a few days after API app and static IP approval, depending on broker ops. | Static IP procurement, broker review status, API app approval, blocked order placement until IP is whitelisted. Upstox community users reported "In Review" states and order-placement failures around April 1-2, 2026 ([Upstox community, Mar 31-Apr 2, 2026](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). |
| Above 10 OPS self-written algo | NSE T+10 working days after complete application; T+7 for execution algos. | Preparing auditor certificate/RMS write-up/strategy write-up and broker review likely adds time before exchange submission. |
| Vendor/provider marketplace strategy | Vendor empanelment T+30 working days, product registration, strategy registration T+10/T+7, broker due diligence and commercial/technical integration. | This is weeks, not days, for new vendors. |

## Broker and community evidence

| Broker/source | Current public evidence | Product/compliance takeaway |
|---|---|---|
| Zerodha | Zerodha's API product page says Personal API is free for orders/GTT/alerts/margins/portfolio; Connect is **Rs 500/month** for full APIs including realtime WebSocket and historical candles ([Zerodha API](https://zerodha.com/products/api/)). Kite Connect docs retain **10 order req/sec**, **400 orders/min**, **5000 orders/day** and 25 modifications/order limits ([Kite API rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)). ET reported Zerodha cut API prices after NSE's retail algo framework and said self-written strategies could automate up to 10 OPS with static IP and no prior exchange registration ([Economic Times, May 6, 2025](https://economictimes.indiatimes.com/markets/stocks/news/zerodha-to-slash-api-fees-as-nse-unveils-new-retail-algo-trading-framework-nithin-kamath/articleshow/120935753.cms)). | Zerodha publicly repositioned API pricing around the regulatory framework. I did not find a current Zerodha help-page registration flow for algo IDs/static IP during this pass. |
| Dhan | DhanHQ docs say order placement/modification/cancellation APIs require static IP whitelisting and show `algoId` in order-book response as "Exchange Algo ID for Dhan" ([Dhan orders API](https://dhanhq.co/docs/v2/orders/)). Dhan rate limits are 10 order API requests/sec, 250/min, 1000/hr, 7000/day; order modifications capped at 25/order ([DhanHQ intro/rate limits](https://dhanhq.co/docs/v2/)). | Dhan's docs expose static IP and algo ID fields but not a full retail exchange-registration guide in crawlable pages found here. |
| FYERS | FYERS API page markets free trading APIs, up to 1 lakh requests/day, 7 ms order placement, app-specific permissions and integrations in Python/Node/JS/C#/Java/Go/C ([FYERS API](https://fyers.in/products/api)). | I did not find a current FYERS help-page registration flow for static IP/exchange algo ID during this pass. |
| Upstox | Upstox developer docs say regulatory changes are live and classify order rate limits as **Regular Algos: 10/sec, 500/min, 2000/30min** and **SEBI-Registered Algos: 50/sec, 500/min, 2000/30min** ([Upstox rate limits](https://upstox.com/developer/api-documentation/rate-limiting/)). Upstox community announcement on **March 31, 2026** said mandates take effect **April 1, 2026**, API trading requires registered static IP and algo registration above 10 OPS, MCX API trading was temporarily disabled, market orders no longer permitted, and MPP enabled by default ([Upstox community](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). | Upstox provides the clearest public broker evidence of actual April 2026 enforcement friction. |
| Angel One | SmartAPI docs page is JavaScript-rendered and did not expose relevant static-IP/algo registration content in crawlable form ([Angel SmartAPI docs](https://smartapi.angelone.in/docs)). | **Unverified:** obtain logged-in/current SmartAPI notices before benchmarking Angel's flow. |

## Operational obligations for Arrow Trade

### Broker controls

| Control | Required implementation |
|---|---|
| API access | No unrestricted open API; unique client/vendor-client API key; static IP whitelist; OAuth/SEBI-permitted auth; 2FA; daily session expiry/logout. |
| Order classification | Distinguish API/algo and non-algo orders; identify below/above TOPS; set correct NNF/tagging and algo ID. |
| Rate limiting | Per exchange/segment TOPS not exceeding 10 OPS for registration-free personal algos; reject/not accept/not process orders beyond OPS per broker policy. |
| Pre-trade RMS | Price check, quantity check, order value check, trade-price protection, market-price protection, client-level cumulative open-order value, automated execution/runaway-loop stop, net position vs margin, RBI restricted stocks, MWPL, position/trading/exposure/turnover/security-wise limits, commodity efficient-price/fair-play checks where applicable ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| Market order restrictions | NSE detailed modalities say algorithmic orders should not be placed as market orders because market-price protection must be accompanied by a limit price; Upstox implemented "Market Orders are no longer permitted" for API order placement in its April 2026 update ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip), [Upstox community](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). |
| Audit trail | Sound audit trail for all API/algo orders and trades; actual user/user-id identification; internally generated unique numbering; logs/audit trail retained at least **5 years** ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| Registration/change control | Exchange permission for each registered algo; re-registration for logic changes and listed system/policy changes; no modification for black-box logic changes. |
| Vendor governance | Deal only with exchange-empanelled providers; broker due diligence; report misconduct/securities-law violations to exchanges; ensure fee-sharing disclosures and no conflict of interest. |
| Grievances | Broker solely handles investor grievances related to algo trading. |
| System audit/cyber/VAPT | All retail algos are subject to system audit, cyber security, VAPT and inspection-related requirements ([NSE detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)). |
| Kill switch | Exchanges retain authority to kill rogue algos; broker should also maintain client/app/strategy kill switches and emergency square-off controls aligned with exchange kill-switch needs ([SEBI Feb 4, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf), [NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)). |

### Annual/system audit implication

The circulars reviewed use "periodically" and refer to existing system audit/cyber/VAPT/inspection requirements, not a new standalone annual audit interval in the extracted retail-algo text. For broker build planning, assume:

- Existing broker system audit and algo audit certificates remain applicable.
- API product registration requires system audit for API and detailed RMS/write-up/audit certificate.
- Vendor/provider product registration requires auditor certificates and VAPT/CERT-In related artifacts where applicable.
- **Unverified:** exact annual cadence and format should be taken from NSE consolidated circular **NSE/MSD/67753** dated April 29, 2025 and current exchange member inspection manuals before compliance SOP sign-off.

### Penalties and enforcement status

| Area | Evidence |
|---|---|
| New retail algo framework enforcement | SEBI Sep 30, 2025 says brokers failing glide-path milestones are barred from onboarding new retail clients for API-based algo trading from **January 5, 2026**; full framework applies to all brokers from **April 1, 2026** ([SEBI Sep 30, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/sep-2025/1759232056254.pdf)). NSE reminded members of the same on **November 25, 2025** ([NSE/INVG/71469](https://nsearchives.nseindia.com/content/circulars/INVG71469.zip)). |
| Vendor empanelment activity | NSE issued multiple 2025-2026 circulars for provisional empanelment of algo providers, indicating the framework moved into operational processing; examples include **NSE/INVG/72238** dated January 9, 2026, **NSE/INVG/72657** dated February 5, 2026, **NSE/INVG/74075** dated May 6, 2026 and **NSE/INVG/74530** dated June 3, 2026, visible in NSE circular search results. |
| Return-claim/mis-selling enforcement backdrop | SEBI 2022 circular warns appropriate SEBI action may be taken for non-compliance with return/performance-claim restrictions ([NSE/COMP/53555 carrying SEBI circular](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf)). |
| Retail-algo-specific penalties | I did not find a published SEBI penalty/order specifically for breach of the 2025 retail algo framework as of this research pass. Mark this **Unverified** and monitor SEBI orders/NSE disciplinary actions. |

## Grey areas and industry debates

| Grey area | What is clear | What remains debated |
|---|---|---|
| Static IP for low-OPS personal algos | NSE standards make static IP mandatory for API access, including client-generated algos below 10 OPS. Upstox staff/community replies say static IP is mandatory for all API orders ([NSE/INVG/67858](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf), [Upstox community](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)). | Retail users argue this over-burdens low-frequency personal scripts, increases cloud/ISP cost, and reduces emergency mobility. |
| "Personal-use exemption" | There is no exemption from API controls; only exchange strategy registration is waived below TOPS. | Users often interpret "below 10 OPS no registration" as "no compliance obligations"; brokers must message this precisely. |
| Per-strategy vs per-logic registration | NSE requires each algo strategy registered, categorized and assigned algo ID; black-box logic changes require fresh registration. | Whether small parameter changes, instrument universes, risk limits or thresholds are a new "logic" can be operationally hard. |
| Modification re-approval | SEBI requires exchange approval for modification/change to approved algos; NSE lists re-registration triggers. | Operational burden can be high for iterative strategy development; brokers may need a clear change-classification matrix. |
| OPS threshold gaming | TOPS is 10 OPS per exchange/segment based on broker-server calendar second. | Users could spread orders across seconds/segments/accounts/API keys. Brokers need anti-circumvention monitoring, not only per-key throttles. |
| Manual order through API | NSE says all orders received via API from clients/algo-provider platforms are considered algo and must be tagged. | A manually triggered API order may not feel like "algorithmic trading" to users, but compliance treatment follows channel/automation controls. |
| Broker-server hosting | NSE says all retail algorithms, including empanelled provider algos, should be hosted on broker servers and order messages originate from broker server. | This is a major architecture constraint for SaaS strategy vendors and broker API ecosystems. Exact allowed deployment models need broker/exchange confirmation. |
| Black-box as research advice | Black-box providers must be RAs and maintain research reports. | Whether every closed-source execution/risk engine is black-box, and how RA rules interact with automated signals, needs careful legal interpretation. |
| Exchange-specific divergence | NSE requirements are documented in detail. | BSE/MCX/MSEI-specific forms, fees and TATs must be confirmed directly; do not assume identical operational artifacts. |

## Implications for Arrow Trade

### Product architecture

| Requirement | Arrow build decision |
|---|---|
| API app onboarding | Build a regulated "API & Algo Access" console, not a generic developer-key page. Collect static IP, API key purpose, OPS category, exchange/segment use, strategy name, and client declarations. |
| Low-OPS path | Offer a fast path for self-written <=10 OPS strategies: static IP verification, generic algo ID tagging, limit-only/API-safe order controls, API logs and explicit "no exchange registration required if you stay <=10 OPS" wording. |
| Registered path | Offer a guided exchange-registration workflow: strategy write-up template, RMS template, auditor certificate checklist, segment/version/change matrix, PAN/UCC confirmation and status tracker. |
| Vendor marketplace | Treat vendor onboarding as a compliance workflow: exchange empanelment check, RA status check for black-box, ISO/VAPT documents, broker due diligence, fee-sharing disclosures, conflict review and client complaints process. |
| Runtime controls | Implement per-client/per-key/per-exchange/per-segment OPS throttles by broker-server calendar second; reject excess with clear error code; expose remaining OPS counters to developers. |
| Audit and support | Provide downloadable API order timeline: client timestamp, broker receive timestamp, RMS result, OMS/exchange send timestamp, exchange time, algo ID, NNF category, reject code, correlation ID. |
| Emergency controls | Client kill switch, broker risk kill switch, strategy pause, cancel-all, flatten-position, and exchange kill-switch mapping by algo ID. |

### Compliance wording

Avoid saying:

- "Open API for algo trading"
- "No approvals required for retail algos"
- "Guaranteed/proven returns from strategy"
- "Use any third-party bot"

Use instead:

- "API access with static-IP whitelisting, 2FA and exchange-compliant algo tagging"
- "Self-developed strategies up to 10 OPS do not require exchange strategy registration, but remain subject to API controls and broker RMS"
- "Registered strategies above 10 OPS receive exchange algo IDs"
- "Only exchange-empanelled providers can offer algo-order placement through broker APIs"

## Source index

Primary sources used:

1. [SEBI Feb 4, 2025 page: Safer participation of retail investors in Algorithmic trading](https://www.sebi.gov.in/legal/circulars/feb-2025/safer-participation-of-retail-investors-in-algorithmic-trading_91614.html)
2. [SEBI Feb 4, 2025 PDF: SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/0000013](https://www.sebi.gov.in/sebi_data/attachdocs/feb-2025/1738665456458.pdf)
3. [SEBI Apr 1, 2025 page: SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/46](https://www.sebi.gov.in/legal/circulars/apr-2025/extension-of-timeline-for-formulation-of-implementation-standards-pertaining-to-sebi-circular-on-safer-participation-of-retail-investors-in-algorithmic-trading-_93166.html)
4. [SEBI Apr 1, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/apr-2025/1743506236509.pdf)
5. [SEBI Sep 30, 2025 page: SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/132](https://www.sebi.gov.in/legal/circulars/sep-2025/extension-of-timeline-for-implementation-of-sebi-circular-dated-february-04-2025-on-safer-participation-of-retail-investors-in-algorithmic-trading-_96979.html)
6. [SEBI Sep 30, 2025 PDF](https://www.sebi.gov.in/sebi_data/attachdocs/sep-2025/1759232056254.pdf)
7. [SEBI Mar 30, 2012 broad algo guidelines listing](https://www.sebi.gov.in/legal/circulars/mar-2012/broad-guidelines-on-algorithmic-trading_22471.html)
8. [SEBI May 21, 2013 broad algo guidelines](https://www.sebi.gov.in/legal/circulars/may-2013/broad-guidelines-on-algorithmic-trading_24790.html)
9. [SEBI Apr 9, 2018 algo/co-location framework](https://www.sebi.gov.in/legal/circulars/apr-2018/measures-to-strengthen-algorithmic-trading-and-co-location-proximity-hosting-framework_38605.html)
10. [SEBI Jun 24, 2020 OTR guidelines](https://www.sebi.gov.in/legal/circulars/jun-2020/guidelines-for-order-to-trade-ratio-otr-for-algorithmic-trading_46925.html)
11. [SEBI Mar 17, 2022 commodity OPS revision](https://www.sebi.gov.in/legal/circulars/mar-2022/revision-in-orders-per-second-limit-for-algorithmic-trading-in-commodity-derivatives-segment-of-the-stock-exchange_56977.html)
12. [NSE/INVG/67858, May 5, 2025 implementation standards](https://nsearchives.nseindia.com/content/circulars/INVG67858.pdf)
13. [NSE/INVG/69255, Jul 22, 2025 detailed modalities](https://nsearchives.nseindia.com/content/circulars/INVG69255.zip)
14. [NSE/INVG/69289, Jul 24, 2025 corrigendum](https://nsearchives.nseindia.com/content/circulars/INVG69289.pdf)
15. [NSE/INVG/69372, Jul 30, 2025 implementation extension](https://nsearchives.nseindia.com/content/circulars/INVG69372.zip)
16. [NSE/INVG/70309, Sep 19, 2025 corrigendum/update](https://nsearchives.nseindia.com/content/circulars/INVG70309.zip)
17. [NSE/INVG/70541, Sep 30, 2025 extension/glide path](https://nsearchives.nseindia.com/content/circulars/INVG70541.zip)
18. [NSE/INVG/71469, Nov 25, 2025 glide-path reminder](https://nsearchives.nseindia.com/content/circulars/INVG71469.zip)
19. [NSE/COMP/53555, Sep 6, 2022 performance/return claimed by unregulated algo platforms](https://nsearchives.nseindia.com/content/circulars/COMP53555.pdf)
20. [NSE/COMP/53765, Sep 21, 2022 member undertaking](https://nsearchives.nseindia.com/content/circulars/COMP53765.zip)
21. [NSE/COMP/60341, Jan 19, 2024 reiteration](https://nsearchives.nseindia.com/content/circulars/COMP60341.pdf)
22. [Zerodha API product page](https://zerodha.com/products/api/)
23. [Kite Connect API rate limits](https://kite.trade/docs/connect/v3/exceptions/#api-rate-limit)
24. [DhanHQ API docs](https://dhanhq.co/docs/v2/)
25. [DhanHQ Orders API](https://dhanhq.co/docs/v2/orders/)
26. [FYERS API product page](https://fyers.in/products/api)
27. [Upstox API rate limits](https://upstox.com/developer/api-documentation/rate-limiting/)
28. [Upstox community regulatory update, Mar 31, 2026](https://community.upstox.com/t/important-update-regulatory-changes-for-api-and-algo-trading-are-now-live/14874)
29. [Angel One SmartAPI docs landing page](https://smartapi.angelone.in/docs)
30. [Economic Times, Aug 1, 2025 retail algo framework explainer](https://economictimes.indiatimes.com/markets/stocks/news/indias-retail-traders-get-green-light-for-regulated-algo-trading/articleshow/123032053.cms)
31. [Economic Times, May 6, 2025 Zerodha API price cut after NSE retail algo framework](https://economictimes.indiatimes.com/markets/stocks/news/zerodha-to-slash-api-fees-as-nse-unveils-new-retail-algo-trading-framework-nithin-kamath/articleshow/120935753.cms)
