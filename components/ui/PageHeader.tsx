import React from "react";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  badge,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="bg-[#F0F5FD] border-b border-[#D8E6FA] py-12 sm:py-16 relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E1EDFC] rounded-full blur-3xl opacity-60 -mr-20 -mt-20 pointer-events-none" />

      <div className="container-kds relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-1.5 text-xs text-[#5F6368]">
              <li>
                <Link href="/" className="hover:text-[#0F52BA] transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center space-x-1.5">
                  <IconChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#0F52BA] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#202124] font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {badge && (
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#BED8FF] text-xs font-semibold text-[#0F52BA] uppercase tracking-wider mb-3">
            {badge}
          </div>
        )}

        <h1 className="font-medium text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202124] tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 text-base sm:text-lg text-[#5F6368] max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
