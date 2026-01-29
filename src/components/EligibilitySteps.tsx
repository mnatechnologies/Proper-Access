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

  const providerSteps = [
    {
      number: 1,
      title: "Contact Us",
      description: "Reach out via phone, email, or our online form to discuss your intended provider pathway.",
    },
    {
      number: 2,
      title: "Initial Consultation",
      description: "A focussed discussion to understand your services, goals, and whether registration is required.",
    },
    {
      number: 3,
      title: "Compliance & Pathway Guidance",
      description: "Structured guidance on registration pathways, policies, and compliance expectations.",
    },
    {
      number: 4,
      title: "Preparation Support",
      description: "Assistance organising documentation, systems, and evidence.",
    },
    {
      number: 5,
      title: "Ongoing Clarity",
      description: "Guidance on next steps, timeframes and complaicne responsibilities.",
    },
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {/* Left Column - NDIS Eligibility */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Find Out If You&#39;re Eligible for the NDIS
            </h2>
            <p className="text-brand font-medium mb-8">
              Access and eligibility guidance is provided through private Access &amp; Review Consulting.
            </p>

            <div className="space-y-6">
              {accessSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
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
                className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg text-sm"
              >
                Learn About Access Consulting
              </a>
            </div>
          </div>

          {/* Middle Column - Support Coordination Suitability */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Support Coordination Suitability
            </h2>
            <p className="text-brand font-medium mb-8">
              Already have an NDIS plan? Here&#39;s how to get started with Support Coordination.
            </p>

            <div className="space-y-6">
              {coordinationSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
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
                className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg text-sm"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Right Column - NDIS Provider Setup & Compliance Consulting */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              NDIS Provider Setup &amp; Compliance Consulting
            </h2>
            <p className="text-brand font-medium mb-8">
              Private consultancy supporting individuals and organisations to understand NDIS provider pathways, compliance requirements, and operational readiness.
            </p>

            <div className="space-y-6">
              {providerSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
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
                href="/provider-consulting"
                className="inline-block bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg text-sm"
              >
                Learn About Provider Consulting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
