import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBadge } from "@/components/ui/IconBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import { getServiceIcon } from "@/lib/api/icons";
export function Services({ label, title, subtitle, items }) {
    return (<section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        </FadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = getServiceIcon(item.icon);
            return (<FadeIn key={item.title} delay={index * 0.05}>
                <Card as="article" className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <IconBadge className="mb-4 rounded-2xl bg-muted text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true"/>
                  </IconBadge>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-base leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </FadeIn>);
        })}
        </div>
      </div>
    </section>);
}
