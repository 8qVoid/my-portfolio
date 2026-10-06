"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress?.style.setProperty("--progress", String(max > 0 ? window.scrollY / max : 0));
      });
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    const trackPointer = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType !== "mouse") return;
      const stage = document.querySelector<HTMLElement>(".hero-art");
      if (!stage) return;
      const bounds = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      stage.style.setProperty("--pointer-x", `${x * 10}px`);
      stage.style.setProperty("--pointer-y", `${y * 10}px`);
    };
    window.addEventListener("pointermove", trackPointer, { passive: true });
    const sections = document.querySelectorAll("main section[id]");
    const navigation = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".site-header nav a").forEach(link => {
          if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-15% 0px -55% 0px" });
    sections.forEach(section => navigation.observe(section));
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    items.forEach((item) => {
      item.setAttribute("data-reveal-ready", "true");
      observer.observe(item);
    });
    return () => {
      observer.disconnect();
      navigation.disconnect();
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", trackPointer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
