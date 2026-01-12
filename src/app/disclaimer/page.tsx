'use client';

import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

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
            <p className="text-lg opacity-90">
              Important information about our services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">

            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-600 mb-6">
              The information provided on this website and through our services is for general
              informational purposes only. While we strive to provide accurate and up-to-date
              information about NDIS services, processes, and requirements, this information should
              not be considered professional advice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">No Professional Relationship</h2>
            <p className="text-gray-600 mb-6">
              The information on this website does not create a professional relationship between
              {siteConfig.businessName} and visitors to the website. Professional services are
              established only through formal service agreements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">NDIS Information</h2>
            <p className="text-gray-600 mb-6">
              While we provide information about NDIS access, planning, and support coordination,
              NDIS policies, procedures, and requirements are subject to change. We recommend
              verifying current NDIS information directly with the NDIS or through official NDIS
              channels.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Service Outcomes</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.businessName} provides support and assistance but cannot guarantee
              specific outcomes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Successful NDIS access applications</li>
              <li>Specific funding levels in NDIS plans</li>
              <li>Successful review or appeal outcomes</li>
              <li>Availability of specific service providers</li>
              <li>Timeframes for NDIS processes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Individual Circumstances</h2>
            <p className="text-gray-600 mb-6">
              Every participant&apos;s situation is unique. Information and examples provided are
              general in nature and may not apply to your specific circumstances. We work
              collaboratively with each participant to address their individual needs and goals.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              We may refer participants to or coordinate with other service providers. We are not
              responsible for the quality, availability, or actions of third-party service providers.
              Participants make their own decisions about engaging with other providers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Website Content</h2>
            <p className="text-gray-600 mb-6">
              While we make every effort to ensure website content is accurate and current:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Information may become outdated</li>
              <li>We do not guarantee the accuracy, completeness, or timeliness of content</li>
              <li>We reserve the right to change content without notice</li>
              <li>Links to external websites are provided for convenience only</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">External Links</h2>
            <p className="text-gray-600 mb-6">
              Our website may contain links to external websites. We are not responsible for the
              content, accuracy, or practices of external websites. Inclusion of any link does not
              imply endorsement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the fullest extent permitted by law, {siteConfig.businessName} is not liable for
              any loss, damage, or inconvenience arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Use of information on this website</li>
              <li>Decisions made based on general information provided</li>
              <li>NDIS process delays or outcomes</li>
              <li>Actions of third-party service providers</li>
              <li>Technical issues or website unavailability</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Professional Standards</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.businessName} operates in accordance with NDIS Practice Standards, the
              NDIS Code of Conduct, and relevant legislation. We are committed to providing quality
              services and maintaining professional standards.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Changes to Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to update this disclaimer at any time. Continued use of our
              services or website after changes constitutes acceptance of the updated disclaimer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Australian Law</h2>
            <p className="text-gray-600 mb-6">
              This disclaimer is governed by the laws of Australia. Our services are intended for
              participants in the Australian NDIS system.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Questions</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this disclaimer or our services:
            </p>
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
