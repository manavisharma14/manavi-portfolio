"use client";

import { useState, useCallback, type CSSProperties } from "react";

const stickies = [
  { id: 1, emoji: "🚀", label: "0 → 1 Builder",   note: "shipping real products"     },
  { id: 2, emoji: "⚡", label: "Data Systems",     note: "5K+ events/min pipelines"   },
  { id: 3, emoji: "🤖", label: "AI Workflows",     note: "LLMs + agentic systems"     },
  { id: 4, emoji: "🏗️", label: "Full Stack",       note: "APIs to UI"                 },
  { id: 5, emoji: "📐", label: "Product Thinking", note: "user → system → outcome"    },
  { id: 6, emoji: "☕", label: "Matcha",           note: "oat milk always"            },
];

const projects = [
  {
    num: "01", title: "GigsWall",    badge: "freelance", badgeClass: "badge-freelance",
    desc: "A marketplace platform connecting freelancers with clients. Built end-to-end with real users, integrated payments, and a full review system.",
    tags: ["marketplace", "payments", "real users"],
  },
  {
    num: "02", title: "BeyondColor", badge: "AI",        badgeClass: "badge-ai",
    desc: "Computer vision tool for accessibility — helps colorblind users interpret visual content in real time using ML-powered scene analysis.",
    tags: ["computer vision", "accessibility", "ML"],
  },
  {
    num: "03", title: "Parasol",     badge: "hardware",  badgeClass: "badge-hardware",
    desc: "A BLE-connected wearable health device. Designed the firmware, mobile BLE layer, and companion app from scratch.",
    tags: ["wearable", "BLE", "health"],
  },
  {
    num: "04", title: "InnerSpace",  badge: "mental health", badgeClass: "badge-mental",
    desc: "A reflective journaling app with AI-guided prompts and mood pattern insights. Built for intentional daily check-ins.",
    tags: ["journaling", "reflection", "AI prompts"],
  },
];

