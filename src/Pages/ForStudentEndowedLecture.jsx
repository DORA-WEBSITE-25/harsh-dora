import Reac, { useState } from "react";
import { ChevronRight } from "lucide-react";

const ForStudentEndowedLecture = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
          <p className="font-bold text-2xl text-center justify-center">
            Endowed Lecture series
          </p>
          <p className="text-center justify-center">
            Guidelines for Endowed Lecture series at IIT Roorkee
          </p>
          <p className="font-bold">
            Endowed Lecture series Guidelines RESOLUTION No. EFMC/09/2017: THE
            EFMC CONSIDERED THE ITEM AND APPROVED
          </p>
          <p>
            The proposal for an annual Endowed Lecture Series in every
            department and center of the institute. The expenditure on the
            scheme will be met out from the interest income of General Corpus.
            The scheme will support the travel of experts within India and a
            token honorarium of Rs. 10000/-. Bigger departments will be
            encouraged to have two endowed lecture series.
          </p>
          <p>
            The departments will be encouraged to name the lecture series after
            an iconic national figure in the area of the department. He/she
            could even be an eminent alumnus or a former faculty of the
            department who may have either made significant contributions to
            his/her field of research or contributed significantly to the
            establishment and growth of the department. Necessary permissions in
            this regard will be sought from the concerned family if required.
          </p>
          <p>
            <a
              href="/Endowned_Lecture_series.doc"
              className="text-blue-600 font-medium hover:underline"
            >
              Proforma for TA/ Honorarium to Expert/Guest speaker of Endowed
              Lecture Series NEW!
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
                label: "Partial Support for Visiting Institutions Abroad",
                href: "/student/visiting_abroad",
              },
              {
                label:
                  "Partial Support to Attend Good International Conferences",
                href: "/student/gic",
              },
              {
                label: "Partial Support for International Research Internships",
                href: "/student/ir",
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

export default ForStudentEndowedLecture;
