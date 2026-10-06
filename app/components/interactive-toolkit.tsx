"use client";

import { useState } from "react";

const disciplines = [
  { number: "01", name: "Frontend", title: "Interfaces with intention.", description: "Responsive interfaces, polished states, and product flows users can scan quickly.", tools: ["Next.js", "React", "TypeScript", "Custom CSS"], code: ["const experience = {", '  interface: "thoughtful",', '  interactions: "purposeful",', '  details: "considered"', "};"], icon: "⌘" },
  { number: "02", name: "Backend", title: "Solid beneath the surface.", description: "Auth, storage, payments, and database-backed behavior behind the screens.", tools: ["Laravel", "PHP", "MySQL", "PayMongo"], code: ["Route::middleware('auth')", "  ->group(function () {", "    // Connect people and products", "    // Keep every state in sync", "  });"], icon: "⏣" },
  { number: "03", name: "Mobile", title: "Good ideas. Anywhere.", description: "Android experiences with local data, camera flows, reminders, and analytics.", tools: ["Kotlin", "Compose", "Room", "CameraX"], code: ["@Composable", "fun EverydayExperience() {", "  CaptureTheMoment()", "  RememberWhatMatters()", "}"], icon: "▣" },
];

export default function InteractiveToolkit() {
  const [active, setActive] = useState(0);
  const discipline = disciplines[active];
  return <div className="stack-lab">
    <div className="stack-selector" aria-label="Explore development disciplines">
      {disciplines.map((item, index) => <button key={item.name} aria-pressed={index === active} onClick={() => setActive(index)}><span>{item.number}</span>{item.name}<b aria-hidden="true">↗</b></button>)}
      <p>Different tools.<br />One connected experience.</p>
    </div>
    <div className="stack-detail" key={discipline.name}>
      <span className="tool-icon" aria-hidden="true">{discipline.icon}</span>
      <h3>{discipline.title}</h3><p>{discipline.description}</p>
      <div className="tags">{discipline.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
    </div>
    <div className="code-window" aria-label={`${discipline.name} illustrative code`}>
      <div className="code-heading"><span>● ● ●</span><span>{discipline.name.toLowerCase()} / sketch</span></div>
      <pre key={discipline.name}>{discipline.code.map((line, index) => <span key={index}><i>{index + 1}</i>{line}{"\n"}</span>)}</pre>
      <div className="code-footer"><span className="status-dot" /> Built with curiosity.</div>
    </div>
  </div>;
}
