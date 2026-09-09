"use client";

import { useCallback, useEffect, useRef } from "react";

const actions = [
  {
    label: "Email Mark",
    meta: "moosec06@gmail.com",
    href: "mailto:moosec06@gmail.com",
  },
  {
    label: "Open GitHub",
    meta: "8qVoid",
    href: "https://github.com/8qVoid",
  },
  {
    label: "View Projects",
    meta: "selected work",
    href: "#projects",
  },
  {
    label: "Toolkit",
    meta: "skills and stack",
    href: "#skills",
  },
];

export default function ContactCommand() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  const show = useCallback(() => {
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const element = dialog.current;
    const restore = () => {
      document.body.style.overflow = "";
      opener.current?.focus();
    };
    element?.addEventListener("close", restore);
    return () => element?.removeEventListener("close", restore);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [show]);

  function close() {
    dialog.current?.close();
  }

  return (
    <>
      <button ref={opener} type="button" className="nav-contact command-trigger" onClick={show}>
        Let&apos;s talk
      </button>
      <dialog
        ref={dialog}
        className="command-dialog"
        aria-label="Contact actions"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="command-panel">
          <div className="command-top">
            <div>
              <p className="eyebrow">QUICK ACTIONS</p>
              <h2>Start somewhere good.</h2>
            </div>
            <button type="button" onClick={close} aria-label="Close contact menu">
              ×
            </button>
          </div>
          <div className="command-list">
            {actions.map((action, index) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={close}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{action.label}</strong>
                <em>{action.meta}</em>
              </a>
            ))}
          </div>
          <p className="command-hint">Choose an option to keep moving.</p>
        </div>
      </dialog>
    </>
  );
}
