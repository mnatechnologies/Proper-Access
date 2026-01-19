'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CallbackForm } from "@/components/CallbackForm";
import { CheckCircle, Users, Target, HeartHandshake } from "lucide-react";

export default function SupportCoordination() {
  const features = [
    {
      icon: Users,
      title: "Linking Providers",
      description: "Connect with quality service providers who align with your needs and goals.",
    },
    {
      icon: Target,
      title: "Plan Interpretation",
      description: "Clear explanation of your NDIS plan and how to maximize your supports.",
    },
    {
      icon: CheckCircle,
      title: "Service Alignment",
      description: "Ensure all services work together effectively toward your objectives.",
    },
    {
      icon: HeartHandshake,
      title: "Goal Support",
      description: "Ongoing assistance to track progress and achieve your NDIS goals.",
    },
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
              NDIS Support Coordination
            </h1>
            <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
              Non-clinical support to interpret your plan, connect supports, and monitor progress
            </p>
            <div className="animate-fadeInUp animation-delay-400">
              <a
                href="#contact"
                className="bg-brand text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-brand-dark transition-all hover:scale-105 shadow-lg inline-block"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What It Is
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Support Coordination is non-clinical support designed to help you understand
              and implement your NDIS plan. We work with you to interpret your funding,
              connect with appropriate service providers, and monitor your progress toward
              achieving your goals.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            What&apos;s Included
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Comprehensive support to make the most of your NDIS plan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
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
          <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Who It's For */}
            <div className="bg-gray-900 p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Who It&apos;s For</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Self-managed participants</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Plan-managed participants</p>
                </div>
              </div>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Support Coordination is designed for NDIS participants who want assistance
                navigating their plans and connecting with the right supports.
              </p>
            </div>

            {/* How It's Delivered */}
            <div className="bg-brand p-10 rounded-lg text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-6">How It&apos;s Delivered</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-black flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">Collaboratively with you</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-black flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">In line with your plan goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-black flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">With ongoing communication</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed">
                We work alongside you to ensure your NDIS journey is smooth, empowering,
                and aligned with what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallbackForm />

      <Footer />
    </div>
  );
}
