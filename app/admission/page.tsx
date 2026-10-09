"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { IconMapPin, IconClock, IconMail, IconPhone, IconArrowRight } from "@tabler/icons-react";

interface FeeTier {
  grade: string;
  admissionNew: number;
  annualCharges: number;
  monthlyTuition: number;
  notes: string;
}

const FEE_SCHEDULE: FeeTier[] = [
  {
    grade: "Preschool (Nursery)",
    admissionNew: 8500,
    annualCharges: 6200,
    monthlyTuition: 1850,
    notes: "Includes play-kit, foundational craft items & smart nursery activities",
  },
  {
    grade: "Kindergarten (KG-I & KG-II)",
    admissionNew: 9500,
    annualCharges: 7000,
    monthlyTuition: 2100,
    notes: "Includes foundational phonics, smartboard modules & activity books",
  },
  {
    grade: "Primary (Classes I to III)",
    admissionNew: 11000,
    annualCharges: 8200,
    monthlyTuition: 2450,
    notes: "Covers computer labs, library access & co-curricular clubs",
  },
  {
    grade: "Middle School (Classes IV to VIII)",
    admissionNew: 12500,
    annualCharges: 9400,
    monthlyTuition: 2800,
    notes: "Includes science experimental labs, robotics, sports coaching & CISCE coursework",
  },
];

