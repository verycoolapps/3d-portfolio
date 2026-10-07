/* ==========================================================================
   SOEMITROVERSE — UI SYSTEM
   HUD · drawers · holographic panels · quests · minimap · compass · views
   Pure DOM. No framework. Reads everything from window.SV_DATA.
   ========================================================================== */

const D = window.SV_DATA || {};
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let HOOKS = {};
let currentPanel = null;

/* ------------------------------------------------------------------ TOAST */
let toastTimer = 0;
function toast(text, gold) {
  const t = $('#toast'); if (!t) return;
  t.textContent = text;
  t.className = 'toast show' + (gold ? ' gold' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = 'toast' + (gold ? ' gold' : ''); }, gold ? 3400 : 2200);
}

/* ------------------------------------------------------------------ ZONE */
function setZone(name) { const z = $('#hudZone'); if (z) z.textContent = name; }

/* ------------------------------------------------------------------ QUEST */
function setQuest(idx, text) {
  $('#questIdx').textContent = String(idx + 1).padStart(2, '0');
  if (text) $('#questText').textContent = text;
}
function setQuestProgress(pct) {
  $('#questBar').style.width = pct + '%';
  $('#questPct').textContent = Math.round(pct) + '%';
}

/* ------------------------------------------------------------------ INTERACT */
let interactCb = null;
function setInteract(label, cb) {
  const b = $('#interactBtn');
  if (!label) { b.disabled = true; $('#interactLbl').textContent = 'INTERACT'; interactCb = null; return; }
  b.disabled = false;
  $('#interactLbl').textContent = label;
  interactCb = cb;
}
function fireInteract() { if (interactCb) interactCb(); }

/* ------------------------------------------------------------------ HOLO */
function openHolo(tag, html) {
  $('#holoTag').textContent = tag;
  $('#holoBody').innerHTML = html;
  const h = $('#holo'); h.hidden = false;
  requestAnimationFrame(() => h.classList.add('open'));
  if (document.pointerLockElement) document.exitPointerLock();
  if (HOOKS.onPanelOpen) HOOKS.onPanelOpen(true);
}
function closeHolo() {
  const h = $('#holo'); h.classList.remove('open');
  setTimeout(() => { h.hidden = true; }, 420);
  if (HOOKS.onPanelOpen) HOOKS.onPanelOpen(false);
}

/* ------------------------------------------------------------------ COMPASS */
function buildCompass() {
  const dial = $('#compassDial'); if (!dial) return;
  const pts = [['N', 0], ['E', 90], ['S', 180], ['W', 270]];
  dial.innerHTML = '';
  pts.forEach(([lbl]) => { const i = document.createElement('i'); i.textContent = lbl; dial.appendChild(i); });
}
function updateCompass(yawDeg) {
  const dial = $('#compassDial'); if (!dial) return;
  $$('i', dial).forEach((node, k) => {
    const base = k * 90, a = (base - yawDeg) * Math.PI / 180;
    const r = 17; // px radius from centre (compass is 2.5rem ≈ 40px)
    node.style.transform = 'translate(-50%,-50%) translate(' + (Math.sin(a) * r) + 'px,' + (-Math.cos(a) * r) + 'px)';
  });
}

/* ------------------------------------------------------------------ FPS */
function updateFps(n, extra) {
  const f = $('#fps'); if (f) f.textContent = n + ' FPS';
  const s = $('#perfStats');
  if (s && extra) s.innerHTML = extra;
}

/* ------------------------------------------------------------------ DRAWERS */
function openDrawer(id) {
  closeDrawers(id);
  const d = $('#' + id); if (!d) return;
  d.classList.add('open'); currentPanel = id;
  if (HOOKS.onPanelOpen) HOOKS.onPanelOpen(true);
}
function closeDrawers(except) {
  $$('.drawer').forEach(d => { if (d.id !== except) d.classList.remove('open'); });
  if (!except) currentPanel = null;
}
function anyPanelOpen() {
  if (!$('#holo').hidden) return true;
  return $$('.drawer').some(d => d.classList.contains('open'));
}
function closeEverything() {
  closeHolo(); closeDrawers();
}

