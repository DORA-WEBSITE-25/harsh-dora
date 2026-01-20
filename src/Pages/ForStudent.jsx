import Reac, { useState } from "react";
import { ChevronRight } from "lucide-react";

const ForStudent = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>
            <a
              href="/Tax_Exemption.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              Guidelines for Support for IITR Students for Visiting Institutions
              Abroad
            </a>
          </p>
          {/* <p>
            <a
              href="https://iitrdora.iitr.ac.in/support_via/via_s.php"
              className="text-blue-600 font-medium hover:underline"
            >
              Online Application Form for IITR Students for Visiting Institutions Abroad
            </a>
          </p> */}
          <p>
            <a
              href="/forms/visiting-abroad-application"
              className="text-blue-600 font-medium hover:underline"
            >
              Online Application Form for IITR Students for Visiting
              Institutions Abroad
            </a>
          </p>

          <p>
            <a
              href="/50_ADVANCE_SVIA_uarbUiR.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              50% Advance Form for Visiting Institutions Abroad
            </a>
          </p>
          <p>
            <a
              href="/Claim_Form_XaVzHDJ.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              Claim Form for Visiting Institutions Abroad
            </a>
          </p>
          <p>
            <a
              href="/TRAVELLING_ALLOWANCE_FORM.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              Travelling Allowance Bill - IIT Roorkee
            </a>
          </p>
          <p>
            <a
              href="/Proforma_For_Direct_Payment.pdf"
              className="text-blue-600 font-medium hover:underline"
            >
              Proforma For Direct Payment
            </a>
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">
            Important Links
          </h2>
          <ul className="space-y-3">
            {[
              {
                label:
                  "Partial Support to Attend Good International Conferences",
                href: "/student/gic",
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
        </aside>
      </section>
    </div>
  );
};

export default ForStudent;
