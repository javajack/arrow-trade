# First-Party Social Evidence: Reddit + X/Twitter (logged-in scrape)

Collected: 2026-06-12, via an authenticated browser session driven with human pacing (randomized 2–9s waits, real scrolling, single sequential tab). This closes the Reddit/X gap flagged in `research/12`–`14`, which were limited to press-proxy because Codex's sandbox was network-blocked. Raw captures: `scrape/out/{reddit-search.json, reddit-threads.json, x-tweets.json}`.

**Volume:** Reddit — 224 search hits across 6 subreddits + 14 deep-dive threads with comments. X — 246 unique tweets across 11 queries, 158 pain-relevant (≥ June 2025).

**Method honesty:** X live-search is noisy — generic-word queries ("kite", "angel one support") pull unrelated tweets; those were filtered out and only on-topic, dated, broker-tagged items are used below. Engagement counts on X were not reliably extractable from the live timeline DOM; Reddit scores/comment-counts are exact.

## What the first-party data confirms (and adds) vs the press-proxy registry

| Registry theme | First-party verdict | Strongest new evidence |
|---|---|---|
| 1 · Reliability/stale prices | **Confirmed, intensified** | "Anytime there's high volatility event zerodha goes down lol, Most unreliable broker" — [@tejatechie1, 2026-06-08](https://x.com/tejatechie1/status/2063826688027623657); "@zerodha API is down again, sensex quotes are failing" — [@chithrakanmani, 2026-06-08](https://x.com/chithrakanmani/status/2063836171294371892); r/personalfinanceindia "Groww down?" thread [2025-12-05](https://old.reddit.com/r/personalfinanceindia/comments/1peq8h5/groww_down/) |
| 3 · Hidden charges | **Confirmed — the dominant theme by volume on both platforms** | "Zerodha tweets like a monk, but charges like a cartel" — **899 upvotes, 122 comments** [r/IndianStockMarket, 2025-07-31](https://old.reddit.com/r/IndianStockMarket/comments/1me0tx8/); "Zerodha CEO casually exposed DP charges scam" — **775 upvotes** [2025-07-30](https://old.reddit.com/r/IndianStockMarket/comments/1md4mmi/); Upstox AMC-on-"zero-AMC"-account complaints with the broker publicly replying "These charges are part of our standard structure. We're unable to waive them" — [@UpstoxSupport, 2026-06-11](https://x.com/UpstoxSupport/status/2064967598857736661) |
| 4 · Withdrawal trust | **Confirmed** | "@upstox takes 2 days or more to process withdrawal… zerodha, fyers allow same day without charges" — [@JKhajotia, 2025-11-21](https://x.com/JKhajotia/status/1991707627861209299); "why I have to pay GST for my funds withdrawal" — [@Fin_Viraj, 2025-07-02](https://x.com/Fin_Viraj/status/1940283603411497419); the ₹5-crore doctor case — **572 upvotes, 102 comments** [r/IndianStreetBets, 2025-11-04](https://old.reddit.com/r/IndianStreetBets/comments/1oo09ra/) |
| 5 · Support black hole | **Confirmed** | "Zerodha becoming bad to worse. Customer Support will take Zerodha down" — [@vipinmahajan1, 2026-06-09](https://x.com/vipinmahajan1/status/2064265956264980548); Upstox AMC thread: user "begged for 15 minutes" to get a ticket link — [r/IndianStockMarket, 2026-04-09](https://old.reddit.com/r/IndianStockMarket/comments/1sgn0km/high_upstox_amc/) |
| 6 · API instability | **Confirmed, but with a positive Dhan signal** | "Dhan's paid data API works reliably… Upstox fails more often than not" — [@saurabh_hp, 2026-06-05](https://x.com/saurabh_hp/status/2062752927232712997); but Dhan API split-adjustment inconsistency (daily adjusted, 1-hour not) — [@Kukku__p07, 2026-06-05](https://x.com/Kukku__p07/status/2062795293138227337); "Which Indian broker API has the most stable WebSocket during market open and expiry day?" — [r/IndianStreetBets, 2026-05-22](https://old.reddit.com/r/IndianStreetBets/comments/1tkehio/) |
| 7 · Holdings mismatch | **Confirmed, vividly** | Groww app-outage thread where multiple users report MF holdings missing: "I see a large amount missing for me" / "Even I am missing a hugh chunk" — [r/IndianStockMarket, 2026-04-27](https://old.reddit.com/r/IndianStockMarket/comments/1swz8lx/groww_app_issue/); "Groww Scam Alert" — ledger never showed the value the app displayed, **143 upvotes** [2025-09-13](https://old.reddit.com/r/IndianStockMarket/comments/1nfo2nn/) |

## New / sharpened signals the press-proxy pass missed

### A. "Charges as betrayal" is the #1 viral complaint genre

The two highest-engagement broker posts found anywhere are *both* about charges hypocrisy, not outages. The anger isn't the rupee amount — it's the gap between the no-hidden-charges *marketing* and the lived experience. Top comment on the "cartel" post praises Zerodha precisely for the absences ("no charges for UPI, no daily F&O popups, no insurance upsell") — i.e. users reward the broker that *doesn't* do the thing. Direct validation of the True Cost Meter + no-dark-patterns positioning.

### B. Switching is real but tax-friction is the moat that traps users

Multiple "switching from Groww to Zerodha" threads (driven by Groww's charge increases), but the recurring blocker is portfolio-transfer + tax-filing pain. Quoted explicitly: *"A lot of people do not switch to a better stockbroker for only one reason — it messes up their tax filing"* — [@SanaSecurities, 2025-08-17](https://x.com/SanaSecurities/status/1956969411291853275), calling for demat portability like mobile-number portability. **A frictionless, tax-aware migration flow is an unguarded acquisition wedge.**

### C. The option-writer charge-rage segment is specific and loud

"High-volume option writer paying ₹3.3L in charges for ₹1.98L profit! Need a zero/low brokerage broker with LOT-BASED UI and API support" — posted to *both* [r/IndianStockMarket](https://old.reddit.com/r/IndianStockMarket/comments/1se9213/) and [r/IndianStreetBets](https://old.reddit.com/r/IndianStreetBets/comments/1se95el/) (2026-04-06). Charges exceeding profit is the single most acute pain in the corpus, and it names a precise unmet need: lot-based UI + API + low cost for writers.

### D. Zerodha's March 2026 intraday-collateral charge is a live churn event

"Zerodha charging for intraday collateral now… tried changing broker, but got stuck" — **145 upvotes, 39 comments** [r/IndianStreetBets, 2026-03-25](https://old.reddit.com/r/IndianStreetBets/comments/1s352ch/). ₹40/order or 50% cash; users comparing escape routes (Dhan/Angel 16% intraday shortfall interest, Upstox ₹30/order) and finding all options bad — then trapped by switching friction. Confirms both the charge-rage and the migration-moat themes simultaneously.

### E. m.Stock "lifetime zero brokerage" backlash

"Mstock charged 3k upfront for zero brokerage on derivatives for lifetime, later started charging ₹5 per order, on top of it their app is sluggish" — [@m_dheeru, 2026-01-13](https://x.com/m_dheeru/status/2010979593029923090). The lifetime-free promise turning into per-order charges is a specific trust landmine to avoid.

### F. The US-broker comparison is an aspirational pain benchmark

"Investing in the U.S. feels like cheating after using Indian Demat accounts" — **130 upvotes** [r/personalfinanceindia, 2025-10-07](https://old.reddit.com/r/personalfinanceindia/comments/1o087iq/): no DP charges, no surprise TDS popups, clean experience. Indian users now explicitly benchmark against Robinhood/Fidelity simplicity — the bar for "no hidden friction" has risen.

### G. Positive Dhan API signal (counter-evidence worth keeping)

Unlike the complaint-dominated norm, Dhan's API earns genuine praise — free data API for ≥25 F&O trades/month ([@saurabh_hp](https://x.com/saurabh_hp/status/2065051196055040501)), "best in ease of use and affordable" vs Kotak Neo and Kite ([@AstroMarketView, 2026-06-04](https://x.com/AstroMarketView/status/2062613233765392846)), and a real-world dev meetup with 100+ builders ([@DhanHQ, 2026-05-29](https://x.com/DhanHQ/status/2060223030933299516)). This is the bar Arrow's API must clear, not just the failures to avoid.

## Severity × frequency, first-party

| Theme | Reddit signal (engagement) | X signal | Net |
|---|---|---|---|
| Hidden/surprise charges | Very high (899 + 775 + 171-upvote posts) | Very high (most queries) | **#1 viral genre** |
| Reliability during volatility | Medium (outage threads) | High (recurring "down" tweets) | **#1 trust-killer for active traders** |
| Withdrawal friction/charges | Medium-high (₹5cr post: 572) | Medium (Upstox-specific) | High, Upstox-concentrated |
| Charges > profit (writers) | Medium (cross-posted) | Low | Acute for a specific high-value segment |
| Holdings/ledger mismatch | High (Groww threads) | Low | High trust damage, Groww-concentrated |
| Switching/portability friction | Medium (multiple threads) | Medium | **Underexploited acquisition wedge** |
| API stability | Medium (r/ISB API threads) | Medium (mixed: Dhan praised) | High for algo segment |

## Implications (additions to existing docs)

1. **Charges transparency is not theme #3 — it's theme #1 by viral weight.** Re-rank in the registry.
2. **Add a migration/portability wedge** — tax-aware, transfer-charge-refunded onboarding directly attacks the one thing keeping unhappy users with incumbents.
3. **Option-writer-specific product** (lot-based UI + low cost + API) has a named, loud, high-value audience.
4. **"Promise integrity"** — every lifetime/zero promise (m.Stock, Upstox zero-AMC) that later reversed is now a public trust scar; Arrow's pricing commitments must be contractual and permanent or unstated.
5. Keep the **Dhan API quality bar** as the positive benchmark, not just the failures.
