'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallbackForm } from "@/components/CallbackForm";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section with Mission Statement */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 animate-fadeInUp animation-delay-200 italic">
              &ldquo;Proper Access exists to bring clarity, integrity, and informed choice to people navigating the NDIS through independent support and genuine system knowledge.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* About Proper Access Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              About Proper Access
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Proper Access was established in response to a growing disconnect between the intent of the NDIS and the real-world experiences of participants, families, and providers navigating the system. Over time, it became clear that many people engaging with the NDIS — whether seeking access, managing plans, coordinating supports, or attempting to operate within the provider space — are left without clear, consistent guidance.
              </p>
              <p>
                Participants and families frequently report feeling overwhelmed by complex processes, unclear eligibility pathways, inconsistent information, and services that prioritise volume over understanding. Similarly, individuals entering the NDIS as providers often encounter regulatory complexity without structured, practical guidance on how to operate ethically, compliantly, and sustainably.
              </p>
              <p>
                Proper Access exists to restore clarity, integrity, and informed decision-making across these areas.
              </p>
              <p>
                The practice provides independent support coordination, access and review consulting, and NDIS systems and provider consultancy, with a focus on preparation, transparency, and ethical practice. Services are designed to help participants, families, and emerging providers understand their position within the NDIS, navigate processes with confidence, and engage with the system in a way that aligns with their goals, responsibilities, and rights.
              </p>
              <p>
                Proper Access operates on the principle that effective support is not about directing decisions or guaranteeing outcomes — it is about equipping people with the knowledge, structure, and guidance needed to make informed choices for themselves. All services are delivered independently and in line with relevant NDIS legislation, rules, and guidelines.
              </p>
              <p className="font-semibold text-gray-900">
                Proper Access is not affiliated with the NDIA and does not influence access, funding, or planning decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
              Founder and Principal Consultant
            </h2>
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo placeholder */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gray-200">
                  {/* Placeholder for professional photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-sm">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-semibold text-gray-900">Mark</p>
                <p className="text-center text-gray-600 text-sm">Founder &amp; Principal Consultant</p>
              </div>

              {/* Bio text */}
              <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Mark brings over a decade of experience across community services, including close to six years working within the NDIS in both system-level and participant-facing roles. His experience spans Local Area Coordination, planning and review environments, case management, support coordination, and system navigation roles supporting participants, families, and providers at various stages of the NDIS journey.
                </p>
                <p>
                  Having worked across access, planning, implementation, review, and coordination functions, Mark has developed a comprehensive and practical understanding of how the NDIS operates — including eligibility pathways, evidence requirements, plan structures, funding decision-making, and provider engagement. This perspective informs all consultancy services delivered through Proper Access, whether supporting participants to navigate funded supports, assisting individuals through access or review processes, or guiding emerging providers to understand their obligations and operating environment.
                </p>
                <p>
                  The practice is underpinned by tertiary qualifications in Social Science, majoring in Psychology, and applies a person-centred, trauma-informed approach across all services. This ensures work is undertaken with sensitivity to lived experience, systemic barriers, and the broader social and psychological factors that impact engagement with the NDIS.
                </p>
                <p>
                  Proper Access was established to bring together this experience into a single, independent consultancy — offering structured guidance, practical insight, and ethical support to those navigating the NDIS, without unnecessary complexity or transactional focus.
                </p>
                <p className="font-semibold text-gray-900">
                  Culturally responsive services are available, with support offered in Arabic, Assyrian, and Chaldean, as well as English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallbackForm />

      <Footer />
    </div>
  );
}
