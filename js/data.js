/* ============================================================
   SOEMITROVERSE — VERIFIED DATA LAYER
   Adhithya Pranandra Soemitro
   Every fact below is sourced from the official portfolio
   (andrasoemitro.netlify.app, 2025) + vcadeveloper.com.
   No fabricated awards, clients, revenue, certifications,
   partnerships, job titles, projects or achievements.
   ============================================================ */

const IDENTITY = {
  fullName: "ADHITHYA PRANANDRA SOEMITRO",
  aliases: ["Adhithya Soemitro", "Andra Soemitro", "Andra"],
  roles: ["CEO & Founder", "AI Trainer", "Technology Manager", "Product Builder", "Entrepreneur", "Digital Creator"],
  tagline: "FOUNDER · PRODUCT BUILDER · TECHNOLOGY LEADER · AI TRAINER",
  location: "Jakarta, Indonesia",
  email: "apranandra@gmail.com",
  whatsapp: "+62 815 1925 0845",
  website: "https://www.vcadeveloper.com",
  philosophy: "Hardwork beats talent when talent doesn't work hard. — Tim Notke"
};

const LINKS = {
  linkedin: "https://www.linkedin.com/in/adhithya-pranandra-soemitro-324369a4",
  portfolio: "https://andrasoemitro.netlify.app/",
  email: "mailto:apranandra@gmail.com",
  website: "https://www.vcadeveloper.com",
  companyLinkedin: "https://id.linkedin.com/company/vcadeveloper",
  instagram: "https://www.instagram.com/andrasoemitro/",
  instagramVCA: "https://www.instagram.com/verycoolapps/",
  twitter: "https://twitter.com/andrasoemitro",
  facebook: "https://www.facebook.com/adhithya.pranandra",
  linktree: "https://instabio.cc/verycoolapps",
  youtube: "https://www.youtube.com/watch?v=Pp8YZU-CEA0"
};

/* ---------------- FOUNDER HQ — COMPANY ---------------- */
const COMPANY = {
  legalName: "PT. Agra Karya Digital",
  brand: "VeryCoolApps (VCA)",
  tagline: "Unlimited Creativity",
  since: "Feb 2018 – Present",
  city: "Jakarta, Indonesia",
  address: "Jl. Lebak Bulus III no. 54",
  summary: "Founded and run PT. Agra Karya Digital under the VeryCoolApps brand. Sole creator and manager of all products from concept to App Store submission.",
  counts: { iOSGames: "17+", MacGames: "3", Roblox: "13+", iOSApps: "11+", Websites: "2", Prompters: "38" },
  disciplines: ["iOS Development (Xcode)", "Unity / Unreal Engine", "Buildbox", "Roblox Studio", "Meta Spark AR", "Digital Marketing", "WIX"]
};

/* ---------------- PRODUCT DISTRICT — LIFECYCLE ---------------- */
const LIFECYCLE = [
  { key: "IDEA",     desc: "Concept, market scan, feasibility and the first sketch of a product worth building." },
  { key: "PROTOTYPE",desc: "Rapid build, playable / clickable sample, prove the core loop works." },
  { key: "BUILD",    desc: "Production: art, systems, code, milestone builds, internal QA." },
  { key: "LAUNCH",   desc: "Store submission, metadata, screenshots, review cycle, release." },
  { key: "ITERATE",  desc: "Live data, feedback, crash triage, balance and content updates." },
  { key: "SCALE",    desc: "Portfolio expansion, cross-platform reach, automation and tooling." }
];

/* ---------------- GAME DISTRICT — VERIFIED PROJECTS ---------------- */
const IOS_GAMES = [
  { name: "Lil Sharky",            emoji: "🦈", engine: "Buildbox" },
  { name: "Salto Penguin",         emoji: "🐧", engine: "Buildbox" },
  { name: "The Hiking Hawk",       emoji: "🦅", engine: "Buildbox" },
  { name: "Spiky Green Martian",   emoji: "👾", engine: "Buildbox" },
  { name: "Speedy Crawler",        emoji: "🕵️", engine: "Buildbox" },
  { name: "Journey of Smiley",     emoji: "😊", engine: "Buildbox" },
  { name: "Airforce Ranger",       emoji: "✈️", engine: "Buildbox" },
  { name: "Hit the Bug: Rivalry",  emoji: "🐞", engine: "Buildbox" },
  { name: "Twin Snowmen",          emoji: "⛄", engine: "Buildbox" },
  { name: "Mad UFO",               emoji: "🛸", engine: "Buildbox" },
  { name: "Super Jacko Lantern",   emoji: "🎃", engine: "Buildbox" },
  { name: "Magic Blue Ant",        emoji: "🐜", engine: "Buildbox" },
  { name: "Butterfly Rising",      emoji: "🦋", engine: "Buildbox" },
  { name: "Zombies vs. Werewolves",emoji: "🧟", engine: "Unity" },
  { name: "Medieval Shopman",      emoji: "⚔️", engine: "Unity" },
  { name: "Greyfront",             emoji: "🏰", engine: "Unity" }
];

