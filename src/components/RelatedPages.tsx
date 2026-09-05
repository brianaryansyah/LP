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
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siblings.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-[#2c231b]/5 bg-white p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#f5b041]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
          >
            <span>
              <span className="block font-poppins text-sm font-bold text-[#2c231b] transition-colors duration-200 group-hover:text-[#e09132]">
                {s.label}
              </span>
              <span className="mt-0.5 block text-xs text-[#2c231b]/55">{s.desc}</span>
            </span>
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5b041]/15 text-[#e09132] transition-[background-color,color,transform] duration-300 group-hover:bg-[#f5b041] group-hover:text-[#2c231b]"
              aria-hidden="true"
            >
              <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
