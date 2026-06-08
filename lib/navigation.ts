export const navItems = [
  { label: "Home", href: "/" },
  { label: "Release Date", href: "/release-date" },
  { label: "Platforms", href: "/platforms" },
  { label: "Trailer", href: "/trailer" },
  { label: "Story", href: "/story" },
  { label: "Characters", href: "/characters" },
  { label: "FAQ", href: "/faq" },
  { label: "Sources", href: "/sources" }
] as const;

export const recommendedPages = [
  { label: "Release Date", href: "/release-date", description: "Track the 2027 window and exact-date status." },
  { label: "Platforms", href: "/platforms", description: "PC, PlayStation, Xbox and Switch 2 tracking." },
  { label: "Trailer", href: "/trailer", description: "Official trailer embed and placeholder logic." },
  { label: "Story", href: "/story", description: "Spoiler-light beginner story guide." },
  { label: "Remake vs Original", href: "/remake-vs-original", description: "Confirmed, expected and unknown changes." },
  { label: "Sources", href: "/sources", description: "All references and verification dates." }
] as const;
