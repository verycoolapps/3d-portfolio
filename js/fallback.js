/* ==========================================================================
   SOEMITROVERSE — 2D FALLBACK EXPERIENCE
   If WebGL is unavailable, never show a blank screen: render a beautiful,
   fully data-driven interactive portfolio from window.SV_DATA.
   ========================================================================== */
(function () {
  const D = window.SV_DATA;
  if (!D) return;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };

  function section(kicker, title, id) {
    const s = el('section', 'fb-sect'); if (id) s.id = id;
    s.appendChild(el('div', 'fb-k', kicker));
    s.appendChild(el('h2', null, title));
    return s;
  }
  function card(title, meta, body, link) {
    const c = el('div', 'fb-card');
    c.appendChild(el('h3', null, title));
    if (meta) c.appendChild(el('div', 'fb-cm', meta));
    if (body) c.appendChild(el('p', null, body));
    if (link) { const a = el('a', null, 'OPEN ↗'); a.href = link; a.target = '_blank'; a.rel = 'noopener'; c.appendChild(a); }
    return c;
  }

  window.SV_renderFallback = function () {
    const C = D.COMPANY;

    /* ---- hero stats ---- */
    const stats = [
      [C.counts.iOSGames, 'iOS GAMES'], [C.counts.MacGames, 'MAC GAMES'],
      [C.counts.Roblox, 'ROBLOX WORLDS'], [C.counts.iOSApps, 'iOS APPS'],
      [C.counts.Prompters, 'AI TOOLS'], ['8+', 'YEARS AS CEO']
    ];
    { const w = $('#fbStats'); w.innerHTML = '';
      stats.forEach(([n, l]) => { const d = el('div', 'fb-stat'); d.appendChild(el('b', null, n)); d.appendChild(el('span', null, l)); w.appendChild(d); }); }

    const root = $('#fbRoot'); root.innerHTML = '';

    /* ---- ABOUT ---- */
    const about = section('01 · IDENTITY', 'WHO I AM', 'fb-about');
    about.appendChild(el('p', 'fb-p',
      "I'm <b>Adhithya Pranandra Soemitro</b> — a self-driven creative technologist based in Jakarta, Indonesia. " +
      "I hold a Bachelor of Information Systems from Binus International University and a Master of Business from Charles Sturt University. " +
      "Since 2018 I have run <b>PT. Agra Karya Digital</b> as CEO &amp; Solopreneur, building iOS games, Mac applications, Roblox experiences, " +
      "mobile apps and websites under the <b>VeryCoolApps (VCA)</b> brand."));
    about.appendChild(el('p', 'fb-p',
      "My background spans marketing strategy, interior/exterior 3D design, mobile app development, SEO analysis, video production and augmented reality — " +
      "making me a genuinely multi-disciplinary creator. My working philosophy: “" + D.IDENTITY.philosophy + "”"));
    root.appendChild(about);

    /* ---- FIND ME / HERO WORK TEASER ---- */
    const work = section('02 · THE WORK', '50+ COMMERCIAL PRODUCTS SHIPPED', 'fb-work');
    const wg = el('div', 'fb-grid');
    wg.appendChild(card('iOS Games', '17+ TITLES · BUILDBOX / UNITY', 'Including Greyfront, Medieval Shopman, Zombies vs. Werewolves, Lil Sharky and Airforce Ranger.'));
    wg.appendChild(card('Mac Games', '3 TITLES · UNREAL ENGINE', 'Chaotic Mayhem, Labyrinth of Shadows and The Warrior\u2019s Trial — desktop action, horror and puzzle.'));
    wg.appendChild(card('Roblox Worlds', '13+ EXPERIENCES', 'Tower Capture, Sniper Survival, Soul Swap, Nimic Grounds, Desa Pajak Indonesia and more.'));
    wg.appendChild(card('iOS Apps', '11+ APPLICATIONS', 'BoreBore, Job Recap, FoodieTracker, Page Whisper, Xplain Estate, MileLeap and more.'));
    wg.appendChild(card('AI Prompt Tools', '38 LIVE WEB TOOLS', 'A complete prompt-engineering suite — 3D, comics, GDD, branding, music, business documents.'));
    wg.appendChild(card('Websites & Web Apps', '10+ BUILDS', 'vcadeveloper.com, Myths of a Nation e-commerce, CRM Pro, Aksara Fiskal, Konten Kreator Tool.'));
    work.appendChild(wg);
    root.appendChild(work);

    /* ---- GAME DISTRICT ---- */
    const games = section('03 · GAME DISTRICT', 'VERIFIED PROJECTS');
    const gg = el('div', 'fb-grid');
    D.IOS_GAMES.forEach(g => gg.appendChild(card(g.emoji + ' ' + g.name, 'iOS GAME · ' + g.engine, null)));
    D.MAC_GAMES.forEach(g => gg.appendChild(card(g.name, 'MAC GAME · ' + g.engine, g.genre)));
    D.ROBLOX_GAMES.forEach(n => gg.appendChild(card(n, 'ROBLOX EXPERIENCE', null)));
    games.appendChild(gg);
    root.appendChild(games);

    /* ---- PROJECTS (apps + web) ---- */
    const proj = section('04 · PRODUCT DISTRICT', 'APPLICATIONS & PLATFORMS');
    const pg = el('div', 'fb-grid');
    D.IOS_APPS.forEach(a => pg.appendChild(card(a.name, 'iOS · ' + a.cat, null, a.url)));
    D.WEB_APPS.forEach(a => pg.appendChild(card(a.name, a.kind, null, a.url)));
    proj.appendChild(pg);
    root.appendChild(proj);

    /* ---- ACADEMY ---- */
    const acad = section('05 · THE ACADEMY', 'AI TRAINING & KNOWLEDGE TOOLS');
    acad.appendChild(el('p', 'fb-p',
      "Technology is only powerful when people know how to use it. The Academy collects the 38 AI prompt tools built under VeryCoolApps — " +
      "applied AI literacy, packaged so anyone can create professional output without becoming an engineer."));
    const ag = el('div', 'fb-grid');
    D.PROMPTERS.forEach(p => ag.appendChild(card(p.name, 'AI PROMPT TOOL', null, p.url)));
    acad.appendChild(ag);
    root.appendChild(acad);

    /* ---- EXERCISE / TIMELINE ---- */
    const exp = section('06 · THE ARCHIVE', 'CAREER TIMELINE', 'fb-exp');
    const tl = el('div', 'fb-tl');
    D.CAREER.forEach(c => {
      const it = el('div', 'fb-tl-item');
      it.appendChild(el('div', 'fb-period', c.period));
      it.appendChild(el('div', 'fb-role', c.role));
      it.appendChild(el('div', 'fb-org', c.org + ' · ' + c.place));
      it.appendChild(el('p', 'fb-p', c.summary));
      const ch = el('div', 'h-chips');
      c.tech.forEach(t => ch.appendChild(el('span', 'h-chip', t)));
      it.appendChild(ch);
      tl.appendChild(it);
    });
    exp.appendChild(tl);

    const edu = section('', 'EDUCATION & CERTIFICATIONS');
    const eg = el('div', 'fb-grid');
    D.EDUCATION.forEach(e => eg.appendChild(card(e.name, e.period, e.degree)));
    D.CERTIFICATIONS.forEach(c => eg.appendChild(card(c.name, c.year + (c.org ? ' · ' + c.org : ''), null)));
    edu.appendChild(eg);
    exp.appendChild(edu);
    root.appendChild(exp);

    /* ---- SKILLS ---- */
    const sk = section('07 · TECHNOLOGY CENTER', 'SKILLS & TOOLKIT', 'fb-skills');
    const sg = el('div', 'fb-grid');
    D.TECH_STACK.forEach(s => sg.appendChild(card(s.group, 'TOOLKIT', s.items.join(' · '))));
    sk.appendChild(sg);
    const cn = el('div', 'fb-grid'); cn.style.marginTop = '.8rem';
    cn.appendChild(card('Core Strengths', 'SOFT SKILLS', D.SOFT_SKILLS.join(' · ')));
    sk.appendChild(cn);
    root.appendChild(sk);

    /* ---- CONTACT ---- */
    const ct = section('08 · COMMAND CENTER', "LET'S BUILD SOMETHING IMPOSSIBLE", 'fb-contact');
    ct.appendChild(el('p', 'fb-p',
      "Have a project in mind? Looking for a creative developer, designer, AI trainer or marketing partner? I'm always open to new opportunities and collaborations."));
    const cg = el('div', 'fb-grid');
    cg.appendChild(card('LinkedIn', 'PROFESSIONAL NETWORK', null, D.LINKS.linkedin));
    cg.appendChild(card('Portfolio', 'FULL WORK ARCHIVE', null, D.LINKS.portfolio));
    cg.appendChild(card('Email', 'apranandra@gmail.com', null, D.LINKS.email));
    cg.appendChild(card('WhatsApp', D.IDENTITY.whatsapp, null, 'https://wa.me/6281519250845'));
    cg.appendChild(card('Website', 'vcadeveloper.com', null, D.LINKS.website));
    cg.appendChild(card('Collaborate', 'OPEN TO PROJECTS', null, D.LINKS.email));
    ct.appendChild(cg);
    root.appendChild(ct);
  };
  function revealFallback(){
    const fb=document.querySelector('#fallback');
    if(!fb||!window.SV_renderFallback)return;
    window.__SOEMITROVERSE_READY=true;
    fb.hidden=false;
    document.querySelector('#stage').hidden=true;
    document.querySelector('#boot').classList.add('gone');
    document.querySelector('#cinematic').classList.add('gone');
    window.SV_renderFallback();
  }
  document.querySelectorAll('#bootSkip,#cineSkip').forEach(button=>button.addEventListener('click',function(){
    window.__SV_SKIP_REQUESTED=true;
    if(window.__SOEMITROVERSE_READY&&window.__SV_ENTER_WORLD){window.__SV_ENTER_WORLD();return;}
    if(!window.__SV_APP_STARTED)setTimeout(()=>{if(!window.__SV_APP_STARTED&&!window.__SOEMITROVERSE_READY)revealFallback();},1800);
  }));
  window.setTimeout(function () {
    if (!window.__SOEMITROVERSE_READY) revealFallback();
  }, 30000);
})();
