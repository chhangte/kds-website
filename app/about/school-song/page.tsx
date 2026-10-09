"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";

export default function SchoolSongPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStanza, setCurrentStanza] = useState(0);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const stanzas = [
    {
      title: "Stanza I — The Dawn of Knowledge",
      lines: [
        "High upon the emerald hills of Aizawl fair,",
        "Where fresh winds whisper of hope and care,",
        "We gather together with joyful sound,",
        "Where wisdom, love, and light abound.",
      ],
    },
    {
      title: "Chorus — The School Motto",
      lines: [
        "Kids Den School, our beacon bright,",
        "Guiding our steps in truth and light!",
        "Nurturing minds with patient grace,",
        "Inspiring futures in every space!",
      ],
    },
    {
      title: "Stanza II — Hand in Hand",
      lines: [
        "With books in hand and hearts so brave,",
        "For knowledge deep and true we crave.",
        "In work and play, through joy and song,",
        "Together here we all belong.",
      ],
    },
    {
      title: "Stanza III — Faith, Service and Character",
      lines: [
        "To God our prayer, to friends our hand,",
        "A shining beacon in our land.",
        "Through every trial, we shall stand true,",
        "Dear Kids Den School, all praise to you!",
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        badge="School Anthem"
        title="The Kids Den School Song"
        description="A cherished institution hymn celebrating truth, character, and the pursuit of knowledge. Sung with pride at weekly school assemblies and official functions since 2011."
        breadcrumbs={[
          { label: "About", href: "/about/recognition-and-affiliations" },
          { label: "School Song" },
        ]}
      />

      <div className="container-kds py-16 space-y-16">
        {/* Visual Assembly & Audio Player Simulator Card */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DADCE0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/music-assembly.jpg"
                alt="Students choir singing the Kids Den School Song in auditorium"
                width={650}
                height={420}
                className="w-full h-[340px] sm:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                  Weekly Morning Assembly
                </span>
                <p className="text-xs text-white/90 mt-1">
                  Students and faculty singing the school anthem together every Monday morning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                  Audio Presentation
                </span>
                <h2 className="font-medium text-2xl sm:text-3xl font-bold text-[#202124] mt-1">
                  Anthem Audio &amp; Performance
                </h2>
                <p className="text-sm text-[#5F6368] mt-2">
                  Listen to the choral arrangement composed in traditional four-part school harmony.
                </p>
              </div>

              {/* Interactive Player Simulator */}
              <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-[#BED8FF]">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlayback}
                    className="w-14 h-14 rounded-full bg-[#0F52BA] hover:bg-[#0A3E8F] text-white flex items-center justify-center shadow-md transition-transform active:scale-95"
                    aria-label={isPlaying ? "Pause anthem preview" : "Play anthem preview"}
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-900">
                      Kids Den School Anthem (Choir &amp; Piano)
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {isPlaying ? "Playing choral melody preview..." : "Click play to listen to rehearsal audio"}
                    </div>
                    {/* Simulated playback bar */}
                    <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-[#0F52BA] transition-all duration-500 ${
                          isPlaying ? "w-2/3 animate-pulse" : "w-1/4"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between text-xs text-gray-500">
                  <span>Arrangement: Choir &amp; Piano</span>
                  <span>Key of F Major • 4/4 Time</span>
                </div>
              </div>

              <div className="text-xs text-gray-600 space-y-1.5">
                <div>• <strong>Composed:</strong> 2011 (Official Dedication Ceremony)</div>
                <div>• <strong>Theme:</strong> Nurturing Minds, Inspiring Futures</div>
                <div>• <strong>Occasions:</strong> Assembly, Sports Day, Annual Function, Graduation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Official Lyrics */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
              Official Text
            </span>
            <h2 className="font-medium text-3xl font-bold text-[#202124] mt-1">
              Complete Lyrics
            </h2>
            <p className="text-xs text-[#5F6368] mt-1">
              Words by Kids Den Faculty &amp; Music Committee
            </p>
          </div>

          <div className="space-y-6">
            {stanzas.map((stanza, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStanza(idx)}
                className={`p-7 rounded-2xl transition-all cursor-pointer border ${
                  currentStanza === idx
                    ? "bg-[#F0F5FD] border-[#0F52BA] shadow-xs"
                    : "bg-white border-[#DADCE0] hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F52BA]">
                    {stanza.title}
                  </span>
                  {currentStanza === idx && (
                    <span className="text-[10px] font-bold uppercase bg-blue-100 text-[#0F52BA] px-2 py-0.5 rounded">
                      Selected
                    </span>
                  )}
                </div>
                <div className="space-y-1 font-medium text-base sm:text-lg text-gray-800 leading-relaxed italic">
                  {stanza.lines.map((line, lIdx) => (
                    <p key={lIdx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Credits & Historical Context */}
        <section className="bg-[#F8FAFD] rounded-2xl p-8 border border-[#DADCE0]">
          <h3 className="font-medium text-xl font-bold text-[#202124] mb-3">
            Song History &amp; Contributors
          </h3>
          <p className="text-xs text-[#5F6368] leading-relaxed">
            The school song was formally penned and harmonized in 2011 by founding faculty members and music educators in Aizawl. It reflects the verdant geography of Mizoram, the school emblem’s prayer and book symbolism, and the enduring motto: <em>&ldquo;Nurturing Minds, Inspiring Futures&rdquo;</em>.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-[#0F52BA]">
            <Link href="/about/recognition-and-affiliations" className="hover:underline">
              ← About Recognitions &amp; History
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/identity" className="hover:underline">
              View Brand &amp; Identity Guidelines →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
