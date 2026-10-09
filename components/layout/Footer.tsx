"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconCheck, IconMapPin, IconClock, IconMail, IconArrowUp } from "@tabler/icons-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A2536] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="container-kds">
        {/* Top Newsletter / Dispatch Bar */}
        <div className="bg-[#24334A] rounded-2xl p-6 sm:p-8 mb-16 border border-slate-700/60 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#87CEFA]">
                Official School Communications
              </span>
              <h3 className="font-medium text-xl sm:text-2xl font-bold text-white mt-1">
                Stay updated with Kids Den School circulars & announcements
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Receive term notices, admission milestone dates, KIDSET updates, and school event circulars directly in your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              {isSubscribed ? (
                <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-200 text-sm flex items-center space-x-3">
                  <IconCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! You are subscribed to Kids Den School updates.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter parent or guardian email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#87CEFA] focus:ring-1 focus:ring-[#87CEFA]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-[#0F52BA] hover:bg-[#1A73E8] text-white text-sm font-semibold transition-colors shrink-0 disabled:opacity-60"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-400 mt-2">
                We respect your privacy. School circulars only, no commercial spam.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          {/* Identity & Campus Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/kds-logo.svg"
                  alt="Kids Den School Emblem"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <h4 className="font-medium text-lg font-bold text-white leading-tight">
                  Kids Den School
                </h4>
                <p className="text-xs text-[#87CEFA]">Nurturing Minds, Inspiring Futures</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Founded in 2011 in Aizawl, Mizoram, Kids Den School offers an inspiring CISCE-aligned curriculum blending modern smartboard pedagogy, life skills, creative arts, and foundational scholastic rigor.
            </p>

            <div className="text-xs text-slate-300 space-y-2 pt-2">
              <div className="flex items-start space-x-2">
                <IconMapPin className="w-4 h-4 text-[#FADA5E] shrink-0 mt-0.5" />
                <span>A-II A/40, Chaltlang Salem Veng, Aizawl, Mizoram, India 796012</span>
              </div>
              <div className="flex items-center space-x-2">
                <IconClock className="w-4 h-4 text-[#FADA5E] shrink-0" />
                <span>Office Hours: 09:00 – 15:00 (Monday – Friday)</span>
              </div>
              <div className="flex items-center space-x-2">
                <IconMail className="w-4 h-4 text-[#FADA5E] shrink-0" />
                <a href="mailto:info@kidsdenschool.in" className="hover:text-white transition-colors">
                  info@kidsdenschool.in
                </a>
              </div>
            </div>
          </div>

          {/* Admissions Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FADA5E]">
              Admissions
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/admission" className="hover:text-white transition-colors">
                  Admission Process 2027–2028
                </Link>
              </li>
              <li>
                <Link href="/admission/kidset" className="hover:text-white transition-colors">
                  KIDSET Entrance Assessment
                </Link>
              </li>
              <li>
                <Link href="/admission#fees" className="hover:text-white transition-colors">
                  Fee Structure by Grade
                </Link>
              </li>
              <li>
                <Link href="/admission#prospectus" className="hover:text-white transition-colors">
                  Prospectus & Guidelines
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Schedule Campus Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics & Community Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FADA5E]">
              Academics & Life
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/learning" className="hover:text-white transition-colors">
                  Learning Overview
                </Link>
              </li>
              <li>
                <Link href="/learning/curriculum" className="hover:text-white transition-colors">
                  CISCE Curriculum & NEP 2020
                </Link>
              </li>
              <li>
                <Link href="/community/academic-calendar" className="hover:text-white transition-colors">
                  Academic Calendar 2026–2027
                </Link>
              </li>
              <li>
                <Link href="/community/gallery" className="hover:text-white transition-colors">
                  Campus Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about/school-song" className="hover:text-white transition-colors">
                  School Song & Lyrics
                </Link>
              </li>
            </ul>
          </div>

          {/* School Governance Column */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#FADA5E]">
              Institution
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about/recognition-and-affiliations" className="hover:text-white transition-colors">
                  Recognitions & Affiliation
                </Link>
              </li>
              <li>
                <Link href="/identity" className="hover:text-white transition-colors">
                  Brand & Identity Manual
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Careers & Talent Pool
                </Link>
              </li>
              <li>
                <Link href="/jobs/archive" className="hover:text-white transition-colors">
                  Vacancy Archive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Campus Map
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Platform & Legal Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Kids Den School. All rights reserved. Recognized by Govt of Mizoram Education Department.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/identity" className="hover:text-white transition-colors">
              Identity Guide
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-[#87CEFA] hover:text-[#FADA5E] transition-colors flex items-center space-x-1"
            >
              <span>Back to top</span>
              <IconArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
