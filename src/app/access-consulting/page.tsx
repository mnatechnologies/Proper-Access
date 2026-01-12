'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallbackForm } from "@/components/CallbackForm";
import { CheckCircle, FileText, Users, ClipboardCheck, Calendar, BookOpen } from "lucide-react";
import Image from "next/image";

export default function AccessConsulting() {
  const includedServices = [
    {
      icon: ClipboardCheck,
      title: "Eligibility Clarity",
      description: "Clarifying NDIS access criteria and eligibility pathways for your situation.",
    },
    {
      icon: FileText,
      title: "Evidence Organisation",
      description: "Identifying and organising relevant evidence to support your application.",
    },
    {
      icon: BookOpen,
      title: "Request Preparation",
      description: "Supporting the preparation of access or review requests with structured guidance.",
    },
    {
      icon: CheckCircle,
      title: "Document Review",
      description: "Reviewing draft applications or submissions for clarity and alignment with NDIS criteria.",
    },
    {
      icon: Calendar,
      title: "Process Guidance",
      description: "Explaining NDIA processes, timeframes, and what to expect at each step.",
    },
  ];

  const whoItsFor = [
    "Individuals not yet approved for the NDIS",
    "Participants seeking an internal review or plan reassessment",
    "Families supporting someone through access or review processes",
    "Individuals who need structured guidance outside funded supports",
  ];

  const howDelivered = [
    "Through scheduled consultations",
    "Via document review and guidance",
    "With clear scope and agreed fees prior to commencement",
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
              Access &amp; Review Consulting
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
              Structured guidance for navigating NDIS access, internal reviews, and plan reassessments
            </p>
            <div className="animate-fadeInUp animation-delay-400">
              <a
                href="#contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg inline-block"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Access consulting and review support"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What It Is
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Access and Review Consulting provides structured guidance for individuals and families
                  who are navigating NDIS access, internal reviews, or plan reassessments and need
                  clarity around eligibility, evidence, and process.
                </p>
                <p className="font-semibold text-gray-900">
                  This service focuses on preparation and system navigation, not decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Includes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            What It Includes
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Services are provided in a way that supports informed decision-making and self-advocacy
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {includedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For & How It's Delivered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div className="bg-gray-900 p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Who It&apos;s For</h2>
              <div className="space-y-4">
                {whoItsFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className=" mt-2 pt-6 border-t border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  <span className="mt-2 font-semibold text-white">Important:</span> This service is delivered
                  privately and is not funded through an NDIS plan.
                </p>
              </div>
            </div>

            {/* How It's Delivered */}
            <div className="bg-orange-600 p-10 rounded-lg dtext-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">How It&apos;s Delivered</h2>
              <div className="space-y-4">
                {howDelivered.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-orange-500">
                <p className="text-lg font-semibold mb-2">
                  Independent Service
                </p>
                <p className="leading-relaxed">
                  All work is undertaken independently. Final decisions relating to access,
                  funding, or plan outcomes are made by the NDIA.
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
