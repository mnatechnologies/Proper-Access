'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallbackForm } from "@/components/CallbackForm";
import { CheckCircle, FileText, Shield, BookOpen, Users, ClipboardList } from "lucide-react";
import Image from "next/image";

export default function ProviderConsulting() {
  const includedServices = [
    {
      icon: BookOpen,
      title: "Provider Models & Pathways",
      description: "Guidance on NDIS provider models and pathways to help you understand your options.",
    },
    {
      icon: Shield,
      title: "Registration Clarity",
      description: "Clarifying registered vs unregistered provider options and NDIS registration requirements.",
    },
    {
      icon: FileText,
      title: "Policy & Procedure Support",
      description: "Support identifying required policies, procedures, and insurances for compliance.",
    },
    {
      icon: ClipboardList,
      title: "Worker Screening Guidance",
      description: "Guidance on worker screening and state-based requirements.",
    },
    {
      icon: CheckCircle,
      title: "Application Preparation",
      description: "Preparation support for NDIS Commission applications.",
    },
    {
      icon: Users,
      title: "Audit Readiness",
      description: "Readiness guidance for verification or certification audits.",
    },
  ];

  const whoItsFor = [
    "Individuals considering becoming NDIS sole traders",
    "New providers entering the NDIS sector",
    "Existing providers seeking clarity on compliance or registration",
    "People unsure whether NDIS registration is required for their intended services",
  ];

  const howDelivered = [
    "Scheduled consultancy sessions",
    "Step-by-step guidance and checklists",
    "Document review and preparation support",
    "Clear scope, timeframes, and fees agreed upfront",
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
              NDIS Provider Setup &amp; Compliance Consulting
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
              Independent guidance for individuals and sole traders seeking clarity on NDIS provider setup, compliance obligations, and registration pathways.
            </p>
            <div className="animate-fadeInUp animation-delay-400">
              <a
                href="#contact"
                className="bg-brand text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-brand-dark transition-all hover:scale-105 shadow-lg inline-block"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/PA3.webp"
                alt="NDIS Provider consulting and compliance support"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                What It Is
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  This service provides independent consultancy for individuals and sole traders who want
                  to enter the NDIS space and need clear, practical guidance on provider setup, compliance
                  obligations, and registration pathways.
                </p>
                <p>
                  It is designed to help people understand what is required, make informed decisions, and
                  prepare appropriately before engaging with regulatory bodies.
                </p>
                <p className="font-semibold text-gray-900">
                  This service focuses on education, preparation, and risk awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Includes Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            What It Includes
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Depending on the client&apos;s goals and intended supports, this may include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {includedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-colors">
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
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div className="bg-gray-900 p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Who It&apos;s For</h2>
              <p className="text-gray-300 mb-6">
                This service may be suitable for:
              </p>
              <div className="space-y-4">
                {whoItsFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-brand flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Important:</span> This service is provided
                  privately and is not funded through NDIS plans.
                </p>
              </div>
            </div>

            {/* How It's Delivered */}
            <div className="bg-brand p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">How It&apos;s Delivered</h2>
              <p className="mb-6">
                NDIS Provider Setup &amp; Compliance Consulting is delivered through:
              </p>
              <div className="space-y-4">
                {howDelivered.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-black flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-brand/70">
                <p className="text-lg font-semibold mb-2">
                  Independent Service
                </p>
                <p className="leading-relaxed">
                  Proper Access operates independently. All final decisions regarding registration and
                  compliance are made by the NDIS Quality and Safeguards Commission and other relevant authorities.
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
