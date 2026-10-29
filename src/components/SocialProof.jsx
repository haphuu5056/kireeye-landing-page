import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBadge } from "@/components/ui/IconBadge";
import SectionHeader from "@/components/ui/SectionHeader";
const avatarColors = ["bg-apartment-peach", "bg-sky-blue", "bg-mint"];
export function SocialProof({ title, items }) {
  console.log(items);

    return (<section id="social-proof" className="scroll-mt-24 bg-background px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader title={title} />
        </FadeIn>

        <div className="mt-12 grid items-center gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((review, index) => (<FadeIn key={review.id} delay={index * 0.08} className={index === 1 ? "lg:-translate-y-6" : "lg:translate-y-2"}>
              <Card as="article" className="flex h-full min-h-72 flex-col rounded-[1.75rem] bg-card p-6 shadow-[0_18px_50px_-32px_rgba(53,21,77,0.28)] sm:p-9">
                <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, starIndex) => (<Star key={starIndex} aria-hidden="true" className="h-4.5 w-4.5 fill-star-gold text-star-gold"/>))}
                </div>

                <blockquote className="mt-6 flex-1 text-xl leading-normal font-medium text-pretty text-foreground sm:text-xl">
                  “{review.author}”
                </blockquote>

                <div className="mt-7 flex items-center gap-3">
                  <IconBadge as="span" aria-hidden="true" className={`shrink-0 rounded-full text-base font-medium text-foreground dark:bg-muted ${avatarColors[index % avatarColors.length]}`}>
                    {review.quote.charAt(0)}
                  </IconBadge>
                  <div>
                    <p className="font-medium text-foreground">{review.quote}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>))}
        </div>

      </div>
    </section>);
}
