"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchModal from "./SearchModal";
import {
  IconPhone,
  IconMapPin,
  IconSearch,
  IconDots,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconArrowRight,
  IconArrowUpRight,
  IconSchool,
  IconChalkboard,
  IconBook2,
  IconBuildingCommunity,
} from "@tabler/icons-react";

interface MegaColumn {
  heading: string;
  links: { label: string; href: string }[];
}

interface NavTopic {
  label: string;
  seeAllHref: string;
  seeAllText: string;
  columns: MegaColumn[];
  quickLinks: { label: string; href: string }[];
}

const PORTAL_OPTIONS = [
  {
    title: "Student",
    href: "/student",
    icon: IconSchool,
  },
  {
    title: "Teachers",
    href: "/teachers",
    icon: IconChalkboard,
  },
  {
    title: "Library",
    href: "/library",
    icon: IconBook2,
  },
  {
    title: "Main Website",
    href: "/",
    icon: IconBuildingCommunity,
  },
];

const NAV_TOPICS: Record<string, NavTopic> = {
  "Admissions": {
    label: "Admissions & Enrollment",
    seeAllHref: "/admission",
    seeAllText: "See all in Admissions",
    columns: [
      {
        heading: "Application Journey",
        links: [
          { label: "Admission Process 2027–2028", href: "/admission" },
          { label: "Prospectus & Registration", href: "/admission#steps" },
          { label: "Application Deadlines", href: "/admission#dates" },
        ],
      },
      {
        heading: "Assessments & Fees",
        links: [
          { label: "KIDSET Entrance Assessment", href: "/admission/kidset" },
          { label: "Grade-Wise Fee Structure", href: "/admission#fees" },
          { label: "Interactive Tuition Calculator", href: "/admission#calculator" },
        ],
      },
      {
        heading: "Support & Inquiries",
        links: [
          { label: "Admissions Desk Office Hours", href: "/contact" },
          { label: "Schedule Campus Visit", href: "/contact" },
          { label: "Helpdesk FAQs", href: "/admission/kidset#faqs" },
        ],
      },
    ],
    quickLinks: [
      { label: "KIDSET Syllabus Criteria", href: "/admission/kidset" },
      { label: "Fee Schedules by Grade", href: "/admission#fees" },
      { label: "Admissions Office Map", href: "/contact" },
    ],
  },
  "Academics": {
    label: "Learning & Academics",
    seeAllHref: "/learning",
    seeAllText: "See all in Learning",
    columns: [
      {
        heading: "Programs & Stages",
        links: [
          { label: "Academic Overview", href: "/learning" },
          { label: "Foundational & Kindergarten", href: "/learning#stages" },
          { label: "Primary & Middle School", href: "/learning#stages" },
        ],
      },
      {
        heading: "Curriculum Standards",
        links: [
          { label: "CISCE Curriculum Framework", href: "/learning/curriculum" },
          { label: "National Education Policy 2020", href: "/learning/curriculum#nep2020" },
          { label: "Subject Distribution Matrix", href: "/learning/curriculum#subjects" },
        ],
      },
      {
        heading: "Campus Infrastructure",
        links: [
          { label: "100% Smart Classrooms", href: "/learning#smartboards" },
          { label: "Curated 1,000+ Book Library", href: "/learning#library" },
          { label: "Science & Computer Labs", href: "/learning#labs" },
        ],
      },
    ],
    quickLinks: [
      { label: "CISCE Affiliation Standards", href: "/about/recognition-and-affiliations" },
      { label: "Experiential Pedagogy", href: "/learning/curriculum" },
    ],
  },
  "Community": {
    label: "Campus Community & News",
    seeAllHref: "/community/academic-calendar",
    seeAllText: "See all in Community",
    columns: [
      {
        heading: "Schedules & Events",
        links: [
          { label: "Academic Calendar 2026–2027", href: "/community/academic-calendar" },
          { label: "Term Dates & Holidays", href: "/community/academic-calendar" },
          { label: "Upcoming School Events", href: "/#events" },
        ],
      },
      {
        heading: "Visual Memories",
        links: [
          { label: "Photo & Events Gallery", href: "/community/gallery" },
          { label: "Sports Day Finals", href: "/community/gallery" },
          { label: "Science & Arts Exhibition", href: "/community/gallery" },
        ],
      },
      {
        heading: "Student Life",
        links: [
          { label: "Co-Curricular Sports", href: "/#explore" },
          { label: "Music Choir & School Song", href: "/about/school-song" },
          { label: "Character & Life Skills", href: "/#explore" },
        ],
      },
    ],
    quickLinks: [
      { label: "Listen to School Anthem", href: "/about/school-song" },
      { label: "Full Academic Calendar", href: "/community/academic-calendar" },
    ],
  },
  "About": {
    label: "About Kids Den School",
    seeAllHref: "/about/recognition-and-affiliations",
    seeAllText: "See all in About",
    columns: [
      {
        heading: "Institutional Profile",
        links: [
          { label: "Recognitions & Affiliation", href: "/about/recognition-and-affiliations" },
          { label: "Government Approvals", href: "/about/recognition-and-affiliations" },
          { label: "Founding Milestones Since 2011", href: "/about/recognition-and-affiliations#milestones" },
        ],
      },
      {
        heading: "Identity & Heritage",
        links: [
          { label: "Official Brand & Identity Guidelines", href: "/identity" },
          { label: "The Kids Den School Song", href: "/about/school-song" },
          { label: "School Emblem & Motto", href: "/identity#emblem" },
        ],
      },
      {
        heading: "Careers & Contact",
        links: [
          { label: "Teaching Careers & Talent Pool", href: "/jobs" },
          { label: "Historic Vacancy Archive", href: "/jobs/archive" },
          { label: "Campus Map & Office Hours", href: "/contact" },
        ],
      },
    ],
    quickLinks: [
      { label: "Brand Color Swatches", href: "/identity" },
      { label: "Chaltlang Salem Veng Campus Map", href: "/contact" },
    ],
  },
};

