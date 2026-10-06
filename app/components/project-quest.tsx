"use client";

import Image from "next/image";
import { useState } from "react";
import { featuredProjects } from "../data/projects";

const paths = ["All", "Web", "Mobile"] as const;
type ProjectPath = (typeof paths)[number];

function platform(index: number) {
  return featuredProjects[index].stack.includes("Kotlin") ? "Mobile" : "Web";
}

export default function ProjectQuest() {
  const [path, setPath] = useState<ProjectPath>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visited, setVisited] = useState<number[]>([]);
  const matching = featuredProjects
    .map((_, index) => index)
    .filter((index) => path === "All" || platform(index) === path);
  const project = featuredProjects[activeIndex];
  const screenshot = project.screenshots[0];

  function selectProject(index: number) {
    setActiveIndex(index);
    setVisited((previous) =>
      previous.includes(index) ? previous : [...previous, index],
    );
  }

  function selectPath(nextPath: ProjectPath) {
    setPath(nextPath);
    const firstIndex = featuredProjects.findIndex(
      (_, index) => nextPath === "All" || platform(index) === nextPath,
    );
    selectProject(firstIndex);
  }

  function nextProject() {
    const nextIndex = (matching.indexOf(activeIndex) + 1) % matching.length;
    selectProject(matching[nextIndex]);
  }

  return (
    <div className="project-explorer" id="project-explorer">
      <div className="quest-header">
        <div className="quest-heading">
          <p className="eyebrow">CHOOSE YOUR PATH</p>
          <h3>Project explorer</h3>
          <p>Pick a platform. Find a build worth exploring.</p>
        </div>
        <div className="quest-progress">
          <span aria-live="polite" aria-atomic="true">
            {visited.length} of {featuredProjects.length} projects previewed
          </span>
          <progress
            value={visited.length}
            max={featuredProjects.length}
            aria-label="Projects previewed in this visit"
          />
        </div>
      </div>

      <div className="quest-filters" role="group" aria-label="Choose a project platform">
        {paths.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={path === item}
            onClick={() => selectPath(item)}
          >
            {item}
            <span>
              {featuredProjects.filter((_, index) => item === "All" || platform(index) === item).length}
            </span>
          </button>
        ))}
      </div>

      <div className="quest-body">
        <div className="quest-map" role="group" aria-label={`${path} project previews`}>
          {matching.map((index) => (
            <button
              key={featuredProjects[index].title}
              type="button"
              className={`quest-node${activeIndex === index ? " is-active" : ""}${visited.includes(index) ? " is-visited" : ""}`}
              aria-pressed={activeIndex === index}
              aria-controls="quest-preview"
              onClick={() => selectProject(index)}
            >
              <span className="quest-node-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="quest-node-copy">
                <strong>{featuredProjects[index].title}</strong>
                <span>{platform(index) === "Mobile" ? "Android app" : "Web app"}</span>
              </span>
              <span className="quest-node-state" aria-hidden="true">
                {activeIndex === index ? "↗" : visited.includes(index) ? "✓" : "→"}
              </span>
              {visited.includes(index) && <span className="sr-only">Previously previewed</span>}
            </button>
          ))}
        </div>

        <div className="quest-preview" id="quest-preview" role="region" aria-label="Selected project">
          <div className={`quest-preview-image${platform(activeIndex) === "Mobile" ? " is-mobile" : ""}${screenshot ? "" : " is-empty"}`}>
            {screenshot ? <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={720}
              height={440}
              sizes="(max-width: 700px) 85vw, 45vw"
            /> : <div className="quest-empty-preview"><span>{project.status ?? "REPOSITORY BUILD"}</span><strong>{project.title}</strong><small>Open the source details below</small></div>}
          </div>
          <div className="quest-preview-copy">
            <div className="quest-project-meta">
              <span>{project.label}</span>
              <span>{project.year}</span>
            </div>
            <h4 aria-live="polite" aria-atomic="true">{project.title}</h4>
            <p>{project.summary}</p>
            <div className="quest-tags" aria-label="Technologies">
              {project.stack.slice(0, 3).map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="quest-actions">
              <a href="#case-studies" className="text-link">Browse case studies <span aria-hidden="true">↓</span></a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link">
                Source code <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens a new tab)</span>
              </a>
              <button type="button" className="quest-next" onClick={nextProject}>
                Next project <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
