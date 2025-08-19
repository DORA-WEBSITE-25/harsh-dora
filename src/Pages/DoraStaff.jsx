// import React from "react";
// import Header from "./Header";
// import { Card, CardContent } from "../Components/ui/card";

// // ✅ Reusable Dean/Staff Profile Card
// const ProfileCard = ({ image, name, title, phone, email1, email2, about }) => (
//   <Card className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl shadow-md border">
//     <img
//       src={image}
//       alt={name}
//       className="w-40 h-48 object-cover rounded-lg shadow"
//     />
//     <CardContent className="p-4 flex-1">
//       <h2 className="text-lg font-bold text-slate-900">{name}</h2>
//       <p className="text-sm text-blue-700 font-medium">{title}</p>
//       <div className="mt-2 text-sm text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>Email: <a href={`mailto:${email1}`} className="text-blue-600 hover:underline">{email1}</a></p>
//         {email2 && (
//           <p>Email: <a href={`mailto:${email2}`} className="text-blue-600 hover:underline">{email2}</a></p>
//         )}
//       </div>
//       {about && (
//         <div className="mt-4">
//           <h3 className="text-base font-semibold text-slate-800">About DORA</h3>
//           <p className="mt-1 text-sm text-slate-600 leading-relaxed">{about}</p>
//         </div>
//       )}
//     </CardContent>
//   </Card>
// );

// // ✅ Reusable Team Card
// const TeamCard = ({ image, name, title, phone, email, desc }) => (
//   <Card className="rounded-xl shadow border">
//     <CardContent className="p-4 flex flex-col items-center text-center">
//       <img
//         src={image}
//         alt={name}
//         className="w-28 h-32 object-cover rounded-lg shadow"
//       />
//       <h4 className="mt-3 text-base font-semibold text-slate-900">{name}</h4>
//       <p className="text-sm text-slate-600">{title}</p>
//       <div className="mt-2 text-xs text-slate-600 space-y-1">
//         <p>Phone: {phone}</p>
//         <p>Email: <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a></p>
//       </div>
//       <p className="mt-2 text-xs text-slate-500 leading-snug">{desc}</p>
//     </CardContent>
//   </Card>
// );


// const DoraStaff = () => {

//     <Header/>
//     return(    
//     <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
//       {/* Dean Profile */}
//       <ProfileCard
//         image="/dean.png"
//         name="Prof. R. D. Garg"
//         title="Dean of Resources & Alumni Affairs"
//         phone="+91-1332-284480"
//         email1="dean.dora@iitr.ac.in"
//         email2="dora@iitr.ac.in"
//         about="Prof. R.D. Garg is Professor of Civil Engineering at the Indian Institute of Technology Roorkee. He also holds the responsibility of Dean of Resources and Alumni Affairs (DORA) since January 2023. As DORA, Prof. R.D. Garg is dedicated to improving and strengthening the Institute–alumni connect."
//       />

