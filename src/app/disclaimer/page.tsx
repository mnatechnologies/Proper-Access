'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Disclaimer
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <p className="text-gray-600 mb-6">
              Proper Access is an independent consultancy providing non-clinical NDIS support coordination and access and review consulting services.
            </p>

            <p className="text-gray-600 mb-6">
              Proper Access is not affiliated with, employed by, or acting on behalf of the National Disability Insurance Agency (NDIA). Any information provided is intended to support understanding of NDIS processes and requirements only.
            </p>

            <p className="text-gray-600 mb-6">
              Proper Access does not make decisions regarding NDIS access, funding, plan approvals, plan changes, or outcomes. All final decisions are made solely by the NDIA.
            </p>

            <p className="text-gray-600 mb-6">
              While care is taken to provide accurate and up-to-date information, Proper Access does not guarantee outcomes, including approval of access requests, internal reviews, reassessments, or funding levels. Outcomes are subject to legislation, policy, evidence, and NDIA discretion.
            </p>

            <p className="text-gray-600 mb-6">
              Services provided by Proper Access are non-clinical and do not constitute legal, medical, therapeutic, or financial advice. Clients are encouraged to seek independent professional advice where appropriate.
            </p>

            <p className="text-gray-600 mb-6">
              Access and Review Consulting services are delivered privately and are not funded through an NDIS plan unless explicitly stated. Fees, scope of service, and limitations are agreed prior to commencement.
            </p>

            <p className="text-gray-600 font-semibold">
              By engaging with Proper Access, clients acknowledge and accept the limitations outlined in this disclaimer.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
