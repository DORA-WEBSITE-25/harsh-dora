import React from "react";
import DonorCard from "../Components/DonorCard";
import { batchDonors } from "../Assets/donorData.js";
import {Link} from "react-router-dom";
const SectionHeader = ({ title }) => (
  <div className="w-full flex justify-center bg-white pt-6 pb-2">
    <div className="w-full max-w-5xl px-2">
      <hr className="border-t-2 border-black mb-4" />
      <h2 className="text-center font-extrabold text-2xl tracking-wide">
        {title}
      </h2>
      <hr className="border-t-2 border-black mt-4" />
    </div>
  </div>
);

const BatchDonors = () => {
  return (
    <>
      {/* <HeroSection title="TOP DONORS OF IIT ROORKEE" subtitle="" /> */}

      <div className="w-full min-h-screen bg-white flex justify-center py-8 px-2">
        <div className="w-full max-w-6xl mx-auto">
          {/* Individual Donors Header */}
          {/* <SectionHeader title="INDIVIDUAL DONORS" /> */}

          {/* Individual Donors from assets */}
          {/* {individualDonors.map((donor, idx) => (
            <DonorCard
              key={donor.title + idx}
              title={donor.title}
              image={donor.image}
              description={
                <ul className="list-disc ml-5 text-gray-800 text-base font-sans space-y-2">
                  {donor.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              }
            />
          ))} */}
          {/* <div className="w-full flex flex-col gap-6 my-8">
            <div className="w-full bg-[#2952A3] py-3 flex justify-center">
              <a
                href="#more"
                className="text-white text-lg font-sans font-medium tracking-wide underline"
                style={{ letterSpacing: "0.03em" }}
              >
                Click here for more individual donations and initiatives:
              </a>
            </div>
          </div> */}

          {/* Batch Donors Header */}
          <SectionHeader title="BATCH DONORS AND INITIATIVES" />

          {/* Batch Donors from assets */}
          {batchDonors.map((donor, idx) => (
            <DonorCard
              key={donor.title + idx}
              title={donor.title}
              image={donor.image}
              description={
                <ul className="list-disc ml-5 text-gray-800 text-base font-sans space-y-2">
                  {donor.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              }
            />
          ))}

          {/* Donate Button */}
          <div className="w-full flex flex-col gap-6 my-8">
            {/* <div className="w-full bg-[#2952A3] py-3 flex justify-center">
              <a
                href="#donate"
                className="text-white text-lg font-sans font-medium tracking-wide underline"
                style={{ letterSpacing: "0.03em" }}
              >
                Click here for more individual donations and initiatives:
              </a>
            </div> */}
            <div className="w-full bg-[#2952A3] py-3 flex justify-center">
              <Link
                to="/donation-account-page" // ← internal route
                className="block w-full bg-[#2952A3] py-3 active:bg-[#1d3b77] transition flex justify-center focus:outline-none focus:ring-2 focus:ring-white/70"
                aria-label="Please click to donate"
              >
                <span
                  className="text-white text-lg font-sans font-medium tracking-wide"
                  style={{ letterSpacing: "0.03em" }}
                >
                  Please click to donate
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchDonors;
