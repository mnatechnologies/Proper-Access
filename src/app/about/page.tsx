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
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              About Us
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200 italic">
              &ldquo;Proper Access exists to bring clarity, integrity, and informed choice to people navigating the NDIS through independent support and genuine system knowledge.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* About Proper Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              About Proper Access
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Proper Access was founded in response to a growing gap between what the NDIS is intended to provide and what many participants and families actually experience. Over time, it became clear that a significant number of participants feel lost within the system — uncertain about what their plan is meant to achieve, unclear about their rights and options, and overwhelmed by complex processes and inconsistent information. Many have shared experiences of poor communication, misaligned services, and a lack of transparency that leaves them vulnerable to decisions they do not fully understand.
              </p>
              <p>
                Proper Access exists to restore clarity, integrity, and informed choice within this environment. The practice was established to provide independent support coordination and access and review consulting that prioritises understanding over volume, preparation over urgency, and ethical practice over transactional outcomes. The focus is on helping participants and families make sense of their plans, navigate NDIS processes with confidence, and engage with supports in a way that genuinely aligns with their goals.
              </p>
              <p>
                Proper Access operates on the principle that effective support is not about directing decisions or making promises — it is about equipping people with the knowledge, structure, and guidance they need to make informed choices for themselves. All services are delivered independently, transparently, and in line with NDIS legislation and guidelines.
              </p>
              <p className="font-semibold text-gray-900">
                Proper Access is not affiliated with the NDIA and does not influence funding or access decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
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
                  Mark brings over 10 years of experience in community services, including close to six years working within the NDIS across a range of system-level and participant-facing roles. This includes experience as a Local Area Coordinator (LAC), Planner, Case Manager supporting plan reviews, and Support Coordinator. Having worked across these positions, the founder has developed a deep, practical understanding of how the NDIS operates — from access and planning through to implementation and review.
                </p>
                <p>
                  The practice is underpinned by tertiary qualifications in Social Science, with a major in Psychology, and applies a person-centred, trauma-informed approach to all services. This ensures support is delivered with respect, clarity, and an understanding of the broader social and psychological factors that affect participants and families.
                </p>
                <p>
                  Proper Access was established to bring together this experience into a single, independent practice that supports participants to better understand their plans, engage confidently with providers, and navigate access and review processes without unnecessary complexity.
                </p>
                <p className="font-semibold text-gray-900">
                  Culturally responsive support is available, with services offered in Arabic, Assyrian, and Chaldean, as well as English.
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
