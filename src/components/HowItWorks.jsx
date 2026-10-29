import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import SectionHeader from "@/components/ui/SectionHeader";

export function HowItWorks({ label, title, subtitle, steps }) {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-muted/60 px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        </FadeIn>

        <ol className="relative mt-14 space-y-14 lg:space-y-20">
          <span
            aria-hidden="true"
            className="absolute top-24 bottom-24 left-6 hidden border-l-2 border-dotted border-primary/40 lg:left-1/2 lg:block"
          />
          {steps.map((step, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <li key={step.number} className="relative">
                <FadeIn delay={index * 0.1}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
                    <div
                      className={`flex justify-center ${
                        imageFirst ? "lg:order-2" : ""
                      }`}
                    >
                      <ImagePlaceholder
                        className="relative mx-auto w-full max-w-64 rounded-[2.5rem] border-2 border-primary bg-white p-2 shadow-xl shadow-primary/10"
                        mediaClassName="relative aspect-9/16 overflow-hidden rounded-4xl bg-soft-lavender"
                      >
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          loading="eager"
                          fill
                          sizes="(max-width: 1024px) 70vw, 256px"
                          className="object-cover"
                        />
                      </ImagePlaceholder>
                    </div>
                    <div
                      className={`relative ${
                        imageFirst
                          ? "lg:order-1 lg:pr-14 lg:text-right"
                          : "lg:pl-14"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-primary lg:block ${
                          imageFirst ? "-right-[2.5rem]" : "-left-[2.5rem]"
                        }`}
                      />
                      <p className="text-sm font-semibold tracking-wide text-primary">
                        {step.number}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground lg:ml-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
