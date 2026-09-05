"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR_ENTRIES, NAVBAR_SECTION_IDS, ORDER_LINK, type NavbarEntry } from "@/data/navbar";

function BrandMark() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Mie Ayam Semangkok, ke beranda">
      <span className="relative block h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white p-0.5 shadow-md transition-[border-color,transform] duration-300 hover:rotate-3 hover:border-[#4ADE80] sm:h-12 sm:w-12">
        <Image
          src="/img/logo-semangkok.svg"
          alt="Logo Mie Ayam dan Bakso Semangkok"
          width={48}
          height={48}
          sizes="48px"
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="block">
        <span className="block font-poppins text-xl font-extrabold tracking-tight text-[#1C2421] sm:text-2xl">
          Mie Ayam Semangkok
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-widest text-[#1C2421]/60 sm:block sm:text-xs">
          Mie Ayam & Bakso • Sejak 1990
        </span>
      </span>
    </Link>
  );
}

function DesktopDropdown({
  entry,
  isActive,
  openMenu,
  onToggle,
  onClose,
}: {
  entry: NavbarEntry;
  isActive: boolean;
  openMenu: string | null;
  onToggle: (label: string) => void;
  onClose: () => void;
}) {
  const isOpen = openMenu === entry.label;
  const panelId = `nav-panel-${entry.label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="relative" onMouseEnter={() => onToggle(entry.label)} onMouseLeave={onClose}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onToggle(entry.label))}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] ${
          isActive || isOpen ? "bg-[#1C2421] text-[#4ADE80]" : "text-[#1C2421] hover:text-[#15803d]"
        }`}
      >
        {entry.label}
        <i
          className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        ></i>
      </button>
      {isOpen && entry.children && (
        <div id={panelId} role="menu" className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-white/10 bg-[#1C2421] p-2 shadow-2xl">
            {entry.children.map((child) => (
              <a
                key={child.label}
                role="menuitem"
                href={child.href}
                {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={onClose}
                className="group block rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4ADE80]"
              >
                <span className="block text-sm font-bold text-[#FCF8F2] transition-colors duration-200 group-hover:text-[#4ADE80]">
                  {child.label}
                </span>
                <span className="mt-0.5 block text-xs text-[#FCF8F2]/55">{child.desc}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({
  entry,
  expanded,
  onToggle,
  onNavigate,
}: {
  entry: NavbarEntry;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = `mobile-panel-${entry.label.replace(/\s+/g, "-").toLowerCase()}`;

  if (!entry.children) {
    return (
      <Link
        href={entry.href}
        onClick={onNavigate}
        className="block rounded-xl px-4 py-3 text-base font-bold text-[#1C2421] transition-colors duration-200 hover:bg-[#1C2421]/5"
      >
        {entry.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold text-[#1C2421] transition-colors duration-200 hover:bg-[#1C2421]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803d]"
      >
        {entry.label}
        <i
          className={`fas fa-chevron-down text-xs text-[#1C2421]/50 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        ></i>
      </button>
      {expanded && (
        <div id={panelId} className="ml-2 space-y-1 rounded-2xl bg-[#1C2421] p-2">
          <a
            href={entry.href}
            onClick={onNavigate}
            className="block rounded-2xl px-3 py-2 text-sm font-bold text-[#4ADE80] transition-colors duration-200 hover:bg-white/5"
          >
            Semua {entry.label}
          </a>
          {entry.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={onNavigate}
              className="group block rounded-2xl px-3 py-2 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
            >
              <span className="block text-sm font-bold text-[#FCF8F2] transition-colors duration-200 group-hover:text-[#4ADE80]">
                {child.label}
              </span>
              <span className="block text-xs text-[#FCF8F2]/55">{child.desc}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const id of NAVBAR_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen && openMenu === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenMenu(null);
      }
    };
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, openMenu]);

  const closeAll = () => {
    setIsOpen(false);
    setOpenMenu(null);
    setExpandedMobile(null);
  };

  const plainLinkClass = (sectionId: string) =>
    `rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] ${
      activeSection === sectionId
        ? "bg-[#1C2421] text-[#4ADE80]"
        : "text-[#1C2421] hover:text-[#15803d]"
    }`;

  return (
    <header
      ref={navRef}
      className={`animate__animated animate__fadeInDown fixed z-50 w-full transition-[background-color,box-shadow,padding] duration-300 will-change-transform ${
        scrolled
          ? "border-b border-[#1C2421]/5 bg-[#FCF8F2]/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 rounded-full border border-[#1C2421]/5 bg-[#FCF8F2]/80 px-4 py-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] backdrop-blur-sm lg:flex"
          >
            {NAVBAR_ENTRIES.map((entry) =>
              entry.children ? (
                <DesktopDropdown
                  key={entry.label}
                  entry={entry}
                  isActive={activeSection === entry.sectionId}
                  openMenu={openMenu}
                  onToggle={(label) => setOpenMenu((prev) => (prev === label ? prev : label))}
                  onClose={() => setOpenMenu(null)}
                />
              ) : (
                <Link key={entry.label} href={entry.href} className={plainLinkClass(entry.sectionId)}>
                  {entry.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-bold text-white shadow-lg transition-[transform,background-color,color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#4ADE80] hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCF8F2]"
            >
              <i className="fab fa-whatsapp text-base" aria-hidden="true"></i>
              Pesan Sekarang
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="navbar-mobile-menu"
              className="rounded-lg bg-[#FCF8F2]/80 p-2 text-[#1C2421] shadow-sm backdrop-blur-sm transition-colors duration-200 hover:text-[#15803d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="navbar-mobile-menu"
          className="animate__animated animate__fadeInDown absolute left-0 top-full max-h-[75vh] w-full origin-top overflow-y-auto border-t border-[#1C2421]/5 bg-[#FCF8F2]/95 shadow-xl backdrop-blur-xl [overscroll-behavior:contain] lg:hidden"
        >
          <nav aria-label="Navigasi seluler" className="space-y-1 px-4 pb-6 pt-4">
            {NAVBAR_ENTRIES.map((entry) => (
              <MobileAccordion
                key={entry.label}
                entry={entry}
                expanded={expandedMobile === entry.label}
                onToggle={() => setExpandedMobile((prev) => (prev === entry.label ? null : entry.label))}
                onNavigate={closeAll}
              />
            ))}
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-3 text-center text-base font-bold text-white shadow-md transition-colors duration-200 hover:bg-[#4ADE80] hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
