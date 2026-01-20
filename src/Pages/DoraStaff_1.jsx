import React from "react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Header: Dean card
const DeanCard = () => {
  return (
    <section aria-labelledby="dora-title" className="pt-10 sm:pt-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr]">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-md overflow-hidden bg-gray-200">
            {/* Replace with actual image src */}
            <img
              src="/images/dean.jpg"
              alt="Prof. R. D. Garg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-slate-900 text-xl sm:text-2xl font-semibold leading-snug">
              Prof. R. D. Garg
            </h1>
            <p className="text-sky-700 text-sm sm:text-base font-medium mt-0.5">
              Dean of Resources & Alumni Affairs
            </p>

            <div className="mt-3 space-y-1.5 text-slate-700 text-sm">
              <p>
                <span className="font-medium">Phone:</span>{" "}
                +91-1332-285840
              </p>
              <p className="break-words">
                <span className="font-medium">Email:</span>{" "}
                dora@iitr.ac.in, dora@iitr.ac.in
              </p>
            </div>
          </div>
        </div>

        {/* About DORA block */}
        <div className="mt-6 sm:mt-8">
          <div className="rounded-md bg-slate-100">
            <div className="px-4 sm:px-6 py-4 sm:py-5">
              <h2 id="dora-title" className="text-slate-900 text-lg font-semibold">
                About DORA
              </h2>
              <p className="mt-2 text-slate-700 text-sm leading-relaxed">
                Prof. R.D. Garg is a Professor of Civil Engineering at the Indian Institute of Technology Roorkee. He also
                holds the responsibility of Dean of Resources and Alumni Affairs (DORA) since July 2023. As DORA, Prof.
                R.D. Garg is dedicated to improve and strengthen the institute–alumni connect.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Section title (MEET OUR TEAM)
const SectionTitle = ({ children }) => (
  <div className="pt-10 sm:pt-12">
    <Container>
      <h3 className="text-center text-2xl sm:text-3xl font-extrabold tracking-widest text-slate-300">
        {children}
      </h3>
    </Container>
  </div>
);

// Team card
const TeamCard = ({ name, role, phone, email, duties, img }) => {
  return (
    <article className="rounded-md border border-slate-200 bg-white">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 shrink-0">
            <img src={img} alt={`${name}`} className="h-full w-full object-cover" />
          </div>

          <div className="min-w-0">
            <h4 className="text-slate-900 font-semibold">{name}</h4>
            <p className="text-slate-600 text-sm mt-0.5">{role}</p>
          </div>
        </div>

        <div className="mt-4 space-y-1.5 text-slate-700 text-sm">
          <p>
            <span className="font-medium">Phone:</span> {phone}
          </p>
          <p className="break-words">
            <span className="font-medium">Email:</span> {email}
          </p>
          <p className="text-slate-600">
            <span className="font-medium">Duties:</span> {duties}
          </p>
        </div>
      </div>
    </article>
  );
};

const team = [
  {
    name: "Mohit Sharma",
    role: "Office Attendant",
    phone: "+91-1332-285840",
    email: "—",
    duties: "Dispatch, Data entry, and Record Maintenance",
    img: "/images/mohit.jpg",
  },
  {
    name: "Mohit Sharma",
    role: "Office Attendant",
    phone: "+91-1332-285840",
    email: "—",
    duties: "Dispatch, Data entry, and Record Maintenance",
    img: "/images/mohit.jpg",
  },
  {
    name: "Mohit Sharma",
    role: "Office Attendant",
    phone: "+91-1332-285840",
    email: "—",
    duties: "Dispatch, Data entry, and Record Maintenance",
    img: "/images/mohit.jpg",
  },
  {
    name: "Mohit Sharma",
    role: "Office Attendant",
    phone: "+91-1332-285840",
    email: "—",
    duties: "Dispatch, Data entry, and Record Maintenance",
    img: "/images/mohit.jpg",
  },
  {
    name: "Mohit Sharma",
    role: "Office Attendant",
    phone: "+91-1332-285840",
    email: "—",
    duties: "Dispatch, Data entry, and Record Maintenance",
    img: "/images/mohit.jpg",
  },
];

export default function DoraStaff() {
  return (
    <main className="bg-white text-slate-900">
      <DeanCard />

      <SectionTitle>MEET OUR TEAM</SectionTitle>

      <section aria-label="Team members" className="pb-10 sm:pb-14">
        <Container>
          {/* Grid: 2 columns on small screens, 3 on md+, matching the screenshot layout density */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m, idx) => (
              <TeamCard key={idx} {...m} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