export default function AdmissionPage() {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(2);
  const [isExistingStudent, setIsExistingStudent] = useState(false);

  const selectedTier = FEE_SCHEDULE[selectedGradeIndex];
  const calculatedAdmission = isExistingStudent ? 0 : selectedTier.admissionNew;
  const calculatedAnnual = selectedTier.annualCharges;
  const calculatedYearlyTuition = selectedTier.monthlyTuition * 12;
  const totalEstimatedAnnualCost = calculatedAdmission + calculatedAnnual + calculatedYearlyTuition;

  return (
    <div>
      <PageHeader
        badge="Session 2027–2028"
        title="Admissions & Fee Guidelines"
        description="We welcome families seeking an inspiring, values-grounded CISCE education in Aizawl. Learn about our transparent 3-step application path, eligibility testing, and complete grade-wise fees."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <div className="container-kds py-16 space-y-20">
        {/* Section 1: The 3-Step Admissions Journey */}
        <section>
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Streamlined Application
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Your 3-Step Journey to Kids Den
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              Our admission process is designed to be supportive, fair, and transparent for every child and parent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card-editorial p-7 relative bg-white">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#0F52BA] font-bold text-lg flex items-center justify-center mb-5">
                1
              </div>
              <h3 className="font-medium text-xl font-bold text-[#202124]">
                Prospectus &amp; Registration
              </h3>
              <p className="text-sm text-[#5F6368] mt-3 leading-relaxed">
                Obtain the official school prospectus from the Main Office (Chaltlang Salem Veng) during office hours (09:00–15:00, Mon–Fri). Complete the student bio-data and submit required birth and academic certificates.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                Documents: Birth certificate, passport photos, previous report card (if applicable)
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-editorial p-7 relative bg-white border-[#BED8FF] shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#0F52BA] text-white font-bold text-lg flex items-center justify-center mb-5">
                2
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-xl font-bold text-[#202124]">
                  KIDSET Assessment
                </h3>
                <span className="text-[10px] font-bold bg-[#FEF9E7] text-[#FFAA1D] px-2 py-0.5 rounded uppercase">
                  Scholastic Test
                </span>
              </div>
              <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
                Candidates appear for the Kids Den Scholastic Entrance Test (KIDSET). Age-appropriate assessment evaluates literacy, numeracy, and cognitive readiness in an encouraging, low-stress setting.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#0F52BA]">
                <Link href="/admission/kidset" className="flex items-center gap-1 hover:underline">
                  <span>View Grade-Wise KIDSET Criteria</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-editorial p-7 relative bg-white">
              <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#0F52BA] font-bold text-lg flex items-center justify-center mb-5">
                3
              </div>
              <h3 className="font-medium text-xl font-bold text-[#202124]">
                Interaction &amp; Enrollment
              </h3>
              <p className="text-sm text-[#5F6368] mt-3 leading-relaxed">
                Results and admission offers are communicated promptly. Families complete enrollment verification, settle term fees, receive the uniform &amp; book pack, and attend the welcome orientation.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                Welcome Kit &amp; House allocation provided upon confirmation
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Comprehensive Grade-wise Fee Table */}
        <section id="fees" className="bg-[#F8FAFD] rounded-2xl sm:rounded-3xl p-5 sm:p-12 border border-[#DADCE0]">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Transparent Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#202124] mt-1">
              Fee Structure by Grade (2027–2028 Session)
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] mt-2">
              All fees are reviewed annually by school administration. Effective for the 2027–2028 Academic Session. No hidden charges.
            </p>
          </div>

          {/* Mobile Card View (For Phones <640px) */}
          <div className="block sm:hidden space-y-4">
            {FEE_SCHEDULE.map((tier) => (
              <div
                key={tier.grade}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <h3 className="font-semibold text-base text-[#0F52BA]">
                    {tier.grade}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#1A73E8]">
                    ₹{tier.monthlyTuition.toLocaleString("en-IN")}/mo
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[11px] text-gray-500 block">Admission Fee</span>
                    <span className="font-semibold text-gray-800 text-sm">
                      ₹{tier.admissionNew.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-gray-400 block">One-time (New)</span>
                  </div>
                  <div className="bg-[#F8FAFD] p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[11px] text-gray-500 block">Annual Charges</span>
                    <span className="font-semibold text-gray-800 text-sm">
                      ₹{tier.annualCharges.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-gray-400 block">Per session</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl leading-relaxed">
                  <strong className="text-gray-700">Inclusions: </strong>
                  {tier.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Table Container (Screens >= 640px) */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-xs">
            <table className="w-full text-left text-sm min-w-[620px]">
              <thead className="bg-[#F0F5FD] text-[#202124] border-b border-gray-200 text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-4 px-6">Grade / Level</th>
                  <th className="py-4 px-6">One-Time Admission Fee (New Students)</th>
                  <th className="py-4 px-6">Annual Session Charges</th>
                  <th className="py-4 px-6">Monthly Tuition Fee</th>
                  <th className="py-4 px-6">Curricular Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FEE_SCHEDULE.map((tier) => (
                  <tr key={tier.grade} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#0F52BA]">
                      {tier.grade}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      ₹{tier.admissionNew.toLocaleString("en-IN")}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      ₹{tier.annualCharges.toLocaleString("en-IN")}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-800">
                      ₹{tier.monthlyTuition.toLocaleString("en-IN")}/mo
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-500">
                      {tier.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-500 gap-3">
            <p>
              * Transport/bus facility, uniform sets, and external board examination fees are billed separately upon request.
            </p>
            <p className="font-medium text-gray-700">
              Payment mode: Net banking, UPI, or Bank Challan at State Bank of India.
            </p>
          </div>
        </section>

        {/* Section 3: Interactive Fee Calculator */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DADCE0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                  Parent Planning Tool
                </span>
                <h3 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124] mt-1">
                  Interactive Tuition &amp; Fee Estimator
                </h3>
                <p className="text-sm text-[#5F6368] mt-2">
                  Select your child&apos;s prospective grade level to estimate the first-year academic investment at Kids Den School.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Select Grade Level:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FEE_SCHEDULE.map((tier, idx) => (
                    <button
                      key={tier.grade}
                      type="button"
                      onClick={() => setSelectedGradeIndex(idx)}
                      className={`text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        selectedGradeIndex === idx
                          ? "border-[#0F52BA] bg-[#F0F5FD] text-[#0F52BA] font-bold shadow-xs"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      {tier.grade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="existingStudent"
                  checked={isExistingStudent}
                  onChange={(e) => setIsExistingStudent(e.target.checked)}
                  className="w-4 h-4 text-[#0F52BA] rounded border-gray-300 focus:ring-[#0F52BA]"
                />
                <label htmlFor="existingStudent" className="text-xs text-gray-700 font-medium cursor-pointer">
                  Existing Student re-enrolling (One-time Admission Fee waived)
                </label>
              </div>
            </div>

            {/* Estimated Calculation Summary Card */}
            <div className="lg:col-span-6 bg-[#F8FAFD] rounded-2xl p-7 border border-[#BED8FF]">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <span className="text-xs font-bold uppercase text-gray-500">Selected Level</span>
                <span className="text-sm font-bold text-[#0F52BA]">{selectedTier.grade}</span>
              </div>

              <div className="py-4 space-y-3 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Admission Fee (One-Time)</span>
                  <span className="font-semibold text-gray-900">
                    {isExistingStudent ? "Waived (₹0)" : `₹${calculatedAdmission.toLocaleString("en-IN")}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Development &amp; Smartboard Charges</span>
                  <span className="font-semibold text-gray-900">₹{calculatedAnnual.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuition Fee (₹{selectedTier.monthlyTuition.toLocaleString("en-IN")} × 12 months)</span>
                  <span className="font-semibold text-gray-900">₹{calculatedYearlyTuition.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Estimated Annual Total</span>
                  <p className="text-[11px] text-gray-500">Payable in quarterly or monthly installments</p>
                </div>
                <div className="text-2xl font-bold font-medium text-[#0F52BA]">
                  ₹{totalEstimatedAnnualCost.toLocaleString("en-IN")}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex gap-3">
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 rounded-full bg-[#0F52BA] hover:bg-[#0A3E8F] text-white text-xs font-semibold transition-colors"
                >
                  Contact Admissions Desk
                </Link>
                <Link
                  href="/admission/kidset"
                  className="w-full text-center py-2.5 rounded-full bg-white hover:bg-gray-50 text-[#0F52BA] border border-[#BED8FF] text-xs font-semibold transition-colors"
                >
                  View KIDSET Test
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Key Dates & Helpdesk */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-editorial p-7 bg-white">
            <h3 className="font-medium text-xl font-bold text-[#202124]">
              Important Admissions Timeline (2027–2028)
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-gray-700">
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Prospectus Distribution Commences</span>
                <span className="font-bold text-[#0F52BA]">November 01, 2026</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Last Date for Application Submission</span>
                <span className="font-bold text-[#0F52BA]">December 15, 2026</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">KIDSET Entrance Assessment Dates</span>
                <span className="font-bold text-[#0F52BA]">January 10–12, 2027</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="font-medium">First Admission List &amp; Formalities</span>
                <span className="font-bold text-emerald-600">January 20, 2027</span>
              </li>
            </ul>
          </div>

          <div className="card-editorial p-7 bg-[#F0F5FD] border-[#BED8FF]">
            <h3 className="font-medium text-xl font-bold text-[#202124]">
              Admissions Helpdesk &amp; Inquiries
            </h3>
            <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
              Have questions about age criteria, previous school transfer certificates, or the KIDSET entrance test? Our admissions office is here to guide you.
            </p>
            <div className="mt-4 space-y-2.5 text-xs text-gray-800">
              <p className="flex items-center gap-2">
                <IconMapPin className="w-4 h-4 text-[#0F52BA] shrink-0" />
                <span><strong>Location:</strong> Kids Den School, A-II A/40, Chaltlang Salem Veng, Aizawl</span>
              </p>
              <p className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-[#FFAA1D] shrink-0" />
                <span><strong>Hours:</strong> 09:00 – 15:00 (Monday to Friday)</span>
              </p>
              <p className="flex items-center gap-2">
                <IconMail className="w-4 h-4 text-[#0F52BA] shrink-0" />
                <span><strong>Email:</strong> admissions@kidsdenschool.in</span>
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Phone:</strong> +91 389 234 1234</span>
              </p>
            </div>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0F52BA] hover:underline"
              >
                <span>Find Campus Location &amp; Directions</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
