// import React, { useState } from "react";
// import { ChevronRight, Building2, Users, BookOpen, Flame, MessageSquare, GraduationCap, Globe, BookOpenCheck, HandHeart } from "lucide-react";

// const OtherLinks = () => {
//     const [imageErrors, setImageErrors] = useState({});

//     const handleImageError = (linkId) => {
//         setImageErrors(prev => ({ ...prev, [linkId]: true }));
//     };

//     const leftLinks = [
//         {
//             id: 1,
//             icon: "/iitrdf.png",
//             label: "IIT Roorkee Development Foundation",
//             short: "IITRDF",
//             url: "https://www.iitr.ac.in/iitrdf/",
//             fallbackIcon: Building2
//         },
//         {
//             id: 2,
//             icon: "/iarc-logo.png",
//             label: "Institute Alumni Relations Cell",
//             short: "IARC",
//             url: "https://alumni.iitr.ac.in/",
//             fallbackIcon: Users
//         },
//         {
//             id: 3,
//             icon: "/amp.png",
//             label: "Alumni Mentorship Program",
//             short: "AMP",
//             url: "https://alumni.iitr.ac.in/mentorship",
//             fallbackIcon: BookOpen
//         },
//         {
//             id: 4,
//             icon: "/candle.png",
//             label: "OBITUARIES",
//             short: "OBT",
//             url: "https://alumni.iitr.ac.in/obituaries",
//             fallbackIcon: Flame // Using Flame instead of Candle
//         },
//     ];

//     const rightLinks = [
//         {
//             text: "Feedback Form",
//             url: "https://forms.gle/feedback-form", // Replace with actual URL
//             icon: MessageSquare
//         },
//         {
//             text: "Departmental Nodal Faculty",
//             url: "https://www.iitr.ac.in/departments/nodal-faculty", // Replace with actual URL
//             icon: GraduationCap
//         },
//         {
//             text: "Good International Conference Online Application",
//             url: "https://conferences.iitr.ac.in/application", // Replace with actual URL
//             icon: Globe
//         },
//         {
//             text: "Endowed Lecture Series",
//             url: "https://www.iitr.ac.in/lectures/endowed", // Replace with actual URL
//             icon: BookOpenCheck
//         },
//         {
//             text: "IITRDF-CSR",
//             url: "https://www.iitr.ac.in/iitrdf/csr", // Replace with actual URL
//             icon: HandHeart
//         },
//     ];

//     const handleLinkClick = (url) => {
//         if (url) {
//             // Check if it's an external link
//             if (url.startsWith('http') || url.startsWith('https')) {
//                 window.open(url, '_blank', 'noopener,noreferrer');
//             } else {
//                 // For internal routes, you might want to use react-router
//                 window.location.href = url;
//             }
//         }
//     };

//     const renderLeftIcon = (link) => {
//         const FallbackIcon = link.fallbackIcon;
//         if (imageErrors[link.id]) {
//             return <FallbackIcon className="w-7 h-7" />;
//         }
//         if (link.icon) {
//             return (
//                 <img
//                     src={link.icon}
//                     alt={link.label}
//                     className="w-7 h-7 object-contain"
//                     onError={() => handleImageError(link.id)}
//                     onLoad={() => {
//                         // Remove from error state if image loads successfully
//                         setImageErrors(prev => {
//                             const newState = { ...prev };
//                             delete newState[link.id];
//                             return newState;
//                         });
//                     }}
//                 />
//             );
//         }
//         return <FallbackIcon className="w-7 h-7" />;
//     };

//     return (
//         <div className="w-full bg-gray-100 py-10">
//             <h2 className="text-5xl font-extrabold text-gray-400 text-center mb-10">
//                 Other Links
//             </h2>
//             <div className="flex flex-col lg:flex-row justify-center gap-8 px-4 md:px-10 max-w-6xl mx-auto">
//                 {/* Left Section */}
//                 <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2">
//                     <div className="space-y-4">
//                         {leftLinks.map((link) => (
//                             <div
//                                 key={link.id}
//                                 className="flex items-center justify-between border border-blue-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white cursor-pointer hover:bg-blue-50"
//                                 onClick={() => handleLinkClick(link.url)}
//                                 role="button"
//                                 tabIndex={0}
//                                 onKeyDown={(e) => {
//                                     if (e.key === 'Enter' || e.key === ' ') {
//                                         handleLinkClick(link.url);
//                                     }
//                                 }}
//                             >
//                                 <div className="flex items-center w-full">
//                                     <div className="flex items-center justify-center bg-blue-900 text-white font-bold text-xs px-3 py-4 rounded-l-lg min-w-[80px]">
//                                         {link.short && !imageErrors[link.id] && !link.icon ? (
//                                             link.short
//                                         ) : (
//                                             renderLeftIcon(link)
//                                         )}
//                                     </div>
//                                     <span className="flex-1 pl-4 pr-2 text-gray-800 text-sm font-medium leading-tight">
//                                         {link.label}
//                                     </span>
//                                 </div>
//                                 <ChevronRight className="text-blue-900 mr-3 flex-shrink-0" size={28} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/* Right Section */}
//                 <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2">
//                     <div className="space-y-4">
//                         {rightLinks.map((item, index) => {
//                             const IconComponent = item.icon;
//                             return (
//                                 <div
//                                     key={index}
//                                     className="flex items-center justify-between text-gray-700 border-b last:border-0 pb-3 last:pb-0 cursor-pointer hover:text-blue-600 transition-colors duration-200"
//                                     onClick={() => handleLinkClick(item.url)}
//                                     role="button"
//                                     tabIndex={0}
//                                     onKeyDown={(e) => {
//                                         if (e.key === 'Enter' || e.key === ' ') {
//                                             handleLinkClick(item.url);
//                                         }
//                                     }}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <IconComponent className="text-gray-500" size={28} />
//                                         <span className="text-sm font-medium">{item.text}</span>
//                                     </div>
//                                     <ChevronRight className="text-gray-400 flex-shrink-0" size={28} />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OtherLinks;


