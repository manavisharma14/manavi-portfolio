"use client";

import { type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";


/* ── SHARED TYPES (copy from your types file or shared lib) ── */
type Cred = {
  label: string;
  type?: "award" | "funding" | "program" | "product";
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
  badge?: "Founder" | "Co-founder" | "Founding member";
  proof?: string;
  cred?: Cred[];
  details?: {
    problem: string;
    solution: string;
    outcome: string;
    role: string;
  };
};

/* ── FULL PROJECT DATA ── */
const projects: Project[] = [
  {
    title: "GigsWall",
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
      { label: "$6K funding", type: "funding" },
      { label: "Live payments", type: "product" },
    ],
    details: {
      problem:
        "Student freelancers lack a trusted, structured platform to find work. Existing marketplaces are saturated, generic, and not tailored to student workflows or trust mechanisms.",
      solution:
"Built a dedicated freelance marketplace with Stripe-based checkout infrastructure, student-focused onboarding, and a clean UX for posting, discovery, and transactions.",
      outcome:
        "Secured $6K in non-dilutive funding, launched live payments, and onboarded early users actively posting and completing gigs.",
      role:
        "Founder — led product, full-stack development (Next.js, PostgreSQL), payments integration, and go-to-market.",
    },
  },
  {
    title: "Fruition",
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
    details: {
      problem:
        "Most tools capture thoughts but don't help users structure decisions or think clearly through complex problems.",
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
  tag: "healthtech",
  accent: "#6366f1",
  badge: "Co-founder",
  tech: ["Next.js", "Computer Vision", "Healthcare", "Product"],
  highlights: [
    "$6K Non-Dilutive Funding",
    "Chicago Booth I2M",
    "Microsoft Pitch"
  ],
  status: "beta",
  image: "/projects/beyondcolor.png",
  link: "https://beyondcolor.app",
  description:
    "Funded digital health startup modernizing color vision screening through real-world perception and accessibility.",

  featured: true,

  cred: [
    { label: "$5K NSF i-Corps", type: "funding" },
    { label: "$1K Booth I2M", type: "funding" },
    { label: "Microsoft Pitch", type: "award" },
    { label: "Chicago Booth", type: "program" },
  ],

  details: {
    problem:
      "Traditional color vision tests rely on static charts that fail to reflect real-world perception, often leading to inaccurate screening outcomes.",

    solution:
      "Built a modern digital screening platform with interactive testing, accessibility-first UX, and future-ready adaptive analytics.",

    outcome:
      "Secured $6K in non-dilutive funding, presented at Microsoft Chicago, completed customer discovery including San Francisco startup ecosystem interviews, and validated market demand across healthcare and accessibility sectors.",

    role:
      "Co-founder — led product strategy, fundraising, customer discovery, partnerships, and product execution.",
  },
}
];

/* ── SECTION COMPONENT ── */
function DetailSection({
  num,
  label,
  text,
  accent,
}: {
  num: string;
  label: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="detail-section" style={{ "--accent": accent } as CSSProperties}>
      <div className="detail-section-left">
        <span className="detail-num">{num}</span>
        <span className="detail-label">{label}</span>
      </div>
      <p className="detail-text">{text}</p>
    </div>
  );
}

/* ── SINGLE PROJECT CARD (used in "other projects" strip) ── */
function RelatedCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.title.toLowerCase().replace(/\s/g, "-")}`}
      className="related-card"
      style={{ "--accent": p.accent } as CSSProperties}
    >
      <div className="related-img-wrap">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="related-img"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="related-body">
        <div className="related-title-row">
          <span className="related-title">{p.title}</span>
          {p.badge && <span className="founder-badge">{p.badge}</span>}
        </div>

        <p className="related-desc">{p.description}</p>
        <span className="related-cta">View project ↗</span>
      </div>
    </Link>
  );
}

/* ── PAGE COMPONENT ── */
/* 
  Usage in Next.js app router:
    app/projects/[slug]/page.tsx
    
  Pass the project slug via params, look it up from the projects array.
  This component receives the resolved Project object as a prop.
*/
export default function ProjectPage({ project }: { project?: Project }) {
  /* fallback to first project for preview/storybook */
  const p = project ?? projects[0];
  const others = projects.filter((x) => x.title !== p.title);

  return (
    <main>

      {/* ── HERO BLOCK ── */}
      <section className="proj-hero" style={{ "--accent": p.accent } as CSSProperties}>
        <div className="proj-hero-inner">

          {/* breadcrumb */}
          <Link href="/#projects" className="breadcrumb"></Link>

          {/* eyebrow row */}
          <div className="proj-eyebrow-row">
            <span className="proj-eyebrow-dot" style={{ background: p.accent }} />
            <span className="proj-eyebrow-text">{p.tag} · {p.status}</span>
            {p.badge && <span className="founder-badge">{p.badge}</span>}
          </div>

          {/* title */}
          <h1 className="proj-title">{p.title}</h1>
          <p className="proj-tagline">{p.description}</p>

          {/* cred strip */}
          {p.cred && (
            <div className="cred-strip">
              {p.cred.map((c, i) => (
                <span key={i} className={`chip cred cred-${c.type ?? "default"}`}>{c.label}</span>
              ))}
            </div>
          )}

          {/* action buttons */}
          <div className="proj-actions">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: p.accent } as CSSProperties}
            >
              Visit site ↗
            </a>
            <div className="tech-pills">
              {p.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* hero image */}
        <div className="proj-hero-img-wrap">
          <div className="proj-hero-img-frame" style={{ "--accent": p.accent } as CSSProperties}>
            <Image
  src={p.image}
  alt={p.title}
  fill
  className="proj-hero-img"
  sizes="(max-width: 900px) 100vw, 50vw"
/>
          </div>
        </div>
      </section>

      {/* ── DETAIL SECTIONS ── */}
      <section className="details-section">
        <div className="details-inner">
          {p.details && (
            <>
              <DetailSection num="01" label="Problem" text={p.details.problem} accent={p.accent} />
              <DetailSection num="02" label="Solution" text={p.details.solution} accent={p.accent} />
              <DetailSection num="03" label="Outcome" text={p.details.outcome} accent={p.accent} />
              <DetailSection num="04" label="My role" text={p.details.role} accent={p.accent} />
            </>
          )}
        </div>
      </section>

      {/* ── HIGHLIGHTS STRIP ── */}
      <section className="highlights-strip" style={{ "--accent": p.accent } as CSSProperties}>
        <div className="highlights-inner">
          {p.highlights.map((h, i) => (
            <div key={i} className="highlight-item">
              <span className="highlight-dot" />
              <span className="highlight-text">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OTHER FEATURED PROJECTS ── */}
      {others.length > 0 && (
        <section className="related-section">
          <div className="related-inner">
            <div className="related-header">
              <span className="section-eyebrow">more work</span>
              <h2 className="related-title-heading">Other startups</h2>
            </div>
            <div className="related-grid">
              {others.map((o) => (

  <RelatedCard key={o.title} p={o} />

))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER CTA ── */}
      <section className="footer-cta">
        <div className="footer-cta-inner">
          <p className="footer-cta-label">like what you see?</p>
          <h2 className="footer-cta-heading">{"Let's"} build something together.</h2>
          <a href="mailto:manavisharma14@gmail.com" className="btn-primary footer-btn">
            get in touch ↗
          </a>
        </div>
      </section>

      {/* ── STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fff;
          color: #111;
          -webkit-font-smoothing: antialiased;
        }
        a { text-decoration: none; color: inherit; }

        

        /* ── HERO ── */
        .proj-hero {
          padding: 120px 24px 80px;
          background: #fafaf8;
          border-bottom: 1px solid #f0ede6;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1120px;
          margin: 0 auto;
        }
        .proj-hero-inner { display: flex; flex-direction: column; gap: 20px; }

        .breadcrumb {
          font-size: 0.78rem;
          color: #bbb;
          font-weight: 500;
          transition: color 0.15s;
          width: fit-content;
        }
        .breadcrumb:hover { color: #666; }

        .proj-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .proj-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .proj-eyebrow-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .proj-title {
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 750;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0;
          color: #0a0a0a;
        }
        .proj-tagline {
          font-size: 1.05rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
          max-width: 480px;
        }

        .cred-strip { display: flex; flex-wrap: wrap; gap: 7px; }
        .chip.cred {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 999px;
          letter-spacing: 0.02em;
        }
        .cred-program { background: rgba(99,102,241,0.08); color: #4f46e5; }
        .cred-funding  { background: rgba(34,197,94,0.08); color: #15803d; }
        .cred-award    { background: rgba(245,158,11,0.10); color: #b45309; }
        .cred-product  { background: rgba(59,130,246,0.08); color: #2563eb; }
        .cred-default  { background: #f1f0ea; color: #888; }

        .proj-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 11px 20px;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: opacity 0.18s, transform 0.18s;
        }
        .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

        .tech-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .tech-pill {
          font-size: 12px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 6px;
          background: rgba(0,0,0,0.05);
          color: #666;
        }

        /* hero image */
        .proj-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .proj-hero-img-frame {
  position: relative;
  width: 100%;
  height: 320px;   /* REQUIRED */
  min-height: 320px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 24px 72px rgba(0,0,0,0.1);
  outline: 3px solid color-mix(in srgb, var(--accent) 20%, transparent);
  outline-offset: 4px;
}
        .proj-hero-img { width: 100%; height: 300px; object-fit: cover; display: block; background: #f4f2ed; }

        /* ── DETAIL SECTIONS ── */
        .details-section { padding: 80px 24px; }
        .details-inner {
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .detail-section {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 32px;
          padding: 36px 0;
          border-bottom: 1px solid #f0ede6;
          align-items: start;
        }
        .detail-section:last-child { border-bottom: none; }
        .detail-section-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 3px;
        }
        .detail-num {
          font-size: 11px;
          font-weight: 700;
          color: #e0ddd6;
          font-variant-numeric: tabular-nums;
        }
        .detail-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .detail-text {
          font-size: 1rem;
          color: #444;
          line-height: 1.78;
          margin: 0;
        }

        /* ── HIGHLIGHTS STRIP ── */
        .highlights-strip {
          background: #fafaf8;
          border-top: 1px solid #f0ede6;
          border-bottom: 1px solid #f0ede6;
          padding: 32px 24px;
        }
        .highlights-inner {
          max-width: 920px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: center;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .highlight-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .highlight-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #444;
        }

        /* ── RELATED ── */
        .related-section { padding: 80px 24px; }
        .related-inner { max-width: 920px; margin: 0 auto; }
        .related-header { margin-bottom: 36px; }
        .section-eyebrow {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ccc;
          display: block;
          margin-bottom: 6px;
        }
        .related-title-heading {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 0;
          color: #0a0a0a;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .related-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          border: 1px solid #eee;
          background: #fff;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.23,1,0.32,1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .related-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.1);
          border-color: var(--accent);
        }
        .related-img-wrap {
  position: relative;
  height: 140px;
  background: #f4f2ed;
  overflow: hidden;
}
        .related-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .related-card:hover .related-img { transform: scale(1.04); }
        .related-body { padding: 18px; display: flex; flex-direction: column; gap: 8px; }
        .related-title-row { display: flex; align-items: center; gap: 8px; }
        .related-title { font-size: 1.05rem; font-weight: 700; letter-spacing: -0.02em; }
        .founder-badge {
          font-size: 10px; font-weight: 600;
          padding: 3px 9px; border-radius: 999px;
          background: #f1f0ea; color: #888;
          letter-spacing: 0.04em; text-transform: uppercase;
        }
        .related-desc { font-size: 0.84rem; color: #666; line-height: 1.6; margin: 0; }
        .related-cta {
          font-size: 0.8rem; font-weight: 600;
          color: var(--accent);
          transition: letter-spacing 0.2s;
        }
        .related-card:hover .related-cta { letter-spacing: 0.03em; }

        /* ── FOOTER CTA ── */
        .footer-cta {
          padding: 96px 24px;
          background: #0a0a0a;
          text-align: center;
        }
        .footer-cta-inner {
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .footer-cta-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #444;
          margin: 0;
        }
        .footer-cta-heading {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }
        .footer-btn {
          background: #fff !important;
          color: #111 !important;
          margin-top: 8px;
        }
        .footer-btn:hover { opacity: 0.9 !important; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .proj-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-top: 96px;
          }
          .detail-section { grid-template-columns: 140px 1fr; gap: 20px; }
          .related-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .proj-title { font-size: 2.4rem; }
          .detail-section { grid-template-columns: 1fr; gap: 8px; }
          .detail-num { display: none; }
        }
      `}</style>
    </main>
  );
}

/*
  ── HOW TO WIRE THIS UP IN NEXT.JS ──

  1. Create: app/projects/[slug]/page.tsx

  2. Add this helper to your projects data file:
       export function getProjectBySlug(slug: string) {
         return projects.find(
           (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
         );
       }

  3. In your page file:
       import ProjectPage from "@/components/ProjectPage";
       import { getProjectBySlug } from "@/data/projects";

       export default function Page({ params }: { params: { slug: string } }) {
         const project = getProjectBySlug(params.slug);
         if (!project) notFound();
         return <ProjectPage project={project} />;
       }

  4. In HomePage.tsx, change "Learn more →" buttons to links:
       href={`/projects/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
*/