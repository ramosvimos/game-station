type TocItem = {
  id: string;
  label: string;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">On this page</p>
      <ol className="mt-4 space-y-3 text-sm text-stone-300">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
