import React from "react";
import { IoIosMail, IoMdCall } from "react-icons/io";
import { ChevronRight } from "lucide-react";
// Reusable DirectorCard Component
const DirectorCard = ({ image, name, designation }) => {
  return (
    <div className="bg-gray-100 border-8 rounded-lg shadow-2xl p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-36 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="font-bold text-lg text-gray-900">{name}</h3>
      <p className="text-slate-500 text-sm font-semibold mt-1">{designation}</p>
    </div>
  );
};

const ProfileSection = ({
  title,
  image,
  name,
  designation,
  description,
  email,
  phone,
}) => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Image + Name + Designation */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Title */}
          <h2 className="text-black font-bold text-xl mb-4">{title}</h2>
          <img
            src={image}
            alt={name}
            className="w-40 h-48 object-cover rounded-md border-8 shadow-2xl mb-3"
          />

          {/* Name */}
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>

          {/* Designation */}
          <p className="text-slate-500 text-sm font-semibold">{designation}</p>
          {/* Contact Info */}
          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p className="flex items-center gap-2 text-sm">
              <IoIosMail className="text-blue-600 text-md sm:text-lg" />
              <a
                href={`mailto:${email}`}
                className="text-blue-600 text-md sm:text-lg hover:underline"
              >
                {email}
              </a>
            </p>
            <p className="flex text-md sm:text-lg">
              <IoMdCall />
              {phone}
            </p>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-2">
          {/* Description */}
          <div className="space-y-3 text-md sm:text-lg leading-relaxed text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const IITRDF = () => {
  const directors = [
    {
      name: "Prof. Kamal Kishore Pant",
      designation: "Director IIT Roorkee",
      image: "/dir_kk.jpg",
    },
    {
      name: "Prof. U.P. Singh",
      designation: "Deputy Director, IIT Roorkee",
      image: "upsingh.jpg",
    },
    {
      name: "Prof. R. D. Garg",
      designation: "Dean (DoRA), IIT Roorkee",
      image: "RD.jpg",
    },
    {
      name: "Prof. Deepak Khare",
      designation: "Dean (F&P), IIT Roorkee",
      image: "DeepakKhare.jpg",
    },
    {
      name: "Prof. Mukat Lal Sharma",
      designation: "Professor Earthquake Department, IIT Roorkee",
      image: "mls.jpg",
    },
    {
      name: "Prof. Akshay Dwivedi",
      designation: "Dean (SRIC), IIT Roorkee",
      image: "akshay.jpg",
    },
    {
      name: "Prof. Manish Shrikhande",
      designation: "Professor Earthquake Department, IIT Roorkee",
      image: "manish.jpg",
    },
    {
      name: "Prof. Bhola Ram Gurjar",
      designation: "Director NITTTR, Chandigarh",
      image: "BR.jpeg",
    },
    {
      name: "Prof. Partha Roy",
      designation:
        "Professor Department of Biosciences and Bioengineering, IIT Roorkee",
      image: "Partha.jpg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase text-gray-900">
          IIT Roorkee Development Foundation
        </h1>
        <div className="w-24 h-0.5 bg-red-600 mx-auto mt-2"></div>
      </header>

      {/* Introduction Paragraph */}
      <section className="mb-12 text-justify leading-relaxed space-y-4 text-md sm:text-lg">
        <p>
          Welcome to the official webpage of the IIT Roorkee Development
          Foundation (ITRDF). The Indian Institute of Technology Roorkee, an
          institution of immense national significance, has been at the
          forefront of higher technological education, engineering advancement,
          and impactful research since its establishment in 1847. Our
          institution remains dedicated to cultivating a dynamic learning
          environment, fostering not just individual academic contributions, but
          advancing transformational research solutions for the betterment of
          our great nation.
        </p>
        <p>
          While the Institute receives substantial funding from the Central
          Government, the ever-expanding needs and aspirations of IITR continue
          to outpace the available resources. The constant growth, development,
          and scaling of the institute has brought attention to key issues and
          highlighted the need to bridge the gap between government grants and
          the institute’s evolving requirements. To ensure the uninterrupted
          pursuit of innovation, it is imperative that we establish safety nets
          that extend beyond facilities and budgets, supported through
          additional research & development grants and alumni contributions.
        </p>
        <p>
          In line with our commitment to excellence and inclusivity, the IIT
          Roorkee Development Foundation was registered as a Section 8 Company,
          limited by guarantee, and led by the Board of Directors on May 12th,
          2021. The ITRDF operates as an independent entity, mobilizing
          resources and support from individuals, corporations, alumni, and
          other stakeholders across India & abroad. Its mission is to enhance
          education, research, and outreach initiatives by fostering innovation
          and collaboration.
        </p>
        <p>
          Through strategic fundraising initiatives, the ITRDF seeks to
          facilitate the realization of various programs and initiatives
          undertaken by IIT Roorkee. With alumni-driven leadership and
          governance, the Foundation works towards strengthening institutional
          excellence while building a sustainable future for the institute. We
          aspire to make significant contributions to the growth and
          sustainability of IIT Roorkee, fortifying its standing as a global
          citadel of academic eminence.
        </p>
      </section>
      

      {/* Board of Directors */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <DirectorCard key={index} {...director} />
          ))}
        </div>
      </section>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Managing Director */}
        <ProfileSection
          title="Managing Director"
          image="/RD.jpg"
          name="Prof. R. D. Garg"
          designation="MD, IIT Roorkee Development Foundation"
          description={[
            <>
              Prof. Rahul Dev Garg, a distinguished academician and expert in
              Geomatics Engineering, has made profound contributions to the
              realm of remote sensing, GIS, and related fields. Holding the
              esteemed position of Professor at the Indian Institute of
              Technology Roorkee (IITR), he has significantly advanced the
              frontiers of geospatial sciences.{" "}
            </>,
            <>
              Prof. Garg's academic journey is marked by excellence. He earned
              his Ph.D. in Civil Engineering from IIT Roorkee in 2004,
              complementing his foundation in the field. His remarkable
              educational trajectory began with a B.Tech. in Civil Engineering
              and a subsequent M.Tech. in Remote Sensing, both from the
              University of Roorkee, now IIT Roorkee. Throughout his illustrious
              career, Prof. Garg has garnered numerous accolades and awards,
              testifying to his outstanding contributions. Notably, he received
              the Netherlands Government Fellowship for Sandwich Ph.D. in 1998
              and the Excellence Award from The Institute of Engineers (India)
              in 2017, among other prestigious recognitions.{" "}
            </>,
            <>
              Prof. Garg's scholarly pursuits extend beyond accolades, as
              evidenced by his extensive journal publications, demonstrating his
              commitment to the dissemination of knowledge and innovative
              research. He has played a pivotal role in advancing geospatial
              technologies, particularly in the fields of land surveying, remote
              sensing, and GIS.{" "}
            </>,
            <>
              His dedication to academia and his pivotal role in shaping the
              future of geomatics engineering make Prof. R.D. Garg a prominent
              figure at IIT Roorkee and a leader in his field, inspiring the
              next generation of geospatial scientists and engineers.
            </>,
          ]}
          email="dora@iitr.ac.in"
          phone="+91-1332-285841"
        />

        {/* Chief Executive Officer */}
        <ProfileSection
          title="Chief Executive Officer (CEO)"
          image="/pandey.jpeg"
          name="Mr. B. S. Pandey"
          designation="CEO,  IIT Roorkee Development Foundation"
          description={[
            "We welcome Mr. B. S. Pandey who joined IITRDF as a CEO. Mr. Pandey brings over three decades of extensive experience and expertise in public policy and government affairs. His distinguished career spans Indian and international companies, academia, and research organizations, showcasing his deep knowledge and leadership in navigating complex regulatory environments and fostering collaborative partnerships across sectors. Throughout his career, Mr. Pandey has successfully led initiatives to drive policy reforms, facilitate government-industry collaborations, and promote sustainable development. His strategic insights have been instrumental in shaping key regulatory frameworks, enhancing public-private partnerships, and advancing innovation in various areas. He has been demonstrating a commitment to aligning policy with economic growth and societal progress. Mr. Pandey is an engineering graduate & international business management post-graduate from Indian Institute of Foreign Trade, New Delhi.",
          ]}
          email="ceo@iitr.ac.in"
          phone="+91-9871601917"
        />
      </div>
      <aside className="bg-[#0B2347] text-white rounded-xl shadow-md p-6 h-fit">
                <h2 className="text-xl font-bold mb-4 py-2 border-b border-white/20">Important Links</h2>
                <ul className="space-y-3">
                  {[
                    { label: "IITRDF-CSR", href: "/iitrdf_csr" },
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
    </div>
  );
};

export default IITRDF;
