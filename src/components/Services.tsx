import { Users, Activity, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const iconMap = {
  users: Users,
  activity: Activity,
  check: CheckCircle,
};

// Service images mapping
const serviceImages = [
  "/images/PA2.jpg",
  "/images/PA4.webp",
  "/images/PA3.webp"
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Comprehensive NDIS support tailored to your unique needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const content = (
              <>
                {/* Service Image */}
                <div className="relative w-full h-40 sm:h-48 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={serviceImages[index] || serviceImages[0]}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end justify-center pb-4">
                    <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <Icon className="text-white group-hover:text-brand transition-colors" size={32} />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
                {service.href && (
                  <div className="mt-6 text-center">
                    <span className="text-brand font-semibold group-hover:text-gray-900 transition-colors">
                      Learn about {service.title} →
                    </span>
                  </div>
                )}
              </>
            );

            return service.href ? (
              <a
                key={index}
                href={service.href}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group block"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
