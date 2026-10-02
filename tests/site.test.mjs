import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

test('built pages have valid local destinations, images, and one main heading', async () => {
  const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
  for (const route of ['', 'projects/studio', 'projects/uniflow', 'projects/localflow', '404.html']) {
    const filename = route.endsWith('.html') ? route : path.join(route, 'index.html');
    const html = await readFile(path.join('dist', filename), 'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one h1`);
    assert.match(html, /<html lang="en"/);
    assert.match(html, /id="main"/);
    for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(value)) continue;
      const [pathname, fragment] = value.split('#');
      if (!pathname) {
        assert.ok(html.includes(`id="${fragment}"`), `Missing fragment ${value} on ${route}`);
        continue;
      }
      assert.ok(pathname.startsWith(`${base}/`), `Base path missing: ${value}`);
      const local = decodeURIComponent(pathname.slice(base.length)).replace(/^\//, '');
      const destination = path.join('dist', local.endsWith('/') || !local ? `${local}index.html` : local);
      await access(destination);
      if (fragment && attribute === 'href') {
        const target = await readFile(destination, 'utf8');
        assert.ok(target.includes(`id="${fragment}"`), `Missing destination fragment ${value}`);
      }
    }
    for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0], /alt="[^"]+"/);
  }
});
