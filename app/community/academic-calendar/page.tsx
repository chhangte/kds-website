"use client";

import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  term: "Term 1" | "Term 2" | "Term 3";
  type: "activity" | "holiday" | "exam";
  description: string;
}

const CALENDAR_DATA: CalendarEvent[] = [
  // Term 1: April - July
  {
    id: "t1-1",
    date: "April 06, 2026",
    title: "New Academic Session Commences",
    term: "Term 1",
    type: "activity",
    description: "Orientation assembly and classroom orientation for all grades.",
  },
  {
    id: "t1-2",
    date: "April 14, 2026",
    title: "Dr. B.R. Ambedkar Jayanti",
    term: "Term 1",
    type: "holiday",
    description: "National Gazetted Holiday (School Closed).",
  },
  {
    id: "t1-3",
    date: "May 08, 2026",
    title: "Mother's Day & Junior Craft Exhibition",
    term: "Term 1",
    type: "activity",
    description: "Kindergarten and primary student handmade craft displays.",
  },
  {
    id: "t1-4",
    date: "June 05, 2026",
    title: "World Environment Day & Tree Plantation",
    term: "Term 1",
    type: "activity",
    description: "Eco-club campus greening drive in Chaltlang Salem Veng.",
  },
  {
    id: "t1-5",
    date: "June 15, 2026",
    title: "YMA Day (Young Mizo Association)",
    term: "Term 1",
    type: "holiday",
    description: "State Holiday observed across Mizoram (School Closed).",
  },
  {
    id: "t1-6",
    date: "July 20–25, 2026",
    title: "Term 1 Formative Assessments (FA-1)",
    term: "Term 1",
    type: "exam",
    description: "Comprehensive diagnostic evaluations and subject reviews.",
  },

  // Term 2: August - November
  {
    id: "t2-1",
    date: "August 15, 2026",
    title: "Independence Day Celebration",
    term: "Term 2",
    type: "activity",
    description: "Flag hoisting, patriotic songs, and student parade.",
  },
  {
    id: "t2-2",
    date: "September 05, 2026",
    title: "Teachers' Day & Student Council Assembly",
    term: "Term 2",
    type: "activity",
    description: "Special student appreciation performances for faculty.",
  },
  {
    id: "t2-3",
    date: "October 02, 2026",
    title: "Mahatma Gandhi Jayanti",
    term: "Term 2",
    type: "holiday",
    description: "National Holiday observed (School Closed).",
  },
  {
    id: "t2-4",
    date: "October 19–24, 2026",
    title: "Term 2 Mid-Term Examinations",
    term: "Term 2",
    type: "exam",
    description: "Half-yearly scholastic examinations for Classes I through VIII.",
  },
  {
    id: "t2-5",
    date: "November 14–16, 2026",
    title: "Annual Sports & Athletics Meet",
    term: "Term 2",
    type: "activity",
    description: "Three-day inter-house sports competitions on campus grounds.",
  },

  // Term 3: December - March
  {
    id: "t3-1",
    date: "December 05, 2026",
    title: "Science, Nature & Robotics Expo",
    term: "Term 3",
    type: "activity",
    description: "Interactive projects, model rockets, and biology exhibitions.",
  },
  {
    id: "t3-2",
    date: "December 18, 2026",
    title: "Annual Christmas Musical & Carol Assembly",
    term: "Term 3",
    type: "activity",
    description: "Choral performances before the winter academic break.",
  },
  {
    id: "t3-3",
    date: "Dec 19, 2026 – Jan 05, 2027",
    title: "Winter Recess & Christmas Holidays",
    term: "Term 3",
    type: "holiday",
    description: "School closed for winter vacation. Reopens January 06, 2027.",
  },
  {
    id: "t3-4",
    date: "January 26, 2027",
    title: "Republic Day Celebration",
    term: "Term 3",
    type: "activity",
    description: "Ceremonial flag raising and civics address.",
  },
  {
    id: "t3-5",
    date: "March 05, 2027",
    title: "Chapchar Kut (Mizo Spring Festival)",
    term: "Term 3",
    type: "holiday",
    description: "State Holiday observed across Mizoram (School Closed).",
  },
  {
    id: "t3-6",
    date: "March 15–24, 2027",
    title: "Annual Final Examinations (Term 3)",
    term: "Term 3",
    type: "exam",
    description: "Summative annual examinations for grade progression.",
  },
];

