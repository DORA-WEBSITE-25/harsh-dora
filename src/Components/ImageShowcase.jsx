// import React, { useEffect, useState } from "react";

// const ImageShowcase = () => {
//     const images = [
//         "/img1.jpg",
//         "/img2.jpg",
//         "/img3.jpg",
//         "/img4.jpg",
//         "/img5.jpg",
//         "/img6.jpg",
//     ];

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // Decrement index for rightward shift
//             setIndex((prev) => (prev - 1 + images.length) % images.length);
//         }, 2000); // switch every 2s
//         return () => clearInterval(interval);
//     }, [images.length]);

//     const getVisibleImages = () => {
//         return [
//             images[index % images.length],
//             images[(index + 1) % images.length],
//             images[(index + 2) % images.length],
//         ];
//     };

//     return (
//         <div className="w-full flex justify-center items-center bg-gray-100 overflow-hidden">
//             <div className="flex w-full">
//                 {getVisibleImages().map((img, i) => {
//                     // Apply different styles for left, middle, right
//                     let extraClasses = "";
//                     if (i === 0 || i === 2) {
//                         // left and right → half width + only top & bottom border
//                         extraClasses = "w-1/4 border-y-4 border-white";
//                     } else if (i === 1) {
//                         // middle → full width + all borders
//                         extraClasses = "w-1/2 border-4 border-white";
//                     }

//                     return (
//                         <div key={i} className={`${extraClasses} aspect-[550/200]`}>
//                             <img
//                                 src={img}
//                                 alt={`showcase-${i}`}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ImageShowcase;

// import React, { useEffect, useState } from "react";

// const ImageShowcase = () => {
//     const images = [
//         "/1 (1).jpeg",
//         "/1 (1).JPG",
//         "/1 (2).jpeg",
//         "/1 (2).jpg",
//         "/1 (3).jpeg",
//         "/1 (3).jpg",
//     ];

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             // shift images every 2 sec
//             setIndex((prev) => (prev - 1 + images.length) % images.length);
//         }, 2000);
//         return () => clearInterval(interval);
//     }, [images.length]);

//     const getVisibleImages = () => {
//         return [
//             images[index % images.length],
//             images[(index + 1) % images.length],
//             images[(index + 2) % images.length],
//         ];
//     };

//     return (
//         <div className="w-full flex justify-center items-center bg-gray-100 overflow-hidden">
//             <div className="flex flex-col sm:flex-row w-full">
//                 {getVisibleImages().map((img, i) => {
//                     let extraClasses = "";

//                     if (i === 0 || i === 2) {
//                         // side images
//                         extraClasses = "sm:w-1/4 w-full border-y-4 sm:border-y-0 sm:border-0 sm:border-y-4 border-white";
//                     } else if (i === 1) {
//                         // center image
//                         extraClasses = "sm:w-1/2 w-full border-4 border-white";
//                     }

//                     return (
//                         <div
//                             key={i}
//                             className={`${extraClasses} aspect-[550/200]`}
//                         >
//                             <img
//                                 src={img}
//                                 alt={`showcase-${i}`}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default ImageShowcase;

// import React, { useEffect, useState } from "react";

// const ImageShowcase = () => {
//   const images = [
//     { src: "/1 (1).jpeg", title: "Alumni Meet 2023" },
//     { src: "/1 (1).JPG", title: "Campus Event" },
//     { src: "/1 (2).jpeg", title: "Foundation Day" },
//     { src: "/1 (2).jpg", title: "Student Activities" },
//     { src: "/1 (3).jpeg", title: "Convocation Ceremony" },
//     { src: "/1 (3).jpg", title: "Heritage Building" },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev - 1 + images.length) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const getVisibleImages = () => {
//     return [
//       images[index % images.length],
//       images[(index + 1) % images.length],
//       images[(index + 2) % images.length],
//     ];
//   };

//   return (
//     <div className="w-full flex justify-center items-center bg-gray-100 overflow-hidden">
//       <div className="flex flex-col sm:flex-row w-full">
//         {getVisibleImages().map((item, i) => {
//           let extraClasses = "";

//           if (i === 0 || i === 2) {
//             extraClasses =
//               "sm:w-1/4 w-full border-y-4 sm:border-y-0 sm:border-y-4 border-white";
//           } else {
//             extraClasses = "sm:w-1/2 w-full border-4 border-white";
//           }

//           return (
//             <div
//               key={i}
//               className={`relative ${extraClasses} aspect-[550/200]`}
//             >
//               {/* Image */}
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Title Overlay */}
//               <div className="absolute top-0 left-0 w-full bg-black/10 px-4 py-2">
//                 <p className="text-white text-sm sm:text-base font-semibold truncate">
//                   {item.title}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImageShowcase;

import React, { useEffect, useState } from "react";

const ImageShowcase = () => {
  const images = [
    { src: "/1 (1).jpeg", title: "Alumni Meet 2023" },
    { src: "/1 (1).JPG", title: "Campus Event" },
    { src: "/1 (2).jpeg", title: "Foundation Day" },
    { src: "/1 (2).jpg", title: "Student Activities" },
    { src: "/1 (3).jpeg", title: "Convocation Ceremony" },
    { src: "/1 (3).jpg", title: "Heritage Building" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full bg-gray-100">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        
        {/* Image */}
        <img
          src={images[index].src}
          alt={images[index].title}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/40 px-6 py-4">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
            {images[index].title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;



// import React, { useEffect, useState } from "react";

// const ImageShowcase = () => {
//     const images = [
//         "/img1.jpg",
//         "/img2.jpg",
//         "/img3.jpg",
//         "/img4.jpg",
//         "/img5.jpg",
//         "/img6.jpg",
//     ];

//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % images.length); // next image
//         }, 2000); // 2s interval
//         return () => clearInterval(interval);
//     }, [images.length]);

//     return (
//         <div className="w-full flex justify-center items-center bg-gray-100 overflow-hidden">
//             <div className="w-1/2 border-4 border-white aspect-[550/200]">
//                 <img
//                     src={images[index]}
//                     alt={`showcase-${index}`}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ImageShowcase;


