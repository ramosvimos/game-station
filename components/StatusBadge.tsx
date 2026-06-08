import type { Fact, UpdateItem } from "@/data/game";

type BadgeStatus =
  | Fact["status"]
  | UpdateItem["tag"]
  | "expected"
  | "Official"
  | "Media Report"
  | "Rumor"
  | "Community"
  | "Site Update";

const statusStyles: Record<string, string> = {
  confirmed: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  official: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  reported: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  "media report": "border-sky-400/30 bg-sky-400/10 text-sky-200",
  expected: "border-amber-400/30 bg-amber-400/10 text-amber-200",
  rumor: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200",
  community: "border-violet-400/30 bg-violet-400/10 text-violet-200",
  unknown: "border-stone-400/30 bg-stone-400/10 text-stone-200",
  "site update": "border-red-400/30 bg-red-400/10 text-red-200"
};

function toLabel(status: BadgeStatus) {
  const value = String(status);
  if (value === "confirmed") return "Confirmed";
  if (value === "reported") return "Reported";
  if (value === "rumor") return "Rumor";
  if (value === "unknown") return "Unknown";
  if (value === "expected") return "Expected";
  return value;
}

export function StatusBadge({ status }: { status: BadgeStatus }) {
  const key = String(status).toLowerCase();
  const className = statusStyles[key] ?? statusStyles.unknown;

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${className}`}>
      {toLabel(status)}
    </span>
  );
}
