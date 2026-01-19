import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="mb-4 flex items-center justify-center">
              <Image
                src="/Vista Logos (2)/transparent-logo.png"
                alt={siteConfig.businessName}
                width={140}
                height={140}
                priority
              />
             </div>

            <p className="text-sm text-center">
              <strong>ABN:</strong><br/>
              <span className="text-gray-700">{siteConfig.abnRegistration}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-center font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                {href: "/support-coordination", label: "Support Coordination"},
                {href: "/access-consulting", label: "Access Consulting"},
                {href: "/fee-schedule", label: "Fee Schedule"},
                {href: "#contact", label: "Contact"},
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg text-center font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-700 flex-shrink-0"/>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-gray-700 hover:text-brand transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-700 flex-shrink-0"/>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-700 hover:text-brand transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-700 flex-shrink-0"/>
                <span className="text-gray-700">{siteConfig.serviceArea}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg text-center font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a
                href={siteConfig.social.facebook}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20}/>
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20}/>
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20}/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 text-center text-gray-700 text-sm flex justify-between">
          <p>Proper Access operates independently and is not part of the NDIA. Outcomes are
            never guaranteed.
          </p>
          <p>
            © {currentYear} {siteConfig.businessName}. All rights reserved. |{" "}
            <a href="/privacy-policy" className="hover:text-brand transition-colors underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/disclaimer" className="hover:text-brand transition-colors underline">
              Disclaimer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