const MAC_GAMES = [
  { name: "Chaotic Mayhem",      genre: "Action / FPS Training", engine: "Unreal Engine" },
  { name: "Labyrinth of Shadows",genre: "Action / Horror",       engine: "Unreal Engine" },
  { name: "The Warrior's Trial", genre: "Puzzle",                engine: "Unreal Engine" }
];

const ROBLOX_GAMES = [
  "Nuansa Islami", "A-Maze-Ing Scary Race", "Public Speaking Class",
  "Land of Anomalies and Monsters", "Tower Capture", "Desa Pajak Indonesia",
  "Sniper Survival", "True Key", "Soul Swap", "Pressure Sync",
  "Obby Supremacy", "Who Wants To Be A Judge?", "Mimic Grounds"
];

/* ---------------- iOS APPS — VERIFIED STORE LINKS ---------------- */
const IOS_APPS = [
  { name: "BoreBore",      cat: "Entertainment",  url: "https://apps.apple.com/id/app/borebore/id6670456782" },
  { name: "Job Recap",     cat: "Productivity",   url: "https://apps.apple.com/id/app/job-recap/id6677019389" },
  { name: "FoodieTracker", cat: "Food Tracker",   url: "https://apps.apple.com/id/app/foodietracker/id6502929001" },
  { name: "Page Whisper",  cat: "Reading List",   url: "https://apps.apple.com/id/app/page-whisper/id6705137645" },
  { name: "Xplain Estate", cat: "Real Estate",    url: "https://apps.apple.com/id/app/xplain-estate/id6736753606" },
  { name: "MileLeap",      cat: "Education",      url: "https://apps.apple.com/id/app/mileleap/id6737975160" },
  { name: "Pocket Gaming", cat: "Gaming Tracker", url: "https://apps.apple.com/id/app/pocket-gaming/id6742745034" },
  { name: "Twin Balloons", cat: "Travel / Events",url: null },
  { name: "Couma (Coupon Mama)", cat: "Shopping", url: null },
  { name: "Forte Flow",    cat: "Music",          url: null },
  { name: "Sage Ally",     cat: "Productivity",   url: null }
];

/* ---------------- WEB APPS & SITES — VERIFIED ---------------- */
const WEB_APPS = [
  { name: "VCA Developer",           kind: "Official Website", url: "https://www.vcadeveloper.com" },
  { name: "Myths of a Nation",       kind: "E-commerce",       url: "https://www.mythsofanation.com" },
  { name: "Ramadan Tracker",         kind: "Web App · Base44", url: "https://absolute-ramadan-track.base44.app" },
  { name: "CRM Pro",                 kind: "CRM · Base44",     url: "https://absolute-crm-pro.base44.app/" },
  { name: "Sage Ally (Web)",         kind: "Web App · Base44", url: "https://sage-ally-28d67cdf.base44.app/" },
  { name: "Aksara Fiskal",           kind: "Tax / Fiscal App", url: "https://aksarafiskal.netlify.app/" },
  { name: "Konten Kreator Tool",     kind: "Creator Tool",     url: "https://kontenkreatortool.netlify.app/" },
  { name: "Salam Nusantara",         kind: "Cultural Web App", url: "https://app.netlify.com/projects/salamnusantara/" },
  { name: "Wortschatz Meister",      kind: "Vocabulary · Base44", url: "https://horned-wortschatz-meister-app.base44.app" },
  { name: "Lua Cilik Quest",         kind: "Children's Quest", url: "https://lua-cilik-quest.base44.app/" }
];

