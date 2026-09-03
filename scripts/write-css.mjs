import fs from "fs";
import path from "path";
const w = (rel,c)=>{const p=path.join(process.cwd(),rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,c,"utf8");};

w("src/styles/global.css", `:root {
  --color-primary: #1e4d7b;
  --color-primary-dark: #163a5c;
  --color-accent: #e8a317;
  --color-text: #1a1a1a;
  --color-muted: #5a6470;
  --color-bg: #ffffff;
  --color-surface: #f4f7fa;
  --radius: 0.5rem;
  --max-width: 72rem;
  --font: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, sans-serif;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}
img { max-width: 100%; height: auto; display: block; }
a { color: var(--color-primary); }
a:hover { color: var(--color-accent); }
.container { width: min(100% - 2rem, var(--max-width)); margin-inline: auto; }
.site-header {
  background: var(--color-primary);
  color: #fff;
  position: sticky; top: 0; z-index: 50;
}
.site-header a { color: #fff; text-decoration: none; }
.site-header a:hover { color: var(--color-accent); }
.header-inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.75rem 0; }
.logo { font-weight: 700; font-size: 1.1rem; }
.nav { display: flex; flex-wrap: wrap; gap: 0.75rem 1rem; font-size: 0.95rem; }
.btn {
  display: inline-block; padding: 0.65rem 1.25rem; border-radius: var(--radius);
  background: var(--color-accent); color: #1a1a1a; font-weight: 600; text-decoration: none; border: none; cursor: pointer;
}
.btn:hover { filter: brightness(1.05); color: #1a1a1a; }
.btn-outline { background: transparent; border: 2px solid #fff; color: #fff; }
.hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #fff; padding: 2.5rem 0 3rem;
}
.hero h1 { margin: 0 0 0.75rem; font-size: clamp(1.75rem, 4vw, 2.5rem); line-height: 1.2; }
.hero p { margin: 0 0 1.25rem; max-width: 42rem; opacity: 0.95; }
.grid { display: grid; gap: 1.25rem; }
@media (min-width: 640px) { .grid-2 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }
.card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 1.25rem;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}
.card h2, .card h3 { margin-top: 0; color: var(--color-primary); }
section { padding: 2.5rem 0; }
section.surface { background: var(--color-surface); }
.prose { max-width: 65ch; }
.prose h2 { color: var(--color-primary); margin-top: 2rem; }
.site-footer { background: var(--color-primary-dark); color: #e8eef4; padding: 2rem 0; font-size: 0.95rem; }
.site-footer a { color: #fff; }
.footer-grid { display: grid; gap: 1.5rem; }
@media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr; } }
.breadcrumbs { font-size: 0.875rem; margin: 1rem 0; color: var(--color-muted); }
.breadcrumbs ol { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.35rem; }
.breadcrumbs li:not(:last-child)::after { content: "/"; margin-left: 0.35rem; opacity: 0.5; }
.rating-badge { display: inline-flex; align-items: center; gap: 0.35rem; background: #fff; color: var(--color-primary); padding: 0.35rem 0.75rem; border-radius: 999px; font-weight: 600; }
.map-facade { position: relative; min-height: 280px; background: var(--color-surface); border-radius: var(--radius); overflow: hidden; }
.map-facade button { position: absolute; inset: 0; width: 100%; border: 0; background: transparent; cursor: pointer; font-weight: 600; color: var(--color-primary); }
`);

console.log("css ok");
