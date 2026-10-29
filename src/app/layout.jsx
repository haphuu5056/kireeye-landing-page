import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { cacheLife } from "next/cache";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSiteInfo } from "@/lib/api/site";
import "./globals.css";
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta-sans",
    display: "swap",
    weight: ["600", "700", "800"],
});

export async function generateMetadata() {
  "use cache";
  cacheLife({ stale: 300, revalidate: 300, expire: 3600 });

  const site = await getSiteInfo();
  const title = `${site.name} — ${site.tagline}`;
  return {
    metadataBase: site.url,
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description: site.description,
    applicationName: site.name,
    keywords: [
      "hotel booking app",
      "event hall booking",
      "apartment rental",
      "ticket booking",
      "kireeye",
    ],
    authors: [{ name: site.name }],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site.url,
      siteName: site.name,
      title,
      description: site.description,
      images: [
        {
          url: "/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${site.name} Kireeye app: book hotels, halls, apartments and tickets`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: site.description,
      images: ["/images/og-image.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: site.url,
    },
  };
}
export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f6faf9" },
        { media: "(prefers-color-scheme: dark)", color: "#0b1418" },
    ],
    width: "device-width",
    initialScale: 1,
};
export default function RootLayout({ children }) {
    return (
      <html
        lang="en"
        data-scroll-behavior="smooth"
        className={` ${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="flex min-h-full flex-col font-sans">
          <script
            dangerouslySetInnerHTML={{
              __html:
                "try{var t=localStorage.getItem('kireeye-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
            }}
          />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60 focus:rounded-lg focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    );
}
