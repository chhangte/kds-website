"use client";

import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { IconMapPin, IconClock, IconPhone, IconCheck } from "@tabler/icons-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admissions Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div>
      <PageHeader
        badge="Get in Touch"
        title="Contact Us & Campus Directions"
        description="We look forward to welcoming you to Kids Den School. Reach out to our admissions helpdesk, visit our campus in Chaltlang Salem Veng, or send us a message."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Core Campus Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-editorial p-7 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#0F52BA] flex items-center justify-center mb-4">
              <IconMapPin className="w-5 h-5 text-[#0F52BA]" />
            </div>
            <h3 className="font-medium text-lg font-bold text-gray-900">
              Campus Address
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Kids Den School<br />
              A-II A/40, Chaltlang Salem Veng<br />
              Aizawl, Mizoram, India 796012
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#0F52BA] font-semibold">
              Near Chaltlang Community Hall
            </div>
          </div>

          <div className="card-editorial p-7 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#FEF9E7] text-[#FFAA1D] flex items-center justify-center mb-4">
              <IconClock className="w-5 h-5 text-[#FFAA1D]" />
            </div>
            <h3 className="font-medium text-lg font-bold text-gray-900">
              Office Hours
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              <strong>Monday – Friday:</strong> 09:00 – 15:00<br />
              <strong>Saturday:</strong> 09:30 – 12:30 (Admissions only)<br />
              <strong>Sunday &amp; Gazetted Holidays:</strong> Closed
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-medium">
              Appointments recommended for principal interaction
            </div>
          </div>

          <div className="card-editorial p-7 bg-white">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] text-emerald-600 flex items-center justify-center mb-4">
              <IconPhone className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-medium text-lg font-bold text-gray-900">
              Direct Inquiries
            </h3>
            <div className="text-xs text-gray-600 mt-2 space-y-1">
              <div><strong>General Office:</strong> +91 389 234 1234</div>
              <div><strong>Admissions Desk:</strong> +91 389 234 5678</div>
              <div><strong>Email:</strong> info@kidsdenschool.in</div>
              <div><strong>Admissions:</strong> admissions@kidsdenschool.in</div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-[#0F52BA] font-semibold">
              Prompt email responses within 24 hours
            </div>
          </div>
        </div>

        {/* Section 2: Contact Form + Campus Buildings Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#DADCE0] shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Message Administration
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#202124] mt-1 mb-6">
              Send an Inquiry or Schedule a Visit
            </h2>

            {isSubmitted ? (
              <div className="p-6 sm:p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <IconCheck className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                  Message Successfully Received!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to the relevant department. Our office will contact you via email ({formData.email}) or phone ({formData.phone || "provided"}).
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold px-5 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Zoramthanga"
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. parent@example.com"
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Mobile / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                    >
                      <option value="Admissions Inquiry">Admissions 2027–2028 &amp; KIDSET</option>
                      <option value="Campus Tour">Schedule Campus Visit</option>
                      <option value="Fee Queries">Fee Structure &amp; Installments</option>
                      <option value="Academic Question">Curriculum &amp; Smart Classrooms</option>
                      <option value="General Admin">General Administrative Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Message / Student Grade Level *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify child's prospective grade, current school, and any questions..."
                    className="w-full text-base sm:text-xs px-3.5 py-3 sm:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0F52BA]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#0F52BA] hover:bg-[#0A3E8F] text-white text-xs font-semibold transition-colors disabled:opacity-60 shadow-sm"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry to Office"}
                </button>
              </form>
            )}
          </div>

          {/* Campus Facilities & Directions Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFD] p-7 rounded-3xl border border-[#DADCE0]">
              <h3 className="font-medium text-xl font-bold text-[#202124] mb-3">
                Campus Buildings Breakdown
              </h3>
              <div className="space-y-4 text-xs text-gray-700">
                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <span className="font-bold text-[#0F52BA] block mb-0.5">
                    Building A: Main Administration &amp; Middle Wing
                  </span>
                  <span>Houses the Principal&apos;s Office, Admissions Reception, Classes VI–VIII, and Staff Lounge.</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <span className="font-bold text-[#0F52BA] block mb-0.5">
                    Building B: Junior Kindergarten &amp; Primary Wing
                  </span>
                  <span>Dedicated child-safe early learning rooms, playroom, and Classes I–V smartboard classrooms.</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-200">
                  <span className="font-bold text-[#0F52BA] block mb-0.5">
                    Building C: Science &amp; Activity Complex
                  </span>
                  <span>1,000+ book library, modern physics/chemistry/biology laboratories, computer coding lab, and art studio.</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F5FD] p-7 rounded-3xl border border-[#BED8FF]">
              <h3 className="font-medium text-lg font-bold text-[#202124] mb-2">
                Transit &amp; Getting Here
              </h3>
              <p className="text-xs text-[#5F6368] leading-relaxed">
                Kids Den School is located in the scenic Chaltlang Salem Veng area of Aizawl. Visitors traveling by public bus can disembark at the <strong>Chaltlang Bus Stand</strong>; campus is a 4-minute walk along the Salem Veng access road. Taxi drops are available directly at the main entrance gate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
