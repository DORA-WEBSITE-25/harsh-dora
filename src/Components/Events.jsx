import React from "react";

// Data Array
const reunions = [
  {
    date: ["Sep 15, 2025", "Sep 17, 2025"],
    title: "Emerald Jubilee Reunion of 1970 Batch (Including 1971 B.Arch.)",
    description:
      "Emerald Jubilee Reunion celebration of the 1970 Batch (Including 1971 B.Arch.) will be held on Sep 15–17, 2025",
  },
  {
    date: ["Oct 31, 2025", "Nov 02, 2025"],
    title: "Coral Jubilee Reunion of 1990 Batch (Including 1991 B.Arch.)",
    description:
      "Coral Jubilee Reunion celebration of 1990 Batch (Including 1991 B.Arch.) will be held on Oct 31 – Nov 2, 2025",
  },
  {
    date: ["Nov 27, 2025", "Nov 29, 2025"],
    title: "Silver Jubilee Reunion of 2000 Batch (Including 2001 B.Arch.)",
    description:
      "Silver Jubilee Reunion celebration of 2000 Batch (Including 2001 B.Arch.) will be held on Nov 27 – 29, 2025",
  },
  {
    date: ["Dec 03, 2025", "Dec 05, 2025"],
    title: "Golden Jubilee Reunion of 1975 Batch (Including 1976 B.Arch.)",
    description:
      "Golden Jubilee Reunion celebration of the 1975 Batch (Including 1976 B.Arch.) will be held on Dec 03–05, 2025",
  },
];

// Reusable Component
const ReunionCard = ({ date, title, description }) => (
  <div className="flex flex-col sm:flex-row w-full rounded-xl shadow-sm overflow-hidden mb-4">
    {/* Left Side - Date */}
    <div className="bg-[#F8ECE9] sm:w-1/3 px-14 py-6 text-center sm:text-left flex flex-col justify-center">
      <p className="text-md font-semibold ml-4 text-gray-800">{date[0]}</p>
      <p className="text-md text-center font-semibold text-gray-800">to</p>
      <p className="text-md font-semibold ml-4 text-gray-800">{date[1]}</p>
    </div>

    {/* Right Side - Content */}
    <div className="bg-[#F8F2FF] sm:w-2/3 px-6 py-6">
      <h3 className="text- font-extrabold  text-gray-900 mb-1">{title}</h3>
      <p className="text-md text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Main Section
const Events = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      {reunions.map((item, index) => (
        <ReunionCard
          key={index}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default Events;