/* ---------------- THE ACADEMY — 38 AI PROMPT TOOLS ---------------- */
const PROMPTERS = [
  { name: "3D Prompter",                url: "https://3dprompter.netlify.app/" },
  { name: "Kids Story Prompter",        url: "https://kidsstoryprompter.netlify.app/" },
  { name: "Podcast Prompter",           url: "https://podcastsessionprompter.netlify.app/" },
  { name: "Project Manager Prompter",   url: "https://pmprompter.netlify.app/" },
  { name: "Festive Prompter",           url: "https://festiveprompter.netlify.app/" },
  { name: "Movie Director Prompter",    url: "https://moviedirectorprompter.netlify.app/" },
  { name: "Fashion Prompter",           url: "https://fashionprompter.netlify.app/" },
  { name: "Promotional Prompter",       url: "https://promotionalprompter.netlify.app/" },
  { name: "Sticker Prompter",           url: "https://stickerprompter.netlify.app/" },
  { name: "Business Document Prompter", url: "https://businessdocumentprompter.netlify.app/" },
  { name: "Kids Activity Prompter",     url: "https://kidsactivityprompter.netlify.app/" },
  { name: "Festival Creator Prompter",  url: "https://festivalcreatorprompter.netlify.app/" },
  { name: "E-Book Prompter",            url: "https://ebookprompter.netlify.app/" },
  { name: "Website Prompter",           url: "https://websiteprompter.netlify.app/" },
  { name: "Personal Branding Prompter", url: "https://personalbrandingforge.netlify.app/" },
  { name: "Creative Prompter",          url: "https://creativeprompterai.netlify.app/" },
  { name: "Visual Content Prompter",    url: "https://visualprompter.netlify.app/" },
  { name: "Word Prompter",              url: "https://wordprompter.netlify.app/" },
  { name: "Comic Prompter",             url: "https://comicprompter.netlify.app/" },
  { name: "Flowchart Prompter",         url: "https://flowchartprompter.netlify.app/" },
  { name: "Game Design Document Prompter", url: "https://gddultimate.netlify.app/" },
  { name: "ASMR Solo Prompter",         url: "https://asmrsoloprompter.netlify.app/" },
  { name: "Academic Prompter",          url: "https://academicprompter.netlify.app/" },
  { name: "Image & Video Editor Prompter", url: "https://vidimageeditorprompter.netlify.app/" },
  { name: "Etsy Detail Prompter",       url: "https://etsyprompter.netlify.app/" },
  { name: "Material PPT Prompter",      url: "https://materialprompter.netlify.app/" },
  { name: "Pokemon TCG Prompter",       url: "https://pokemonprompter.netlify.app/" },
  { name: "Interior Exterior Prompter", url: "https://interiorexteriorprompter.netlify.app/" },
  { name: "Animator Prompter",          url: "https://animatorprompter.netlify.app/" },
  { name: "ADHD Prompter",              url: "https://adhdprompter.netlify.app/" },
  { name: "Apparel Prompter",           url: "https://apparelprompter.netlify.app/" },
  { name: "Accessories Prompter",       url: "https://accessoriesprompter.netlify.app/" },
  { name: "Voice Over Prompter",        url: "https://voiceoverprompter.netlify.app/" },
  { name: "Personal Portfolio Prompter",url: "https://personalportfolioprompter.netlify.app/" },
  { name: "EO Prompter",                url: "https://eoprompter.netlify.app/" },
  { name: "Content Creator Prompter",   url: "https://kontenkreatortool.netlify.app/" },
  { name: "Music Prompter",             url: "https://ultimatesongforge.netlify.app/" },
  { name: "Coding Prompter",            url: "https://technicalprompterai.netlify.app/" }
];

