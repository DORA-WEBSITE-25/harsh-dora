import React from "react";
import { ChevronRight } from "lucide-react";

const Card = ({ title, links }) => {
  return (
    <section className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-3xl">
      {/* Section Heading */}
      <h2 className="text-xl font-bold text-[#003B71] mb-4">{title}</h2>

      {/* Links */}
      <div className="divide-y-2 divide-gray-300">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="flex items-center justify-between py-3 text-[#183059] hover:text-gray-700 hover:underline transition"
          >
            <span className="pr-4 text-lg leading-snug p-1">{item.label}</span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
};

const SchemesPage = () => {
  const facultyLinks = [
    { label: "Guidelines for Support for IITR Faculty for Visiting Institutions Abroad", href: "/forms/faculty-visiting-abroad-guidline" },
    { label: "Online Application Form", href: "/forms/faculty-visiting-abroad-form" },
    { label: "100% Advance for Visiting Institutions Abroad", href: "/100_ADVANCE__2.pdf" },
    { label: "Claim Form for Visiting Institutions Abroad", href: "/Claim_Form_For_IITR_Faculty.pdf" },
    { label: "Proforma for Direct Payment", href: "/Proforma_For_Direct_Payment.pdf" },
    { label: "TA Form (pdf)", href: "/TRAVELLING_ALLOWANCE_FORM.pdf" },
  ];

  const visitorLinks = [
    { label: "Online Application For Support for Faculty, Researchers, and Students from Foreign Institutions", href: "/forms/visitor-form" },
    { label: "Guidelines for Support for Faculty, Researchers, and Students from Foreign Institutions", href: "/forms/visitor-guidline" },
    { label: "Visitors from Foreign Institutions", href: "Visiting_Faculty_Researchers_and_Students_from_Foreign.pdf" },
    { label: "Travelling Allowance Bill – IIT Roorkee", href: "/TRAVELLING_ALLOWANCE_FORM.pdf" },
  ];

  const studentLinks = [
    { label: "Partial Support for Visiting Institutions Abroad", href: "/student/visiting_abroad" },
    { label: "Partial Support to Attend Good International Conferences", href: "/student/gic" },
    { label: "Partial Support for International Research Internships", href: "/student/ir" },
    { label: "Endowed Lecture series", href: "/student/lecture" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">
        Schemes for IITians
      </h1>

      {/* Card Sections */}
      <div className="flex flex-col gap-10 w-full items-center">
        <Card title="For Faculty" links={facultyLinks} />
        <Card title="For Visitors" links={visitorLinks} />
        <Card title="For Students" links={studentLinks} />
      </div>
    </main>
  );
};

export default SchemesPage;
