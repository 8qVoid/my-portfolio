"use client";

export default function ContactCta() {
  return (
    <button
      className="contact-title"
      type="button"
      onClick={() => document.querySelector<HTMLButtonElement>(".command-trigger")?.click()}
    >
      Let&apos;s build
      <br />
      something good.
      <span>↗</span>
    </button>
  );
}
