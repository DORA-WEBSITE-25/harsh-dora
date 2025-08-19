import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

// Import from Pages folder
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import DoraStaff from "./Pages/DoraStaff"
import GivingBack from './Pages/GivingBack';
import DoraMessage from './Pages/DoraMessage';
import AboutDora from './Pages/AboutDora';
import SchemesPage from './Pages/SchemesPage';
import Gallery from './Pages/Gallery';
// import Login from './Pages/Login';
// import Donate from './Pages/Donate';
// import DoraOffice from './Pages/DoraOffice';
// import JubileeReunions from './Pages/JubileeReunions';
// import GlobalNetwork from './Pages/GlobalNetwork';
// import Gallery from './Pages/Gallery';
// import IARC from './Pages/IARC';
// import AMP from './Pages/AMP';
// import Obituaries from './Pages/Obituaries';
//
// // Giving Back sub-pages
// import Departments from './Pages/GivingBack/Departments';
// import Programs from './Pages/GivingBack/Programs';
// import Admissions from './Pages/GivingBack/Admissions';
//
// // News & Outreach sub-pages
// import ResearchCenters from './Pages/NewsOutreach/ResearchCenters';
// import Publications from './Pages/NewsOutreach/Publications';
// import Innovation from './Pages/NewsOutreach/Innovation';
//
// // Schemes sub-pages
// import Conferences from './Pages/Schemes/Conferences';
// import Workshops from './Pages/Schemes/Workshops';
// import Seminars from './Pages/Schemes/Seminars';
//
// // Awards sub-pages
// import Statistics from './Pages/Awards/Statistics';
// import Companies from './Pages/Awards/Companies';
// import StudentStories from './Pages/Awards/StudentStories';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/dora-staff" element={<DoraStaff />} />
                <Route path="/giving-back" element={<GivingBack />} />
                <Route path="/message-dora" element={<DoraMessage />} />
                <Route path0="/about-dora" element={<AboutDora />} />
                <Route path="/schemes-page" element={<SchemesPage />} />
                <Route path="/gallery" element={<Gallery />} />
                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="/donate" element={<Donate />} />*/}
                {/*<Route path="/dora-office" element={<DoraOffice />} />*/}
                {/*<Route path="/jubilee-reunions" element={<JubileeReunions />} />*/}
                {/*<Route path="/global-network" element={<GlobalNetwork />} />*/}
                {/*<Route path="/gallery" element={<Gallery />} />*/}
                {/*<Route path="/iarc" element={<IARC />} />*/}
                {/*<Route path="/amp" element={<AMP />} />*/}
                {/*<Route path="/obituaries" element={<Obituaries />} />*/}

                {/*/!* Giving Back Routes *!/*/}
                {/*<Route path="/giving-back/departments" element={<Departments />} />*/}
                {/*<Route path="/giving-back/programs" element={<Programs />} />*/}
                {/*<Route path="/giving-back/admissions" element={<Admissions />} />*/}

                {/*/!* News & Outreach Routes *!/*/}
                {/*<Route path="/news-outreach/research-centers" element={<ResearchCenters />} />*/}
                {/*<Route path="/news-outreach/publications" element={<Publications />} />*/}
                {/*<Route path="/news-outreach/innovation" element={<Innovation />} />*/}

                {/*/!* Schemes Routes *!/*/}
                {/*<Route path="/schemes/conferences" element={<Conferences />} />*/}
                {/*<Route path="/schemes/workshops" element={<Workshops />} />*/}
                {/*<Route path="/schemes/seminars" element={<Seminars />} />*/}

                {/*/!* Awards Routes *!/*/}
                {/*<Route path="/awards/statistics" element={<Statistics />} />*/}
                {/*<Route path="/awards/companies" element={<Companies />} />*/}
                {/*<Route path="/awards/student-stories" element={<StudentStories />} />*/}

                {/* 404 Route */}
                <Route path="*" element={<Home/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
