import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/PA3.webp"
          alt="NDIS Support Services"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <Link
              href="/#contact"
              className="bg-brand text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-brand-dark transition-all hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/#eligibility"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
