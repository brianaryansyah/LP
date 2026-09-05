"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NAVBAR_ENTRIES, NAVBAR_SECTION_IDS, ORDER_LINK, type NavbarEntry } from "@/data/navbar";

function BrandMark() {
  return (
    <a
      href="#home"
      className="flex shrink-0 items-center gap-3"
      aria-label="Semangkok, kembali ke beranda"
    >
      <span className="relative block h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white p-0.5 shadow-md transition-[border-color,transform] duration-300 hover:rotate-3 hover:border-[#f5b041] sm:h-12 sm:w-12">
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
        <span className="block font-poppins text-xl font-extrabold tracking-tight text-[#2c231b] sm:text-2xl">
          Semangkok
        </span>
        <span className="hidden text-[10px] font-medium uppercase tracking-widest text-[#2c231b]/60 sm:block sm:text-xs">
          Mie Ayam & Bakso • Sejak 1990
        </span>
      </span>
    </a>
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
    <div
      className="relative"
      onMouseEnter={() => onToggle(entry.label)}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onToggle(entry.label))}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] ${
          isActive || isOpen
            ? "bg-[#f5b041]/15 text-[#e09132]"
            : "text-[#2c231b] hover:text-[#f5b041]"
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
        <div
          id={panelId}
          role="menu"
          className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
        >
          <div className="overflow-hidden rounded-2xl border border-[#2c231b]/5 bg-white p-2 shadow-2xl">
            {entry.children.map((child) => (
              <a
                key={child.label}
                role="menuitem"
                href={child.href}
                {...(child.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={onClose}
                className="block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-[#f5b041]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#f5b041]"
              >
                <span className="block text-sm font-bold text-[#2c231b]">{child.label}</span>
                <span className="mt-0.5 block text-xs text-[#2c231b]/55">{child.desc}</span>
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
      <a
        href={entry.href}
        onClick={onNavigate}
        className="block rounded-xl px-4 py-3 text-base font-bold text-[#2c231b] transition-colors duration-200 hover:bg-[#f5b041]/10"
      >
        {entry.label}
      </a>
    );
  }

  return (
    <div className="rounded-xl">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold text-[#2c231b] transition-colors duration-200 hover:bg-[#f5b041]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
      >
        {entry.label}
        <i
          className={`fas fa-chevron-down text-xs text-[#2c231b]/50 transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        ></i>
      </button>
      {expanded && (
        <div id={panelId} className="ml-2 space-y-1 border-l-2 border-[#f5b041]/30 pb-2 pl-3">
          <a
            href={entry.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2 text-sm font-bold text-[#e09132] transition-colors duration-200 hover:bg-[#f5b041]/10"
          >
            Semua {entry.label}
          </a>
          {entry.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-[#f5b041]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
            >
              <span className="block text-sm font-bold text-[#2c231b]">{child.label}</span>
              <span className="block text-xs text-[#2c231b]/55">{child.desc}</span>
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
    `rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] ${
      activeSection === sectionId
        ? "bg-[#f5b041]/15 text-[#e09132]"
        : "text-[#2c231b] hover:text-[#f5b041]"
    }`;

  return (
    <header
      ref={navRef}
      className={`animate__animated animate__fadeInDown fixed z-50 w-full transition-[background-color,box-shadow,padding] duration-300 will-change-transform ${
        scrolled
          ? "border-b border-[#2c231b]/5 bg-[#fdf8f5]/85 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <BrandMark />

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 rounded-full border border-[#2c231b]/5 bg-white/60 px-4 py-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] backdrop-blur-sm lg:flex"
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
                <a key={entry.label} href={entry.href} className={plainLinkClass(entry.sectionId)}>
                  {entry.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#2c231b] px-6 py-3 text-sm font-bold text-white shadow-lg transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#f5b041] hover:text-[#2c231b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041] focus-visible:ring-offset-2"
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
              className="rounded-lg bg-white/60 p-2 text-[#2c231b] shadow-sm backdrop-blur-sm transition-colors duration-200 hover:text-[#f5b041] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b041]"
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
          className="absolute left-0 top-full w-full origin-top border-t border-[#2c231b]/5 bg-[#fdf8f5]/95 shadow-xl backdrop-blur-xl animate__animated animate__fadeInDown lg:hidden"
        >
          <nav aria-label="Navigasi seluler" className="space-y-1 px-4 pb-6 pt-4">
            {NAVBAR_ENTRIES.map((entry) => (
              <MobileAccordion
                key={entry.label}
                entry={entry}
                expanded={expandedMobile === entry.label}
                onToggle={() =>
                  setExpandedMobile((prev) => (prev === entry.label ? null : entry.label))
                }
                onNavigate={closeAll}
              />
            ))}
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#f5b041] px-4 py-3 text-center text-base font-bold text-[#2c231b] shadow-md transition-colors duration-200 hover:bg-[#e09132] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c231b]/50"
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
