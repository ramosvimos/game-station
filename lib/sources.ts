import { sources, type Source } from "@/data/game";

const sourceMap = new Map(sources.map((source) => [source.id, source]));

export function getSourceById(id: string): Source | undefined {
  return sourceMap.get(id);
}

export function getSources(sourceIds: string[] = []): Source[] {
  return sourceIds
    .map((id) => sourceMap.get(id))
    .filter((source): source is Source => Boolean(source));
}

export function reliabilityScore(reliability: Source["reliability"]) {
  if (reliability === "high") return 90;
  if (reliability === "medium") return 70;
  return 45;
}

export function sourceTypeLabel(type: Source["type"]) {
  const labels: Record<Source["type"], string> = {
    official: "Official",
    media: "Media",
    database: "Database",
    community: "Community",
    "seo-tool": "SEO Tool"
  };

  return labels[type];
}
