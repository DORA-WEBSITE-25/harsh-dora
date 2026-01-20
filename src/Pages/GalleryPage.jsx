import { useParams } from "react-router-dom";

const GalleryPage = () => {
  const { year } = useParams(); // URL se year le raha hai

  // Example images array (aap real images ke URLs use kar sakte hain)
  const images = [
    { src: `https://via.placeholder.com/300?text=${year}+1`, label: "Image 1" },
    { src: `https://via.placeholder.com/300?text=${year}+2`, label: "Image 2" },
    { src: `https://via.placeholder.com/300?text=${year}+3`, label: "Image 3" },
    { src: `https://via.placeholder.com/300?text=${year}+4`, label: "Image 4" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">
        {year} Gallery
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-gray-700 font-semibold">{img.label}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;

// import { useState } from "react";

// const Jubileegallery = [
//   { label: "2025", href: "#" },
//   { label: "2024", href: "#" },
//   { label: "2023", href: "#" },
//   { label: "2022", href: "#" },
//   { label: "2021", href: "#" },
// ];

// const GalleryPage = () => {
//   const [activeYear, setActiveYear] = useState("2025"); // Default 2025 open

//   return (
//     <div className="p-6">
//       {/* Year buttons */}
//       <div className="flex gap-4 mb-6">
//         {Jubileegallery.map((year) => (
//           <button
//             key={year.label}
//             onClick={() => setActiveYear(year.label)}
//             className={`px-4 py-2 rounded ${
//               activeYear === year.label
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             {year.label}
//           </button>
//         ))}
//       </div>

//       {/* Galleries */}
//       <div>
//         {Jubileegallery.map((year) => (
//           <div
//             key={year.label}
//             className={`${activeYear === year.label ? "block" : "hidden"}`}
//           >
//             <h2 className="text-xl font-bold mb-4">{year.label} Gallery</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {/* Example images */}
//               <img
//                 src={`https://via.placeholder.com/150?text=${year.label}+1`}
//                 alt={`${year.label} img 1`}
//                 className="rounded"
//               />
//               <img
//                 src={`https://via.placeholder.com/150?text=${year.label}+2`}
//                 alt={`${year.label} img 2`}
//                 className="rounded"
//               />
//               <img
//                 src={`https://via.placeholder.com/150?text=${year.label}+3`}
//                 alt={`${year.label} img 3`}
//                 className="rounded"
//               />
//               <img
//                 src={`https://via.placeholder.com/150?text=${year.label}+4`}
//                 alt={`${year.label} img 4`}
//                 className="rounded"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;
// import { useParams } from "react-router-dom";

// const GalleryPage = () => {
//   const { year } = useParams(); // URL se year le raha hai

//   return (
//     <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">
//         {year} Gallery
//       </h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <img
//           src={`https://via.placeholder.com/150?text=${year}+1`}
//           alt={`${year} img 1`}
//           className="rounded"
//         />
//         <img
//           src={`https://via.placeholder.com/150?text=${year}+2`}
//           alt={`${year} img 2`}
//           className="rounded"
//         />
//         <img
//           src={`https://via.placeholder.com/150?text=${year}+3`}
//           alt={`${year} img 3`}
//           className="rounded"
//         />
//         <img
//           src={`https://via.placeholder.com/150?text=${year}+4`}
//           alt={`${year} img 4`}
//           className="rounded"
//         />
//       </div>
//     </main>
//   );
// };

// export default GalleryPage;