/* ------------------------------------------------------------------ MINIMAP */
let MAP_DISTRICTS = [], MAP_SECRETS = [];
function initMinimap(districts, secrets) {
  MAP_DISTRICTS = districts || []; MAP_SECRETS = secrets || [];
  const legend = $('#mapLegend'); if (legend) {
    legend.innerHTML = '';
    MAP_DISTRICTS.forEach(dc => {
      const row = document.createElement('div');
      row.className = 'ml'; row.dataset.key = dc.key;
      row.innerHTML = '<i style="background:#' + dc.color.toString(16).padStart(6, '0') + '"></i>' + esc(dc.name);
      row.addEventListener('click', () => { if (HOOKS.onWaypoint) HOOKS.onWaypoint(dc.key); });
      legend.appendChild(row);
    });
  }
}
function drawMinimap(px, pz, yaw, visited, waypoint) {
  const c = $('#minimap'); if (!c) return;
  const ctx = c.getContext('2d');
  const W = c.width, H = c.height, S = 1.42; // world→map scale (world ±340 → ±480px cap)
  const cx = W / 2, cy = H / 2;
  const to = (x, z) => [cx + x * S * 0.62, cy + z * S * 0.62];

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#07080c'; ctx.fillRect(0, 0, W, H);

  // grid
  ctx.strokeStyle = 'rgba(42,48,64,.5)'; ctx.lineWidth = 1;
  for (let g = -400; g <= 400; g += 100) {
    let [ax, ay] = to(g, -400), [bx, by] = to(g, 400);
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
    let [cx1, cy1] = to(-400, g), [dx, dy] = to(400, g);
    ctx.beginPath(); ctx.moveTo(cx1, cy1); ctx.lineTo(dx, dy); ctx.stroke();
  }

  // districts
  MAP_DISTRICTS.forEach(dc => {
    const [x, y] = to(dc.x, dc.z);
    const on = visited && visited[dc.key];
    ctx.beginPath(); ctx.arc(x, y, on ? 9 : 6, 0, 7);
    ctx.fillStyle = '#' + dc.color.toString(16).padStart(6, '0');
    ctx.globalAlpha = on ? 1 : .45; ctx.fill(); ctx.globalAlpha = 1;
    if (on) { ctx.strokeStyle = 'rgba(255,176,102,.75)'; ctx.beginPath(); ctx.arc(x, y, 13, 0, 7); ctx.stroke(); }
    ctx.fillStyle = on ? '#f4f6fa' : '#616c82';
    ctx.font = '10px JetBrains Mono, monospace'; ctx.textAlign = 'center';
    ctx.fillText(dc.name.split(' ')[0], x, y - 17);
  });

  // secrets (only reveal found ones)
  MAP_SECRETS.forEach(s => {
    if (!s.found) return;
    const [x, y] = to(s.x, s.z);
    ctx.fillStyle = '#ffd98a'; ctx.beginPath();
    ctx.moveTo(x, y - 6); ctx.lineTo(x + 6, y); ctx.lineTo(x, y + 6); ctx.lineTo(x - 6, y); ctx.closePath(); ctx.fill();
  });

  // waypoint
  if (waypoint) {
    const [x, y] = to(waypoint.x, waypoint.z);
    ctx.strokeStyle = '#9ec8ff'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(x, y, 15, 0, 7); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x - 21, y); ctx.lineTo(x + 21, y); ctx.moveTo(x, y - 21); ctx.lineTo(x, y + 21); ctx.stroke();
  }

  // player
  const [pxm, pym] = to(px, pz);
  ctx.save(); ctx.translate(pxm, pym); ctx.rotate(yaw);
  ctx.fillStyle = '#ffb066';
  ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 8); ctx.lineTo(0, 4); ctx.lineTo(-7, 8); ctx.closePath(); ctx.fill();
  ctx.restore();

  // legend highlight
  $$('#mapLegend .ml').forEach(r => r.classList.toggle('here', false));
}

