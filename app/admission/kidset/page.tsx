"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { IconCheck, IconClock, IconClipboardList } from "@tabler/icons-react";

interface AssessmentTier {
  level: string;
  grades: string;
  duration: string;
  format: string;
  focusAreas: string[];
  assessmentStyle: string;
}

const ASSESSMENT_TIERS: AssessmentTier[] = [
  {
    level: "Middle School",
    grades: "Classes IV to VIII",
    duration: "75 Minutes",
    format: "Written Scholastic Paper & Conversational Interview",
    assessmentStyle: "Evaluates conceptual understanding, logical problem solving, and expressive clarity rather than pure rote reproduction.",
    focusAreas: [
      "English: Reading comprehension, creative writing snippet, grammar & vocabulary",
      "Mathematics: Numerical operations, fractions, basic geometry, and real-world word problems",
      "General Science & Inquiry: Basic scientific observation, environmental phenomena, logical reasoning",
      "Verbal Interaction: Brief 10-minute student conversation on hobbies, favorite books, and interests",
    ],
  },
  {
    level: "Primary School",
    grades: "Classes I to III",
    duration: "45 Minutes",
    format: "Activity Worksheet & Guided Oral Interaction",
    assessmentStyle: "Low-stress, colorful activity sheet designed to gauge foundational literacy, number sense, and active curiosity.",
    focusAreas: [
      "Foundational Literacy: Phonics, sentence reading, simple sight words, and penmanship",
      "Early Numeracy: Counting, addition, subtraction, shape identification, and pattern logic",
      "Observation & Picture Talk: Describing a colorful picture scene to evaluate verbal expression",
      "Social Readiness: Listening attentively to classroom prompts and collaborative warmth",
    ],
  },
  {
    level: "Kindergarten",
    grades: "KG-I & KG-II",
    duration: "30 Minutes",
    format: "Play-Based Evaluation & Observation",
    assessmentStyle: "No formal written test. Conducted in a welcoming classroom setting with games, blocks, and picture flashcards.",
    focusAreas: [
      "Cognitive Recognition: Basic colors, shapes, letters, and numbers (1–20)",
      "Fine Motor Readiness: Pencil grip, block stacking, clay molding, and drawing simple lines",
      "Communication: Expressing thoughts in simple English or mother tongue, responding to names & stories",
      "Sociability: Willingness to participate in group songs and interactive circle time",
    ],
  },
  {
    level: "Early Years",
    grades: "Preschool (Nursery)",
    duration: "20 Minutes",
    format: "Informal Play Observation & Parent-Teacher Chat",
    assessmentStyle: "Warm, gentle interaction designed to welcome the child to a loving school environment with toys, rhymes, and crayons.",
    focusAreas: [
      "Developmental Milestones: Physical coordination, jumping, grabbing, and sensory exploration",
      "Emotional Comfort: Ease of separation from parent in a play environment",
      "Response to Rhythm & Music: Clapping along with nursery rhymes and musical toys",
      "Parent Discussion: Understanding the child's bedtime, eating habits, language comfort, and home routines",
    ],
  },
];

