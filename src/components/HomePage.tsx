"use client";

import Image from "next/image";

import { useState, useCallback, type CSSProperties } from "react";

/* ---------------- TYPES ---------------- */

type Sticky = {
  id: number;
  label: string;
  note: string;
  bg: string;
  rotate: string;
};

type Project = {
  title: string;
  tag: string;
  accent: string;
  tech: string[];
  highlights: string[];
  status: "live" | "beta" | "research";
  image: string;
  link: string;
  description: string;
  featured?: boolean;
};


const stickies: Sticky[] = [
    { id: 1, label: "0 → 1 Builder", note: "shipping real products", bg: "#F6F4EF", rotate: "-2.5deg" },
    { id: 2, label: "Data Systems", note: "5K+ events/min pipelines", bg: "#EEF2FF", rotate: "2deg" },
    { id: 3, label: "AI Workflows", note: "LLMs + agentic systems", bg: "#ECFDF5", rotate: "-1.5deg" },
    { id: 4, label: "Full Stack", note: "APIs to UI", bg: "#FFF7ED", rotate: "2.5deg" },
    { id: 5, label: "Startups", note: "GigsWall & Fruition", bg: "#F6F4EF", rotate: "-2deg" },
    { id: 6, label: "Scale Mindset", note: "latency, infra, throughput", bg: "#EEF2FF", rotate: "1.5deg" },
    { id: 7, label: "Product Thinking", note: "user → system → outcome", bg: "#ECFDF5", rotate: "-1deg" },
    { id: 8, label: "Matcha", note: "oat milk always", bg: "#FFF7ED", rotate: "2deg" },
];
const projects: Project[] = [
  {
    title: "GigsWall",
    tag: "freelance",
    accent: "#22c55e",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    highlights: ["Live Users", "Payments Integrated"],
    status: "live",
    image: "/projects/gigswall.png",
    link: "https://gigswall.com",
    description:
      "Student-first freelance marketplace with live payments and active users.",
    featured: true,
  },
  {
    title: "Fruition",
    tag: "product",
    accent: "#f59e0b",
    tech: ["Next.js", "AI APIs"],
    highlights: ["Waitlist", "Early Access"],
    status: "beta",
    image: "/projects/fruition.png",
    link: "https://www.fruitionunlocked.com/",
    description:
      "AI-powered thinking system helping users structure decisions and reflection.",
    featured: true,
  },
  {
    title: "BeyondColor",
    tag: "ai",
    accent: "#6366f1",
    tech: ["Python", "OpenCV", "TensorFlow"],
    highlights: ["NSF i-Corps", "Chicago Booth", "Clinical Study"],
    status: "research",
    image: "/projects/beyondcolor.png",
    link: "https://beyondcolor.app",
    description:
      "AI accessibility platform for diagnosing and improving color vision.",
  },
  {
    title: "HabitCheck",
    tag: "product",
    accent: "#84cc16",
    tech: ["Next.js", "PostgreSQL"],
    highlights: ["Personal Project"],
    status: "beta",
    image: "/projects/habitcheck.png",
    link: "/projects/habitcheck",
    description: "Minimal habit tracking system focused on consistency.",
  },
  {
    title: "CircleConnect",
    tag: "product",
    accent: "#3b82f6",
    tech: ["Next.js", "Firebase", "Auth"],
    highlights: ["Social Graph", "Live Discussions"],
    status: "beta",
    image: "/projects/circleconnect.png",
    link: "https://circleconnectt.vercel.app/",
    description: "Real-time social discussion platform built for communities.",
  },
  {
    title: "SwapCampus",
    tag: "product",
    accent: "#2563eb",
    tech: ["Next.js", "MongoDB", "JWT"],
    highlights: ["Campus-only Auth", "Moderated Listings"],
    status: "live",
    image: "/projects/swapcampus.png",
    link: "https://swapcampus.vercel.app/",
    description: "Campus-only marketplace with identity-based access control.",
  },
];
type StickyStyle = CSSProperties & {
    "--bg": string;
    "--rot": string;
};

