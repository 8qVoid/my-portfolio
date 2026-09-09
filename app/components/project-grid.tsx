"use client";

import { useState } from "react";
import { featuredProjects } from "../data/projects";
import ProjectGallery from "./project-gallery";

const categories = ["All projects", "Web apps", "Mobile apps"] as const;

export default function ProjectGrid() {
  const [category, setCategory] = useState<string>("All projects");
  const visible = featuredProjects.filter(project => category === "All projects" || (category === "Mobile apps") === project.stack.includes("Kotlin"));
  return <>
    <div className="project-toolbar"><div className="filters" aria-label="Filter projects">{categories.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}{item === "All projects" && <span>05</span>}</button>)}</div><span className="project-count" aria-live="polite">{visible.length} projects</span></div>
    <div className="project-grid">{visible.map(project => {
      const index = featuredProjects.indexOf(project);
      return <article className={`project-card project-${index}`} key={project.title}>
        <ProjectGallery screenshots={project.screenshots} title={project.title} />
        <div className="project-info"><div className="project-meta"><span>{project.label}</span><span>{project.year}</span></div><a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-title"><h3>{project.title}</h3><span aria-hidden="true">↗</span></a><p>{project.summary}</p><div className="case-strip"><span>Role: Builder</span><span>{project.stack.includes("Kotlin") ? "Platform: Android" : "Platform: Web"}</span><span>{project.screenshots.length} screens</span></div><div className="tags">{project.stack.slice(0, 4).map(tool => <span key={tool}>{tool}</span>)}</div>
          <details><summary>Open case study <span>+</span></summary><div className="project-details"><h4>Product angle</h4><p>{project.vibe}</p><h4>Core features</h4><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul><h4>Build notes</h4><ul>{project.tools.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul><h4>User journey</h4><ol>{project.flow.map(item => <li key={item}>{item}</li>)}</ol><a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">Explore the source code ↗</a></div></details>
        </div>
      </article>;
    })}</div>
  </>;
}
