import React from "react";
import { ChevronRight } from "lucide-react";

const DirectorMessage = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed text-justify">
            <div className="w-full">
              <img
                src="/Director.jpg"
                alt="People working on laptops"
                className="rounded-md shadow w-full object-cover"
              />
            </div>
          <p>It is a great pleasure and honour for me to serve as the Director of Indian Institute of Technology Roorkee. I take this as a privilege to extend my warm welcome to all alumni of Indian Institute of Technology Roorkee.</p>
          <p>The Indian Institute of Technology with a legacy of more than 175 years has been a tradition for excellence. The mission of our institution is “To create an environment that shall foster the growth of intellectually capable, innovative and entrepreneurial professionals, who shall contribute to the growth of Science and Technology in partnership with Industry and develop and harness it for the welfare of the nation and mankind”.</p>
          <p>Ours is a bond of a lifetime. The campus may have let you go, but we expect you to come back – though some of you do come back every year to receive the Distinguished Alumnus Award (DAA), the Distinguished Young Alumnus Award (DYAA) and the Outstanding Service Award (OSA) – to inspire our students, to raise the bar, to expand our idea of the possible.  To realize these objectives, the Institute has established ‘Office of Resources & Alumni Affairs’, the primary communication link between you and the Institute. The Office of Resources & Alumni Affairs has always been instrumental in setting up faculty and student awards, organizing in-house alumni meetings, and conducting social outreach activities through chapters. Increasing recognition and constant support from the alumni bears testimony to the fact that the department has been successful so far in achieving its goal.</p>
          <p>The institute recognizes, acknowledges, and embraces our alumni as vital stakeholders in the developments of the Institute and to take it to even greater heights.
          </p>
          <p>
            I am hopeful that the networking among the alumni and with the Institute will be augmented along with strategizing more effective alumni service and outreach programs. I also hope that the Office of Resources & Alumni Affairs will be able to set up a grand reunion fund bringing together the alumni to support social outreach and welfare activities benefitting the students, faculty, staff, infrastructure, alumni, and the people of India at large.
          </p>
          <p>
            Our target is to ensure that no member of the family feels disconnected. I believe that the alumni, having a plethora of experience, can mentor students on the right path and help the institute achieve greater heights. 
          </p>
          <p>
            Hearty greetings from your beloved alma mater. <br />
            <br />
            Warm regards, <br />
            Prof. K. K. Pant <br />
            Director <br />
            India Institute of Technology Roorkee <br />
            <br />
          </p>
        </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "IITR in the News", href: "https://www.iitr.ac.in/" },
              { label: "Snippets", href: "https://alumni.iitr.ac.in/more/news/comalumni" },
              { label: "Social Media", href: "/social-media" },
              {
                label: "Books by IITR Alumni",
                href: "/book-alumni",
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

export default DirectorMessage;
