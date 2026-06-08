import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/jsonld";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span className="text-stone-600">/</span> : null}
            {index === items.length - 1 ? (
              <span className="text-stone-300">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
