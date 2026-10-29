import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeatureIcon } from "@/lib/api/icons";
const cardStyles = [
    "bg-[#111019] text-white lg:col-span-2",
    "bg-mint text-foreground dark:bg-card",
    "bg-butter-cream text-foreground dark:bg-card",
    "bg-sky-blue text-foreground dark:bg-card",
    "bg-apartment-peach text-foreground dark:bg-card",
];
export function Features({ title, items }) {
    return (<section id="features" className="scroll-mt-24 bg-background px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader title={title} />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item, index) => {
            const Icon = getFeatureIcon(item.icon);
            const isDarkCard = index === 0;
            return (<FadeIn key={item.title} delay={index * 0.04} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
                <Card as="article" className={`flex h-full min-h-52 flex-col rounded-[1.6rem] p-7 sm:min-h-56 sm:p-8 ${cardStyles[index]}`}>
                  <Icon className={`h-6 w-6 ${isDarkCard ? "text-white" : "text-foreground"}`} strokeWidth={1.8} aria-hidden="true"/>
                  <div className="mt-auto pt-8">
                    <h3 className="text-2xl leading-tight tracking-tight sm:text-[1.8rem]">
                      {item.title}
                    </h3>
                    <p className={`mt-2 max-w-lg text-base leading-6 ${isDarkCard ? "text-white/80" : "text-foreground/80"}`}>
                      {item.description}
                    </p>
                  </div>
                </Card>
              </FadeIn>);
        })}
        </div>
      </div>
    </section>);
}
