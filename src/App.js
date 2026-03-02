import React, { useState, useEffect} from 'react';
import { Github, Linkedin, Mail, MapPin, Award, Code, Cpu, Calendar, ChevronRight, FileText, ExternalLink, Sun, Moon } from 'lucide-react';

// ─── STYLES ───────────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;600;700;800&display=swap');

  :root {
    --bg: #060a0f; --bg2: #0c1219; --bg3: #111b26;
    --border: #1a2e42; --border2: #1e3a52;
    --trace: #00d4ff; --trace2: #00ff88; --trace3: #ff6b35;
    --text: #e2eaf2; --text2: #7a9bb5; --text3: #3d5a73;
    --card: rgba(12,18,25,0.8); --glow: 0 0 20px rgba(0,212,255,0.15);
    --font-display: 'Syne', sans-serif; --font-mono: 'JetBrains Mono', monospace;
  }
  .light {
    --bg: #f0f4f8; --bg2: #e2eaf2; --bg3: #d4dfe9;
    --border: #b8cdd9; --border2: #93afc2;
    --trace: #0077aa; --trace2: #007744; --trace3: #cc4400;
    --text: #0c1a28; --text2: #3d5a73; --text3: #7a9bb5;
    --card: rgba(240,244,248,0.9); --glow: 0 0 20px rgba(0,119,170,0.1);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-mono); }

  .portfolio { min-height:100vh; background:var(--bg); color:var(--text); transition:background 0.4s,color 0.4s; font-family:var(--font-mono); position:relative; overflow-x:hidden; }

  .pcb-bg { position:fixed; inset:0; pointer-events:none; z-index:0; opacity:0.04; background-image:linear-gradient(var(--trace) 1px,transparent 1px),linear-gradient(90deg,var(--trace) 1px,transparent 1px); background-size:40px 40px; }
  .light .pcb-bg { opacity:0.06; }

  .trace-decoration { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; overflow:hidden; }
  .trace-line { position:absolute; background:var(--trace); opacity:0.06; }
  .trace-line.h { height:1px; width:60%; }
  .trace-line.v { width:1px; height:40%; }

  /* NAV PROGRESS */
  .nav-progress { position:absolute; bottom:0; left:0; height:2px; background:linear-gradient(90deg,var(--trace),var(--trace2)); box-shadow:0 0 8px var(--trace); transition:width 0.1s linear; border-radius:0 2px 2px 0; }

  /* NAV */
  .nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(6,10,15,0.92); backdrop-filter:blur(20px); border-bottom:1px solid var(--border); transition:background 0.4s,border-color 0.4s; }
  .light .nav { background:rgba(240,244,248,0.92); }
  .nav-inner { max-width:1100px; margin:0 auto; padding:0 24px; height:60px; display:flex; align-items:center; justify-content:space-between; }
  .nav-logo { font-family:var(--font-display); font-weight:800; font-size:18px; color:var(--trace); cursor:pointer; letter-spacing:-0.5px; display:flex; align-items:center; gap:8px; background:none; border:none; text-decoration:none; }
  .nav-logo span { color:var(--text); }
  .nav-logo::before { content:''; width:8px; height:8px; border-radius:50%; background:var(--trace2); box-shadow:0 0 8px var(--trace2); animation:pulse-dot 2s infinite; }
  @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }
  .nav-links { display:flex; gap:4px; align-items:center; }
  .nav-link { background:none; border:none; cursor:pointer; font-family:var(--font-mono); font-size:12px; color:var(--text2); padding:6px 12px; border-radius:4px; transition:all 0.2s; text-transform:uppercase; letter-spacing:0.05em; }
  .nav-link:hover,.nav-link.active { color:var(--trace); background:rgba(0,212,255,0.06); }
  .theme-toggle { background:none; border:1px solid var(--border); cursor:pointer; color:var(--text2); width:34px; height:34px; border-radius:6px; display:flex; align-items:center; justify-content:center; transition:all 0.2s; margin-left:8px; }
  .theme-toggle:hover { border-color:var(--trace); color:var(--trace); }

  /* HERO */
  .hero { position:relative; min-height:100vh; display:flex; align-items:center; padding:80px 24px 40px; overflow:hidden; }
  .hero-inner { max-width:1100px; margin:0 auto; width:100%; display:grid; grid-template-columns:1fr 340px; gap:60px; align-items:center; position:relative; z-index:1; }
  .hero-badge { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-family:var(--font-mono); color:var(--trace2); border:1px solid rgba(0,255,136,0.2); background:rgba(0,255,136,0.04); padding:5px 12px; border-radius:100px; margin-bottom:20px; letter-spacing:0.1em; text-transform:uppercase; }
  .hero-badge::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--trace2); box-shadow:0 0 6px var(--trace2); animation:pulse-dot 1.5s infinite; }
  .hero-title { font-family:var(--font-display); font-size:clamp(40px,6vw,72px); font-weight:800; line-height:1.0; color:var(--text); margin-bottom:4px; letter-spacing:-2px; }
  .hero-title .accent { color:var(--trace); }
  .hero-subtitle { font-family:var(--font-display); font-size:clamp(16px,2.5vw,22px); font-weight:400; color:var(--text2); margin-bottom:24px; letter-spacing:-0.5px; }

  /* Terminal */
  .terminal-box { background:var(--bg2); border:1px solid var(--border); border-radius:8px; overflow:hidden; margin-bottom:32px; box-shadow:var(--glow); font-size:13px; }
  .terminal-header { background:var(--bg3); border-bottom:1px solid var(--border); padding:8px 14px; display:flex; align-items:center; gap:8px; }
  .t-dot { width:10px; height:10px; border-radius:50%; }
  .t-dot.red{background:#ff5f57} .t-dot.yellow{background:#ffbd2e} .t-dot.green{background:#28c840}
  .t-label { font-size:11px; color:var(--text3); margin-left:6px; letter-spacing:0.05em; }
  .terminal-body { padding:14px 16px; min-height:90px; }
  .t-line { display:flex; gap:8px; margin-bottom:4px; line-height:1.6; }
  .t-prompt { color:var(--trace2); flex-shrink:0; }
  .t-cmd { color:var(--text); }
  .t-output { color:var(--text2); padding-left:16px; }
  .t-cursor { display:inline-block; width:8px; height:15px; background:var(--trace); animation:blink 1s step-end infinite; vertical-align:middle; border-radius:1px; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  .hero-actions { display:flex; gap:10px; flex-wrap:wrap; }
  .btn-primary { display:flex; align-items:center; gap:8px; background:var(--trace); color:var(--bg); font-family:var(--font-mono); font-size:12px; font-weight:700; padding:10px 20px; border-radius:6px; border:none; cursor:pointer; text-decoration:none; text-transform:uppercase; letter-spacing:0.08em; transition:all 0.2s; box-shadow:0 0 20px rgba(0,212,255,0.3); }
  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 0 30px rgba(0,212,255,0.5); }
  .btn-secondary { display:flex; align-items:center; gap:8px; background:transparent; color:var(--text); font-family:var(--font-mono); font-size:12px; font-weight:500; padding:10px 20px; border-radius:6px; border:1px solid var(--border2); cursor:pointer; text-decoration:none; text-transform:uppercase; letter-spacing:0.08em; transition:all 0.2s; }
  .btn-secondary:hover { border-color:var(--trace); color:var(--trace); background:rgba(0,212,255,0.04); }

  /* Profile card */
  .profile-card { position:relative; display:flex; flex-direction:column; align-items:center; gap:16px; }
  .profile-img-wrap { position:relative; width:220px; height:220px; }
  .profile-img-wrap::before { content:''; position:absolute; inset:-3px; border-radius:16px; background:linear-gradient(135deg,var(--trace),var(--trace2),var(--trace3)); z-index:0; animation:rotate-border 4s linear infinite; }
  @keyframes rotate-border { from{filter:hue-rotate(0deg)} to{filter:hue-rotate(360deg)} }
  .profile-img-inner { position:relative; z-index:1; width:100%; height:100%; border-radius:14px; overflow:hidden; border:3px solid var(--bg); }
  .profile-img-inner img { width:100%; height:100%; object-fit:cover; }
  .profile-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; width:100%; }
  .stat-chip { background:var(--bg2); border:1px solid var(--border); border-radius:8px; padding:10px 8px; text-align:center; transition:all 0.2s; }
  .stat-chip:hover { border-color:var(--trace); }
  .stat-num { font-family:var(--font-display); font-size:20px; font-weight:800; color:var(--trace); line-height:1; }
  .stat-label { font-size:9px; color:var(--text3); text-transform:uppercase; letter-spacing:0.08em; margin-top:3px; }

  /* MAIN */
  main { position:relative; z-index:1; max-width:1100px; margin:0 auto; padding:40px 24px 80px; }

  /* Scroll reveal */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity 0.55s ease,transform 0.55s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }

  .section { margin-bottom:80px; }
  .section-header { display:flex; align-items:center; gap:16px; margin-bottom:32px; }
  .section-tag { font-size:10px; color:var(--trace); text-transform:uppercase; letter-spacing:0.15em; font-family:var(--font-mono); }
  .section-title { font-family:var(--font-display); font-size:30px; font-weight:800; color:var(--text); letter-spacing:-1px; }
  .section-line { flex:1; height:1px; background:linear-gradient(90deg,var(--border2),transparent); }

  /* About */
  .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .about-text { grid-column:1/-1; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:28px; backdrop-filter:blur(12px); transition:border-color 0.2s; }
  .about-text:hover { border-color:var(--border2); }
  .about-text p { color:var(--text2); line-height:1.8; font-size:14px; }
  .skill-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:20px; display:flex; align-items:flex-start; gap:14px; backdrop-filter:blur(12px); transition:all 0.2s; cursor:default; }
  .skill-card:hover { border-color:var(--trace); box-shadow:var(--glow); transform:translateY(-2px); }
  .skill-icon { width:42px; height:42px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .skill-icon.cyan { background:rgba(0,212,255,0.1); color:var(--trace); border:1px solid rgba(0,212,255,0.2); }
  .skill-icon.green { background:rgba(0,255,136,0.1); color:var(--trace2); border:1px solid rgba(0,255,136,0.2); }
  .skill-card h3 { font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text); margin-bottom:4px; }
  .skill-card p { font-size:12px; color:var(--text2); }

  /* Timeline */
  .timeline { position:relative; padding-left:24px; }
  .timeline::before { content:''; position:absolute; left:0; top:8px; bottom:8px; width:1px; background:linear-gradient(to bottom,var(--trace),var(--trace2),var(--border)); }
  .timeline-item { position:relative; margin-bottom:32px; }
  .timeline-dot { position:absolute; left:-29px; top:16px; width:10px; height:10px; border-radius:50%; background:var(--trace); border:2px solid var(--bg); box-shadow:0 0 8px var(--trace); }
  .exp-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:24px; backdrop-filter:blur(12px); transition:all 0.25s; cursor:default; }
  .exp-card:hover { border-color:var(--trace); box-shadow:var(--glow); transform:translateX(4px); }
  .exp-top { display:flex; gap:16px; align-items:flex-start; margin-bottom:14px; }
  .exp-logo { width:46px; height:46px; border-radius:10px; overflow:hidden; border:1px solid var(--border); flex-shrink:0; background:var(--bg3); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:var(--text2); }
  .exp-logo img { width:100%; height:100%; object-fit:cover; }
  .exp-role { font-family:var(--font-display); font-size:17px; font-weight:700; color:var(--text); }
  .exp-company { font-size:13px; color:var(--trace); margin:2px 0; }
  .exp-meta { display:flex; gap:12px; flex-wrap:wrap; }
  .exp-meta-item { display:flex; align-items:center; gap:5px; font-size:11px; color:var(--text3); }
  .exp-desc { font-size:13px; color:var(--text2); line-height:1.7; margin-bottom:14px; }
  .tag-row { display:flex; flex-wrap:wrap; gap:6px; }
  .tag { font-size:11px; font-family:var(--font-mono); padding:3px 10px; border-radius:4px; border:1px solid var(--border2); color:var(--text2); background:var(--bg3); transition:all 0.15s; }
  .tag:hover { border-color:var(--trace); color:var(--trace); }

  /* Projects */
  .projects-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
  .project-card { background:var(--card); border:1px solid var(--border); border-radius:12px; overflow:hidden; backdrop-filter:blur(12px); transition:all 0.3s; cursor:default; }
  .project-card:hover { border-color:var(--trace); box-shadow:var(--glow); transform:translateY(-4px); }
  .project-img { height:180px; overflow:hidden; position:relative; background:var(--bg3); }
  .project-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease; }
  .project-card:hover .project-img img { transform:scale(1.06); }
  .project-img-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 40%,var(--bg) 100%); pointer-events:none; }
  .project-body { padding:20px; }
  .project-title { font-family:var(--font-display); font-size:18px; font-weight:700; color:var(--text); margin-bottom:4px; }
  .project-tech { font-size:11px; color:var(--trace); margin-bottom:10px; font-family:var(--font-mono); }
  .project-desc { font-size:13px; color:var(--text2); line-height:1.7; margin-bottom:14px; }
  .project-highlight { display:flex; align-items:flex-start; gap:8px; font-size:11px; color:var(--trace2); background:rgba(0,255,136,0.05); border:1px solid rgba(0,255,136,0.15); border-radius:6px; padding:8px 10px; margin-bottom:12px; line-height:1.5; }
  .project-links { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; }
  .project-link-btn { display:inline-flex; align-items:center; gap:6px; font-size:11px; font-family:var(--font-mono); font-weight:600; padding:6px 14px; border-radius:6px; text-decoration:none; transition:all 0.2s; text-transform:uppercase; letter-spacing:0.07em; border:1px solid; }
  .project-link-btn.github { color:var(--text2); border-color:var(--border2); background:var(--bg3); }
  .project-link-btn.github:hover { color:var(--text); border-color:var(--text2); background:var(--bg2); transform:translateY(-1px); }
  .project-link-btn.demo { color:var(--trace); border-color:rgba(0,212,255,0.3); background:rgba(0,212,255,0.05); }
  .project-link-btn.demo:hover { background:rgba(0,212,255,0.12); border-color:var(--trace); transform:translateY(-1px); box-shadow:0 0 12px rgba(0,212,255,0.15); }

  /* ═══ SKILLS — Tiered with icons ═══ */
  .skills-tiers-section { display:flex; flex-direction:column; gap:32px; }
  .tier-block {}
  .tier-header { display:flex; align-items:center; gap:12px; margin-bottom:16px; }
  .tier-badge { display:inline-flex; align-items:center; gap:7px; font-size:10px; font-family:var(--font-mono); font-weight:700; text-transform:uppercase; letter-spacing:0.12em; padding:5px 14px; border-radius:100px; flex-shrink:0; }
  .tier-badge.proficient { color:var(--trace2); background:rgba(0,255,136,0.07); border:1px solid rgba(0,255,136,0.25); }
  .tier-badge.familiar   { color:var(--trace);  background:rgba(0,212,255,0.07); border:1px solid rgba(0,212,255,0.25); }
  .tier-badge.exploring  { color:var(--trace3); background:rgba(255,107,53,0.07); border:1px solid rgba(255,107,53,0.25); }
  .tier-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .tier-dot.proficient { background:var(--trace2); box-shadow:0 0 6px var(--trace2); }
  .tier-dot.familiar   { background:var(--trace);  box-shadow:0 0 6px var(--trace); }
  .tier-dot.exploring  { background:var(--trace3); box-shadow:0 0 6px var(--trace3); }
  .tier-desc { font-size:11px; color:var(--text3); font-family:var(--font-mono); }
  .tier-divider { flex:1; height:1px; background:linear-gradient(90deg,var(--border),transparent); }

  .tier-items { display:flex; flex-wrap:wrap; gap:10px; }

  .skill-item { display:flex; align-items:center; gap:10px; background:var(--card); border:1px solid var(--border); border-radius:10px; padding:10px 14px; backdrop-filter:blur(8px); transition:all 0.2s; cursor:default; min-width:140px; }
  .skill-item:hover { transform:translateY(-3px); box-shadow:0 6px 20px rgba(0,0,0,0.25); }
  .skill-item.proficient:hover { border-color:rgba(0,255,136,0.45); box-shadow:0 0 16px rgba(0,255,136,0.12); }
  .skill-item.familiar:hover   { border-color:rgba(0,212,255,0.45); box-shadow:0 0 16px rgba(0,212,255,0.12); }
  .skill-item.exploring:hover  { border-color:rgba(255,107,53,0.45); box-shadow:0 0 16px rgba(255,107,53,0.12); }

  .skill-item-icon { width:34px; height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px; line-height:1; }
  .skill-item-icon.proficient { background:rgba(0,255,136,0.08); border:1px solid rgba(0,255,136,0.18); }
  .skill-item-icon.familiar   { background:rgba(0,212,255,0.08); border:1px solid rgba(0,212,255,0.18); }
  .skill-item-icon.exploring  { background:rgba(255,107,53,0.08); border:1px solid rgba(255,107,53,0.18); }

  .skill-item-info { display:flex; flex-direction:column; gap:1px; min-width:0; }
  .skill-item-name { font-size:12px; font-weight:600; color:var(--text); white-space:nowrap; font-family:var(--font-mono); }
  .skill-item-cat  { font-size:10px; color:var(--text3); text-transform:uppercase; letter-spacing:0.06em; }

  /* Awards */
  .awards-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
  .award-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:18px 20px; display:flex; align-items:center; gap:14px; backdrop-filter:blur(12px); transition:all 0.2s; }
  .award-card:hover { border-color:#f59e0b; box-shadow:0 0 16px rgba(245,158,11,0.1); transform:translateY(-2px); }
  .award-icon { width:40px; height:40px; border-radius:10px; background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.2); color:#f59e0b; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .award-text { font-size:13px; color:var(--text); font-weight:500; }
  .award-amount { font-size:11px; color:#f59e0b; margin-top:2px; }

  /* Contact */
  .contact-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
  .contact-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:22px; display:flex; align-items:center; gap:14px; text-decoration:none; transition:all 0.25s; backdrop-filter:blur(12px); }
  .contact-card:hover { border-color:var(--trace); box-shadow:var(--glow); transform:translateY(-3px); }
  .contact-icon { width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .contact-icon.red  { background:rgba(239,68,68,0.1);   border:1px solid rgba(239,68,68,0.2);   color:#ef4444; }
  .contact-icon.blue { background:rgba(59,130,246,0.1);  border:1px solid rgba(59,130,246,0.2);  color:#3b82f6; }
  .contact-icon.gray { background:rgba(107,114,128,0.1); border:1px solid rgba(107,114,128,0.2); color:#9ca3af; }
  .contact-label { font-family:var(--font-display); font-size:15px; font-weight:700; color:var(--text); }
  .contact-sub { font-size:12px; color:var(--text2); display:flex; align-items:center; gap:4px; }

  footer { position:relative; z-index:1; border-top:1px solid var(--border); background:var(--bg2); padding:24px; }
  .footer-inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
  .footer-copy { font-size:12px; color:var(--text3); }
  .footer-copy span { color:var(--text2); }
  .footer-links { display:flex; gap:8px; }
  .footer-link { width:34px; height:34px; border-radius:8px; border:1px solid var(--border); background:var(--bg3); display:flex; align-items:center; justify-content:center; color:var(--text2); text-decoration:none; transition:all 0.2s; }
  .footer-link:hover { border-color:var(--trace); color:var(--trace); }

  .scroll-top { position:fixed; bottom:24px; right:24px; width:40px; height:40px; border-radius:8px; background:var(--trace); color:var(--bg); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 0 20px rgba(0,212,255,0.4); transition:all 0.2s; z-index:50; }
  .scroll-top:hover { transform:translateY(-3px); box-shadow:0 0 30px rgba(0,212,255,0.6); }

  @media (max-width:768px) {
    .hero-inner { grid-template-columns:1fr; }
    .profile-card { display:none; }
    .projects-grid,.about-grid,.awards-grid,.contact-grid { grid-template-columns:1fr; }
    .nav-links .nav-link { display:none; }
    .skill-item { min-width:110px; }
  }
`;

// ─── SKILL DATA ───────────────────────────────────────────────────────────────
const SKILLS = [
  { name: 'Python',       icon: '🐍', category: 'Language',  tier: 'proficient' },
  { name: 'Arduino',      icon: '🔵', category: 'Embedded',  tier: 'proficient' },
  { name: 'Raspberry Pi', icon: '🍓', category: 'Embedded',  tier: 'exploring' },
  { name: 'Git / GitHub', icon: '🗂️', category: 'Tool',      tier: 'proficient' },
  { name: 'VS Code',      icon: '🖥️', category: 'Tool',      tier: 'proficient' },

  { name: 'Dart',         icon: '🎯', category: 'Language',  tier: 'exploring'   },
  { name: 'JavaScript',   icon: '🌐', category: 'Language',  tier: 'familiar'   },
  { name: 'HTML & CSS',   icon: '🎨', category: 'Language',  tier: 'familiar'   },
  { name: 'STM32',        icon: '🔧', category: 'Embedded',  tier: 'exploring'   },
  { name: 'Flutter',      icon: '📱', category: 'Framework', tier: 'familiar'   },
  { name: 'React',        icon: '⚛️', category: 'Framework', tier: 'familiar'   },
  { name: 'MATLAB',       icon: '🔧', category: 'Tool',      tier: 'familiar'   },
  { name: 'PSpice',       icon: '🔌', category: 'Tool',      tier: 'familiar'   },

  { name: 'C/C++',      icon: '©️', category: 'Language',  tier: 'exploring'  },
  { name: 'Onshape CAD',  icon: '📐', category: 'Tool',      tier: 'familiar'  },
  { name: 'Matplotlib',  icon: '📊', category: 'Framework',      tier: 'familiar'  },
  { name: 'Scikit-Learn',  icon: '🧠', category: 'Tool',      tier: 'exploring'  },
  { name: 'Pandas',  icon: '🐼', category: 'Tool',      tier: 'exploring'  },
  { name: 'Pytorch',  icon: '🔥', category: 'Tool',      tier: 'exploring'  },
];

const TIERS = [
  { key: 'proficient', label: 'Proficient',  desc: 'Use regularly — comfortable building real projects' },
  { key: 'familiar',   label: 'Familiar',    desc: 'Solid understanding — can build with some reference' },
  { key: 'exploring',  label: 'Exploring',   desc: 'Actively experimenting — building small projects and learning fundamentals' },
];

// ─── Terminal ─────────────────────────────────────────────────────────────────
const TERMINAL_SEQUENCE = [
  { type: 'cmd',  prompt: '~/portfolio $', text: 'whoami' },
  { type: 'out',  text: 'Uriel Chilaka — Computer Engineering Student @ MUN' },
  { type: 'cmd',  prompt: '~/portfolio $', text: 'interests.txt' },
  { type: 'out',  text: 'AI & Embedded Systems' },
  { type: 'cmd',  prompt: '~/portfolio $', text: './run urielportfolio' },
];
function TerminalHero() {
  const [vis, setVis] = useState(0);
  useEffect(() => {
    if (vis < TERMINAL_SEQUENCE.length) {
      const t = setTimeout(() => setVis(v => v + 1), vis === 0 ? 400 : 700);
      return () => clearTimeout(t);
    }
  }, [vis]);
  return (
    <div className="terminal-box">
      <div className="terminal-header">
        <div className="t-dot red"/><div className="t-dot yellow"/><div className="t-dot green"/>
        <span className="t-label">bash — urielchilaka</span>
      </div>
      <div className="terminal-body">
        {TERMINAL_SEQUENCE.slice(0, vis).map((line, i) => (
          <div key={i} className={line.type === 'cmd' ? 't-line' : 't-output'}>
            {line.type === 'cmd'
              ? <><span className="t-prompt">{line.prompt}</span><span className="t-cmd">{line.text}</span></>
              : <span>{line.text}</span>}
          </div>
        ))}
        {vis === TERMINAL_SEQUENCE.length && (
          <div className="t-line"><span className="t-prompt">~/portfolio $</span><span className="t-cursor"/></div>
        )}
      </div>
    </div>
  );
}

//scroll reveal hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

//main
export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 50);
      const totalH = document.body.scrollHeight - window.innerHeight;
      setScrollPct(totalH > 0 ? (sy / totalH) * 100 : 0);
      const sections = ['home','about','experience','projects','skills','awards','contact'];
      const cur = sections.find(s => {
        const el = document.getElementById(s);
        if (el) { const r = el.getBoundingClientRect(); return r.top <= 100 && r.bottom >= 100; }
        return false;
      });
      if (cur) setActiveSection(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const experiences = [
    { company:"Memorial University", role:"Co-op Engineering Student", period:"Jan 2026 – Apr 2026", location:"St. John's, NL", description:"Delivering hands-on STEM and engineering workshops to youth through school visits, camps, and community outreach. Introduced fundamental Python programming and engineering principles via Arduino and Raspberry Pi.", logoUrl:"https://www.sciencerendezvous.ca/wp-content/uploads/2017/03/logo-memorial.jpg", logo:"MU", skills:["Python","Leadership","Problem-solving","Project Management"] },
    { company:"Paradigm Engineering (Design Team)", role:"Software Team Member", period:"Sept 2025 – Present", location:"St. John's, NL", description:"Contributing to software for an autonomous vehicle system. Implementing STM32-based firmware for braking control and upgrading RC control mappings using a Pixhawk flight controller for manual and autonomous operation.", logoUrl:"https://th.bing.com/th/id/OIP.x_SRn5deMk6G2jgMw921PgAAAA?w=159&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", logo:"PE", skills:["C/C++","STM32","Debugging","Git/GitHub"] },
    { company:"Nasdaq Verafin", role:"Student Intern", period:"Jul 2021 – Aug 2021 · Jul 2022 – Aug 2022", location:"St. John's, NL", description:"Two summer internships building Python skills and problem-solving. Participated in collaborative hackathons, contributing code and ideas under tight deadlines within a team environment.", logoUrl:"https://th.bing.com/th/id/OIP.G5tst3okQQOHnJezBySjLwAAAA?w=182&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", logo:"NV", skills:["Python","Raspberry Pi","QA","Team Collaboration"] },
    { company:"SportChek", role:"Footwear Associate", period:"Jul 2023 – Present", location:"St. John's, NL", description:"Customer-focused sales support in a fast-paced retail environment. Maintained inventory accuracy, supported team operations, and contributed to daily sales goals.", logoUrl:"https://i.ibb.co/HLqsdXjY/sportchek.webp", logo:"SC", skills:["Leadership","Inventory Mgmt","Communication","Sales"] },
  ];

  const projects = [
    { title:"Sensor Anomaly Detection", tech:"Python · Arduino · Pandas · Pytorch · Matplotlib · Sklearn", description:"An embedded anomaly detection system using Arduino to monitor sensor data in real-time. Implemented a Python-based machine learning model for accurate anomaly classification.", highlight:"Real-time embedded anomaly detection with machine learning integration", tags:["Python","Arduino","Machine Learning"], image:"https://i.ibb.co/chW29pbb/sensormatplotlib.png",
      github: "https://github.com/uriel-chilaka/sesnsor-anomaly-detection"
    },
    { title:"UriTasks", tech:"Dart · Flutter", description:"An Android task management app designed to organize daily goals, track productivity, and stay focused — built with Flutter for smooth performance and an intuitive UI.", highlight:"Designed for productivity with a clean, responsive Flutter UI", tags:["Dart","Flutter","Mobile Application"], image:"https://i.ibb.co/Q7CvJDnq/Screenshot-2026-01-31-195450.png",
      github: 'https://github.com/uriel-chilaka/UriTasks', 
      demo: null,
    },
    { title:"Portfolio Website", tech:"React · Tailwind CSS", description:"A modern, fully responsive portfolio built with React and Tailwind CSS for fast performance, scalability, and a polished, component-driven UI.", highlight:"Built with modern web technologies and responsive design principles", tags:["React","Tailwind CSS","Web Dev"], image:"https://i.ibb.co/bR6BBF4h/Chat-GPT-Image-Feb-27-2026-12-04-34-PM.png",
      github: "https://github.com/uriel-chilaka/UrielPortfolio",
      demo: "https://www.urielchilaka.ca/"
    },
    { title:"Study Planner", tech:"Python · Tkinter · Arduino · OLED", description:"An AI-assisted study planner bridging software and hardware. Features automated scheduling, progress tracking, and real-time reminders via an Arduino-powered OLED display.", highlight:"Bridging software and hardware to enhance student productivity", tags:["Python","Tkinter","Arduino","AI"], image:"https://image2url.com/images/1761392125744-99c3e0e9-5046-4497-a60a-01b0b6a61d4e.png",
      github: "https://github.com/uriel-chilaka/Engineering1020FinalProject",
      demo: null,   // TODO: add demo link here if applicable
    },
    { title:"Wind Turbine Prototype", tech:"Onshape · Bambu Studio", description:"Designed and fabricated a small-scale wind turbine prototype using detailed 3D CAD models in Onshape and manufacturing components with 3D printing.", highlight:"From concept to physical prototype using CAD and 3D printing", tags:["Onshape","3D CAD","3D Printing"], image:"https://image2url.com/images/1761393239597-602923ff-e611-496a-b2dc-11f61b1e32c8.png",
      demo: "https://i.ibb.co/XZKGcT30/IMG-5951.png"
    },
  ];

  const awards = [
    { name:"Brown's Scholarship", amount:"$10,000" },
    { name:"Verafin Computer Engineering Scholarship", amount:"$3,000" },
    { name:"Technology Career Pathway Scholarship", amount:"$2,500" },
    { name:"Memorial University Transforming Our Horizons", amount:"$2,000" },
  ];

  const socialLinks = [
    { name:"GitHub",   icon:Github,   url:"https://github.com/uriel-chilaka" },
    { name:"LinkedIn", icon:Linkedin, url:"https://linkedin.com/in/urielchilaka/" },
    { name:"Email",    icon:Mail,     url:"mailto:uchilaka@mun.ca" },
    { name:"Resume",   icon:FileText, url:"https://drive.google.com/file/d/1tCW8p5MFLTK9yN96WgDPAAUdcaYsGDLD/preview" },
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div className={`portfolio${isDark ? '' : ' light'}`}>
        <div className="pcb-bg"/>
        <div className="trace-decoration">
          <div className="trace-line h" style={{top:'15%',left:'5%'}}/>
          <div className="trace-line h" style={{top:'55%',right:'0',left:'auto',width:'40%'}}/>
          <div className="trace-line v" style={{left:'8%',top:'20%'}}/>
          <div className="trace-line v" style={{right:'12%',bottom:'10%',top:'auto',height:'30%'}}/>
        </div>

        {/* NAV */}
        <nav className="nav">
          <div className="nav-inner">
            <button className="nav-logo" onClick={() => scrollTo('home')}>Uriel Chilaka<span></span></button>
            <div className="nav-links">
              {['About','Experience','Projects','Skills','Awards','Contact'].map(s => (
                <button key={s} className={`nav-link${activeSection===s.toLowerCase()?' active':''}`} onClick={() => scrollTo(s.toLowerCase())}>{s}</button>
              ))}
              <button className="theme-toggle" onClick={() => setIsDark(d => !d)} title="Toggle theme">
                {isDark ? <Sun size={15}/> : <Moon size={15}/>}
              </button>
            </div>
          </div>
          <div className="nav-progress" style={{width:`${scrollPct}%`}}/>
        </nav>

        {/* HERO */}
        <header id="home" className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-badge">Currently: Work Term (1) </div>
              <h1 className="hero-title">Uriel<br/><span className="accent">Chilaka</span></h1>
              <p className="hero-subtitle">Computer Engineering Student</p>
              <TerminalHero/>
              <div className="hero-actions">
                <a href="mailto:uchilaka@mun.ca" className="btn-primary"><Mail size={14}/> Get in touch</a>
                <button className="btn-secondary" onClick={() => scrollTo('projects')}><Code size={14}/> View projects</button>
                <a href="https://drive.google.com/file/d/1tCW8p5MFLTK9yN96WgDPAAUdcaYsGDLD/preview" target="_blank" rel="noopener noreferrer" className="btn-secondary"><FileText size={14}/> Resume</a>
              </div>
            </div>
            <div className="profile-card">
              <div className="profile-img-wrap">
                <div className="profile-img-inner">
                  <img src="https://i.ibb.co/jZkpsZ86/Uriel-Headshot.jpg" alt="Uriel Chilaka"/>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-chip"><div className="stat-num">4+</div><div className="stat-label">Projects</div></div>
                <div className="stat-chip"><div className="stat-num">2+</div><div className="stat-label">Years</div></div>
                <div className="stat-chip"><div className="stat-num">4</div><div className="stat-label">Awards</div></div>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'6px',fontSize:'11px',color:'var(--text3)'}}>
                <MapPin size={13} style={{color:'var(--trace)'}}/> Paradise, NL, Canada
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* ABOUT */}
          <section id="about" className="section">
            <div className="section-header reveal">
              <span className="section-tag">01</span>
              <h2 className="section-title">About Me</h2>
              <div className="section-line"/>
            </div>
            <div className="about-grid reveal">
              <div className="about-text">
                <p>Hey! I'm Uriel, a Computer Engineering student at Memorial University (Class of 2029) with a strong interest in AI and embedded systems. I have experience with Python, C, and C++, and have worked with platforms such as Raspberry Pi, Arduino, and STM32.</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon cyan"><Code size={20}/></div>
                <div><h3>Software Development</h3><p>Python, Dart, C/C++, React</p></div>
              </div>
              <div className="skill-card">
                <div className="skill-icon green"><Cpu size={20}/></div>
                <div><h3>Embedded Hardware</h3><p>Arduino, Raspberry Pi, STM32</p></div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="section">
            <div className="section-header reveal">
              <span className="section-tag">02</span>
              <h2 className="section-title">Experience</h2>
              <div className="section-line"/>
            </div>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className="timeline-item reveal">
                  <div className="timeline-dot" style={i%2===1?{background:'var(--trace2)',boxShadow:'0 0 8px var(--trace2)'}:{}}/>
                  <div className="exp-card">
                    <div className="exp-top">
                      <div className="exp-logo">{exp.logoUrl ? <img src={exp.logoUrl} alt={exp.company}/> : exp.logo}</div>
                      <div style={{flex:1}}>
                        <div className="exp-role">{exp.role}</div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-meta">
                          <div className="exp-meta-item"><Calendar size={11}/>{exp.period}</div>
                          <div className="exp-meta-item"><MapPin size={11}/>{exp.location}</div>
                        </div>
                      </div>
                    </div>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="tag-row">{exp.skills.map((s,j)=><span key={j} className="tag">{s}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="section">
            <div className="section-header reveal">
              <span className="section-tag">03</span>
              <h2 className="section-title">Projects</h2>
              <div className="section-line"/>
            </div>
            <div className="projects-grid">
              {projects.map((p,i) => (
                <div key={i} className="project-card reveal">
                  <div className="project-img">
                    <img src={p.image} alt={p.title}/>
                    <div className="project-img-overlay"/>
                  </div>
                  <div className="project-body">
                    <div className="project-title">{p.title}</div>
                    <div className="project-tech">// {p.tech}</div>
                    <p className="project-desc">{p.description}</p>
                    <div className="project-highlight"><Award size={13} style={{flexShrink:0,marginTop:'1px'}}/>{p.highlight}</div>
                    <div className="tag-row">{p.tags.map((t,j)=><span key={j} className="tag">{t}</span>)}</div>
                    {(p.github || p.demo) && (
                      <div className="project-links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link-btn github">
                            <Github size={12}/> GitHub
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn demo">
                            <ExternalLink size={12}/> Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS — Tiered + Icons */}
          <section id="skills" className="section">
            <div className="section-header reveal">
              <span className="section-tag">04</span>
              <h2 className="section-title">Skills</h2>
              <div className="section-line"/>
            </div>
            <div className="skills-tiers-section">
              {TIERS.map(tier => {
                const items = SKILLS.filter(s => s.tier === tier.key);
                return (
                  <div key={tier.key} className="tier-block reveal">
                    <div className="tier-header">
                      <span className={`tier-badge ${tier.key}`}>
                        <span className={`tier-dot ${tier.key}`}/>
                        {tier.label}
                      </span>
                      <span className="tier-desc">{tier.desc}</span>
                      <div className="tier-divider"/>
                    </div>
                    <div className="tier-items">
                      {items.map((skill, i) => (
                        <div key={i} className={`skill-item ${tier.key}`}>
                          <div className={`skill-item-icon ${tier.key}`}>{skill.icon}</div>
                          <div className="skill-item-info">
                            <span className="skill-item-name">{skill.name}</span>
                            <span className="skill-item-cat">{skill.category}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* AWARDS */}
          <section id="awards" className="section">
            <div className="section-header reveal">
              <span className="section-tag">05</span>
              <h2 className="section-title">Awards</h2>
              <div className="section-line"/>
            </div>
            <div className="awards-grid">
              {awards.map((a,i) => (
                <div key={i} className="award-card reveal">
                  <div className="award-icon"><Award size={20}/></div>
                  <div><div className="award-text">{a.name}</div><div className="award-amount">{a.amount}</div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <div className="section-header reveal">
              <span className="section-tag">06</span>
              <h2 className="section-title">Let's Connect</h2>
              <div className="section-line"/>
            </div>
            <p className="reveal" style={{fontSize:'14px',color:'var(--text2)',marginBottom:'20px',fontFamily:'var(--font-mono)'}}>
              {/*  Always open to discussing new opportunities — feel free to reach out! */}
            </p>
            <div className="contact-grid">
              <a href="mailto:uchilaka@mun.ca" className="contact-card reveal">
                <div className="contact-icon red"><Mail size={20}/></div>
                <div><div className="contact-label">Email</div><div className="contact-sub">uchilaka@mun.ca</div></div>
              </a>
              <a href="https://linkedin.com/in/urielchilaka/" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
                <div className="contact-icon blue"><Linkedin size={20}/></div>
                <div><div className="contact-label">LinkedIn</div><div className="contact-sub">urielchilaka <ExternalLink size={11}/></div></div>
              </a>
              <a href="https://github.com/uriel-chilaka" target="_blank" rel="noopener noreferrer" className="contact-card reveal">
                <div className="contact-icon gray"><Github size={20}/></div>
                <div><div className="contact-label">GitHub</div><div className="contact-sub">uriel-chilaka <ExternalLink size={11}/></div></div>
              </a>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-inner">
            <div>
              <div className="footer-copy">© 2025 <span>Uriel Chilaka</span></div>
              <div className="footer-copy">Computer Engineering @ Memorial University</div>
            </div>
            <div className="footer-links">
              {socialLinks.map(l => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="footer-link" title={l.name}>
                  <l.icon size={15}/>
                </a>
              ))}
            </div>
          </div>
        </footer>

        {scrolled && (
          <button className="scroll-top" onClick={() => scrollTo('home')} aria-label="Scroll to top">
            <ChevronRight size={20} style={{transform:'rotate(-90deg)'}}/>
          </button>
        )}
      </div>
    </>
  );
}