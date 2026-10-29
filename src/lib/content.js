export const staticContent = {
  hero: {
    eyebrow: "EVERY BOOKING, ONE PLACE",
    qrLabel: "Scan to download",
    qrCaption: "Available on iOS and Android",
    phoneAlt: "Placeholder screenshot of the kireeye mobile app home screen",
    phoneImage: "/images/hero-image.png",
    qrImage: "/images/qr-code.svg",
  },
  trustStats: {
    heading: "Trusted by people who book with confidence",
    items: [
      { value: "4.8/5", label: "App Rating", rating: true },
      { value: "10K+", label: "Downloads" },
      { value: "50K+", label: "Bookings" },
      { value: "100+", label: "Places & events" },
    ],
  },
  demo: {
    label: "See it in action",
    title: "Booking made simple with kireeye",
    subtitle:
      "See how easy it is to find and book stays, venues, and tickets in one place.",
    videoUrl: "https://www.youtube.com/embed/aFHji91unN4",
  },
  cta: {
    title: "Download kireeye and book with certainty",
    subtitle:
      "Hotels, halls, apartments, and tickets — ready when you are. Store links are placeholders until the apps are published.",
  },
  contact: {
    id: "contact",
    eyebrow: "Stay in touch",
    title: "Get launch updates or ask a question",
    subtitle:
      "Leave your email and we will send download links when the stores go live. This form is a waitlist and contact inbox — not a live booking tool.",
    submitLabel: "Join the waitlist",
    success:
      "Thanks — we received your message. Email sending is not wired up yet (see the API TODO).",
    fields: {
      name: "Full name",
      email: "Email",
      message: "Message (optional)",
    },
  },
};

export const fallbackSite = {
  name: "kireeye",
  tagline: "Book hotels, halls, apartments and tickets in one app",
  description:
    "kireeye is a mobile booking app for hotels, event halls, apartments, and tickets. Search, compare, book, and pay in minutes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  audience:
    "Travelers, event planners, and families across Somalia, Somaliland, Kenya, and the diaspora",
  languages: [{ code: "en", name: "English" }],
  emails: {
    info: "hello@kireeye.example",
    support: "support@kireeye.example",
  },
  copyright: { name: "kireeye", year: 2026 },
  links: {
    appStore: "#",
    googlePlay: "#",
    contact: "/contact",
    social: {
      instagram: "#",
      facebook: "#",
      x: "#",
      tiktok: "#",
    },
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
  services: {
    label: "What you can book",
    title: "Everything you want to book, in one place.",
    subtitle:
      "From overnight stays to wedding halls and event tickets, kireeye keeps every reservation in the same place.",
    items: [
      {
        id: 1,
        title: "Hotels",
        description:
          "Compare rooms, amenities, and nightly rates, then lock in a stay that fits your trip.",
        icon: "hotel",
      },
      {
        id: 2,
        title: "Halls",
        description:
          "Find event halls for weddings, meetings, and celebrations with capacity and availability at a glance.",
        icon: "hall",
      },
      {
        id: 3,
        title: "Apartments",
        description:
          "Book furnished apartments for short stays or longer trips — with photos, maps, and clear pricing.",
        icon: "apartment",
      },
      {
        id: 4,
        title: "Tickets",
        description:
          "Grab tickets for events and travel in the same checkout flow you already use for stays.",
        icon: "ticket",
      },
    ],
  },
  howItWorks: {
    label: "How it works",
    title: "Search, compare, book, and pay in minutes",
    subtitle: "A simple flow, from search to confirmed booking.",
    steps: [
      {
        id: 1,
        number: "01",
        title: "Search",
        description: "Enter your city, dates, and what you need.",
        image: "/images/howw-1.jpg",
        imageAlt: "Kireeye mobile search screen",
      },
      {
        id: 2,
        number: "02",
        title: "Compare",
        description:
          "Filter by price, location, and amenities to find the right fit.",
        image: "/images/howw-2.jpg",
        imageAlt: "Kireeye mobile booking comparison screen",
      },
      {
        id: 3,
        number: "03",
        title: "Book",
        description: "Reserve in a few taps and get instant confirmation.",
        image: "/images/howw-3.jpg",
        imageAlt: "Kireeye mobile booking confirmation screen",
      },
      {
        id: 4,
        number: "04",
        title: "Pay",
        description:
          "Pay securely in the app and keep receipts and tickets in one place.",
        image: "/images/howw-4.jpg",
        imageAlt: "Kireeye mobile payment screen",
      },
    ],
  },
  features: {
    title: "Less searching. More experiencing.",
    items: [
      {
        id: 1,
        icon: "simple",
        title: "Easy to use",
        description: "One simple experience for stays, venues and tickets.",
      },
      {
        id: 2,
        icon: "availability",
        title: "Real-time availability",
        description: "See available times before making a booking.",
      },
      {
        id: 3,
        icon: "secure",
        title: "Secure",
        description: "Keep user and booking information protected.",
      },
      {
        id: 4,
        icon: "together",
        title: "Everything in one place",
        description: "Manage stays, venues and tickets from one app.",
      },
      {
        id: 5,
        icon: "fast",
        title: "Fast",
        description:
          "Find and reserve what you need without unnecessary steps.",
      },
    ],
  },
  testimonials: {
    title: "People are booking better.",
    items: [
      {
        id: 1,
        author:
          "I booked a hotel and a wedding hall in the same afternoon. No chasing hosts on chat.",
        quote: "Amina H.",
        role: "Event planner — Mogadishu",
      },
      {
        id: 2,
        author:
          "Finally an app that treats apartments and hotels with the same clear pricing.",
        quote: "Omar K.",
        role: "Traveler — Nairobi",
      },
      {
        id: 3,
        author:
          "Tickets and the stay in one confirmation. That’s all our family needed for the trip.",
        quote: "Leyla M.",
        role: "Family traveler — diaspora",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Answers before you download",
    items: [
      {
        id: 1,
        question: "Which payment methods does kireeye accept?",
        answer:
          "The live app will support major cards and local payment options. This answer is placeholder copy — list the exact methods (cards, mobile money, and any wallets) once checkout is finalized.",
      },
      {
        id: 2,
        question: "How do cancellations and refunds work?",
        answer:
          "Each listing will show its cancellation window before you pay. Refund timing depends on the property or ticket issuer.",
      },
      {
        id: 3,
        question: "Which cities are supported?",
        answer:
          "kireeye is designed for travelers across Somalia, Somaliland, Kenya, and nearby cities, plus diaspora visitors. Update this list with the cities you actually launch in.",
      },
      {
        id: 4,
        question: "How is my account kept secure?",
        answer:
          "Use a strong password and keep your phone’s OS updated. kireeye will use encrypted connections for account and payment data. Add your real security practices (2FA, session alerts) here.",
      },
      {
        id: 5,
        question: "How do I contact support?",
        answer:
          "Reach us at support@kireeye.example or use the contact form on this site. Replace the email and hours with your real support channel before launch.",
      },
      {
        id: 6,
        question: "Can I manage bookings after I pay?",
        answer:
          "Yes. Upcoming stays, halls, and tickets will live in your booking history so you can revisit details, share confirmations, and request help.",
      },
    ],
  },
};
