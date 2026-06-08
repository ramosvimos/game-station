import { quickFacts } from "@/data/game";

export function findFact(label: string) {
  const fact = quickFacts.find((item) => item.label.toLowerCase() === label.toLowerCase());

  if (!fact) {
    throw new Error(`Missing fact: ${label}`);
  }

  return fact;
}
