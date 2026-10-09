"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconSearch, IconX, IconArrowRight } from "@tabler/icons-react";

interface SearchResult {
  title: string;
  category: string;
  description: string;
  href: string;
}

const SEARCH_DATABASE: SearchResult[] = [
  {
    title: "Admission Information 2027–2028 Session",
    category: "Admissions",
    description: "Detailed process, prospectus submission, and fee schedules for new applicants.",
    href: "/admission",
  },
  {
    title: "KIDSET Entrance Assessment Criteria",
    category: "Admissions",
    description: "Grade-specific eligibility testing for Classes IV–VIII, I–III, and kindergarten.",
    href: "/admission/kidset",
  },
  {
    title: "Annual & Monthly Fee Structure",
    category: "Admissions",
    description: "Comprehensive tuition and admission fees broken down by grade.",
    href: "/admission#fees",
  },
  {
    title: "Academic Curriculum & CISCE Standards",
    category: "Learning",
    description: "Holistic, inquiry-based educational model aligning with CISCE and NEP 2020.",
    href: "/learning/curriculum",
  },
  {
    title: "Smart Classrooms & Digital Infrastructure",
    category: "Learning",
    description: "100% classrooms equipped with interactive smartboards and digital pedagogy.",
    href: "/learning#smartboards",
  },
  {
    title: "Academic Calendar 2026–2027",
    category: "Community",
    description: "Three-term schedule featuring exam dates, holidays, and school celebrations.",
    href: "/community/academic-calendar",
  },
  {
    title: "School Photo Gallery & Events",
    category: "Community",
    description: "Visual memories from sports day, science exhibitions, and cultural assemblies.",
    href: "/community/gallery",
  },
  {
    title: "The Kids Den School Song",
    category: "About KDS",
    description: "Complete lyrics, anthem history, and musical credits since 2011.",
    href: "/about/school-song",
  },
  {
    title: "Government Recognitions & Affiliation",
    category: "About KDS",
    description: "State registration, educational accreditations, and institutional credentials.",
    href: "/about/recognition-and-affiliations",
  },
  {
    title: "Career Opportunities & Talent Pool",
    category: "Careers",
    description: "Current teaching openings, staff culture, and expression of interest portal.",
    href: "/jobs",
  },
  {
    title: "Historical Vacancies Archive",
    category: "Careers",
    description: "Archived recruitment notices, sample bio-data sheets, and role criteria.",
    href: "/jobs/archive",
  },
  {
    title: "Official Branding & Visual Identity",
    category: "Identity",
    description: "Colors, typography guidelines, crest usage, and brand history.",
    href: "/identity",
  },
  {
    title: "Contact Office & Campus Directions",
    category: "Contact",
    description: "Office hours (09:00–15:00), Chaltlang Salem Veng campus map, and phone numbers.",
    href: "/contact",
  },
];

const SUGGESTED_QUERIES = [
  "Admissions 2027-28",
  "KIDSET Syllabus",
  "Fee Structure",
  "Academic Calendar",
  "School Song",
  "Curriculum",
  "Jobs",
  "Contact Campus",
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults = query.trim()
    ? SEARCH_DATABASE.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Kids Den School"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-gray-100 bg-[#F8FAFD]">
          <IconSearch className="w-5 h-5 text-[#0F52BA] shrink-0 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search school info, admissions, calendar, curriculum..."
            className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-base sm:text-lg focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200"
              aria-label="Clear query"
            >
              <IconX className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-3 text-xs font-semibold px-2.5 py-1 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
          >
            ESC
          </button>
        </div>

        {/* Discovery Chips / Suggestions */}
        <div className="px-5 py-3 bg-white border-b border-gray-100">
          <p className="text-xs font-medium text-gray-500 mb-2">SUGGESTED DISCOVERY</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUERIES.map((chip) => (
              <button
                key={chip}
                onClick={() => setQuery(chip)}
                className="text-xs px-3 py-1.5 rounded-full bg-[#F0F5FD] text-[#0F52BA] hover:bg-[#E2EDFC] transition-colors font-medium border border-[#D0E2FB]"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[380px] overflow-y-auto p-4 space-y-2">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-gray-500 text-sm">
              Type keywords above or select one of the suggested topics to explore Kids Den School.
            </div>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                onClick={onClose}
                className="block p-3 rounded-xl hover:bg-[#F0F5FD] transition-colors border border-transparent hover:border-[#D0E2FB] group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-[#0F52BA]">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gray-400 group-hover:text-[#0F52BA] transition-colors">
                    <span>Visit page</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#0F52BA] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
              </Link>
            ))
          ) : (
            <div className="py-8 text-center text-gray-500 text-sm">
              No results found for &ldquo;<span className="font-semibold">{query}</span>&rdquo;. Try another keyword.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
