"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { IconUsers, IconDeviceLaptop, IconCertificate, IconCheck } from "@tabler/icons-react";

export default function JobsPage() {
  const [talentName, setTalentName] = useState("");
  const [talentEmail, setTalentEmail] = useState("");
  const [talentSubject, setTalentSubject] = useState("English");
  const [submitted, setSubmitted] = useState(false);

  const handleTalentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHeader
        badge="Careers at KDS"
        title="Join Our Teaching Community"
        description="At Kids Den School, we believe that inspired teachers inspire great students. Discover our educator culture, professional mentoring, and talent pool registration."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Status Notice Banner (Explicit requirement from ref/content1.md §5) */}
        <section className="bg-[#FEF9E7] border border-[#FADA5E] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#FFAA1D] text-slate-900 flex items-center justify-center font-bold text-lg shrink-0">
              ℹ
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Current Vacancy Status
              </div>
              <h2 className="font-medium text-xl font-bold text-gray-900 mt-0.5">
                No Active Vacancies at This Time
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 mt-1 leading-relaxed max-w-2xl">
                All full-time teaching and staff positions for the current term are currently filled. However, we continuously accept expressions of interest for our active talent pool and upcoming 2027–2028 academic sessions.
              </p>
            </div>
          </div>

          <Link
            href="/jobs/archive"
            className="shrink-0 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-semibold transition-colors"
          >
            View Historic Openings Archive →
          </Link>
        </section>

        {/* Why Teach at Kids Den School */}
        <section>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Workplace Culture
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Why Teach at Kids Den School?
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              We empower educators with the tools, time, and autonomy required to nurture young minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-editorial p-6 bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#0F52BA] flex items-center justify-center mb-4">
                <IconUsers className="w-6 h-6 text-[#0F52BA]" />
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                16:1 Student-Teacher Ratio
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Manageable class sizes allow our teachers to know every child personally, differentiate instruction, and provide individualized feedback without overwhelming administrative stress.
              </p>
            </div>

            <div className="card-editorial p-6 bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#FFAA1D] flex items-center justify-center mb-4">
                <IconDeviceLaptop className="w-6 h-6 text-[#FFAA1D]" />
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                100% Smartboard Infrastructure
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Modern multimedia teaching tools, curated digital lesson banks, and interactive software make daily classroom delivery engaging and dynamic.
              </p>
            </div>

            <div className="card-editorial p-6 bg-white">
              <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] text-emerald-600 flex items-center justify-center mb-4">
                <IconCertificate className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                Continuous Pedagogy Training
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Regular workshops in NEP 2020 competency benchmarks, inclusive education, child psychology, and modern CISCE grading rubrics.
              </p>
            </div>
          </div>
        </section>

        {/* Talent Pool Expression of Interest Form */}
        <section className="bg-[#F8FAFD] rounded-3xl p-8 sm:p-12 border border-[#DADCE0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                Talent Pool
              </span>
              <h2 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124]">
                Register for Future Vacancies
              </h2>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Qualified educators (B.Ed / D.El.Ed / Masters holders) interested in joining Kids Den School can register their profile. Our academic board reviews expressions of interest as upcoming requirements arise.
              </p>
              <div className="text-xs text-gray-600 space-y-2 pt-2">
                <div>• Priority consideration when roles open</div>
                <div>• Invitations to teacher workshops &amp; symposia</div>
                <div>• Direct contact from the principal&apos;s office</div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <IconCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-medium text-xl font-bold text-gray-900">
                    Profile Registered!
                  </h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto">
                    Thank you, {talentName}. Your details have been submitted to our talent database. You will be contacted when vacancies matching your subject area arise.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleTalentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={talentName}
                      onChange={(e) => setTalentName(e.target.value)}
                      placeholder="e.g. Lalrinchhana Ralte"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={talentEmail}
                      onChange={(e) => setTalentEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Primary Subject / Specialization
                    </label>
                    <select
                      value={talentSubject}
                      onChange={(e) => setTalentSubject(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    >
                      <option value="English">English Language &amp; Literature</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">General Science / Physics / Chemistry / Biology</option>
                      <option value="SocialStudies">History, Civics &amp; Geography</option>
                      <option value="ComputerScience">Computer Science &amp; Coding</option>
                      <option value="PrimaryPRT">Primary General (PRT / Foundational)</option>
                      <option value="PrePrimary">Kindergarten / Nursery Educator</option>
                      <option value="ArtMusic">Art, Craft &amp; Music</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#0F52BA] hover:bg-[#0A3E8F] text-white text-xs font-semibold transition-colors"
                  >
                    Submit Expression of Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
