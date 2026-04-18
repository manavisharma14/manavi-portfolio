"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          MS<span className="nav-logo-dot">.</span>
        </Link>

        <div className="nav-links">
          <Link href="/#projects" className="nav-link">work</Link>
          <a
            href="https://manaviwrites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            writing
          </a>
          <Link href="/#contact" className="nav-link">contact</Link>
          {/* <a href="/resume.pdf" className="nav-cta">résumé ↗</a> */}
        </div>
      </div>
    </nav>
  );
}