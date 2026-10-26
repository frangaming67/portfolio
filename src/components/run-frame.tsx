"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = { src: string; width: number; height: number; alt: string };

/**
 * The project's first screen, large. "Run it" swaps the screenshot for the
 * live site in an iframe; any link marked `data-run` on the page (the hero's
 * button) does the same.
 */
export function RunFrame({
  shot,
  demo,
  labels,
}: {
  shot: Shot;
  demo: string;
  labels: { run: string; stop: string; title: string };
}) {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("[data-run]");
      if (a) setRunning(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <figure className={`run${running ? " is-running" : ""}`} data-reveal>
      <div className="run__screen plate shutter">
        {running ? (
          <iframe src={demo} title={labels.title} allow="autoplay; fullscreen" />
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes="(min-width: 1024px) 64vw, 100vw"
            priority
          />
        )}
      </div>
      <figcaption className="run__bar">
        <button type="button" className="btn btn--ink" onClick={() => setRunning((r) => !r)} aria-pressed={running}>
          {running ? labels.stop : `▶ ${labels.run}`}
        </button>
      </figcaption>
    </figure>
  );
}
