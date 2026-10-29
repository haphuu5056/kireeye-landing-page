import { getSiteInfo } from "@/lib/api/site";

import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SocialProof } from "@/components/SocialProof";
import { TrustStats } from "@/components/TrustStats";
import { staticContent } from "@/lib/content";
export default async function Home() {
  const site = await getSiteInfo();
  return (
    <>
      <Navbar site={site} />
      <main id="main">
        <Hero
          title={site.tagline}
          subtitle={site.description}
          links={site.links}
          presentation={staticContent.hero}
        />
        <TrustStats {...staticContent.trustStats} />
        <Services {...site.services} />
        <HowItWorks {...site.howItWorks} />
        <Features {...site.features} />
        <Demo {...staticContent.demo} />
        <SocialProof {...site.testimonials} />
        <FAQ {...site.faq} />
        <FinalCta
          cta={staticContent.cta}
          contact={staticContent.contact}
          links={site.links}
        />
      </main>
      <Footer site={site} />
    </>
  );
}
