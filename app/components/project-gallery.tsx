"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Screenshot = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  screenshots: Screenshot[];
  priority?: boolean;
};

export default function ProjectGallery({
  screenshots,
  priority = false,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeShot = screenshots[activeIndex];

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? screenshots.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === screenshots.length - 1 ? 0 : current + 1,
    );
  }

  function handleTouchStart(clientX: number) {
    setTouchStartX(clientX);
  }

  function handleTouchEnd(clientX: number) {
    if (touchStartX === null) {
      return;
    }

    const deltaX = touchStartX - clientX;

    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
  }

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === screenshots.length - 1 ? 0 : current + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === 0 ? screenshots.length - 1 : current - 1,
        );
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, screenshots.length]);

  return (
    <>
      <div className="relative flex h-full flex-col gap-4 rounded-[1.15rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
            Project gallery
          </p>
          <p className="mt-2 text-sm text-white/65">
            Swipe, tap a thumbnail, click image to expand, or use the arrows.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
            aria-label="Show previous screenshot"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={showNext}
            className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
            aria-label="Show next screenshot"
          >
            Next
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        className="aspect-[16/10] overflow-hidden rounded-[1.15rem] border border-white/10 bg-black/30 text-left"
        aria-label="Open fullscreen screenshot"
        onTouchStart={(event) => handleTouchStart(event.changedTouches[0].clientX)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
      >
        <Image
          src={activeShot.src}
          alt={activeShot.alt}
          width={1600}
          height={900}
          className="h-full w-full object-contain"
          priority={priority}
        />
      </button>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-2xl border bg-black/30 text-left transition ${
              index === activeIndex
                ? "border-[var(--color-accent-soft)] shadow-[0_0_0_1px_rgba(255,196,141,0.25)]"
                : "border-white/10 hover:border-white/30"
            }`}
            aria-label={`Show screenshot ${index + 1}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={800}
              height={500}
              className="aspect-[16/10] h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
      </div>

      {typeof document !== "undefined" && isLightboxOpen
        ? createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/88 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen project screenshot"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative my-auto flex w-full max-w-6xl flex-col rounded-[1.5rem] border border-white/10 bg-[var(--color-ink)]/96 p-4 shadow-2xl shadow-black/50 sm:p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm text-white/72">
                Screenshot {activeIndex + 1} of {screenshots.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-black/40">
              <Image
                src={activeShot.src}
                alt={activeShot.alt}
                width={1800}
                height={1200}
                className="max-h-[calc(100vh-10rem)] w-full object-contain"
                priority={priority}
              />
            </div>
          </div>
        </div>
          ,
          document.body,
        )
        : null}
    </>
  );
}
