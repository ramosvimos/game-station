import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Veronica Hub home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-red-400/40 bg-red-950/70 text-lg shadow-horror">
            VH
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-white">{siteConfig.siteName}</span>
            <span className="block text-xs uppercase tracking-[0.25em] text-stone-500">Independent fan hub</span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2 text-sm text-stone-300" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