export default function KidsetPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <PageHeader
        badge="Entrance Assessment"
        title="KIDSET: Kids Den Scholastic Entrance Test"
        description="A student-centered assessment framework designed to understand each candidate's unique cognitive readiness, learning profile, and developmental milestones."
        breadcrumbs={[
          { label: "Admissions", href: "/admission" },
          { label: "KIDSET Assessment" },
        ]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Philosophy Intro */}
        <section className="bg-white rounded-2xl p-8 border border-[#DADCE0] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                Our Assessment Philosophy
              </span>
              <h2 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124]">
                Evaluating Potential, Not Memorization
              </h2>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                At Kids Den School, we believe tests should never intimidate a young child. KIDSET is structured to celebrate what children know, discover how they think, and identify where our teachers can best support their scholastic and personal growth.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-700">
                <span className="flex items-center space-x-1.5 bg-[#F0F5FD] px-3 py-1.5 rounded-full text-[#0F52BA] font-medium">
                  <IconCheck className="w-3.5 h-3.5 text-[#0F52BA]" />
                  <span>Child-friendly environment</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-[#F0F5FD] px-3 py-1.5 rounded-full text-[#0F52BA] font-medium">
                  <IconCheck className="w-3.5 h-3.5 text-[#0F52BA]" />
                  <span>No high-pressure ranking</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-[#F0F5FD] px-3 py-1.5 rounded-full text-[#0F52BA] font-medium">
                  <IconCheck className="w-3.5 h-3.5 text-[#0F52BA]" />
                  <span>Personalized teacher observation</span>
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[#F8FAFD] p-6 rounded-xl border border-blue-100 text-center">
              <div className="text-sm font-bold text-gray-800">Next Assessment Cycle</div>
              <div className="text-2xl font-bold font-medium text-[#0F52BA] mt-1">
                January 10–12, 2027
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Individual time slots assigned upon prospectus registration at our main campus.
              </p>
              <Link
                href="/admission"
                className="inline-block mt-4 text-xs font-semibold px-4 py-2 bg-[#0F52BA] text-white rounded-full hover:bg-[#0A3E8F] transition-colors"
              >
                Apply for Prospectus
              </Link>
            </div>
          </div>
        </section>

        {/* Grade-wise Tabbed Criteria (Classes IV-VIII, I-III, KG-II/I, Preschool) */}
        <section>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Grade-Specific Modules
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Assessment Criteria by Grade Level
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              Select your child&apos;s grade bracket below to review test format, duration, and key focus areas.
            </p>
          </div>

          {/* Grade Level Selector Tabs (Swipeable on mobile) */}
          <div className="flex overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex-nowrap sm:flex-wrap gap-2 mb-6 sm:mb-8 border-b border-gray-200 pb-3">
            {ASSESSMENT_TIERS.map((tier, idx) => (
              <button
                key={tier.level}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  activeTab === idx
                    ? "bg-[#0F52BA] text-white shadow-sm"
                    : "bg-[#F0F5FD] text-gray-700 hover:bg-[#E2EDFC]"
                }`}
              >
                {tier.grades} ({tier.level})
              </button>
            ))}
          </div>

          {/* Active Tab Details */}
          {ASSESSMENT_TIERS.map((tier, idx) => {
            if (idx !== activeTab) return null;

            return (
              <div
                key={tier.level}
                className="card-editorial p-5 sm:p-8 bg-white rounded-2xl border border-[#DADCE0] shadow-sm animate-fadeIn"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#0F52BA] uppercase tracking-wider">
                      {tier.level}
                    </span>
                    <h3 className="font-medium text-2xl font-bold text-[#202124]">
                      {tier.grades}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200">
                      <IconClock className="w-3.5 h-3.5 text-amber-700" />
                      <span>Duration: {tier.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full border border-blue-200">
                      <IconClipboardList className="w-3.5 h-3.5 text-blue-700" />
                      <span>Format: {tier.format}</span>
                    </span>
                  </div>
                </div>

                <div className="py-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Evaluation Approach
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tier.assessmentStyle}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                    Key Evaluation Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tier.focusAreas.map((area, areaIdx) => (
                      <div
                        key={areaIdx}
                        className="p-4 rounded-xl bg-[#F8FAFD] border border-gray-200 text-xs text-gray-800 flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0F52BA] text-white shrink-0 flex items-center justify-center font-bold text-[10px] mt-0.5">
                          {areaIdx + 1}
                        </div>
                        <span className="leading-relaxed">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Parent FAQs & Advice */}
        <section className="bg-[#F8FAFD] rounded-3xl p-8 sm:p-12 border border-[#DADCE0]">
          <h2 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124] mb-8">
            Frequently Asked Questions for Parents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="font-semibold text-sm text-gray-900 mb-2">
                How should parents prepare their children for KIDSET?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We encourage parents not to coach children with excessive pressure or anxiety. Regular reading habits, age-appropriate conversation, a good night’s rest, and an encouraging mindset are the best preparation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="font-semibold text-sm text-gray-900 mb-2">
                What documents are needed on the test day?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Please bring the official KIDSET Admit Card issued during registration, student stationery (pencils, eraser, ruler), and a water bottle.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="font-semibold text-sm text-gray-900 mb-2">
                When are results announced?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Assessment feedback and selection letters are announced within 7 working days following the test. Parents are invited for a friendly interaction to discuss curriculum pathways.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <h3 className="font-semibold text-sm text-gray-900 mb-2">
                What if my child has special learning needs?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Kids Den School practices inclusive learning. Please notify our counselors during prospectus submission so we can provide accommodating seating and sensory support during the assessment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
