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
const projects : Project[] = [
    {
        title: "GigsWall",
        tag: "freelance",
        accent: "#22c55e",
        tech: ["Next.js", "Stripe", "PostgreSQL"],
        highlights: ["Live Users", "Payments Integrated"],
        status: "live",
        image: "/projects/gigswall.png",
        link: "https://gigswall.com",
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
    },
    {
        title: "BeyondColor",
        tag: "AI",
        accent: "#6366f1",
        tech: ["Python", "OpenCV", "TensorFlow"],
        highlights: ["NSF i-Corps", "Chicago Booth", "Clinical Study"],
        status: "research",
        image: "/projects/beyondcolor.png",
        link: "https://beyondcolor.app",
    },
    {
  title: "HabitCheck",
  tag: "product",
  accent: "#84cc16",
  tech: ["Next.js", "PostgreSQL"],
  highlights: ["Personal Project"],
  status: "beta",
  image: "/projects/habitcheck.png",
  link: "/projects/habitcheck"
},

{
  title: "ThreadO",
  tag: "product",
  accent: "#3b82f6",
  tech: ["Next.js", "Firebase", "Auth"],
  highlights: ["Social Graph", "Live Discussions"],
  status: "beta",
  image: "/projects/threado.png",
  link: "https://threadoto.vercel.app/",
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
}
];
type StickyStyle = CSSProperties & {
    "--bg": string;
    "--rot": string;
};

