"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = { screenshots: { src: string; alt: string }[]; title: string };

export default function ProjectGallery({ screenshots, title }: Props) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const shot = screenshots[index];
  useEffect(() => {
    const element = dialog.current;
    const restore = () => { document.body.style.overflow = ""; opener.current?.focus(); };
    element?.addEventListener("close", restore);
    return () => { element?.removeEventListener("close", restore); document.body.style.overflow = ""; };
  }, []);
  if (!shot) return null;
  function move(delta: number) { setIndex(current => (current + delta + screenshots.length) % screenshots.length); }
  return <div className="gallery">
    <button ref={opener} className="project-preview" aria-label={`Open ${title} screenshots`} onClick={() => { dialog.current?.showModal(); document.body.style.overflow = "hidden"; }}>
      <Image src={shot.src} alt={shot.alt} width={1000} height={650} sizes="(max-width: 700px) 100vw, 50vw" />
      <span className="preview-open">View screenshots ↗</span>
    </button>
    <div className="gallery-controls"><span>{String(index + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span><div>{screenshots.map((item, number) => <button key={item.src} aria-label={`Show ${title} screenshot ${number + 1}`} aria-pressed={index === number} onClick={() => setIndex(number)} />)}</div><span>↗</span></div>
    <dialog ref={dialog} className="lightbox" aria-label={`${title} screenshots`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={event => { if (event.key === "ArrowRight") move(1); if (event.key === "ArrowLeft") move(-1); }}>
      <div className="lightbox-inner"><div className="lightbox-heading"><span>{title} · {index + 1} / {screenshots.length}</span><button onClick={() => dialog.current?.close()} aria-label="Close screenshots">Close ×</button></div><Image src={shot.src} alt={shot.alt} width={1800} height={1200} sizes="95vw" onTouchStart={event => { touchX.current = event.changedTouches[0].clientX; }} onTouchEnd={event => { if (touchX.current !== null && Math.abs(touchX.current - event.changedTouches[0].clientX) > 40) move(touchX.current > event.changedTouches[0].clientX ? 1 : -1); touchX.current = null; }} /><div className="lightbox-navigation"><button disabled={screenshots.length < 2} onClick={() => move(-1)}>← Previous</button><p aria-live="polite">{shot.alt}</p><button disabled={screenshots.length < 2} onClick={() => move(1)}>Next →</button></div></div>
    </dialog>
  </div>;
}
