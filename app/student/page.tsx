"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import {
  IconSchool,
  IconCalendar,
  IconBook2,
  IconClipboardList,
  IconBell,
  IconClock,
  IconCheck,
  IconArrowRight,
  IconFileText,
  IconTrophy,
} from "@tabler/icons-react";

export default function StudentPortalPage() {
  const [selectedGrade, setSelectedGrade] = useState("Middle School (Classes VI–VIII)");

  const gradeSchedules = [
    { time: "08:45 – 09:15", activity: "Morning Assembly & School Song Hymn", location: "Assembly Courtyard" },
    { time: "09:15 – 10:00", activity: "Period 1: Mathematics & Computational Logic", location: "Smart Classroom 4B" },
    { time: "10:00 – 10:45", activity: "Period 2: English Literature & Rhetoric", location: "Smart Classroom 4B" },
    { time: "10:45 – 11:00", activity: "Morning Recess & Hydration Break", location: "Campus Grounds" },
    { time: "11:00 – 11:45", activity: "Period 3: Science & Experiential Lab Experiments", location: "Science Discovery Lab" },
    { time: "11:45 – 12:30", activity: "Period 4: Social Studies & Geography Mapping", location: "Smart Classroom 4B" },
    { time: "12:30 – 13:15", activity: "Lunch Recess & Quiet Reading", location: "Campus Dining & Library" },
    { time: "13:15 – 14:00", activity: "Period 5: Computer Science & Digital Ethics", location: "Computer Laboratory" },
    { time: "14:00 – 14:45", activity: "Period 6: Arts, Music Choir & Physical Education", location: "Activity Center & Field" },
    { time: "14:45 – 15:00", activity: "Homeroom Advisory & Dismissal", location: "Smart Classroom 4B" },
  ];

  const studentNotices = [
    {
      date: "Oct 12, 2026",
      title: "Inter-House Science Exhibition & Robotics Model Submissions",
      category: "Academics",
      badgeColor: "bg-blue-50 text-[#1A73E8]",
    },
    {
      date: "Oct 18, 2026",
      title: "Term 2 Half-Yearly Examination Timetable Published",
      category: "Exams",
      badgeColor: "bg-purple-50 text-purple-700",
    },
    {
      date: "Oct 24, 2026",
      title: "Junior Reading Circle: Monthly Book Review Submissions Due",
      category: "Library",
      badgeColor: "bg-amber-50 text-amber-700",
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Portal: Student"
        title="Student Portal & Academic Hub"
        description="Your daily campus companion. Access class schedules, CISCE curriculum guides, examination calendars, assignment notices, and co-curricular club updates."
        breadcrumbs={[
          { label: "Portals" },
          { label: "Student" },
        ]}
      />

      <div className="container-kds py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Switcher Banner Callout */}
        <div className="p-4 sm:p-5 bg-[#EBF2FC] rounded-2xl border border-[#BED8FF] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center shrink-0">
              <IconSchool className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-[#202124]">Currently viewing: Student Website View</span>
              <p className="text-[#5F6368] text-xs">Switch to Teachers or Library view anytime using the 3-dots menu in the top bar.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Link
              href="/teachers"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-[#1A73E8] border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Teachers
            </Link>
            <Link
              href="/library"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-[#1A73E8] border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Library
            </Link>
          </div>
        </div>

        {/* Quick Student Tools Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A73E8] flex items-center justify-center mb-4">
                <IconClock className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-base text-gray-900">Class Timetables</h3>
              <p className="text-xs text-gray-600 mt-1">Daily 6-period instructional schedules and smartboard lab rotations.</p>
            </div>
            <span className="text-xs font-semibold text-[#1A73E8] mt-4 inline-flex items-center gap-1">
              Active Session 2026–27
            </span>
          </div>

          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <IconClipboardList className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-base text-gray-900">Assessments & Exams</h3>
              <p className="text-xs text-gray-600 mt-1">Formative diagnostics, half-yearly reviews, and CISCE rubrics.</p>
            </div>
            <Link href="/community/academic-calendar" className="text-xs font-semibold text-[#1A73E8] mt-4 inline-flex items-center gap-1 hover:underline">
              <span>View Exam Calendar</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <IconBook2 className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-base text-gray-900">Library Catalogue</h3>
              <p className="text-xs text-gray-600 mt-1">Explore 1,000+ curated volumes, author spotlights, and book clubs.</p>
            </div>
            <Link href="/library" className="text-xs font-semibold text-[#1A73E8] mt-4 inline-flex items-center gap-1 hover:underline">
              <span>Open Library Hub</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <IconTrophy className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-base text-gray-900">Houses & Sports</h3>
              <p className="text-xs text-gray-600 mt-1">Inter-house track competitions, choir anthems, and merit points.</p>
            </div>
            <Link href="/about/school-song" className="text-xs font-semibold text-[#1A73E8] mt-4 inline-flex items-center gap-1 hover:underline">
              <span>School Anthem Lyrics</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Timetable Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DADCE0] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                Instructional Timetable
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#202124] mt-1">
                Standard School Day Schedule
              </h2>
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {["Foundational (Nursery–KG)", "Primary (Classes I–V)", "Middle School (Classes VI–VIII)"].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${
                    selectedGrade === grade
                      ? "bg-[#1A73E8] text-white"
                      : "bg-[#F1F3F4] text-gray-700 hover:bg-[#E8EAED]"
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 divide-y divide-gray-100">
            {gradeSchedules.map((row, idx) => (
              <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1.5 sm:gap-4 hover:bg-slate-50 px-3 rounded-xl transition-colors">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="w-24 sm:w-28 font-semibold text-[#1A73E8]">{row.time}</span>
                  <span className="font-medium text-[#202124]">{row.activity}</span>
                </div>
                <span className="text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full text-[11px] self-start sm:self-center">
                  {row.location}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Notice Board & Homework Circulars */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-[#F8FAFD] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-medium text-xl text-gray-900 flex items-center gap-2">
                <IconBell className="w-5 h-5 text-[#1A73E8]" />
                <span>Student Notice Board</span>
              </h3>
              <span className="text-xs text-gray-500">Updated weekly</span>
            </div>
            <div className="space-y-3">
              {studentNotices.map((n, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-gray-200 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] ${n.badgeColor}`}>
                      {n.category}
                    </span>
                    <span className="text-gray-400 text-[11px]">{n.date}</span>
                  </div>
                  <h4 className="font-medium text-sm text-[#202124]">{n.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="font-medium text-xl text-gray-900 flex items-center gap-2 mb-3">
                <IconFileText className="w-5 h-5 text-emerald-600" />
                <span>Curriculum Handbook</span>
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Download the complete CISCE subject guidelines, syllabus breakdown, and grading rubrics for Classes I through VIII.
              </p>
              <div className="mt-5 space-y-2.5 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Competency-based NEP 2020 modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recommended literature and reference reading lists</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Formative and summative assessment grading rubric</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                href="/learning/curriculum"
                className="btn-pill-action w-full justify-center text-xs"
              >
                <span>Read Curriculum Syllabus</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
