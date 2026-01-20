// import React from "react";

// const EventsSection = () => {
//     const events = [
//         {
//             id: 1,
//             title: "Jubilee Reunion",
//             image: "",
//         },
//         {
//             id: 2,
//             title: "Campus Fest",
//             image: "",
//         },
//         {
//             id: 3,
//             title: "Alumni Meetup",
//             image: "",
//         },
//         {
//             id: 4,
//             title: "Innovation Summit",
//             image: "",
//         },
//     ];

//     return (
//         <section className="bg-gray-100 py-12">
//             <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
//                 Events
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
//                 {events.map((event) => (
//                     <div
//                         key={event.id}
//                         className="bg-white shadow-md rounded-md text-center hover:shadow-lg transition flex flex-col justify-between"
//                     >
//                         {/* Title */}
//                         <div className="p-6">
//                             <h3 className="text-lg font-semibold text-[#1f2a44] border-b border-gray-300 inline-block pb-1">
//                                 {event.title}
//                             </h3>
//                         </div>

//                         {/* Image Section */}
//                         <div className="w-full h-56 bg-white flex items-center justify-center rounded-b-md overflow-hidden">
//                             <img
//                                 src={event.image || "/default-event.png"}
//                                 alt={event.title}
//                                 onError={(e) =>
//                                     (e.currentTarget.src = "/default-event.png")
//                                 }
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default EventsSection;


import React from "react";

const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "Jubilee Reunion",
            image: "",
            link: "/jubilee",
        },
        {
            id: 2,
            title: "Campus Fest",
            image: "",
            link: "/campus-fest",
        },
        {
            id: 3,
            title: "Alumni Meetup",
            image: "",
            link: "/gallery",
        },
        {
            id: 4,
            title: "Innovation Summit",
            image: "",
            link: "/innovation-summit",
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-400 text-center mb-10">
                Events
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
                {events.map((event) => (
                    <a
                        key={event.id}
                        href={event.link}
                        className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
                    >
                        {/* Image */}
                        <div className="w-full h-48 sm:h-56 md:h-60 flex items-center justify-center overflow-hidden">
                            <img
                                src={event.image || "/default-event.png"}
                                alt={event.title}
                                onError={(e) =>
                                    (e.currentTarget.src = "/default-event.png")
                                }
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4 sm:p-6 text-center">
                            <h3 className="text-base sm:text-lg font-semibold text-[#1f2a44] border-b border-gray-300 inline-block pb-1">
                                {event.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};


export default EventsSection;
