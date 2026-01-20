import React from "react";
import { ChevronRight } from "lucide-react";

const Donations = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p className="font-extrabold text-xl">Giving Back to IITR</p>
          <p>
            Donate before 31st March & claim 100% Deduction from the Taxable
            Income of that Financial Year. 
          </p>
          <p>
            Any generous alumnus and/or a philanthropist is welcome to join
            hands with IIT Roorkee to promote excellence among students,
            faculty, and departments through creating a corpus to support one or
            more{" "}
            <a
              href="/schemes-page"
              className="text-blue-600 hover:underline"
            >
              schemes
            </a>{" "}
            by one-time donation to the institute. However, these schemes are
            not exclusive but suggestive ones. You may write to the Dean of
            Resources & Alumni Affairs (DORA) at{" "}
            <a
              href="mailto:dora@iitr.ac.in"
              className="text-blue-600 hover:underline"
            >
              dora@iitr.ac.in
            </a>{" "}
            to learn more about other opportunities of establishing a
            partnership with IIT Roorkee. Please note that donations to IIT
            Roorkee are 100% exempt from Income Tax under Section 80G.
          </p>
          <div className="w-full">
            <img
              src="/donation.jpg"
              alt="People working on laptops"
              className="rounded-md shadow w-full object-cover"
            />
          </div>

          <p>
            Here is the list of Top Donors of IIT Roorkee:{" "}
            <a
              href="/DonorPage"
              className="text-blue-600 hover:underline"
            >
              Top Donors
            </a>
          </p>
          <p>
            To donate, please visit :{" "}
            <a
              href="/donation-account-page"
              className="text-blue-600 hover:underline"
            >
              click here
            </a>
          </p>
          <address className="not-italic leading-7">
            For any query, please contact- <br />
            Prof. R.D. Garg <br />
            Dean of Resources and Alumni Affairs <br />
            Indian Institute of Technology, Roorkee <br />
            Ph.{" "}
            <a href="tel:+911332285840" className="text-blue-600 hover:underline">
              01332-285840
            </a>{" "}
            <br />
            E-mail:{" "}
            <a href="mailto:dora@iitr.ac.in" className="text-blue-600 hover:underline">
              dora@iitr.ac.in
            </a>
          </address>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "Why Giving Back", href: "/giving-back" },
              { label: "Schemes", href: "/alum-schemes" },
              { label: "Esteemed Donors", href: "/esteemed-donor" },
              {
                label: "Foreign Contribution Regulation Act (FCRA)",
                href: "/fcra",
              },
              { label: "CSR Contribution", href: "/csr-contri" },
              { label: "Tax Exemption", href: "/tax-exemp" },
              { label: "Avenues for Alumni", href: "/avenues" },
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

export default Donations;
