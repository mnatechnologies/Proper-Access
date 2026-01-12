"use client";

import { useState } from "react";
import { SquareMenu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

type NavLink = {
  href: string;
  label: string;
  type: "link";
} | {
  label: string;
  type: "dropdown";
  items: Array<{ href: string; label: string }>;
};

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);


  const navLinks: NavLink[] = [
    { href: "/", label: "Home", type: "link" },
    {
      label: "Services",
      type: "dropdown",
      items: [
        { href: "/support-coordination", label: "Support Coordination" },
        { href: "/access-consulting", label: "Access Consulting" }
      ]
    },
    { href: "/#eligibility", label: "Eligibility", type: "link" },
    { href: "/#faq", label: "FAQ", type: "link" },
    { href: "/about", label: "About", type: "link" },
    { href: "#contact", label: "Contact", type: "link" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Image
            src="/Vista Logos (2)/colored-logo.png"
            alt={siteConfig.businessName}
            width={150}
            height={150}
            priority
          />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.type === 'dropdown') {
                return (
                  <li key={link.label}>
                    <Menu as="div" className="relative">
                      <MenuButton className="font-medium text-gray-700 hover:text-orange-500 transition-colors relative flex items-center gap-1 group">
                        {link.label}
                        <ChevronDown
                          size={16}
                          className="transition-transform group-data-[open]:rotate-180"
                        />
                        <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
                      </MenuButton>

                      <MenuItems className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="py-1">
                          {link.items.map((item) => (
                            <MenuItem key={item.href}>
                              {({ focus }) => (
                                <Link
                                  href={item.href}
                                  className={`block px-4 py-2 text-sm transition-colors ${
                                    focus ? 'bg-orange-50 text-orange-500' : 'text-gray-700'
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </div>
                      </MenuItems>
                    </Menu>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-gray-700 hover:text-orange-500 transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition-colors"
          >
            Request a Call Back
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <SquareMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.type === 'dropdown') {
                  return (
                    <li key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex justify-between items-center font-medium text-gray-700 hover:text-orange-500 transition-colors"
                        aria-label="Toggle services menu"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            mobileServicesOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          mobileServicesOpen ? 'max-h-48 mt-2' : 'max-h-0'
                        }`}
                      >
                        <ul className="pl-4 space-y-2">
                          {link.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block font-medium text-gray-600 hover:text-orange-500 transition-colors py-1"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#contact"
                  className="block bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold text-center hover:bg-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Call Back
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
