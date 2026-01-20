// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-9 px-0">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-4">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-3">About</h2>
            <ul className="space-y-1 text-base">
              <li>
                <a
                  href="https://www.iitr.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  IITR Home
                </a>
              </li>
              <li>
                <a
                  href="/dora-staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Dean's Corner */}
          <div>
            <h2 className="text-lg font-bold mb-3">Dean's Corner</h2>
            <ul className="space-y-1 text-base">
              <li>
                <a
                  href="https://iitr.ac.in/Academics/Contact.html"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Academic Affairs
                </a>
              </li>
              <li>
                <a
                  href="https://iitr.ac.in/Administration/index.html"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Administration
                </a>
              </li>
              <li>
                <a
                  href="https://iitr.ac.in/Administration/Deans%20Structure/DOSW/index.html"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  DOSW
                </a>
              </li>
              <li>
                <a
                  href="https://iitr.ac.in/Administration/Deans%20Structure/DOFA.html"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Faculty Affairs
                </a>
              </li>
              <li>
                <a
                  href="https://finance.iitr.ac.in/"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Finance &amp; Planning
                </a>
              </li>
              <li>
                <a
                  href="https://www.iitr.ac.in/estateworks/"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="https://www.iitr.ac.in/sric/"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  SRIC
                </a>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h2 className="text-lg font-bold mb-3">Portals</h2>
            <ul className="space-y-1 text-base">
              <li>
                <a
                  href="https://ghbooking.iitr.ac.in/"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Guest House Booking
                </a>
              </li>
              <li>
                <a
                  href="https://mgcl.iitr.ac.in/"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="https://almamater.iitr.ac.in/donor-portal"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Donor Portal
                </a>
              </li>
              {/* <li>
                <a
                  href="https://iitrdora.iitr.ac.in/donors/batch-donors.php"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  Photo Upload Portal
                </a>
              </li> */}
            </ul>
          </div>

          {/* Awards & Scholarship */}
          <div>
            <h2 className="text-lg font-bold mb-3">Awards & Scholarship</h2>
            <ul className="space-y-1 text-base">
              <li>
                <a
                  href="https://iitrdora.iitr.ac.in/donors/batch-donors.php"
                  className="text-gray-400 hover:underline hover:text-white"
                >
                  SENATE COMMITTEE FOR SCHOLARSHIPS AND PRIZES(SCSP)
                </a>
              </li>
            </ul>
          </div>

          {/* Announcements */}
          <div>
            <h2 className="text-lg font-bold mb-3">Announcements</h2>
            <div className="space-y-7 mt-1">
              {/* Announcement 1 */}
              <div className="flex items-start">
                <div className="bg-blue-800 rounded px-3 py-0 mr-3 h-11 flex flex-col items-center justify-center">
                  <span className="font-semibold text-base leading-none mt-1 mb-0">
                    5
                  </span>
                  <span className="text-xs leading-none">March</span>
                </div>
                <div>
                  <a className="underline text-white text-base leading-tight cursor-pointer font-normal">
                    Leadership Lecture vSeries
                  </a>
                  <div className="text-sm mt-1">
                    Auditorium, IC&amp;SR Building
                  </div>
                </div>
              </div>
              {/* Announcement 2 */}
              <div className="flex items-start">
                <div className="bg-blue-800 rounded px-3 py-0 mr-3 h-11 flex flex-col items-center justify-center">
                  <span className="font-semibold text-base leading-none mt-1 mb-0">
                    5
                  </span>
                  <span className="text-xs leading-none">March</span>
                </div>
                <div>
                  <a className="underline text-white text-base leading-tight cursor-pointer font-normal">
                    Heritage Centre Day 2020 Celebrations
                  </a>
                  <div className="text-sm mt-1">
                    Heritage Centre, IIT Madras
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-blue-950 pt-2 pb-2 text-center text-base text-slate-100 opacity-90">
        © Copyright IIT Roorkee. Reproduction in any form without written
        consent prohibited.
      </div>
    </footer>
  );
};

export default Footer;