export default function AcademicCalendarPage() {
  const [selectedTerm, setSelectedTerm] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = CALENDAR_DATA.filter((evt) => {
    const matchesTerm = selectedTerm === "All" || evt.term === selectedTerm;
    const matchesType = selectedType === "All" || evt.type === selectedType;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTerm && matchesType && matchesSearch;
  });

  return (
    <div>
      <PageHeader
        badge="Academic Year 2026–2027"
        title="Academic Calendar & Important Dates"
        description="Comprehensive schedule of school terms, examinations, co-curricular events, sports meets, and gazetted holidays. Filter by term or activity type."
        breadcrumbs={[
          { label: "Community", href: "/community/academic-calendar" },
          { label: "Academic Calendar" },
        ]}
      />

      <div className="container-kds py-10 sm:py-16 space-y-8 sm:space-y-12">
        {/* Filter Controls Bar */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#DADCE0] shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Term Selector */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-1 shrink-0">
              Term:
            </span>
            {["All", "Term 1", "Term 2", "Term 3"].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTerm(t)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 min-h-[38px] ${
                  selectedTerm === t
                    ? "bg-[#0F52BA] text-white shadow-xs"
                    : "bg-[#F0F5FD] text-gray-700 hover:bg-[#E2EDFC]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Type Selector */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-1 shrink-0">
              Category:
            </span>
            {[
              { label: "All", value: "All" },
              { label: "Activity", value: "activity" },
              { label: "Holiday", value: "holiday" },
              { label: "Exams", value: "exam" },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedType(cat.value)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 min-h-[38px] ${
                  selectedType === cat.value
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-auto lg:min-w-[220px]">
            <input
              type="text"
              placeholder="Filter by keyword or date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs px-3.5 py-2 rounded-xl bg-[#F8FAFD] border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
            />
          </div>
        </div>

        {/* Legend for Visual & Accessible Classification */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 bg-[#F8FAFD] p-4 rounded-xl border border-gray-200">
          <span className="font-bold text-gray-800">Key:</span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span>[School Activity] Campus events, sports, assemblies</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>[Holiday / Recess] School closed</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <span>[Examinations] Assessments &amp; reviews</span>
          </span>
        </div>

        {/* Calendar Events List */}
        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((evt) => {
              const isHoliday = evt.type === "holiday";
              const isExam = evt.type === "exam";

              return (
                <div
                  key={evt.id}
                  className={`card-editorial p-4 sm:p-6 bg-white rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border ${
                    isHoliday
                      ? "border-amber-200 hover:border-amber-300"
                      : isExam
                      ? "border-purple-200 hover:border-purple-300"
                      : "border-blue-100 hover:border-[#0F52BA]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
                    {/* Date Block */}
                    <div
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-center shrink-0 min-w-[100px] sm:min-w-[110px] ${
                        isHoliday
                          ? "bg-amber-50 text-amber-900 border border-amber-200"
                          : isExam
                          ? "bg-purple-50 text-purple-900 border border-purple-200"
                          : "bg-[#F0F5FD] text-[#0F52BA] border border-blue-200"
                      }`}
                    >
                      <span className="block text-xs font-bold leading-tight">
                        {evt.date}
                      </span>
                      <span className="block text-[10px] uppercase font-semibold text-gray-500 mt-0.5">
                        {evt.term}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-base sm:text-lg font-bold text-gray-900">
                          {evt.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>
                  </div>

                  {/* Accessible Badges */}
                  <div className="shrink-0 flex items-center space-x-2 self-start md:self-center">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isHoliday
                          ? "bg-amber-100 text-amber-800"
                          : isExam
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {isHoliday
                        ? "Holiday / Recess"
                        : isExam
                        ? "Examination"
                        : "School Activity"}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center text-gray-500 bg-white rounded-2xl border border-gray-200">
              No calendar events found matching the selected filters.
            </div>
          )}
        </div>

        {/* Note on Calendar Updates */}
        <div className="text-xs text-gray-500 border-t border-gray-200 pt-6">
          * Specific dates for regional observances may be adjusted per official Government of Mizoram gazette notifications. Emergency weather circulars are broadcast via official school notices.
        </div>
      </div>
    </div>
  );
}
