export function EligibilitySteps() {
  const accessSteps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Reach out via phone, email, or our online form to discuss your situation.",
    },
    {
      number: 2,
      title: "Initial Discussion",
      description: "We'll have a friendly chat to understand your needs and goals.",
    },
    {
      number: 3,
      title: "Eligibility Guidance",
      description: "Receive structured guidance on NDIS access criteria and evidence requirements.",
    },
    {
      number: 4,
      title: "Preparation Support",
      description: "Assistance organising documentation and preparing your access request.",
    },
    {
      number: 5,
      title: "Ongoing Clarity",
      description: "Support understanding NDIA processes, correspondence, and next steps.",
    },
  ];

  const coordinationSteps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Reach out via phone, email, or our online form.",
    },
    {
      number: 2,
      title: "Initial Free Consultation",
      description: "A no-obligation conversation to understand your needs.",
    },
    {
      number: 3,
      title: "Support Coordination Suitability Assessment",
      description: "We'll assess if our services are the right fit for you.",
    },
    {
      number: 4,
      title: "Complete Onboarding",
      description: "Simple onboarding process to get you set up.",
    },
    {
      number: 5,
      title: "Ready to Work Towards Your Goals",
      description: "Begin your journey with dedicated support coordination.",
    },
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - NDIS Eligibility */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Find Out If You&#39;re Eligible for the NDIS
            </h2>
            <p className="text-brand font-medium mb-8">
              Access and eligibility guidance is provided through private Access &amp; Review Consulting.
            </p>

            <div className="space-y-6">
              {accessSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/access-consulting"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Learn About Access Consulting
              </a>
            </div>
          </div>

          {/* Right Column - Support Coordination Suitability */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Support Coordination Suitability
            </h2>
            <p className="text-gray-300 mb-8">
              Already have an NDIS plan? Here&#39;s how to get started with Support Coordination.
            </p>

            <div className="space-y-6">
              {coordinationSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-brand text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
