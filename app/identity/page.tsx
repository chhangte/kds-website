"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { IconCopy, IconCheck } from "@tabler/icons-react";

interface ColorSwatch {
  hex: string;
  name: string;
  role: string;
  textColor: string;
  border?: boolean;
}

const BRAND_COLORS: ColorSwatch[] = [
  {
    hex: "#0F52BA",
    name: "Deep Blue",
    role: "Primary brand color, buttons, important headlines, and active links",
    textColor: "#FFFFFF",
  },
  {
    hex: "#87CEFA",
    name: "Light Sky Blue",
    role: "Secondary accents, section surfaces, highlights, and subtle stages",
    textColor: "#202124",
  },
  {
    hex: "#FADA5E",
    name: "Warm Yellow",
    role: "Emphasis tags, crest borders, secondary highlights, and joyous badges",
    textColor: "#202124",
  },
  {
    hex: "#FFAA1D",
    name: "Warm Orange",
    role: "Curricular callouts, warm accents, and energetic event tags",
    textColor: "#202124",
  },
  {
    hex: "#3F3F3F",
    name: "Dark Gray",
    role: "Body copy, institutional subtitles, and editorial paragraph text",
    textColor: "#FFFFFF",
  },
  {
    hex: "#FFFFFF",
    name: "White",
    role: "Editorial card backgrounds, reversed text surfaces, and clean whitespace",
    textColor: "#202124",
    border: true,
  },
];

export default function IdentityPage() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div>
      <PageHeader
        badge="Brand & Visual Identity"
        title="Official Branding & Identity Guidelines"
        description="Authoritative reference for Kids Den School's published visual assets, color palette, typography hierarchy, and emblem standards based on the official identity documentation."
        breadcrumbs={[{ label: "Identity Guidelines" }]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Section 1: Official Color Palette */}
        <section>
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Section 2.1 — Brand Palette
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Official Color Swatches
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              Click any swatch card to copy the official hex code directly to your clipboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND_COLORS.map((swatch) => (
              <div
                key={swatch.hex}
                onClick={() => copyToClipboard(swatch.hex)}
                className={`card-editorial overflow-hidden bg-white cursor-pointer group flex flex-col justify-between ${
                  swatch.border ? "border-gray-300" : ""
                }`}
              >
                <div>
                  <div
                    className="h-28 flex items-end p-4 transition-transform group-hover:scale-102"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span
                      className="text-xs font-bold font-mono px-2 py-1 rounded bg-black/30 backdrop-blur-xs text-white"
                    >
                      {swatch.hex}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-lg font-bold text-gray-900">
                        {swatch.name}
                      </h3>
                      {copiedHex === swatch.hex ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                          <IconCheck className="w-3 h-3 text-emerald-600" />
                          <span>COPIED!</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-400 group-hover:text-[#0F52BA]">
                          <IconCopy className="w-3 h-3 text-gray-400 group-hover:text-[#0F52BA]" />
                          <span>Copy hex</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {swatch.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            * Note on Orange (#FFAA1D): In the school&apos;s source identity documentation, this swatch is formatted as <code>#F FAA1D</code> and has been normalized to <code>#FFAA1D</code>.
          </p>
        </section>

        {/* Section 2: Official Typography */}
        <section className="bg-[#F8FAFD] rounded-3xl p-8 sm:p-12 border border-[#DADCE0]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Section 2.2 — Type System
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Official Typography Standards
            </h2>
            <p className="text-sm text-[#5F6368] mt-2">
              Kids Den School standardizes on Google Sans across all digital touchpoints—for titles, section headings, body prose, and UI controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Font */}
            <div className="p-7 bg-white rounded-2xl border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                Display, Titles &amp; Headings
              </span>
              <h3 className="text-3xl font-medium text-[#202124] mt-2">
                Google Sans
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Optical size: 17..18 | Weights: 500 (Medium), 600 (Semi-Bold), 700 (Bold)
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-xl font-medium text-gray-800 leading-snug">
                &ldquo;Nurturing Minds, Inspiring Futures&rdquo;
              </div>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Used for editorial headlines, page titles, section headers, and feature callouts. Provides authentic Google-native clarity, geometric balance, and warmth.
              </p>
            </div>

            {/* Body Font */}
            <div className="p-7 bg-white rounded-2xl border border-gray-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A73E8]">
                Body, Navigation &amp; Metadata
              </span>
              <h3 className="text-3xl font-normal text-[#202124] mt-2">
                Google Sans
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Optical size: 17..18 | Weights: 400 (Regular), 500 (Medium)
              </p>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-sm text-gray-800 leading-relaxed">
                The quick brown fox jumps over the lazy dog. 0123456789. Clean legibility across all viewport sizes and high-density screens.
              </div>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Used for editorial body prose, calendar dates, table rows, button labels, and navigation chips for seamless aesthetic continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Logo & Emblem Usage */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DADCE0]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Section 2.3 — Emblem &amp; Crest
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Emblem Symbolism &amp; Usage Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 bg-[#F0F5FD] p-8 rounded-2xl border border-blue-200 flex flex-col items-center text-center">
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src="/images/kds-logo.svg"
                  alt="Kids Den School Official Crest"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xs font-bold text-[#0F52BA]">
                Kids Den School Official Crest
              </span>
              <span className="text-[11px] text-gray-500 mt-0.5">
                Emblem + Wordmark Lockup
              </span>
            </div>

            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Emblem Elements:</strong> The crest incorporates an open book symbolizing lifelong learning, hands of prayer symbolizing reverence and gratitude, a torch of wisdom representing enlightened citizenship, and the founding date (Est. 2011).
              </p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-bold">Important Usage Governance:</p>
                <p>• Do not alter, redraw, or recolor the official crest.</p>
                <p>• Maintain clear space equal to at least the height of the letter &apos;K&apos; around the emblem.</p>
                <p>• Do not approximate the emblem with generic school icons or clip art.</p>
              </div>
              <p className="text-xs text-gray-500">
                For official vector formats (SVG, EPS) or secondary house colors, contact the school brand office at <code>identity@kidsdenschool.in</code>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
