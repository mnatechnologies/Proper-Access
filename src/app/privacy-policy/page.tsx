'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.businessName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and
              handling your personal information in accordance with the Privacy Act 1988 (Cth) and the
              Australian Privacy Principles (APPs).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Name, contact details (phone, email, address)</li>
              <li>Date of birth and demographic information</li>
              <li>NDIS participant number and plan information</li>
              <li>Health and disability information relevant to service provision</li>
              <li>Emergency contact information</li>
              <li>Financial information for billing purposes</li>
              <li>Service preferences and goals</li>
              <li>Records of communications and service delivery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. How We Collect Information</h2>
            <p className="text-gray-600 mb-4">We collect personal information through:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Direct interactions (phone calls, emails, meetings, forms)</li>
              <li>Service agreements and consent forms</li>
              <li>NDIS portal and plan documents</li>
              <li>Communication with other service providers (with your consent)</li>
              <li>Our website contact forms and callbacks</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide NDIS support coordination and access consulting services</li>
              <li>Assess eligibility and suitability for services</li>
              <li>Communicate with you about your services</li>
              <li>Process billing and payments</li>
              <li>Coordinate with other service providers</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and customer experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Information Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We may disclose your personal information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>NDIS and related government agencies</li>
              <li>Other service providers involved in your care (with consent)</li>
              <li>Plan managers for billing purposes</li>
              <li>Our professional advisors and contractors</li>
              <li>Law enforcement or regulatory bodies when required by law</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We will not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information from
              misuse, interference, loss, unauthorized access, modification, or disclosure. This includes
              physical, technical, and administrative safeguards.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to provide services and
              comply with legal obligations. NDIS service records are retained for a minimum of 7 years
              as required by legislation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">8. Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Lodge a complaint about our handling of your information</li>
              <li>Withdraw consent for certain uses of your information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">9. Website and Cookies</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies and analytics tools to improve user experience. You can
              control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">10. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. The latest version will always be
              available on our website with the updated date clearly displayed.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions or concerns about this Privacy Policy or wish to exercise your rights:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-900 font-semibold mb-2">{siteConfig.businessName}</p>
              <p className="text-gray-600">Email: {siteConfig.email}</p>
              <p className="text-gray-600">Phone: {siteConfig.phone}</p>
            </div>
            <p className="text-gray-600">
              If you are not satisfied with our response, you may contact the Office of the
              Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-orange-500 hover:text-orange-600">www.oaic.gov.au</a>.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
