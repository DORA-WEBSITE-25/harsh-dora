import React from "react";
import TableFooter from "../Components/TableFooter";

const Avenues_alumni = () => {
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
              Avenues for Alumni–Institute Connect
            </div>
            {/* <div className="text-[1.04rem] font-medium text-[#a9512b] mb-1 mt-4">
                            Individual donors, or a group of donors, can choose from the schemes listed below:
                        </div>
                        <div className="text-[1.04rem] font-extrabold text-[#a9512b] mb-4">
                            Donations to IIT Roorkee are 100% deductible from Total Taxable Income u/s 80G of the Income Tax Act 1961
                        </div> */}
          </div>

          {/* Table: super wide, visible borders */}
          <div className="w-[97%] mx-auto overflow-x-auto mb-8">
            <table
              className="w-full border border-black text-[1.23rem] bg-white"
              style={{ tableLayout: "fixed" }}
            >
              <thead>
                <tr>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[6%]">
                    S. No.
                  </th>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[17%]">
                    Schemes
                  </th>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[57%]">
                    Activities
                  </th>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[20%]">
                    Contact Point
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2">I.</td>
                  <td className="border border-black p-2">Donations</td>
                  <td className="border border-black p-2">
                    There are several schemes which alumni can consider to
                    sponsor. For more details please visit:{" "}
                    <a
                      className="text-blue-700"
                      href="/alum-schemes"
                    >
                      Click Here
                    </a>
                  </td>
                  <td className="border border-black p-2">
                    DORA Office:{" "}
                    <a
                      href="mailto:dora.office@iitr.ac.in"
                      className="text-blue-700"
                    >
                      Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">II.</td>
                  <td className="border border-black p-2">
                    Mentoring of students
                  </td>
                  <td className="border border-black p-2">
                    Alumni may mentor the students of their core branch/ field
                    to help them build the capacity for better career
                    opportunities. They may also help students to get
                    industrial/real world professional exposure. For more
                    information, please visit:-{" "}
                    <a
                      className="text-blue-700"
                      href="https://www.iitrfriends.org/iitramp"
                    >
                      website
                    </a>
                  </td>
                  <td className="border border-black p-2">
                    DORA Office:{" "}
                    <a
                      href="mailto:dora.office@iitr.ac.in"
                      className="text-blue-700"
                    >
                      Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">III.</td>
                  <td className="border border-black p-2">
                    {" "}
                    Industry - Institute Interaction, partnership, internship,
                    vocational training and placement opportunities.
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      Alumni are welcome to (i) arrange drives for campus
                      recruitment, (ii) bring some learned business
                      personalities for delivering pre-placement talk, and (iii)
                      develop entrepreneurial skills in students.
                    </li>
                    <li>
                      Alumni may choose students to provide them internship
                      opportunity through short duration live projects in their
                      respective organizations.
                    </li>
                    <li>
                      Alumni may invite students in their organizational events
                      to give them exposure of new trends, technologies and
                      opportunities.
                    </li>
                    <li>
                      Alumni may help students for industrial visit to give them
                      a chance to get basic understanding about industrial
                      operations.
                    </li>
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      Prof. In charge, Training and Placement Office:{" "}
                      <a
                        href="mailto:placement @iitr.ac.in"
                        className="text-blue-700"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      DORA Office:{" "}
                      <a
                        href="mailto:dora.office@iitr.ac.in"
                        className="text-blue-700"
                      >
                        Email
                      </a>
                    </li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">IV.</td>
                  <td className="border border-black p-2"> CSR Funding</td>
                  <td className="border border-black p-2">
                    <li>
                      Helping IITR in getting Corporate Social Responsibility
                      (CSR) based projects.
                    </li>
                    <li>
                      CSR for TIDES
                      <ol>Facility expansion at the Incubator</ol>
                      <ol>
                        Resource expansion in terms of Human Capital, Managed
                        Services Support, Cloud Credit Support, Mentor Support
                        etc
                      </ol>
                      <ol>
                        Initiation Grant support to TIDES Incubated Startups.
                      </ol>
                    </li>
                  </td>
                  <td className="border border-black p-6">
                    DORA Office:{" "}
                    <a
                      href="mailto:dora.office@iitr.ac.in"
                      className="text-blue-700"
                    >
                      Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">V.</td>
                  <td className="border border-black p-2">
                    Alumni - Institute connect
                  </td>
                  <td className="border border-black p-2">
                    Strengthening local chapters
                  </td>
                  <td className="border border-black p-2">
                    DORA Office:{" "}
                    <a
                      href="mailto:dora.office@iitr.ac.in"
                      className="text-blue-700"
                    >
                      Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">VI.</td>
                  <td className="border border-black p-2">
                    Short- term teaching assignment
                  </td>
                  <td className="border border-black p-2">
                    If eligible, alumni may visit IITR for short-term teaching
                    assignments.
                  </td>
                  <td className="border border-black p-2">
                    DOFA Office:{" "}
                    <a href="mailto:dfa@iitr.ac.in" className="text-blue-700">
                      Email
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">VII.</td>
                  <td className="border border-black p-2">
                    Knowledge Sharing Sessions / Guest lectures
                  </td>
                  <td className="border border-black p-2">
                    Well placed Alumni can share knowledge through Corporate
                    Lectures / Guest Lectures.
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      Assoc. Dean Corporate Interaction:{" "}
                      <a
                        href="mailto:adci@ iitr.ac.in"
                        className="text-blue-700"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      DORA Office:{" "}
                      <a
                        href="mailto:dora.office@iitr.ac.in"
                        className="text-blue-700"
                      >
                        Email
                      </a>
                    </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          {/* <div className="w-[97%] mx-auto mt-4 text-[1.24rem] text-black">
            <span className="font-bold">Note:</span>
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0",
                marginTop: "7px",
                marginBottom: "18px",
              }}
            >
              <li>
                For any query or follow up in this regard, please contact DORA
                at dora.office@ iitr.ac.in
              </li>
            </ul>
          </div> */}
          <TableFooter  />
        </div>
      </div>
    </>
  );
};

export default Avenues_alumni;
