import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { StoreButtons } from "@/components/ui/StoreButtons";
export function Hero({ title, subtitle, links, presentation }) {
    return (<section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <FadeIn className="lg:col-span-6">
          <p className="mb-3 text-[12px] font-semibold text-primary uppercase">
            {presentation.eyebrow}
          </p>
          <h1 id="hero-heading" className="display-heading " >
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
          <div id="download" className="mt-6 scroll-mt-24">
            <StoreButtons size="lg" links={links} />
          </div>
          <div className="mt-6 hidden items-center gap-4 lg:flex">
            <Image src={presentation.qrImage} alt={presentation.qrCaption} width={96} height={96} loading="eager" className="rounded-xl border border-border bg-card"/>
            <div>
              <p className="text-sm font-medium">{presentation.qrLabel}</p>
              <p className="text-xs text-muted-foreground">{presentation.qrCaption}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="relative flex justify-center lg:col-span-6 h-100 lg:h-137.5 w-full">
          <Image src={presentation.phoneImage} alt={presentation.phoneAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="object-cover rounded-2xl"/>
        </FadeIn>
      </div>
    </section>);
}
