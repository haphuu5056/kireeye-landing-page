import { Star } from "lucide-react";

export function TrustStats({ heading, items }) {
  return (
    <section className="border-b border-border bg-background px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-xs font-medium tracking-wide text-muted-foreground sm:mb-8 sm:text-sm">
          {heading}
        </p>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-7 text-center sm:grid-cols-4 sm:gap-6">
          {items.map((stat) => (
            <div key={stat.label}>
              <dt className="font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </dt>
              {stat.rating ? (
                <div
                  className="mt-1 flex justify-center gap-0.5 text-star-gold"
                  role="img"
                  aria-label="Rated 4.8 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-current"
                    />
                  ))}
                </div>
              ) : null}
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
