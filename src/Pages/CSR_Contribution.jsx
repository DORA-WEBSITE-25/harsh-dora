import React from "react";
import TableFooter from "../Components/TableFooter";

const CSR_Contribution = () => {
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
              Projects / Activities that can be supported by Corporates / PSUs
              through CSR contributions*
            </div>
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
                    Scheme
                  </th>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[57%]">
                    Activities
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Section 1 */}

                <tr>
                  <td className="border border-black p-2">1.</td>
                  <td className="border border-black p-2">Environment & Energy
</td>
                  <td className="border border-black p-6">
                    <li>Green campus oriented activities such as Go green drives/ Electric Vehicles</li>                   
                    <li>Bicycle donation</li>                   
                    <li>Renewable energy driven projects that may rebuild the environment with innovation</li>                   
                    <li>Recycling of garbage; Waste management</li>                   
                    <li>Operations & maintenance of wastewater treatment plant</li>                   
                    <li>Rainwater Harvesting</li>                   
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">2.</td>
                  <td className="border border-black p-2">
                    Health & Hygiene
                  </td>
                  <td className="border border-black p-6">
                    <li>Sustainable rural development initiatives</li>                   
                    <li>Awareness campaigns to maintain hygiene in rural areas</li>                 
                    <li>Cattle vaccination initiatives in rural areas</li>                   
                    <li>Free coaching classes for school students, e.g., JEE (Advanced)</li>                   
                    <li>Off campus and on campus cleanliness drives</li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">3.</td>
                  <td className="border border-black p-2">
                    Education
                  </td>
                  <td className="border border-black p-6">
                    <li>Infrastructure development & their operation/ maintenance to promote barrier free campus</li>                   
                    <li>Education to differently abled children</li>                   
                    <li>Women empowerment through skill development initiatives</li>                   
                    <li>Travel Support to students for their internships at highly reputed university departments or research labs or to present papers at good international conferences</li>                   
                    <li>Project funding for students and scholars to participate at National/International competitions</li>                   
                    <li>Financial support to meet out expenditures of or to renovate students' laboratories and/or add equipment’s in the laboratories</li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">4.</td>
                  <td className="border border-black p-2">
                    Entrepreneurship
                  </td>
                  <td className="border border-black p-6">
                    <li>Contributions to support TIDES Incubated Startups.</li>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="w-[97%] mx-auto mt-4 text-[1.24rem] text-black">
            
                <span> * The above list is suggestive but not exclusive. We welcome CSR contributions for supporting various activities related to the Sustainable Development Goals (SDGs).
                    </span> 
            {/* <span className="font-bold">Note:</span> */}
            <ul
              style={{
                listStyleType: "none",
                paddingLeft: "0",
                marginTop: "7px",
                marginBottom: "18px",
              }}
            >
              
              <li>
                * For making countribution, please click at the following URL: <a className="text-blue-700" 
                href="/donation-account-page" target="_blank" rel="noopener noreferrer">
                    Click Here
                </a>
              </li>
            </ul>
          </div>

          <TableFooter />
        </div>
      </div>
    </>
  );
};

export default CSR_Contribution;
