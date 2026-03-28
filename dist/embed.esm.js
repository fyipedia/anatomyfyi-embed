/* anatomyfyi-embed v1.0.0 | MIT | https://widget.anatomyfyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.healthfyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.healthfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.healthfyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Body area */
.healthfyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.healthfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.healthfyi-row:last-child {
  border-bottom: none;
}

.healthfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.healthfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.healthfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.healthfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.healthfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.healthfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.healthfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.healthfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-stat { text-align:center; flex:1; }
.healthfyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.healthfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.healthfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.healthfyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.healthfyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.healthfyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.healthfyi-kv-row:last-child { border-bottom:none; }
.healthfyi-kv-label { font-size:11px; color:var(--muted); }
.healthfyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.healthfyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.healthfyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.healthfyi-desc { padding:10px 18px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.healthfyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.healthfyi-view-link a:hover { text-decoration:underline; }
.healthfyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Health domain: body system badge (AnatomyFYI)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-system-badge { display:inline-flex; align-items:center; gap:4px; padding:3px 8px; border-radius:4px; font-size:11px; font-weight:600; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); border:1px solid color-mix(in srgb, var(--accent) 25%, transparent); }

/* Health domain: drug type badge (PillFYI/DrugFYI) */
.healthfyi-drug-type { display:inline-block; font-size:10px; font-weight:600; padding:2px 8px; border-radius:10px; text-transform:uppercase; letter-spacing:0.04em; }
.healthfyi-drug-type[data-type="prescription"] { background:#fef2f2; color:#dc2626; }
.healthfyi-drug-type[data-type="otc"] { background:#f0fdf4; color:#16a34a; }
.healthfyi-drug-type[data-type="behind_counter"] { background:#fefce8; color:#ca8a04; }

/* Health domain: approval badge (DrugFYI) */
.healthfyi-approval-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 8px; border-radius:10px; font-size:10px; font-weight:600; }
.healthfyi-approval-badge[data-approved="true"] { background:#dcfce7; color:#15803d; }
.healthfyi-approval-badge[data-approved="false"] { background:#fef9c3; color:#a16207; }

/* Health domain: nutrition bar (NutriFYI) */
.healthfyi-nutri-bar { display:flex; height:8px; border-radius:4px; overflow:hidden; background:var(--surface); }
.healthfyi-nutri-bar-seg { height:100%; transition:width 0.4s ease; }

/* Health domain: macro grid (NutriFYI) */
.healthfyi-macro-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; padding:10px 18px; border-bottom:1px solid var(--border); }
.healthfyi-macro-item { text-align:center; padding:6px 4px; background:color-mix(in srgb, var(--accent) 6%, var(--bg)); border-radius:8px; }
.healthfyi-macro-value { font-size:16px; font-weight:700; color:var(--accent); line-height:1; }
.healthfyi-macro-label { font-size:9px; color:var(--muted); text-transform:uppercase; margin-top:2px; }

/* Health domain: formula display (DrugFYI) */
.healthfyi-formula { font-size:18px; font-weight:700; color:var(--accent); padding:10px 18px; border-bottom:1px solid var(--border); font-family:'Courier New',monospace; }
.healthfyi-formula sub { font-size:0.7em; vertical-align:sub; }

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/clean.ts
function getCleanCSS() {
  return `
/* Clean: flat header with border-bottom accent */
.healthfyi-header {
  padding: 14px 16px;
  border-bottom: 3px solid var(--accent);
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.healthfyi-header-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 3px 0;
  line-height: 1.3;
}

.healthfyi-header-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* Body area */
.healthfyi-body {
  padding: 12px 16px;
}

/* Key-value rows */
.healthfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
}

.healthfyi-row:last-child {
  border-bottom: none;
}

.healthfyi-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.healthfyi-value {
  font-size: 12px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.healthfyi-section-title {
  font-size: 10px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 8px 0;
}

/* Tags */
.healthfyi-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.healthfyi-link {
  font-size: 12px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.healthfyi-link:hover {
  text-decoration: underline;
}

.healthfyi-link svg {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
}

/* Footer link row */
.healthfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-stats-row { display:flex; gap:10px; padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-stat { text-align:center; flex:1; }
.healthfyi-stat-value { font-size:16px; font-weight:700; color:var(--accent); }
.healthfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid */
.healthfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-stat-box { padding:5px 7px; background:var(--surface); border-radius:4px; border:1px solid var(--border); }
.healthfyi-stat-box-label { font-size:9px; color:var(--muted); text-transform:uppercase; }
.healthfyi-stat-box-value { font-size:12px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.healthfyi-kv-rows { padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.healthfyi-kv-row:last-child { border-bottom:none; }
.healthfyi-kv-label { font-size:10px; color:var(--muted); }
.healthfyi-kv-value { font-size:10px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.healthfyi-pills { display:flex; flex-wrap:wrap; gap:3px; padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-pill { padding:2px 6px; border-radius:3px; font-size:10px; font-weight:500; background:var(--badge-bg); color:var(--badge-text); }

/* Card shared: section label */
.healthfyi-section-label { font-size:9px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.healthfyi-desc { padding:8px 16px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.healthfyi-view-link { display:block; text-align:center; padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-view-link a { color:var(--link); text-decoration:none; font-size:11px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.healthfyi-view-link a:hover { text-decoration:underline; }
.healthfyi-view-link svg { width:11px; height:11px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Health domain: body system badge
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-system-badge { display:inline-flex; align-items:center; gap:4px; padding:2px 7px; border-radius:3px; font-size:10px; font-weight:600; background:var(--surface); color:var(--text); border:1px solid var(--border); }

/* Drug type badge */
.healthfyi-drug-type { display:inline-block; font-size:9px; font-weight:600; padding:2px 7px; border-radius:3px; text-transform:uppercase; letter-spacing:0.04em; }
.healthfyi-drug-type[data-type="prescription"] { background:#fef2f2; color:#dc2626; }
.healthfyi-drug-type[data-type="otc"] { background:#f0fdf4; color:#16a34a; }
.healthfyi-drug-type[data-type="behind_counter"] { background:#fefce8; color:#ca8a04; }

/* Approval badge */
.healthfyi-approval-badge { display:inline-flex; align-items:center; gap:3px; padding:2px 7px; border-radius:3px; font-size:9px; font-weight:600; }
.healthfyi-approval-badge[data-approved="true"] { background:#dcfce7; color:#15803d; }
.healthfyi-approval-badge[data-approved="false"] { background:#fef9c3; color:#a16207; }

/* Nutrition bar */
.healthfyi-nutri-bar { display:flex; height:6px; border-radius:3px; overflow:hidden; background:var(--surface); }
.healthfyi-nutri-bar-seg { height:100%; transition:width 0.4s ease; }

/* Macro grid */
.healthfyi-macro-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:4px; padding:8px 16px; border-bottom:1px solid var(--border); }
.healthfyi-macro-item { text-align:center; padding:4px 3px; background:var(--surface); border-radius:4px; border:1px solid var(--border); }
.healthfyi-macro-value { font-size:14px; font-weight:700; color:var(--accent); line-height:1; }
.healthfyi-macro-label { font-size:8px; color:var(--muted); text-transform:uppercase; margin-top:2px; }

/* Formula display */
.healthfyi-formula { font-size:16px; font-weight:700; color:var(--text); padding:8px 16px; border-bottom:1px solid var(--border); font-family:'Courier New',monospace; }
.healthfyi-formula sub { font-size:0.7em; vertical-align:sub; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "clean":
      return getCleanCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.healthfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.healthfyi-widget[data-size="default"] {
  max-width: 420px;
}

.healthfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.healthfyi-widget *, .healthfyi-widget *::before, .healthfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.healthfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: healthfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes healthfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.healthfyi-error p {
  margin: 0 0 8px 0;
}

.healthfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.healthfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-search-wrap {
  padding: 12px 16px;
}

.healthfyi-search-form {
  display: flex;
  gap: 8px;
}

.healthfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.healthfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.healthfyi-search-input::placeholder {
  color: var(--muted);
}

.healthfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.healthfyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.healthfyi-search-results {
  padding: 0 16px 12px;
}

.healthfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.healthfyi-result-item:last-child {
  border-bottom: none;
}

.healthfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.healthfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Footer with medical disclaimer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid var(--border);
  gap: 4px;
}

.healthfyi-disclaimer {
  font-size: 9px;
  color: var(--muted);
  font-style: italic;
  text-align: center;
  line-height: 1.3;
}

.healthfyi-powered {
  font-size: 11px;
  color: var(--muted);
}

.healthfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.healthfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.healthfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.healthfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.healthfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["healthfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="healthfyi-loading">
      <span class="healthfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="healthfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var MEDICAL_DISCLAIMER = "For educational purposes only. Consult a healthcare professional for medical advice.";
function poweredByHTML(config) {
  return `<div class="healthfyi-footer"><span class="healthfyi-disclaimer">${MEDICAL_DISCLAIMER}</span><span class="healthfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span></div>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `healthfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kvRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="healthfyi-kv-row"><span class="healthfyi-kv-label">${esc(label)}</span><span class="healthfyi-kv-value">${esc(String(value))}</span></div>`;
}
function viewLink(url, label, _config) {
  return `<div class="healthfyi-view-link"><a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ${externalLinkIcon}</a></div>`;
}
function cardFooter(url, label, config) {
  return `${viewLink(url, label, config)}${poweredByHTML(config)}`;
}
function renderGlossaryCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = String((_c = (_b = (_a = data.name) != null ? _a : data.term) != null ? _b : data.slug) != null ? _c : "");
  const definition = String((_d = data.definition) != null ? _d : "");
  const extended = String((_f = (_e = data.extended_definition) != null ? _e : data.extended_description) != null ? _f : "");
  const categoryLabel = String((_h = (_g = data.category_name) != null ? _g : data.category) != null ? _h : "");
  const slug = String((_i = data.slug) != null ? _i : "");
  const termUrl = `https://${config.domain}/glossary/${esc(slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedTerms = data.related_terms;
  const relatedPills = relatedTerms && relatedTerms.length > 0 ? `<div class="healthfyi-pills">${relatedTerms.map(
    (rt) => `<a class="healthfyi-pill" href="https://${config.domain}/glossary/${esc(rt.slug)}/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">${esc(rt.name)}</a>`
  ).join("")}</div>` : "";
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(name)}</div>
        ${categoryLabel ? `<span class="healthfyi-badge" style="background:${config.accent};color:#fff;margin-top:4px;display:inline-block;">${esc(categoryLabel)}</span>` : ""}
      </div>
    </div>
    <div class="healthfyi-body" style="font-size:0.9rem;line-height:1.5;">
      ${esc(definition)}
    </div>
    ${extended ? `<div style="padding:0 18px 10px;font-size:0.85rem;color:var(--muted);line-height:1.5;">${esc(extended)}</div>` : ""}
    ${relatedPills}
    <div class="healthfyi-view-link"><a href="${termUrl}" target="_blank" rel="noopener">${esc(name)} ${externalLinkIcon}</a></div>
    <div class="healthfyi-view-link"><a href="${glossaryUrl}" target="_blank" rel="noopener">Full glossary on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderGuideCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const title = String((_c = (_b = (_a = data.title) != null ? _a : data.name) != null ? _b : data.slug) != null ? _c : "");
  const excerpt = String((_f = (_e = (_d = data.excerpt) != null ? _d : data.description) != null ? _e : data.summary) != null ? _f : "");
  const slug = String((_g = data.slug) != null ? _g : "");
  const guideUrl = `https://${config.domain}/guides/${esc(slug)}/`;
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(title)}</div>
        <div class="healthfyi-header-subtitle">Guide</div>
      </div>
    </div>
    ${excerpt ? `<div class="healthfyi-desc">${esc(excerpt)}</div>` : ""}
    ${cardFooter(guideUrl, `Read on ${config.name}`, config)}
  `;
}
function renderFAQCard(faqs, config) {
  if (!faqs || !faqs.length) return `<div class="healthfyi-body">No FAQs available.</div>${poweredByHTML(config)}`;
  const items = faqs.map(
    (faq) => `
    <details class="healthfyi-faq-item" style="border-bottom:1px solid var(--border);padding:10px 18px;">
      <summary style="cursor:pointer;font-size:0.9rem;font-weight:600;color:var(--text);list-style:none;display:flex;justify-content:space-between;align-items:center;">
        ${esc(faq.question)}
        <span style="flex-shrink:0;margin-left:8px;font-size:0.75rem;color:var(--muted);">+</span>
      </summary>
      <div style="margin-top:8px;font-size:0.85rem;color:var(--muted);line-height:1.5;">
        ${esc(faq.answer)}
      </div>
    </details>
  `
  ).join("");
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">Frequently Asked Questions</div>
        <div class="healthfyi-header-subtitle">${faqs.length} questions</div>
      </div>
    </div>
    ${items}
    ${poweredByHTML(config)}
  `;
}

// src/cards/anatomy-card.ts
var TYPE_LABELS = {
  organ: "Organ",
  bone: "Bone",
  muscle: "Muscle",
  nerve: "Nerve",
  vessel: "Vessel",
  joint: "Joint",
  ligament: "Ligament",
  gland: "Gland",
  cavity: "Cavity",
  region: "Region"
};
function renderAnatomyCard(data, config) {
  const d = data;
  const name = d.name || d.slug;
  const latinName = d.latin_name || "";
  const entityType = d.entity_type || "";
  const systemName = d.system_name || (d.system_slug ? d.system_slug.replace(/-/g, " ") : "");
  const regionName = d.region_name || (d.region_slug ? d.region_slug.replace(/-/g, " ") : "");
  const description = typeof d.description === "string" ? d.description : "";
  const entityUrl = d.url ? d.url.startsWith("http") ? d.url : `https://${config.domain}${d.url}` : `https://${config.domain}/structure/${esc(d.slug)}/`;
  const typeLabel = TYPE_LABELS[entityType] || entityType;
  const typeBadge = entityType ? `<span class="healthfyi-badge" style="background:${config.accent};color:#fff;">${esc(typeLabel)}</span>` : "";
  const systemBadge = systemName ? `<span class="healthfyi-system-badge">${esc(systemName)}</span>` : "";
  const regionBadge = regionName ? `<span class="healthfyi-badge">${esc(regionName)}</span>` : "";
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(name)}</div>
        ${latinName ? `<div class="healthfyi-header-subtitle" style="font-style:italic;">${esc(latinName)}</div>` : ""}
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;padding:10px 18px;border-bottom:1px solid var(--border);">
      ${typeBadge}${systemBadge}${regionBadge}
    </div>
    ${description ? `<div class="healthfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    <div class="healthfyi-kv-rows">
      ${kvRow("Type", typeLabel)}
      ${kvRow("System", systemName)}
      ${kvRow("Region", regionName)}
    </div>
    <div class="healthfyi-view-link">
      <a href="${esc(entityUrl)}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/pill-card.ts
var DRUG_TYPE_LABELS = {
  prescription: "Rx",
  otc: "OTC",
  behind_counter: "Behind Counter"
};
function renderPillCard(data, config) {
  const d = data;
  const name = d.name || d.slug;
  const drugType = d.drug_type || "";
  const dosageForm = d.dosage_form || "";
  const drugClassName = d.drug_class_name || (d.drug_class_slug ? d.drug_class_slug.replace(/-/g, " ") : "");
  const manufacturerName = d.manufacturer_name || (d.manufacturer_slug ? d.manufacturer_slug.replace(/-/g, " ") : "");
  const isActive = d.is_active !== false;
  const description = typeof d.description === "string" ? d.description : "";
  const drugUrl = d.url ? d.url.startsWith("http") ? d.url : `https://${config.domain}${d.url}` : `https://${config.domain}/drug/${esc(d.slug)}/`;
  const typeLabel = DRUG_TYPE_LABELS[drugType] || drugType;
  const typeBadge = drugType ? `<span class="healthfyi-drug-type" data-type="${esc(drugType)}">${esc(typeLabel)}</span>` : "";
  const statusBadge = isActive ? `<span class="healthfyi-badge" style="background:#dcfce7;color:#15803d;">Active</span>` : `<span class="healthfyi-badge" style="background:#fef2f2;color:#dc2626;">Discontinued</span>`;
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(name)}</div>
        ${dosageForm ? `<div class="healthfyi-header-subtitle">${esc(dosageForm)}</div>` : ""}
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;padding:10px 18px;border-bottom:1px solid var(--border);">
      ${typeBadge}${statusBadge}
    </div>
    ${description ? `<div class="healthfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    <div class="healthfyi-kv-rows">
      ${kvRow("Type", typeLabel)}
      ${kvRow("Form", dosageForm)}
      ${kvRow("Class", drugClassName)}
      ${kvRow("Manufacturer", manufacturerName)}
    </div>
    <div class="healthfyi-view-link">
      <a href="${esc(drugUrl)}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/formula.ts
function formulaToHtml(formula) {
  if (!formula) return "";
  if (/[\u2080-\u2089]/.test(formula)) return escapeHtml(formula);
  return escapeHtml(formula).replace(/([A-Za-z)\]])(\d+)/g, "$1<sub>$2</sub>");
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// src/cards/drug-card.ts
function renderDrugCard(data, config) {
  const d = data;
  const name = d.name_display || d.name || d.slug;
  const formula = d.molecular_formula || "";
  const isApproved = d.is_approved;
  const moleculeType = d.molecule_type || "";
  const molecularWeight = d.molecular_weight;
  const halfLife = d.half_life || "";
  const mechanism = d.mechanism_of_action || "";
  const casNumber = d.cas_number || "";
  const description = typeof d.description === "string" ? d.description : "";
  const drugUrl = d.url ? d.url.startsWith("http") ? d.url : `https://${config.domain}${d.url}` : `https://${config.domain}/drug/${esc(d.slug)}/`;
  const typeBadge = moleculeType ? `<span class="healthfyi-badge" style="background:${config.accent};color:#fff;">${esc(moleculeType)}</span>` : "";
  const approvalBadge = isApproved !== void 0 ? `<span class="healthfyi-approval-badge" data-approved="${isApproved}">${isApproved ? "FDA Approved" : "Not Approved"}</span>` : "";
  const formulaHtml = formula ? `<div class="healthfyi-formula">${formulaToHtml(formula)}</div>` : "";
  const mechanismExcerpt = mechanism && mechanism.length > 150 ? mechanism.slice(0, 150) + "..." : mechanism;
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(name)}</div>
        ${formula ? `<div class="healthfyi-header-subtitle">${esc(formula)}</div>` : ""}
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;padding:10px 18px;border-bottom:1px solid var(--border);">
      ${typeBadge}${approvalBadge}
    </div>
    ${formulaHtml}
    ${description ? `<div class="healthfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    <div class="healthfyi-kv-rows">
      ${kvRow("Molecular Weight", molecularWeight ? String(molecularWeight) + " g/mol" : null)}
      ${kvRow("CAS Number", casNumber)}
      ${kvRow("Half-Life", halfLife)}
      ${kvRow("Molecule Type", moleculeType)}
    </div>
    ${mechanismExcerpt ? `<div style="padding:10px 18px;border-bottom:1px solid var(--border);"><div class="healthfyi-section-label">Mechanism of Action</div><div style="font-size:11px;color:var(--muted);line-height:1.5;">${esc(mechanismExcerpt)}</div></div>` : ""}
    <div class="healthfyi-view-link">
      <a href="${esc(drugUrl)}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/nutrition.ts
function macroBarSegments(proteinPct, fatPct, carbPct) {
  const total = proteinPct + fatPct + carbPct;
  if (total <= 0) return [];
  const scale = 100 / total;
  return [
    { label: "Protein", pct: proteinPct * scale, color: "#3b82f6" },
    { label: "Fat", pct: fatPct * scale, color: "#f59e0b" },
    { label: "Carbs", pct: carbPct * scale, color: "#22c55e" }
  ].filter((s) => s.pct > 0);
}

// src/cards/nutri-card.ts
async function fetchNutritionData(config, slug) {
  try {
    const data = await fetchAPI(
      config.apiBase,
      `nutrition/`,
      { food_slug: slug }
    );
    if (Array.isArray(data)) return data[0] || null;
    return data;
  } catch (e) {
    return null;
  }
}
function renderNutriCard(foodData, nutriData, config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const d = foodData;
  const name = d.name || d.slug;
  const categoryName = d.category_name || (d.category_slug ? d.category_slug.replace(/-/g, " ") : "");
  const servingSize = d.serving_size_g;
  const servingDesc = d.serving_description || "";
  const description = typeof d.description === "string" ? d.description : "";
  const foodUrl = d.url ? d.url.startsWith("http") ? d.url : `https://${config.domain}${d.url}` : `https://${config.domain}/food/${esc(d.slug)}/`;
  const categoryBadge = categoryName ? `<span class="healthfyi-badge" style="background:${config.accent};color:#fff;">${esc(categoryName)}</span>` : "";
  let macroGridHtml = "";
  let macroBarHtml = "";
  let nutritionRows = "";
  if (nutriData) {
    const cal = (_a = nutriData.calories) != null ? _a : 0;
    const protein = (_b = nutriData.protein_g) != null ? _b : 0;
    const carbs = (_c = nutriData.total_carbohydrate_g) != null ? _c : 0;
    const fat = (_d = nutriData.total_fat_g) != null ? _d : 0;
    macroGridHtml = `
      <div class="healthfyi-macro-grid">
        <div class="healthfyi-macro-item">
          <div class="healthfyi-macro-value">${cal}</div>
          <div class="healthfyi-macro-label">Cal</div>
        </div>
        <div class="healthfyi-macro-item">
          <div class="healthfyi-macro-value">${protein}g</div>
          <div class="healthfyi-macro-label">Protein</div>
        </div>
        <div class="healthfyi-macro-item">
          <div class="healthfyi-macro-value">${carbs}g</div>
          <div class="healthfyi-macro-label">Carbs</div>
        </div>
        <div class="healthfyi-macro-item">
          <div class="healthfyi-macro-value">${fat}g</div>
          <div class="healthfyi-macro-label">Fat</div>
        </div>
      </div>
    `;
    const proteinPct = (_e = nutriData.protein_calories_pct) != null ? _e : cal > 0 ? protein * 4 / cal * 100 : 0;
    const fatPct = (_f = nutriData.fat_calories_pct) != null ? _f : cal > 0 ? fat * 9 / cal * 100 : 0;
    const carbPct = (_g = nutriData.carb_calories_pct) != null ? _g : cal > 0 ? carbs * 4 / cal * 100 : 0;
    const segments = macroBarSegments(proteinPct, fatPct, carbPct);
    if (segments.length > 0) {
      const segs = segments.map((s) => `<div class="healthfyi-nutri-bar-seg" style="width:${s.pct.toFixed(1)}%;background:${s.color};" title="${esc(s.label)}: ${s.pct.toFixed(0)}%"></div>`).join("");
      macroBarHtml = `<div style="padding:8px 18px;border-bottom:1px solid var(--border);"><div class="healthfyi-nutri-bar">${segs}</div></div>`;
    }
    nutritionRows = `<div class="healthfyi-kv-rows">
      ${kvRow("Fiber", nutriData.dietary_fiber_g != null ? nutriData.dietary_fiber_g + " g" : null)}
      ${kvRow("Sugars", nutriData.sugars_g != null ? nutriData.sugars_g + " g" : null)}
      ${kvRow("Sodium", nutriData.sodium_mg != null ? nutriData.sodium_mg + " mg" : null)}
    </div>`;
  }
  return `
    <div class="healthfyi-header">
      <div>
        <div class="healthfyi-header-title">${esc(name)}</div>
        ${servingDesc ? `<div class="healthfyi-header-subtitle">${esc(servingDesc)}${servingSize ? ` (${servingSize}g)` : ""}</div>` : servingSize ? `<div class="healthfyi-header-subtitle">${servingSize}g serving</div>` : ""}
      </div>
    </div>
    ${categoryBadge ? `<div style="padding:10px 18px;border-bottom:1px solid var(--border);">${categoryBadge}</div>` : ""}
    ${macroGridHtml}
    ${macroBarHtml}
    ${description ? `<div class="healthfyi-desc">${esc(description.length > 200 ? description.slice(0, 200) + "..." : description)}</div>` : ""}
    ${nutritionRows}
    <div class="healthfyi-view-link">
      <a href="${esc(foodUrl)}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a>
    </div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "healthfyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-entity-widget");
  renderLoading(container);
  let apiPath;
  switch (config.site) {
    case "anatomyfyi":
      apiPath = `entities/${slug}/`;
      break;
    case "pillfyi":
    case "drugfyi":
      apiPath = `drugs/${slug}/`;
      break;
    case "nutrifyi":
      apiPath = `foods/${slug}/`;
      break;
    default:
      apiPath = `${config.entitySlug}/${slug}/`;
  }
  if (config.site === "nutrifyi") {
    Promise.all([
      fetchAPI(config.apiBase, apiPath),
      fetchNutritionData(config, slug)
    ]).then(([foodData, nutriData]) => {
      container.innerHTML = renderNutriCard(foodData, nutriData, config);
    }).catch(() => {
      renderError(container, `Food "${escapeHTML(slug)}" not found.`, config);
    });
  } else {
    fetchAPI(config.apiBase, apiPath).then((data) => {
      var _a2;
      let html;
      switch (config.site) {
        case "anatomyfyi":
          html = renderAnatomyCard(data, config);
          break;
        case "pillfyi":
          html = renderPillCard(data, config);
          break;
        case "drugfyi":
          html = renderDrugCard(data, config);
          break;
        default: {
          const name = String((_a2 = data.name) != null ? _a2 : slug);
          const entityUrl = typeof data.url === "string" && data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML(slug)}/`;
          html = `
              <div style="padding:16px;font-size:1rem;font-weight:600;margin-bottom:8px;">${escapeHTML(name)}</div>
              <div class="healthfyi-view-link">
                <a href="${escapeHTML(entityUrl)}" target="_blank" rel="noopener">
                  View on ${escapeHTML(config.name)} ${externalLinkIcon}
                </a>
              </div>
              ${poweredByHTML(config)}
            `;
          break;
        }
      }
      container.innerHTML = html;
    }).catch(() => {
      renderError(container, `${escapeHTML(config.entityName.slice(0, -1))} "${escapeHTML(slug)}" not found.`, config);
    });
  }
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function formatCellValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  return escapeHTML2(String(val));
}
var SITES_WITH_COMPARISONS = /* @__PURE__ */ new Set(["anatomyfyi", "drugfyi", "nutrifyi"]);
function initCompareWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-compare-widget");
  if (!SITES_WITH_COMPARISONS.has(config.site)) {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
      <div style="padding:12px;text-align:center;">
        <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
          Comparison not available via API.
        </div>
        <a class="healthfyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
           style="color:${config.accent}">
          View on ${escapeHTML2(config.name)} ${externalLinkIcon}
        </a>
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  if (!slug) {
    container.innerHTML = `
      <div class="healthfyi-error">
        <p>Missing data-slug attribute.</p>
        <a href="https://${config.domain}" target="_blank" rel="noopener">Visit ${escapeHTML2(config.name)}</a>
      </div>
    `;
    return;
  }
  renderLoading(container);
  fetchAPI(config.apiBase, `comparisons/${slug}/`).then((data) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const nameA = (_c = (_b = (_a2 = data.entity_a) == null ? void 0 : _a2.name) != null ? _b : data.name_a) != null ? _c : "Item A";
    const nameB = (_f = (_e = (_d = data.entity_b) == null ? void 0 : _d.name) != null ? _e : data.name_b) != null ? _f : "Item B";
    const title = (_g = data.title) != null ? _g : `${nameA} vs ${nameB}`;
    const rows = (_h = data.rows) != null ? _h : [];
    const keyDiffs = (_i = data.key_differences) != null ? _i : [];
    const summary = (_j = data.summary) != null ? _j : "";
    const compareUrl = data.url ? data.url.startsWith("http") ? data.url : `https://${config.domain}${data.url}` : `https://${config.domain}/compare/${escapeHTML2(slug)}/`;
    const urlA = ((_k = data.entity_a) == null ? void 0 : _k.url) ? data.entity_a.url.startsWith("http") ? data.entity_a.url : `https://${config.domain}${data.entity_a.url}` : `https://${config.domain}`;
    const urlB = ((_l = data.entity_b) == null ? void 0 : _l.url) ? data.entity_b.url.startsWith("http") ? data.entity_b.url : `https://${config.domain}${data.entity_b.url}` : `https://${config.domain}`;
    container.innerHTML = `
        <div style="padding:14px 18px;">
          <div style="font-size:1rem;font-weight:600;margin-bottom:10px;">
            ${escapeHTML2(title)}
          </div>

          ${summary ? `<div style="font-size:0.85rem;color:#475569;margin-bottom:10px;line-height:1.4;">
                 ${escapeHTML2(summary)}
               </div>` : ""}

          <div style="overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
              <thead>
                <tr>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};color:#64748b;font-weight:600;width:35%;">Property</th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlA)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameA)} \u2197</a>
                  </th>
                  <th style="text-align:left;padding:6px 8px;border-bottom:2px solid ${config.accent};font-weight:600;width:32.5%;">
                    <a href="${escapeHTML2(urlB)}" target="_blank" rel="noopener"
                       style="color:${config.accent};text-decoration:none;">${escapeHTML2(nameB)} \u2197</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(
      (row, i) => `
                  <tr style="background:${i % 2 === 0 ? "transparent" : "#f8fafc"};">
                    <td style="padding:5px 8px;color:#64748b;font-weight:500;">${escapeHTML2(row.label)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_a)}</td>
                    <td style="padding:5px 8px;">${formatCellValue(row.value_b)}</td>
                  </tr>`
    ).join("")}
              </tbody>
            </table>
          </div>

          ${keyDiffs.length > 0 ? `<div style="margin-top:10px;padding:8px;background:#f0fdf4;border-radius:6px;border-left:3px solid #10b981;">
                 <div style="font-size:0.75rem;font-weight:600;color:#059669;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.05em;">Key Differences</div>
                 <ul style="margin:0;padding-left:16px;font-size:0.8rem;color:#374151;">
                   ${keyDiffs.map((d) => `<li style="margin:2px 0;">${escapeHTML2(d)}</li>`).join("")}
                 </ul>
               </div>` : ""}

          <div style="margin-top:10px;">
            <a class="healthfyi-view-link" href="${escapeHTML2(compareUrl)}" target="_blank" rel="noopener"
               style="color:${config.accent}">
              Full comparison on ${escapeHTML2(config.name)} ${externalLinkIcon}
            </a>
          </div>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    const siteUrl = `https://${config.domain}`;
    container.innerHTML = `
        <div style="padding:12px;text-align:center;">
          <div style="font-size:0.9rem;color:#64748b;margin-bottom:8px;">
            Comparison not available via API. View on ${escapeHTML2(config.name)}.
          </div>
          <a class="healthfyi-view-link" href="${escapeHTML2(siteUrl)}" target="_blank" rel="noopener"
             style="color:${config.accent}">
            Visit ${escapeHTML2(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-healthfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-healthfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(faqs, domain, _siteName) {
  if (document.querySelector('script[data-healthfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `https://${domain}/`
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-healthfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "healthfyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-glossary-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `glossary/${slug}/`).then((data) => {
    var _a2, _b, _c, _d;
    container.innerHTML = renderGlossaryCard(data, config);
    if (el.dataset.noSnippet !== "true") {
      const name = String((_c = (_b = (_a2 = data.name) != null ? _a2 : data.term) != null ? _b : data.slug) != null ? _c : "");
      const definition = String((_d = data.definition) != null ? _d : "");
      injectDefinedTerm({ name, definition }, config.domain, config.name);
    }
  }).catch(() => {
    renderError(container, `Unable to load glossary term "${esc(slug)}".`, config);
  });
}

