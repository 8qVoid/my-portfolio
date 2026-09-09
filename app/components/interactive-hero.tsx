"use client";

import Image from "next/image";
import { useState } from "react";

const scenes = [
  {
    title: "Skill Swap",
    type: "Web app",
    src: "/projects/skill-swap/home.png",
    alt: "Skill Swap website preview",
    note: "Match, message, schedule, review.",
  },
  {
    title: "Exist",
    type: "Android app",
    src: "/projects/exist/Dashboard.png",
    alt: "Exist Android journal dashboard",
    note: "Capture daily proof and emotion.",
  },
  {
    title: "SyncUp",
    type: "Product flow",
    src: "/projects/accountability-partner-finder/discovery_page_png_1775963519968.png",
    alt: "SyncUp discovery page",
    note: "Find accountability partners faster.",
  },
];

export default function InteractiveHero() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <div className="hero-art" aria-label="Interactive project preview">
      <div className="hero-stage-grid" aria-hidden="true" />
      <div className="hero-signal">
        <span />
        <p>LIVE PREVIEW</p>
      </div>
      <div className="browser-mock">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <p>{scene.title.toLowerCase()} / {scene.type.toLowerCase()}</p>
          <b>↗</b>
        </div>
        <Image
          key={scene.src}
          src={scene.src}
          alt={scene.alt}
          width={1000}
          height={650}
          sizes="(max-width: 700px) 90vw, 46vw"
          priority
        />
      </div>
      <div className="hero-console">
        <div>
          <span className="console-kicker">NOW VIEWING</span>
          <strong>{scene.title}</strong>
          <p>{scene.note}</p>
        </div>
        <div className="hero-tabs" role="tablist" aria-label="Choose hero project preview">
          {scenes.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
            >
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
      <div className="phone-mock">
        <Image
          src="/projects/exist/Dashboard.png"
          alt="Exist Android journal dashboard"
          width={300}
          height={650}
          sizes="150px"
          priority
        />
      </div>
      <div className="floating-label">
        <div>
          Designed to feel alive.
          <br />
          <strong>Built to stay usable.</strong>
        </div>
      </div>
      <span className="art-bottom">
        WEB + MOBILE <span>INTERACTIVE</span>
      </span>
    </div>
  );
}
