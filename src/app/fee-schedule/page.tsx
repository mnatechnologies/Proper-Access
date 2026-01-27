'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { DollarSign, FileText, Clock, CheckCircle } from "lucide-react";

export default function FeeSchedule() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fee Schedule
            </h1>
            <p className="text-lg opacity-90">
              Transparent pricing for NDIS services
            </p>
          </div>
        </div>
      </section>

      {/* NDIS Price Guide Notice */}
      <section className="py-8 bg-orange-50 border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <DollarSign className="text-brand flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">NDIS Pricing</h3>
              <p className="text-gray-600">
                Our fees are set in accordance with the current NDIS Price Guide and Pricing
                Arrangements. All prices include GST where applicable. Prices are subject to
                change when NDIS pricing updates occur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Support Coordination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Coordination</h2>
              <p className="text-gray-600 mb-6">
                Support Coordination is charged at NDIS-approved rates as per the current Price Guide.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Standard Hours</h4>
                  <p className="text-gray-600 text-sm mb-1">Monday to Friday, 8am - 6pm</p>
                  <p className="text-2xl font-bold text-brand">As per NDIS Price Guide</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-600">Plan interpretation and explanation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-600">Provider search and connection</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-600">Service coordination and monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-brand flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-600">Regular progress reviews</p>
                </div>
              </div>
            </div>

            {/* Access Consulting */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Access Consulting</h2>
              <p className="text-gray-600 mb-6">
                Access support for NDIS applications, reviews, and appeals. This service is not funded
                through an NDIS plan and is provided separately from Support Coordination.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Fee options may include:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Hourly consultancy rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Fixed-fee packages for access or review preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Short consultations for guidance and clarification</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  All fees are discussed and agreed prior to commencement. Invoices are issued privately
                  and are not claimable through NDIS plans.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4">What this service includes</h4>
                <p className="text-gray-600 mb-4">
                  Depending on individual circumstances, this service may include:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Guidance on NDIS access criteria and eligibility pathways</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Support understanding evidence requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Assistance organising and coordinating supporting documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Reviewing draft access or review requests for clarity and alignment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Guidance on NDIA processes, timeframes, and next steps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Support understanding NDIA correspondence</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 italic">
                  This service focuses on preparation, clarity, and system navigation. Final decisions remain with the NDIA.
                </p>
              </div>
            </div>

            {/* NDIS Provider Setup & Compliance Consulting */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">NDIS Provider Setup &amp; Compliance Consulting</h2>
              <p className="text-gray-600 mb-6">
                Independent guidance for individuals and sole traders seeking clarity on NDIS provider setup,
                compliance obligations, and registration pathways.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Fee options may include:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Hourly consultancy rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Fixed-fee packages for setup and compliance guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Short consultations for guidance and clarification</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4">
                  All fees are discussed and agreed prior to commencement. Invoices are issued privately
                  and are not claimable through NDIS plans.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4">What this service includes</h4>
                <p className="text-gray-600 mb-4">
                  Depending on the client&apos;s goals and intended supports, this may include:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Guidance on NDIS provider models and pathways</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Clarifying registered vs unregistered provider options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Explanation of NDIS registration requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Support identifying required policies, procedures, and insurances</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Guidance on worker screening and state-based requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Preparation support for NDIS Commission applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <p className="text-gray-600">Readiness guidance for verification or certification audits</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 italic">
                  This service focuses on education, preparation, and risk awareness. Final decisions regarding
                  registration and compliance are made by the NDIS Quality and Safeguards Commission and other relevant authorities.
                </p>
              </div>
            </div>

            {/* Billing Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Billing Information</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <FileText className="text-brand mx-auto mb-4" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Invoicing</h4>
                  <p className="text-gray-600 text-sm">Itemized invoices provided for all services</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <Clock className="text-brand mx-auto mb-4" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Service Time (Support Coordination)</h4>
                  <p className="text-gray-600 text-sm">Support Coordination is billed in 15-minute increments as per NDIS rules</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <DollarSign className="text-brand mx-auto mb-4" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">Direct Billing (Support Coordination)</h4>
                  <p className="text-gray-600 text-sm">For Support Coordination, we claim directly from NDIS or your plan manager</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">Access &amp; Review Consulting</h4>
                  <p className="text-gray-600 text-sm">Access &amp; Review Consulting is provided on a private fee basis.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
                  <h4 className="font-bold text-gray-900 mb-2">NDIS Provider Setup &amp; Compliance Consulting</h4>
                  <p className="text-gray-600 text-sm">NDIS Provider Setup &amp; Compliance Consulting is provided on a private fee basis.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">What&apos;s Included</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Face-to-face meetings, phone calls, and video consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Email communication and coordination activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Travel time to in-person meetings (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Administrative work related to your supports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold">•</span>
                    <span>Report writing and documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellation Policy</h2>
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  <strong className="text-gray-900">48 Hours Notice Required:</strong> Please provide
                  at least 48 hours notice to cancel or reschedule appointments.
                </p>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Late Cancellations:</strong> Cancellations with
                  less than 48 hours notice or no-shows may incur cancellation fees as permitted
                  under NDIS pricing arrangements.
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Options</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Coordination</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Plan-Managed</h4>
                  <p className="text-gray-600">
                    We invoice your plan manager directly. No payment required from you.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Self-Managed</h4>
                  <p className="text-gray-600">
                    We provide itemized invoices for you to claim reimbursement from the NDIS myplace portal.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Private Payment</h4>
                  <p className="text-gray-600">
                    For services outside NDIS funding, we accept bank transfer and credit card payments.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Access &amp; Review Consulting</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-gray-600">
                  Access &amp; Review Consulting is provided on a private fee basis. Payment is made directly
                  via bank transfer or credit card. This service is not claimable through NDIS plans.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">NDIS Provider Setup &amp; Compliance Consulting</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">
                  NDIS Provider Setup &amp; Compliance Consulting is provided on a private fee basis. Payment is made
                  directly via bank transfer or credit card. This service is not claimable through NDIS plans.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Questions About Fees?</h3>
              <p className="mb-6 opacity-90">
                We&apos;re committed to transparent pricing and will always discuss fees before
                providing services. Contact us to discuss your specific needs and funding.
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> {siteConfig.email}</p>
                <p><strong>Phone:</strong> {siteConfig.phone}</p>
              </div>
            </div>

            {/* NDIS Price Guide Reference */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                Current NDIS pricing information is available at{' '}
                <a
                  href="https://www.ndis.gov.au/providers/pricing-arrangements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark underline"
                >
                  ndis.gov.au/providers/pricing-arrangements
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
