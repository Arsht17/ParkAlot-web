import React from "react";
import "../styles/navbar.css";
import vector from "../assets/icons/Vector.svg";

const links = [
  { label: "אודות", href: "#about" },
  { label: "הורדה", href: "#download" },
  { label: "לעסקים", href: "#business" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const handleNavClick = (event, href) => {
    if (!href || !href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();

    const nav = document.querySelector(".website__nav");
    const start = window.scrollY;
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    const offset = navHeight + 24;
    const end = target.getBoundingClientRect().top + start - offset;
    const duration = 300;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    let startTime;

    const step = (now) => {
      if (startTime === undefined) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, start + (end - start) * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="navbar" dir="rtl">
      <div className="navbar__brand">
        <div className="navbar__logo">
          <img src={vector} alt="PARKO logo" className="navbar__logo-img" />
        </div>
        <span className="navbar__title">PARKO</span>
      </div>

      <nav className="navbar__links" aria-label="ראשי" dir="rtl">
        {links.map((link) => (
          <a
            key={link.label}
            className="navbar__link"
            href={link.href}
            onClick={(event) => handleNavClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
