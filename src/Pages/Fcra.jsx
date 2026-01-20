import React from "react";
import { ChevronRight } from "lucide-react";

const FCRA = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          {/* <p className="font-extrabold text-xl">Foreign Contribution Regulation Act (FCRA)</p> */}
          <p>
            IITR registration under the Foreign{" "}
            <a
              href="/Foreign_Contribution_Act.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              Contribution
            </a>{" "}
            (Regulation) Act. 
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "Why Giving Back", href: "/giving-back" },
              {
                label: "Schemes",
                href: "/alum-schemes",
              },
              { label: "Esteemed Donors", href: "/esteemed-donor" },
              { label: "Giving Back to IITR", href: "donations" },
              {
                label: "CSR Contribution",
                href: "/csr-contri",
              },
              { label: "Tax Exemption", href: "/tax-exemp" },
              {
                label: "Avenues for Alumni",
                href: "/avenues",
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
        </aside>
      </section>
    </div>
  );
};

export default FCRA;
