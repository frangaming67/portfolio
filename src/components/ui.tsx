import type { ReactNode } from "react";
import type { Lang, ProjectStatus } from "@/content/types";
import { statusLabel } from "@/content/ui";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  id,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <header data-reveal className="mb-12 max-w-3xl sm:mb-16">
      <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
        {kicker}
      </p>
      <h2
        id={id}
        className="text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-fg-muted">{subtitle}</p>}
    </header>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg px-2.5 py-1 text-[12px] font-medium text-fg-muted">
      {children}
    </span>
  );
}

const statusDot: Record<ProjectStatus, string> = {
  "live-demo": "bg-[#28c840]",
  "working-prototype": "bg-[#0a84ff]",
  "in-progress": "bg-[#ff9f0a]",
  "early-stage": "bg-[#a1a1a6]",
};

export function StatusBadge({ status, lang }: { status: ProjectStatus; lang: Lang }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-fg-muted">
      <span aria-hidden className={`size-1.5 rounded-full ${statusDot[status]}`} />
      {statusLabel[status][lang]}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:opacity-85"
      : "border border-line text-fg hover:bg-bg-subtle";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium transition ${styles}`}
    >
      {children}
    </a>
  );
}
