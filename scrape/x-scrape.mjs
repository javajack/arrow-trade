import fs from 'node:fs';
import { chromium } from 'playwright-core';
import { humanPause, humanScroll, pause, rand } from './human.mjs';

const QUERIES = [
  'zerodha down', 'kite not working', 'groww charges', 'groww down',
  'upstox withdrawal', 'upstox charges', 'dhan api', 'angel one support',
  'mstock charges', 'broker switched zerodha', 'demat account stuck',
];

const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
const tweets = [];
const seen = new Set();

for (const q of QUERIES) {
  const url = `https://x.com/search?q=${encodeURIComponent(q)}&src=typed_query&f=live`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await humanPause(4000, 7000);
    for (let s = 0; s < 4; s++) {
      const batch = await page.evaluate(() =>
        [...document.querySelectorAll('article[data-testid="tweet"]')].map((a) => {
          const text = a.querySelector('[data-testid="tweetText"]')?.innerText;
          const time = a.querySelector('time')?.getAttribute('datetime');
          const user = a.querySelector('[data-testid="User-Name"]')?.innerText?.split('\n')[0];
          const handle = [...a.querySelectorAll('a[role="link"]')].map((l) => l.getAttribute('href')).find((h) => h && /^\/[A-Za-z0-9_]+$/.test(h));
          const link = a.querySelector('a[href*="/status/"]')?.getAttribute('href');
          return { text, time, user, handle, link };
        }).filter((t) => t.text && t.time));
      for (const t of batch) {
        const key = t.link || t.text.slice(0, 80);
        if (!seen.has(key)) { seen.add(key); tweets.push({ q, ...t }); }
      }
      await humanScroll(page, 2);
      await humanPause(1500, 3500);
    }
    console.log(`OK "${q}": total unique so far ${tweets.length}`);
  } catch (e) { console.log(`ERR "${q}": ${String(e).slice(0, 80)}`); }
  await humanPause(5000, 11000);
}

fs.writeFileSync('out/x-tweets.json', JSON.stringify(tweets, null, 1));
console.log(`TOTAL ${tweets.length} unique tweets saved`);
await page.close(); await browser.close();
