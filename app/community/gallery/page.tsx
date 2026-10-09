"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { IconX } from "@tabler/icons-react";

interface GalleryPhoto {
  id: string;
  title: string;
  category: "Sports" | "Science" | "Arts" | "Music" | "Campus Life";
  date: string;
  imageSrc: string;
  description: string;
}

const GALLERY_COLLECTION: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Annual Sports Day Relay & Track Finals",
    category: "Sports",
    date: "November 2026",
    imageSrc: "/images/sports-day.jpg",
    description: "Students cheering excitedly during the inter-house 4x100m baton relay race on the main school sports grounds.",
  },
  {
    id: "g2",
    title: "Chemistry & Solution Discovery Session",
    category: "Science",
    date: "October 2026",
    imageSrc: "/images/science-lab.jpg",
    description: "Middle school students wearing safety lab coats testing acid-base indicator reactions in our modern science lab.",
  },
  {
    id: "g3",
    title: "Creative Watercolor & Craft Studio",
    category: "Arts",
    date: "September 2026",
    imageSrc: "/images/arts-crafts.jpg",
    description: "Young learners exploring color blending, paper craft cutting, and traditional Mizo patterns in the art studio.",
  },
  {
    id: "g4",
    title: "School Choir Anthem & Spring Concert",
    category: "Music",
    date: "August 2026",
    imageSrc: "/images/music-assembly.jpg",
    description: "The official Kids Den School choir performing the school hymn and choral melodies accompanied by piano.",
  },
  {
    id: "g5",
    title: "Library Reading Corner & Book Circles",
    category: "Campus Life",
    date: "July 2026",
    imageSrc: "/images/library.jpg",
    description: "Children gathered on comfy couches in our 1,000+ volume library discovering adventure and science fiction books.",
  },
  {
    id: "g6",
    title: "Smartboard Interactive Classroom Lesson",
    category: "Campus Life",
    date: "June 2026",
    imageSrc: "/images/hero-campus.jpg",
    description: "Class IV students raising hands enthusiastically during a smartboard ecosystem and geography session.",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = ["All", "Sports", "Science", "Arts", "Music", "Campus Life"];

  const filteredPhotos =
    selectedCategory === "All"
      ? GALLERY_COLLECTION
      : GALLERY_COLLECTION.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <PageHeader
        badge="Memories & Celebrations"
        title="Campus Photo & Events Gallery"
        description="Capturing the vibrant moments, athletic triumphs, scientific discoveries, artistic expressions, and warm daily interactions that make Kids Den School a joyous home for learning."
        breadcrumbs={[
          { label: "Community", href: "/community/academic-calendar" },
          { label: "Photo Gallery" },
        ]}
      />

      <div className="container-kds py-10 sm:py-16 space-y-8 sm:space-y-12">
        {/* Category Tabs (Swipeable on mobile) */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 min-h-[40px] ${
                selectedCategory === cat
                  ? "bg-[#0F52BA] text-white shadow-xs"
                  : "bg-[#F0F5FD] text-gray-700 hover:bg-[#E2EDFC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid (Google Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="card-editorial overflow-hidden bg-white cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <Image
                    src={photo.imageSrc}
                    alt={photo.title}
                    width={550}
                    height={350}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F52BA]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {photo.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold text-gray-400 mb-1">
                    {photo.date}
                  </div>
                  <h3 className="font-medium text-lg font-bold text-gray-900 group-hover:text-[#0F52BA] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-xs font-semibold text-[#0F52BA] flex items-center justify-between">
                <span>View Full Photo</span>
                <span>↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                aria-label="Close photo preview"
              >
                <IconX className="w-5 h-5 text-white" />
              </button>

              <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
                <Image
                  src={activePhoto.imageSrc}
                  alt={activePhoto.title}
                  width={1200}
                  height={800}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-bold text-[#0F52BA] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {activePhoto.category}
                  </span>
                  <span className="text-xs text-gray-400">• {activePhoto.date}</span>
                </div>
                <h3 className="font-medium text-2xl font-bold text-gray-900">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
