import React from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

interface HistoricVacancy {
  id: string;
  role: string;
  department: string;
  sessionClosed: string;
  qualification: string;
  salaryBand: string;
  interviewFormat: string;
  responsibilities: string[];
}

const HISTORIC_VACANCIES: HistoricVacancy[] = [
  {
    id: "v1",
    role: "Trained Graduate Teacher (TGT) – Mathematics",
    department: "Middle School (Classes VI – VIII)",
    sessionClosed: "Recruitment Closed (Session 2025–2026)",
    qualification: "B.Sc (Mathematics) with B.Ed from a recognized university. Minimum 2 years teaching experience in CISCE/CBSE.",
    salaryBand: "₹28,000 – ₹36,000 / month (Commensurate with experience & credentials)",
    interviewFormat: "Written subject competency test, 20-minute classroom demo lesson on smartboard, and personal interview.",
    responsibilities: [
      "Deliver interactive geometry, algebra, and commercial arithmetic lessons using digital smartboards.",
      "Conduct remedial mathematics problem-solving circles for struggling learners.",
      "Prepare term assessments aligning with CISCE guidelines.",
    ],
  },
  {
    id: "v2",
    role: "Primary School Teacher (PRT) – English & EVS",
    department: "Primary Wing (Classes I – III)",
    sessionClosed: "Recruitment Closed (Session 2024–2025)",
    qualification: "B.A. (English) with D.El.Ed or B.Ed. Excellent fluency in spoken English and passion for early childhood nurturing.",
    salaryBand: "₹22,000 – ₹28,000 / month",
    interviewFormat: "Oral communication interview, phonics reading demonstration, and interactive children's story session.",
    responsibilities: [
      "Facilitate foundational literacy, phonics, reading fluency, and environmental awareness.",
      "Maintain 360-degree student formative development records.",
      "Collaborate with parents on developmental milestones.",
    ],
  },
  {
    id: "v3",
    role: "Computer Science & Digital Literacy Instructor",
    department: "Middle & Primary Wings (Classes III – VIII)",
    sessionClosed: "Recruitment Closed (Session 2024–2025)",
    qualification: "BCA / B.Sc (Computer Science) / B.Tech. Strong command of basic coding logic, digital citizenship, and smartboard operations.",
    salaryBand: "₹24,000 – ₹30,000 / month",
    interviewFormat: "Practical lab demonstration, logic problem explanation, and viva voce.",
    responsibilities: [
      "Manage student computer laboratory and guide introductory programming concepts.",
      "Educate students in digital ethics, online safety, and office productivity tools.",
      "Assist faculty with smartboard instructional media integration.",
    ],
  },
  {
    id: "v4",
    role: "Science Laboratory Assistant",
    department: "Science Laboratories (Classes IV – VIII)",
    sessionClosed: "Recruitment Closed (Session 2023–2024)",
    qualification: "B.Sc / Higher Secondary with Science background. Familiarity with chemical handling, microscope preparation, and lab inventory.",
    salaryBand: "₹18,000 – ₹22,000 / month",
    interviewFormat: "Laboratory apparatus setup practical test and safety protocol viva.",
    responsibilities: [
      "Prepare experimental solutions, specimen slides, and equipment before practical classes.",
      "Maintain safety compliance, chemical storage guidelines, and equipment logs.",
      "Assist subject educators during demonstrations.",
    ],
  },
];

export default function JobsArchivePage() {
  return (
    <div>
      <PageHeader
        badge="Recruitment Archive"
        title="Historical Vacancies Archive"
        description="Reference archive of previously advertised positions at Kids Den School, including required qualifications, pay scales, interview formats, and job responsibilities."
        breadcrumbs={[
          { label: "Careers", href: "/jobs" },
          { label: "Archive" },
        ]}
      />

      <div className="container-kds py-16 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 gap-4">
          <p>
            ℹ Note: All positions listed below are currently <strong>closed and archived</strong> for historical reference and applicant guidance.
          </p>
          <Link
            href="/jobs"
            className="shrink-0 font-semibold text-[#0F52BA] hover:underline"
          >
            ← Back to Active Careers &amp; Talent Pool
          </Link>
        </div>

        {/* Vacancies List */}
        <div className="space-y-6">
          {HISTORIC_VACANCIES.map((vac) => (
            <div
              key={vac.id}
              className="card-editorial p-7 bg-white rounded-2xl border border-[#DADCE0] shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100 gap-2">
                <div>
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {vac.department}
                  </span>
                  <h3 className="font-medium text-xl font-bold text-[#202124] mt-0.5">
                    {vac.role}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full border border-gray-200">
                  {vac.sessionClosed}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 text-xs text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Minimum Qualification</h4>
                  <p className="leading-relaxed text-gray-600">{vac.qualification}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Pay Scale &amp; Remuneration</h4>
                  <p className="leading-relaxed text-[#0F52BA] font-semibold">{vac.salaryBand}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-bold text-gray-900 mb-1">Selection &amp; Interview Process</h4>
                  <p className="leading-relaxed text-gray-600">{vac.interviewFormat}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 text-xs mb-2">Key Role Responsibilities:</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {vac.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <span className="text-[#0F52BA]">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bio-Data Sheet Guidance */}
        <div className="bg-[#F8FAFD] rounded-2xl p-8 border border-gray-200">
          <h3 className="font-medium text-lg font-bold text-[#202124] mb-2">
            Sample Bio-Data Sheet Guidelines
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">
            When future openings are announced, applicants are required to submit an updated Bio-Data sheet featuring: Full Name, Permanent &amp; Present Address in Mizoram, Contact Number, Academic Qualifications (from Class X through Post-Graduation/B.Ed with marks &amp; board), Teaching Experience details, and Two Professional References.
          </p>
          <div className="mt-4">
            <Link
              href="/jobs"
              className="inline-flex items-center text-xs font-semibold text-[#0F52BA] hover:underline"
            >
              <span>Submit your profile to our Talent Pool</span>
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