// src/widgets/guide.ts
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "healthfyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-guide-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `guides/${slug}/`).then((data) => {
    container.innerHTML = renderGuideCard(data, config);
  }).catch(() => {
    renderError(container, `Guide "${esc(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS2 = {
  structure: "Structure",
  organ: "Organ",
  bone: "Bone",
  muscle: "Muscle",
  drug: "Drug",
  food: "Food",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function getSearchPath(site) {
  switch (site) {
    case "anatomyfyi":
      return "entities/";
    case "pillfyi":
      return "drugs/";
    case "drugfyi":
      return "drugs/";
    case "nutrifyi":
      return "foods/";
    default:
      return "search/";
  }
}
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}...`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="healthfyi-search-wrap">
      <div class="healthfyi-search-form" style="position:relative;display:flex;align-items:center;">
        <span style="position:absolute;left:10px;color:#94a3b8;pointer-events:none;">${SEARCH_ICON}</span>
        <input
          class="healthfyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML3(placeholder)}"
          aria-label="Search ${escapeHTML3(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
          style="width:100%;padding:8px 10px 8px 32px;border:1px solid #e2e8f0;border-radius:6px;font-size:0.875rem;outline:none;background:#fff;color:#1e293b;box-sizing:border-box;"
        >
      </div>
      <div class="healthfyi-search-dropdown" role="listbox" hidden
           style="margin-top:4px;border:1px solid #e2e8f0;border-radius:6px;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,0.1);max-height:280px;overflow-y:auto;"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".healthfyi-search-input");
  const dropdown = container.querySelector(".healthfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".healthfyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      const anchor = item;
      if (i === idx) {
        anchor.style.background = `${config.accent}15`;
        anchor.style.outline = `2px solid ${config.accent}`;
        anchor.style.outlineOffset = "-2px";
      } else {
        anchor.style.background = "";
        anchor.style.outline = "";
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c, _d;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div style="padding:12px 14px;font-size:0.85rem;color:#64748b;">
          No results for <strong>${escapeHTML3(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS2[item.type]) != null ? _a2 : item.type : null;
      const itemDesc = (_d = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : item.subtitle) != null ? _d : "";
      const href = item.url ? item.url.startsWith("http") ? item.url : `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML3(item.slug)}/`;
      html += `
        <a
          class="healthfyi-search-result-item"
          href="${escapeHTML3(href)}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
          style="display:block;padding:8px 14px;text-decoration:none;color:inherit;border-bottom:1px solid #f1f5f9;transition:background 0.1s;"
        >
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">${escapeHTML3(item.name)}</span>
            ${typeLabel ? `<span style="font-size:0.7rem;padding:1px 6px;border-radius:10px;background:${config.accent}20;color:${config.accent};white-space:nowrap;flex-shrink:0;font-weight:500;">${escapeHTML3(typeLabel)}</span>` : ""}
          </div>
          ${itemDesc ? `<div style="font-size:0.75rem;color:#64748b;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHTML3(itemDesc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchApiPath = getSearchPath(config.site);
    const searchUrl = `https://${config.domain}/api/v1/${searchApiPath}?search=${encodeURIComponent(q)}&limit=10`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
  input.addEventListener("focus", () => {
    input.style.borderColor = config.accent;
    input.style.boxShadow = `0 0 0 2px ${config.accent}30`;
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#e2e8f0";
    input.style.boxShadow = "";
  });
}

// src/widgets/faq.ts
function initFAQWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "healthfyi-faq-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "healthfyi-faq-widget");
  renderLoading(container);
  fetchAPI(config.apiBase, `faqs/`, { topic: slug }).then((data) => {
    let faqs;
    if (data.faqs && Array.isArray(data.faqs)) {
      faqs = data.faqs;
    } else if (data.results && Array.isArray(data.results)) {
      faqs = data.results;
    } else if (data.question && data.answer) {
      faqs = [{ question: String(data.question), answer: String(data.answer) }];
    } else {
      faqs = [];
    }
    container.innerHTML = renderFAQCard(faqs, config);
    if (el.dataset.noSnippet !== "true" && faqs.length > 0) {
      injectFAQPage(faqs, config.domain, config.name);
    }
  }).catch(() => {
    renderError(container, `Unable to load FAQs for "${esc(slug)}".`, config);
  });
}

// src/inline/system-badge.ts
var SYSTEM_COLORS = {
  cardiovascular: "#dc2626",
  skeletal: "#d4d4d8",
  muscular: "#ea580c",
  nervous: "#eab308",
  respiratory: "#06b6d4",
  digestive: "#22c55e",
  urinary: "#a855f7",
  reproductive: "#ec4899",
  endocrine: "#8b5cf6",
  lymphatic: "#14b8a6",
  integumentary: "#f59e0b"
};
var SYSTEM_LABELS = {
  cardiovascular: "Cardiovascular",
  skeletal: "Skeletal",
  muscular: "Muscular",
  nervous: "Nervous",
  respiratory: "Respiratory",
  digestive: "Digestive",
  urinary: "Urinary",
  reproductive: "Reproductive",
  endocrine: "Endocrine",
  lymphatic: "Lymphatic",
  integumentary: "Integumentary"
};
function initSystemBadgeInline(el, config) {
  var _a, _b, _c;
  const system = (_a = el.dataset.system) != null ? _a : "";
  if (!system) return;
  el.setAttribute("data-inline", "");
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  const color = (_b = SYSTEM_COLORS[system]) != null ? _b : config.accent;
  const label = (_c = SYSTEM_LABELS[system]) != null ? _c : system.charAt(0).toUpperCase() + system.slice(1);
  container.innerHTML = `
    <span class="healthfyi-system-badge" style="display:inline-flex;align-items:center;gap:5px;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:600;background:color-mix(in srgb, ${color} 12%, var(--bg));color:${color};border:1px solid color-mix(in srgb, ${color} 25%, transparent);">
      <span style="width:6px;height:6px;border-radius:50%;background:${color};flex-shrink:0;"></span>
      ${label}
    </span>
  `;
}

// src/_entry_anatomyfyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "faq":
      initFAQWidget(el, config);
      break;
    case "system-badge":
      initSystemBadgeInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"anatomyfyi","name":"AnatomyFYI","domain":"anatomyfyi.com","accent":"#E11D48","attribute":"data-anatomyfyi","apiBase":"https://anatomyfyi.com/api/v1/","searchPath":"/search/","entityName":"Structures","entitySlug":"structures"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"anatomyfyi","name":"AnatomyFYI","domain":"anatomyfyi.com","accent":"#E11D48","attribute":"data-anatomyfyi","apiBase":"https://anatomyfyi.com/api/v1/","searchPath":"/search/","entityName":"Structures","entitySlug":"structures"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"anatomyfyi","name":"AnatomyFYI","domain":"anatomyfyi.com","accent":"#E11D48","attribute":"data-anatomyfyi","apiBase":"https://anatomyfyi.com/api/v1/","searchPath":"/search/","entityName":"Structures","entitySlug":"structures"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"anatomyfyi","name":"AnatomyFYI","domain":"anatomyfyi.com","accent":"#E11D48","attribute":"data-anatomyfyi","apiBase":"https://anatomyfyi.com/api/v1/","searchPath":"/search/","entityName":"Structures","entitySlug":"structures"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.styleVariant = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"anatomyfyi","name":"AnatomyFYI","domain":"anatomyfyi.com","accent":"#E11D48","attribute":"data-anatomyfyi","apiBase":"https://anatomyfyi.com/api/v1/","searchPath":"/search/","entityName":"Structures","entitySlug":"structures"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-faq`, initFAQWidget, ["slug", "category"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
