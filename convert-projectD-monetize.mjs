import puppeteer from 'puppeteer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const html = path.resolve(here, 'projectD-monetize-01.html');
const url = 'file:///' + html.split(path.sep).join('/');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

const slides = await page.$$('.slide');
console.log(`Found ${slides.length} slides`);

for (let i = 0; i < slides.length; i++) {
  const num = String(i + 1).padStart(2, '0');
  const out = path.resolve(here, `projectD-monetize-${num}.png`);
  const box = await slides[i].boundingBox();
  await page.screenshot({
    path: out,
    type: 'png',
    clip: { x: box.x, y: box.y, width: 1080, height: 1350 }
  });
  console.log(`Saved projectD-monetize-${num}.png`);
}

await browser.close();
console.log('Done · 12 PNGs ready · drag & drop to Instagram');
