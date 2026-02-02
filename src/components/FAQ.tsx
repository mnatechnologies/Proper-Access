"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show first 4 FAQs initially
  const displayedFaqs = showAll ? siteConfig.faqs : siteConfig.faqs.slice(0, 4);

  return (
    <section id="faq" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-white mb-8 sm:mb-12 max-w-2xl mx-auto">
          Get answers to common questions about our services
        </p>

        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-brand transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="bg-brand text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg mb-8"
            >
              View All FAQs
            </button>
          )}

          {showAll && (
            <div className="animate-fadeInUp">
              <p className="text-gray-300 text-lg">
                Question not answered?{" "}
                <a href="#contact" className="text-brand hover:text-white transition-colors underline">
                  Reach out to us
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
