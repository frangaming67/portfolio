import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Francisco Basigalup, Information Systems student in Argentina, open to SWE internships. Web, mobile and embedded projects with code, tests and honest status. Don't take my word for it. Run it.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.motto}`,
    template: `%s · ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.motto}`,
    description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Runs before first paint: marks the page as JS-enabled (so scroll-reveal
// elements start hidden without a flash; without JS they stay visible) and
// sets the document language, since one root layout serves /es/ too.
const jsFlag =
  "document.documentElement.classList.add('js');if(/^\\/es(\\/|$)/.test(location.pathname))document.documentElement.lang='es'";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className="min-h-full">
        {children}
        <Reveal />
      </body>
    </html>
  );
}
