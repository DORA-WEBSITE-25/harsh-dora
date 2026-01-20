import React from "react";
import { ChevronRight } from "lucide-react";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareThreads,
} from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="w-full">
      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 text-gray-800 leading-relaxed">
        <p className="font-medium text-xl">Please follow us at our social media profiles:</p>
        <div className="flex items-center gap-5">
        <a
          href="https://www.facebook.com/DORAIITR/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] hover:scale-110 transition-transform"
        >
          <FaSquareFacebook size={60} />
        </a>
        <a
          href="https://x.com/doraiitr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:scale-110 transition-transform"
        >
          <FaSquareXTwitter size={60} />
        </a>
        <a
          href="https://www.instagram.com/dora_iitr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E4405F] hover:scale-110 transition-transform"
        >
          <FaSquareInstagram size={60} />
        </a>
        <a
          href="https://www.linkedin.com/in/doraiitr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A66C2] hover:scale-110 transition-transform"
        >
          <FaLinkedin size={60} />
        </a>
        {/* <a
          href="https://www.threads.net/@iitroorkee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:scale-110 transition-transform"
        >
          <FaSquareThreads size={60} />
        </a> */}
      </div>
    </div>

        {/* Right Column - Important Links */}
        <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">Important Links</h2>
          <ul className="space-y-3">
            {[
              { label: "Director's Message", href: "/dir-message" },
              { label: "IITR in the News", href: "https://www.iitr.ac.in/" },
              {
                label: "Snippets",
                href: "https://alumni.iitr.ac.in/more/news/comalumni",
              },
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

export default SocialMedia;
