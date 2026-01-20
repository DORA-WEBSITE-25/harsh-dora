import React, { useState } from "react";

// Dummy Data for Awardees
const distinguishedAwardees = [
  {
    sno: 1,
    year: 2005,
    name: "Prof. A.S. Arya",
    designation: "Former Pro Vice Chancellor, UOR",
    degree: "1953 ‒ BE ‒ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 2,
    year: 2005,
    name: "Shri Subodh Bhargava",
    designation: "Chairman, TATA Communications Ltd",
    degree: "1962 ‒ BE ‒ Mechanical Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 3,
    year: 2005,
    name: "Shri Jai Prakash Gaur",
    designation: "Founder Chairman of the Jaypee Group",
    degree: "1950 ‒ DIP ‒ Civil Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 4,
    year: 2005,
    name: "Ms. Vinita Gupta",
    designation: "Chairperson, Quick Eagle Networks",
    degree: "1973 ‒ BE ‒ ECE",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 5,
    year: 2006,
    name: "Prof. Bharat Singh",
    designation: "Former Vice Chancellor, UOR",
    degree: "1945 ‒ DIP ‒ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 6,
    year: 2006,
    name: "Prof. S.K. Khanna",
    designation: "Former Chairman of AICTE",
    degree: "1958 ‒ BE ‒ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 7,
    year: 2006,
    name: "Shri Pradip Baijal",
    designation: "Retd. Chairman TRAI",
    degree: "1963 ‒ BE ‒ Mechanical Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 8,
    year: 2006,
    name: "Shri R.K. Singh",
    designation: "DIC, Jaiprakash Associates Ltd.",
    degree: "1966 ‒ BE ‒ Civil Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 9,
    year: 2007,
    name: "Prof. Jagdish Narain",
    designation: "Former Vice Chancellor, UOR",
    degree: "1948 ‒ BE ‒ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 10,
    year: 2007,
    name: "Prof. D.V. Singh",
    designation: "Former Vice Chancellor, UOR",
    degree: "1956 ‒ BE ‒ Mechanical Engg.",
    category: "Academic/Research",
  },
  {
    sno: 11,
    year: 2007,
    name: "Shri Desh Raj Singh",
    designation: "Engineer in Chief U.P. Irrigation",
    degree: "1946 ‒ BE ‒ Civil Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 12,
    year: 2007,
    name: "Shri Ashok Soota",
    designation: "Chairman, Happiest Minds Technologies",
    degree: "1963 ‒ BE ‒ Electrical Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 13,
    year: 2008,
    name: "Prof. Shamsher Prakash",
    designation: "Professor Emeritus, Missouri S&T",
    degree: "1954 ‒ BE ‒ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 14,
    year: 2008,
    name: "Shri Narendra Kumar Patni",
    designation: "Founder, Patni Computer Systems",
    degree: "1964 ‒ BE ‒ Electrical Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 15,
    year: 2008,
    name: "Shri Shailendra Kumar Hajela",
    designation: "Chairman, Telecel Comm. Pvt. Ltd.",
    degree: "1957 ‒ BE ‒ Electrical Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 16,
    year: 2008,
    name: "Shri Shashi Bhushan Budhiraja",
    designation: "Former President, Indian Chamber of Commerce",
    degree: "1952 ‒ BE ‒ Mechanical Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 17,
    year: 2009,
    name: "Prof. Devendra Prakash Garg",
    designation: "Professor Emeritus, Duke University",
    degree: "1957 ‒ BE ‒ Mechanical Engg.",
    category: "Academic/Research",
  },
  {
    sno: 18,
    year: 2009,
    name: "Lt Gen A. K. S. Chandele",
    designation: "Lt. Gen., Army",
    degree: "1990 ‒ BE ‒ Electrical Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 19,
    year: 2009,
    name: "Shri Harish Kumar Goyal",
    designation: "IITRHF Founder and Board Member",
    degree: "1979 ‒ BE ‒ Civil Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 20,
    year: 2009,
    name: "Shri Surendra Singh Khurana",
    designation: "Retired Chairman, Indian Railways",
    degree: "1971 ‒ BE ‒ Mechanical Engg.",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 21,
    year: 2010,
    name: "Dr. Rakesh Agarwal",
    details: "Founder, Data Insights Laboratories",
    degree: "1974 ‐ BE ‐ ECE",
    category: "Academic/Research/Corporate Development/Administration",
  },
  {
    sno: 22,
    year: 2010,
    name: "Shri Harish Kumar Mittal",
    details: "Chairman, Mercator Ltd",
    degree: "1973 ‐ MTech ‐ Geophysics",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 23,
    year: 2010,
    name: "Shri Ramesh Mehra",
    details: "CEO, R-Squared Group",
    degree: "1964 ‐ BE ‐ Mechanical Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 24,
    year: 2010,
    name: "Shri R. K. Tyagi",
    details: "Independent Director, Air India Limited",
    degree: "1975 ‐ BE ‐ ECE",
    category: "Social Sciences/Engineering and Services/Public Administration",
  },
  {
    sno: 25,
    year: 2011,
    name: "Dr. Shyam Sunder Rai",
    details: "Emeritus Professor, IISER Pune",
    degree: "1977 ‐ MTech ‐ Geophysics",
    category: "Academic/Research",
  },
  {
    sno: 26,
    year: 2011,
    name: "Mr. Vijai Prakash Agarwal",
    details: "Former Chairman, AAI",
    degree: "1976 ‐ BE ‐ Electrical Engg.",
    category: "Corporate Development",
  },
  {
    sno: 27,
    year: 2011,
    name: "Mr. V. K. Agnihotri",
    details: "Former Member Engg., Railway Board, Indian Railways",
    degree: "1960 ‐ BE ‐ Civil Engg.",
    category: "Engineering & Services",
  },
  {
    sno: 28,
    year: 2011,
    name: "Mr. Hersh Kumar",
    details: "Chairman, A.K. Shipra Group",
    degree: "1978 ‐ BE ‐ Industrial Engg.",
    category: "Service to Society",
  },
  {
    sno: 29,
    year: 2012,
    name: "Shri Arvind K. Singhal",
    details: "Chairman, Technopak Advisors Pvt. Ltd.",
    degree: "1979 ‐ BE ‐ ECE",
    category: "Corporate Development",
  },
  {
    sno: 30,
    year: 2012,
    name: "Dr. Bhuvan K. Chaturvedi",
    details: "Formerly Managing Director, Eicher Ltd",
    degree: "1969 ‐ BE ‐ Mechanical Engg.",
    category: "Corporate Development",
  },
  {
    sno: 31,
    year: 2012,
    name: "Dr. Harpreet Singh",
    details: "Professor, Wayne State University",
    degree: "1971 ‐ PhD ‐ ECE",
    category: "Academic/Research",
  },
  {
    sno: 32,
    year: 2012,
    name: "Dr. Harsh K. Gupta",
    details: "Member, National Disaster Management Authority",
    degree: "1970 ‐ PhD ‐ Earthquake Engg.",
    category: "Corporate Development/Administration",
  },
  {
    sno: 33,
    year: 2012,
    name: "Dr. Prem Krishna",
    details: "Professor Retd., IIT Roorkee",
    degree: "1959 ‐ BE ‐ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 34,
    year: 2012,
    name: "Shri Ravi Sharma",
    details: "Formerly CEO - Adani Power",
    degree: "1984 ‐ BE ‐ Electrical Engg.",
    category: "Corporate Development",
  },
  {
    sno: 35,
    year: 2012,
    name: "Dr. Amit Singhal",
    details: "Google Fellow & SVP",
    degree: "1989 ‐ BE ‐ Computer Science Engg.",
    category: "Corporate Development",
  },
  {
    sno: 36,
    year: 2013,
    name: "Prof. Vipin Kumar",
    details: "Regents Professor, University of Minnesota",
    degree: "1977 ‐ BE ‐ ECE",
    category: "Academic/Research",
  },
  {
    sno: 37,
    year: 2013,
    name: "Prof. M.P. Singh",
    details: "Preston Wade Professor, Virginia Tech",
    degree: "1962 ‐ BE ‐ Civil Engg.",
    category: "Academic/Research",
  },
  {
    sno: 38,
    year: 2013,
    name: "Shri Satish C. Agnihotri",
    details: "Chairman, Rail Vikas Nigam Ltd",
    degree: "1982 ‐ BE ‐ Civil Engg.",
    category: "Corporate Development",
  },
  {
    sno: 39,
    year: 2013,
    name: "Shri V. S. Verma",
    details: "B.Sc, B.E (Mech), M.E (Mech) (App.Thermo.) IIT(R), Formerly Member CERC, Member (Planning) CEA, DG(BEE)",
    degree: "1971 ‐ BE ‐ Mechanical Engg.",
    category: "Engineering and Services",
  },
  {
    sno: 40,
    year: 2014,
    name: "Dr. Satyandra Kumar Gupta",
    details: "Director, Maryland Robotics Center",
    degree: "1988 ‐ BE ‐ Mechanical Engg.",
    category: "Academic/Research",
  },
  {
    sno: 40,
    year: 2014,
    name: "Shri Sanjiv Goenka",
    designation: "Chairman, RP-Sanjiv Goenka Group",
    degree: "1981 ‒ BE ‒ Mechanical Engg.",
    category: "Corporate Development/Administration/Entrepreneurship",
  },
  {
    sno: 41,
    year: 2014,
    name: "Shri Rajendra Kumar Bahuguna",
    designation: "Chairman, RailTel Corporation of India Ltd.",
    degree: "1980 ‐ BE ‐ ECE",
    category: "Corporate Development"
  },
  {
    sno: 42,
    year: 2014,
    name: "Shri Subodh Kumar Jain",
    designation: "Retd. Member Engg., Indian Railways",
    degree: "1974 ‐ BE ‐ Civil Engg.",
    category: "Engineering Services"
  },
  {
    sno: 43,
    year: 2014,
    name: "Shri Shankar Aggarwal",
    designation: "Secretary, Ministry of Women & Child Development",
    degree: "1977 ‐ BE ‐ ECE",
    category: "Administration"
  },
  {
    sno: 44,
    year: 2014,
    name: "Dr. Sharad Chandra Sharma",
    designation: "Director, Vikram Sarabhai Space Centre, ISRO",
    degree: "1982 ‐ BE ‐ Metallurgical Engg.",
    category: "Engineering Services"
  },
  {
    sno: 45,
    year: 2015,
    name: "Dr. Jai K. Hakhu",
    designation: "Chairman, President and CEO Horiba International Corporation",
    degree: "1974 ‐ ME ‐ Solid State Electronics",
    category: "Corporate Development"
  },
  {
    sno: 46,
    year: 2015,
    name: "Shri Pramod Saxena",
    designation: "Chairman & Managing Director Oxigen Services Pvt. Ltd.",
    degree: "1975 ‐ BE ‐ Chemical Engg.",
    category: "Corporate Development/Entrepreneurship"
  },
  {
    sno: 47,
    year: 2015,
    name: "Shri Manoj Prakash Goel",
    designation: "sno Entrepreneur in Networking and Communication Technology, USA",
    degree: "1981 ‐ BE ‐ Mechanical Engg.",
    category: "Entrepreneurship"
  },
  {
    sno: 48,
    year: 2015,
    name: "Lt. Gen. Vishwambher Singh",
    designation: "VSM, GOC, Uttar Bharat Area",
    degree: "1979 ‐ BArch ‐ Architecture",
    category: "Engineering & Services/Administration"
  },
  {
    sno: 49,
    year: 2015,
    name: "Shri Harish Chandra",
    designation: "Former Member Secretary, Prime Minister Committee for Rajiv Gandhi Ninevaikam",
    degree: "1952 ‐ BE ‐ Civil Engg.",
    category: "Engineering & Services"
  },
  {
    sno: 50,
    year: 2015,
    name: "Dr. Roopa Gir",
    designation: "President, leducate USA",
    degree: "1974 ‐ MTech ‐ Geophysics",
    category: "Engineering & Services/Service to Society"
  },
  {
    sno: 51,
    year: 2016,
    name: "Shri Raj Singh",
    designation: "Founder & Managing Director Redwood Venture Partners, California, USA",
    degree: "1968 ‐ BE ‐ Electrical Engg.",
    category: "Entrepreneurship"
  },
  {
    sno: 52,
    year: 2016,
    name: "Shri Mangu Singh",
    designation: "Managing Director, Delhi Metro Rail Corporation Ltd.",
    degree: "1979 ‐ BE ‐ Civil Engg.",
    category: "Corporate Development/ Administration + Engineering & Services"
  },
  {
    sno: 53,
    year: 2016,
    name: "Shri Mohinder L. Nayyar",
    designation: "ASME Life Fellow at Council on Standards and Certification",
    degree: "1966 ‐ BE ‐ Mechanical Engg.",
    category: "Engineering & Services"
  },
  {
    sno: 54,
    year: 2016,
    name: "Shri Ashoke Kr Mukherjee",
    designation: "Director, Sonodyne International Pvt. Ltd.",
    degree: "1965 ‐ BE ‐ ECE",
    category: "Corporate Development"
  },
  {
    sno: 55,
    year: 2016,
    name: "Air Marshal Pramod Vasant Athawale",
    designation: "PVSM, AVSM, VSM, Retd.",
    degree: "1972 ‐ BE ‐ Electrical Engg.",
    category: "Administration"
  },
  {
    sno: 56,
    year: 2018,
    name: "Prof. Brij Agrawal",
    designation: "Distinguished Professor and Director, Adaptive Optics Center of Excellence for National Security",
    degree: "1966 ‐ BE ‐ Mechanical Engg.",
    category: "Academic or research excellence"
  },
  {
    sno: 57,
    year: 2018,
    name: "Prof. Sudhir Jain",
    designation: "Director of IIT Gandhinagar",
    degree: "1979 ‐ BE ‐ Civil Engg.",
    category: "Academic or research excellence"
  },
  {
    sno: 58,
    year: 2018,
    name: "Prof. Mahesh Chandra Tandon",
    designation: "Managing Director, Tandon Consultants Pvt. Ltd.",
    degree: "1962 ‐ BE ‐ Civil Engg.",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  },
  {
    sno: 59,
    year: 2018,
    name: "Dr. Ajay Kumar",
    designation: "Retired as Director of Research, NASA",
    degree: "1968 ‐ BE ‐ Mechanical Engg.",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  },
  {
    sno: 60,
    year: 2018,
    name: "Mr. Sanjiv Singh",
    designation: "Chairman, Indian Oil",
    degree: "1980 ‐ BE ‐ Chemical Engg.",
    category: "Managerial excellence in private, public or government sector"
  },
  {
    sno: 61,
    year: 2019,
    name: "Dr. Ajay Mathur",
    designation: "Director General, TERI",
    degree: "1979 ‐ BE ‐ Chemical Engg.",
    category: "Managerial excellence in private, public or government sector"
  },
  {
    sno: 62,
    year: 2019,
    name: "Dr. Ramachandra Naidu Galla",
    designation: "Founder & Chairman, Amara Raja Group of Companies",
    degree: "1967 ‐ ME ‐ ECE",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 63,
    year: 2019,
    name: "Prof. Vishwani Agrawal",
    designation: "Professor, Auburn University USA",
    degree: "1964 ‐ BE ‐ ECE",
    category: "Academic Excellence"
  },
  {
    sno: 64,
    year: 2019,
    name: "Prof Subhash Suri",
    designation: "Professor, University of California, Santa Barbara, USA",
    degree: "1981 ‐ BE ‐ ECE",
    category: "Academic Excellence"
  },
  {
    sno: 65,
    year: 2019,
    name: "Mr. Rajiv Kumar",
    designation: "Managing Director, Microsoft",
    degree: "1990 ‐ BE ‐ Computer Science Engg.",
    category: "Excellence in Engineering Innovation"
  },
  {
    sno: 66,
    year: 2019,
    name: "Mr. Dinesh C Paliwal",
    designation: "President and CEO, HARMAN",
    degree: "1979 ‐ PG Diploma ‐ Pulp & Paper",
    category: "Managerial Excellence"
  },
  {
    sno: 67,
    year: 2019,
    name: "Mr. Sushil Chandra",
    designation: "Election Commissioner of India",
    degree: "1977 ‐ BE ‐ Civil Engg.",
    category: "Managerial Excellence"
  },
  {
    sno: 68,
    year: 2019,
    name: "Mr. Mohit Saxena",
    designation: "Co-founder & CTO of InMobi",
    degree: "1997 ‐ BE ‐ Metallurgical Engg.",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 69,
    year: 2020,
    name: "Prof. Ajay K. Agrawal",
    designation: "Robert F. Barfield Professor of Mechanical Engineering, University of Alabama USA",
    degree: "1980 ‐ BE ‐ Mechanical Engg.",
    category: "Academic or Research Excellence"
  },
  {
    sno: 70,
    year: 2020,
    name: "Prof. Pankaj Agarwal",
    designation: "RJR Nabisco Professor of Computer Science and Mathematics, Duke University",
    degree: "1982 ‐ BE ‐ ECE",
    category: "Academic or Research Excellence"
  },
  {
    sno: 71,
    year: 2020,
    name: "Mr. Raja Ram Singh Yadav",
    designation: "Distinguished Scientist & Group Director, Bhabha Atomic Research Centre",
    degree: "1975 ‐ BE ‐ Mechanical Engg.",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  },
  {
    sno: 72,
    year: 2020,
    name: "Mr. Prakash Kumar Singh",
    designation: "Chairman of Steel Authority of India Ltd.",
    degree: "1979 ‐ BE ‐ Metallurgical Engg.",
    category: "Managerial Excellence in Private, Public or Government Sector"
  },
  {
    sno: 73,
    year: 2020,
    name: "Mr. R. Mukundan",
    designation: "CEO & Managing Director, Tata Chemicals Ltd.",
    degree: "1988 ‐ BE ‐ Electrical Engg.",
    category: "Managerial Excellence in Private, Public or Government Sector"
  },
  {
    sno: 74,
    year: 2020,
    name: "Mr. Naveen Jain",
    designation: "Founder & CEO, Viome Inc",
    degree: "1979 ‐ BE ‐ Industrial Engg.",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 75,
    year: 2020,
    name: "Prof. S. C. Handa",
    designation: "Professor Retd., IIT Roorkee",
    degree: "1966 ‐ ME ‐ Civil Engg.",
    category: "Excellence in Service to the Society"
  },
  {
    sno: 76,
    year: 2021,
    name: "Prof. Emeritus O. P. Malik",
    designation: "Professor Emeritus at the University of Calgary, Canada",
    degree: "1962 ‐ ME ‐ Electrical Engg.",
    category: "Research Excellence"
  },
  {
    sno: 77,
    year: 2021,
    name: "Dr. Dinesh Kumar Likhi",
    designation: "Leadership & Transformation Coach for mid-size to large Indian/Global Companies",
    degree: "1981 ‐ BE ‐ Metallurgical Engg.",
    category: "Excellence In Leadership in Public Sector"
  },
  {
    sno: 78,
    year: 2021,
    name: "Dr. Shailendra Kumar Joshi",
    designation: "Advisor to Govt. of Telangana, former Chief Secretary, Telangana State, ex IAS",
    degree: "1981 ‐ BE ‐ E & C Engg.",
    category: "Excellence In Leadership in Government Sector"
  },
  {
    sno: 79,
    year: 2021,
    name: "Dr. Dinesh Srivastava",
    designation: "Chief Executive, Nuclear Fuel Complex, Department of Atomic Energy",
    degree: "1983 ‐ BE ‐ Metallurgical Engg.",
    category: "Excellence In Technology Innovation"
  },
  {
    sno: 80,
    year: 2021,
    name: "Dr. SSV Ramakumar",
    designation: "Director, R&D and Board member of Indian Oil Corporation Ltd",
    degree: "1984 ‐ M.Sc ‐ Chemistry",
    category: "Excellence in Technology Innovation"
  },
  {
    sno: 81,
    year: 2021,
    name: "Prof. Rajeev Ahuja",
    designation: "Director of the Indian Institute of Technology Ropar",
    degree: "1986 ‐ M.Sc ‐ Physics",
    category: "Research Excellence"
  },
  {
    sno: 82,
    year: 2021,
    name: "Mr. Saurabh Agrawal",
    designation: "Executive Director and Group Chief Financial Officer (CFO) of Tata Sons",
    degree: "1992 ‐ BE ‐ Chemical Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE PRIVATE SECTOR"
  },
  {
    sno: 83,
    year: 2021,
    name: "Mr. Sumit Dhawan",
    designation: "President of VMware, Inc.",
    degree: "1996 ‐ BE ‐ Computer Science & Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE PRIVATE SECTOR"
  },
  {
    sno: 84,
    year: 2022,
    name: "Prof. Ambrish Chandra",
    designation: "Professor of Electrical Engineering with the École de Technologie Supérieure (ÉTS), Montréal, QC, Canada",
    degree: "1977 ‐ BE ‐ Electrical Engg.",
    category: "ACADEMIC OR RESEARCH EXCELLENCE"
  },
  {
    sno: 85,
    year: 2022,
    name: "Dr. Amit K. Gupta",
    designation: "Head of Rolls-Royce Electrical at Rolls-Royce Singapore Pte Ltd.",
    degree: "2000 ‐ BE ‐ Electrical Engg.",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  },
  {
    sno: 86,
    year: 2022,
    name: "Prof. Bharat Bhasker",
    designation: "Director at IIM Ahmedabad",
    degree: "1980 ‐ BE ‐ E & C Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE GOVERNMENT OR PUBLIC SECTOR"
  },
  {
    sno: 87,
    year: 2022,
    name: "Shri Vinay Kumar Tripathi",
    designation: "Former Chairman, Railway Board, Ministry of Railways",
    degree: "1982 ‐ BE ‐ Electrical Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE GOVERNMENT OR PUBLIC SECTOR"
  },
  {
    sno: 88,
    year: 2022,
    name: "Shri Kamal Bali",
    designation: "President & Managing Director at Volvo Group",
    degree: "1981 ‐ BE ‐ Electrical Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE PRIVATE SECTOR"
  },
  {
    sno: 89,
    year: 2022,
    name: "Mr. Rajat Shikhar",
    designation: "Co-Founder & CPTO at Dealshare",
    degree: "2001 ‐ B.Tech ‐ Civil",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 90,
    year: 2022,
    name: "Ms. Rashmi Verma",
    designation: "Co-Founder & Director, MapmyIndia",
    degree: "1977 ‐ BE ‐ Chemical Engg.",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 91,
    year: 2023,
    name: "Shri. Harish Kumar",
    designation: "Founder- Ability on Wheels",
    degree: "1993 ‐ M.Sc ‐ Physics",
    category: "EXCELLENCE IN SERVICE TO THE SOCIETY"
  },
  {
    sno: 92,
    year: 2023,
    name: "Prof. Bhim Singh",
    designation: "Professor, Department of Electrical Engineering, IIT Delhi",
    degree: "1977 ‐ BE ‐ Electrical Engg.",
    category: "ACADEMIC OR RESEARCH EXCELLENCE"
  },
  {
    sno: 93,
    year: 2023,
    name: "Shri. Ayodhya Nath Tiwari",
    designation: "Head, Empa- Swiss Federal Laboratories for Material Science and Technology, Switzerland & Professor, ETH-Zurich Switzerland",
    degree: "1980 ‐ M.Sc. ‐ Physics",
    category: "ACADEMIC OR RESEARCH EXCELLENCE"
  },
  {
    sno: 94,
    year: 2023,
    name: "Shri. Sanjay Kumar Agarwal",
    designation: "Chairman Central Board of Indirect Taxes and Customs, New Delhi",
    degree: "1987 ‐ BE ‐ E & C",
    category: "EXCELLENCE IN LEADERSHIP IN THE GOVERNMENT OR PUBLIC SECTOR"
  },
  {
    sno: 95,
    year: 2023,
    name: "Shri. Vikas Kumar",
    designation: "Managing Director, Delhi Metro Rail Corporation Ltd., New Delhi",
    degree: "1987 ‐ BE ‐ Electrical Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE GOVERNMENT OR PUBLIC SECTOR"
  },
  {
    sno: 96,
    year: 2023,
    name: "Shri. Anand Ramamoorthy",
    designation: "Managing Director & Vice President, Micron India",
    degree: "1996 ‐ BE ‐ Metallurgical and Materials Engineering",
    category: "EXCELLENCE IN LEADERSHIP IN THE PRIVATE SECTOR"
  },
  {
    sno: 97,
    year: 2023,
    name: "Shri. Sandeep Garg",
    designation: "CEO & Managing Director at Welspun Enterprises Ltd, Mumbai",
    degree: "1981 ‐ BE ‐ Electrical Engg.",
    category: "EXCELLENCE IN LEADERSHIP IN THE PRIVATE SECTOR"
  },
  {
    sno: 98,
    year: 2023,
    name: "Shri. Ravi Kant Gupta",
    designation: "CEO & MD Bridgecon Systems Pvt. Ltd, Noida",
    degree: "1981 ‐ BE ‐ Civil Engg.",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 99,
    year: 2023,
    name: "Shri. Sunil Goyal",
    designation: "Dy. Chief Executive Officer at Sopra Steria, Noida",
    degree: "1989 ‐ BE ‐ E & C",
    category: "ENTREPRENEURIAL EXCELLENCE"
  },
  {
    sno: 100,
    year: 2023,
    name: "Shri. Yuvraj Mehra",
    designation: "Managing Principal Consultant, Mehra Consulting Services, LLC, Montgomery, Texas, United States",
    degree: "1971 ‐ BE ‐ Chemical",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  },
  {
    sno: 101,
    year: 2023,
    name: "Shri. G. Madhusudan Reddy",
    designation: "Outstanding Scientist & Director Defence Metallurgical Research Laboratory, Kanchanbagh, Hyderabad",
    degree: "1987 ‐ Ph.D ‐ Electrical Engg.",
    category: "EXCELLENCE IN ENGINEERING OR TECHNOLOGY INNOVATION"
  }
];


