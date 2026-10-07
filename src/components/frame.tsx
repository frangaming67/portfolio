import Image from "next/image";
import type { Lang, Media } from "@/content/types";

/** Presents a screenshot inside a phone, a browser window, or bare. */
export function Frame({
  media,
  lang,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  media: Media;
  lang: Lang;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const img = (
    <Image
      src={media.src}
      alt={media.alt[lang]}
      width={media.width}
      height={media.height}
      priority={priority}
      sizes={sizes}
      className="block h-auto w-full"
    />
  );

  if (media.frame === "phone") {
    return (
      <div
        className={`relative mx-auto w-full max-w-[280px] rounded-[2.6rem] bg-[#0b0b0c] p-[9px] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.45)] ring-1 ring-black/10 dark:ring-white/10 ${className}`}
      >
        <div className="overflow-hidden rounded-[2.1rem]">{img}</div>
      </div>
    );
  }

  if (media.frame === "browser") {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-line bg-bg-elevated shadow-[var(--shadow-card)] ${className}`}
      >
        <div className="flex h-8 items-center gap-1.5 border-b border-line px-3.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {img}
      </div>
    );
  }

  // Portrait renders would dominate a stacked layout; keep them compact.
  const portrait = media.height > media.width ? "mx-auto max-w-[420px]" : "";
  return (
    <div className={`overflow-hidden rounded-2xl border border-line ${portrait} ${className}`}>
      {img}
    </div>
  );
}
