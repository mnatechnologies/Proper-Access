'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              Proper Access (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy and handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
            <p className="text-gray-600 mb-6">
              This Privacy Policy explains how we collect, use, store, and disclose personal information in the course of providing NDIS support coordination and access and review consulting services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect personal information including, but not limited to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Name, contact details (phone, email, address)</li>
              <li>Date of birth and demographic information</li>
              <li>NDIS participant number and plan information</li>
              <li>Health and disability information relevant to service provision</li>
              <li>Emergency contact details</li>
              <li>Financial information for billing and invoicing purposes</li>
              <li>Service preferences, goals, and support needs</li>
              <li>Records of communications and services provided</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Sensitive information is collected only where necessary and with appropriate consent.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. How We Collect Information</h2>
            <p className="text-gray-600 mb-4">Personal information may be collected through:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Direct contact (phone calls, emails, meetings, online forms)</li>
              <li>Service agreements and consent forms</li>
              <li>Participant-provided NDIS plan documents</li>
              <li>Authorised access to NDIS systems where consent has been provided</li>
              <li>Communication with other service providers, with consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use personal information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide NDIS support coordination and access and review consulting services</li>
              <li>Determine suitability for our services</li>
              <li>Communicate with you about supports and services</li>
              <li>Coordinate with other providers, where authorised</li>
              <li>Process invoices and payments</li>
              <li>Meet legal, regulatory, and record-keeping obligations</li>
              <li>Improve service quality and client experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Disclosure of Information</h2>
            <p className="text-gray-600 mb-4">We may disclose personal information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>The NDIA or related government agencies, where authorised or required</li>
              <li>Other service providers involved in your supports, with consent</li>
              <li>Plan managers for billing and payment purposes</li>
              <li>Professional advisors or contractors assisting our business</li>
              <li>Regulatory or law enforcement bodies where required by law</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We do not sell, rent, or trade personal information for marketing purposes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Safeguards include physical, electronic, and administrative security measures.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              Personal information is retained only for as long as necessary to provide services and meet legal obligations. Records are generally retained for at least seven (7) years, or longer where required by law.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Access personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Withdraw consent where applicable</li>
              <li>Make a complaint about how your information is handled</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Requests and complaints will be handled in a timely and respectful manner.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">9. Website and Cookies</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies or analytics tools to improve functionality and user experience. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. The most current version will be published on our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy, or wish to access or correct your information, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-900 font-semibold mb-2">Proper Access</p>
              <p className="text-gray-600">Email: info@properaccess.au</p>
              <p className="text-gray-600">Phone: 0401 642 436</p>
            </div>
            <p className="text-gray-600">
              If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-brand hover:text-brand-dark">www.oaic.gov.au</a>.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
