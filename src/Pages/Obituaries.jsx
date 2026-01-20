import React from "react";
import { useState } from "react";

const Obituaries = () => {
  const VerticalCard = ({ imgSrc, title, description, small, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      // <div className="bg-white rounded-lg shadow-md p-6 text-center">
      //   <img
      //     src={imgSrc}
      //     alt={title}
      //     className="w-36 h-36 mx-auto object-contain rounded-full mb-4"
      //   />
      //   {/* Title */}
      //   <h3 className="text-md font-bold text-gray-800">{title}</h3>

      //   {/* Small line below title */}
      //   <span className="block text-sm text-gray-500 mt-1">{small}</span>

      //   {/* Underline */}
      //   <hr className="my-2 border-gray-300 w-12 mx-auto" />

      //   {/* Paragraph */}
      //   <p className="text-gray-700 text-sm">{details}</p>
      //   <button
      //     onClick={() => setIsOpen(true)}
      //     className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      //   >
      //     Read More
      //   </button>

      //   {isOpen && (
      //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      //       <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto relative">
      //         <button
      //           onClick={() => setIsOpen(false)}
      //           className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      //         >
      //           ✕
      //         </button>
      //         <h3 className="text-lg font-bold mb-4">{title}</h3>
      //         <p className="text-gray-700">{description}</p>
      //       </div>
      //     </div>
      //   )}
      // </div>
      <div className="bg-white rounded-lg shadow-md px-3 py-4 sm:px-4 sm:py-6 text-center flex flex-col justify-between">
        <img
          src={imgSrc}
          alt={title}
          className="mx-auto mb-4 rounded-full object-cover w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] h-auto"
        />
        {/* Title */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 break-words">
          {title}
        </h3>

        {/* Small line below title */}
        <span className="block text-xs sm:text-sm text-gray-500 mt-1 break-words">
          {small}
        </span>

        {/* Underline */}
        <hr className="my-2 border-gray-300 w-12 mx-auto" />

        {/* Paragraph */}
        <p className="text-gray-700 text-xs sm:text-sm md:text-base break-words">
          {details}
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-4 min-h-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Read More
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-2"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg max-h-[80vh] overflow-y-auto relative mx-2">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Close dialog"
              >
                ✕
              </button>
              <h3 className="text-base sm:text-lg font-bold mb-4 break-words">
                {title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base break-words">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  const verticals = [
    {
      img: "dinesh1945.jpeg",
      title: "Mr. Dinesh C. Chaturvedi",
      description:
        "Shri Dinesh Chandra Chaturvedi, a graduate of 1945 batch of Civil Engineering from the then Thomason College of Civil Engineering, passed away on 11th July 2022 after brief illness. On 6th of October 2022, he was due for centenary birth celebration. Shri Chaturvedi was a recipient of The Council of India Prize of Rupees 1000. He retired as a Managing Director of UP State Bridge Corporation in 1980.",
      details: "Mr. Dinesh Chandra Chaturvedi passed away on July 11, 2022.",
      small: "Diploma in civil Engg., 1945 Batch",
    },
    {
      img: "MP Varshney 1949.jpeg",
      title: "Mr. Maheshwar P. Varshney",
      description:
        "Dr. Maheshwar P. Varshney, obtained B. E. (Electrical Engineering) degree from the First Batch of University of Roorkee in 1949. An outstanding student of his times, Dr. Varshney soon after passing out from University of Roorkee, worked at the High Voltage Laboratory of the Center Nationale de la Recherche Scientifique (CNRS), France leading to the highest state degree of “Ingenieur Docteur” with distinction in 1952. He worked with French Industries before joining IIT Kharagpur in 1954. In 1958-59 he spent one year in Sweden, France and Switzerland under UNESCO Fellowship. In 1961, he was appointed Professor at Allahabad University at the age of 33 years and joined MNREC and became its first Head of Electrical Engineering Department in 1962. In 1964, he left for Iraq to work as UNESCO expert in Electrical Engineering and Technical Education and helped set up 6 new Engineering Colleges in different countries",
      details: "Mr. Maheshwar P. Varshney passed away on January 19, 2022.",
      small: "B.E.(Electrical Engg.),1949 Batch",
    },
    {
      img: "prof_as_arya.jpeg",
      title: "Shri. Anand Swarup Arya",
      description:
        "Anand Swaroop Arya, born on June 16, 1931, did B.E. Civil Engineering in 1954 and M.E. in Structural Engineering from University of Roorkee. He did Ph.D. from the University of Illinois, USA in 1961. He joined University of Roorkee as a lecturer and retired as pro vice-chancellor after 33 years. He authored several books for students and professionals of Civil and Earthquake engineering and hundreds of technical papers. He was a beloved teacher, a sought after advisor and guided more than 50 Masters theses and 11 PhDs. He provided expertise on nationally important projects regarding Earthquake safe construction of bridges, dams, nuclear power projects, petrochemical complexes etc, and equally important - the common man housing. He won numerous National and International awards for his work. He was honored with Padam Shri in 2002. He won Distinguished Alumnus Award by the University of Illinois as well as by the IIT Roorkee. IIT Roorkee awarded him the prestigious position of Professor Emeritus after retirement.",
      details: "Mr. Anand Swarup Arya passed away on September 01, 2019.",
      small: "B.E.(Civil Engg.),1953 Batch",
    },
    {
      img: "dharam.jpg",
      title: "Shri. Dharm Vir",
      description:
        "He celebrated his 94th birthday just two months before he passed away. He had an illustrious career in UP PWD and he retired as Engineer-in-Chief in 1991. Before reaching the apex of UPPWD, he also served as Managing Director for UP State Bridge Corporation and UP Rajkiya Nirman Nigam. After his retirement he lent his expertise for arbritation panels for large construction projects. He led an inspiring life maintaining equanimity in face of diversities along the way and was devoting his recent years to learning from scriptures and implementing them in his conduct. He started the Aman Charitable Trust in 2001 with other family members to primarily support poor students through scholarships and widows with vocation training. He continued to stay involved in running the trust until he passsed away.",
      details: "Shri. Dharm Vir passed away on September 05, 2024.",
      small: "B.E.(Civil Engg.),1953 Batch",
    },
    {
      img: "Rameshwar.jpeg",
      title: "Shri Rameshwar Singh",
      description:
        "Shri Rameshwar Singh, a distinguished alumnus of the 1954 Electrical Engineering batch of the then Thomason College of Engineering, Roorkee, passed away on 29th March 2025 at the age of 95, following a brief illness. A remarkable individual, Mr. Singh excelled not only in his academic pursuits but also in his extracurricular activities. During his time at the institution, he was an outstanding student and a key member of the Maclagan House swimming team. He also made significant contributions to the rowing team at the Boat Club, where he was recognized as the Best Oarsman for the 1953-54 session—a testament to his dedication, discipline, and skill. Although no regatta finals were held that year, he was expected to win, highlighting his competitive spirit and sportsmanship. Following his graduation, Shri Rameshwar Singh had a distinguished career with the U.P. State Electricity Board, where he served as Superintending Engineer until his retirement in 1989. His professional journey was marked by hard work, dedication, and a commitment to excellence, earning him the respect and admiration of his colleagues. Mr. Singh’s legacy will endure as one of integrity, excellence, and service. He will be deeply missed by all who had the privilege of knowing him. May his soul rest in peace.",
      details: "B.E.(Electrical Engg.),1954 Batch",
      small: "Shri Rameshwar Singh passed away on 29 March 2025.",
    },
    {
      img: "RameshAgarwal1955.jpeg",
      title: "Mr. Ramesh C. Agarwal",
      description: "No More Information Available",
      details: "Mr. Ramesh Chandra Agarwal passed away on August 01, 2022.",
      small: "B.E.(Civil Engg.),1955 Batch",
    },
    {
      img: "prof-gaindhar.jpg",
      title: "Mr. J. L. Gaindhar",
      description:
        "Obtained Academic degrees of B.Sc. (BHU), B.E. (Mech. Engg.) and M.E. (Mech. Engg.) from University of Roorkee, M.S. & Ph. D. in Industrial Engg. (Penn State Univ., USA); Joined as Lecturer of Mech. Engg at Univ. of Roorkee in 1958 and Retired as Professor in 1994. After retirement was Visiting Professor in Mech. Engg (4 Years) and in Dept. of Management studies (6 Years). Participated in almost all the activities in University of Roorkee, Was Member of Syndicate and Senate of UOR. Had guided 50 M.E. and 15 Ph.D. Thesis, Published 100 Technical Papers; Life member of many Professional Societies and a Fellow of I.E. (India) Won many Research Awards; Award for NCC from President of India was President of IIT Roorkee Alumni Association for 2 years.",
      details: "Mr. J. L. Gaindhar passed away on February 12, 2021.",
      small: "B.E.(Mechanical Engg.),1958 Batch",
    },
    {
      img: "vishwamitra-bhargava.jpeg",
      title: "Mr. Vishwamitra Bhargava",
      description:
        "Mr. Vishwamitra Bhargava passed away on May 03, 2021. His name personifies him being “ a world’s friend” and would be terribly missed by all his friends, family and alumni.",
      details: "Mr. Vishwamitra Bhargava passed away on May 03, 2021.",
      small: "B.E.(Civil Engg.), 1960 Batch",
    },
    {
      img: "Rajkapur.jpeg",
      title: "Mr. Raj Kumar Kapur",
      description: "No More Information Available",
      details: "Mr. Raj Kumar Kapur passed away on January 10, 2023.",
      small: "B.E.(Civil Engg.), 1960 Batch",
    },
    {
      img: "vinay-krishna.jpeg",
      title: "Mr. Vinay Krishna",
      description:
        "Mr. Vinay Krishna passed away on May 07, 2021. He was involved in various social activities and was devoted to serving society. His societal activities were highly appreciated by Hon. Governor of U. P. Smt. Anandiben Patel.",
      details: "Mr. Vinay Krishna passed away on May 07, 2021.",
      small: "B.E.(Civil Engg.), 1961 Batch",
    },
    {
      img: "VKMittal (1).jpeg",
      title: "Mr. Virendra Kumar Mittal",
      description:
        "Virendra Kumar Mittal graduated from Roorkee University in 1961 (BE in Electronics and Communications engineering). Soon after, he joined the Indian Railways as an officer and is credited with setting up the microwave signaling system for India’s Northern Railway. Over the next few decades, his repeated success in pushing technology to achieve transformational results led him to be tapped for several distinguished opportunities in India and abroad. He set up signaling systems for the Nigerian Railways in the 70s/80s. Unfazed by exponential changes in technology he kept his learnings sharp and at par with the latest. He pioneered optical fiber cabling for the Indian Railways after a government visit to Japan and the USSR. After retiring as Chief of Signal & Telecom from the Indian Railways, the Taiwan Railways hired him as a consultant. He passed away in 2021 and is survived by his wife of 50+ years, Veena, 3 children, and 6 grandchildren.",
      details: "Mr. Virendra Kumar Mittal passed away on 2021.",
      small: "B.E.(E & C), 1961 Batch",
    },
    {
      img: "DrAmrit Goel.jpg",
      title: "Mr. Amrit Lal Goel",
      description:
        "Dr. Goel was born to Gujjar Mal and Shanti Devi, in the small town of Mukundpur in India, on March 4, 1938. He was the oldest of seven siblings. He was hard working and with encouragement & support from his parents, he qualified for admission to the premier engineering college – Roorkee University. He graduated with a BE in Mechanical Engineering in 1961. After a brief stint with Bhabha Atomic Research Institute in Bombay he decided to pursue higher education and came to the US in 1963. Dr. Goel received his M.S. and Ph.D. degrees (1968) from the University of Wisconsin,Madison. He then joined Syracuse University in 1968 as an Assistant professor, Electrical & Computer Engineering, and retired in 2013 as Professor Emeritus. He also taught at the University of Wisconsin, Madison and was a visiting professor at the University of Maryland, College Park, and the Technical University of Vienna. Dr. Goel published extensively and advised PhD students on a wide range of topics including quality control and reliability, hypothesis testing, databases, parallel architectures and data mining algorithms. His contributions fall into two main areas – Industrial Quality Control and Software Reliability. A common theme in all his work is the application of statistical techniques to solve engineering problems. Dr. Goel’s contributions in the field of quality control are in the areas of control charts and sampling plans, both topics of great practical importance in industry. This included the development of tools for economic design of control charts, and applications of Bayesian methods to the design of sampling plans. A particularly noteworthy contribution was the development of a nomogram – a graphical procedure – for the design of cumulative sum charts. In the days prior to the advent of personal computers, the applicable mathematical equations were difficult to solve, and the nomogram was particularly useful to design cumulative sum charts. The Goel – Okumoto (GO), statistical model which was published in a journal in 1979 is still the most frequently referenced paper in the field. He also co-authored a book titled: Object Oriented Software Testing, (Springer Verlag, 2000).",
      details: "Mr. Amrit Lal Goel passed away on August 11, 2021.",
      small: "B.E.(Mechanical Engg.), 1961 Batch",
    },
    {
      img: "jasbir.jpg",
      title: "Mr. Jasbir Sawhney",
      description:
        "Jasbir Sawhney after his education in the USA, worked in New York with Edward Durell Stone, Architect of the US Embassy in India, and later in Mumbai Charles Correa before starting his own architectural practice Jasbir Sawhney & Associates along with Saroj Sawhney in New Delhi in 1969. Jasbir Sawhney & Associates work is in several countries, including Russia, U.A.E, Kuwait, Iraq and the Maldives. The Indian work includes several unique projects like Delhi Metro Stations & Depots. Major hotels, the Hyatt Regency hotels in New Delhi, Kolkata, Goa. Ashok Yatri Niwas for ITDC. International hotels in Mosul and Dokan in Iraq. Intourist Hotel in Novgorod, Russia. Urban Design project of Hudco Place in South Delhi with Ansal Plaza Mall and Retail, hotel and cultural centre, with 18 acre park and 35 acres of housing. Embassy buildings for the British High Commission, New Delhi. Sanskriti School, New Delhi. Buildings in Gurgaon and Pune for Tata Consultancy Services (TCS) Republic of Maldives National Hospital and 700 bed hospital at Dwarka, New Delhi. Work in Affordable Housing, for 6300 apartments for Jaypee & Wave Group in Noida and Ghaziabad. Several apartment buildings for top developers. Master Plan development for Jaypee Sports City Yamuna Expressway. Court Room complexes in New Delhi and Srinagar, Kashmir. Hospitality Projects for ITC. The Government nominated Jasbir Sawhney as a Member of the Delhi Urban Art Commission (DUAC) which he served for a three‐year term, 2005‐2008. As a member of the Commission, he was responsible to formulate urban policies for the development of Delhi, including providing appropriate guidelines for the projects for the Commonwealth Games, held in 2010, and also the Zonal plan for the New Delhi area of NDMC. Jasbir Sawhney’s contribution to Architecture and Urban Development has been significantly recognized nationwide, as well as abroad both in the private sector and Government. His work has been widely published in India and abroad.",
      details: "Mr. Jasbir Sawhney passed away on December 06, 2023.",
      small: "B.Arch.(Architecture), 1964 Batch",
    },
    {
      img: "akpant64.jpeg",
      title: "Prof. A. K. Pant",
      description:
        "Professor Anant Kumar Pant graduated from University of Roorkee (now IIT Roorkee) in 1964, with a degree in Electrical Engineering. He later received a PhD from the University of Sussex in the UK. He always helped his batch mates in their studies, a deed for which he is fondly remembered. He served in various positions in the university and became a full Professor of Electrical Engineering in 1980. He became both Dean of Academic Affairs and Dean of Students’ Welfare, and he served in these positions with distinction and dedication. He was a very brilliant person, and yet a very amicable and down to earth person. He could win the heart of anyone who met him. He eventually retired in 2005, and went on to serve at the Birla Institute of Applied Sciences in Bhimtal as its Director and Professor, both distinguished positions. In 2022, he organized the 60th anniversary celebration of the batch of 1964. He is survived by his wife, Mrs. Abha Pant, and his three daughters: Mandakini, Kaveri, and Meghna Pant.",
      details: "Prof. A. K. Pant passed away on June 11, 2024.",
      small: "B.E. (Electrical Engg.), 1964 Batch",
    },
    {
      img: "bhargava64.jpg",
      title: "Mr. H. N. Bhargava",
      description: "No More Information Available",
      details: "Mr. H. N. Bhargava passed away on November 19, 2024.",
      small: "B.E. (E & C), 1964 Batch",
    },
    {
      img: "vijaydutthanda1966.jpeg",
      title: "Mr. Vijay dutt Handa",
      description: "No More Information Available",
      details: "Mr. Vijay dutt Handa passed away in 2019.",
      small: "Diploma in civil Engg., 1966 Batch",
    },
    {
      img: "R K tyagi1967.jpeg",
      title: "Mr. R. K. Tyagi",
      description: "No More Information Available",
      details: "Mr. R. K. Tyagi passed away.",
      small: "B.E.(E & C), 1967 Batch",
    },
    {
      img: "K S S JAIN1968.jpeg",
      title: "Mr. K S S JAIN",
      description: "No More Information Available",
      details: "Mr. K S S JAIN passed away on April 14, 2022",
      small: "B.E.(Civil Engg.), 1968 Batch",
    },
    {
      img: "ss.jpeg",
      title: "Mr. Sharat Sharma",
      description: "No More Information Available",
      details: "Mr. Sharat Chandra Sharma passed away on February 16, 2024.",
      small: "B.E.(E & C Engg.), 1969 Batch",
    },
    {
      img: "KSV1969.jpeg",
      title: "Mr. Kul Bhushan Vatsyayan",
      description:
        "Shri Kul Bhushan Vatsyayan was passout of 1969 batch of Mechanical Engineering ftom the then University of Roorkee. He joined Central Water and Power Commission through Indian Engineering Services exam 1975. He is cerdited with many innovative contributions in Mechanisation of processes of building of Hydro Power Plants. After superannuation he was an active consultant to Govt of India on mega power plants in Bhutan and Sikkim",
      details: "Mr. Kul Bhushan Vatsyayan passed away on July 08, 2022.",
      small: "B.E.(Mechanical Engg.), 1969 Batch",
    },
    {
      img: "KP Sharma 1970.jpeg",
      title: "Mr. K. P. Sharma",
      description:
        "He did his masters from Indian Institute of Science, Bangalore. Started career with Fertilizer Corporation of India .Joined Indo Gulf Fertilizer in 1984 and continued with Birla group till he breathed last.",
      details: "Mr. K P Sharma passed away.",
      small: "B.E.(Chemical Engg.), 1970 Batch",
    },
    {
      img: "MPS Tomar.jpeg",
      title: "Mr. M.P.S. Tomar",
      description: "No More Information Available",
      details: "Mr. M.P.S. Tomar passed away on June 10, 2021",
      small: "B.E.(Civil Engg.), 1970 Batch",
    },
    {
      img: "PushpendraKGoel1970.jpeg",
      title: "Mr. Pushpendra K. Goel",
      description:
        "2008-2021,MD, PKS Infra Engineers pvt Ltd, vasundgara Ghaziabad. On 30/11/08 Retired as Cheif Engineer, Madhya Ganga Canal, UP Irrigation.",
      details: "Mr. Pushpendra Kumar Goel passed away on May 3, 2021.",
      small: "B.E.(Civil Engg.), 1970 Batch",
    },
    {
      img: "VKBansal.jpeg",
      title: "Mr. V. K. Bansal",
      description: "No more information available",
      details: "Mr. V. K. Bansal passed away in 2011.",
      small: "B.E.(Civil Engg.), 1970 Batch",
    },
    {
      img: "alok.jpg",
      title: "Er. Aloka Sangal",
      description: "No More Information Available",
      details: "Mr. Aloka Sangal passed away on October 28, 2017",
      small: "B.E.(Electrical Engg.), 1970 Batch",
    },
    {
      img: "arun-sharma.jpg",
      title: "Mr. Arun Sharma",
      description: "No More Information Available",
      details: "Mr. Arun Sharma passed away on May 13, 2021.",
      small: "B.E.(Electrical Engg.), 1970 Batch",
    },
    {
      img: "ashokkagwal1970.jpeg",
      title: "Mr. Ashok Kumar Agrawal",
      description: "No More Information Available",
      details: "Mr. Ashok Kumar Agrawal passed away on January 10, 2018.",
      small: "B.E.(Electrical Engg.), 1970 Batch",
    },
    {
      img: "raj-kumar.jpg",
      title: "Mr. Raj Kumar",
      description: "No More Information Available",
      details: "Mr. Raj Kumar passed away on June 10, 2021.",
      small: "B.E.(Electrical Engg.), 1970 Batch",
    },
    {
      img: "adarshkumar1970.jpg",
      title: "Mr. Adarsh Kumar",
      description: "No More Information Available",
      details: "Mr. Adarsh Kumar passed away.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "AKgupta1970.jpg",
      title: "Mr. Ashok Kumar Gupta",
      description: "No More Information Available",
      details: "Mr. Ashok Kumar Gupta passed away on February 05, 2005.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "AKjain1970.jpg",
      title: "Mr. Ashok Kumar Jain",
      description: "No More Information Available",
      details: "Mr. Ashok Kumar Jain passed away on October 18, 2017.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "Ashokkohli70.jpg",
      title: "Mr. Ashok Kohli",
      description: "No More Information Available",
      details: "Mr. Ashok Kohli passed away.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "maheshbhatia70.jpg",
      title: "Mr. Mahesh Chand Bhatia",
      description: "No More Information Available",
      details: "Mr. Mahesh Chand Bhatia passed away on December 18, 2015.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "Nemi1970.jpg",
      title: "Mr. Nemi Chand Gupta",
      description: "No More Information Available",
      details: "Mr. Nemi Chand Gupta passed away.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "RKmittal70.jpg",
      title: "Mr. Rakesh Kumar Mittal",
      description: "No More Information Available",
      details: "Mr. Rakesh Kumar Mittal passed away on November 13, 2018.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "RKgarg1970.jpg",
      title: "Mr. Rajesh Kumar Garg",
      description: "No More Information Available",
      details: "Mr. Rajesh Kumar Garg passed away on April 18, 2012.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "SCverma70.jpg",
      title: "Mr. Subhash C. Verma",
      description: "No More Information Available",
      details: "Mr. Subhash Chandra Verma passed away on July 06, 1995.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "VSverma70.jpg",
      title: "Mr. Virendra Singh Verma",
      description: "No More Information Available",
      details: "Mr. Virendra Singh Verma passed away.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "YPS1970.jpg",
      title: "Mr. Y.P.S. Dhaka",
      description: "No More Information Available",
      details: "Mr. Y.P.S. Dhaka passed away on November 21, 1989.",
      small: "B.E.(Mechanical Engg.),1970 Batch",
    },
    {
      img: "JMGargmech1971.jpg",
      title: "Mr. J. M. Garg",
      description: "No More Information Available",
      details: "Mr. J. M. Garg passed away.",
      small: "B.E.(Mechanical Engg.),1971 Batch",
    },
    {
      img: "SKVaish1971.jpeg",
      title: "Mr. S. K. Vaish",
      description: "No More Information Available",
      details: "Mr. S. K. Vaish passed away on 2016.",
      small: "B.E.(Mechanical Engg.),1971 Batch",
    },
    {
      img: "VKMishra1971.jpeg",
      title: "Mr. V. K. Mishra",
      description: "No More Information Available",
      details: "Mr. V. K. Mishra passed away on 2011.",
      small: "B.E.(Mechanical Engg.),1971 Batch",
    },
    {
      img: "Chaturvedi1973.jpg",
      title: "Mr. A.K. Chaturvedi",
      description: "He joined the Power Sector in UP in the year 1974 and serving the department in various capacities in the Transmission Wing , He retired as Chief Engineer on 30/06/2012.",
      details: "Mr. A.K. Chaturvedi passed away on May 8,2021.",
      small: "B.E.(Electrical Engg.),1973 Batch",
    },
    {
      img: "Gurnani1973.jpg",
      title: "Mr. Harish Gurnani",
      description: `After graduating from UOR , he joined the newly set up public sector undertaking " Scooters India Ltd" Lucknow for manufacturing Two wheeler scooter "Vijay Super" And later Vikram Tempo , a three wheeler public passenger carrier. But soon he left the job and set up an ancillary unit 'Premium Auto Cables' in Amausi Industrial Area , Lucknow to manufacture and supply control cables to Scooters India Ltd. Even after Scooters India got sick he continued to manufacture these control cables under the same brand name Champion Cables for supply to various automobile manufacturers in the country and abroad.`,
      details: "Mr. Harish Gurnani passed away on March 9,2023.",
      small: "B.E.(Electrical Engg.),1973 Batch",
    },
    {
      img: "siddhartha.jpeg",
      title: "Prof. Siddhartha Chakravorty",
      description: "No More Information Available",
      details: "Prof. Siddhartha Chakravorty passed away on January 27,2025.",
      small: "M.E.(ECE),1973 Batch",
    },
    {
      img: "LateRakeshKumarGarg.png",
      title: "Shri. Rakesh Kumar Garg",
      description: "No More Information Available",
      details: "Shri. Rakesh Kumar Garg passed away on April 04,2025.",
      small: "B.E.(Mechanical),1974 Batch",
    },
    {
      img: "ravi.png",
      title: "Mr. Ravi Kant Gupta",
      description: "No More Information Available",
      details: "Mr. Ravi Kant Gupta passed away on November 22, 2024.",
      small: "B.E.(Civil Engg.), 1981 Batch",
    },
    {
      img: "parag1985.jpeg",
      title: "Mr. Parag Rastogi",
      description: "Shri Parag Rastogi, Electronics and Communication branch, University of Roorkee (UoR, now IIT Roorkee) graduate of 1985 batch passed peacefully on December 10th at his home in Piscataway, New Jersey, USA. Parag had been battling sickness for some time. Parag is survived by his brother, Anurag. Shri Parag Rastogi was originally from Meerut, UP.",
      details: "Mr. Parag Rastogi passed away on December 10, 2021.",
      small: "B.E.(E&C Engg.), 1985 Batch",
    },
    {
      img: "vivek1986.jpeg",
      title: "Mr. Vivek Agarwal",
      description: "We had lost Sh. Vivek Agarwal, an IITR Alumnus (BE-1986) few days back. Sh. Surendra Verma (Batch-1983) has written the following beautiful obituary in memory of Late Sh. Vivek Agarwal:It gives me immense pain to come to the terms that we have lost one of the top 10 brains of UPPCL of our times. It's very difficult to reconcile and accept the fact that Vivek Agarwal SE, my Dearest friend and more than a brother to me, is no more with us. It's a personal loss to me and I am one of those lucky to have worked with him as colleague and Boss as well but he was more of an extended family to me. Memories of Staying and holidaying with families together will keep us haunting for ever His confidence, professional ethics, demeanor, clarity of ideas, academic accumen,valuable advice at times,his competence to deliver,his etiquette, Habit of diving deep into any issue personal or departmental, working to the perfection and satisfaction to all, his conduct and work life balance was unmatched and unpara",
      details: "Mr. Vivek Agarwal passed away in 2021.",
      small: "B.E.(Electrical Engg.), 1986 Batch",
    },
    {
      img: "Randev singh.jpeg",
      title: "Mr. Randev Singh",
      description: `Randev was an exceptional person at IIT Roorkee, which he joined in 1983. He was hardworking and a maverick. He was in the Univ Hockey team from the first to final year and would also referee games. Randev was also good at fine arts and contributed to the department and university in this stream He always participated and represented the department in NASA - a competition between all the Architectural schools in Academics as well as Cultural programmes. He was an exceptional motivational speaker and knew how to handle and motivate juniors and junior staff and friends alike. After graduation, Randev returned to his home- country, Malaysia, and had a varied career of managing projects for luxury hotels and resorts including a prestigious golf course project in Pakistan. Randev is most remembered for his compassionate service to society as a community architect. He managed building projects for Gurdwaras and Hindu and Buddhist temples in Malaysia. He was always ready to give free advice to anyone about a challenging project. He would also stand up for his employees when a project was in difficulty. Randev's architecture of love was a 'super-highway' that he built at his 88 year old mother's house so that she could leave her house on her wheelchair with ease. His unfinished social project is a startup app which he was designing for street-food hawkers in Malaysia 'so that they too could take their food directly to people's doorstep.'`,
      details: "Mr. Randev Singh passed away on 30 November 2022.",
      small: "B.Arch.(Architecture), 1988 Batch",
    },
    {
      img: "7.jpg",
      title: "Dr. R P Saini",
      description: "He did M.E. in 1989 and PHD in 1996 in Mechanical Engineering from IIT Roorkee. He was professor in Department of Hydro and Renewable Energy.",
      details: "Dr. RP Saini passed away on 02 March 2023.",
      small: "M.E.(Mechanical Engg.), 1989 Batch",
    },
    {
      img: "vikrantsharma95.jpeg",
      title: "Mr. Vikrant Sharma",
      description: "No More Information Available",
      details: "Mr. Vikrant Sharma passed away on 02 December 2024.",
      small: "B.E.(Electrical Engg.), 1995 Batch",
    },
    {
      img: "Shangari.jpeg",
      title: "Mr. Manish Shangari",
      description: "Shri Manish Shangari who unfortunately untimely left us . AECOM where he was CEO for Building and places. Being kind, super energetic-enthusiastic , visionary he left legacy in his personal as well as professional life. He is being recognized as industry leader in Data Center domain and technology thought leader. He had extensive experience from Energy to Infrastructure to technology leading in important roles in organizations like Siemens , EY, AECOM as well as his own Startup. He is known for turn-around stories of organization from deep losses to people and financial growth. He is always there with us , remembered for all great work and kindness he bestowed throughout his life.",
      details: "Mr. Manish Shangari passed away on 08 February 2024.",
      small: "",
    },
    {
      img: "JKGhosh.jpg",
      title: "Dr. J. K. Ghosh",
      description: "Dr. Jayanta Kumar Ghosh, Professor in Civil Engineering Department at IIT Roorkee, passed away on 8th August 2023. He completed PhD from IIT Roorkee in 1997. His area of interest includes Geodesy. Pioneering Satellite Geodesy and Geospatial Engineering and Artificial Intelligence.He was the recipient of a multitude of honours and awards. His legacy at Indian Institute of Technology, Roorkee, continues through his impactful work and dedication to education.",
      details: "Dr. J. K. Ghosh passed away on 08 August 2023.",
      small: "Ph.D.(Civil Engg.), 1997 Batch",
    },
    {
      img: "Bkaushik.jpg",
      title: "Prof. Brajesh Kumar Kaushik",
      description: "No More Information Available",
      details: "Prof. Brajesh Kumar Kaushik passed away on 02 August 2024.",
      small: "Ph.D.(E&C.), 2007 Batch",
    },
    {
      img: "udaychopra2016.jpeg",
      title: "Mr. Uday Chopra",
      description: "No More Information Available",
      details: "Prof. Brajesh Kumar Kaushik passed away on 02 August 2024.",
      small: "Integrated M.Sc.(Chemistry),2016 Batch",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Fund Raising Verticals Section */}
      <h1 className="text-xl font-bold text-gray-900 mb-8 text-center">
        Obituaries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {verticals.map((item, index) => (
          <VerticalCard
            key={index}
            imgSrc={item.img}
            title={item.title}
            description={item.description}
            details={item.details}
            small={item.small}
          />
        ))}
      </div>
    </div>
  );
};

export default Obituaries;
