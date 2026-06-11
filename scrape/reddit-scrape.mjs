import fs from 'node:fs';
import { chromium } from 'playwright-core';
import { humanPause, humanScroll, pause, rand } from './human.mjs';

const SEARCHES = [
  ['IndianStockMarket', 'zerodha'], ['IndianStockMarket', 'groww'],
  ['IndianStockMarket', 'upstox'], ['IndianStockMarket', 'dhan'],
  ['IndianStockMarket', 'angel one'], ['IndianStockMarket', 'broker charges'],
  ['IndianStockMarket', 'switched broker'], ['IndianStreetBets', 'zerodha'],
  ['IndianStreetBets', 'broker'], ['personalfinanceindia', 'groww'],
  ['personalfinanceindia', 'demat broker'], ['StockMarketIndia', 'broker problem'],
];

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
const results = [];

for (const [sub, q] of SEARCHES) {
  const url = `https://old.reddit.com/r/${sub}/search?q=${encodeURIComponent(q)}&restrict_sr=on&sort=relevance&t=year`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await humanPause(2500, 5000);
    await humanScroll(page, 2);
    const blocked = await page.locator('text=/whoa there|blocked/i').count();
    if (blocked) { console.log(`BLOCKED ${sub}/${q}`); await humanPause(8000, 15000); continue; }
    const items = await page.evaluate(() =>
      [...document.querySelectorAll('.search-result-link')].map((el) => ({
        title: el.querySelector('a.search-title')?.textContent?.trim(),
        url: el.querySelector('a.search-title')?.href,
        score: el.querySelector('.search-score')?.textContent?.trim(),
        comments: el.querySelector('.search-comments')?.textContent?.trim(),
        time: el.querySelector('time')?.getAttribute('datetime'),
        sub: el.querySelector('.search-subreddit-link')?.textContent?.trim(),
      })).filter((x) => x.title));
    items.forEach((x) => results.push({ q, searchSub: sub, ...x }));
    console.log(`OK ${sub} "${q}": ${items.length} results`);
  } catch (e) { console.log(`ERR ${sub}/${q}: ${String(e).slice(0, 80)}`); }
  await humanPause(4000, 9000);
}

fs.writeFileSync('out/reddit-search.json', JSON.stringify(results, null, 1));
console.log(`TOTAL ${results.length} search results saved`);
await page.close(); await browser.close();
