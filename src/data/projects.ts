export type Cred = {
  label: string;
  type?: "award" | "funding" | "program" | "product";
};

export type Project = {
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

export const projects: Project[] = [
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
    tag: "ai",
    accent: "#6366f1",
    badge: "Co-founder",
    tech: ["Python", "OpenCV", "TensorFlow"],
    highlights: ["NSF i-Corps", "Chicago Booth (I2M)", "Microsoft Pitch"],
    status: "beta",
    image: "/projects/beyondcolor.png",
    link: "https://beyondcolor.app",
    description:
      "AI-powered accessibility platform rethinking how color vision is diagnosed and supported through real-world perception, not just static tests.",
    featured: true,
    cred: [
      { label: "NSF i-Corps", type: "program" },
      { label: "Chicago Booth", type: "program" },
      { label: "Microsoft", type: "award" },
    ],
    details: {
      problem:
        "Millions live with color vision deficiency, yet current tools rely on static tests that fail to reflect real-world color perception or functional ability.",
      solution:
        "Built an AI-driven platform combining computer vision and perceptual modeling to assess color vision dynamically and generate personalized correction and accessibility insights.",
      outcome:
        "Selected for NSF i-Corps and Chicago Booth's Innovate2Market program. Conducted a clinical study validating approach and presented at Microsoft Chicago through Butter x The AI Collective.",
      role:
        "Co-founder — led ML and computer vision development, and contributed across full-stack engineering and clinical validation.",
    },
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
    details: {
      problem:
        "Discord is noisy, Reddit is anonymous — there was no middle ground for tight-knit communities to have structured, real-time discussions.",
      solution:
        "Built a graph-based social platform with Firebase real-time sync, threaded discussions, and community-specific spaces. Auth ties identity to your real social graph.",
      outcome:
        "Live on Vercel with active test community. Social graph feature drives 3× more replies vs. flat feed.",
      role:
        "Lead engineer — architecture, Firebase integration, social graph logic, UI.",
    },
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
    details: {
      problem:
        "Facebook Marketplace is unsafe for campus trades — no identity verification means scams are rampant and trust is near zero.",
      solution:
        "Built a .edu email-gated marketplace with JWT-based identity, moderated listings, and an escrow-style handoff flow. MongoDB powers fast search across categories.",
      outcome:
        "Live with 150+ listings in the first month. Zero reported scam incidents. Expanding to two more campuses.",
      role:
        "Solo founder — backend, auth system, moderation tools, full deployment.",
    },
  },
  {
    title: "InnerSpace",
    tag: "ai",
    accent: "#a78bfa",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "LLMs"],
    highlights: ["AI Reflections", "Mood Tracking", "Clean UX"],
    status: "beta",
    image: "/projects/innerspace.png",
    link: "https://innerspace.app",
    description:
      "AI-powered journaling and reflection system designed to help users think clearly, track emotions, and build self-awareness.",
    details: {
      problem:
        "Most journaling tools are passive — they store thoughts but don't help users process, reflect, or gain insights from them.",
      solution:
        "Built an AI-powered reflection system that guides users through structured prompts, analyzes sentiment and patterns, and provides weekly insights without overwhelming the experience.",
      outcome:
        "Created a calm, minimal product with strong early engagement. Users consistently return for weekly reflections and habit tracking.",
      role:
        "Full-stack builder — designed UX, built frontend in Next.js, backend with FastAPI, and integrated LLM-based reflection workflows.",
    },
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
    details: {
      problem:
        "Existing habit apps are bloated with gamification and social features that distract from the core loop: did you do the thing today?",
      solution:
        "Stripped everything back to a single daily check-in grid per habit. Built with Next.js and PostgreSQL, with a clean weekly heatmap and streak counter as the only metrics that matter.",
      outcome:
        "Personal daily driver. Maintains a 90%+ completion rate for tracked habits. Planning a public launch.",
      role:
        "Solo — product design, frontend, backend, database schema.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);