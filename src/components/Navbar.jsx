"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
export function Navbar({ site }) {
    const [open, setOpen] = useState(false);
    const downloadHref = site.links.appStore;
    return (<header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo name={site.name} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((link) => (<a key={link.href} href={link.href} className="text-base font-medium text-muted-foreground transition hover:text-foreground">
              {link.label}
            </a>))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={downloadHref} className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Download
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>
      {open ? (<div id="mobile-nav" className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {site.nav.map((link) => (<a key={link.href} href={link.href} className="rounded-xl px-3 py-2 text-base font-medium hover:bg-muted" onClick={() => setOpen(false)}>
                {link.label}
              </a>))}
            <a href={downloadHref} className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground" onClick={() => setOpen(false)}>
              Download
            </a>
          </nav>
        </div>) : null}
    </header>);
}
