import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const ResearchAward = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>List of IIT Roorkee Research Awardees</p>
          <p>
            <a
              href="/forms/research-2022"
              className="text-blue-600 font-medium hover:underline"
            >
              IIT Roorkee Research Awards 2022
            </a>
          </p>

          <p>
            <a
              href="/forms/research-2021"
              className="text-blue-600 font-medium hover:underline"
            >
              IIT Roorkee Research Awards 2021
            </a>
          </p>
          <p>
            <a
              href="/forms/research-2017-2018"
              className="text-blue-600 font-medium hover:underline"
            >
              IIT Roorkee Research Awards 2017 & 2018
            </a>
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3">
            {[
              {
                href: "/distinguished-alumnus-awards",
                label: "Distinguished Alumnus Awards",
              },
              {
                href: "/research-award",
                label: "IIT Roorkee Research Awards",
              },
              // {
              //   href: "/outstanding-awards",
              //   label: "Outstanding Service Awards",
              // },
              { href: "/ramkumar-prize", label: "Ram Kumar Prize" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 border-b border-white/20 hover:text-yellow-300 transition"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default ResearchAward;
