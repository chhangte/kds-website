"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconCheck, IconChevronLeft, IconChevronRight, IconArrowRight } from "@tabler/icons-react";

interface HeroSlide {
  tag: string;
  title: string;
  description: string;
  author: string;
  role: string;
  href: string;
  imageSrc: string;
  badgeTitle: string;
  badgeDetail: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    tag: "Admissions 2027–2028",
    title: "Making learning joyful and future-ready at Kids Den School",
    description:
      "Applications are now open for Preschool through Class VIII. Experience 100% smart classrooms, CISCE academic excellence, and individualized student care in Aizawl.",
    author: "Admissions Council",
    role: "Kids Den School, Aizawl",
    href: "/admission",
    imageSrc: "/images/hero-campus.jpg",
    badgeTitle: "Admissions Open",
    badgeDetail: "Preschool to Class VIII • Transparent KIDSET assessment process",
  },
  {
    tag: "100% Smart Classrooms",
    title: "Interactive digital pedagogy integrated across every single grade",
    description:
      "From kindergarten phonics to middle school physics simulations, every classroom at Kids Den School features interactive smartboards paired with experiential instruction.",
    author: "Academic Directorate",
    role: "Curriculum & Technology Division",
    href: "/learning/curriculum",
    imageSrc: "/images/science-lab.jpg",
    badgeTitle: "Smart Pedagogy",
    badgeDetail: "100% Interactive Smartboards • Hands-on STEM Discovery Labs",
  },
  {
    tag: "School Community",
    title: "Celebrating character, sportsmanship, and student growth",
    description:
      "15 years of nurturing confident young minds in Mizoram through inter-house athletic meets, science expos, choir assemblies, and a 1,000+ volume library.",
    author: "Student Affairs",
    role: "Community & Athletics Committee",
    href: "/community/academic-calendar",
    imageSrc: "/images/sports-day.jpg",
    badgeTitle: "Campus Life",
    badgeDetail: "16:1 Student-Teacher Ratio • Over 1,000 Curated Library Books",
  },
];

interface LatestStory {
  id: string;
  topic: string;
  categoryBadge: string;
  title: string;
  byline: string;
  date: string;
  href: string;
  imageSrc: string;
}

const LATEST_STORIES: LatestStory[] = [
  {
    id: "s1",
    topic: "Admissions",
    categoryBadge: "Admissions",
    title: "Admission Information for 2027–2028 Session Announced for Preschool through Class VIII",
    byline: "By Admissions Desk",
    date: "October 09, 2026",
    href: "/admission",
    imageSrc: "/images/hero-campus.jpg",
  },
  {
    id: "s2",
    topic: "Academics",
    categoryBadge: "Academics & STEM",
    title: "Expanding Experiential STEM & Hands-On Science Discovery Modules in Middle School",
    byline: "By Science Faculty",
    date: "September 28, 2026",
    href: "/learning/curriculum",
    imageSrc: "/images/science-lab.jpg",
  },
  {
    id: "s3",
    topic: "Curriculum",
    categoryBadge: "CISCE & NEP 2020",
    title: "How Kids Den School Implements Competency-Based Learning Under National Education Policy",
    byline: "By Curriculum Research",
    date: "September 15, 2026",
    href: "/learning/curriculum",
    imageSrc: "/images/library.jpg",
  },
  {
    id: "s4",
    topic: "Events",
    categoryBadge: "Campus Athletics",
    title: "Annual Sports & Athletics Meet 2026: Inter-House Track Races and Field Competitions",
    byline: "By Sports Department",
    date: "August 30, 2026",
    href: "/community/academic-calendar",
    imageSrc: "/images/sports-day.jpg",
  },
  {
    id: "s5",
    topic: "Community",
    categoryBadge: "School Anthem",
    title: "The Story Behind the Kids Den School Song: Composed with Purpose Since 2011",
    byline: "By Music Committee",
    date: "August 12, 2026",
    href: "/about/school-song",
    imageSrc: "/images/music-assembly.jpg",
  },
];