export default function Header() {
  const pathname = usePathname();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const portalDropdownRef = useRef<HTMLDivElement>(null);

  // Close portal popover on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        portalDropdownRef.current &&
        !portalDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPortalOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsPortalOpen(false);
        setActiveTopic(null);
      }
    }

    if (isPortalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPortalOpen]);

  // Close portal popover on route change
  useEffect(() => {
    setIsPortalOpen(false);
  }, [pathname]);

  const toggleTopic = (topic: string) => {
    setActiveTopic(activeTopic === topic ? null : topic);
    if (isPortalOpen) setIsPortalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-[#DADCE0]">
        <div className="container-kds flex items-center justify-between h-16 sm:h-20">
          {/* Left: Brand Title matching "News from Google" */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 relative shrink-0">
                <Image
                  src="/images/kds-logo.svg"
                  alt="Kids Den School"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-[22px] font-medium tracking-tight text-[#202124] truncate">
                Kids Den School
              </span>
            </Link>

            {/* Desktop Navigation Links matching Screenshot 1 & 5 */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {Object.keys(NAV_TOPICS).map((topicKey) => {
                const isOpen = activeTopic === topicKey;
                return (
                  <button
                    key={topicKey}
                    onClick={() => toggleTopic(topicKey)}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                      isOpen
                        ? "text-[#1A73E8] bg-[#F1F3F4]"
                        : "text-[#202124] hover:bg-[#F1F3F4]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{topicKey}</span>
                    <IconChevronDown
                      className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );
              })}

              <Link
                href="/community/academic-calendar"
                className="px-3.5 py-2 text-sm font-medium text-[#202124] hover:bg-[#F1F3F4] rounded-full transition-colors"
              >
                Calendar
              </Link>
            </nav>
          </div>

          {/* Right Controls: Circular Search, 3-dots Portal Switcher, and Blue Pill Button */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Circular Search Button */}
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setIsPortalOpen(false);
              }}
              aria-label="Search site"
              className="btn-icon-circle w-10 h-10 sm:w-11 sm:h-11"
            >
              <IconSearch className="w-5 h-5 text-gray-700" />
            </button>

            {/* Circular 3-dots Button: Portal Switcher Popover */}
            <div className="relative" ref={portalDropdownRef}>
              <button
                onClick={() => {
                  setIsPortalOpen((prev) => !prev);
                  setActiveTopic(null);
                }}
                aria-label="Switch website type"
                aria-haspopup="true"
                aria-expanded={isPortalOpen}
                className={`btn-icon-circle w-10 h-10 sm:w-11 sm:h-11 transition-all ${
                  isPortalOpen
                    ? "bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30 shadow-xs ring-2 ring-[#1A73E8]/20"
                    : "text-gray-700 hover:bg-[#F1F3F4]"
                }`}
                title="Switch Website: Student, Teachers, Library"
              >
                <IconDots className="w-5 h-5" />
              </button>

              {/* Portal Switcher Dropdown Popover below this button */}
              {isPortalOpen && (
                <div
                  role="menu"
                  aria-label="Switch website"
                  className="absolute right-0 top-full mt-2 w-48 sm:w-52 bg-white rounded-2xl shadow-xl border border-[#DADCE0] p-1.5 z-50 animate-fadeIn origin-top-right focus:outline-hidden"
                >
                  {/* Heading */}
                  <div className="px-3 pt-2 pb-1.5 border-b border-gray-100 mb-1">
                    <span className="text-xs font-semibold text-[#5F6368]">
                      Switch website
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {PORTAL_OPTIONS.map((portal) => {
                      const isActive =
                        portal.href === "/"
                          ? pathname === "/"
                          : pathname === portal.href || pathname.startsWith(portal.href + "/");
                      const IconComponent = portal.icon;
                      return (
                        <Link
                          key={portal.href}
                          href={portal.href}
                          onClick={() => setIsPortalOpen(false)}
                          role="menuitem"
                          className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${
                            isActive
                              ? "bg-[#E8F0FE] text-[#1A73E8]"
                              : "text-[#202124] hover:bg-[#F1F3F4] hover:text-[#1A73E8]"
                          }`}
                        >
                          <IconComponent
                            className={`w-5 h-5 shrink-0 transition-colors ${
                              isActive
                                ? "text-[#1A73E8]"
                                : "text-gray-600 group-hover:text-[#1A73E8]"
                            }`}
                          />
                          <span>{portal.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Solid Blue Pill Action Button - Desktop only (Removed from mobile screen top navbar) */}
            <div className="hidden lg:block">
              <Link
                href="/admission"
                className="btn-pill-primary text-xs sm:text-sm font-medium px-4 py-2 sm:px-6 sm:py-2.5 min-h-[40px] sm:min-h-[44px]"
              >
                Admissions
              </Link>
            </div>

            {/* Mobile hamburger menu with 44px touch target */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setIsPortalOpen(false);
              }}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <IconX className="w-6 h-6 text-gray-700" />
              ) : (
                <IconMenu2 className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mega-menu Panel matching Screenshot 5 (Desktop) */}
        {activeTopic && (
          <div className="hidden lg:block border-t border-[#DADCE0] bg-white shadow-lg animate-fadeIn">
            <div className="container-kds py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Side: Topic Title + Pill Button */}
                <div className="col-span-3 space-y-5">
                  <h2 className="text-3xl font-medium tracking-tight text-[#202124]">
                    {NAV_TOPICS[activeTopic].label}
                  </h2>
                  <div>
                    <Link
                      href={NAV_TOPICS[activeTopic].seeAllHref}
                      onClick={() => setActiveTopic(null)}
                      className="btn-pill-action"
                    >
                      <span>{NAV_TOPICS[activeTopic].seeAllText}</span>
                      <IconArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Columns with categories and links */}
                <div className="col-span-9 grid grid-cols-3 gap-8">
                  {NAV_TOPICS[activeTopic].columns.map((col, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="text-xs font-semibold text-[#5F6368]">
                        {col.heading}
                      </h3>
                      <ul className="space-y-3">
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <Link
                              href={link.href}
                              onClick={() => setActiveTopic(null)}
                              className="text-base text-[#202124] hover:text-[#1A73E8] font-normal transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Learn more links with arrow ↗ */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center space-x-6 text-sm">
                <span className="text-[#5F6368] text-xs font-medium">Learn more:</span>
                {NAV_TOPICS[activeTopic].quickLinks.map((q, qIdx) => (
                  <Link
                    key={qIdx}
                    href={q.href}
                    onClick={() => setActiveTopic(null)}
                    className="text-[#202124] hover:text-[#1A73E8] font-normal flex items-center space-x-1 transition-colors"
                  >
                    <span>{q.label}</span>
                    <IconArrowUpRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer (Optimized for one-hand phone navigation) */}
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 top-[64px] bg-black/30 backdrop-blur-xs z-30 animate-fadeIn"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden relative z-40 bg-white border-t border-gray-200 px-4 py-5 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain shadow-2xl animate-fadeIn">
            {/* Quick Admissions Mobile CTA */}
            <div className="pb-3 border-b border-gray-100">
              <Link
                href="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill-primary w-full text-center text-sm font-medium shadow-sm"
              >
                Apply for Admissions 2027–2028 →
              </Link>
            </div>

            {/* Mobile Categories */}
            <div className="space-y-3">
              {Object.keys(NAV_TOPICS).map((topicKey) => (
                <details key={topicKey} className="group border-b border-gray-100 pb-3">
                  <summary className="flex items-center justify-between text-base font-medium text-[#202124] py-2 cursor-pointer list-none select-none">
                    <span>{topicKey}</span>
                    <IconChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2 pl-3 space-y-2.5 border-l-2 border-[#D2E3FC]">
                    {NAV_TOPICS[topicKey].columns.flatMap((col) => col.links).map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-[#5F6368] hover:text-[#1A73E8] active:text-[#1A73E8]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}

              <div className="py-2">
                <Link
                  href="/community/academic-calendar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#202124] hover:text-[#1A73E8]"
                >
                  Academic Calendar 2026–2027
                </Link>
              </div>

              <div className="py-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#202124] hover:text-[#1A73E8]"
                >
                  Contact &amp; Campus Map
                </Link>
              </div>
            </div>

            {/* Mobile Website Portals */}
            <div className="pt-3 border-t border-gray-100">
              <span className="text-xs font-semibold text-[#5F6368] block mb-2 px-0.5">
                Switch website
              </span>
              <div className="grid grid-cols-2 gap-2">
                {PORTAL_OPTIONS.map((portal) => {
                  const isActive =
                    portal.href === "/"
                      ? pathname === "/"
                      : pathname === portal.href || pathname.startsWith(portal.href + "/");
                  const IconComp = portal.icon;
                  return (
                    <Link
                      key={portal.href}
                      href={portal.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 p-2.5 rounded-xl border text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-[#E8F0FE] border-[#C2E7FF] text-[#1A73E8]"
                          : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <IconComp
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? "text-[#1A73E8]" : "text-gray-600"
                        }`}
                      />
                      <span className="truncate">{portal.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Direct Mobile Contact Assistance */}
            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+913892341234"
                className="flex items-center justify-center p-3 rounded-xl bg-gray-50 text-gray-800 font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                <IconPhone className="w-4 h-4 mr-1.5 text-gray-600" />
                <span>Call Campus</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center p-3 rounded-xl bg-blue-50 text-[#1A73E8] font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <IconMapPin className="w-4 h-4 mr-1.5 text-[#1A73E8]" />
                <span>Directions</span>
              </Link>
            </div>
          </div>
        </>
      )}
      </header>

      {/* Discovery Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
