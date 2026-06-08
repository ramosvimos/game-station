export type Source = {
  id: string;
  name: string;
  url: string;
  type: "official" | "media" | "database" | "community" | "seo-tool";
  lastChecked: string;
  reliability: "high" | "medium" | "low";
};

export type Fact = {
  label: string;
  value: string;
  status: "confirmed" | "reported" | "rumor" | "unknown";
  sourceIds: string[];
  lastVerified: string;
};

export type UpdateItem = {
  date: string;
  title: string;
  summary: string;
  tag: "Official" | "Media Report" | "Rumor" | "Community" | "Site Update";
  sourceIds: string[];
};

export type Character = {
  name: string;
  role: string;
  description: string;
  spoilerLevel: "none" | "light" | "heavy";
  sourceIds?: string[];
  lastVerified?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  sourceIds?: string[];
};

export type ComparisonRow = {
  area: string;
  original: string;
  remake: string;
  status: "confirmed" | "expected" | "unknown";
  sourceIds: string[];
  lastVerified: string;
};

export const lastUpdated = "2026-06-08";

// Source records are intentionally explicit. Every fact points to one or more sourceIds.
export const sources: Source[] = [
  {
    id: "capcom-official",
    name: "Capcom official Resident Evil Veronica website",
    url: "https://www.residentevil.com/veronica/en-us/",
    type: "official",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "capcom-youtube",
    name: "Resident Evil official YouTube channel",
    url: "https://www.youtube.com/c/residentevil",
    type: "official",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "capcom-x",
    name: "Resident Evil official X account",
    url: "https://x.com/RE_Games",
    type: "official",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "playstation-blog",
    name: "PlayStation Blog",
    url: "https://blog.playstation.com/",
    type: "official",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "xbox-wire",
    name: "Xbox Wire",
    url: "https://news.xbox.com/",
    type: "official",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "steam-store",
    name: "Steam store page",
    url: "https://store.steampowered.com/app/4824610/Resident_Evil_Veronica/",
    type: "database",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "steamdb",
    name: "SteamDB",
    url: "https://steamdb.info/app/4824610/",
    type: "database",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "ign",
    name: "IGN",
    url: "https://www.ign.com/",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "gamespot",
    name: "GameSpot",
    url: "https://www.gamespot.com/",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "gamesradar",
    name: "GamesRadar+",
    url: "https://www.gamesradar.com/games/resident-evil/resident-evil-code-veronica-remake-is-coming-in-2027-capcom-reveals/",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "pc-gamer",
    name: "PC Gamer",
    url: "https://www.pcgamer.com/",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "the-verge",
    name: "The Verge",
    url: "https://www.theverge.com/games",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "google-trends",
    name: "Google Trends",
    url: "https://trends.google.com/trends/",
    type: "seo-tool",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "google-search-console",
    name: "Google Search Console",
    url: "https://search.google.com/search-console/about",
    type: "seo-tool",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "youtube-data-api",
    name: "YouTube Data API",
    url: "https://developers.google.com/youtube/v3",
    type: "seo-tool",
    lastChecked: "2026-06-08",
    reliability: "high"
  },
  {
    id: "gematsu",
    name: "Gematsu",
    url: "https://www.gematsu.com/2026/06/resident-evil-veronica-announced-for-ps5-xbox-series-switch-2-and-pc",
    type: "media",
    lastChecked: "2026-06-08",
    reliability: "medium"
  },
  {
    id: "original-code-veronica-wiki",
    name: "Resident Evil – Code: Veronica reference overview",
    url: "https://en.wikipedia.org/wiki/Resident_Evil_%E2%80%93_Code%3A_Veronica",
    type: "database",
    lastChecked: "2026-06-08",
    reliability: "medium"
  }
];

