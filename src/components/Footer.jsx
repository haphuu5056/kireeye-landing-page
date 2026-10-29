export function Footer({ site }) {
  return (
    <footer className="border-t border-border bg-soft-lavender/40 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-sm shadow-primary/20"
          >
            k
          </span>
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
              {site.name}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {site.tagline}
            </p>
          </div>
        </div>
        <div className="border-t border-border/70 pt-5 text-xs text-muted-foreground sm:border-0 sm:pt-0 sm:text-right">
          <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
            <a href={`mailto:${site.emails.info}`} className="transition hover:text-foreground">
              {site.emails.info}
            </a>
            <a href={`mailto:${site.emails.support}`} className="transition hover:text-foreground">
              {site.emails.support}
            </a>
            <a href={site.links.contact} className="transition hover:text-foreground">
              Contact
            </a>
          </div>
          © {site.copyright.year} {site.copyright.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}