/* ------------------------------------------------------------------ VIEWS */
function holoChips(arr) { return (arr || []).map(x => '<span class="h-chip">' + esc(x) + '</span>').join(''); }
function holoItems(arr, kind) {
  return (arr || []).map(x => {
    if (typeof x === 'string') return '<div class="h-item"><span class="hi-n">' + esc(x) + '</span><span class="hi-c">' + esc(kind || '') + '</span></div>';
    return '<div class="h-item"><div><div class="hi-n">' + esc(x.name) + '</div><div class="hi-c">' + esc(x.cat || x.kind || kind || '') + '</div></div>' +
      (x.url ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">OPEN ↗</a>' : '') + '</div>';
  }).join('');
}
function holoGrid(pairs) {
  return '<div class="h-grid">' + pairs.map(([k, v]) => '<div class="h-cell"><dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd></div>').join('') + '</div>';
}

const VIEWS = {
  about() {
    const C = D.COMPANY;
    return {
      tag: 'ABOUT', html:
        '<div class="h-title">' + esc(D.IDENTITY.fullName) + '</div>' +
        '<div class="h-sub">' + esc(D.IDENTITY.roles.join(' · ')) + '</div>' +
        '<p class="h-desc">' + esc(C.summary) + '</p>' +
        holoGrid([['COMPANY', C.legalName], ['BRAND', C.brand], ['SINCE', C.since], ['BASE', C.city], ['FOCUS', 'Multi-disciplinary creative technology']]) +
        '<div class="h-sec-t">DISCIPLINES</div><div class="h-chips">' + holoChips(C.disciplines) + '</div>' +
        '<div class="h-sec-t">EDUCATION</div>' +
        D.EDUCATION.map(e => '<div class="h-item"><div><div class="hi-n">' + esc(e.name) + '</div><div class="hi-c">' + esc(e.degree) + '</div></div><span class="hi-c">' + esc(e.period) + '</span></div>').join('') +
        '<div class="h-sec-t">PHILOSOPHY</div><p class="h-desc">“' + esc(D.IDENTITY.philosophy) + '”</p>'
    };
  },
  projects() {
    return {
      tag: 'PROJECTS · 50+', html:
        '<div class="h-title">THE PRODUCT PORTFOLIO</div>' +
        '<div class="h-sub">iOS · macOS · ROBLOX · WEB · AI TOOLS</div>' +
        '<div class="h-sec-t">iOS GAMES · ' + D.IOS_GAMES.length + '</div><div class="h-list">' + holoItems(D.IOS_GAMES, 'GAME') + '</div>' +
        '<div class="h-sec-t">MAC GAMES · ' + D.MAC_GAMES.length + '</div><div class="h-list">' + holoItems(D.MAC_GAMES, 'MAC') + '</div>' +
        '<div class="h-sec-t">ROBLOX EXPERIENCES · ' + D.ROBLOX_GAMES.length + '</div><div class="h-list">' + holoItems(D.ROBLOX_GAMES, 'ROBLOX') + '</div>' +
        '<div class="h-sec-t">iOS APPS · ' + D.IOS_APPS.length + '</div><div class="h-list">' + holoItems(D.IOS_APPS) + '</div>' +
        '<div class="h-sec-t">WEBSITES & WEB APPS</div><div class="h-list">' + holoItems(D.WEB_APPS) + '</div>' +
        '<div class="h-cta"><a class="sv-btn primary" href="' + D.LINKS.website + '" target="_blank" rel="noopener">VCA WEBSITE</a>' +
        '<a class="sv-btn" href="' + D.LINKS.portfolio + '" target="_blank" rel="noopener">FULL ARCHIVE</a></div>'
    };
  },
  experience() {
    return {
      tag: 'EXPERIENCE', html:
        '<div class="h-title">THE ARCHIVE</div><div class="h-sub">VERIFIED CAREER TIMELINE</div>' +
        D.CAREER.map(c =>
          '<div class="h-sec-t">' + esc(c.period) + '</div>' +
          '<div class="h-title" style="font-size:1.05rem;margin-bottom:.2rem">' + esc(c.role) + '</div>' +
          '<div class="h-sub" style="margin-bottom:.7rem">' + esc(c.org) + ' · ' + esc(c.place) + '</div>' +
          '<p class="h-desc">' + esc(c.summary) + '</p>' +
          '<div class="h-chips">' + holoChips(c.tech) + '</div>'
        ).join('') +
        '<div class="h-sec-t">CERTIFICATIONS</div>' +
        D.CERTIFICATIONS.map(c => '<div class="h-item"><span class="hi-n">' + esc(c.name) + '</span><span class="hi-c">' + esc(c.year + (c.org ? ' · ' + c.org : '')) + '</span></div>').join('')
    };
  },
  skills() {
    return {
      tag: 'SKILLS', html:
        '<div class="h-title">SKILL CONSTELLATION</div><div class="h-sub">11 CORE COMPETENCIES</div>' +
        '<div class="h-list">' + D.SKILL_NODES.map(s =>
          '<div class="h-item"><div><div class="hi-n">' + esc(s.key) + '</div><div class="hi-c">' + esc(s.detail) + '</div></div><span class="hi-c">' + esc(s.code) + '</span></div>'
        ).join('') + '</div>' +
        '<div class="h-sec-t">TOOLKIT</div>' +
        D.TECH_STACK.map(g => '<div class="h-item"><div><div class="hi-n">' + esc(g.group) + '</div><div class="hi-c">' + esc(g.items.join(' · ')) + '</div></div></div>').join('') +
        '<div class="h-sec-t">CORE STRENGTHS</div><div class="h-chips">' + holoChips(D.SOFT_SKILLS) + '</div>'
    };
  },
  contact() {
    return {
      tag: 'COMMAND CENTER', html:
        '<div class="h-title">LET\u2019S BUILD SOMETHING IMPOSSIBLE.</div>' +
        '<div class="h-sub">' + esc(D.IDENTITY.fullName) + '</div>' +
        '<p class="h-desc">Have a project in mind? Looking for a creative developer, AI trainer, designer or product partner? I\u2019m always open to new opportunities and collaborations.</p>' +
        holoGrid([['EMAIL', D.IDENTITY.email], ['WHATSAPP', D.IDENTITY.whatsapp], ['WEBSITE', 'vcadeveloper.com'], ['LOCATION', D.IDENTITY.location]]) +
        '<div class="h-cta">' +
        '<a class="sv-btn primary" href="' + D.LINKS.linkedin + '" target="_blank" rel="noopener">LINKEDIN</a>' +
        '<a class="sv-btn" href="' + D.LINKS.portfolio + '" target="_blank" rel="noopener">PORTFOLIO</a>' +
        '<a class="sv-btn" href="' + D.LINKS.email + '">EMAIL</a>' +
        '<a class="sv-btn" href="' + D.LINKS.email + '">COLLABORATE</a></div>'
    };
  }
};

function openView(name) {
  const v = VIEWS[name]; if (!v) return;
  closeDrawers();
  const built = v(); openHolo(built.tag, built.html);
}

/* ------------------------------------------------------------------ WIRING */
function init(hooks) {
  HOOKS = hooks || {};
  buildCompass();

  $('#interactBtn').addEventListener('click', fireInteract);
  $('#holoClose').addEventListener('click', closeHolo);
  $('#holo').addEventListener('click', e => { if (e.target.id === 'holo' || e.target.classList.contains('holo-glow')) closeHolo(); });
  $('#mapToggle').addEventListener('click', () => { openDrawer('mapPanel'); $('#mapToggle').classList.add('active'); });
  $('#menuToggle').addEventListener('click', () => { openDrawer('menuPanel'); $('#menuToggle').classList.add('active'); });
  $$('.drawer-close').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.close; $('#' + id).classList.remove('open');
    $('#mapToggle').classList.remove('active'); $('#menuToggle').classList.remove('active');
    if (HOOKS.onPanelOpen) HOOKS.onPanelOpen(anyPanelOpen());
  }));
  $$('.menu-nav button').forEach(b => b.addEventListener('click', () => openView(b.dataset.view)));
  $$('[data-time]').forEach(b => b.addEventListener('click', () => {
    $$('[data-time]').forEach(x => x.classList.remove('on')); b.classList.add('on');
    if (HOOKS.onTime) HOOKS.onTime(b.dataset.time);
  }));
  $$('#qualityBtns button').forEach(b => b.addEventListener('click', () => {
    $$('#qualityBtns button').forEach(x => x.classList.remove('on')); b.classList.add('on');
    if (HOOKS.onQuality) HOOKS.onQuality(b.dataset.q);
  }));
  const slider = $('#timeSlider');
  if (slider) slider.addEventListener('input', () => { if (HOOKS.onTimeSlider) HOOKS.onTimeSlider(+slider.value); });
  const cyc = $('#cycleBtn');
  if (cyc) cyc.addEventListener('click', () => {
    cyc.classList.toggle('on');
    if (HOOKS.onCycle) HOOKS.onCycle(cyc.classList.contains('on'));
  });
  $('#cpClose').addEventListener('click', () => $('#controlsPrev').classList.remove('show'));
  const settings = document.createElement('button');
  settings.className = 'hud-chip'; settings.textContent = 'TIME'; settings.id = 'timeToggle';
  $('.hud-tr').insertBefore(settings, $('#menuToggle'));
  settings.addEventListener('click', () => openDrawer('settingsPanel'));

  // keyboard shortcuts
  window.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k === 'escape') { closeEverything(); $('#mapToggle').classList.remove('active'); $('#menuToggle').classList.remove('active'); }
    if (k === 'm') { openDrawer('mapPanel'); }
    if (k === 'q') { const p = $('#menuPanel'); p.classList.contains('open') ? closeDrawers() : openDrawer('menuPanel'); }
    if (k === 't') { $('#timeToggle').click(); }
  });
}

window.SV_UI = {
  init, toast, setZone, setQuest, setQuestProgress, setInteract,
  openHolo, closeHolo, openDrawer, closeDrawers, closeEverything, anyPanelOpen,
  initMinimap, drawMinimap, updateCompass, updateFps, openView
};
