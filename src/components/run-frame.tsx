"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = { src: string; width: number; height: number; alt: string; name: string; fact: string };

/**
 * The project's screenshots as a run of frames, the first one lifted. "Run it"
 * swaps the lifted screenshot for the live site in an iframe; any link marked
 * `data-run` on the page (the hero's button) does the same.
 */
export function RunFrame({
  frames,
  demo,
  labels,
}: {
  frames: Shot[];
  demo: string;
  labels: { run: string; stop: string; title: string };
}) {
  const [running, setRunning] = useState(false);
  const [lifted, ...rest] = frames;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("[data-run]");
      if (a) setRunning(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="show__run">
      <figure className={`frame frame--lifted${running ? " is-running" : ""}`} data-reveal>
        <div className="frame__pic shutter">
          {running ? (
            <iframe src={demo} title={labels.title} loading="lazy" allow="autoplay; fullscreen" />
          ) : (
            <Image
              src={lifted.src}
              alt={lifted.alt}
              width={lifted.width}
              height={lifted.height}
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="drift"
            />
          )}
        </div>
        <figcaption>
          <span>
            <button type="button" className="btn btn--ink" onClick={() => setRunning((r) => !r)} aria-pressed={running}>
              {running ? labels.stop : labels.run}
            </button>
          </span>
          <span>{lifted.fact}</span>
        </figcaption>
      </figure>
      {rest.map((f) => (
        <figure key={f.src} className="frame" data-reveal>
          <div className="frame__pic">
            <Image src={f.src} alt={f.alt} width={f.width} height={f.height} sizes="40vw" />
          </div>
          <figcaption>
            <span>{f.name}</span>
            <span>{f.fact}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
