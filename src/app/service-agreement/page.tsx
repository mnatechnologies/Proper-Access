'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function ServiceAgreement() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Service Agreement
            </h1>
            <p className="text-base sm:text-lg opacity-90">
              Terms and conditions for NDIS services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Service Provider</h2>
            <p className="text-gray-600 mb-6">
              This Service Agreement is between {siteConfig.businessName} (ABN: [INSERT ABN])
              (&quot;the Provider&quot;) and the participant (&quot;you&quot; or &quot;the Participant&quot;).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Services Provided</h2>
            <p className="text-gray-600 mb-4">
              The Provider agrees to deliver the following NDIS services as outlined in your individual
              service plan:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Support Coordination:</strong> Non-clinical support to interpret your NDIS plan,
              connect with service providers, and monitor progress toward goals</li>
              <li><strong>Access Consulting:</strong> Assistance with NDIS access applications, evidence
              gathering, and appeals processes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. Service Delivery</h2>
            <p className="text-gray-600 mb-4">Services will be delivered:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>In accordance with your NDIS plan and agreed service schedule</li>
              <li>With respect for your dignity, privacy, and individual needs</li>
              <li>By qualified and experienced staff</li>
              <li>In line with NDIS Practice Standards and Code of Conduct</li>
              <li>Through phone, video, in-person meetings, or other agreed methods</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. Your Rights and Responsibilities</h2>
            <p className="text-gray-600 mb-4">As a participant, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Be treated with respect and dignity</li>
              <li>Make decisions about your services and supports</li>
              <li>Privacy and confidentiality</li>
              <li>Access your records</li>
              <li>Provide feedback and make complaints</li>
              <li>End this agreement at any time</li>
            </ul>
            <p className="text-gray-600 mb-4">As a participant, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate information about your needs and circumstances</li>
              <li>Treat staff with respect</li>
              <li>Provide reasonable notice for cancellations</li>
              <li>Advise us of any changes to your NDIS plan or contact details</li>
              <li>Use services in accordance with this agreement</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Fees and Charges</h2>
            <p className="text-gray-600 mb-6">
              Service fees are charged in accordance with the current NDIS Price Guide and Pricing
              Arrangements. Detailed pricing information is available in our Fee Schedule. We will:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Only charge for services delivered</li>
              <li>Provide itemized invoices</li>
              <li>Claim directly from NDIS or your plan manager (where applicable)</li>
              <li>Notify you of any price changes in advance</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Cancellations</h2>
            <p className="text-gray-600 mb-6">
              We require at least 48 hours notice for cancellations or rescheduling. Late cancellations
              or no-shows may result in cancellation fees as permitted under NDIS pricing rules.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">7. Privacy and Confidentiality</h2>
            <p className="text-gray-600 mb-6">
              Your personal information will be handled in accordance with our Privacy Policy and the
              Privacy Act 1988. We will only share your information with others when you consent or
              where required by law.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">8. Feedback and Complaints</h2>
            <p className="text-gray-600 mb-6">
              We welcome your feedback and are committed to resolving any concerns promptly.
              You can provide feedback or make a complaint by contacting us directly. If you are not
              satisfied with our response, you may contact the NDIS Commission.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">9. Incident Management</h2>
            <p className="text-gray-600 mb-6">
              We have procedures in place to manage and report incidents in accordance with NDIS
              requirements. We will work with you to ensure your safety and wellbeing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">10. Changes to Services</h2>
            <p className="text-gray-600 mb-6">
              We may need to change service delivery arrangements due to staff availability, funding
              changes, or other circumstances. We will consult with you and provide reasonable notice
              of any changes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">11. Ending the Agreement</h2>
            <p className="text-gray-600 mb-6">
              Either party may end this agreement at any time by providing written notice. We will
              support you to transition to another provider if needed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">12. Acknowledgement</h2>
            <p className="text-gray-600 mb-6">
              By engaging our services, you acknowledge that you have read, understood, and agree
              to the terms outlined in this Service Agreement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-900 font-semibold mb-2">{siteConfig.businessName}</p>
              <p className="text-gray-600">Email: {siteConfig.email}</p>
              <p className="text-gray-600">Phone: {siteConfig.phone}</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
