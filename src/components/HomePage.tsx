"use client";

import Image from "next/image";
import { useState, useCallback, type CSSProperties } from "react";
import { LuMail } from "react-icons/lu";   // lucide-style
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
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
  slug: string;
  tag: string;
  accent: string;
  tech: string[];
  highlights: string[];
  status: "live" | "beta" | "research";
  image: string;
  link: string;
  description: string;
  featured?: boolean;
  cred?: { label: string; type?: "award" | "funding" | "program" | "product" }[];

  badge?: "Founder" | "Co-founder" | "Founding member"; // 👈 ADD THIS

  proof?: string; // 👈 OPTIONAL (for 1-line credibility like "150+ users")

  details?: {
    problem: string;
    solution: string;
    outcome: string;
    role: string;
  };
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

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "AI / Data", items: ["LLMs", "Python", "TensorFlow", "Pipelines"] },
  { category: "Infra", items: ["Vercel", "Stripe", "Firebase", "AWS"] },
];

const projects: Project[] = [
  {
    title: "GigsWall",
    slug: "gigswall",
    tag: "freelance",
    accent: "#22c55e",
    badge: "Founder",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    highlights: ["Live Users", "Payments Integrated"],
    status: "live",
    image: "/projects/gigswall.png",
    link: "https://gigswall.com",
    description: "Student-first freelance marketplace with live payments and active users.",
    featured: true,
    cred: [
      { label: "Live platform", type: "product" },
  { label: "$6K funding", type: "funding" },
  { label: "50+ gigs posted", type: "product" }
],

    details: {
      problem:
        "Student freelancers lack a trusted, structured platform to find work. Existing marketplaces are saturated, generic, and not tailored to student workflows or trust mechanisms.",

      solution:
        "Built a dedicated freelance marketplace with integrated Stripe payments, student-focused onboarding, and a clean UX for posting, discovery, and transactions.",

      outcome:
        "Secured $6K in non-dilutive funding, launched live payments, and onboarded early users actively posting and completing gigs.",

      role:
        "Founder — led product, full-stack development (Next.js, PostgreSQL), payments integration, and go-to-market.",
    },
  },
  {
    title: "Fruition",
    slug: "fruition",
    tag: "product",
    accent: "#f59e0b",
    badge: "Founding member",
    tech: ["Next.js", "AI APIs"],
    highlights: ["Waitlist", "Early Access"],
    status: "beta",
    image: "/projects/fruition.png",
    link: "https://www.fruitionunlocked.com/",
    description: "AI-powered thinking system helping users structure decisions and reflection.",
    featured: true,
    cred: [
  { label: "Waitlist users", type: "product" },
  { label: "Early access", type: "product" },
    { label: "AI thinking system", type: "product" },

],
    details: {
      problem:
        "Most tools capture thoughts but don’t help users structure decisions or think clearly through complex problems.",

      solution:
        "Developed an AI-driven system that guides users through structured thinking workflows, combining prompts, reflection loops, and decision frameworks.",

      outcome:
        "Built early access product with waitlist users and initial validation of structured thinking workflows.",

      role:
        "Founding member — contributed to product development, frontend engineering, and AI workflow design.",
    },
  },
  {
    title: "BeyondColor",
    slug: "beyondcolor",
    tag: "ai",
    accent: "#6366f1",
    badge: "Co-founder",
    tech: ["Python", "OpenCV", "TensorFlow"],
    highlights: [
      "NSF i-Corps",
      "Chicago Booth (I2M)",
      "Microsoft Pitch"
    ],
    status: "beta",
    image: "/projects/beyondcolor.png",
    link: "https://beyondcolor.app",
    description:
"AI-powered platform for diagnosing and supporting color vision through real-world perception.",
    featured: true,
cred: [
  { label: "NSF i-Corps", type: "program" },
  { label: "Booth Innovate2Market", type: "program" },
  { label: "Microsoft Pitch", type: "award" },
  { label: "Nucleate Activate", type: "program" },
],

    details: {
      problem:
        "Millions live with color vision deficiency, yet current tools rely on static tests that fail to reflect real-world color perception or functional ability.",

      solution:
        "Built an AI-driven platform combining computer vision and perceptual modeling to assess color vision dynamically and generate personalized correction and accessibility insights.",

      outcome:
        "Selected for NSF i-Corps and Chicago Booth’s Innovate2Market program. Conducted a clinical study validating approach and presented at Microsoft Chicago through Butter x The AI Collective.",

      role:
        "Co-founder — led ML and computer vision development, and contributed across full-stack engineering and clinical validation.",
    },
  },
  {
    title: "CircleConnect",
    slug: "circleconnect",
    tag: "product",
    accent: "#3b82f6",
    tech: ["Next.js", "Firebase", "Auth"],
    highlights: ["Social Graph", "Live Discussions"],
    status: "beta",
    image: "/projects/circleconnect.png",
    link: "https://circleconnectt.vercel.app/",
    description: "Real-time social discussion platform built for communities.",
    details: {
      problem: "Discord is noisy, Reddit is anonymous — there was no middle ground for tight-knit communities to have structured, real-time discussions.",
      solution: "Built a graph-based social platform with Firebase real-time sync, threaded discussions, and community-specific spaces. Auth ties identity to your real social graph.",
      outcome: "Live on Vercel with active test community. Social graph feature drives 3× more replies vs. flat feed.",
      role: "Lead engineer — architecture, Firebase integration, social graph logic, UI.",
    },
  },
  {
    title: "SwapCampus",
    slug: "swapcampus",
    tag: "product",
    accent: "#2563eb",
    tech: ["Next.js", "MongoDB", "JWT"],
    highlights: ["Campus-only Auth", "Moderated Listings"],
    status: "beta",
    image: "/projects/swapcampus.png",
    link: "https://swapcampus.vercel.app/",
    description: "Campus-only marketplace with identity-based access control.",
    details: {
      problem: "Facebook Marketplace is unsafe for campus trades — no identity verification means scams are rampant and trust is near zero.",
      solution: "Built a .edu email-gated marketplace with JWT-based identity, moderated listings, and an escrow-style handoff flow. MongoDB powers fast search across categories.",
      outcome: "Live with 150+ listings in the first month. Zero reported scam incidents. Expanding to two more campuses.",
      role: "Solo founder — backend, auth system, moderation tools, full deployment.",
    },
  },
  {
    title: "InnerSpace",
    slug: "innerspace",
    tag: "ai",
    accent: "#a78bfa",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "LLMs"],
    highlights: ["AI Reflections", "Mood Tracking", "Clean UX"],
    status: "live",
    image: "/projects/innerspace.png",
    link: "https://innerspace.app",
    description: "AI-powered journaling and reflection system designed to help users think clearly, track emotions, and build self-awareness.",
    details: {
      problem: "Most journaling tools are passive — they store thoughts but don't help users process, reflect, or gain insights from them.",
      solution: "Built an AI-powered reflection system that guides users through structured prompts, analyzes sentiment and patterns, and provides weekly insights without overwhelming the experience.",
      outcome: "Created a calm, minimal product with strong early engagement. Users consistently return for weekly reflections and habit tracking.",
      role: "Full-stack builder — designed UX, built frontend in Next.js, backend with FastAPI, and integrated LLM-based reflection workflows.",
    },
  },

  {
    title: "HabitCheck",
    slug: "habitcheck",
    tag: "product",
    accent: "#84cc16",
    tech: ["Next.js", "PostgreSQL"],
    highlights: ["Personal Project"],
    status: "live",
    image: "/projects/habitcheck.png",
    link: "/projects/habitcheck",
    description: "Minimal habit tracking system focused on consistency.",
    details: {
      problem: "Existing habit apps are bloated with gamification and social features that distract from the core loop: did you do the thing today?",
      solution: "Stripped everything back to a single daily check-in grid per habit. Built with Next.js and PostgreSQL, with a clean weekly heatmap and streak counter as the only metrics that matter.",
      outcome: "Personal daily driver. Maintains a 90%+ completion rate for tracked habits. Planning a public launch.",
      role: "Solo — product design, frontend, backend, database schema.",
    },
  },
];

