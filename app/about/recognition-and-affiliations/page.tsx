import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { IconBuildingBank, IconCertificate } from "@tabler/icons-react";

export default function RecognitionPage() {
  return (
    <div>
      <PageHeader
        badge="Institutional Credentials"
        title="Recognitions & Affiliation"
        description="Kids Den School operates with official registration, educational department approval from the Government of Mizoram, and strict adherence to the national CISCE academic standards."
        breadcrumbs={[
          { label: "About", href: "/about/recognition-and-affiliations" },
          { label: "Recognitions & Affiliation" },
        ]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Verification Overview */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DADCE0] shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Official Authorizations
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Government Recognition &amp; Academic Governance
            </h2>
            <p className="text-sm text-[#5F6368] mt-2 leading-relaxed">
              Kids Den School was established in 2011 in Aizawl, Mizoram. Over 15 years, the institution has upheld exemplary educational compliance, safe infrastructure protocols, and professional teacher qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#0F52BA] flex items-center justify-center mb-4">
                <IconBuildingBank className="w-6 h-6 text-[#0F52BA]" />
              </div>
              <h3 className="font-medium text-xl font-bold text-[#202124]">
                Government of Mizoram Recognition
              </h3>
              <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                Registered and recognized by the Directorate of School Education, Government of Mizoram, conforming to the Mizoram School Education Act, RTE norms, student safety guidelines, and sanitization standards.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-medium text-gray-700">
                Status: Fully Registered &amp; Approved Institutional Body
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#FFAA1D] flex items-center justify-center mb-4">
                <IconCertificate className="w-6 h-6 text-[#FFAA1D]" />
              </div>
              <h3 className="font-medium text-xl font-bold text-[#202124]">
                CISCE Curriculum Alignment
              </h3>
              <p className="text-xs text-[#5F6368] mt-2 leading-relaxed">
                Curriculum, instructional syllabi, student competencies, and examination frameworks follow the Council for the Indian School Certificate Examinations (CISCE), New Delhi curriculum guidelines for Preschool through Middle School.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-medium text-gray-700">
                Status: CISCE Syllabus Aligned Standards
              </div>
            </div>
          </div>
        </section>

        {/* School Milestones */}
        <section>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Our Journey
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Key Institutional Milestones
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              From a humble kindergarten in 2011 to a premier institution serving over 800 students.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-editorial p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-[#0F52BA] text-white text-xs font-bold rounded-lg font-medium">
                  2011
                </span>
                <div>
                  <h4 className="font-medium text-base font-bold text-[#202124]">
                    Founding of Kids Den School
                  </h4>
                  <p className="text-xs text-[#5F6368] mt-0.5">
                    Founded in Aizawl, Mizoram with an initial cohort of preschool students and a mission to nurture compassionate, inquisitive minds.
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium shrink-0">Inception</span>
            </div>

            <div className="card-editorial p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-[#0F52BA] text-white text-xs font-bold rounded-lg font-medium">
                  2016
                </span>
                <div>
                  <h4 className="font-medium text-base font-bold text-[#202124]">
                    Expansion to Full Primary &amp; Middle Wing
                  </h4>
                  <p className="text-xs text-[#5F6368] mt-0.5">
                    Campus expanded to include modern science laboratories, computer labs, and Class VIII cohorts.
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium shrink-0">Campus Growth</span>
            </div>

            <div className="card-editorial p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-[#0F52BA] text-white text-xs font-bold rounded-lg font-medium">
                  2020
                </span>
                <div>
                  <h4 className="font-medium text-base font-bold text-[#202124]">
                    100% Interactive Smartboard Modernization
                  </h4>
                  <p className="text-xs text-[#5F6368] mt-0.5">
                    Every classroom upgraded with high-definition digital smartboards and interactive pedagogical software.
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium shrink-0">Digital Leap</span>
            </div>

            <div className="card-editorial p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-[#0F52BA] text-white text-xs font-bold rounded-lg font-medium">
                  Today
                </span>
                <div>
                  <h4 className="font-medium text-base font-bold text-[#202124]">
                    800+ Students &amp; 50+ Dedicated Educators
                  </h4>
                  <p className="text-xs text-[#5F6368] mt-0.5">
                    A vibrant community upholding academic excellence, co-curricular sports, and values-grounded citizenship.
                  </p>
                </div>
              </div>
              <span className="text-xs text-emerald-600 font-medium shrink-0">Current Milestone</span>
            </div>
          </div>
        </section>

        {/* Affiliation Inquiries CTA */}
        <section className="bg-[#F0F5FD] rounded-2xl p-8 border border-[#BED8FF] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-medium text-xl font-bold text-[#202124]">
              Need Official Verification or Transfer Certificates?
            </h3>
            <p className="text-xs text-[#5F6368] mt-1">
              Our administrative office processes student records, transfer certificates (TC), and academic transcripts during office hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[#0F52BA] text-white text-xs font-semibold hover:bg-[#0A3E8F] transition-colors shrink-0"
          >
            Contact Administration
          </Link>
        </section>
      </div>
    </div>
  );
}
