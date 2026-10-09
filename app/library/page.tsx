"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import {
  IconBook2,
  IconSearch,
  IconClock,
  IconBookmark,
  IconCheck,
  IconArrowRight,
  IconSparkles,
} from "@tabler/icons-react";

export default function LibraryPortalPage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Science & Discovery", "Classic Fiction", "Heritage & History", "Early Readers"];

  const bookCollection = [
    {
      title: "The Wonder of Living Systems",
      author: "Dr. Rachel Carson",
      category: "Science & Discovery",
      grade: "Classes VI–VIII",
      copies: "3 Available",
    },
    {
      title: "Tales of the Mizo Hills: Legends & Folk Stories",
      author: "Cultural Heritage Society",
      category: "Heritage & History",
      grade: "Classes IV–VIII",
      copies: "4 Available",
    },
    {
      title: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      category: "Classic Fiction",
      grade: "Classes IV–VI",
      copies: "2 Available",
    },
    {
      title: "Exploring Stars, Planets and the Cosmos",
      author: "Neil deGrasse Tyson",
      category: "Science & Discovery",
      grade: "Classes V–VIII",
      copies: "5 Available",
    },
    {
      title: "Charlotte's Web",
      author: "E.B. White",
      category: "Early Readers",
      grade: "Classes I–III",
      copies: "6 Available",
    },
    {
      title: "Stories from India's Great Thinkers",
      author: "Educational Heritage Trust",
      category: "Heritage & History",
      grade: "Classes III–VII",
      copies: "3 Available",
    },
  ];

  const filteredBooks = bookCollection.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const matchesQuery =
      searchFilter.trim() === "" ||
      b.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      b.author.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <PageHeader
        badge="Portal: Library"
        title="Kids Den Library & Media Center"
        description="Home to over 1,000 curated books nurturing imagination, scientific wonder, and deep analytical thinking. Browse our catalogue, discover reading circles, and explore recommended grade literature."
        breadcrumbs={[
          { label: "Portals" },
          { label: "Library" },
        ]}
      />

      <div className="container-kds py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Switcher Banner Callout */}
        <div className="p-4 sm:p-5 bg-[#FEF9E7] rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
              <IconBook2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-[#202124]">Currently viewing: Library Website View</span>
              <p className="text-[#5F6368] text-xs">Switch to Student or Teachers view anytime using the 3-dots menu in the top bar.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Link
              href="/student"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-amber-700 border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Student
            </Link>
            <Link
              href="/teachers"
              className="px-3 py-1.5 rounded-full bg-white text-gray-700 hover:text-amber-700 border border-gray-200 text-xs font-medium transition-colors"
            >
              Switch to Teachers
            </Link>
          </div>
        </div>

        {/* Library Overview Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8FAFD] rounded-3xl p-6 sm:p-10 border border-[#DADCE0]">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Curated Scholastic Collection
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-[#202124]">
              Over 1,000 Curated Titles for Confident Minds
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
              Our open-shelf library fosters quiet contemplation, small-group reading circles, and digital research. Students have weekly dedicated reading periods paired with guided literary discussions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-gray-200">
                <span className="font-bold text-lg text-gray-900 block">1,000+</span>
                <span className="text-gray-500 text-[11px]">Physical Volumes</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200">
                <span className="font-bold text-lg text-gray-900 block">14 Days</span>
                <span className="text-gray-500 text-[11px]">Borrowing Period</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 col-span-2 sm:col-span-1">
                <span className="font-bold text-lg text-gray-900 block">Weekly</span>
                <span className="text-gray-500 text-[11px]">Reading Circles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-gray-200 border border-gray-200 shadow-sm">
              <Image
                src="/images/library.jpg"
                alt="Kids Den School Library in Aizawl"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Live Catalogue Search & Filter */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DADCE0] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Catalogue Directory</h3>
              <p className="text-xs text-gray-500 mt-1">Explore titles available for checkout at our campus library.</p>
            </div>
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <IconSearch className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search title or author..."
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-full bg-[#F8FAFD] border border-gray-300 focus:outline-none focus:border-amber-600"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white"
                    : "bg-[#F1F3F4] text-gray-700 hover:bg-[#E8EAED]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Book Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFD] border border-gray-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                        {book.category}
                      </span>
                      <span className="text-emerald-700 font-medium">{book.copies}</span>
                    </div>
                    <h4 className="font-medium text-base text-[#202124] leading-snug mt-2">{book.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">By {book.author}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500">
                    <span>Target: {book.grade}</span>
                    <span className="text-amber-800 font-medium flex items-center gap-1">
                      <IconBookmark className="w-3.5 h-3.5" />
                      In Stack
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500 text-xs">
                No titles matching &ldquo;{searchFilter}&rdquo;. Try another author or topic.
              </div>
            )}
          </div>
        </section>

        {/* Library Guidelines & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700">
          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 space-y-3">
            <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
              <IconClock className="w-4 h-4 text-amber-700" />
              <span>Library Hours</span>
            </h4>
            <div className="space-y-1.5 text-gray-600">
              <p><strong>Monday – Friday:</strong> 09:00 – 15:30</p>
              <p><strong>Reading Circle Sessions:</strong> Tuesdays &amp; Thursdays (Period 6)</p>
              <p><strong>Librarian Desk:</strong> Main Academic Block, 2nd Floor</p>
            </div>
          </div>

          <div className="card-editorial p-6 bg-white rounded-2xl border border-gray-200 space-y-3">
            <h4 className="font-semibold text-sm text-gray-900 flex items-center gap-2">
              <IconSparkles className="w-4 h-4 text-amber-700" />
              <span>Borrowing Policy</span>
            </h4>
            <div className="space-y-1.5 text-gray-600">
              <p>• Students in Classes I–VIII can borrow up to 2 books concurrently for 14 days.</p>
              <p>• Renewal permitted once if no active reservation exists.</p>
              <p>• Digital catalog search available across all classroom smartboards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