export default function HomePage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTopic, setActiveTopic] = useState("All News");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const slide = HERO_SLIDES[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const topicFilters = ["All News", "Admissions", "Academics", "Curriculum", "Events", "Community"];

  const filteredLatest =
    activeTopic === "All News"
      ? LATEST_STORIES
      : LATEST_STORIES.filter((s) => s.topic === activeTopic);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* 1. HERO CAROUSEL: Directly matching Screenshot 1 */}
      <section className="pt-4 sm:pt-8 pb-10 sm:pb-14 bg-white">
        <div className="container-kds">
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch select-none cursor-grab active:cursor-grabbing"
          >
            {/* Left Card: Soft lavender/blue rounded card */}
            <div className="lg:col-span-5 bg-[#EBF2FC] rounded-2xl sm:rounded-[28px] p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm font-medium text-[#1A73E8]">
                  {slide.tag}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-medium leading-[1.2] text-[#202124] tracking-tight mt-3 sm:mt-4">
                  {slide.title}
                </h1>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {slide.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-100 sm:border-transparent">
                <div className="mb-4 sm:mb-6">
                  <div className="text-xs font-semibold text-[#202124]">
                    By {slide.author}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#5F6368] mt-0.5">
                    {slide.role}
                  </div>
                </div>

                <Link href={slide.href} className="btn-pill-action w-full sm:w-auto">
                  <span>Read more</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Center/Right Card: Elevated preview container */}
            <div className="lg:col-span-7 bg-[#F8FAFD] rounded-2xl sm:rounded-[28px] border border-[#DADCE0] overflow-hidden flex flex-col justify-between">
              {/* Top toolbar */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-[#E8EAED] bg-white text-[11px] sm:text-xs text-[#5F6368]">
                <div className="flex items-center space-x-2 truncate">
                  <span className="font-medium text-[#202124] truncate">Kids Den Campus Life</span>
                </div>
                <div className="flex items-center space-x-1.5 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Session 2027–2028</span>
                </div>
              </div>

              {/* Main Media Preview */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xs aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 text-white">
                    <span className="text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-sm inline-block mb-1 sm:mb-2">
                      + Kids Den School
                    </span>
                    <h2 className="text-lg sm:text-2xl font-medium text-white leading-tight">
                      {slide.badgeTitle}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-white/90 mt-1 max-w-xl line-clamp-2 sm:line-clamp-none">
                      {slide.badgeDetail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accreditation row */}
              <div className="px-4 sm:px-6 py-3 border-t border-[#E8EAED] bg-white flex flex-wrap items-center justify-between text-[11px] sm:text-xs text-[#5F6368] gap-2">
                <span className="font-semibold uppercase tracking-wider text-[10px] text-gray-400">
                  Accreditation
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-medium text-[#202124]">
                  <span>Govt. of Mizoram</span>
                  <span className="text-gray-300">•</span>
                  <span>CISCE Syllabus</span>
                  <span className="text-gray-300">•</span>
                  <span>NEP 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Arrows & Progress Bar Controls below */}
          <div className="flex items-center justify-between sm:justify-start space-x-3 sm:space-x-4 mt-4 sm:mt-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-700 flex items-center justify-center transition-colors"
              >
                <IconChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-[#F1F3F4] hover:bg-[#E8EAED] text-gray-700 flex items-center justify-center transition-colors"
              >
                <IconChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Progress line */}
            <div className="flex-1 max-w-[200px] sm:max-w-md h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1A73E8] transition-all duration-300"
                style={{
                  width: `${((currentSlideIndex + 1) / HERO_SLIDES.length) * 100}%`,
                }}
              />
            </div>

            <span className="text-xs text-[#5F6368] font-medium shrink-0">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </section>

      {/* 2. MORE UPDATES: Directly matching Screenshot 2 */}
      <section className="py-14 bg-white">
        <div className="container-kds">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-[32px] font-medium text-[#202124] tracking-tight">
              More updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/hero-campus.jpg"
                    alt="Admission announcement"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  Admission Information for 2027–2028 Session Announced for Preschool through Class VIII
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/admission" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/science-lab.jpg"
                    alt="Science discovery labs"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  Expanding Experiential STEM &amp; Digital Inquiry Labs for Hands-On Learning
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/learning/curriculum" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/library.jpg"
                    alt="Library collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  Curating Over 1,000 Books: Nurturing a Culture of Deep Reading and Inquisitive Minds
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/learning" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIPS AND TRICKS / CAMPUS LIFE: Directly matching Screenshot 3 */}
      <section className="py-14 bg-white border-t border-[#F1F3F4]">
        <div className="container-kds">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-[32px] font-medium text-[#202124] tracking-tight">
              School highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/sports-day.jpg"
                    alt="Annual sports meet"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-[#5F6368] block mb-1.5">
                  Athletics &amp; Sports
                </span>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  Building stamina, character, and team spirit through inter-house athletics meets
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/community/gallery" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/arts-crafts.jpg"
                    alt="Art studio"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-[#5F6368] block mb-1.5">
                  Creative Arts
                </span>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  Fostering imagination with watercolor painting, clay craft, and traditional Mizo art
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/learning" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-google p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] bg-gray-200 mb-5">
                  <Image
                    src="/images/music-assembly.jpg"
                    alt="Music choir"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-[#5F6368] block mb-1.5">
                  Heritage &amp; Music
                </span>
                <h3 className="text-xl font-medium text-[#202124] leading-snug">
                  The Kids Den School Song: A beloved hymn of prayer, knowledge, and service
                </h3>
              </div>
              <div className="mt-8">
                <Link href="/about/school-song" className="btn-pill-action">
                  <span>Read article</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE LATEST WITH TOPIC FILTER CHIPS: Directly matching Screenshot 4 */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#F1F3F4]">
        <div className="container-kds">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#202124] tracking-tight mb-6 sm:mb-10">
            The latest
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Sort by topic chips (Horizontal swipeable track on mobile) */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-semibold text-[#5F6368] block">
                Sort by topic
              </span>
              <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                {topicFilters.map((topic) => {
                  const isActive = activeTopic === topic;
                  return (
                    <button
                      key={topic}
                      onClick={() => setActiveTopic(topic)}
                      className={`chip-topic text-left shrink-0 ${
                        isActive ? "chip-topic-active" : "chip-topic-inactive"
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>

              {/* School At A Glance Box */}
              <div className="mt-4 sm:mt-8 p-5 sm:p-6 bg-[#F8FAFD] rounded-2xl sm:rounded-[24px] border border-[#DADCE0] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                  School at a Glance
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <span className="font-semibold text-gray-900 block text-base sm:text-lg">2011</span>
                    <span className="text-gray-500 text-[11px]">Founded Year</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-base sm:text-lg">800+</span>
                    <span className="text-gray-500 text-[11px]">Enrollment</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-base sm:text-lg">100%</span>
                    <span className="text-gray-500 text-[11px]">Smartboards</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-base sm:text-lg">16:1</span>
                    <span className="text-gray-500 text-[11px]">Ratio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Horizontal editorial story rows matching Screenshot 4 */}
            <div className="lg:col-span-9 divide-y divide-[#E8EAED]">
              {filteredLatest.map((story) => (
                <article
                  key={story.id}
                  className="py-6 sm:py-8 first:pt-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-[220px] lg:w-[240px] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] bg-gray-200">
                    <Image
                      src={story.imageSrc}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div>
                      <span className="inline-block text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#F1F3F4] text-[#3C4043]">
                        {story.categoryBadge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#202124] group-hover:text-[#1A73E8] transition-colors leading-snug">
                      <Link href={story.href}>{story.title}</Link>
                    </h3>

                    <div className="text-[11px] sm:text-xs text-[#5F6368] pt-1">
                      {story.byline} • {story.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER BOX: Matching Screenshot 2 & 3 */}
      <section className="py-14 bg-white">
        <div className="container-kds">
          <div className="bg-[#EBF2FC] rounded-[28px] p-8 sm:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-medium text-[#202124] tracking-tight">
                Get the latest news from Kids Den School in your inbox
              </h2>
              <p className="mt-2 text-sm text-[#5F6368]">
                Sign up for school circulars, academic calendar updates, KIDSET notices, and holiday announcements.
              </p>

              {newsletterSubscribed ? (
                <div className="mt-6 p-4 rounded-full bg-white text-emerald-700 text-sm font-medium flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  <span>Thank you! You are subscribed to official school updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="mt-6 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-5 py-3 rounded-full bg-white border border-gray-300 text-sm text-[#202124] placeholder-gray-500 focus:outline-none focus:border-[#1A73E8]"
                  />
                  <button
                    type="submit"
                    className="btn-pill-primary text-sm font-medium shrink-0"
                  >
                    Sign up
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
