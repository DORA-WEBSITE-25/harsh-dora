// import React from "react";

// const StatsSection = () => {
//     const stats = [
//         { id: 1, number: "1200+", label: "Alumni" },
//         { id: 2, number: "10000+", label: "Students" },
//         { id: 3, number: "1200+", label: "DAA" },
//         { id: 4, number: "1200+", label: "Donors" },
//         { id: 5, number: "1200+", label: "Donations" },
//     ];

//     return (
//         <div
//             className="w-full bg-[#0a1635] text-white h-[250px] flex items-center"
//             style={{
//                 backgroundImage: "url('/stats-bg.png')", // your bg image
//                 backgroundSize: "100% 85%", // reduce height (tweak 80-90% as needed)
//                 backgroundRepeat: "no-repeat",
//                 backgroundPosition: "bottom", // anchor to base
//             }}
//         >
//             <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-center px-4 w-full">
//                 {stats.map((item) => (
//                     <div key={item.id} className="flex-1 min-w-[120px] px-4">
//                         <h2 className="text-3xl font-bold">{item.number}</h2>
//                         <p className="text-sm mt-1">{item.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default StatsSection;


import React from "react";

const StatsSection = () => {
    const stats = [
        { id: 1, number: "1200+", label: "Alumni" },
        { id: 2, number: "10000+", label: "Students" },
        { id: 3, number: "1200+", label: "DAA" },
        { id: 4, number: "1200+", label: "Donors" },
        { id: 5, number: "1200+", label: "Donations" },
    ];

    return (
        <div
            className="w-full bg-[#0a1635] text-white bg-no-repeat bg-bottom bg-cover py-12 sm:py-16"
            style={{
                backgroundImage: "url('/stats-bg.png')",
            }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center px-4">
                {stats.map((item) => (
                    <div key={item.id} className="flex flex-col items-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            {item.number}
                        </h2>
                        <p className="text-xs sm:text-sm mt-1 opacity-90">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
