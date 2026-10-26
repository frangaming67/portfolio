import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const description =
  "Francisco Basigalup, Information Systems student in Argentina, open to SWE internships. Websites and apps with live demos, code, tests and honest status. Don't take my word for it. Run it.";

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
    { color: "#05070a" },
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
      className={`${geistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
