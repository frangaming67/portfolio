"use client";

import Link from "next/link";
import { useState } from "react";
import type { Category, Lang, Project } from "@/content/types";
import { categoryLabel, projectHref, ui } from "@/content/ui";
import { ArrowUpRight, Lock, Users } from "./icons";
import { StatusBadge } from "./ui";

type Filter = "all" | "team" | Category;

const ORDER: Category[] = ["web", "mobile", "hardware", "accessibility", "game"];

export type ProjectCard = Pick<
  Project,
  "slug" | "name" | "year" | "status" | "categories" | "collaboration" | "repo" | "stack" | "accent" | "tagline"
>;

export function ProjectGrid({ projects, lang }: { projects: ProjectCard[]; lang: Lang }) {
  const t = ui(lang);
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: t.all.filterAll, count: projects.length },
    ...ORDER.map((c) => ({
      id: c as Filter,
      label: categoryLabel[c][lang],
      count: projects.filter((p) => p.categories.includes(c)).length,
    })).filter((f) => f.count > 0),
    {
      id: "team",
      label: t.all.filterCollab,
      count: projects.filter((p) => p.collaboration).length,
    },
  ];

  const visible = projects.filter((p) =>
    filter === "all"
      ? true
      : filter === "team"
        ? Boolean(p.collaboration)
        : p.categories.includes(filter),
  );

  return (
    <div>
      <div
        role="group"
        aria-label={t.all.kicker}
        className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium transition ${
                active
                  ? "bg-fg text-bg"
                  : "border border-line text-fg-muted hover:bg-bg-subtle hover:text-fg"
              }`}
            >
              {f.label}
              <span className={active ? "opacity-60" : "text-fg-faint"}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <Link
              href={projectHref(lang, p.slug)}
              className="group relative flex h-full flex-col rounded-3xl border border-line bg-bg-elevated p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <span
                aria-hidden
                className="mb-5 block h-1 w-10 rounded-full"
                style={{ background: p.accent }}
              />
              <div className="mb-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <ArrowUpRight className="mt-1 shrink-0 text-fg-faint transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-fg-muted">{p.tagline[lang]}</p>
              <p className="mb-5 mt-auto font-mono text-[12px] leading-relaxed text-fg-faint">
                {p.stack.slice(0, 4).join(" · ")}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4">
                <StatusBadge status={p.status} lang={lang} />
                <span className="text-[12px] text-fg-faint">{p.year}</span>
                {p.collaboration && (
                  <span className="inline-flex items-center gap-1 text-[12px] text-fg-faint">
                    <Users width={14} height={14} />
                    {t.all.filterCollab}
                  </span>
                )}
                {p.repo.private && (
                  <span className="inline-flex items-center gap-1 text-[12px] text-fg-faint">
                    <Lock width={13} height={13} />
                    {t.project.privateRepo}
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {visible.length === 0 && <p className="text-fg-muted">{t.all.empty}</p>}
    </div>
  );
}
