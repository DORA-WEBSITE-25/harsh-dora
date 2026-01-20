import React from "react";
import { IoIosMail, IoMdCall } from "react-icons/io";
// Section Title with Red Underline
const SectionTitle = ({ text }) => (
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold uppercase text-gray-900">{text}</h1>
    <div className="w-20 h-[2px] bg-[#d32f2f] mx-auto mt-1"></div>
  </div>
);

// Info Block for Two-Column Content
const InfoBlock = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
    <p className="text-gray-800 text-sm leading-relaxed text-justify">
      {children}
    </p>
  </div>
);

const VerticalCard = ({ imgSrc, title }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center">
    <img
      src={imgSrc}
      alt={title}
      className="w-36 h-36 mx-auto object-contain rounded-full mb-4"
    />
    <h3 className="text-md font-bold text-gray-800">{title}</h3>
  </div>
);
const verticals = [
  {
    img: "roorkee-campus-banner.jpg",
    title: "IIT Roorkee Development Foundation",
  },
  { img: "maxresdefault.jpg", title: "Infrastructure" },
  { img: "R&D.jpg", title: "R&D" },
  { img: "mainbuilding.png", title: "James Thomason Heritage Building" },
  { img: "green.jpg", title: "Green Initiatives" },
  { img: "pe.jpg", title: "Promotion of Excellence" },
  { img: "sg.png", title: "Students Grants" },
  { img: "incubation.png", title: "Incubation" },
  { img: "hp_1.jpg", title: "Anushruti Academy for the Deaf (AAD)" },
];

const IITRDFCSR = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <SectionTitle text="Corporate Social Responsibility (CSR)" />

      {/* Banner Image */}
      <div className="mb-8">
        <img
          src="roorkee-campus-banner.jpg" // replace with actual path
          alt="IIT Roorkee Main Building"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Introductory Text */}
      <div className="text-center mb-10 space-y-3 text-xl bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-900 text-sm leading-relaxed">
          IIT Roorkee Development Foundation invites partnerships with
          organizations and individuals interested in investing in the
          Institute’s mission.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed">
          Your generous contributions would go a long way towards supporting our
          mission to foster innovative research and education initiatives that
          benefit society. We invite you to get in touch with us to identify and
          explore causes and projects that would benefit most from your support.
        </p>
        <p className="text-gray-900 text-sm leading-relaxed">
          All contributions will be acknowledged appropriately and the necessary
          receipts and documents for tax purposes will be sent to the
          contributors within the deadlines for tax purposes as required.
          Periodic reports will also be sent to the contributors as required.
        </p>
      </div>

      {/* Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoBlock title="Projects">
          The Institute has identified several areas and projects that could
          benefit greatly from corporate, alumni and philanthropic support. Many
          of these projects fall under the Corporate Social Responsibility
          categories listed in the CSR Rules 2014 (Schedule VII). There is no
          minimum limit for contributions to any project. We also welcome
          partial funding and joint funding from multiple contributors.
        </InfoBlock>

        <InfoBlock title="CSR Funding">
          We invite corporates to support projects under Corporate Social
          Responsibility (CSR Rules, 2014). We would be happy to discuss and
          explore these projects and partnerships in detail. IIT Roorkee
          Development Foundation will take responsibility for preparation and
          submission of necessary documents required by your organization’s CSR
          Committees. Get in touch with us at{" "}
          <a href="mailto:csr@iitr.ac.in" className="text-blue-600 underline">
            csr.df@iitr.ac.in
          </a>{" "}
          or
          <a href="tel:+91-9818416037" className="text-blue-600 underline">
            {" "}
            +91-9818416037
          </a>
        </InfoBlock>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Fund Raising Verticals Section */}
        <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">
          Fund Raising Verticals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verticals.map((item, index) => (
            <VerticalCard key={index} imgSrc={item.img} title={item.title} />
          ))}
        </div>

        {/* Contribution Methods Section */}
        <h2 className="text-lg font-bold text-gray-900 mb-6 text-center">
          Corporates can contribute in general to IIT Roorkee in one of two ways
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-800 leading-relaxed">
          {/* By Cheque/DD */}
          <div>
            <h3 className="font-bold mb-2">By Cheque/DD</h3>
            <p className="mb-2">
              Contribution can be made via cheque/DD with a covering letter
              mentioning the donor details and the project. Cheque/DD must be
              drawn in the name of IIT Roorkee Development Foundation, Indian
              Institute of Technology, Roorkee - 247667, Roorkee.
            </p>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p className="flex items-center gap-2 text-sm">
                <IoIosMail className="text-blue-600" />
                <a
                  href="mailto:csr@iitr.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  csr@iitr.ac.in
                </a>
              </p>
              <p href="tel:+91-9818416037" className="flex">
                <IoMdCall />
                +91-9818416037
              </p>
            </div>
          </div>

          {/* By Wire Transfer */}
          <div>
            <h3 className="font-bold mb-2">By Wire transfer</h3>
            <p className="mb-2">
              Please get in touch with us at{" "}
              <a
                href="mailto:csr@iitr.ac.in"
                className="text-blue-600 underline"
              >
                csr@iitr.ac.in
              </a>{" "}
              for details of IIT Roorkee account to transfer funds and where
              appropriate. In the case of wire transfer, a follow-up email
              listing the purpose, contact details, transaction reference
              number, and other necessary details is also required for
              administrative purposes.
              <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p className="flex items-center gap-2 text-sm">
                <IoIosMail className="text-blue-600" />
                <a
                  href="mailto:csr@iitr.ac.in"
                  className="text-blue-600 hover:underline"
                >
                  csr@iitr.ac.in
                </a>
              </p>
              <p href="tel:+91-9818416037" className="flex">
                <IoMdCall />
                +91-9818416037
              </p>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IITRDFCSR;