/* ---------------- THE ARCHIVE — VERIFIED CAREER TIMELINE ---------------- */
const CAREER = [
  {
    period: "Feb 2018 – Present", role: "Chief Executive Officer / Solopreneur",
    org: "PT. Agra Karya Digital — VeryCoolApps", place: "Jl. Lebak Bulus III no. 54, Jakarta",
    summary: "Founded and run PT. Agra Karya Digital under the VeryCoolApps brand. Sole creator and manager of all products from concept to App Store submission.",
    have: "17+ iOS games, 3 Mac games, 13+ Roblox experiences, 11+ iOS apps, 2 websites, YouTube animation content, Instagram AR filters (Meta Spark AR).",
    tech: ["iOS Development (Xcode)", "Unity", "Unreal Engine", "Buildbox", "Roblox Studio", "Meta Spark AR", "Digital Marketing", "WIX"],
    impact: "8+ years operating as a one-person studio: concept → art → build → submission → live support."
  },
  {
    period: "Jan 2016 – Feb 2018", role: "Marketing Channeling",
    org: "PT. Mitra Pajakku", place: "Jl. Kemanggisan Utama Raya No. J4, Jakarta",
    summary: "Designed interior & exterior concepts for Pajakku Office in Jakarta & Bali. Led marketing via email blasts and email extraction. Produced budget plans, timelines, banners, flyers, car design mockups and promotional videos.",
    have: "Marketing lead & competitor analysis, staff performance & SEO analysis, ISO compliance flowcharts. Project leader for all marketing initiatives.",
    tech: ["3D Interior Design", "Adobe Illustrator", "SEO Analysis", "MS Visio", "Camtasia", "Easy Sketch Pro", "Project Management"],
    impact: "Owned the full creative + analytical marketing pipeline end to end."
  },
  {
    period: "May 2014 – June 2015", role: "Junior Designer",
    org: "PT. Harta Djaya Karya Tbk. (Interra)", place: "Jl. Bintaro Raya No. 8A, Jakarta",
    summary: "Compiled specs for furniture and stall designs. Generated AutoCAD 2D drawings and converted them to 3D models. Managed Instagram marketing. Worked on projects for Seibu, Berry Benka, Spiky Smooth, Kobelko and private clients.",
    have: "Built and maintained client relationships across retail & interior projects.",
    tech: ["AutoCAD 2D", "3DS Max", "Google SketchUp", "Instagram Marketing", "Client Relations"],
    impact: "Commercial interior & display furniture work for named retail brands."
  },
  {
    period: "Dec 2012 – Feb 2013", role: "Sales & Marketing Intern",
    org: "PT. Samudera Indonesia Tbk.", place: "Letjen S. Parman St No. Kav. 35, Jakarta",
    summary: "Contributed to brochure concept design (Adobe InDesign). Helped design & calculate a customer satisfaction index via Formees.com. Assisted in designing the SI website concept on Wix.com. Developed a targeting application using Indonetwork.co.id to acquire potential customers.",
    have: "Market research & customer satisfaction measurement.",
    tech: ["Adobe InDesign", "WIX", "Market Research", "Customer Satisfaction"],
    impact: "Internship contributions listed: brochure concept, customer satisfaction index, website concept and customer targeting application."
  }
];

/* ---------------- THE TECHNOLOGY CENTER ---------------- */
const TECH_STACK = [
  { group: "Game & App Development", items: ["Buildbox", "Unreal Engine", "Unity", "Roblox Studio", "Xcode", "Android Studio", "MIT App Inventor"] },
  { group: "Marketing & Design", items: ["Adobe Illustrator", "Canva", "Google SketchUp + VRay", "3DS Max", "AutoCAD 2D", "Meta Spark AR", "Art Text", "Blender", "Adobe InDesign"] },
  { group: "Digital Marketing", items: ["Send Blaster", "Mailchimp", "Email Extractor", "SEO PowerSuite", "Search Engine Marketing", "WebHarvy Scraping", "Easy Sketch Pro", "AI Tools"] },
  { group: "Web & Admin", items: ["WIX", "Base44", "Netlify", "MS Office", "MS Visio", "Camtasia", "Plotagon Story"] }
];

const SOFT_SKILLS = ["Innovation", "Strategic Thinking", "Autodidact", "Planning", "Creativity", "Visionary", "Analysis", "Teamwork", "Public Speaking"];

/* ---------------- SKILL CONSTELLATION ---------------- */
const SKILL_NODES = [
  { key: "PRODUCT MANAGEMENT",  code: "PM",  detail: "End-to-end product ownership: roadmap, scope, release, live ops.", evidence: ["17+ iOS games shipped alone", "11+ iOS apps shipped", "Sole creator concept → submission"] },
  { key: "PRODUCT STRATEGY",    code: "PS",  detail: "Choosing what to build and why, across a 50+ product portfolio.", evidence: ["38 AI prompt tools", "13+ Roblox experiences", "2 commercial websites"] },
  { key: "ENTREPRENEURSHIP",    code: "EN",  detail: "8+ years running PT. Agra Karya Digital as CEO & Solopreneur.", evidence: ["Founded Feb 2018", "Jakarta, Indonesia", "One-person studio"] },
  { key: "AI / LLM",            code: "AI",  detail: "Deploying AI systems and prompt-engineered tooling into real products.", evidence: ["38 AI prompt tools live", "Base44 AI-built web apps"] },
  { key: "AI TRAINING",         code: "AT",  detail: "Teaching practical AI literacy, prompting and workflow adoption.", evidence: ["38 prompt tools as curriculum", "Public speaking background"] },
  { key: "TECHNOLOGY",          code: "TC",  detail: "Multi-stack technical delivery: Xcode, Unity, Unreal, Roblox, web.", evidence: ["6+ engines & SDKs", "iOS / macOS / Roblox / web"] },
  { key: "DIGITAL TRANSFORMATION", code: "DT", detail: "Moving manual processes into digital products and automation.", evidence: ["CRM Pro", "Aksara Fiskal", "Konten Kreator Tool"] },
  { key: "STAKEHOLDER MANAGEMENT", code: "SH", detail: "Client relations, project leadership and cross-team communication.", evidence: ["Project leader @ Mitra Pajakku", "Client relations @ Interra"] },
  { key: "GAME DEVELOPMENT",    code: "GD",  detail: "Game design and delivery across mobile, desktop and Roblox.", evidence: ["Greyfront", "Labyrinth of Shadows", "Chaotic Mayhem"] },
  { key: "SOFTWARE",            code: "SW",  detail: "Shipping production software from tooling to store submission.", evidence: ["11+ iOS apps", "9 web applications"] },
  { key: "CREATIVE TECHNOLOGY", code: "CT",  detail: "3D, AR filters, animation and design treated as engineering problems.", evidence: ["Meta Spark AR filters", "3D interior/exterior work", "YouTube animation"] }
];

