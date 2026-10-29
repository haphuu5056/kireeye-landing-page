import { FadeIn } from "@/components/ui/FadeIn";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";
export function FAQ({ label, title, items }) {
    return (<section id="faq" className="scroll-mt-24 bg-muted/60 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeader label={label} title={title} />
        </FadeIn>
        <FAQAccordion items={items} />
      </div>
    </section>);
}