export default function Home() {
    const [hoveredSticky, setHoveredSticky] = useState<number | null>(null);

    const [imageError, setImageError] = useState(false);


    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  const activePreview =
    hoveredProject !== null ? projects[hoveredProject].image : null;




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
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                className="proj-item"
                target="_blank"
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
                  </div>

                  <div className="proj-meta">
                    {p.highlights.slice(0, 2).join(" • ")}
                  </div>

                  <p className="proj-desc">
                    {p.title === "GigsWall" &&
                      "Marketplace connecting freelancers with clients."}
                    {p.title === "BeyondColor" &&
                      "AI accessibility platform for color vision."}
                    {p.title === "Fruition" &&
                      "AI-powered structured thinking & reflection tool."}
                  </p>

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

            <style jsx global>{`
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
  font-family: system-ui, -apple-system, sans-serif;
  background: #ffffff;   /* ← change this */
  color: #1a1a1a;
}

        button,
        input,
        textarea {
          font: inherit;
        }
      `}</style>

            <style jsx>{`
        .hero,
        .projects,
        .contact {
          position: relative;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c8c4bc 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.25;
          pointer-events: none;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          overflow: hidden;
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
          display: inline-block;
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

        .primary,
        .secondary {
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

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .eyebrow {
          font-size: 0.78rem;
          color: #999;
          letter-spacing: 0.04em;
          margin-bottom: 2rem;
        }

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

        .sticky-0 {
          top: 2%;
          left: 8%;
        }
        .sticky-1 {
          top: 0%;
          right: 6%;
        }
        .sticky-2 {
          top: 26%;
          left: -2%;
        }
        .sticky-3 {
          top: 23%;
          right: -2%;
        }
        .sticky-4 {
          bottom: 24%;
          left: 0%;
        }
        .sticky-5 {
          bottom: 22%;
          right: 1%;
        }
        .sticky-6 {
          bottom: 4%;
          left: 9%;
        }
        .sticky-7 {
          bottom: 2%;
          right: 7%;
        }

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
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-size: 0.75rem;
        }

        .photo {
          object-fit: cover;
        }

        .fallback {
          font-size: 0.75rem;
          color: #999;
        }

        .name {
          margin-top: 12px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .spark {
          color: #bbb;
        }

        .projects {
          padding: 110px 24px;
        }

        
.projects-section {
  padding: 120px 24px;
}

.projects-inner {
  max-width: 920px;
  margin: 0 auto;
}

/* HEADER */
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

/* LIST */
.proj-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}



/* ITEM */
.proj-item {
  position: relative;
  display: grid;
  grid-template-columns: 60px 1fr auto;
  gap: 24px;
  padding: 34px 24px;
  border-radius: 14px;
  transition: all 0.25s ease;
}

/* ACCENT BAR */
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

/* HOVER */
.proj-item:hover {
  transform: translateY(-5px);
  background: #fafafa;
  box-shadow:
    0 25px 60px rgba(0,0,0,0.10),
    0 8px 20px rgba(0,0,0,0.06);
}

/* NUMBER */
.proj-num {
  font-size: 13px;
  color: #ccc;
  padding-top: 4px;
}

/* TITLE */
.proj-name {
  font-size: 22px;
  font-weight: 600;
  color: #111;
}

/* META */
.proj-meta {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

/* BADGES */
.proj-badge {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 500;
}

.badge-ai        { background: #e0e7ff; color: #3730a3; }
.badge-freelance { background: #fef3c7; color: #92400e; }
.badge-product   { background: #fde68a; color: #92400e; }

/* DESC */
.proj-desc {
  font-size: 14px;
  color: #555;
  line-height: 1.7;
  margin: 10px 0 12px;
  max-width: 520px;
}

/* TAGS */
.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* STATUS */
.proj-status {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
}

.status-live {
  background: #dcfce7;
  color: #166534;
}

.status-beta {
  background: #fef3c7;
  color: #92400e;
}

.status-research {
  background: #dbeafe;
  color: #1e40af;
}

/* TAG TYPES */
.proj-tag {
  font-size: 11px;
  padding: 4px 9px;
  border-radius: 6px;
  border: 1px solid #eee;
  color: #666;
}

/* 🔥 HIGHLIGHTS (important!) */
.proj-tag.highlight {
  background: linear-gradient(135deg, #111, #333);
  color: #fff;
  border: none;
}

/* TECH */
.proj-tag.tech {
  background: rgba(0,0,0,0.05);
}

/* ARROW */
.proj-arrow {
  font-size: 18px;
  color: #ccc;
  align-self: center;
  transition: 0.2s;
}

.proj-item:hover .proj-arrow {
  color: #111;
  transform: translate(4px, -4px);
} 
  
.floating-preview {
  position: fixed;              /* THIS is what makes it float */
  top: 0;
  left: 0;
  pointer-events: none;         /* avoids blocking hover */
  z-index: 9999;

  transform: translate(-9999px, -9999px); /* hidden by default */
  transition: transform 0.08s ease;
}

.preview-img {
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow:
    0 20px 50px rgba(0,0,0,0.15),
    0 8px 20px rgba(0,0,0,0.08);

  background: #fff;
}
.contact {
          padding: 60px 24px 100px;
        }

        .contact-inner {
          max-width: 900px;
          margin: 0 auto;
        }

.contact-box {
  background: #ffffff;                  /* pure white */
  border: 1px solid #eee;               /* soft subtle border */
  border-radius: 18px;
  padding: 52px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  box-shadow: 0 10px 30px rgba(0,0,0,0.04);   /* soft depth */
}

.contact-card {
  background: #0f0f0f;
  color: #e5e5e5;
  border-radius: 16px;
  overflow: hidden;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 30px 80px rgba(0,0,0,0.25);
  border: 1px solid #222;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #1a1a1a;
  border-bottom: 1px solid #222;
}

.terminal-title {
  margin-left: auto;
  font-size: 12px;
  color: #888;
}

.terminal-body {
  padding: 20px;
  font-family: monospace;
}

.prompt {
  color: #22c55e;
  margin-right: 6px;
}

.response {
  color: #aaa;
  margin-bottom: 20px;
}

.contact-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-links a {
  color: #60a5fa;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;
}

.contact-links a:hover {
  color: #93c5fd;
}
  
.contact-left {
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* ← change this */
  text-align: left;          /* ← add this */
}

        .contact-left h2 {
          font-size: 1.9rem;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .contact-left p {
          font-size: 0.88rem;
          color: #777;
          line-height: 1.65;
          margin: 0 0 28px;
        }

        .contact-links div {
          font-size: 0.85rem;
          color: #555;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.yellow {
          background: #facc15;
        }
        .dot.blue {
          background: #60a5fa;
        }
        .dot.green {
          background: #34d399;
        }
        .dot.red {
          background: #f87171;
        }

        .contact-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-right input,
        .contact-right textarea {
          padding: 11px 13px;
          border-radius: 9px;
          border: 1px solid #ddd9d0;
          font-size: 0.88rem;
          background: #faf9f6;
          color: #222;
          outline: none;
          transition: border-color 0.15s;
        }

        .contact-right input:focus,
        .contact-right textarea:focus {
          border-color: #bbb;
        }

        .contact-right textarea {
          min-height: 110px;
          resize: none;
        }

        .contact-right button {
          margin-top: 6px;
          background: #111;
          color: #fff;
          padding: 12px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
        }

        .contact-right button:hover {
          background: #333;
          transform: translateY(-1px);
        }

        @media (max-width: 980px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .hero-left {
            order: 1;
            align-items: flex-start;
          }

          .hero-right {
            order: 2;
          }

          .canvas {
            width: 420px;
            height: 500px;
          }

          .sticky {
            width: 130px;
          }
        }

        @media (max-width: 860px) {
          .canvas {
            width: 340px;
            height: 520px;
          }

          .sticky {
            width: 128px;
            font-size: 0.78rem;
          }

          .sticky-0 {
            top: 2%;
            left: 4%;
          }
          .sticky-1 {
            top: 2%;
            right: 4%;
          }
          .sticky-2 {
            top: 22%;
            left: 2%;
          }
          .sticky-3 {
            top: 22%;
            right: 2%;
          }
          .sticky-4 {
            bottom: 22%;
            left: 2%;
          }
          .sticky-5 {
            bottom: 22%;
            right: 2%;
          }
          .sticky-6 {
            bottom: 2%;
            left: 4%;
          }
          .sticky-7 {
            bottom: 2%;
            right: 4%;
          }

          .contact-box {
            grid-template-columns: 1fr;
            padding: 32px;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .hero-left h1 {
            font-size: 2.7rem;
          }

          .hero-left p {
            font-size: 0.95rem;
          }

          .canvas {
            width: 320px;
            height: 500px;
          }


          .p-title {
            font-size: 1.08rem;
          }

          .floating-preview {
            display: none;
          }
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