export default function HomePage() {
    const [hoveredSticky, setHoveredSticky] = useState<number | null>(null);

    const [imageError, setImageError] = useState(false);


    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  const activePreview =
    hoveredProject !== null ? projects[hoveredProject].image : null;


  const sortedProjects = [
  ...projects.filter(p => p.featured),
  ...projects.filter(p => !p.featured),
];


  const featuredProjects = projects.filter(p => p.featured);
const otherProjects = projects.filter(p => !p.featured);

    return (
        <main onMouseMove={handleMouseMove}>
            {/* HERO */}
            <section className="hero">
                <div className="grid-bg" />

                <div className="hero-inner">
                    <div className="hero-left">
                        <span className="status">
                            <span className="status-dot" />
                            open to opportunities
                        </span>

                        <h1>
                            engineer,
                            <br />
                            <span>builder of</span>
                            <br />
                            real things.
                        </h1>

                        <p>
                            I build products at the intersection of AI, data, and great UX —
                            from event pipelines to agentic LLM workflows.
                        </p>

                        <div className="cta">
                            <button className="primary">view my work ↓</button>
                            <button className="secondary">download résumé</button>
                        </div>
                    </div>

                    <div className="hero-right">
                        <p className="eyebrow">this is me 👇</p>

                        <div className="canvas">
                            {stickies.map((s, i) => (
                                <div
                                    key={s.id}
                                    className={`sticky sticky-${i} ${hoveredSticky === s.id ? "up" : ""
                                        }`}
                                    style={{ "--bg": s.bg, "--rot": s.rotate } as StickyStyle}
                                    onMouseEnter={() => setHoveredSticky(s.id)}
                                    onMouseLeave={() => setHoveredSticky(null)}
                                >
                                    <div className="label">{s.label}</div>
                                    <div className="note">{s.note}</div>
                                </div>
                            ))}

                            <div className="photo-wrap">
                                <div className="photo-card">
                                    {!imageError ? (
                                        <Image
                                            src="/photo.jpg"
                                            alt="Manavi Sharma"
                                            width={148}
                                            height={148}
                                            className="photo"
                                            loading="eager"
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <div className="fallback">add photo.jpg</div>
                                    )}
                                </div>
                                <div className="name">
                                    Manavi Sharma <span className="spark">✦</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            {/* PROJECTS */}


            <section className="featured-section">
  <div className="projects-inner">

    <div className="section-header">
      <div>
        <div className="section-eyebrow">featured work</div>
        <h2 className="section-title">Startups</h2>
      </div>
    </div>

    <div className="featured-grid">
      {featuredProjects.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          className="featured-card"
          style={{ "--accent": p.accent } as CSSProperties}
        >
          <img src={p.image} className="featured-img" />

          <div className="featured-content">
            <div className="featured-top">
              <span className="featured-name">{p.title}</span>
             <span className="featured-badge">Founder • Live Startup</span>
            </div>

            <p className="featured-desc">{p.description}</p>

            <div className="featured-tags">
              {p.tech.map((t, i) => (
                <span key={i} className="proj-tag tech">{t}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>

  </div>
</section>

            <section className="projects-section">
        <div className="projects-inner">

          <div className="section-header">
            <div>
              <div className="section-eyebrow">selected work</div>
              <h2 className="section-title">Projects</h2>
            </div>
            <span className="section-count">0{projects.length} projects</span>
          </div>

          <div className="proj-list">
            {otherProjects.map((p, i) => (
             <a
  key={i}
  href={p.link}
  target="_blank"
  className={`proj-item ${p.featured ? "featured" : ""}`}
  style={{ "--accent": p.accent } as CSSProperties}
  onMouseEnter={() => setHoveredProject(i)}
  onMouseLeave={() => setHoveredProject(null)}
>
  <div className="proj-num">
    {String(i + 1).padStart(2, "0")}
  </div>

  <div>
    <div className="proj-top">
      <span className="proj-name">{p.title}</span>

      <span className={`proj-badge badge-${p.tag}`}>
        {p.tag}
      </span>

      {p.featured && (
        <span className="proj-featured">founder</span>
      )}
    </div>

    <div className="proj-meta">
      {p.highlights.slice(0, 2).join(" • ")}
    </div>

    <p className="proj-desc">{p.description}</p>

    <div className="proj-tags">
      <span className={`proj-status status-${p.status}`}>
        {p.status}
      </span>

      {p.highlights.map((h, i) => (
        <span key={i} className="proj-tag highlight">{h}</span>
      ))}

      {p.tech.map((t, i) => (
        <span key={i} className="proj-tag tech">{t}</span>
      ))}
    </div>
  </div>

  <span className="proj-arrow">↗</span>
</a>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FLOATING PREVIEW */}
      {activePreview && (
        <div
          className="floating-preview"
          style={{
            transform: `translate(${cursor.x + 20}px, ${cursor.y + 20}px)`
          }}
        >
          <img src={activePreview} width={220} />
        </div>
      )}

            {/* CONTACT */}
            <section className="contact">

              <div className="contact-header">
  <div className="section-eyebrow">contact</div>
  <h2 className="section-title">Let’s build something together</h2>
  <p className="contact-sub">
    Have an idea, a problem, or just want to connect — reach out.
  </p>
</div>
  <div className="contact-inner">

    <div className="contact-card">
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">contact.sh</span>
      </div>

      <div className="terminal-body">
        <p><span className="prompt">$</span> say hello</p>
        <p className="response">always down to build, chat, or brainstorm.</p>

        <div className="contact-links">
  <a href="mailto:manavisharma14@gmail.com">email</a>
  <a href="https://github.com/manavisharma14">github</a>
  <a href="https://linkedin.com">linkedin</a>
  <a href="https://twitter.com">twitter</a>
</div>
      </div>
    </div>

  </div>
</section>

      {/* ==================== GLOBAL + COMPONENT STYLES ==================== */}
      <style>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
          color: #1a1a1a;
        }

        button, input, textarea {
          font: inherit;
        }

        /* ====================== HERO ====================== */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          overflow: hidden;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c8c4bc 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.25;
          pointer-events: none;
        }

        .hero-inner {
          width: 100%;
          max-width: 1120px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 56px;
          position: relative;
          z-index: 1;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .status {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #555;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7acb8c;
        }

        .hero-left h1 {
          margin: 0;
          font-size: clamp(3rem, 6vw, 4.4rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 700;
        }

        .hero-left h1 span {
          color: #555;
          font-weight: 600;
        }

        .hero-left p {
          margin: 0;
          max-width: 450px;
          font-size: 1rem;
          line-height: 1.65;
          color: #555;
        }

        .cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .primary, .secondary {
          border-radius: 10px;
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.18s ease;
        }

        .primary {
          background: #111;
          color: #fff;
          border: 1px solid #111;
        }

        .primary:hover {
          transform: translateY(-1px);
          background: #222;
        }

        .secondary {
          background: transparent;
          color: #222;
          border: 1px solid #d8d4cc;
        }

        .secondary:hover {
          background: rgba(0, 0, 0, 0.03);
          transform: translateY(-1px);
        }

        /* ====================== STICKIES ====================== */
        .canvas {
          position: relative;
          width: 540px;
          height: 520px;
        }

        .sticky {
          position: absolute;
          width: 138px;
          padding: 12px 13px;
          background: var(--bg);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transform: rotate(var(--rot));
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }

        .sticky.up {
          transform: rotate(0deg) translateY(-6px) scale(1.03);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.09);
          z-index: 10;
        }

        .sticky .label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .sticky .note {
          font-size: 0.72rem;
          color: #777;
          line-height: 1.3;
        }

        /* Sticky positions */
        .sticky-0 { top: 2%; left: 8%; }
        .sticky-1 { top: 0%; right: 6%; }
        .sticky-2 { top: 26%; left: -2%; }
        .sticky-3 { top: 23%; right: -2%; }
        .sticky-4 { bottom: 24%; left: 0%; }
        .sticky-5 { bottom: 22%; right: 1%; }
        .sticky-6 { bottom: 4%; left: 9%; }
        .sticky-7 { bottom: 2%; right: 7%; }

        .photo-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .photo-card {
          width: 148px;
          height: 148px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e0dcd5;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.07);
          background: #ede9e1;
        }

        .photo { object-fit: cover; }

        /* ====================== PROJECTS - FIXED UNDERLINES ====================== */
        .projects-section {
          padding: 120px 24px;
        }

        .projects-inner {
          max-width: 920px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 50px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
        }

        .section-eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: #bbb;
        }

        .section-title {
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .section-count {
          font-size: 12px;
          color: #bbb;
        }

        .proj-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* === IMPORTANT: NO MORE BLUE UNDERLINES === */
        .proj-item {
  text-decoration: none;
  color: inherit;
}

.proj-item * {
  text-decoration: none;
}

        .proj-item {
          position: relative;
          display: grid;
          grid-template-columns: 60px 1fr auto;
          gap: 24px;
          padding: 34px 24px;
          border-radius: 14px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .proj-item:hover {
          transform: translateY(-5px);
          background: #fafafa;
          box-shadow: 0 25px 60px rgba(0,0,0,0.10), 0 8px 20px rgba(0,0,0,0.06);
        }

        .proj-item::before {
          content: "";
          position: absolute;
          left: -14px;
          top: 24px;
          width: 3px;
          height: 60%;
          border-radius: 2px;
          background: var(--accent);
          opacity: 0.25;
          transition: 0.25s ease;
        }

        .proj-item:hover::before {
          opacity: 1;
        }

        .proj-top {
  display: flex;
  align-items: center;
  gap: 10px; /* ← controls space between name & tag */
}


.featured-section {
  padding: 100px 24px 40px;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.featured-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(0,0,0,0.06);
  color: #111;
}


.featured-card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  background: #fff;
  transition: all 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 40px 100px rgba(0,0,0,0.12);
}


.featured-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}


.featured-content {
  padding: 18px;
}

.featured-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.featured-name {
  font-size: 20px;
  font-weight: 600;
}

.featured-desc {
  font-size: 14px;
  color: #555;
  margin: 10px 0;
  line-height: 1.6;
}

.featured-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}



        .proj-num { font-size: 13px; color: #ccc; padding-top: 4px; }
       .proj-name {
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.01em;
}

.proj-badge {
  all: unset;
  display: inline-block;
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 999px;
  font-weight: 500;
}

.proj-meta {
  font-size: 12px;
  color: #aaa; /* lighter */
}

.proj-tag.tech {
  opacity: 0.6;
}

        .proj-desc { 
          font-size: 14px; 
          color: #555; 
          line-height: 1.7; 
          margin: 10px 0 12px; 
          max-width: 520px; 
        }

        .proj-tags { display: flex; flex-wrap: wrap; gap: 6px; }

        .proj-status {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .status-live { background: #dcfce7; color: #166534; }
        .status-beta { background: #fef3c7; color: #92400e; }
        .status-research { background: #dbeafe; color: #1e40af; }

        .proj-badge {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 500;
        }

        .badge-freelance { background: #fef3c7; color: #92400e; }
        .badge-product   { background: #fde68a; color: #92400e; }
        .badge-ai        { background: #e0e7ff; color: #3730a3; }

        .proj-tag {
          font-size: 11px;
          padding: 4px 9px;
          border-radius: 6px;
          border: 1px solid #eee;
          color: #666;
        }

.proj-tag.highlight {
  background: #000;
  color: #fff;
  border-radius: 6px;
  padding: 4px 10px;
  letter-spacing: 0.02em;
}
        .proj-tag.tech {
          background: rgba(0,0,0,0.05);
        }

        .proj-arrow {
          font-size: 18px;
          color: #ccc;
          align-self: center;
          transition: 0.2s;
        }

       .proj-item:hover .proj-name {
  color: var(--accent);
}

        /* ====================== FLOATING PREVIEW ====================== */
        .floating-preview {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-9999px, -9999px);
          transition: transform 0.08s ease;
        }

        .preview-img {
          border-radius: 10px;
          border: 1px solid #eee;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.08);
          background: #fff;
        }

        /* ====================== CONTACT ====================== */
.contact {
  padding: 120px 24px;
  background: linear-gradient(to bottom, #fff, #fafafa);
}

.contact-inner {
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-header {
  max-width: 720px;
  margin: 0 auto 32px;
}

.contact-sub {
  font-size: 14px;
  color: #777;
  margin-top: 8px;
  max-width: 480px;
}

        .contact-card {
          background: #0f0f0f;
          color: #e5e5e5;
          transition: all 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
          max-width: 720px;
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
          border: 1px solid #222;
        }

        .contact-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 50px 120px rgba(0,0,0,0.35);
}

        .contact-links {
  display: flex;
  gap: 18px;
  margin-top: 16px;
}

.contact-links a {
  font-size: 13px;
  color: #aaa;
  text-decoration: none;
  transition: 0.2s;
}

.contact-links a:hover {
  color: #fff;
}


.terminal-body {
  padding: 20px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 13px;
  line-height: 1.6;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #1a1a1a;
  border-bottom: 1px solid #222;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.terminal-title {
  margin-left: auto;
  font-size: 11px;
  color: #777;
}

.prompt {
  color: #22c55e;
  margin-right: 6px;
}

.response {
  color: #aaa;
  margin-top: 6px;
}

        /* Media Queries */
        @media (max-width: 980px) {
          .hero-inner { grid-template-columns: 1fr; gap: 44px; }
          .hero-left { order: 1; }
          .hero-right { order: 2; }
          .canvas { width: 420px; height: 500px; }
        }

        @media (max-width: 640px) {
          .hero { padding-top: 48px; padding-bottom: 48px; }
          .hero-left h1 { font-size: 2.7rem; }
          .floating-preview { display: none; }
        }
      `}</style>
            {activePreview && (
                <div
                    className="floating-preview"
                    style={{
                        transform: `translate(${cursor.x + 20}px, ${cursor.y + 20}px)`
                    }}
                >
                    <Image
                        src={activePreview}
                        alt="preview"
                        width={220}
                        height={150}
                        className="preview-img"
                    />
                </div>
            )}
        </main>
    );
}