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
                                    className="hover:underline"
                                >
                                    IITR Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://alumni.iitr.ac.in/contactus"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
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
                            <li>Academic Affairs</li>
                            <li>Administration</li>
                            <li>DOSW</li>
                            <li>Faculty Affairs</li>
                            <li>Finance &amp; Planning</li>
                            <li>Infrastructure</li>
                            <li>Resources and Alumni Affairs</li>
                        </ul>
                    </div>

                    {/* Portals */}
                    <div>
                        <h2 className="text-lg font-bold mb-3">Portals</h2>
                        <ul className="space-y-1 text-base">
                            <li>Guest House Booking</li>
                            <li>Library</li>
                            <li>Doner Portal</li>
                            <li>Photo Upload Portal</li>
                        </ul>
                    </div>

                    {/* Awards & Scholarship */}
                    <div>
                        <h2 className="text-lg font-bold mb-3">Awards & Scholarship</h2>
                        <ul className="space-y-1 text-base">
                            <li>
                                SENATE COMMITTEE FOR SCHOLARSHIPS AND PRIZES(SCSP)
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
                                    <span className="font-semibold text-base leading-none mt-1 mb-0">5</span>
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
                                    <span className="font-semibold text-base leading-none mt-1 mb-0">5</span>
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
                © Copyright IIT Roorkee. Reproduction in any form without written consent prohibited.
            </div>
        </footer>
    );
};

export default Footer;