const youngAwardees = [
  {
    sno: 1,
    year: 2019,
    name: "Mr. Ketan Kapoor",
    designation: "Co Founder & Ex CEO, Mercer",
    degree: "2001 ‐ B.Tech. ‐ Industrial Engg."
  },
  {
    sno: 2,
    year: 2019,
    name: "Mr. Harshil Mathur",
    designation: "CEO & Co‐founder Razorpay",
    degree: "2013 ‐ B.Tech. ‐ Mechanical Engg."
  },
  {
    sno: 3,
    year: 2019,
    name: "Mr. Shashank Kumar",
    designation: "CTO & Co‐founder Razorpay",
    degree: "2012 ‐ B.Tech. ‐ Computer Science Engg."
  },
  {
    sno: 4,
    year: 2020,
    name: "Ms. Aarti Gill",
    designation: "Co‐founder, OZiva",
    degree: "2008 ‐ B.Tech. ‐ ECE"
  },
  {
    sno: 5,
    year: 2020,
    name: "Mr. Rahul Sharma",
    designation: "Co‐founder, Zetwerk",
    degree: "2012 ‐ B.Tech. ‐ Electrical Engg."
  },
  {
    sno: 6,
    year: 2020,
    name: "Mr. Sachin Gupta",
    designation: "CEO and Co‐founder of HackerEarth",
    degree: "2012 ‐ B.Tech. ‐ Computer Science Engg."
  },
  {
    sno: 7,
    year: 2021,
    name: "Dr. Raju Kumar Gupta",
    designation: "Associate Professor, IIT Kanpur",
    degree: "2005 ‐ B.Tech. ‐ Chemical Engg."
  },
  {
    sno: 8,
    year: 2021,
    name: "Mr. Ankit Garg",
    designation: "CEO & Co-Founder ‐ Wakefit",
    degree: "2010 ‐ B.Tech. ‐ Chemical Engg."
  },
  {
    sno: 9,
    year: 2021,
    name: "Mr. Mukul Rustagi",
    designation: "Co-founder and CEO ‐ Classplus",
    degree: "2013 ‐ B.Tech. ‐ E & C Engg."
  },
  {
    sno: 10,
    year: 2022,
    name: "Mr. Saurabh Sancheti",
    designation: "Group chief financial officer at Jio Platforms",
    degree: "2007 ‐ B.Tech. ‐ E & C"
  },
  {
    sno: 11,
    year: 2022,
    name: "Mr. Nishant Chandra",
    designation: "Co-Founder, Newton School",
    degree: "2014 ‐ B.Tech. ‐ Mech & Ind."
  },
  {
    sno: 12,
    year: 2022,
    name: "Mr. Siddharth Maheshwari",
    designation: "Founder, Newton School",
    degree: "2014 ‐ B.Tech. ‐ CSE"
  },
  {
    sno: 13,
    year: 2023,
    name: "Mr. Puneet Jaggi",
    designation: "Founder, Prescinto Technologies & Co-Founder, Gensol Group, Bengaluru, Karnataka",
    degree: "2010 ‐ B.Tech. ‐ Chemical"
  },
  {
    sno: 14,
    year: 2023,
    name: "Mr. Sourabh Gupta",
    designation: "CEO & C0-Founder, Skitai",
    degree: "2016 ‐ B.Tech. ‐ M & M"
  },
  {
    sno: 15,
    year: 2023,
    name: "Mr. Abhishek Agarwal",
    designation: "Co Founder and Director at Farmley (Connedit Business Solutions Pvt Ltd)",
    degree: "2016 ‐ B.Tech. ‐ Mechanical"
  },
  {
    sno: 16,
    year: 2023,
    name: "Ms. Pooja Devi",
    designation: "Principal Scientist, CSIR-CSIO, Chandigarh",
    degree: "2010 ‐ M.Tech. ‐ Nanotechnology"
  },
  {
    sno: 17,
    year: 2023,
    name: "Mr. Ghanshyam Pilania",
    designation: "Senior Engineer GE Aerospace, USA",
    degree: "2007 ‐ B.Tech. ‐ M & M"
  }
];

