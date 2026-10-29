import { FadeIn } from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export function Demo({ label, title, subtitle, videoUrl }) {
  return (
    <section id="demo" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
          />
        </FadeIn>
        <FadeIn className="mt-10">
          <div className="aspect-video overflow-hidden rounded-[1.75rem] border border-primary/10 bg-soft-lavender shadow-xl shadow-primary/10">
            <iframe
              src={videoUrl}
              title="Kireeye booking app video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
