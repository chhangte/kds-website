"use client";

import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import {
  IconChalkboard,
  IconDeviceLaptop,
  IconBook2,
  IconCertificate,
  IconUsers,
  IconCheck,
  IconArrowRight,
  IconFileSpreadsheet,
  IconBriefcase,
} from "@tabler/icons-react";

export default function TeachersPortalPage() {
  const pedagogicalGuidelines = [
    {
      title: "100% Smartboard Interactive Lessons",
      description: "Digital multimedia asset repository mapped to CISCE English, Math, Science, and Social Studies modules.",
      action: "Smartboard Lesson Banks",
    },
    {
      title: "Competency-Based Assessment (NEP 2020)",
      description: "Rubrics evaluating analytical thinking and experiential application over rote memorization.",
      action: "Assessment Rubrics",
    },
    {
      title: "16:1 Student Care & Individual Guidance",
      description: "Small class sizes allowing educators to track formative milestones and differentiated learning support.",
      action: "Student Progress Logs",
    },
  ];

  const facultyBulletins = [
    {
      date: "Oct 10, 2026",
      title: "Submission of Term 2 Diagnostic Assessment Question Papers",
      department: "Academic Directorate",
    },
    {
      date: "Oct 15, 2026",
      title: "Faculty Workshop: Integrating Digital Simulations in Middle School Science",
      department: "Curriculum Division",
    },
    {
      date: "Oct 22, 2026",
      title: "Quarterly Parent-Teacher Consultations Schedule Finalized",
      department: "Student Affairs",
    },
  ];

  return (
    <div>
      <PageHeader
        badge="Portal: Teachers"
        title="Teachers & Faculty Hub"
        description="Empowering Kids Den educators with 100% smartboard instructional tools, CISCE lesson planning resources, NEP 2020 competency rubrics, and faculty administrative circulars."
        breadcrumbs={[
          { label: "Portals" },
          { label: "Teachers" },
        ]}
      />

      <div className="container-kds py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Switcher Banner Callout */}
        <div className="p-4 sm:p-5 bg-[#E6F4EA] rounded-2xl border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
              <IconChalkboard className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-[#202124]">Currently viewing: Teachers Website View</span>
              <p className="text-[#5F6368] text-xs">Switch to Student or Library view anytime using the 3-dots menu in the top bar.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Link
              href="/student"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-emerald-700 border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Student
            </Link>
            <Link
              href="/library"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-emerald-700 border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Library
            </Link>
          </div>
        </div>

        {/* Faculty Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pedagogicalGuidelines.map((item, idx) => (
            <div key={idx} className="card-editorial p-6 sm:p-7 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  {idx === 0 ? (
                    <IconDeviceLaptop className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <IconCertificate className="w-5 h-5" />
                  ) : (
                    <IconUsers className="w-5 h-5" />
                  )}
                </div>
                <h3 className="font-medium text-lg text-gray-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span>{item.action}</span>
                <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Bulletins & Lesson Bank */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#F8FAFD] rounded-2xl p-6 sm:p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-medium text-xl text-gray-900 flex items-center gap-2">
                <IconFileSpreadsheet className="w-5 h-5 text-emerald-700" />
                <span>Academic Directorate Notices</span>
              </h3>
              <span className="text-xs text-gray-500">Official Circulars</span>
            </div>
            <div className="space-y-3">
              {facultyBulletins.map((b, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-gray-200 shadow-2xs space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-emerald-700 text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                      {b.department}
                    </span>
                    <span className="text-gray-400 text-[11px]">{b.date}</span>
                  </div>
                  <h4 className="font-medium text-sm text-gray-900">{b.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 space-y-5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A73E8] flex items-center justify-center">
              <IconBriefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-900">Educator Careers & Talent Pool</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Kids Den School welcomes passionate teachers across English, Mathematics, Sciences, and Early Years pedagogy. Review current vacancies or join our verified talent database.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <Link
                href="/jobs"
                className="btn-pill-primary w-full justify-center text-xs"
              >
                <span>View Teaching Vacancies</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/jobs/archive"
                className="btn-pill-action w-full justify-center text-xs"
              >
                <span>Browse Vacancy Archive</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