export const quickFacts: Fact[] = [
  {
    label: "Status",
    value: "Announced / Tracking official updates",
    status: "confirmed",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Release window",
    value: "2027",
    status: "confirmed",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Exact release date",
    value: "No exact release date has been confirmed yet.",
    status: "unknown",
    sourceIds: ["steam-store", "capcom-official"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Platforms",
    value: "PC via Steam, PlayStation 5, Xbox Series X|S, Nintendo Switch 2",
    status: "confirmed",
    sourceIds: ["capcom-official", "steam-store", "gematsu"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Genre",
    value: "Survival horror / action adventure",
    status: "confirmed",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Publisher",
    value: "Capcom",
    status: "confirmed",
    sourceIds: ["steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Developer",
    value: "Capcom",
    status: "confirmed",
    sourceIds: ["steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Original game",
    value: "Resident Evil – Code: Veronica (2000)",
    status: "confirmed",
    sourceIds: ["steam-store", "original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Steam page",
    value: "Steam store page is live; release date is listed as 2027.",
    status: "confirmed",
    sourceIds: ["steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "System requirements",
    value: "Minimum and recommended PC specs are listed as TBD.",
    status: "unknown",
    sourceIds: ["steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Demo",
    value: "No demo has been confirmed on tracked official pages.",
    status: "unknown",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    label: "Price",
    value: "No price has been confirmed on tracked official pages.",
    status: "unknown",
    sourceIds: ["steam-store"],
    lastVerified: "2026-06-08"
  }
];

export const latestUpdates: UpdateItem[] = [
  {
    date: "2026-06-08",
    title: "Veronica Hub source tracker initialized",
    summary:
      "The MVP data model was created with source IDs, last verified dates, reliability labels and clear unknown/confirmed states.",
    tag: "Site Update",
    sourceIds: ["capcom-official", "steam-store", "google-search-console"]
  },
  {
    date: "2026-06-05",
    title: "Resident Evil Veronica announced with a 2027 release window",
    summary:
      "Official and store sources list Resident Evil Veronica as a remake of 2000's Resident Evil Code: Veronica with a 2027 release window.",
    tag: "Official",
    sourceIds: ["capcom-official", "steam-store", "capcom-youtube"]
  },
  {
    date: "2026-06-05",
    title: "Steam store page appears for Resident Evil Veronica",
    summary:
      "The Steam page lists Capcom as developer and publisher, a planned 2027 release date, and TBD PC system requirements.",
    tag: "Official",
    sourceIds: ["steam-store"]
  },
  {
    date: "2026-06-05",
    title: "Media outlets report the reveal and platforms",
    summary:
      "GamesRadar+ and Gematsu reported the Summer Game Fest reveal, the remake positioning, the 2027 window and announced platforms.",
    tag: "Media Report",
    sourceIds: ["gamesradar", "gematsu"]
  }
];

export const officialTrailer = {
  title: "Resident Evil Veronica - Announcement Trailer",
  youtubeId: "uxUMXniTfjM",
  url: "https://www.youtube.com/watch?v=uxUMXniTfjM",
  status: "confirmed" as const,
  sourceIds: ["capcom-youtube", "capcom-official"],
  lastVerified: "2026-06-08"
};

export const storyGuide = {
  spoilerLight:
    "Resident Evil Veronica follows Claire Redfield after the Raccoon City disaster. Claire travels to France while searching for her brother Chris Redfield, is captured by Umbrella forces, and is taken to Rockfort Island, where another biological disaster turns the setting into a survival horror escape.",
  spoilerFull:
    "The original story expands the Redfield siblings' fight against Umbrella through Rockfort Island and later Antarctic facilities, while introducing Steve Burnside, Alfred Ashford, Alexia Ashford and the returning threat of Albert Wesker. The remake is described as preserving the original essence while introducing modernized gameplay, a reimagined storyline and vivid graphics, but Veronica Hub avoids claiming exact scene-by-scene remake changes until official sources confirm them.",
  sourceIds: ["steam-store", "capcom-official", "original-code-veronica-wiki"],
  lastVerified: "2026-06-08"
};

export const characters: Character[] = [
  {
    name: "Claire Redfield",
    role: "Main protagonist / survivor",
    description:
      "Claire returns after surviving Raccoon City and continues searching for her brother, Chris Redfield. She is the clearest beginner-friendly entry point for the remake's story.",
    spoilerLevel: "light",
    sourceIds: ["steam-store", "capcom-official"],
    lastVerified: "2026-06-08"
  },
  {
    name: "Chris Redfield",
    role: "Claire's brother / returning hero",
    description:
      "Chris is the person Claire is trying to find. His role connects Code: Veronica to the broader Resident Evil storyline and the Redfield family thread.",
    spoilerLevel: "light",
    sourceIds: ["steam-store", "original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    name: "Steve Burnside",
    role: "Rockfort Island survivor",
    description:
      "Steve is one of the important characters Claire encounters during the original Code: Veronica story. New players should avoid heavy spoilers about his full arc.",
    spoilerLevel: "light",
    sourceIds: ["original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    name: "Albert Wesker",
    role: "Returning antagonist",
    description:
      "Wesker's presence links Code: Veronica to the wider Umbrella conspiracy and later Resident Evil conflicts. Details of his involvement are best treated as spoiler-heavy.",
    spoilerLevel: "heavy",
    sourceIds: ["original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    name: "Alfred Ashford",
    role: "Ashford family antagonist",
    description:
      "Alfred is tied to Rockfort Island and the Ashford family history. His full role contains major story spoilers for first-time players.",
    spoilerLevel: "heavy",
    sourceIds: ["original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    name: "Alexia Ashford",
    role: "Ashford family figure",
    description:
      "Alexia is central to the Code: Veronica mythology. Beginner guides should introduce her carefully because her full backstory is spoiler-heavy.",
    spoilerLevel: "heavy",
    sourceIds: ["original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  }
];

export const comparisonRows: ComparisonRow[] = [
  {
    area: "Camera",
    original:
      "Classic survival-horror camera presentation associated with the original era.",
    remake:
      "The exact remake camera system has not been fully detailed on tracked official pages.",
    status: "unknown",
    sourceIds: ["capcom-official", "steam-store", "original-code-veronica-wiki"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Controls",
    original: "Original-era controls designed around the 2000 release.",
    remake:
      "Modernized gameplay is confirmed, but exact control layouts are not confirmed.",
    status: "confirmed",
    sourceIds: ["steam-store", "capcom-official"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Combat",
    original: "Classic survival-horror combat pacing and resource pressure.",
    remake:
      "Modernized gameplay is confirmed; exact combat systems and weapon tuning remain to be detailed.",
    status: "expected",
    sourceIds: ["steam-store", "capcom-official"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Saving system",
    original: "Original game save pacing reflected classic Resident Evil design.",
    remake:
      "No official details yet on autosaves, manual saves or difficulty-specific save rules.",
    status: "unknown",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Visuals",
    original: "A 2000-era presentation from the Dreamcast generation.",
    remake:
      "Vividly detailed graphics and RE ENGINE development are confirmed in tracked sources.",
    status: "confirmed",
    sourceIds: ["capcom-official", "steam-store", "gematsu"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Voice acting",
    original: "Original-era voice performances and cutscene direction.",
    remake:
      "New or revised voice acting is likely for a modern remake, but tracked sources do not confirm cast details.",
    status: "unknown",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Cutscenes",
    original: "Original story scenes from Resident Evil – Code: Veronica.",
    remake:
      "A reimagined storyline is confirmed; exact cutscene additions or removals are unknown.",
    status: "confirmed",
    sourceIds: ["steam-store", "capcom-official"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Puzzles",
    original: "Classic Resident Evil puzzle flow and backtracking.",
    remake:
      "Puzzle changes are expected in a remake but have not been confirmed in detail.",
    status: "expected",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  },
  {
    area: "Boss fights",
    original: "Original boss encounters and resource checks.",
    remake:
      "Boss fight redesigns are possible, but individual bosses and mechanics are not officially detailed yet.",
    status: "unknown",
    sourceIds: ["capcom-official", "steam-store"],
    lastVerified: "2026-06-08"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Is Resident Evil Code Veronica Remake official?",
    answer:
      "Yes. The current official title is Resident Evil Veronica, and tracked official/store sources describe it as a remake of Resident Evil Code: Veronica.",
    sourceIds: ["capcom-official", "steam-store"]
  },
  {
    question: "What is the release date?",
    answer:
      "The confirmed release window is 2027. No exact calendar date has been confirmed yet on tracked official/store pages.",
    sourceIds: ["capcom-official", "steam-store"]
  },
  {
    question: "Is it coming to PC?",
    answer:
      "Yes. The tracked platform list includes PC via Steam.",
    sourceIds: ["capcom-official", "steam-store"]
  },
  {
    question: "Is it coming to Steam?",
    answer:
      "Yes. A Steam store page for Resident Evil Veronica is live and lists a planned 2027 release.",
    sourceIds: ["steam-store"]
  },
  {
    question: "Is it a full remake or remaster?",
    answer:
      "Tracked sources call it a remake. The Steam page says the new title preserves the essence of the original while introducing modernized gameplay, a reimagined storyline and vividly detailed graphics.",
    sourceIds: ["steam-store", "capcom-official"]
  },
  {
    question: "Do I need to play the original?",
    answer:
      "No. This hub is written for beginners and explains the basic story context. Playing the original can add historical context, but the remake is expected to be approachable for new players. Exact remake onboarding details are not confirmed yet.",
    sourceIds: ["steam-store", "original-code-veronica-wiki"]
  },
  {
    question: "Is Veronica Hub an official site?",
    answer:
      "No. Veronica Hub is an independent fan-made information site and is not affiliated with or endorsed by Capcom.",
    sourceIds: ["capcom-official"]
  }
];

export const relatedLinks = [
  { label: "Release Date", href: "/release-date" },
  { label: "Platforms", href: "/platforms" },
  { label: "Trailer", href: "/trailer" },
  { label: "Story Guide", href: "/story" },
  { label: "Characters", href: "/characters" },
  { label: "FAQ", href: "/faq" },
  { label: "Sources", href: "/sources" }
];
