import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { StoreButtons } from "@/components/ui/StoreButtons";
export function FinalCta({ cta, contact, links }) {
    return (<section className="px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-4xl px-6 py-10 text-white lg:grid-cols-2 lg:px-12" style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)" }}>
        <FadeIn>
          <SectionHeader
            title={cta.title}
            subtitle={cta.subtitle}
            className="mx-0! text-left! [&_h2]:text-white! [&_p]:mx-0! [&_p]:text-white/90!"
          />
          <div className="mt-6 [&_a]:border-white/20 [&_a]:bg-white/10 [&_a]:text-white">
            <StoreButtons links={links} />
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="rounded-3xl bg-white p-6 text-foreground dark:bg-card">
          <div id={contact.id} className="scroll-mt-24">
            <p className="text-sm font-medium tracking-wide text-primary">
              {contact.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl">{contact.title}</h3>
            <p className="mt-2 mb-6 text-base text-muted-foreground">{contact.subtitle}</p>
            <ContactForm content={contact} />
          </div>
        </FadeIn>
      </div>
    </section>);
}
