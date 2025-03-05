"use client";
import { ChevronDown, Clock, Mails } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Project",
    subLinks: [
      { label: "Works", href: "/project/Works" },
      { label: "ICT", href: "/project/ict" },
      { label: "Agriculture and Palliative", href: "/project/agric-palliative" },

      { label: "Sport", href: "/project/Sport" },
      { label: "Education", href: "/project/education" },
      { label: "Health", href: "/project/health" },
      { label: "Social & Welfare", href: "/project/Socials" },
      { label: "Tourism & Community Engagement", href: "/project/Tourism" },
      { label: "Skill Acquisition & Empowerment", href: "/project/Acquisition" },
    ],
  },
  {
    label: "Teams",
    subLinks: [
      { label: "Executives", href: "/teams/executive-members" },
      { label: "Management Team", href: "/teams/management-team" },
      { label: "Legislature", href: "/teams/legislature" },
      { label: "Other Key Functionaries", href: "/teams/key-functionaries" },
      { label: "Non-Cabinet Member", href: "/teams/non-cabinet-members" },
    ],
  },
  {
    label: "Department & Unit",
    subLinks: [
      { label: "HUMAN RESOURCES DEPARTMENT", href: "/department/human-resources" },
      { label: "PRIMARY HEALTH CARE SERVICES DEPARTMENT", href: "/department/primary-health-care" },
      { label: "WORKS & INFRASTRUCTURE DEPARTMENT", href: "/department/works-infrastructure" },
      { label: "FINANCE AND ACCOUNTS DEPARTMENT", href: "/department/finance-accounts" },
      { label: "AGRICULTURE AND SOCIAL SERVICES DEPARTMENT", href: "/department/agriculture_social_services" },
      { label: "EDUCATION AND LIBRARY SERVICES", href: "/department/education-library" },
      { label: "ENVIRONMENTAL SERVICES", href: "/department/environmental-services" },
      { label: "BUDGET, PLANNING, RESEARCH AND STATISTICS", href: "department/budget-services" },
      { label: "WOMEN AFFAIRS AND POVERTY ALLEVIATION", href: "/department/women-affairs" },
      { label: "PUBLIC AFFAIRS UNIT", href: "/department/public-affairs" },
      { label: "AUDIT UNIT", href: "/department/audit" },
      { label: "LEGAL UNIT", href: "/department/legal_unit" },
      // { label: "SKILL ACQUISITION AND EMPOWERMENT UNIT", href: "/department/skill-acquisition-empowerment" },
      { label: "INFORMATION & COMMUNICATION TECHNOLOGY", href: "/department/ICT_unit" },
      { label: "PROCUREMENT UNIT", href: "/department/procurement_unit" },
      { label: "TOURISM UNIT", href: "/department/tourism_unit" }
    ]
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <div className="">
<div className="w-full bg-green-600 text-white px-4 md:px-8 py-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:text-left items-center">
  <p className="text-sm md:text-base font-semibold">
    Official website of Ifelodun LCDA
  </p>

  <p className="flex justify-center md:justify-start items-center gap-2 text-sm md:text-base">
    <Clock /> Office Hours: Mon - Fri, 9:00 AM - 5:00 PM
  </p>

  <a 
  href="mailto:info@ifelodunlcda.com" 
  className="flex justify-center md:justify-end items-center gap-2 text-sm md:text-base text-blue-green hover:underline"
>
  <Mails /> info@ifelodunlcda.com
</a>

</div>


<header className="bg-white shadow font-sans font-medium text-[#1c1c1c] ">

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Image src="/images/logo.png" className="cursor-pointer" alt="Logo" width={60} height={60} onClick={()=>router.push("/")} />
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.subLinks ? (
                <>
                  <button className="flex items-center text-green-500 hover:text-green-600 focus:outline-none">
                    {link.label} <span className="ml-1 text-xs"><ChevronDown/></span>
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity  max-h-40 overflow-y-auto scrollbar-hide z-50">
                    <ul className="py-2">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <a href={subLink.href} className="block font-sans px-4 py-2 text-[#1c1c1c] text-sm hover:bg-green-600 hover:text-white">
                            {subLink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <a href={link.href} className="text-green-500 hover:text-green-600 font-sans ">
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center">
          <Image src="/images/lagos.png" alt="Right Logo" width={60} height={60} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none ml-4"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow">
          <ul className="px-4 py-2 space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.subLinks ? (
                  <details>
                    <summary className="flex justify-between items-center text-green-800 hover:text-green-500 cursor-pointer font-sans">
                      {link.label} <span className="ml-1 text-xs">&#9660;</span>
                    </summary>
                    <ul className="pl-4 mt-1 space-y-1 max-h-48 overflow-y-auto">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <a href={subLink.href} className="block text-green-500 hover:bg-green-600 px-2 py-1 font-sans">
                            {subLink.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a href={link.href} className="block text-green-500 hover:green-blue-600">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  </div>
  );
};

export default Header;