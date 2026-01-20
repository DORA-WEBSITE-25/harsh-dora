import React from "react";
import { ChevronRight } from "lucide-react";
const Testimonial = () => {
  return (
        <div className="w-full">
          {/* Main Content */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
              <p>
                <a
                  href="/forms/gic-testimonial"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Good International Conferences Testimonials
                </a>
              </p>
              <p>
                <a
                  href="/forms/ir-intern-testimonial"
                  className="text-blue-600 font-medium hover:underline"
                >
                  International Research Internships Testimonials
                </a>
              </p>
    
              <p>
                <a
                  href="/forms/sem-exchange-testimonialf"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Semester exchange program & To carry out part of thesis work Testimonials
                </a>
              </p>
            </div>
    
            {/* Right Column - Important Links */}
            {/* <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
              <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">
                Important Links
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    label: "Partial Support for Visiting Institutions Abroad",
                    href: "/student/visiting_abroad",
                  },
                  {
                    label: "Partial Support for International Research Internships",
                    href: "/student/ir",
                  },
                  {
                    label: "Endowed Lecture series",
                    href: "/student/lecture",
                  },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      // target={link.href.startsWith("http") ? "_blank" : "_self"}
                      // rel="noopener noreferrer"
                      className="flex items-center justify-between py-2 border-b border-white/20 hover:text-yellow-300 transition"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </aside> */}
          </section>
        </div>
      );
    };

export default Testimonial;
