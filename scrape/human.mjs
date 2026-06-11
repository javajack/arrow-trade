export const rand = (a, b) => a + Math.random() * (b - a);
export const pause = (ms) => new Promise((r) => setTimeout(r, ms));
export const humanPause = (a = 2000, b = 6000) => pause(rand(a, b));
export async function humanScroll(page, times = 3) {
  for (let i = 0; i < times; i++) {
    await page.mouse.wheel(0, rand(600, 1400));
    await pause(rand(900, 2200));
  }
}