type StickyStyle = CSSProperties & { "--bg": string; "--rot": string };

export default function HomePage() {
  const [hoveredSticky, setHoveredSticky] = useState<number | null>(null);
  const [imageError, setImageError] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  }, []);

  const activePreview =
  hoveredProject !== null && hoveredProject >= 0
    ? projects[hoveredProject].image
    : null;
  const indexedProjects = projects.map((p, idx) => ({ ...p, idx }));
  const featuredProjects = indexedProjects.filter((p) => p.featured);
  const otherProjects = indexedProjects.filter((p) => !p.featured);

  return (
    <main onMouseMove={handleMouseMove}>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="grid-bg" />
        <div className="hero-inner">

          {/* Left */}
          <div className="hero-left">
            <span className="status-pill">
              <span className="status-dot" />
              open to opportunities
            </span>

            <h1>
  building real products
  <br />
  with <em>ai, data,</em>
  <br />
  & users.
</h1>

            <p className="hero-sub">
              I build products at the intersection of AI, data, and great UX —
              from event pipelines to agentic LLM workflows.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">6+</span>
                <span className="stat-label">products shipped</span>
              </div>
              <div className="stat-divider" />

              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">3 </span>
                <span className="stat-label">live startups</span>
              </div>
            </div>

            <div className="cta">
              <a href="#projects" className="btn-primary">view my work ↓</a>
            </div>
          </div>

          {/* Right — sticky wall */}
          <div className="hero-right">
            <p className="eyebrow">this is me 👇</p>
            <div className="canvas">
              {stickies.map((s, i) => (
                <div
                  key={s.id}
                  className={`sticky sticky-${i} ${hoveredSticky === s.id ? "up" : ""}`}
                  style={{ "--bg": s.bg, "--rot": s.rotate } as StickyStyle}
                  onMouseEnter={() => setHoveredSticky(s.id)}
                  onMouseLeave={() => setHoveredSticky(null)}
                >
                  <div className="sticky-label">{s.label}</div>
                  <div className="sticky-note">{s.note}</div>
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
                    <div className="photo-fallback">MS</div>
                  )}
                </div>
                <div className="photo-name">
                  Manavi Sharma <span className="spark">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS STRIP ── */}
      {/* ── SKILLS TABLE ── */}
      {/* ── SKILLS ── */}
      <section className="skills-section">
        <div className="skills-inner">
          <span className="skills-eyebrow">stack</span>
          <div className="skills-grid">
            {[
              { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"], accent: "#3b82f6", num: "01" },
              { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"], accent: "#22c55e", num: "02" },
              { category: "AI / Data", items: ["LLMs", "Python", "TensorFlow", "Pipelines"], accent: "#a78bfa", num: "03" },
              { category: "Infra", items: ["Vercel", "Stripe", "Firebase", "AWS"], accent: "#f59e0b", num: "04" },
            ].map((s) => (
              <div key={s.category} className="skill-card" style={{ "--accent": s.accent } as CSSProperties}>
                <div className="skill-card-top">
                  <span className="skill-cat">{s.category}</span>
                  <span className="skill-num">{s.num}</span>
                </div>
                <div className="skill-card-divider" />
                <div className="skill-items">
                  {s.items.map((item) => (
                    <div key={item} className="skill-item">
                      <span className="skill-dot" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FEATURED (STARTUPS) ── */}
      <section className="featured-section" id="projects">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">featured work</span>
            <h2 className="section-title">Startups</h2>
            <p className="section-sub">
              Products I’ve built across startups — from zero to live users and real traction.
            </p>          </div>

          <div className="featured-grid">
            {featuredProjects.map((p, i) => (
              <Link
  key={i}
  href={`/projects/${p.slug}`}
  className="featured-card"
  style={{ "--accent": p.accent } as CSSProperties}
>

    <div className="featured-img-wrap">
  <Image
    src={p.image}
    alt={p.title}
    fill
    className="featured-img"
  />
  <span className={`featured-status status-${p.status}`}>
    {p.status}
  </span>

  </div>

  <div className="featured-body">
    <div className="featured-title-row">
      <span className="featured-title">{p.title}</span>
      {p.badge && <span className="founder-badge">{p.badge}</span>}
    </div>

    <p className="featured-desc">{p.description}</p>

    {p.cred && (
      <div className="featured-chips">
        {p.cred.map((c, i) => (
          <span key={i} className={`chip cred cred-${c.type || "default"}`}>
            {c.label}
          </span>
        ))}
      </div>
    )}

    {p.proof && <span className="project-proof">{p.proof}</span>}

    {/* <div className="featured-chips">
      {p.tech.map((t, j) => (
        <span key={j} className="chip tech">{t}</span>
      ))}
    </div> */}

    <div className="featured-footer-row">
      <span className="featured-learn-btn">
        Learn more →
      </span>
    </div>
  </div>
</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ── */}
      <section className="projects-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">selected work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">Side projects, research, and experiments.</p>
          </div>

          <div className="proj-list">
            {otherProjects.map((p, i) => (
              <div
  key={i}
  className="proj-row"
  style={{ "--accent": p.accent } as CSSProperties}
  onClick={() => setActiveModal(p)}
             
                onMouseEnter={() => setHoveredProject(p.idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <span className="proj-index">{String(i + 1).padStart(2, "0")}</span>

                <div className="proj-body">
                  <div className="proj-title-row">
                    <span className="proj-title">{p.title}</span>
                    <span className={`proj-tag badge-${p.tag}`}>{p.tag}</span>
                    <span className={`proj-status status-${p.status}`}>{p.status}</span>
                  </div>
                  <p className="proj-desc">{p.description}</p>
                  <div className="proj-chips">
                    {p.highlights.map((h, j) => (
                      <span key={j} className="chip highlight">{h}</span>
                    ))}
                    {p.tech.map((t, j) => (
                      <span key={j} className="chip tech">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-right-actions">
  {/* Learn more (modal) */}
  <button
    className="featured-learn-btn"
    style={{ "--accent": p.accent } as CSSProperties}
    onClick={(e) => {
      e.stopPropagation();
      setActiveModal(p);
    }}
  >
    Learn more
  </button>

  {/* Visit site (external) */}
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    className="visit-btn"
    style={{ "--accent": p.accent } as CSSProperties}
    onClick={(e) => e.stopPropagation()}
  >
    Visit ↗
  </a>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT MODAL ── */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card" style={{ "--accent": activeModal.accent } as CSSProperties} onClick={(e) => e.stopPropagation()}>

            <div className="modal-top-bar">
              <div className="modal-title-row">
                <div className="modal-eyebrow">
                  <span className="modal-eyebrow-dot" />
                  {activeModal.tag} · {activeModal.status}
                </div>
                <span className="modal-title">{activeModal.title}</span>
              </div>
              <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>
            <div className="modal-divider" />

            {activeModal.details && (
              <div className="modal-body">
                <div className="modal-section">
                  <span className="modal-label">Problem</span>
                  <p className="modal-text">{activeModal.details.problem}</p>
                </div>
                <div className="modal-section">
                  <span className="modal-label">Solution</span>
                  <p className="modal-text">{activeModal.details.solution}</p>
                </div>
                <div className="modal-section">
                  <span className="modal-label">Outcome</span>
                  <p className="modal-text">{activeModal.details.outcome}</p>
                </div>
                <div className="modal-section">
                  <span className="modal-label">My role</span>
                  <p className="modal-text">{activeModal.details.role}</p>
                </div>
              </div>
            )}

            <div className="modal-footer">
              <div className="modal-chips">
                {activeModal.tech.map((t, i) => (
                  <span key={i} className="chip tech">{t}</span>
                ))}
                {activeModal.highlights.map((h, i) => (
                  <span key={i} className="chip highlight">{h}</span>
                ))}
              </div>
              <a href={activeModal.link} target="_blank" rel="noopener noreferrer" className="modal-visit-btn" style={{ "--accent": activeModal.accent } as CSSProperties}>
                Visit site ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT ── */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-left">
            <span className="eyebrow">contact</span>
            <h2 className="section-title">{"Let's build"}<br />something together.</h2>
            <p className="contact-sub">
              Have an idea, a problem, or just want to connect {"I'm "}always down to chat.
            </p>
            <div className="contact-links">
              <a href="mailto:manavisharma14@gmail.com" className="contact-link">
                <LuMail size={16} />
                manavisharma14@gmail.com
              </a>

              <a href="https://github.com/manavisharma14" className="contact-link" target="_blank">
                <FaGithub size={16} />
                github.com/manavisharma14
              </a>

              <a href="https://www.linkedin.com/in/manavi-sharma-521014222/" className="contact-link" target="_blank">
                <FaLinkedin size={16} />
                linkedin.com/in/manavi-sharma
              </a>

              <a
                href="https://twitter.com/manavisharma06"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={16} />
                twitter.com/manavisharma06
              </a>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="terminal-title">contact.sh</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">~</span> whoami</p>
              <p className="t-out">Manavi Sharma — engineer & builder</p>
              <p style={{ marginTop: 16 }}><span className="prompt">~</span> echo $status</p>
              <p className="t-out t-green">open to full-time &amp; contract roles</p>
              <p style={{ marginTop: 16 }}><span className="prompt">~</span> say hello</p>
              <p className="t-out">always down to build, chat, or brainstorm.</p>
              <p className="t-cursor">▌</p>
            </div>
          </div>
        </div>
      </section>

      <p className="footer">
  © 2026 Manavi Sharma
</p>

      {/* floating preview */}
      {activePreview && (
        <div
          className="floating-preview"
          style={{ transform: `translate(${cursor.x + 20}px, ${cursor.y + 20}px)` }}
        >
          <Image src={activePreview} alt="preview" width={220} height={140} className="preview-img" />
        </div>
      )}

      {/* ==================== STYLES ==================== */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #ffffff;
          color: #111;
          -webkit-font-smoothing: antialiased;
        }
        a { text-decoration: none; color: inherit; }

        /* ── HERO ── */
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
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, #c5c1b8 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.2;
          pointer-events: none;
        }
       

        .status-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid #e5e2da;
          color: #666;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 0 2px rgba(74,222,128,0.25);
        }

        .hero-left h1 {
          margin: 0;
          font-size: clamp(2.8rem, 5.5vw, 4.2rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 750;
          color: #0a0a0a;
        }
        .hero-left h1 em {
          font-style: normal;
          color: #888;
          font-weight: 500;
        }
        .hero-sub {
          margin: 0;
          max-width: 420px;
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
        }

        /* stat strip */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid #ece9e2;
          border-bottom: 1px solid #ece9e2;
        }
        .stat { display: flex; flex-direction: column; gap: 2px; }
        .stat-num { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; color: #111; }
        .stat-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; }
        .stat-divider { width: 1px; height: 32px; background: #e5e2da; }

        .cta { display: flex; flex-wrap: wrap; gap: 12px; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: #111;
          color: #fff;
          transition: all 0.18s ease;
        }
        .btn-primary:hover { background: #333; transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          color: #444;
          border: 1px solid #ddd;
          transition: all 0.18s ease;
        }
        .btn-secondary:hover { background: #f5f3ef; transform: translateY(-1px); }

        /* ── STICKIES ── */
        .hero-right {
  display: flex;
  flex-direction: column;
  align-items: center;   /* 👈 THIS FIXES MOST OF IT */
  gap: 8px;
}
        .eyebrow { font-size: 0.72rem; color: #aaa; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px; }
        .canvas {
  position: relative;
  width: 540px;
  height: 520px;
  margin: 0 auto;        /* 👈 extra safety */
}
        .sticky {
          position: absolute;
          width: 138px;
          padding: 12px 13px;
          background: var(--bg);
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.07);
          transform: rotate(var(--rot));
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .sticky.up {
          transform: rotate(0deg) translateY(-6px) scale(1.04);
          box-shadow: 0 12px 28px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .sticky-label { font-size: 0.8rem; font-weight: 650; color: #222; margin-bottom: 3px; }
        .sticky-note { font-size: 0.7rem; color: #888; }
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
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .photo-card {
          width: 148px; height: 148px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #e0dcd4;
          box-shadow: 0 8px 32px rgba(0,0,0,0.09);
          background: #ede9e1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .photo { object-fit: cover; }
        .photo-fallback {
          font-size: 2rem;
          font-weight: 700;
          color: #999;
        }


        .featured-learn-btn {
  font-size: 12px;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 999px;

  background: var(--accent);
  color: #fff;

  border: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  transition: all 0.2s ease;
}

.featured-learn-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  opacity: 0.9;
}

        .photo-name {
          margin-top: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #444;
          white-space: nowrap;
        }
        .spark { color: #f59e0b; }

.chip.cred {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

/* PROGRAMS (NSF, Booth) */
.cred-program {
  background: rgba(99, 102, 241, 0.08);
  color: #4f46e5;
}

/* FUNDING */
.cred-funding {
  background: rgba(34, 197, 94, 0.08);
  color: #15803d;
}

/* AWARDS / BIG NAMES */
.cred-award {
  background: rgba(245, 158, 11, 0.1);
  color: #b45309;
}

/* PRODUCT / TRACTION */
.cred-product {
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
}
        /* ── SKILLS TABLE ── */
.skills-table {
  padding: 48px 24px; /* tighter */
  background: #fafaf8;
}

/* ── SKILLS ── */
.skills-section {
  padding: 56px 24px;
  background: #fafaf8;
  border-top: 1px solid #f0ede6;
  border-bottom: 1px solid #f0ede6;
}
.skills-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.skills-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ccc;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.skill-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  overflow: hidden;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  cursor: default;
}
.skill-card::before {
  content: "";
  position: absolute;
  left: 0; top: 15%;
  width: 3px; height: 70%;
  border-radius: 2px;
  background: var(--accent);
  opacity: 0.25;
  transition: opacity 0.22s ease;
}
.skill-card:hover::before { opacity: 1; }
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  border-color: var(--accent);
}
.skill-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.skill-cat {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.skill-num {
  font-size: 11px;
  font-weight: 600;
  color: #e0ddd6;
}
.skill-card-divider {
  height: 1px;
  background: #f5f3ef;
}
.skill-items {
  display: flex;
  flex-direction: column;
}
.skill-item {
  font-size: 13px;
  font-weight: 500;
  color: #444;
  padding: 7px 0;
  border-bottom: 1px solid #f7f5f2;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.15s;
}
.skill-item:last-child { border-bottom: none; padding-bottom: 0; }
.skill-item:hover { color: #000; }
.skill-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.35;
  flex-shrink: 0;
  transition: opacity 0.15s;
}
.skill-item:hover .skill-dot { opacity: 1; }

/* responsive */
@media (max-width: 980px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}

.skills-table-inner {
  max-width: 920px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
}

/* header */
.skills-header {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 18px 24px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #bbb;
  background: #fafafa;
  border-bottom: 1px solid #eee;
}

/* rows */
.skills-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 22px 24px;
  border-bottom: 1px solid #f2f2f2;
  transition: background 0.2s ease;
}

.skills-row:last-child {
  border-bottom: none;
}

.skills-row:hover {
  background: #fafaf8;
}

/* columns */
.skills-col.category {
  font-size: 15px;
  font-weight: 600;
  color: #222;
}

.skills-col.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* chips */
.skill-chip {
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #f2f2f2;
  color: #555;
  font-weight: 500;
  transition: all 0.15s ease;
}

.skill-chip.primary {
  background: #111;
  color: #fff;
}

.skill-chip:hover {
  transform: translateY(-1px);
}


        /* ── SHARED SECTION CHROME ── */
        .section-inner { max-width: 1000px; margin: 0 auto; }
        .section-header { margin-bottom: 48px; }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 4px 0 8px;
          color: #0a0a0a;
        }
        .section-sub { font-size: 0.92rem; color: #888; margin: 0; max-width: 440px; line-height: 1.6; }

        /* ── FEATURED ── */
        .featured-section { padding: 96px 24px 48px; }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .featured-card {
          display: flex;
          cursor: pointer;
          flex-direction: column;
          border-radius: 18px;
          border: 1px solid #eee;
          background: #fff;
          overflow: hidden;
          transition: all 0.28s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .featured-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.11), 0 8px 24px rgba(0,0,0,0.06);
          border-color: var(--accent);
        }
        .featured-img-wrap {
          position: relative;
          height: 160px;
          background: #f4f2ed;
          overflow: hidden;
        }
        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .featured-card:hover .featured-img { transform: scale(1.03); }
        .featured-status {
          position: absolute;
          top: 12px; right: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .featured-body { padding: 18px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
        .featured-title-row { display: flex; align-items: center; gap: 10px; }
        .featured-title { font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; }
        .founder-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 999px;
          background: #f1f0ea;
          color: #888;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .featured-desc { font-size: 0.88rem; color: #666; line-height: 1.65; margin: 0; flex: 1; }
        .featured-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .featured-cta {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          margin-top: 4px;
          transition: letter-spacing 0.2s ease;
        }
        .featured-card:hover .featured-cta { letter-spacing: 0.03em; }
        .featured-footer-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 4px;
        }

        /* ── PROJECT LIST ── */
        .projects-section { padding: 48px 24px 96px; }
        .proj-list { display: flex; flex-direction: column; }
        .proj-row {
          position: relative;
          display: grid;
          grid-template-columns: 52px 1fr auto;
          gap: 20px;
          align-items: start;
          padding: 52px 32px 52px 40px;
          border-bottom: 1px solid #f0ede6;
          transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: 14px;
        }
        .proj-row:first-child { border-top: 1px solid #f0ede6; }
        .proj-row::before {
          content: "";
          position: absolute;
          left: 0;
          top: 20%;
          width: 3px;
          height: 60%;
          border-radius: 2px;
          background: var(--accent);
          opacity: 0.2;
          transition: opacity 0.25s ease, height 0.25s ease, top 0.25s ease;
        }


        .project-proof {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent);
  margin-top: 4px;
}
        .proj-row:hover::before { opacity: 1; height: 70%; top: 15%; }
        .proj-row:hover {
          background: #fff;
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 16px 48px rgba(0,0,0,0.09), 0 4px 12px rgba(0,0,0,0.05);
          border-color: transparent;
          z-index: 1;
        }
        .proj-index { font-size: 0.75rem; color: #ccc; padding-top: 4px; font-variant-numeric: tabular-nums; }
        .proj-body { display: flex; flex-direction: column; gap: 8px; }
        .proj-title-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .proj-title {
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        .proj-row:hover .proj-title { color: var(--accent); }
        .proj-desc { font-size: 0.875rem; color: #666; line-height: 1.65; margin: 0; max-width: 560px; }
        .proj-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .proj-right-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          align-self: center;
        }
        .proj-arrow { font-size: 16px; color: #ccc; transition: 0.2s; }
        .proj-row:hover .proj-arrow { color: var(--accent); transform: translate(2px, -2px); }

        .learn-more-btn {
          font-size: 11px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          color: var(--accent);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.18s ease;
          letter-spacing: 0.02em;
        }
        .learn-more-btn:hover {
          background: color-mix(in srgb, var(--accent) 15%, transparent);
          transform: translateY(-1px);
        }

        /* ── MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.38);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.16s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-card {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 540px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08);
          overflow: hidden;
          animation: slideUp 0.22s cubic-bezier(0.23,1,0.32,1);
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .modal-top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 28px 28px 0;
        }
        .modal-title-row { display: flex; flex-direction: column; gap: 6px; }
        .modal-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .modal-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .modal-title { font-size: 1.55rem; font-weight: 750; letter-spacing: -0.03em; color: #0a0a0a; }
        .modal-close {
          background: #fafaf8;
          border: 1px solid #ece9e2;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 12px;
          color: #999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: all 0.15s;
        }
        .modal-close:hover { background: #f0ede6; color: #444; }

        .modal-divider {
          height: 1px;
          background: #f0ede6;
          margin: 20px 0 0;
        }

        .modal-body {
          padding: 20px 28px;
          display: flex;
          flex-direction: column;
        }
        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 16px 0;
          border-bottom: 1px solid #f7f5f2;
        }
        .modal-section:last-child { border-bottom: none; }
        .modal-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
        }
        .modal-text {
          font-size: 0.875rem;
          color: #555;
          line-height: 1.72;
          margin: 0;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px 20px;
          border-top: 1px solid #f0ede6;
          flex-wrap: wrap;
          gap: 12px;
        }
        .modal-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .modal-visit-btn {
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .modal-visit-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        /* ── CHIPS / BADGES ── */
        .chip {
          display: inline-block;
          font-size: 11px;
          padding: 3px 9px;
          border-radius: 6px;
          font-weight: 500;
        }
        .chip.tech { background: rgba(0,0,0,0.05); color: #666; }
        .chip.highlight {
          background: #eef0fb;
          color: #4338ca;
          border: 1px solid #dde0f7;
          font-weight: 600;
        }
        .proj-tag {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .badge-freelance { background: #fef3c7; color: #92400e; }
        .badge-product   { background: #fde68a; color: #a16207; }
        .badge-ai        { background: #e0e7ff; color: #3730a3; }
        .proj-status {
          font-size: 10px;
          font-weight: 600;
          padding: 3px 9px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .status-live     { background: #dcfce7; color: #15803d; }
        .status-beta     { background: #fef3c7; color: #b45309; }
        .status-research { background: #dbeafe; color: #1d4ed8; }

        /* ── CONTACT ── */
        .contact-section {
          padding: 96px 24px;
          background: #fafaf8;
          border-top: 1px solid #ece9e2;
        }
        .contact-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .contact-left { display: flex; flex-direction: column; gap: 20px; }
        .contact-sub { font-size: 0.92rem; color: #888; max-width: 360px; line-height: 1.65; margin: 0; }
        .contact-links { display: flex; flex-direction: column; gap: 12px; margin-top: 8px; }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #444;
          transition: color 0.2s;
        }
        .contact-link:hover { color: #111; }
        .link-icon { font-size: 14px; color: #bbb; }

        .terminal-card {
          background: #0d0d0d;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #222;
          box-shadow: 0 24px 72px rgba(0,0,0,0.3);
        }
        .terminal-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: #161616;
          border-bottom: 1px solid #222;
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #ff5f57; }
        .yellow { background: #febc2e; }
        .green { background: #28c840; }
        .terminal-title { margin-left: auto; font-size: 11px; color: #555; font-family: monospace; }
        .terminal-body {
          padding: 20px 22px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 12.5px;
          line-height: 1.6;
          color: #c8c8c8;
        }
        .terminal-body p { margin: 0; }
        .prompt { color: #22c55e; margin-right: 8px; user-select: none; }
        .t-out { color: #888; margin-top: 4px; padding-left: 18px; }
        .t-green { color: #4ade80 !important; }
        .t-cursor {
          color: #22c55e;
          animation: blink 1.1s step-end infinite;
          margin-top: 12px;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* ── FLOATING PREVIEW ── */
        .floating-preview {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-9999px, -9999px);
        }
        .preview-img {
          border-radius: 10px;
          border: 1px solid #eee;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 980px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .canvas {
  position: relative;
  width: 520px;
  height: 520px;
  margin-left: 40px;   /* 👈 KEY CHANGE */
}
          .featured-grid { grid-template-columns: 1fr 1fr; } .featured-img-wrap { height: 140px; }
          .contact-inner { grid-template-columns: 1fr; }
          .skills-inner { grid-template-columns: repeat(3, 1fr); }
        }

        .footer {
  padding: 32px 24px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  border-top: 1px solid #eee;
  background: #fafaf8;
}
        @media (max-width: 640px) {
          .hero { padding-top: 52px; }
          .hero-left h1 { font-size: 2.6rem; }
          .canvas { width: 100%; max-width: 380px; }
          .floating-preview { display: none; }
          .skills-inner { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </main>
  );
}