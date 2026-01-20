import React from "react";
import Map from "../Components/Map";
import { ChevronRight } from "lucide-react";

const GlobalAlumniPage = () => {
  return (
    <>
      {/* <div className="w-full max-w-md mx-auto">
        <Map className="w-full h-64 md:h-80 rounded-lg shadow-md" />
      </div> */}
      
      <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed">
        <p className="font-medium text-xl text-center justify-center">
          <strong>NOTE:</strong> If you have difficulty in creating/updating
          your profile, please feel free to email your details [Name, Email,
          Year (Degree Awarded), Degree, Branch, City/Town and Country] to {" "}
          <a className="text-blue-600" href="mailto:alumni-connect@iitr.ac.in">alumni-connect@iitr.ac.in. </a> We will create/update your profile and send
          you the User ID and Password. You can also email{" "}
          <a className="text-blue-600" href="mailto:alumni-connect@iitr.ac.in">alumni-connect@iitr.ac.in. </a> or WhatsApp(+91-9084729192) for any other
          queries related to alumni database updation. Thank you!
        </p>
        <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p>
            <a
              href="/global_network_alumni"
              className="text-blue-600 font-medium hover:underline"
            >
              Global Network of IIT Roorkee Alumni   New!
           </a>
          </p>

          <p>
            <a
              href="/forms/alumni-signup-form"
              className="text-blue-600 font-medium hover:underline"
            >
              Create a new profile
            </a>
          </p>
          <p>
            <a
              href="/forms/alumni-login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login/Update existing profile
            </a>
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Important Links</h2>
          <ul className="space-y-3">
            {[
              {
                href: "https://iitr.ac.in/Academics/VerificationTranscriptsCertificates.html",
                label: "Transcripts/Verification/Degree/Duplicate Degree/Duplicate Grade Sheet/Transfer Certificate",
              },
              {
                href: "/SGPA-CGPA.pdf",
                label: "CGPA to  Percentage conversion certificate",
              },
              {
                href: "/Eng_Lan_Certificate.pdf",
                label: "Certificate for Medium of Instruction is English",
              },
              {
                href: "/Revised_rate.pdf",
                label: "Revised Rates of Transcripts",
              },
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
    <Map className="w-full h-64 md:h-80 rounded-lg shadow-md" />
      </div>
    </>
  );
};

export default GlobalAlumniPage;
