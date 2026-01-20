import React from "react";
import TableFooter from "../Components/TableFooter";

const DonationAccountPage = () => {
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
              Donation Methods
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
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[47%]">
                    Donor
                  </th>
                  <th className="border border-black p-2 bg-[#f6f6f6] font-bold w-[47%]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2">I.</td>
                  <td className="border border-black p-2">
                    <img src="/india_logo.png" width="auto" />
                    Donors – Indian or NRI (From NRE/NRO accounts)
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      To transfer online donations using Net Banking / Credit /
                      Debit Cards,
                    </li>
                    <li>
                      Please Click :
                      <a
                        className="text-blue-700"
                        href="https://octopod.co.in/academy/donation/9aa28d121b70f05abd864abdf7327dcb/Donation"
                        target="_blank"
                      >
                        <img src="/hdfc.png" width="150px" />
                      </a>
                    </li>
                    <li>
                      QR Code for IIT Roorkee Donation Account :
                      <img src="/hdfcQRcode.png" width="150px" />
                    </li>
                    <li>
                      To transfer donations through RTGS/NEFT
                      {/* ✅ Bank Details Section */}
                      <div className="mt-4 border border-gray-400 rounded-lg p-6 bg-gray-50">
                        <h3 className="font-semibold mb-2">
                          Bank Account Details:
                        </h3>
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            <strong>Name of Bank:</strong>HDFC Bank
                          </li>
                          <li>
                            <strong>Branch:</strong>HDFC BANK LTD PURWA WALI
                            DEHRADUN ROAD GANESHPUR ROORKEE-247667 UTTARAKHAND
                          </li>
                          <li>
                            <strong>Branch Code:</strong>0657
                          </li>
                          <li>
                            <strong>Type of Account:</strong>Saving Bank Account
                          </li>
                          <li>
                            <strong>Bank Account Name:</strong>IIT Roorkee
                            Donation Account
                          </li>
                          <li>
                            <strong>Bank Account No.:</strong>50100519629431
                          </li>
                          <li>
                            <strong>IFSC CODE:</strong>HDFC0000657
                          </li>
                          <li>
                            <strong>SWIFT CODE:</strong>HDFCINBB
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      To send an A/C payee multicity cheque/DD,
                      <div className="mt-4 border border-gray-400 rounded-lg p-6 bg-gray-50">
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            <strong>Payable to:</strong> Registrar IIT Roorkee
                          </li>
                          <li>
                            <strong>Mailing address:</strong>
                            Dean of Resources & Alumni Affairs (DORA) James
                            Thomason Building (Main Building) IIT Roorkee,
                            Roorkee -247 667 <br />
                            Tel: (+91 1332) 285840, Fax: (+91 1332) 273560
                          </li>
                          <li>
                            <strong>E-mail:</strong>{" "}
                            <a
                              className="text-blue-700"
                              href="mailto:dora.office@iitr.ac.in"
                            >
                              Click Here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">II.</td>
                  <td className="border border-black p-2">
                    <img src="/USA_Flag.png" width="auto" />
                    Donors – The United States of America**
                  </td>
                  <td className="border border-black p-6">
                    Note: If you are a U.S. resident, you can donate through the
                    options given below: It may help you to get a matching
                    donation from your company.
                    <li>
                      To transfer online donations,
                      <a
                        className="text-blue-700"
                        href="https://www.iitr-heritagefund.org/giving-back-donations"
                      >
                        Click Here
                      </a>
                    </li>
                    <div className="mt-4 border border-gray-400 rounded-lg p-6 bg-gray-50">
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <strong>Payable to: </strong>IIT Roorkee Heritage
                          Foundation
                        </li>
                        <li>
                          <strong>Mailing address:</strong>Mr Aditya Gupta
                          Treasurer, IITRHF, 4353 La Cosa Ave, Fremont, CA
                          94536, USA
                        </li>
                        <li>
                          <strong>Website: </strong>
                          <a className="text-blue-700" href="www.iitrhf.org">
                            Click Here
                          </a>
                        </li>
                        <li>
                          <strong>E-mail: </strong>
                          <a
                            className="text-blue-700"
                            href="mailto:aditya.gupta@iitrhf.org"
                          >
                            Click Here
                          </a>
                        </li>
                        <li>
                          <strong>Note:</strong>
                          "IIT Roorkee Heritage Foundation is a Tax-exempt
                          Public Charity under the IRS Section 501(C)(3) of USA"
                        </li>
                      </ul>
                    </div>
                    <li>
                      To transfer online donations,{" "}
                      <a
                        className="text-blue-700"
                        href="https://www.iitrfoundation.org/fordonors.html"
                      >
                        Click Here
                      </a>
                      <div className="mt-4 border border-gray-400 rounded-lg p-6 bg-gray-50">
                        <ul className="list-disc list-inside space-y-1">
                          <li>
                            <strong>Payable to:</strong>IIT Roorkee Foundation,
                            Inc.
                          </li>
                          <li>
                            <strong>Mailing address:</strong>
                            C/O Mr Mohinder L. Nayyar 20894 Saber Jet Place
                            ASHBURN, VA 20147, USA
                          </li>
                          <li>
                            <strong>Website: </strong>
                            <a
                              className="text-blue-700"
                              href="https://www.iitrfoundation.org"
                            >
                              Click Here
                            </a>
                          </li>
                          <li>
                            <strong>E-mail: </strong>
                            <a
                              className="text-blue-700"
                              href="mailto:nayyar1222@gmail.com"
                            >
                              Click Here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">III.</td>
                  <td className="border border-black p-2">
                    <img src="/UK_flag.png" width="auto" />
                    Donors – The United Kingdom
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      Note: If you are a United Kingdom resident, you can donate
                      through IIT Alumni Association UK.
                    </li>
                    <li>
                      To Donate,
                      <a
                        className="text-blue-700"
                        href="https://www.iituk.org/project/iit-roorkee-donations/"
                      >
                        Click Here
                      </a>
                    </li>
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2">IV.</td>
                  <td className="border border-black p-2">
                    <img src="/world_flag.png" width="auto" />
                    Donors – The World (Foreign Citizen)
                  </td>
                  <td className="border border-black p-6">
                    <li>
                      To transfer donations in FCRA A/C of IIT Roorkee which can
                      receive donations from foreign citizen(s) including PIO
                      (Person of Indian Origin)
                    </li>
                    <div className="mt-4 border border-gray-400 rounded-lg p-6 bg-gray-50">
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          <strong>Bank Account no.: </strong>40062847173
                        </li>
                        <li>
                          <strong>Account Type:</strong>FCRA Saving Account
                        </li>
                        <li>
                          <strong>A/C Name:</strong>FCRA - Indian Institute of
                          Technology Roorkee
                        </li>
                        <li>
                          <strong>Branch Code:</strong>000691
                        </li>
                        <li>
                          <strong>IFSC Code:</strong>SBIN0000691
                        </li>
                        <li>
                          <strong>SWIFT Code:</strong>SBININBB104
                        </li>
                        <li>
                          <strong>Address:</strong>FCRA Cell, 4th Floor, State
                          Bank of India, New Delhi Main Branch, 11 Sansad Marg,
                          New Delhi - 110001
                        </li>
                      </ul>
                    </div>
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
          <TableFooter />
        </div>
      </div>
    </>
  );
};

export default DonationAccountPage;
