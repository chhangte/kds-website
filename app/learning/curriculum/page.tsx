import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { IconSchool } from "@tabler/icons-react";

export default function CurriculumPage() {
  return (
    <div>
      <PageHeader
        badge="Academic Framework"
        title="CISCE-Aligned Curriculum & Pedagogy"
        description="Our academic syllabus is structured in alignment with the Council for the Indian School Certificate Examinations (CISCE) and National Education Policy (NEP) 2020 guidelines, emphasizing deep conceptual understanding and holistic character growth."
        breadcrumbs={[
          { label: "Learning", href: "/learning" },
          { label: "Curriculum" },
        ]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Core Pillars */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DADCE0] shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Academic Vision
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              The CISCE Advantage at Kids Den
            </h2>
            <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
              The CISCE curriculum is renowned nationally for its balanced depth in languages, humanities, sciences, and mathematics. At Kids Den School, we enrich this standard through interactive smartboards, continuous formative assessments, and experiential discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#F8FAFD] border border-gray-200">
              <div className="text-sm font-bold text-[#0F52BA] uppercase tracking-wider mb-2">
                Pillar 1
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                Language &amp; Communication Mastery
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Emphasis on phonetics, analytical reading comprehension, creative composition, and public speaking in English, paired with regional linguistic respect.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAFD] border border-gray-200">
              <div className="text-sm font-bold text-[#0F52BA] uppercase tracking-wider mb-2">
                Pillar 2
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                Analytical Mathematics &amp; Logic
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Transitioning from hands-on math manipulatives in primary classes to algebraic reasoning, geometry, and real-life data interpretation in middle school.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F8FAFD] border border-gray-200">
              <div className="text-sm font-bold text-[#0F52BA] uppercase tracking-wider mb-2">
                Pillar 3
              </div>
              <h3 className="font-medium text-lg font-bold text-gray-900">
                Inquiry-Based Scientific Method
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Hypothesis formulation, observation, and experiment-led deduction in physics, chemistry, biology, and environmental sciences.
              </p>
            </div>
          </div>
        </section>

        {/* Subject Matrix by Grade Level */}
        <section>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Subject Distribution
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Curricular Subjects Matrix
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              A comprehensive overview of core subjects and co-scholastic learning areas taught at each grade band.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Wing */}
            <div className="card-editorial p-7 bg-white">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-medium text-xl font-bold text-[#202124]">
                  Primary School (Classes I – III)
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#E8F0FE] text-[#0F52BA]">
                  Foundational
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-xs text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#0F52BA]">•</span>
                  <span><strong>English:</strong> Phonics, graded readers, handwriting, simple grammar, rhymes &amp; storytelling.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#0F52BA]">•</span>
                  <span><strong>Second Language / Hindi / Mizo:</strong> Basic vocabulary, listening comprehension, conversational fluency.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#0F52BA]">•</span>
                  <span><strong>Mathematics:</strong> Number sense, place values, fundamental operations (+, -, ×, ÷), shapes &amp; measurement.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#0F52BA]">•</span>
                  <span><strong>Environmental Studies (EVS):</strong> Our body, plants, animals, neighborhood community, weather, and basic safety.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#0F52BA]">•</span>
                  <span><strong>Co-Scholastic:</strong> Drawing, singing, physical education games, moral value instruction.</span>
                </li>
              </ul>
            </div>

            {/* Middle School Wing */}
            <div className="card-editorial p-7 bg-white">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="font-medium text-xl font-bold text-[#202124]">
                  Middle School (Classes IV – VIII)
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FEF9E7] text-[#FFAA1D]">
                  Preparatory CISCE
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-xs text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#FFAA1D]">•</span>
                  <span><strong>English Language &amp; Literature:</strong> Formal essay writing, comprehension passages, poetry analysis, prose study.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#FFAA1D]">•</span>
                  <span><strong>Mathematics:</strong> Integers, rational numbers, algebra, commercial arithmetic, geometry, mensuration.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#FFAA1D]">•</span>
                  <span><strong>Sciences (Physics, Chemistry, Biology):</strong> Separated disciplines with laboratory experiments and practical journals.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#FFAA1D]">•</span>
                  <span><strong>Social Studies:</strong> History (ancient, medieval, modern Indian), Civics, and World &amp; Indian Physical Geography.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold text-[#FFAA1D]">•</span>
                  <span><strong>Computer Science &amp; Coding:</strong> Basic algorithms, office productivity, digital citizenship, introductory logic.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* NEP 2020 Alignment Card */}
        <section className="bg-[#F0F5FD] rounded-3xl p-8 sm:p-12 border border-[#BED8FF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                National Reform
              </span>
              <h3 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124]">
                Alignment with National Education Policy (NEP) 2020
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Kids Den School proactively implements the core mandates of NEP 2020:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-800 pt-2">
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <strong>FLN Priority:</strong> Foundational Literacy and Numeracy prioritized in all early grade milestones.
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <strong>No Rigid Silos:</strong> Cross-curricular connections between science, art, and environmental awareness.
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <strong>Formative Assessment:</strong> Continuous 360-degree holistic progress cards replacing single exam stress.
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-100">
                  <strong>Experiential Pedagogy:</strong> Hands-on projects, field trips in Aizawl, and interactive smartboards.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#DADCE0] text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#0F52BA] mx-auto flex items-center justify-center mb-3">
                <IconSchool className="w-6 h-6 text-[#0F52BA]" />
              </div>
              <h4 className="font-medium text-lg font-bold text-gray-900">
                Ready to Join Our Classes?
              </h4>
              <p className="text-xs text-gray-500 mt-2">
                Review our 3-step admission process or explore the KIDSET test syllabus.
              </p>
              <div className="mt-4 space-y-2">
                <Link
                  href="/admission"
                  className="block w-full py-2.5 text-xs font-semibold bg-[#0F52BA] text-white rounded-full hover:bg-[#0A3E8F] transition-colors"
                >
                  View Admissions
                </Link>
                <Link
                  href="/admission/kidset"
                  className="block w-full py-2.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  KIDSET Entrance Test
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
