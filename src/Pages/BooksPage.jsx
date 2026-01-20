import React from "react";

const books = [
  {
    title: "Seed of Life",
    author: "IPS Sanjeev Kumar Jain",
    batch: "B.E. ECE - 1986",
    cover: "/Seed_of_Life.jpeg",
    description:
      "Seed of Life: We're excited to announce the release of 'Seed of Life,' a profound spiritual book authored by IPS Sanjeev Kumar Jain (1986 batch), an esteemed IIT Roorkee alumnus. He is currently serving as a senior IPS officer and Director General of Police (Human Rights Commission) in the Haryana cadre.",
    buy: "https://www.amazon.in/Seed-Life-Scientific-Consciousness-Evidence/dp/9349311496",
  },
  {
    title: "Gravity of a Vision",
    author: "Dr. Ajay Mahajan",
    batch: "B.E. Mech - 1990",
    cover: "/gravity.jpg",
    description:
      "We are delighted to announce the publication of our alumnus, Dr. Ajay Mahajan’s (1990 batch) novel, Gravity of a Vision. The book went live on June 30, 2025, plunging the characters into another high-stakes international adventure. The book can be ordered on Amazon. The audiobook will follow in 30 days on Audible.",
    buy: "https://www.amazon.in/dp/B0FG2M67RB",
  },
  {
    title: "Infinite Leadership",
    author: "Dr. Balvir Talwar",
    batch: "B.E. - 2013",
    cover: "/Infinite_Leadership.png",
    description:
      "Dr. Balvir Talwar, the first Ph.D. from the Department of Management Studies at IIT Roorkee and a former Executive Director at BHEL, launched his fifth book, Infinite Leadership. The book explores modern leadership through vedic traditions, focusing on long-term goals, intrinsic motivation, and value-driven management.",
    buy: "https://www.amazon.in/Infinite-Leadership-Motivation-Greatness-Divinity/dp/B0F6VM5F6P",
  },
  {
    title: "Most popular books",
    author: "Shri Rishipal Dhiman",
    batch: "M.Sc., Ph.D - Chemistry - 1979, 1984",
    cover: "/rishi.jpeg",
    description:
      "डॉ. ऋषिपाल धीमान 'ऋषि' एम.एससी., पीएच.डी. (रसायन विज्ञान),रुड़की विश्वविद्यालय, ऋषिपाल धीमान ' ऋषि' हिंदी साहित्य में एक उस्ताद गजलकार की हैसियत रखते हैं। इनके पांच ग़ज़ल संग्रह प्रकाशित हैं। हिंदी ग़ज़ल के महत्वपूर्ण आलोचना ग्रंथों यथा ::हिंदी के समकालीन गजलकार' सं.हरे राम समीप' तथा 'हिंदी ग़ज़ल की परम्परा' आदि में आपकी चर्चा हुई है। 'हिंदी ग़ज़ल और ऋषिपाल धीमान' ग्रन्थ में इनकी गज़लों के विभिन्न आयामों पर समीक्षकों की आलोचनाएं हैं। कई विश्वविद्यालयों में इनकी गजलों पर शोध हो रहा है।गोपालदास 'नीरज'जी ने इनकी गज़लों के बारे में लिखा था 'ग़ज़ल की आत्मा - उसकी बहर और भाषाई मुहावरे की जो सही पहचान इनकी गजलों में देखने को मिलती है वह बहुत कम गजलकारों के पास है। वर्तमान परिवेश और नए सोच को नये बिंबों में ऋषि ने जो शब्दायित किया है वह हृदय पर अमित छाप छोड़ता है। छोटी बड़ी ग़ज़ल की सभी बहरों में इन्हें महारत हासिल है।' ये मंच और पुस्तक दोनों में सम्मान पाते हैं।",
    buy: "https://www.flipkart.com/rasta-dil-ka/p/itm39824cf0e3f15",
  },
  {
    title:
      "EXPERIMENTAL PROOF OF A NUCLEUS OF MASS AND CHARGE IN THE PHOTONS : RAREST OF THE RARE DISCOVERY",
    author: "Shri Narendra Swarup Agarwal",
    batch: "B.E. Chemical - 1972",
    cover: "/nsa.png",
    description:
      "Shri Narendra Swarup Agarwal passed his B. E. (Chemical) in the year 1972 from this prestigious Institute. For over 200 years, the world remained unaware of the presence of a tiny nucleus of mass and charge hidden in the photons, which is responsible for creating a pattern of bright and dark bands in the Interference Experiment. This is the discovery of the smallest particle in the world and a fundamental particle. The photons have a nucleus of mass with charge. The size of the nucleus of the photon is about 10 raised to the power minus 20 times the size of the photon. The nucleus of mass with charge in the photons answers the long-awaited mystery of Wave-Particle Duality. The above discoveries are based on the New Quantum Theory, developed in 2012 by the author. All the quantum phenomena are the evidence of the New Quantum Theory. This theory opens a new door for the development of Quantum Technologies and many other technologies.",
    buy: "",
  },
  {
    title: "Cyber Security Kill Chain",
    author: "Shri Shreyas Kumar",
    batch: "B.Arch. - 1999",
    cover: "/cyber.jpeg",
    description:
      "Prof. Shreyas Kumar is happy to announce the release of his book, Cyber Security Kill Chain - Tactics and Strategies, co-authored with Mr. Gourav Nagar. It has been published by Packt Publishers, UK. This book is a practical guide for cybersecurity professionals, offering strategies to understand and defend against cyberattacks at each stage of the kill chain. Whether you're new to the field or experienced, it equips you with the knowledge to stay ahead of evolving threats. They dedicate this work to Texas A&M University, celebrating its values of integrity, leadership, and excellence.",
    buy: "https://www.linkedin.com/in/shreyas/",
  },
  {
    title: "Most popular books",
    author: "Shri Naveen Kumar Chandra",
    batch: "Integrated M.Tech. - 2015",
    cover: "/naveen.jpeg",
    description:
      "Naveen Kumar Chandra is a graduate from IIT Roorkee and is an Indian Administrative Service officer. He has been writing his blog for 8 years where he shares his views on books, technology, civil services, philosophy and anything else that interests him. He is also a painter and loves to paint his own bookmarks. He is into sketching as well. He loves physics, science fiction, popular science and philosophy genre. He is also pursuing his masters in Economics as well as courses in a wide variety of areas like blockchain, astrophysics and psychology.",
    buy: "https://naveenkumarchandra.tumblr.com/",
  },
  {
    title: "Gravity of a Promise",
    author: "Mr. Ajay Mahajan",
    batch: "B.E. Mech - 1990",
    cover: "/gravity_promise.jpg",
    description:
      "Ajay Mahajan was born in Birmingham, England, but grew up in India. He attended St. Columba’s High School before earning his bachelor’s degree from the University of Roorkee, now known as IIT Roorkee. In the early 90s, he relocated to the US, where he attended Tulane University in New Orleans, and pursued his MS and PhD in mechanical engineering, specializing in Robotics, Controls, and Artificial Intelligence. For the past three decades, Ajay has been a college professor, scientist, administrator, innovator, and entrepreneur. He has published over 150 technical papers, but this novel is his first foray into the area of fiction and has taken him 10 years to complete. His professional journey includes working on projects for NASA, the US DoD, industry, as well as two Formula One race teams, Renault F1 in Oxford, UK, and Toyota F1 in Cologne, Germany. Outside of his professional pursuits, Ajay enjoys reading, traveling, swimming, squash, and sculling. Recently, he has been exploring the art of throwing ninja knives and mastering the use of bokken, tsai, and fencing swords. He resides in North Canton, Ohio, USA, with his wife and two daughters.",
    buy: "https://www.amazon.in/Gravity-Promise-Ajay-Mahajan/dp/B0D6YBQ2NM",
  },
  {
    title: "Reborn: Darkness is the Seed of Light",
    author: "Rajvi Mittal",
    batch: "B.Tech. - 2022",
    cover: "/reborn.jpg",
    description:
      "From the author's pen- In this book I have tried to capture my own moments of rebirth, where I have started seeing the world a little differently. I hope it makes you think about this beautiful world deeper than we usually do - more lovingly and more romantically. Apart from seeing the beauty in the mundane, this book is also about accepting that which we most want to run away from. In a world that often shies away from difficult emotions, Reborn dares to embrace them—to delve into the shadows and uncover the hidden truths that lie within. It's about understanding that negative emotions like sadness, jealousy, envy and hatred, far from being monsters to be feared, are simply messengers, urging us to pay attention and learn. Through this book, I want to take you, my reader, on a journey—a journey of introspection and self-discovery. And it is my hope that this book sparks a curiosity within you to explore your feelings and ponder life's mysteries with a fresh perspective. Who knows what might come of it? I want... however tough things get and regardless of how many times you want to give up on understanding and love... I want Reborn to be a reminder that that darkness is not the end, but the very seed which blossoms into light. Imagine a world where we all see each other as radiant lights, shining together in harmony and greater strength without needing to dim anyone else's radiance. This is what Reborn stands for.",
    buy: "https://www.amazon.in/Reborn-Darkness-Light-Rajvi-Mittal/dp/9363312895",
  },
  {
    title: "Most popular books",
    author: "Shri Ashish Ranjan Jha",
    batch: "B.E. - 2013",
    cover: "/ashish.png",
    description:
      "Ashish Ranjan Jha received his Bachelors degree in Electrical Engineering from IIT Roorkee (India). He has worked for large technology companies like Oracle, Sony as well as the more recent tech unicorns such as Tractable and Revolut, mostly focussed around Artificial Intelligence. He currently works as Head of Machine Learning and Artificial Intelligence at XYZ Reality, a construction tech startup bringing AR/VR and AI into the world of construction.",
    buy: "https://www.linkedin.com/in/ashishrj/",
  },
  {
    title: "फटी जीन्स का चिंतन",
    author: "डॉ के के अस्थाना",
    batch: "B.Arch. - 1982",
    cover: "/फटी_जीन्स_का_चिंतन.jpg",
    description: `लेखक आईआईटी रूड़की से वास्तुकला स्नातक हैं। "फटी जींस का चिंतन" वरिष्ठ व्यंग्यकार डॉ के के अस्थाना के 42 सामाजिक व्यंग्यों का संग्रह है। देश और समाज में व्याप्त विसंगतियां एवम् कुरीतियां किसे नहीं खलतीं। पर डॉ अस्थाना उनसे खीझने के स्थान पर उन पर चोट करते हैं। वह उसकी परत दर परत बखिया उधेड़ते हैं। पाठक भी बखिया उधेड़ने की प्रक्रिया का आनंद लेता है और लेख का अंत होते होते इसमें छुपे हुए संदेश पर सोचने को विवश हो जाता है।
    "फटी जींस का चिन्तन" में अमीरों द्वारा फटी जींस पहने जाने पर वह अपने तरीके से चुटकी लेते हैं । वह फटी जींस टाइप के अपने पुराने दोस्तों के रूपक से समाज में हुए नैतिक पराभव को हल्के-फुल्के ढंग से परंतु बड़ी गंभीरता से रेखांकित करते हैं। श्री अस्थाना का रचना संसार बहुत विस्तृत है।
    "फटी जींस का चिंतन" में विषयों की विविधता इसे सिद्ध करती है। समाज के विभिन्न स्तरों व्याप्त एवं नित नई उत्पन्न हो रही विसंगतियों को लेखक ने बड़े प्रभावशाली ढंग से रेखांकित किया है।`,
    buy: "https://www.linkedin.com/in/ar-dr-kk-asthana-34a170b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
  },
  {
    title: "Most popular books",
    author: "Dr. Ajit Singhvi",
    batch: "",
    cover: "/Ajit_Singhvi.jpeg",
    description: "Dr. Ajit Singhvi, UK based Indian Philanthropist, Management Thinker, Alumnus of Harward Business School. Donated Rs. 1.60 crores to IIT Roorkee.",
    buy: "https://www.linkedin.com/in/ajit-singhvi-34bb158/?originalSubdomain=uk",
  },
  {
    title: "Most popular books",
    author: "Shri Shailendra Joshi",
    batch: "B.E. ECE - 1981",
    cover: "/Shailendra.jpg",
    description: `Dr Shailendra Joshi , is an alumnus of IITR. As an Indian Administrative Service officer of 1984 batch, he superannuated as the Chief Secretary of Telangana State. He served the nation in various capacities.
    His notable work is in the field of global environment and sustainability with United Nations and other multilateral and bilateral agencies.
    He believed in and practiced people centric governance. He has reached across many people as a speaker and an author.`,
    buy: "https://www.linkedin.com/in/shailendra-joshi-a35855184/?originalSubdomain=in",
  },
  {
    title: "Most popular books",
    author: "Shri Ved Prakash Prajapati",
    batch: "B.E. Electrical - 1989",
    cover: "/ved.jpg",
    description: "Ved Prakash Prajapati is an Alumnus of IIT Roorkee from the batch of 1989 Electrical Engineering. He is poet and writer. His first book “Kuchh Ehsaas” was published in year 2021. This book is a coloured book and collection of poetry written on the features of friends and colleague/ seniors who were retiring from his organisation (period from 2012 to 2018), all these poetry were framed and presented to individuals on the day of their retirement. Another book “Aao Laut Chalen Ab Gaon” is also collection of poetry, published in the year 2021. It is bunch of variety of topics like spiritualism, patriotism, festivals of India, beauty of village etc. It was written during corona period. Some of the poems are on corona also. His book “Jang-E-Azadi Ke 75 Shahid” is the brief story of 75 martyrs who sacrificed their life for freedom of our nation during freedom struggle from 1857 to 1947, the book was written during Azadi Ka Amrit Mahotasav and published in Amrit Kal, year 2022. This book contains story of martyr/ martyrs from almost each state. All the above books are published by “Hindi Shree” publication.",
    buy: "https://www.linkedin.com/in/ved-prakash-prajapati-95499385/",
  },
  {
    title: "Most popular books",
    author: "Ms. Purnima (Mital) Gupta",
    batch: "B.Arch. - 1968",
    cover: "/Purnima.jpg",
    description: `Purnima (Mital) Gupta is an Alumna of IIT Roorkee from the batch of 1968 Architecture. As her journey from India to America continues; her perception, experience and understanding of cultural differences continue to evolve. The first-generation immigrants have struggled to establish themselves in the midst of interracial conflicts and little family support. Their children started out with an incomplete family picture, were raised in dual cultures and ended up split between wrongs and rights. Their relationships with their children are need-based or lost. Many of them don't get to see their grandchildren, let alone get to bond with them. They dream to hear their doorbell ring to hear, "Yoo-hoo, where are you," "Peek a boo," or "I thought you were a ghost."`,
    buy: "https://www.linkedin.com/in/purnima-gupta-2202952b/",
  },
  {
    title: "Arushi : Surya Ki Pehli Kiran",
    author: "Shri Sandeep Singh",
    batch: "B.Arch. - 1987",
    cover: "/arushi.jpg", 
    description: "Shri Sandeep Singh is an Alumnus of IIT Roorkee from the batch of 1987 Architecture. Arushi is a compelling and inspiring story about the aspirations of a visually impaired girl in the India of today, and how we can overcome our challenges when we try.",
    buy: "",
  },
  {
    title: "Most popular books",
    author: "Shri Amit Agarwal",
    batch: "B.E. Mech - 1990",
    cover: "/amitag.jpg",
    description: "Amit Agarwal is an engineer from the University of Roorkee (now IIT Roorkee). He currently works for a prestigious company but took time out for the subject he is passionate about. He is also an avid marathoner and mountaineer. His first book, Swift Horses Sharp Swords, examined turbulent Indian medieval history and was translated into Hindi. In 2022, he published his second book, A Never-Ending Conflict, which deals with modern Indian history. His book, Temple Treasure: A Journey through Time, dwells on the history and evolution of temples. His latest book ‘Crossing Continents’ deals with European travellers to India in medieval times. He taught a history course for students of Amrita Vishwa Vidyapeetham. In his spare time, he teaches math to underprivileged children. He can be reached on Twitter at @amit1119.",
    buy: "",
  },
  {
    title: "Most popular books",
    author: "Shri Aloke B Lal",
    batch: "M.Tech. Earth Science - 1974",
    cover: "/Aloke.jpg",
    description: `Aloke Lal is a rare amalgamation of decorated cop and acclaimed artist. A gold medallist IIT-ian (M.Tech.-Earth Science-1974), he joined the Indian Police Service (IPS) in 1975. He served with distinction in the crime-infested belts of the Hindi heartland for thirty-seven years rising to the top rank of Director-General. He received two medals from the President of India—one for ‘long and meritorious services’ and the other for ‘distinguished services’. Even in the time of his most challenging postings, he kept his love for the fine arts alive by holding painting exhibitions and writing newspaper columns. He is the author of two bestselling books The Barabanki Narcos: Busting India’s Most Notorious Drug Cartel and Murder in the Bylanes: Life and Death in a Divided City.
    He is a TEDx speaker and has been a quiz master on television. He also served as the cultural advisor to the Governor of Uttarakhand.`,
    buy: "https://www.lifepage.in/page/alokeblal",
  },
  {
    title: "Most popular books",
    author: "Shri Chetan sharma",
    batch: "B.E. Electrical - 1991",
    cover: "/Chetan.jpg",
    description: `Chetan has BE from Indian Institute of Technology (IIT), Roorkee. He loves travel, history, and is an avid sports fan. He was captain of the university (IIT Roorkee) badminton team and has won university championships in India and the US.
    Chetan is Founder and President of the firm. He is a recognized industry expert in strategy and implementation of wireless data and pervasive computing solutions. He has a strong background in developing and launching technologies, products, and solutions for the wireless Industry, including extensive experience in managing and delivering all phases of the product development cycle. Executives from leading wireless companies around the world seek his accurate predictions, independent insights, and actionable recommendations. He has served as an advisor to senior executive management of several Fortune 100 companies in the wireless space. Some of his clients include NTT DoCoMo, Disney, KTF, Sony, Samsung, Virgin Mobile, Sprint Nextel, AT&T Wireless, Alcatel-Lucent, KDDI, Cincinnati Bell, Reuters, Qualcomm, Reliance Infocomm, SAP, Merrill Lynch, American Express, Infospace, BEA, and HP.`,
    buy: "https://www.linkedin.com/in/chetansharma/",
  },
  {
    title: "Who Am I: The Eternal Quest of Human Existence",
    author: "Dr. Rajiv K. Tayal",
    batch: "B.E. Chemical - 1981",
    cover: "/Rajiv_tayal.jpg",
    description: `Dr. Rajiv K. Tayal an alumnus of IIT Roorkee, signed off as an advisor from the Department of Science & Technology(DST), Government of India.
    With a professional career spanning four decades, he worked as a practicing engineer in the industry as well as a science administrator in DST and its affiliated institutions. Despite his formal training and lifelong career as an R&D professional in engineering.
    Dr. Tayal has been an avid student of metaphysical aspects of life for the last two and a half decades, drawing inspiration from the Vedantic school of thought.`,
    buy: "",
  },
  {
    title: "ART OF HANDLING MONEY AND INVESTMENTS: A Practical Guide to Personal Finances",
    author: "Dr. Rajiv K. Tayal",
    batch: "B.E. Chemical - 1981",
    cover: "/Art_Finances.jpg",
    description: `Dr. Rajiv K. Tayal an alumnus of IIT Roorkee, signed off as an advisor from the Department of Science & Technology(DST), Government of India.
    With a professional career spanning four decades, he worked as a practicing engineer in the industry as well as a science administrator in DST and its affiliated institutions. Despite his formal training and lifelong career as an R&D professional in engineering.
    Dr. Tayal has been an avid student of metaphysical aspects of life for the last two and a half decades, drawing inspiration from the Vedantic school of thought.`,
    buy: "",
  },
  {
    title: "Research Insights: A Handbook on Grant Writing and Program Management",
    author: "Dr. Rajiv K. Tayal",
    batch: "B.E. Chemical - 1981",
    cover: "/research_insights.jpg",
    description: `Dr. Rajiv K. Tayal an alumnus of IIT Roorkee, signed off as an advisor from the Department of Science & Technology(DST), Government of India.
    With a professional career spanning four decades, he worked as a practicing engineer in the industry as well as a science administrator in DST and its affiliated institutions. Despite his formal training and lifelong career as an R&D professional in engineering.
    Dr. Tayal has been an avid student of metaphysical aspects of life for the last two and a half decades, drawing inspiration from the Vedantic school of thought.`,
    buy: "",
  },
  {
    title: "MELT: My Experiments with Leadership and Teamwork",
    author: "Samul Verma",
    batch: "B.E. Civil - 1992, M.E. Civil - 1994",
    cover: "/experiments.jpg",
    description: `A small-town man from Jaunpur, Uttar Pradesh, Samul has been purely known as a technical person. This is his first time writing a book on such a subject, which compiles his learnings through different situations in his career.
    Samul obtained his engineering degrees (B.E. and M.E.) from the Indian Institute of Technology, Roorkee. He is also a Chartered Engineer registered with the Engineering Council and is a member of the Institution of Civil Engineers, UK.
    Samul Verma is a Civil Engineer by profession and is currently working as General Manager at Sterling & Wilson Solar Ltd., an EPC company in the field of solar power. 
    MELT is an attempt to look at the subject of leadership and teamwork through a different perspective. The idea is to inspire the readers to learn through observations and experiment with the learnings, Learning through experiences and experiments is an amazing process where we see the results first and form the principles in line with the same. Any real-life situation could be an opportunity to learn, and it becomes more fruitful if we start experimenting on those learnings.`,
    buy: "https://www.linkedin.com/in/samul-verma-ceng-mice-86964613/",
  },
  {
    title: "Kalam Kuch Kehti hai",
    author: "B.E. Metallurgy - 1989",
    batch: "Pramod Joshi",
    cover: "/pramod_joshi.jpg",
    description: "Started writing poetries just as a hobby, but later hobby became a stressbuster, and started regularly writing on varied topics. he unveiled his first collection of poetries “Meri Lekhni ki Zubaani” during the Pearl Jubilee of their batch and the unveiling was done by then, Director, IIT Roorkee Mr. Ajeet Chaturvedi. The response and acceptance of this book prompted him to print his second collection of poetries named “Kalam Kuch Kehti hai” which was unveiled in last year’s World Book Fair at Pragati Maidan in New Delhi.",
    buy: "https://www.linkedin.com/in/pramod-joshi-42611a8/",
  },
  {
    title: "Panchhi Ki Udaan",
    author: "Aradhana Jindal",
    batch: "B.Arch. - 1989",
    cover: "/panchi.jpg",
    description: "Dr. Aradhana Jindal, Alumni (B.Arch-1989) launched her first book of poems, Panchi ki Udaan. It consists of 51 hindi and 20 English poems supported by her own handmade sketches. Dr. Jindal has been the Principal of MM School of Architecture for 10 and half years. In 2021, she started working on her table book Ambala: A Tale of Twin Cities for research on Ambala. Following extensive research on the city, she crafted a book with insights about historical challenges, architectural marvels, and significant urban events.",
    buy: "https://www.linkedin.com/in/dr-aradhana-jindal-1a60597/?originalSubdomain=in",
  },
  {
    title: "HICHKI",
    author: "Geetika Goyal",
    batch: "M.Sc. Physics - 1993",
    cover: "/Geetika_Goyal.jpg",
    description: "Geetika Goyal is an awarded author and a successful life transformation coach with a twist of art & theatre. She has 7 published books to her credit. One of her books 'Jaisi Hoon Main Achchhee Hoon', published by National Book Trust, New Delhi, sold almost 1,25,000 copies in the year 2022-23. Her latest book, a collection of her poems is titled 'HICHKI'. Published by Hindi Sahitya Niketan Bijnor, it is a compilation of poems that she wrote in the moments when she missed someone or something that touched her heart deeply. These poems, that took birth out of her own deep emotions, reach the hearts of the readers effortlessly. Simple and relatable, these poems are being appreciated by the audience hugely. Hichki is available on Amazon.",
    buy: "https://www.linkedin.com/in/goyal-geetika/",
  },
  {
    title: "Financial Planning for The Families Having Children with Special Need",
    author: "Jitendra P.S. Solanki",
    batch: "M.B.A - 2000",
    cover: "/Solanki.jpg",
    description: "Jitendra P.S. Solanki is a financial planning expert ( A SEBI Registered Investment Adviser - Reg. No INA100000184). After gaining experience in the corporate world, he started his own financial planning practice in 2010. Since then, advising families with special needs dependents has been his focus. During the course of his practice, he has met numerous families of this nature and gained a deep understanding into their personal, financial and legal requirements. Jitendra is a alumni of IIT Roorkee MBA 1998-2000 batch and has earned the much respected professional designation of Certified financial planner (cfpcm). he is also a chartered trust and estate planner. Jitendra, a frequent writer and speaker at public forums, shares his views and wisdom, especially on planning for families with special needs dependents, through various media groups and TV channels.",
    buy: "https://www.linkedin.com/in/jitendrasolanki/",
  },
  {
    title: "The Great Leveler protect your innovations",
    author: "Surendra Vyas",
    batch: "B.Tech. EE - 2002",
    cover: "/vyas.jpg",
    description: "A game-changing technology for electric vehicles, A patent infringement lawsuit inspired by college rivalry, A young heir yearning to prove her mettle. Would a startup be able to use its patents to disrupt the technology commercialization plans for a large firm? #knowledgefiction – Introducing a new genre of fiction writing aimed at explaining a business or technology topic through a story set up in contemporary times. This edition",
    buy: "https://www.linkedin.com/in/surev/",
  },
  {
    title: "BEYOND MY BLINKERS & FOREST FIRE & OTHER STORIES",
    author: "Subir Adhicary",
    batch: "B.E. Chem - 1973",
    cover: "/subir.jpg",
    description: `The author is a civil engineering graduate from erstwhile University Of Roorkee( now IIT). He has written more than 150 stories -some of them have appeared in prestigious magazines. He is a avid theatre artist -actor and director, a cartoonist and a stage anchor. His writing style is unique and lucid. Humour flows through his writing. His detailing of the scenes is meticulous and it transports the readers to the scene .His first book " BEYOND MY BLINKERS" published in 2018 is still a bestseller. The book has earned excellent reviews with one from the Hon'ble Vice President of India. He has also abridged and illustrated the classic "David Copperfield" for young readers.The author ,now 71, stays in Delhi. He writes in English, Bengali and Hindi with equal ease. About the book: The book traverses through the hostel life of an engineering student in seventies unfolding the uncertain times of extremist violence, peaceful days later and the initiation into the working life. The story meanders through two iconic institutes of Durgapur and Roorkee. It moves then to hills of Himachal and Andhra pradesh . The book brings out the times in a relatable manner with typical characters, places and happenings. The lucid and gripping narration keeps the reader glued till end.`,
    buy: "",
  },
  {
    title: "College Diaries: Story behind the walls",
    author: "Gaurav Gupta",
    batch: "B.Tech. CSE - 2012",
    cover: "/College_diaries.jpg",
    description: `While studying endlessly for entrance exams, most students dream of college life as full of fun, swag and a place where they could give wings to all their desires. But is that what really lies behind the walls of college?
    Amay gets into his dream college, IIT, with a hope of living the best years of his life. There, he makes friends, gets engaged in a social activity group NSS, forms a bond with seniors and finds himself falling in love with his school friend, Shreya. His college life seems to be all rosy when the aspirations to achieve more in his college life starts growing in him. He starts walking that path blindly and that is when his life turns upside down. Be it his love or his aspirations or friendship happiness from every aspect of his life starts slipping away.
    How will he turn the tables? How his college journey will fare out in the end? Would it be a roller coaster ride that he would cherish or would it leave him withered?
    College Diaries is a story of love, friendship and aspirations and all the bittersweet experiences it brings when we first step out from home.`,
    buy: "https://www.linkedin.com/in/gaurav-gupta-78b95354/",
  },
  {
    title: "Survival Redux",
    author: "Pradeep Goorha",
    batch: "B.E. Mech- 1968",
    cover: "/redux.jpg",
    description: `Survival Redux is an unputdownable story that revolves around a female protagonist caught between the realities of an imminent and unavoidable wipeout of human civilization as we now know it, and the daunting challenge before her to preserve and maintain human existence. It's happening in real time, today, but has connections to historical facts that link history with modern day reality, making this a pragmatic possibility.
    A first time author, Pradeep Goorha, has worked on this novel idea through countless hours of research and fact-checking to develop a smart and ingenious way to play with facts and fiction leaving you wondering how to differentiate between the two, if at all possible.`,
    buy: "",
  },
  {
    title: "Mahak",
    author: "Mohinder L. Nayyar",
    batch: "B.E. Mech - 1966",
    cover: "/mahak.png",
    description: "Shri. Mohinder L. Nayyar is ASME Life Fellow and recipient of 2016 Distinguished Alumnus Award of IIT Roorkee. Shri Mohinder Nayyar is an internationally recognized specialist in piping, valves, materials and codes and standards. As a senior principal engineer at Bechtel Power Corp, his work spanned all phases of design, construction, operation, maintenance and in-service inspection at more than 100 major power plants. Working with the Nuclear Regulatory Commission and ASME, he helped develop new codes and standards following the accident at Three Mile Island.",
    buy: "",
  },
  {
    title: "The Purpose of Life",
    author: "Mohinder L. Nayyar",
    batch: "B.E. Mech - 1966",
    cover: "/Purpose.jpg",
    description: "What is the purpose of life? This book provides answers to questions arising in the mind of modern day men and women lost in luxuries, struggling to survive, striving to thrive, going through drills to enjoy the thrills, fearing fears, facing failures, weaving worries, stressed and distressed, and suffering the strain of pain. We notice filthy rich undergoing mental agony, while poorest of the poor live in contentment. Why? Can we all enjoy the bliss of life? Yes, this book enlightens us to understand who we are, how we are, why we are the way we are, what is life; how to live, how to be happy, how can we burn the darkness of ignorance by the light of knowledge, and fulfill the purpose of life? Do we really accomplish the purpose of life by fulfilling our desires or achieving our objectives? Universal knowledge with real life anecdotes will rhyme with the minds of readers.",
    buy: "",
  },
  {
    title: "HEARTBEATS: POETRY RHYMING WITH YOUR HEARTBEATS",
    author: "Mohinder L. Nayyar",
    batch: "B.E. Mech - 1966",
    cover: "/heartbeats.jpg",
    description: "Mohi Nayyar's poems not only rhyme with your Heatbeats, but they resonate with the thought waves of your mind also. The struggles between emotions of heart and dictates of mind have found expression in the form of poems in Heartbeats. If one bears unresolved inner strife, then the spirit cannot reach its intended destination.. When the events that evolve in life reflect the wishes of the heart, the soul will carry these relics of life eternally.",
    buy: "",
  },
  {
    title: "Bheegi Ret (Hindi Edition)",
    author: "Ravi Sharma",
    batch: "B.E. EE - 1984",
    cover: "/Bheegi.jpg",
    description: "हर लहर से पनपती बनती-बिगड़ती परछाइयाँ बहती हुई खुशियाँ या फिर सिमटी हुई तनहाइयाँ कभी लम्हों से झाँकते वो हँसी के हसीं झरोखे कभी खुद से ही छुपाते खुद होंठों से आँसू रोके कभी दिलरुबा का हाथ पकड़ा तो कभी माँ की उँगली थामी कभी दोस्तों से वो झगड़ा तो कभी चुपके से भरी हामी कभी सवाल बने समंदर तो कभी जवाब हुआ आसमान कभी दिल गया भँवर में तो कभी चूर हुआ अभिमान कभी सपने थे व़फा के तो कभी ज़फा से थे काँटे कभी कमज़र्फ हुई धड़कन तो कभी सबकुछ ही अपना बाँटे कभी बिन माँगे मिला सब तो कभी माँग के भी झोली खाली कभी भगवान् ही था सबकुछ तो कभी आस्था को दी गाली कभी सबकुछ था पास खुद के पर दूसरों पर नज़र थी कभी सबकुछ ही था खोया फिर भी नींद बे़खबर थी कभी ख्वाब ही थे दुनिया तो कभी टूटे थे सारे सपने.....",
    buy: "https://www.facebook.com/BheegiRet/",
  },
  {
    title: "Mobile Stories (An Anecdocracy)",
    author: "Sandeep Singh",
    batch: "B.Tech Civil - 2003",
    cover: "/mobile_stories.jpg",
    description: "The book is titled as ‘Mobile Stories (An Anecdocracy)” and it is written in dual language. A blend of Hindi and English. I experimented with my very first book as I feel that today's youth communicate in this language only, especially in the Northern part of India.",
    buy: "",
  },
];