const outstandingAwardees = [
  {
    sno: 1,
    year: 2021,
    name: "Mr. Pradeep Kumar Bhatnagar",
    designation: "President ‒ Reliance Infocomm",
    degree: "1970 ‒ BE ‒ Electrical Engg."
  },
  {
    sno: 2,
    year: 2021,
    name: "Mr. Pitambar Shivnani",
    designation: "President ‒ ABB India Limited",
    degree: "1986 ‒ BE ‒ Electrical Engg."
  },
  {
    sno: 3,
    year: 2021,
    name: "Dr. Kiran Panesar",
    designation: "Lead role in ‒ Georgia Institute of Technology",
    degree: "1989 ‒ BE ‒ Computer Science & Engg."
  },
  {
    sno: 4,
    year: 2022,
    name: "Shri. Mohinder L. Nayyar",
    designation: "ASME Life Fellow and recipient of 2016 Distinguished Alumnus Award of IIT Roorkee",
    degree: "1966 ‒ BE ‒ Mechanical Engg."
  },
  {
    sno: 5,
    year: 2022,
    name: "Shri. Pradeep Kumar Kapse",
    designation: "Technical Advisor, Eicher Motors Ltd",
    degree: "1972 ‒ BE ‒ Mechanical Engg."
  },
  {
    sno: 6,
    year: 2023,
    name: "Shri. Aditya Gupta",
    designation: "President, Heritage Foundation USA, IITRHF",
    degree: ["1974 ‒ BE ‒ Mechanical Engg.", "1976 ‒ ME ‒ Machine Design"]
  },
  {
    sno: 7,
    year: 2023,
    name: "Shri. Vivek K. Varma",
    designation: "Global Service Delivery Executive (EU & US), Nielsen Global Connect, Chicago, USA",
    degree: ["1983 ‒ BE ‒ Industrial Engg.", "1985 ‒ ME ‒ Mechanical Engg."]
  }
];

