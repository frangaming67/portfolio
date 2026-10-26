"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type LedgerRow = {
  slug: string;
  href: string;
  name: string;
  kind: string;
  year: string;
  image?: { src: string; width: number; height: number };
};

/**
 * Every project as one quiet row. Pointing at a row (or tabbing to it) moves
 * its picture beside the list, level with the row; at rest the first project shows. On touch screens the first
 * three rows show their picture above the name instead.
 */
export function Ledger({ rows, title }: { rows: LedgerRow[]; title: string }) {
  const root = useRef<HTMLDivElement>(null);
  const first = rows.find((r) => r.image)?.image;
  const rest = first ? { src: first.src, y: 0 } : null;
  const [preview, setPreview] = useState<{ src: string; y: number } | null>(rest);

  const show = (row: LedgerRow, el: HTMLElement) => {
    if (!row.image || !root.current) return setPreview(rest);
    const box = root.current.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setPreview({ src: row.image.src, y: Math.max(0, r.top - box.top - 40) });
  };

  return (
    <div className="grid12 ledger" ref={root} onPointerLeave={() => setPreview(rest)}>
      <div className="ledger__col">
        <h2 id="work-title" data-reveal>{title}</h2>
        <ul className="ledger__list">
          {rows.map((row, i) => (
            <li key={row.slug} data-reveal style={{ ["--i" as string]: i % 4 }}>
              <Link
                href={row.href}
                className="ledger__row"
                onPointerEnter={(e) => show(row, e.currentTarget)}
                onFocus={(e) => show(row, e.currentTarget)}
                onBlur={() => setPreview(rest)}
              >
                {row.image && i < 3 && (
                  <span className="ledger__thumb" aria-hidden>
                    <Image src={row.image.src} alt="" width={row.image.width} height={row.image.height} sizes="100vw" />
                  </span>
                )}
                <span className="ledger__name">{row.name}</span>
                <span className="ledger__kind">{row.kind}</span>
                <span className="ledger__year">{row.year}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="ledger__aside" aria-hidden />
      <div
        className={`ledger__frame${preview ? " is-open" : ""}`}
        style={{ transform: `translateY(${preview?.y ?? 0}px)` }}
        aria-hidden
      >
        {preview && <Image src={preview.src} alt="" width={800} height={600} sizes="30vw" />}
      </div>
    </div>
  );
}
