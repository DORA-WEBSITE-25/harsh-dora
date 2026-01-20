import React from "react";
import TableFooter from "../Components/TableFooter";

const AlumSchemes = () => {
    return (
        <>
            {/* <HeroSection title="SCHEMES" subtitle="" /> */}
            <div className="min-h-screen w-full bg-[#edeaea] flex justify-center pt-6 pb-12 px-0">
                <div className="w-full max-w-[1600px] px-0">
                    {/* Thick black line above */}
                    <div className="w-[97%] mx-auto border-t-[4px] border-black mb-3" />

                    {/* Title and subtitle section */}
                    <div className="text-center mb-4 w-full">
                        <h1 className="text-5xl font-extrabold text-black mt-2 mb-2 tracking-tight">
                            DEAN OF RESOURCES AND ALUMNI AFFAIRS OFFICE
                        </h1>
                        {/* Thin black line below */}
                        <div className="w-[97%] mx-auto border-b-[4px] border-black my-2" />
                        <div className="text-[2.1rem] font-medium text-black mb-2 mt-6">
                            Schemes for Promoting Excellence
                        </div>
                        <div className="text-[1.04rem] font-medium text-[#a9512b] mb-1 mt-4">
                            Individual donors, or a group of donors, can choose from the schemes listed below:
                        </div>
                        <div className="text-[1.04rem] font-extrabold text-[#a9512b] mb-4">
                            Donations to IIT Roorkee are 100% deductible from Total Taxable Income u/s 80G of the Income Tax Act 1961
                        </div>
                    </div>

                    {/* Table: super wide, visible borders */}
                    <div className="w-[97%] mx-auto overflow-x-auto mb-8">
                        <table className="w-full border border-black text-[1.23rem] bg-white" style={{ tableLayout: "fixed" }}>
                            <thead>
                            <tr>
                                <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[6%]">S. No.</th>
                                <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[57%]">Activity/Scheme and Purpose</th>
                                <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[17%]">Donation required to sponsor <br />For 10 Years</th>
                                <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[20%]">Perpetual</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* Section 1 */}
                            <tr>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]">1.</td>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]" colSpan={3}>Infrastructure Development</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">I.</td>
                                <td className="border border-black p-2">Establishment of IIT Roorkee Research Park</td>
                                <td className="border border-black p-2">Rs. 195 crores</td>
                                <td className="border border-black p-2"></td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2"></td>
                                <td className="border border-black p-2">Renovation of James Thomason Building</td>
                                <td className="border border-black p-2">Rs. 20.23 crores</td>
                                <td className="border border-black p-2"></td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2"></td>
                                <td className="border border-black p-2">Construction of a Foot-over-Bridge</td>
                                <td className="border border-black p-2">Rs. 3.50 crores</td>
                                <td className="border border-black p-2"></td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2"></td>
                                <td className="border border-black p-2">Renovation of Academic Spaces</td>
                                <td className="border border-black p-2">Rs. 57.53 crores</td>
                                <td className="border border-black p-2"></td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2"></td>
                                <td className="border border-black p-2">Renovation of Hostels</td>
                                <td className="border border-black p-2">Rs. 116.55 crores</td>
                                <td className="border border-black p-2"></td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">II.</td>
                                <td className="border border-black p-2">
                                    Naming Opportunity :Naming of buildings and various facilities, e.g., labs, seminar rooms, meeting rooms, auditoriums etc.
                                </td>
                                <td className="border border-black p-2" colSpan={2}>Case to case basis</td>
                            </tr>

                            {/* Section 2 */}
                            <tr>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]">2.</td>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]" colSpan={3}>Schemes for Students</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2a.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Gold Medal to Departmental Topper (UG/PG)</span><br />
                                    <span className="font-normal text-[1.1rem]">A Gold Medal will be established to be presented to the Department (decided by the donor) Topper for UG/ PG.</span>
                                </td>
                                <td className="border border-black p-2">Rs. 4.40 Lac</td>
                                <td className="border border-black p-2">Rs. 12.5 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2b.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Merit-Cum-Means (MCM) Scholarship/ Cash prize / Awards</span>
                                    <br />
                                    <span className="font-normal text-[1.08rem]">The objective of the Scheme is to provide financial assistance to poor and meritorious students to enable them to pursue professional and technical courses.</span>
                                </td>
                                <td className="border border-black p-2">
                                    Rs. 2.5 Lac <br />
                                    <span className="text-[1.11rem]">(Scholarship of Rs. 20000/- to be given for approx. <b>17 years</b>)</span>
                                </td>
                                <td className="border border-black p-2">Rs. 5 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2c.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Financial Aid for Students</span>
                                    <br />
                                    <span className="font-normal text-[1.06rem]">To help one or more needy students with a lumpsum amount, who are facing financial hardships because of their personal circumstances.</span>
                                </td>
                                <td className="border border-black p-2">Rs. 4.40 Lac or more</td>
                                <td className="border border-black p-2">Rs. 12.5 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2d.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Travel Support to Students</span>
                                    <br />
                                    <span>(<b>x</b>) To present papers in Good International Conferences<br />
                      (<b>y</b>) For International Research Internships</span>
                                </td>
                                <td className="border border-black p-2">Any amount &gt; Rs. 5.0 Lacs</td>
                                <td className="border border-black p-2">Any amount &gt; Rs. 25 Lacs</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2e.</td>
                                <td className="border border-black p-2 font-bold">Support for Students’ Technical Projects</td>
                                <td className="border border-black p-2">Rs. 16.25 Lac</td>
                                <td className="border border-black p-2">Rs. 50 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2f.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Best B.Tech. Project of the Department Award</span>
                                    <br />
                                    <span>The Award to the best B.Tech. The project of the Department shall be awarded to the eligible final year group of students having the most significant contribution to their B.Tech Project submitted.</span>
                                </td>
                                <td className="border border-black p-2">N.A</td>
                                <td className="border border-black p-2">Rs. 5.0 Lacs: Best B.Tech. Project Award of Rs. 20,000/- per team</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2g.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">James Thomason Scholarship</span>
                                    <br />
                                    <span>Students with &lt; 250 AIR in JEE (Advanced) and admitted to IIT Roorkee will get Rs 25000/- per month for the entire duration of their program.</span>
                                </td>
                                <td className="border border-black p-2">Rs. 20.35 Lac</td>
                                <td className="border border-black p-2">Rs. 62.5 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">2h.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Excellence in Doctoral Research Award</span>
                                    <br />
                                    <span>This award aims to honor exceptional Ph.D. scholar who demonstrates outstanding contributions to their respective field of study.</span>
                                </td>
                                <td className="border border-black p-2">Rs. 4.40 Lac</td>
                                <td className="border border-black p-2">Rs. 12.5 Lac</td>
                            </tr>

                            {/* Section 3 */}
                            <tr>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]">3.</td>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]" colSpan={3}>Schemes for Faculties</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">3a.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Chair Professorship for Faculty</span>
                                    <br />
                                    Institute Chair Professorships for faculty who are well recognized on the national/international stage for their contributions.
                                </td>
                                <td className="border border-black p-2">Rs. 49.00 Lac</td>
                                <td className="border border-black p-2">Rs. 1.5 Crore*</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">3b.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Research Fellowship for Mid-career Faculty/ New faculty</span>
                                    <br />
                                    Fellowships to recognize mid-career faculty members who are doing outstanding research in IITR. Fellowship to encourage bright, young academics to join IITR as faculty.
                                </td>
                                <td className="border border-black p-2">Rs. 32.5 Lac</td>
                                <td className="border border-black p-2">Rs. 1 Crore*</td>
                            </tr>

                            {/* Section 4 */}
                            <tr>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]">4.</td>
                                <td className="border border-black p-2 font-bold bg-[#f6f6f6]" colSpan={3}>Other Schemes</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">I.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Departmental Endowed Lecture Series</span>
                                    <br />
                                    To fund the travel of well recognized experts to the department for giving a talk and interacting with the faculty and students of the department.
                                </td>
                                <td className="border border-black p-2">Rs. 4.10 Lac</td>
                                <td className="border border-black p-2">Rs. 12.5 Lac</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">II.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Anushruti Academy for the Deaf (A Social Initiative of IIT Roorkee)</span>
                                    <br />
                                    The school delivers quality education to differently abled children with speech and hearing impairments in and around Roorkee, Uttarakhand.
                                </td>
                                <td className="border border-black p-2">Any amount can be gifted</td>
                                <td className="border border-black p-2">Any amount can be gifted. It will also be 100% deductible from taxable income u/s 80G.</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">III.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">TIDES Business Incubator</span>
                                    <br />
                                    Technology Incubation and Entrepreneurship Development Society (TIDES) has been established to promote innovation and entrepreneurship in the region.
                                </td>
                                <td className="border border-black p-2">Any amount can be gifted</td>
                                <td className="border border-black p-2">Any amount can be gifted. It will also be 100% deductible from taxable income u/s 80G.</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-2">IV.</td>
                                <td className="border border-black p-2">
                                    <span className="font-bold">Gift</span>
                                    <br />
                                    Smaller, general purpose, donations are equally welcome. They can be given annually, or whenever convenient.
                                </td>
                                <td className="border border-black p-2">Any amount can be gifted</td>
                                <td className="border border-black p-2">Any amount can be gifted. It will also be 100% deductible from taxable income u/s 80G.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Notes */}
                    <div className="w-[97%] mx-auto mt-4 text-[1.24rem] text-black">
                        <span className="font-bold">Note:</span>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '7px', marginBottom: '18px' }}>
                            <li>1. Donations above Rs. 10 Lacs can be paid in installments.</li>
                            <li>2. Donations to IIT Roorkee are eligible for 100% exemption u/s 80G of the Income Tax Act 1961.</li>
                            <li>3. Donor(s) can name the scheme as per his/her/their wish. For example, donor(s) can name a Chair Professorship as “XYZ Chair Professor” in his/her/their or any other name.</li>
                            <li>4. The above listed schemes are existing. Any other scheme can also be initiated, in consultation with the Institute.</li>
                            <li>5. Every year, a financial statement showing the opening amount, interest earned, expenditure, and balance amount shall be emailed to the donor.</li>
                            <li>6. Every year, the institute will email the list of beneficiaries to the donor.</li>
                            <li>7. For making an online donation, please click <a href="#home" className="underline text-black">here</a>.</li>
                        </ul>
                    </div>

                    <TableFooter />
                </div>
            </div>
        </>
    );
};

export default AlumSchemes;
