import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-bold text-white">{siteConfig.siteName}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400">{siteConfig.disclaimer}</p>
          <p className="mt-4 text-xs text-stone-500">
            We do not provide ROMs, ISOs, emulator downloads, cracks or piracy resources.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Explore</p>
          <div className="mt-4 grid gap-2 text-sm">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-stone-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Trust</p>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/sources" className="text-stone-300 hover:text-white">
              Sources
            </Link>
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-stone-300 hover:text-white">
              Contact placeholder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
