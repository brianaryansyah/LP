"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_ENTRIES } from "@/data/navbar";

export default function RelatedPages() {
  const pathname = usePathname();
  const entry = NAVBAR_ENTRIES.find((e) =>
    e.children?.some((child) => child.href === pathname)
  );
  const siblings = (entry?.children ?? []).filter(
    (child) => !child.external && child.href !== pathname
  );
  if (!entry || siblings.length === 0) return null;

  return (
    <section aria-label="Halaman terkait" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="flex items-center gap-3">
        <h2 className="font-poppins text-lg font-extrabold text-[#2c231b] sm:text-xl">
          Jelajahi juga
        </h2>
        <span className="h-px flex-1 bg-[#2c231b]/10" aria-hidden="true"></span>
      </div>
      <div className="mt-5 border-t border-[#2c231b]/10 divide-y divide-[#2c231b]/10">
        {siblings.map((s) => (
          <Link key={s.href} href={s.href} className="group flex items-center justify-between gap-3 py-4 hover:bg-[#fdf8f5]/50 transition-colors">
            <span>
              <span className="block font-poppins text-sm font-bold text-[#2c231b] group-hover:text-[#2c231b]">{s.label}</span>
              <span className="mt-0.5 block text-xs text-[#2c231b]/55">{s.desc}</span>
            </span>
            <i className="fas fa-arrow-right text-xs text-[#2c231b]/30 group-hover:text-[#2c231b] transition-colors" aria-hidden="true"></i>
          </Link>
        ))}
      </div>
    </section>
  );
}
