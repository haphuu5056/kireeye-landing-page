const toHref = (url) => {
  if (url === "/contact") return url;
  return url?.startsWith("/") ? `#${url.slice(1)}` : url;
};

const featureIconKeys = new Set([
  "simple",
  "availability",
  "secure",
  "together",
  "fast",
]);

export function mapSiteInfo(p) {
  const social = p.app_links?.social_media?.[0] ?? {};
  return {
    name: p.name,
    tagline: p.tagline,
    description: p.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || p.url || "http://localhost:3000",
    audience: p.audience_text,
    languages: (p.languagesg ?? [])
      .filter((l) => l.is_active)
      .map((l) => ({
        code: l.lang_code,
        name: l.lang_code === "so" ? "Somali" : l.lang_name,
      })),
    emails: { info: p.info_email, support: p.support_email },
    copyright: { name: p.copy_right_mame, year: p.copy_right_year },
    links: {
      appStore: p.app_links?.app_store_url,
      googlePlay: p.app_links?.google_play_url,
      contact: p.app_links?.contact_url,
      social: {
        instagram: social.ig_url,
        facebook: social.fb_url,
        x: social.x_url,
        tiktok: social.tt_url,
      },
    },
    nav: (p.nav_links ?? []).map((link) => ({
      label: link.name,
      href: toHref(link.url),
    })),
    services: {
      label: p.web_services?.text,
      title: p.web_services?.title,
      subtitle: p.web_services?.sub_title,
      items: (p.web_services?.service_types ?? []).map((s) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        icon: s.icon,
      })),
    },
    howItWorks: {
      label: p.works?.text,
      title: p.works?.title,
      subtitle: p.works?.sub_title,
      steps: (p.works?.work_steps ?? []).map((s, i) => ({
        id: s.id,
        number: String(i + 1).padStart(2, "0"),
        title: s.title,
        description: s.description,
        image:
          typeof s.image === "string" && s.image.trim() && s.image !== "#"
            ? s.image
            : `/images/howw-${i + 1}.jpg`,
        imageAlt: s.image_alt,
      })),
    },
    features: {
      title: p.features?.title,
      // Some API records put the icon key in title and swap the other fields; detect that variant by known keys.
      items: (p.features?.types ?? []).map((f) => {
        const swapped = featureIconKeys.has(f.title);
        return {
          id: f.id,
          icon: swapped ? f.title : f.icon,
          title: swapped ? f.description : f.title,
          description: swapped ? f.icon : f.description,
        };
      }),
    },
    testimonials: {
      title: p.testimony?.title,
      // The API uses name for the quote, text for the author, and content for role and city.
      items: (p.testimony?.testimonials ?? []).map((t) => ({
        id: t.id,
        quote:
          t.text &&
          t.name?.startsWith(t.text) &&
          !/^\s/.test(t.name.slice(t.text.length))
            ? t.name.slice(t.text.length).trimStart()
            : t.name,
        author: t.text,
        role: t.content,
      })),
    },
    faq: {
      label: p.faq?.text,
      title: p.faq?.title,
      items: (p.faq?.items ?? []).map((q) => ({
        id: q.id,
        question: q.question,
        answer: q.answer,
      })),
    },
  };
}
