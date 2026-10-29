"use client";
import { useEffect, useState } from "react";
import { detectStorePlatform } from "@/lib/platform";
function AppleIcon() {
    return (<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M16.37 12.64c.03-2.16 1.77-3.2 1.85-3.25-1.02-1.49-2.6-1.7-3.16-1.72-1.33-.14-2.61.79-3.29.79-.69 0-1.74-.77-2.86-.75-1.46.02-2.81.86-3.56 2.18-1.53 2.65-.39 6.56 1.09 8.71.73 1.05 1.59 2.23 2.72 2.19 1.1-.05 1.51-.7 2.84-.7 1.32 0 1.69.7 2.86.68 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.29-.88-2.32-3.53zM14.7 6.5c.6-.74 1.01-1.76.9-2.79-.87.04-1.93.59-2.56 1.32-.56.64-1.06 1.68-.93 2.67.99.08 2-.51 2.59-1.2z"/>
    </svg>);
}
function PlayIcon() {
    return (<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M4.2 3.4c-.3.2-.5.6-.5 1.1v14.9c0 .5.2.9.5 1.1l8.2-8.55L4.2 3.4zm9.2 9.7 1.9-1.1-8.4-4.85 6.5 5.95zm2.5-1.45 2.3-1.32c.7-.4.7-1.45 0-1.86l-2.5-1.44-2.05 2.23 2.25 2.39zM13.4 14.1l-6.7 6.15 8.55-4.93-1.85-1.22z"/>
    </svg>);
}
const buttons = [
    {
        id: "ios",
        key: "appStore",
        title: "Download on the App Store",
        subtitle: "App Store",
        icon: AppleIcon,
    },
    {
        id: "android",
        key: "googlePlay",
        title: "Get it on Google Play",
        subtitle: "Google Play",
        icon: PlayIcon,
    },
];
export function StoreButtons({ size = "md", links }) {
    const [platform, setPlatform] = useState("other");
    useEffect(() => {
        setPlatform(detectStorePlatform(window.navigator.userAgent));
    }, []);
    const padding = size === "lg" ? "px-5 py-3.5" : "px-4 py-3";
    return (<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      {buttons.map((button) => {
            const highlighted = platform === button.id;
            const Icon = button.icon;
            return (<a key={button.id} href={links[button.key]} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border ${padding} font-medium transition hover:-translate-y-0.5 hover:shadow-md ${highlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-card text-foreground"}`}>
            <Icon />
            <span className="text-left leading-tight">
              <span className="block text-[11px] opacity-80">{button.title}</span>
              <span className="block text-sm">{button.subtitle}</span>
            </span>
          </a>);
        })}
    </div>);
}
