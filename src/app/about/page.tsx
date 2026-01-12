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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              About Us
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
              [Add your tagline or mission statement here]
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      {/*<section className="py-12 bg-gray-50">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <div className="max-w-5xl mx-auto">*/}
      {/*      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">*/}
      {/*        <Image*/}
      {/*          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"*/}
      {/*          alt="About us"*/}
      {/*          fill*/}
      {/*          className="object-cover"*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Main Content Section - Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                [Our Story / Who We Are]
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                [Tell your story - how you started, why you&#39;re passionate about NDIS support, what drives your mission]
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Additional paragraph about your background, experience, and commitment to participants]
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-900 p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                [Describe your mission - what you aim to achieve for NDIS participants]
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>[Key mission point 1]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>[Key mission point 2]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>[Key mission point 3]</span>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-orange-600 p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="leading-relaxed mb-6">
                [Describe your core values - what guides your work with participants]
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span>[Core value 1]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span>[Core value 2]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span>[Core value 3]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Who We Work With
            </h2>
            <p className="text-lg text-white text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              [PLACEHOLDER; COMPANY LOGS TO REPLACE IMAGE]
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">

                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />

              </div>
              <div className="order-1 md:order-2">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span className="text-white">[COMPANY/ORG A]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span className="text-white">[COMPANY/ORG B]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span className="text-white">[COMPANY/ORG C]</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span className="text-white">[COMPANY/ORG D]</span>
                  </li>
                </ul>
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
