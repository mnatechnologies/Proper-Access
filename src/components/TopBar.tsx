"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Duplicate content twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-shrink-0 items-center justify-around min-w-full gap-6 px-4 text-sm">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-2 font-semibold">
              <MapPin size={16} />
              {siteConfig.serviceArea}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
