import type { ComparisonRow } from "@/data/game";
import { getSources } from "@/lib/sources";
import { SourceBadge } from "@/components/SourceBadge";
import { StatusBadge } from "@/components/StatusBadge";

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]">
      <div className="overflow-x-auto">
        <table className="min-w-[860px] divide-y divide-white/10 text-left">
          <thead className="bg-white/[0.04] text-sm uppercase tracking-[0.2em] text-stone-400">
            <tr>
              <th className="px-5 py-4">Area</th>
              <th className="px-5 py-4">Original</th>
              <th className="px-5 py-4">What may change in the remake</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Sources</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row) => {
              const rowSources = getSources(row.sourceIds);

              return (
                <tr key={row.area} className="align-top">
                  <td className="px-5 py-5 font-semibold text-white">{row.area}</td>
                  <td className="px-5 py-5 text-stone-300">{row.original}</td>
                  <td className="px-5 py-5 text-stone-300">{row.remake}</td>
                  <td className="px-5 py-5">
                    <StatusBadge status={row.status} />
                    <p className="mt-2 text-xs text-stone-500">Verified {row.lastVerified}</p>
                  </td>
                  <td className="px-5 py-5">
                    <div className="flex min-w-[220px] flex-wrap gap-2">
                      {rowSources.map((source) => (
                        <SourceBadge key={source.id} source={source} />
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