const skills = [
  { emoji: "⚙️", name: "Data engineering",  note: "High-throughput pipelines, event systems" },
  { emoji: "🧠", name: "AI / LLM systems",  note: "Agentic workflows, RAG, evals"            },
  { emoji: "🖥️", name: "Full-stack dev",    note: "Next.js, APIs, databases, infra"          },
  { emoji: "🎯", name: "Product strategy",  note: "0→1, user research, roadmaps"             },
];

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main>
      <div className="port">
        {/* NAV */}
        <nav>
          <span className="nav-name">Manavi Sharma</span>
          <div className="nav-links">
            <a href="#">work</a>
            <a href="#">about</a>
            <a href="#">writing</a>
            <a href="#">contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="tag-dot" />
              open to opportunities
            </div>
            <h1 className="hero-title">
              engineer,<br />
              <span>builder of</span><br />
              real things.
            </h1>
            <p className="hero-sub">
              I build products at the intersection of AI, data, and great UX — from 5K+/min event pipelines to agentic LLM workflows.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary">view my work ↓</button>
              <button className="btn-ghost">download résumé</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="sticky-grid">
              {stickies.map((s) => (
                <div
                  key={s.id}
                  className={`s-card ${hovered === s.id ? "up" : ""}`}
                  onMouseEnter={() => setHovered(s.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="s-emoji">{s.emoji}</span>
                  <div className="s-label">{s.label}</div>
                  <div className="s-note">{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-row">
          <div className="stat"><div className="stat-num">4+</div><div className="stat-lbl">products shipped</div></div>
          <div className="stat"><div className="stat-num">5K+</div><div className="stat-lbl">events / min</div></div>
          <div className="stat"><div className="stat-num">2</div><div className="stat-lbl">startups founded</div></div>
        </div>

        {/* PROJECTS */}
        <section className="projects-section">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">selected work</div>
              <h2 className="section-title">Projects</h2>
            </div>
            <span className="section-count">0{projects.length} projects</span>
          </div>
          <div className="proj-list">
            {projects.map((p) => (
              <div key={p.num} className="proj-item">
                <div className="proj-num">{p.num}</div>
                <div className="proj-body">
                  <div className="proj-top">
                    <span className="proj-name">{p.title}</span>
                    <span className={`proj-badge ${p.badgeClass}`}>{p.badge}</span>
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-tags">
                    {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                  </div>
                </div>
                <span className="proj-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">capabilities</div>
              <h2 className="section-title">What I bring</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-card">
                <span className="skill-icon">{s.emoji}</span>
                <div className="skill-name">{s.name}</div>
                <div className="skill-note">{s.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-kicker">say hello</div>
              <h2 className="contact-headline">Let&apos;s build<br />something.</h2>
              <p className="contact-body">
                Whether it&apos;s a collab, a question, or just talking about matcha — my inbox is always open. Usually reply within 24 hours.
              </p>
              <div className="social-list">
                <div className="social-item"><span className="social-icon">𝕏</span> @manavi on X / Twitter</div>
                <div className="social-item"><span className="social-icon">in</span> linkedin / manavi</div>
                <div className="social-item"><span className="social-icon">gh</span> github / manavi</div>
                <div className="social-item"><span className="social-icon">✉</span> you@email.com</div>
              </div>
            </div>
            <div className="contact-right">
              <div className="form-fields">
                <div className="form-row">
                  <input placeholder="your name" />
                  <input placeholder="your email" />
                </div>
                <input placeholder="subject" />
                <textarea placeholder="what&apos;s on your mind..." />
                <button className="form-submit">send message ↗</button>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2025 Manavi Sharma — built with care</p>
          <p>Lawrence, KS</p>
        </footer>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: system-ui, -apple-system, sans-serif; background: #FAF9F6; color: #1a1a1a; }
        a { text-decoration: none; }
      `}</style>

      <style jsx>{`
        .port { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        /* NAV */
        nav { display: flex; justify-content: space-between; align-items: center; padding: 24px 0; }
        .nav-name { font-size: 14px; font-weight: 600; letter-spacing: -0.01em; }
        .nav-links { display: flex; gap: 28px; }
        .nav-links a { font-size: 13px; color: #888; transition: color .15s; }
        .nav-links a:hover { color: #111; }

        /* HERO */
        .hero { min-height: 88vh; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; padding: 60px 0 80px; }
        .hero-tag { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; padding: 5px 12px; border-radius: 999px; border: 1px solid #e4e0d8; color: #888; margin-bottom: 28px; }
        .tag-dot { width: 6px; height: 6px; border-radius: 50%; background: #3ec17c; animation: pulse 2s infinite; flex-shrink: 0; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
        .hero-title { font-size: clamp(42px, 5vw, 64px); font-weight: 600; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 20px; }
        .hero-title span { color: #aaa; }
        .hero-sub { font-size: 15px; color: #777; line-height: 1.7; max-width: 380px; margin-bottom: 36px; }
        .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary { background: #111; color: #fff; border: none; padding: 11px 22px; border-radius: 9px; font-size: 13px; cursor: pointer; font-weight: 500; transition: opacity .15s; font-family: inherit; }
        .btn-primary:hover { opacity: .8; }
        .btn-ghost { background: transparent; color: #111; border: 1px solid #ddd; padding: 11px 22px; border-radius: 9px; font-size: 13px; cursor: pointer; transition: background .15s; font-family: inherit; }
        .btn-ghost:hover { background: #f3f1ec; }

        /* STICKY GRID */
        .sticky-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .s-card { padding: 16px; border-radius: 12px; border: 1px solid #e8e4dc; background: #fff; transition: transform .2s ease, box-shadow .2s; cursor: default; }
        .s-card:nth-child(odd) { transform: rotate(-1.5deg); }
        .s-card:nth-child(even) { transform: rotate(1.2deg); }
        .s-card.up, .s-card:hover { transform: rotate(0deg) translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,.07); }
        .s-emoji { font-size: 18px; margin-bottom: 8px; display: block; }
        .s-label { font-size: 13px; font-weight: 600; color: #222; margin-bottom: 3px; }
        .s-note { font-size: 11px; color: #aaa; }

        /* STATS */
        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); background: #e8e4dc; border: 1px solid #e4e0d8; border-radius: 14px; overflow: hidden; margin-bottom: 100px; gap: 1px; }
        .stat { background: #FAF9F6; padding: 32px 24px; text-align: center; }
        .stat-num { font-size: 36px; font-weight: 600; letter-spacing: -0.04em; margin-bottom: 4px; }
        .stat-lbl { font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: .08em; }

        /* PROJECTS */
        .projects-section { margin-bottom: 100px; }
        .section-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; padding-bottom: 16px; border-bottom: 1px solid #eae6de; }
        .section-eyebrow { font-size: 11px; text-transform: uppercase; letter-spacing: .1em; color: #bbb; margin-bottom: 6px; }
        .section-title { font-size: 28px; font-weight: 600; letter-spacing: -0.02em; }
        .section-count { font-size: 12px; color: #bbb; }
        .proj-item { display: grid; grid-template-columns: 72px 1fr auto; gap: 24px; align-items: start; padding: 28px 16px; border-bottom: 1px solid #eae6de; cursor: pointer; border-radius: 8px; transition: background .15s; }
        .proj-item:hover { background: #F3F1EB; }
        .proj-num { font-size: 13px; color: #ccc; font-weight: 500; padding-top: 4px; }
        .proj-top { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
        .proj-name { font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
        .proj-badge { font-size: 11px; padding: 3px 10px; border-radius: 999px; font-weight: 500; }
        .badge-freelance { background: #FEF3C7; color: #92400E; }
        .badge-ai        { background: #DBEAFE; color: #1E40AF; }
        .badge-hardware  { background: #D1FAE5; color: #065F46; }
        .badge-mental    { background: #FCE7F3; color: #9D174D; }
        .proj-desc { font-size: 13px; color: #888; line-height: 1.65; margin-bottom: 10px; max-width: 520px; }
        .proj-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .proj-tag { font-size: 11px; padding: 3px 9px; border-radius: 6px; border: 1px solid #e8e4dc; color: #999; }
        .proj-arrow { font-size: 18px; color: #ccc; transition: transform .2s, color .2s; align-self: center; }
        .proj-item:hover .proj-arrow { color: #111; transform: translate(3px, -3px); }

        /* SKILLS */
        .skills-section { margin-bottom: 100px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 32px; }
        .skill-card { padding: 20px; border-radius: 12px; border: 1px solid #e8e4dc; background: #fff; }
        .skill-icon { font-size: 20px; margin-bottom: 10px; display: block; }
        .skill-name { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
        .skill-note { font-size: 11px; color: #aaa; }

        /* CONTACT */
        .contact-section { margin-bottom: 80px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #e4e0d8; border-radius: 16px; overflow: hidden; }
        .contact-left { background: #F2EFE8; padding: 52px; border-right: 1px solid #e4e0d8; }
        .contact-right { background: #fff; padding: 52px; }
        .contact-kicker { font-size: 11px; text-transform: uppercase; letter-spacing: .1em; color: #bbb; margin-bottom: 16px; }
        .contact-headline { font-size: 32px; font-weight: 600; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 16px; }
        .contact-body { font-size: 14px; color: #888; line-height: 1.7; margin-bottom: 36px; }
        .social-list { display: flex; flex-direction: column; gap: 12px; }
        .social-item { display: flex; align-items: center; gap: 12px; font-size: 13px; color: #777; }
        .social-icon { width: 30px; height: 30px; border-radius: 8px; border: 1px solid #e4e0d8; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; background: #faf9f6; }
        .form-fields { display: flex; flex-direction: column; gap: 12px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .form-fields input, .form-fields textarea { width: 100%; padding: 11px 14px; border-radius: 9px; border: 1px solid #ddd; font-size: 13px; background: #FAF9F6; color: #222; font-family: inherit; outline: none; transition: border-color .15s; }
        .form-fields input:focus, .form-fields textarea:focus { border-color: #bbb; }
        .form-fields textarea { min-height: 120px; resize: none; }
        .form-submit { background: #111; color: #fff; border: none; padding: 12px 24px; border-radius: 9px; font-size: 13px; font-weight: 500; font-family: inherit; cursor: pointer; transition: opacity .15s; align-self: flex-start; }
        .form-submit:hover { opacity: .8; }

        /* FOOTER */
        footer { padding: 32px 0; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eae6de; margin-bottom: 24px; }
        footer p { font-size: 12px; color: #ccc; }

        @media (max-width: 700px) {
          .hero { grid-template-columns: 1fr; gap: 48px; min-height: auto; }
          .stats-row { grid-template-columns: 1fr; }
          .proj-item { grid-template-columns: 48px 1fr auto; }
          .contact-grid { grid-template-columns: 1fr; }
          .contact-left { border-right: none; border-bottom: 1px solid #e4e0d8; padding: 28px; }
          .contact-right { padding: 28px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}