// Group function (group by year)/
const groupByYear = (data = []) =>
  data.reduce((acc, curr) => {
    if (!acc[curr.year]) acc[curr.year] = [];
    acc[curr.year].push(curr);
    return acc;
  }, {});

// const groupByYear = (data) =>
//   data.reduce((acc, curr) => {
//     if (!acc[curr.year]) acc[curr.year] = [];
//     acc[curr.year].push(curr);
//     return acc;
//   }, {});

// Reusable Table Component
// const AwardeesTable = ({ title, data }) => {
//   const groupedByYear = groupByYear(data);
const AwardeesTable = ({ title, data = [], showCategory = true }) => {
  const groupedByYear = groupByYear(data);
  return (
    // <div className="max-w-6xl mx-auto px-4 py-8">
    //   <div className="overflow-x-auto">
    //     <table className="w-full border border-gray-300 text-sm bg-white text-center">
    //       <thead>
    //         <tr>
    //           <th
    //             colSpan={4+ (showCategory ? 1 : 0)}
    //             className="bg-green-200 text-center text-sm font-semibold border border-gray-300 py-2"
    //           >
    //             {title}
    //           </th>
    //         </tr>
    //         <tr className="bg-white">
    //           <th className="border border-gray-300 px-3 py-2 font-medium">
    //             S.No.
    //           </th>
    //           <th className="border border-gray-300 px-3 py-2 font-medium">
    //             Year
    //           </th>
    //           <th className="border border-gray-300 px-3 py-2 font-medium">
    //             Name (Designation & Affiliation)
    //           </th>
    //           <th className="border border-gray-300 px-3 py-2 font-medium">
    //             Year of Obtaining the Degree & Branch
    //           </th>
    //            {showCategory && (
    //           <th className="border border-gray-300 px-3 py-2 font-medium">
    //             Category
    //           </th>
    //           )}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {Object.keys(groupedByYear).map((year) =>
    //           groupedByYear[year].map((a, idx) => (
    //             <tr key={a.sno} className="bg-white">
    //               <td className="border border-gray-300 px-3 py-2">{a.sno}.</td>

    //               {/* Year only once */}
    //               {idx === 0 && (
    //                 <td
    //                   className="border border-gray-300 px-3 py-2 font-semibold"
    //                   rowSpan={groupedByYear[year].length}
    //                 >
    //                   {year}
    //                 </td>
    //               )}

    //               {/* <td className="border border-gray-300 px-3 py-2">{a.name}</td> */}
    //               <td className="border border-gray-300 px-3 py-2 text-start">
    //                 {a.name.split("||").map((line, i) => (
    //                   <div key={i}>{line}</div>
    //                 ))}
    //               </td>
    //               {/* <td className="border border-gray-300 px-3 py-2">{a.degree}</td> */}
    //               <td className="border border-gray-300 px-3 py-2 text-start">
    //                 {a.degree.split("||").map((line, i) => (
    //                   <div key={i}>{line}</div>
    //                 ))}
    //               </td>
    //                 {showCategory && (
    //               <td className="border border-gray-300 px-3 py-2">
    //                 {a.category}
    //               </td>
    //               )}
    //             </tr>
    //           ))
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-400 to-blue-600 text-white py-3 px-4 text-center font-semibold text-lg">
          {title}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">S.No.</th>
                <th className="px-4 py-3 text-left font-semibold">Year</th>
                <th className="px-4 py-3 text-left font-semibold">Name & Designation</th>
                <th className="px-4 py-3 text-left font-semibold">Degree</th>
                {showCategory && <th className="px-4 py-3 text-left font-semibold">Category</th>}
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedByYear).map((year) =>
                groupedByYear[year].map((a, idx) => (
                  <tr
                    key={a.sno}
                    className="odd:bg-white even:bg-gray-50 hover:bg-green-50 transition"
                  >
                    <td className="px-4 py-3">{a.sno}.</td>
                    {idx === 0 && (
                      <td
                        className="px-4 py-3 font-semibold"
                        rowSpan={groupedByYear[year].length}
                      >
                        {year}
                      </td>
                    )}
                    <td className="px-4 py-3">
                      <div className="font-medium">{a.name}</div>
                      <div className="text-gray-600 text-xs">{a.designation}</div>
                    </td>
                      <td className="px-4 py-3 whitespace-pre-line">{a.degree}</td>
                    {showCategory && <td className="px-4 py-3">{a.category}</td>}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Page
const AwardsPage = () => {
    const [openTable, setOpenTable] = useState(null);

  const toggleTable = (tableName) => {
    setOpenTable(openTable === tableName ? null : tableName);
  };

  return (
    // <div>
    //   <AwardeesTable
    //     title="LIST OF IITR's DISTINGUISHED ALUMNUS AWARDEES (2005 - 2023)"
    //     data={distinguishedAwardees}
    //   />
    //   <AwardeesTable
    //     title="LIST OF IITR's DISTINGUISHED YOUNG ALUMNUS AWARDEES (2019 - 2023)"
    //     data={youngAwardees}
    //     showCategory={false}
    //   />
    //   <AwardeesTable
    //     title="LIST OF IITR's OUTSTANDING SERVICE AWARDEES (2021 - 2023)"
    //     data={outstandingAwardees}
    //     showCategory={false}
    //   />
    // </div>
     <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Distinguished */}
      <div className="bg-white rounded-lg shadow">
        <button
          onClick={() => toggleTable("distinguished")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold text-lg rounded-t-lg"
        >
          LIST OF IITR's DISTINGUISHED ALUMNUS AWARDEES (2005 - 2023)
          <span>{openTable === "distinguished" ? "▲" : "▼"}</span>
        </button>
        {openTable === "distinguished" && (
          <div className="p-4">
            <AwardeesTable
              data={distinguishedAwardees}
              showDegree={true}
              showCategory={true}
            />
          </div>
        )}
      </div>

      {/* Young */}
      <div className="bg-white rounded-lg shadow">
        <button
          onClick={() => toggleTable("young")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold text-lg rounded-t-lg"
        >
          LIST OF IITR's DISTINGUISHED YOUNG ALUMNUS AWARDEES (2019 - 2023)
          <span>{openTable === "young" ? "▲" : "▼"}</span>
        </button>
        {openTable === "young" && (
          <div className="p-4">
            <AwardeesTable data={youngAwardees}  showCategory={false} />
          </div>
        )}
      </div>

      {/* Service */}
      <div className="bg-white rounded-lg shadow">
        <button
          onClick={() => toggleTable("service")}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold text-lg rounded-t-lg"
        >
          LIST OF IITR's OUTSTANDING SERVICE AWARDEES (2021 - 2023)
          <span>{openTable === "service" ? "▲" : "▼"}</span>
        </button>
        {openTable === "service" && (
          <div className="p-4">
            <AwardeesTable data={outstandingAwardees}  showCategory={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsPage;

// import React from "react";

// // Data Array
// const awardees = [
//   {
//     sno: 1,
//     year: 2005,
//     name: "Prof. A.S. Arya (Former Pro Vice Chancellor, UOR)",
//     degree: "1953 - BE - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 2,
//     year: 2005,
//     name: "Shri Subodh Bhargava (Chairman, TATA Communications Ltd)",
//     degree: "1962 - BE - Mechanical Engg.",
//     category: "Social Sciences/Engineering and Services/Public Administration",
//   },
//   {
//     sno: 3,
//     year: 2005,
//     name: "Shri Jai Prakash Gaur (Founder Chairman of the Jaypee Group)",
//     degree: "1950 - DIP - Civil Engg.",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
//   {
//     sno: 4,
//     year: 2005,
//     name: "Ms. Vinita Gupta (Chairperson, Quick Eagle Networks)",
//     degree: "1973 - BE - ECE",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
//   {
//     sno: 5,
//     year: 2006,
//     name: "Prof. Bharat Singh (Former Vice Chancellor, UOR)",
//     degree: "1945 - DIP - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 6,
//     year: 2006,
//     name: "Prof. S.K. Khanna (Former Chairman of AICTE)",
//     degree: "1958 - BE - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 7,
//     year: 2006,
//     name: "Shri Pradip Baijal (Retd. Chairman TRAI)",
//     degree: "1963 - BE - Mechanical Engg.",
//     category: "Social Sciences/Engineering and Services/Public Administration",
//   },
//   {
//     sno: 8,
//     year: 2006,
//     name: "Shri R.K. Singh (DIC, Jaiprakash Associates Ltd.)",
//     degree: "1966 - BE - Civil Engg.",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
// ];

// // Group awardees by year
// const groupedByYear = awardees.reduce((acc, curr) => {
//   if (!acc[curr.year]) acc[curr.year] = [];
//   acc[curr.year].push(curr);
//   return acc;
// }, {});

// const AwardeesTable = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 text-sm bg-white text-center">
//           <thead>
//             <tr>
//               <th
//                 colSpan={5}
//                 className="bg-green-200 text-center text-sm font-semibold border border-gray-300 py-2"
//               >
//                 LIST OF IITR's DISTINGUISHED ALUMNUS AWARDEES (2005 - 2023)
//               </th>
//             </tr>
//             <tr className="bg-white">
//               <th className="border border-gray-300 px-3 py-2 font-medium">
//                 S.No.
//               </th>
//               <th className="border border-gray-300 px-3 py-2 font-medium">
//                 Year
//               </th>
//               <th className="border border-gray-300 px-3 py-2 font-medium">
//                 Name (Designation & Affiliation)
//               </th>
//               <th className="border border-gray-300 px-3 py-2 font-medium">
//                 Year of Obtaining the Degree & Branch
//               </th>
//               <th className="border border-gray-300 px-3 py-2 font-medium">
//                 Category
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(groupedByYear).map((year) =>
//               groupedByYear[year].map((a, idx) => (
//                 <tr key={a.sno} className="bg-white">
//                   <td className="border border-gray-300 px-3 py-2">{a.sno}.</td>

//                   {/* Year ek hi baar print hoga */}
//                   {idx === 0 && (
//                     <td
//                       className="border border-gray-300 px-3 py-2 font-semibold"
//                       rowSpan={groupedByYear[year].length}
//                     >
//                       {year}
//                     </td>
//                   )}

//                   <td className="border border-gray-300 px-3 py-2">{a.name}</td>
//                   <td className="border border-gray-300 px-3 py-2">{a.degree}</td>
//                   <td className="border border-gray-300 px-3 py-2">{a.category}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// // };

// export default AwardeesTable;

// import React from "react";

// // Data Array
// const awardees = [
//   { sno: 1, year: 2005, name: "Prof. A.S. Arya (Former Pro Vice Chancellor, UOR)", degree: "1953 - BE - Civil Engg.", category: "Academic/Research" },
//   { sno: 2, year: 2005, name: "Shri Subodh Bhargava (Chairman, TATA Communications Ltd)", degree: "1962 - BE - Mechanical Engg.", category: "Social Sciences/Engineering and Services/Public Administration" },
//   { sno: 3, year: 2005, name: "Shri Jai Prakash Gaur (Founder Chairman of the Jaypee Group)", degree: "1950 - DIP - Civil Engg.", category: "Corporate Development/Administration/Entrepreneurship" },
//   { sno: 4, year: 2005, name: "Ms. Vinita Gupta (Chairperson, Quick Eagle Networks)", degree: "1973 - BE - ECE", category: "Corporate Development/Administration/Entrepreneurship" },
//   { sno: 5, year: 2006, name: "Prof. Bharat Singh (Former Vice Chancellor, UOR)", degree: "1945 - DIP - Civil Engg.", category: "Academic/Research" },
//   { sno: 6, year: 2006, name: "Prof. S.K. Khanna (Former Chairman of AICTE)", degree: "1958 - BE - Civil Engg.", category: "Academic/Research" },
//   { sno: 7, year: 2006, name: "Shri Pradip Baijal (Retd. Chairman TRAI)", degree: "1963 - BE - Mechanical Engg.", category: "Social Sciences/Engineering and Services/Public Administration" },
//   { sno: 8, year: 2006, name: "Shri R.K. Singh (DIC, Jaiprakash Associates Ltd.)", degree: "1966 - BE - Civil Engg.", category: "Corporate Development/Administration/Entrepreneurship" },
// ];

// // Group data by year
// const groupByYear = awardees.reduce((acc, curr) => {
//   if (!acc[curr.year]) acc[curr.year] = [];
//   acc[curr.year].push(curr);
//   return acc;
// }, {});

// // Reusable Table Component
// const AwardeesTable = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 text-sm">
//           <thead>
//             <tr>
//               <th
//                 colSpan={5}
//                 className="bg-green-200 text-center text-sm font-semibold border border-gray-300 py-2"
//               >
//                 LIST OF IITR's DISTINGUISHED ALUMNUS AWARDEES (2005 - 2023)
//               </th>
//             </tr>
//             <tr className="bg-white">
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">S.No.</th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">Year</th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">Name (Designation & Affiliation)</th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">Year of Obtaining the Degree & Branch</th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(groupByYear).map((year) => (
//               groupByYear[year].map((a, i) => (
//                 <tr key={a.sno} className="bg-white">
//                   <td className="border border-gray-300 px-3 py-2 align-top">{a.sno}.</td>
//                   {/* Year sirf pehle wale awardee ke liye dikhana */}
//                   {i === 0 ? (
//                     <td
//                       rowSpan={groupByYear[year].length}
//                       className="border border-gray-300 px-3 py-2 align-top font-semibold bg-gray-50"
//                     >
//                       {year}
//                     </td>
//                   ) : null}
//                   <td className="border border-gray-300 px-3 py-2 align-top">{a.name}</td>
//                   <td className="border border-gray-300 px-3 py-2 align-top">{a.degree}</td>
//                   <td className="border border-gray-300 px-3 py-2 align-top">{a.category}</td>
//                 </tr>
//               ))
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AwardeesTable;

// import React from "react";

// // Data Array
// const awardees = [
//   {
//     sno: 1,
//     year: 2005,
//     name: "Prof. A.S. Arya (Former Pro Vice Chancellor, UOR)",
//     degree: "1953 - BE - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 2,
//     year: 2005,
//     name: "Shri Subodh Bhargava (Chairman, TATA Communications Ltd)",
//     degree: "1962 - BE - Mechanical Engg.",
//     category: "Social Sciences/Engineering and Services/Public Administration",
//   },
//   {
//     sno: 3,
//     year: 2005,
//     name: "Shri Jai Prakash Gaur (Founder Chairman of the Jaypee Group)",
//     degree: "1950 - DIP - Civil Engg.",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
//   {
//     sno: 4,
//     year: 2005,
//     name: "Ms. Vinita Gupta (Chairperson, Quick Eagle Networks)",
//     degree: "1973 - BE - ECE",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
//   {
//     sno: 5,
//     year: 2006,
//     name: "Prof. Bharat Singh (Former Vice Chancellor, UOR)",
//     degree: "1945 - DIP - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 6,
//     year: 2006,
//     name: "Prof. S.K. Khanna (Former Chairman of AICTE)",
//     degree: "1958 - BE - Civil Engg.",
//     category: "Academic/Research",
//   },
//   {
//     sno: 7,
//     year: 2006,
//     name: "Shri Pradip Baijal (Retd. Chairman TRAI)",
//     degree: "1963 - BE - Mechanical Engg.",
//     category: "Social Sciences/Engineering and Services/Public Administration",
//   },
//   {
//     sno: 8,
//     year: 2006,
//     name: "Shri R.K. Singh (DIC, Jaiprakash Associates Ltd.)",
//     degree: "1966 - BE - Civil Engg.",
//     category: "Corporate Development/Administration/Entrepreneurship",
//   },
// ];

// // Reusable Table Component
// const AwardeesTable = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-300 text-sm">
//           <thead>
//             <tr>
//               <th
//                 colSpan={5}
//                 className="bg-green-200 text-center text-sm font-semibold border border-gray-300 py-2"
//               >
//                 LIST OF IITR's DISTINGUISHED ALUMNUS AWARDEES (2005 - 2023)
//               </th>
//             </tr>
//             <tr className="bg-white">
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">
//                 S.No.
//               </th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">
//                 Year
//               </th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">
//                 Name (Designation & Affiliation)
//               </th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">
//                 Year of Obtaining the Degree & Branch
//               </th>
//               <th className="border border-gray-300 px-3 py-2 text-left font-medium">
//                 Category
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {awardees.map((a, i) => (
//               <tr key={i} className="bg-white">
//                 <td className="border border-gray-300 px-3 py-2 align-top">
//                   {a.sno}.
//                 </td>
//                 <td className="border border-gray-300 px-3 py-2 align-top">
//                   {a.year}
//                 </td>
//                 <td className="border border-gray-300 px-3 py-2 align-top">
//                   {a.name}
//                 </td>
//                 <td className="border border-gray-300 px-3 py-2 align-top">
//                   {a.degree}
//                 </td>
//                 <td className="border border-gray-300 px-3 py-2 align-top">
//                   {a.category}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AwardeesTable;
