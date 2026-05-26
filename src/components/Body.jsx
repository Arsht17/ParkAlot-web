import React, { useEffect, useState } from "react";
import FeaturesSection from "./FeaturesSection";
import ParkingShowcaseSection from "./ParkingShowcaseSection";
import StatsSection from "./StatsSection";
import "../styles/body.css";

export default function Body() {
  const [seen, setSeen] = useState({
    features: false,
    showcase: false,
    stats: false,
  });

  useEffect(() => {
    const sections = [
      { key: "features", selector: "#about" },
      { key: "showcase", selector: "#business" },
      { key: "stats", selector: "#guide" },
    ];

    const reveal = (key) => {
      setSeen((current) =>
        current[key]
          ? current
          : {
              ...current,
              [key]: true,
            },
      );
    };

    const revealVisibleSections = () => {
      sections.forEach(({ key, selector }) => {
        const element = document.querySelector(selector);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          reveal(key);
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      const frameId = requestAnimationFrame(revealVisibleSections);
      window.addEventListener("scroll", revealVisibleSections, {
        passive: true,
      });
      window.addEventListener("resize", revealVisibleSections);

      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("scroll", revealVisibleSections);
        window.removeEventListener("resize", revealVisibleSections);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = sections.find(
            ({ selector }) => document.querySelector(selector) === entry.target,
          );

          if (!section) {
            return;
          }

          reveal(section.key);
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
      },
    );

    sections.forEach(({ selector }) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="body" dir="rtl">
      <FeaturesSection
        isVisible={seen.features}
        onReveal={() => setSeen((s) => ({ ...s, features: true }))}
      />
      <ParkingShowcaseSection
        isVisible={seen.showcase}
        onReveal={() => setSeen((s) => ({ ...s, showcase: true }))}
      />
      <StatsSection
        isVisible={seen.stats}
        onReveal={() => setSeen((s) => ({ ...s, stats: true }))}
      />
    </div>
  );
}