//       {/* Team Section */}
//       <div>
//         <h2 className="text-center text-2xl font-bold text-slate-400 tracking-wide mb-8">
//           MEET OUR TEAM
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Array(6).fill(0).map((_, i) => (
//             <TeamCard
//               key={i}
//               image="/staff.png"
//               name="Mohit Sharma"
//               title="Office Assistant"
//               phone="+91-1332-285840"
//               email="mohit.sharma@iitr.ac.in"
//               desc="Diary & Dispatch, Data entry, and Record Maintenance."
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//     )
// }

// export default DoraStaff;



import React from "react";
import Header from "../Components/Header";
import { Card, CardContent } from "../Components/ui/card";

// ✅ Reusable Dean/Staff Profile Card
const ProfileCard = ({ image, name, title, phone, email1, email2, about }) => (
  <Card className="flex flex-col md:flex-row items-center md:items-start gap-6 rounded-xl shadow-md border">
    <img
      src={image}
      alt={name}
      className="w-40 h-48 object-cover rounded-lg shadow"
    />
    <CardContent className="p-4 flex-1">
      <h2 className="text-lg font-bold text-slate-900">{name}</h2>
      <p className="text-sm text-blue-700 font-medium">{title}</p>
      <div className="mt-2 text-sm text-slate-600 space-y-1">
        <p>Phone: {phone}</p>
        <p>
          Email:{" "}
          <a href={`mailto:${email1}`} className="text-blue-600 hover:underline">
            {email1}
          </a>
        </p>
        {email2 && (
          <p>
            Email:{" "}
            <a href={`mailto:${email2}`} className="text-blue-600 hover:underline">
              {email2}
            </a>
          </p>
        )}
      </div>
      {about && (
        <div className="mt-4">
          <h3 className="text-base font-semibold text-slate-800">About DORA</h3>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{about}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

// ✅ Reusable Team Card
const TeamCard = ({ image, name, title, phone, email, desc }) => (
  <Card className="rounded-xl shadow border">
    <CardContent className="p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-28 h-32 object-cover rounded-lg shadow"
      />
      <h4 className="mt-3 text-base font-semibold text-slate-900">{name}</h4>
      <p className="text-sm text-slate-600">{title}</p>
      <div className="mt-2 text-xs text-slate-600 space-y-1">
        <p>Phone: {phone}</p>
        <p>
          Email:{" "}
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </p>
      </div>
      <p className="mt-2 text-xs text-slate-500 leading-snug">{desc}</p>
    </CardContent>
  </Card>
);

const DoraStaff = () => {
  // ✅ Team data with different details
  const teamMembers = [
    {
      image: "/Bhandari.jpeg",
      name: "Jitendra Bhandari",
      title: "Office Assistant",
      phone: "+91-1332-285840",
      email: "mohit.sharma@iitr.ac.in",
      desc: "Diary & Dispatch, Data entry, and Record Maintenance.",
    },
    {
      image: "/kamal.jpg",
      name: "Kamal Singh",
      title: "Senior Office Assistant",
      phone: "+91-1332-285841",
      email: "priya.verma@iitr.ac.in",
      desc: "Handles alumni communications and official correspondence.",
    },
    {
      image: "/Vishal.jpg",
      name: "Vishal Verma",
      title: "Technical Assistant",
      phone: "+91-1332-285842",
      email: "rohit.kumar@iitr.ac.in",
      desc: "Website management and IT support.",
    },
    {
      image: "/neha.jpg",
      name: "Neha Vijay",
      title: "Junior Assistant",
      phone: "+91-1332-285843",
      email: "sneha.gupta@iitr.ac.in",
      desc: "Event coordination and logistics support.",
    },
    {
      image: "/Harsh.jpg",
      name: "Harsh Singh",
      title: "Clerk",
      phone: "+91-1332-285844",
      email: "amit.singh@iitr.ac.in",
      desc: "File management and document processing.",
    },
    {
      image: "/sagar.jpeg",
      name: "Sagar Yadav",
      title: "Intern",
      phone: "+91-1332-285845",
      email: "neha.mehra@iitr.ac.in",
      desc: "Assists with day-to-day operations.",
    },
    {
      image: "/mohit.jpeg",
      name: "Mohit Sharma",
      title: "Intern",
      phone: "+91-1332-285845",
      email: "neha.mehra@iitr.ac.in",
      desc: "Assists with day-to-day operations.",
    },
  ];

  <Header />
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

      {/* Dean Profile */}
      <ProfileCard
        image="/RD.jpg"
        name="Prof. R. D. Garg"
        title="Dean of Resources & Alumni Affairs"
        phone="+91-1332-284480"
        email1="dean.dora@iitr.ac.in"
        email2="dora@iitr.ac.in"
        about="Prof. R.D. Garg is Professor of Civil Engineering at IIT Roorkee. He also holds the responsibility of Dean of Resources and Alumni Affairs (DORA) since January 2023."
      />

      {/* Team Section */}
      <div>
        <h2 className="text-center text-2xl font-bold text-slate-400 tracking-wide mb-8">
          MEET OUR TEAM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoraStaff;