import React, { useState } from "react";
import {
  ChevronRight,
  Building2,
  Users,
  BookOpen,
  Flame,
  MessageSquare,
  GraduationCap,
  Globe,
  BookOpenCheck,
  HandHeart,
} from "lucide-react";

const OtherLinks = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (linkId) => {
    setImageErrors((prev) => ({ ...prev, [linkId]: true }));
  };

  const leftLinks = [
    {
      id: 1,
      icon: "/iitrdf.png",
      label: "IIT Roorkee Development Foundation",
      short: "IITRDF",
      url: "https://www.iitr.ac.in/iitrdf/",
      fallbackIcon: Building2,
    },
    {
      id: 2,
      icon: "/iarc-logo.png",
      label: "Institute Alumni Relations Cell",
      short: "IARC",
      url: "https://alumni.iitr.ac.in/",
      fallbackIcon: Users,
    },
    {
      id: 3,
      icon: "/amp.png",
      label: "Alumni Mentorship Program",
      short: "AMP",
      url: "https://alumni.iitr.ac.in/mentorship",
      fallbackIcon: BookOpen,
    },
    {
      id: 4,
      icon: "/candle.png",
      label: "OBITUARIES",
      short: "OBT",
      url: "https://alumni.iitr.ac.in/obituaries",
      fallbackIcon: Flame,
    },
  ];

  const rightLinks = [
    {
      text: "Feedback Form",
      url: "https://forms.gle/feedback-form",
      icon: MessageSquare,
    },
    {
      text: "Departmental Nodal Faculty",
      url: "https://www.iitr.ac.in/departments/nodal-faculty",
      icon: GraduationCap,
    },
    {
      text: "Good International Conference Online Application",
      url: "https://conferences.iitr.ac.in/application",
      icon: Globe,
    },
    {
      text: "Endowed Lecture Series",
      url: "https://www.iitr.ac.in/lectures/endowed",
      icon: BookOpenCheck,
    },
    {
      text: "IITRDF-CSR",
      url: "https://www.iitr.ac.in/iitrdf/csr",
      icon: HandHeart,
    },
  ];

  const handleLinkClick = (url) => {
    if (url) {
      if (url.startsWith("http") || url.startsWith("https")) {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }
  };

  const renderLeftIcon = (link) => {
    const FallbackIcon = link.fallbackIcon;
    if (imageErrors[link.id]) {
      return <FallbackIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
    }
    if (link.icon) {
      return (
        <img
          src={link.icon}
          alt={link.label}
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          onError={() => handleImageError(link.id)}
          onLoad={() => {
            setImageErrors((prev) => {
              const newState = { ...prev };
              delete newState[link.id];
              return newState;
            });
          }}
        />
      );
    }
    return <FallbackIcon className="w-6 h-6 sm:w-7 sm:h-7" />;
  };

  return (
    <div className="w-full bg-gray-100 py-10 px-4 sm:px-6 md:px-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-400 text-center mb-8 sm:mb-10">
        Other Links
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg w-full lg:w-1/2">
          <div className="space-y-3 sm:space-y-4">
            {leftLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center justify-between border border-blue-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white cursor-pointer hover:bg-blue-50"
                onClick={() => handleLinkClick(link.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleLinkClick(link.url);
                  }
                }}
              >
                <div className="flex items-center w-full">
                  <div className="flex items-center justify-center bg-blue-900 text-white font-bold text-xs sm:text-sm px-3 py-3 sm:py-4 rounded-l-lg min-w-[70px] sm:min-w-[80px]">
                    {link.short && !imageErrors[link.id] && !link.icon
                      ? link.short
                      : renderLeftIcon(link)}
                  </div>
                  <span className="flex-1 pl-3 sm:pl-4 pr-2 text-gray-800 text-xs sm:text-sm md:text-base font-medium leading-tight">
                    {link.label}
                  </span>
                </div>
                <ChevronRight
                  className="text-blue-900 mr-2 sm:mr-3 flex-shrink-0"
                  size={24}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg w-full lg:w-1/2">
          <div className="space-y-3 sm:space-y-4">
            {rightLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-gray-700 border-b last:border-0 pb-2 sm:pb-3 last:pb-0 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  onClick={() => handleLinkClick(item.url)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleLinkClick(item.url);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <IconComponent
                      className="text-gray-500"
                      size={22}
                    />
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {item.text}
                    </span>
                  </div>
                  <ChevronRight
                    className="text-gray-400 flex-shrink-0"
                    size={22}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherLinks;
