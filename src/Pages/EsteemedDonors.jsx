import React from "react";
import { ChevronRight } from "lucide-react";

const EsteemedDonors = () => {
  const links = [
    { href: "/giving-back", label: "Why Giving Back" },
    {
      href: "/alum-schemes",
      label: "Schemes",
    },
    { href: "donations", label: "Giving Back to IITR" },
    { href: "fcra", label: "Foreign Contribution Regulation Act (FCRA)" },
    {
      href: "/csr-contri",
      label: "CSR Contribution",
    },
    { href: "/tax-exemp", label: "Tax Exemption" },
    {
      href: "/avenues",
      label: "Avenues for Alumni",
    },
  ];
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>Esteemed Donors</p>
          <p>
            We are grateful to all of our generous alumni and philanthropists
            who have donated to IIT Roorkee to support and promote excellence in
            the institute. 
            <li>
              Here is the list of Top Donors of IIT Roorkee:  
              <a
                href="/DonorPage"
                className="text-blue-600 hover:underline"
              >
                Click Here
              </a>
            </li>
            <li>
              Here is the list of Donors of IIT Roorkee:  
              <a
                href="https://iitrdora.iitr.ac.in/news/ypages/list_donor.php"
                className="text-blue-600 hover:underline"
              >
                Click Here
              </a>
            </li>
            <li>
              Here is the list of Batch Donors of IIT Roorkee:  
              <a
                href="/batch-donors"
                className="text-blue-600 hover:underline"
              >
                Click Here
              </a>
            </li>
          </p>
        </div>

        {/* Right Column - Important Links */}
        {/* <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "Why Giving Back", href: "/about-dora" },
              { label: "Schemes", href: "https://www.iitr.ac.in/" },
              { label: "Giving Back to IITR", href: "https://www.iitr.ac.in/" },
              {
                label: "Foreign Contribution Regulation Act (FCRA)",
                href: "https://www.iitr.ac.in/",
              },
              { label: "CSR Contribution", href: "https://www.iitr.ac.in/" },
              { label: "Tax Exemption", href: "https://www.iitr.ac.in/" },
              { label: "Avenues for Alumni", href: "https://www.iitr.ac.in/" },
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
        </aside> */}
        <div className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h3 className="text-lg font-bold mb-4 py-2 border-b border-white/20">Important Links</h3>
          <div className="">
            {links.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center justify-between py-2 border-b border-white/20 text-white hover:text-yellow-300 transition"
                // target={item.url.endsWith(".pdf") ? "_blank" : "_self"}
                // rel="noopener noreferrer"
              >
                {item.label}
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EsteemedDonors;
