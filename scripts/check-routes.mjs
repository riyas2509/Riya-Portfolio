import assert from "node:assert/strict";

// Run against a running dev or production server. No browser installation needed.
const base = process.argv[2] || "http://localhost:3000";
const slugs = [
  "echonote",
  "echoos",
  "lifecapital",
  "ama-research",
  "railq",
  "instagram-redesign",
  "ocr-model",
  "stock-market-prediction",
];
const paths = [
  "/",
  "/work",
  "/about",
  "/curiosity-lab",
  "/achievements",
  "/contact",
  ...slugs.map((slug) => `/work/${slug}`),
];
const htmlByPath = new Map();
for (const path of paths) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} must return HTTP 200`);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${path} needs a primary heading`);
  assert.match(html, /<title>[^<]*Riya Shah/, `${path} needs page metadata`);
  assert.match(
    html,
    /href="\/contact"|mailto:riyamshah2509@gmail.com/,
    `${path} needs the working contact link`,
  );
  assert.match(html, /id="main"/, `${path} needs a skip-link target`);
  htmlByPath.set(path, html);
}
let linksChecked = 0;
for (const [path, html] of htmlByPath) {
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href.replaceAll("&amp;", "&"), new URL(path, base));
    if (!htmlByPath.has(url.pathname)) continue;
    if (url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(
        htmlByPath.get(url.pathname).includes(`id="${id}"`),
        `Broken link: ${path} -> ${href}`,
      );
      linksChecked++;
    }
  }
}
for (const path of ["/robots.txt", "/sitemap.xml", "/icon.svg"]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path} must resolve`);
}
const og = await fetch(new URL("/opengraph-image", base));
assert.equal(og.status, 200, "Open Graph image must render");
assert.match(og.headers.get("content-type") || "", /image\/png/);
assert.ok(
  (await og.arrayBuffer()).byteLength > 1000,
  "Open Graph image must contain data",
);
assert.equal(
  (await fetch(new URL("/projects/unknown-file", base))).status,
  404,
);
console.log(
  `PASS: ${paths.length} primary pages, ${linksChecked} fragment links, metadata assets and unknown-project 404.`,
);

for (const slug of slugs) {
  const r = await fetch(new URL("/projects/" + slug + "?lens=design", base), {
    redirect: "manual",
  });
  assert.equal(r.status, 308);
  assert.equal(r.headers.get("location"), "/work/" + slug + "?lens=design");
}
for (const file of [
  "/portrait/riya-shah.png",
  "/credentials/young-turks-2026.pdf",
  "/credentials/young-turks-2026.png",
]) {
  assert.equal((await fetch(new URL(file, base))).status, 200);
}
for (const file of [
  "/.private/evidence/REVIEW.md",
  "/reference-materials/old-portfolio.docx",
]) {
  assert.equal((await fetch(new URL(file, base))).status, 404);
}
console.log(
  "PASS: legacy redirects, approved assets and private-source boundaries.",
);
