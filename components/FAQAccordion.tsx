import type { FAQItem } from "@/data/game";
import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const itemSources = getSources(item.sourceIds);

        return (
          <details key={item.question} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
              {item.question}
              <span className="text-red-300 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 leading-7 text-stone-300">{item.answer}</p>
            {itemSources.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {itemSources.map((source) => (
                  <SourceBadge key={source.id} source={source} />
                ))}
              </div>
            ) : null}
          </details>
        );
      })}
    </div>
  );
}
