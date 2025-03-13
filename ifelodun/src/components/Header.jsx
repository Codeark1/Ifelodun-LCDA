


























"use client";
import { ChevronDown, Clock, Mails, Menu, X } from "lucide-react";
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

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";




const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTimeout = useRef(null);
  const scrollTarget = useRef(null);
  const scrollContainer = useRef(null);

  const handleDropdownHover = (e, direction) => {
    const container = scrollContainer.current;
    if (!container) return;

    const scrollAmount = 60; // Base scroll amount
    const containerHeight = container.clientHeight;
    const scrollPosition = container.scrollTop;
    const maxScroll = container.scrollHeight - containerHeight;

    // Smooth scroll with easing
    const smoothScroll = (target) => {
      const start = container.scrollTop;
      const startTime = performance.now();
      
      const animate = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / 250, 1); // 250ms duration
        const eased = easeOutQuad(progress);
        
        container.scrollTop = start + (target - start) * eased;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    if (direction === 'up' && scrollPosition > 0) {
      smoothScroll(Math.max(0, scrollPosition - scrollAmount));
    } else if (direction === 'down' && scrollPosition < maxScroll) {
      smoothScroll(Math.min(maxScroll, scrollPosition + scrollAmount));
    }
  };

  const easeOutQuad = (t) => {
    return t * (2 - t);
  };

  const handleMouseMove = (e) => {
    const container = scrollContainer.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const threshold = container.clientHeight * 0.2; // 20% threshold
    const scrollZoneHeight = container.clientHeight * 0.3; // 30% active zone

    // Clear any existing timeout
    if (scrollTimeout.current) {
      cancelAnimationFrame(scrollTimeout.current);
    }

    // Calculate scroll velocity based on mouse position
    if (y < threshold) {
      const velocity = (1 - y/threshold) * 2;
      scrollTimeout.current = requestAnimationFrame(() => handleDropdownHover(e, 'up'));
    } else if (y > container.clientHeight - threshold) {
      const velocity = ((y - (container.clientHeight - threshold))/threshold) * 2;
      scrollTimeout.current = requestAnimationFrame(() => handleDropdownHover(e, 'down'));
    }
  };

  const handleScrollIndicators = () => {
    const container = scrollContainer.current;
    if (!container) return;

    const showTop = container.scrollTop > 0;
    const showBottom = container.scrollTop < container.scrollHeight - container.clientHeight;

    scrollTarget.current?.style.setProperty('--top-opacity', showTop ? '1' : '0');
    scrollTarget.current?.style.setProperty('--bottom-opacity', showBottom ? '1' : '0');
  };

  return (
    <div className="">
      {/* Top green banner remains the same */}
    
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
      
  
      <header className="bg-white shadow font-sans font-medium text-[#1c1c1c] relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image src="/images/logo.png" className="cursor-pointer" alt="Logo" width={60} height={60} onClick={() => router.push("/")} />
  
          {/* Desktop navigation (hidden on mobile) */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.subLinks ? (
                  <>
                    <button className="flex items-center text-green-500 hover:text-green-600 focus:outline-none transition-all duration-200">
                      {link.label} <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div
                      className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-80 overflow-y-auto scrollbar-hide z-50"
                      ref={scrollContainer}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => {
                        if (scrollTimeout.current) {
                          cancelAnimationFrame(scrollTimeout.current);
                        }
                      }}
                      onScroll={handleScrollIndicators}
                    >
                      {/* Scroll indicators */}
                      <div
                        ref={scrollTarget}
                        className="pointer-events-none absolute inset-x-0 flex justify-between h-6"
                        style={{
                          '--top-opacity': '0',
                          '--bottom-opacity': '0',
                          transition: 'opacity 0.2s',
                        }}
                      >
                        <div 
                          className="w-full bg-gradient-to-b from-white to-transparent h-6"
                          style={{ opacity: 'var(--top-opacity)' }}
                        />
                        <div 
                          className="w-full bg-gradient-to-t from-white to-transparent h-6 bottom-0"
                          style={{ opacity: 'var(--bottom-opacity)', position: 'absolute', bottom: 0 }}
                        />
                      </div>

                      <ul className="py-2">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subLink.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                            >
                              {subLink.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="text-green-500 hover:text-green-600 transition-colors duration-200">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
  
          {/* Mobile menu button and Lagos logo */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Link href="https://lagosstate.gov.ng/" target="blank">
              <Image src="/images/lagos.png" alt="Right Logo" width={60} height={60} />
            </Link>
          </div>
        </div>
  
        {/* Mobile menu dropdown */}
      
        <div
  className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 overflow-hidden transition-all duration-300 ${
    isMobileMenuOpen ? "opacity-100 max-h-screen" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-4 py-2">
    {navLinks.map((link, index) => (
      <div key={index} className="py-2 border-b border-gray-200 last:border-b-0">
        {link.subLinks ? (
          <>
            <button
              className="w-full flex justify-between items-center py-2 text-green-500 hover:text-green-600"
              onClick={() => setOpenSubMenuIndex(openSubMenuIndex === index ? null : index)}
            >
              <span>{link.label}</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${
                  openSubMenuIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubMenuIndex === index ? "max-h-[500px] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
              }`}
            >
              {link.subLinks.map((subLink, subIndex) => (
                <a
                  key={subIndex}
                  href={subLink.href}
                  className="block py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 pl-6"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenSubMenuIndex(null);
                  }}
                >
                  {subLink.label}
                </a>
              ))}
            </div>
          </>
        ) : (
          <a
            href={link.href}
            className="block py-2 text-green-500 hover:text-green-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        )}
      </div>
    ))}
  </div>
</div>


      </header>
    </div>
  );
};

export default Header;