const BooksPage = () => (
  <section className="bg-white min-h-screen py-10">
    <h2 className="text-6xl font-extrabold text-gray-400 text-center mb-10">
      Books By IITR Alumni
    </h2>
    <div className="max-w-6xl mx-auto px-6">
      {books.map((book, index) => (
        <div key={index} className="flex flex-col md:flex-row w-full mb-10">
          {/* Alternate Layout: Even index → text left, odd index → text right */}
          {index % 2 === 0 ? (
            <>
              {/* Left Side: Text */}
              <div className="flex-1 my-9 px-10 py-12 flex flex-col justify-center bg-slate-200">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {book.title}
                </h3>
                <p className="text-[17px] text-black/80 leading-relaxed">
                  {book.description}
                </p>
              </div>
              {/* Right Side: Book Card */}
              <div className="flex flex-col items-center justify-center bg-[#16335b] px-8 py-10 w-full md:w-80">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-auto object-contain mb-6 shadow-lg"
                  style={{ background: "#fff" }}
                />
                <div className="text-center text-white text-[15px] space-y-1 mt-2">
                  <p>
                    <a
                      href={book.buy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {book.title}
                    </a>
                  </p>
                  {/* <p className="font-semibold">
                    {book.title}{" "}
                    <a
                      href={book.buy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline ml-2"
                    >
                      Buy
                    </a>
                  </p> */}
                  <p>{book.author}</p>
                  <p>{book.batch}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Left Side: Book Card */}
              <div className="flex flex-col items-center justify-center bg-[#16335b] px-8 py-10 w-full md:w-80">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-auto object-contain mb-6 shadow-lg"
                  style={{ background: "#fff" }}
                />
                <div className="text-center text-white text-[15px] space-y-1 mt-2">
                  <p>
                    <a
                      href={book.buy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      {book.title}
                    </a>
                  </p>
                  <p>{book.author}</p>
                  <p>{book.batch}</p>
                </div>
              </div>
              {/* Right Side: Text */}
              <div className="flex-1 my-9 px-10 py-12 flex flex-col justify-center bg-slate-200">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {book.title}
                </h3>
                <p className="text-[17px] text-black/80 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default BooksPage;
