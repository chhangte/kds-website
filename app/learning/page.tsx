import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { IconPlant2, IconBook2, IconMicroscope, IconCheck, IconArrowRight } from "@tabler/icons-react";

export default function LearningPage() {
  return (
    <div>
      <PageHeader
        badge="Academics & Life"
        title="Learning at Kids Den School"
        description="A holistic, student-centered environment combining CISCE curriculum rigor with 100% interactive smartboards, creative arts, well-equipped science laboratories, and over 1,000 curated library books."
        breadcrumbs={[{ label: "Learning" }]}
      />

      <div className="container-kds py-16 space-y-20">
        {/* Section 1: The Three Developmental Stages */}
        <section>
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Academic Stages
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Our Academic Continuum
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              From early sensory exploration to analytical middle school inquiry, our curriculum is carefully mapped to support developmental growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <div className="card-editorial p-7 bg-white rounded-2xl border border-[#DADCE0]">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] text-[#0F52BA] flex items-center justify-center mb-4">
                <IconPlant2 className="w-6 h-6 text-[#0F52BA]" />
              </div>
              <span className="text-xs font-bold text-[#0F52BA] uppercase tracking-wider">
                Preschool to KG-II
              </span>
              <h3 className="font-medium text-xl font-bold text-[#202124] mt-1">
                Early Foundational Years
              </h3>
              <p className="text-xs text-[#5F6368] mt-3 leading-relaxed">
                Play-based phonics, gross and fine motor coordination, numbers, shapes, rhymes, and sensory exploration that cultivate joyful confidence and ease with peers.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 space-y-1">
                <div>• Interactive storytelling &amp; circle time</div>
                <div>• Creative messy play &amp; clay sculpting</div>
                <div>• Smart phonics &amp; audio-visual rhymes</div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="card-editorial p-7 bg-white rounded-2xl border border-[#DADCE0]">
              <div className="w-12 h-12 rounded-xl bg-[#FEF9E7] text-[#FFAA1D] flex items-center justify-center mb-4">
                <IconBook2 className="w-6 h-6 text-[#FFAA1D]" />
              </div>
              <span className="text-xs font-bold text-[#FFAA1D] uppercase tracking-wider">
                Classes I to III
              </span>
              <h3 className="font-medium text-xl font-bold text-[#202124] mt-1">
                Primary Foundations
              </h3>
              <p className="text-xs text-[#5F6368] mt-3 leading-relaxed">
                Transitioning to structured literacy, computational arithmetic, environmental studies, and artistic expression. Children begin discovering how everyday phenomena connect.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 space-y-1">
                <div>• Bilingual clarity (English &amp; regional expression)</div>
                <div>• Mathematics with physical manipulatives</div>
                <div>• Environmental studies &amp; nature walks</div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="card-editorial p-7 bg-white rounded-2xl border border-[#DADCE0]">
              <div className="w-12 h-12 rounded-xl bg-[#E6F4EA] text-emerald-600 flex items-center justify-center mb-4">
                <IconMicroscope className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Classes IV to VIII
              </span>
              <h3 className="font-medium text-xl font-bold text-[#202124] mt-1">
                Middle School Inquiry
              </h3>
              <p className="text-xs text-[#5F6368] mt-3 leading-relaxed">
                Rigorous CISCE-aligned coursework across Physics, Chemistry, Biology, History, Civics, Geography, Mathematics, and Computer Science with hands-on lab experiments.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-medium text-gray-700 space-y-1">
                <div>• Laboratory experiments &amp; scientific method</div>
                <div>• Debate, rhetoric &amp; essay composition</div>
                <div>• Computer programming &amp; digital ethics</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 100% Smart Classrooms & Digital Pedagogy */}
        <section id="smartboards" className="bg-[#F8FAFD] rounded-3xl p-8 sm:p-12 border border-[#DADCE0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                Modern Infrastructure
              </span>
              <h2 className="font-medium text-3xl font-bold text-[#202124]">
                100% Smart Classrooms in Every Grade
              </h2>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Every classroom at Kids Den School is outfitted with high-definition interactive smartboards. Rather than abstract memorization, our teachers bring geography to life through satellite mapping, visualize molecular biology with 3D models, and conduct interactive geometry demonstrations.
              </p>
              <ul className="space-y-3 text-xs text-gray-800">
                <li className="flex items-center space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>Audio-visual simulations tailored to CISCE syllabi</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>Interactive problem-solving directly on screen during lessons</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0F52BA] text-white flex items-center justify-center shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>High student engagement with immediate visual feedback</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/learning/curriculum"
                  className="inline-flex items-center text-xs font-semibold px-5 py-2.5 rounded-full bg-[#0F52BA] text-white hover:bg-[#0A3E8F] transition-colors gap-1.5"
                >
                  <span>Read Detailed Curriculum Specs</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#DADCE0]">
                <Image
                  src="/images/hero-campus.jpg"
                  alt="Kids Den School smartboard classroom demonstration in Aizawl"
                  width={600}
                  height={400}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Curated Library with over 1,000 Books */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DADCE0] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#DADCE0]">
                <Image
                  src="/images/library.jpg"
                  alt="Kids Den School library with students reading"
                  width={600}
                  height={400}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFAA1D]">
                Literary Culture
              </span>
              <h2 className="font-medium text-3xl font-bold text-[#202124]">
                A Curated Library of Over 1,000 Books
              </h2>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Reading is the cornerstone of lifelong curiosity. The Kids Den School library houses over 1,000 carefully cataloged titles—from classic children&apos;s literature and illustrated encyclopedias to modern young adult fiction, science anthologies, and regional folklore.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-gray-200">
                  <div className="text-xl font-bold text-[#0F52BA] font-medium">Weekly</div>
                  <div className="text-xs text-gray-700 mt-1">Dedicated library borrowing &amp; reading periods</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-gray-200">
                  <div className="text-xl font-bold text-[#0F52BA] font-medium">Reading Circles</div>
                  <div className="text-xs text-gray-700 mt-1">Book reviews and author spotlight sessions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Science Laboratory & Creative Arts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-editorial p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                <Image
                  src="/images/science-lab.jpg"
                  alt="Students performing science laboratory experiments"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-2xl font-bold text-[#202124]">
                Science &amp; STEM Laboratories
              </h3>
              <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                Equipped with compound microscopes, chemistry glassware, specimen slides, optics prisms, and basic electronic circuit boards. Students observe laws of physics and biology through safe, guided practical work.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-[#0F52BA]">
              Hands-on practical sessions every week
            </div>
          </div>

          <div className="card-editorial p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                <Image
                  src="/images/arts-crafts.jpg"
                  alt="Students creating watercolor paintings and craft models"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-2xl font-bold text-[#202124]">
                Fine Arts &amp; Creative Studio
              </h3>
              <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                Drawing, watercolor painting, clay modeling, origami, and traditional Mizo craft appreciation allow students to develop aesthetic sensitivity and joyful spatial imagination.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-[#0F52BA]">
              Annual student art and craft exhibitions
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
