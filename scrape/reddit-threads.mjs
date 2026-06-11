import fs from 'node:fs';
import { chromium } from 'playwright-core';
import { humanPause, humanScroll } from './human.mjs';

const all = JSON.parse(fs.readFileSync('out/reddit-search.json', 'utf8'));
const PAIN = /down|charge|fee|support|refund|withdraw|stuck|blocked|freeze|scam|fraud|switch|worst|issue|problem|glitch|outage|reject|loss|complain|hidden|amc|margin|api|pathetic|horrible|beware/i;
const seen = new Set();
const picks = all
  .filter((r) => r.url && PAIN.test(r.title) && !seen.has(r.url) && seen.add(r.url))
  .map((r) => ({ ...r, n: parseInt((r.comments || '0').replace(/\D/g, '')) || 0 }))
  .sort((a, b) => b.n - a.n)
  .slice(0, 14);

console.log(`Opening ${picks.length} threads`);
const browser = await chromium.connectOverCDP('http://localhost:9222');
const ctx = browser.contexts()[0];
const page = await ctx.newPage();
const threads = [];

for (const p of picks) {
  try {
    const u = p.url.replace('www.reddit.com', 'old.reddit.com');
    await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await humanPause(2500, 5000);
    await humanScroll(page, 2);
    const data = await page.evaluate(() => ({
      title: document.querySelector('a.title')?.textContent,
      op: document.querySelector('.expando .usertext-body')?.innerText?.slice(0, 1200),
      time: document.querySelector('.tagline time')?.getAttribute('datetime'),
      comments: [...document.querySelectorAll('.commentarea .comment')].slice(0, 8).map((c) => ({
        text: c.querySelector('.usertext-body')?.innerText?.slice(0, 500),
        score: c.querySelector('.score.unvoted')?.textContent,
        time: c.querySelector('time')?.getAttribute('datetime'),
      })).filter((c) => c.text),
    }));
    threads.push({ url: p.url, q: p.q, ...data });
    console.log(`OK ${data.title?.slice(0, 60)} (${data.comments.length} comments)`);
  } catch (e) { console.log(`ERR ${p.url}: ${String(e).slice(0, 60)}`); }
  await humanPause(4000, 9000);
}
fs.writeFileSync('out/reddit-threads.json', JSON.stringify(threads, null, 1));
console.log(`TOTAL ${threads.length} threads saved`);
await page.close(); await browser.close();