/* ---------------- EDUCATION & CERTIFICATIONS (VERIFIED) ---------------- */
const EDUCATION = [
  { name: "Charles Sturt University", degree: "Master of Business (M.Bus)", period: "2011 – 2013" },
  { name: "Binus International University", degree: "Bachelor of Information Systems (S.Kom)", period: "2006 – 2011" },
  { name: "SMA Pangudi Luhur", degree: "High School — Social", period: "2003 – 2006" }
];

const CERTIFICATIONS = [
  { name: "Public Speaking 101 For Professionals", org: "KELASTUTUR", year: "2025" },
  { name: "Digital Marketing", org: "EDUOSMO", year: "2025" },
  { name: "Quantum Life Transformation", org: "", year: "2015" },
  { name: "Outbond Management Training", org: "", year: "2006" },
  { name: "Leadership Training", org: "Special Forces (Kopassus) Group 3", year: "2004" }
];

/* ---------------- QUEST SYSTEM ---------------- */
const QUESTS = [
  { id: "Q1", text: "ENTER FOUNDER HQ",              zone: "founder" },
  { id: "Q2", text: "DISCOVER 3 PRODUCTS",           zone: "product" },
  { id: "Q3", text: "VISIT GAME DISTRICT",           zone: "game" },
  { id: "Q4", text: "ENTER THE ACADEMY",             zone: "academy" },
  { id: "Q5", text: "DISCOVER THE HIDDEN ROOM",      zone: null },
  { id: "Q6", text: "REACH THE COMMAND CENTER",      zone: "command" }
];

/* ---------------- DISTRICTS ---------------- */
const DISTRICTS = [
  { key: "founder", name: "FOUNDER HQ",        x: -170, z: -170, color: 0xffb066 },
  { key: "product", name: "PRODUCT DISTRICT",  x:  170, z: -170, color: 0x9ec8ff },
  { key: "game",    name: "GAME DISTRICT",     x: -170, z:  170, color: 0x9affd0 },
  { key: "academy", name: "THE ACADEMY",       x:  170, z:  170, color: 0xffd98a },
  { key: "tech",    name: "TECHNOLOGY CENTER", x:  -60, z:  250, color: 0xb8c4d8 },
  { key: "archive", name: "THE ARCHIVE",       x:   60, z:  250, color: 0xd8c8a8 },
  { key: "future",  name: "FUTURE DISTRICT",   x: -300, z:   20, color: 0xcfd8ff },
  { key: "command", name: "COMMAND CENTER",    x:  300, z:   20, color: 0xfff0d0 }
];

/* ---------------- SECRET AREAS ---------------- */
const SECRETS = [
  { id: "S1", name: "CLASSIFIED",      note: "A server room that was never meant to be public." },
  { id: "S2", name: "404 DIMENSION",   note: "Where unfinished experiments are kept." },
  { id: "S3", name: "THE HIDDEN OFFICE",note: "The studio of one: desk, chair, and 50+ shipped products." },
  { id: "S4", name: "UNKNOWN PROJECT", note: "A holographic build that has no name yet." }
];

/* export to window */
window.SV_DATA = {
  IDENTITY, LINKS, COMPANY, LIFECYCLE, IOS_GAMES, MAC_GAMES, ROBLOX_GAMES,
  IOS_APPS, WEB_APPS, PROMPTERS, CAREER, TECH_STACK, SOFT_SKILLS,
  SKILL_NODES, EDUCATION, CERTIFICATIONS, QUESTS, DISTRICTS, SECRETS
};
