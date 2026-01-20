import React from 'react';
import { Routes, Route, useLocation  } from 'react-router-dom';
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
import EsteemedDonors from './Pages/EsteemedDonors';
import BooksPage from './Pages/BooksPage';
import Donations from './Pages/Donations';
import FCRA from './Pages/Fcra';
import CSR_Contribution from './Pages/CSR_Contribution';
import TaxExemption from './Pages/TaxExemption';
import Avenues_alumni from './Pages/Avenues_alumni';
import DirectorMessage from './Pages/DirectorMessage';
import SocialMedia from './Pages/SocialMedia';
import Jubilee from './Pages/Jubilee';
import ForFaculty from './Pages/ForFaculty';
import ForVisitor from './Pages/ForVisitor';
import ForStudent from './Pages/ForStudent';
import Testimonial from './Pages/Testimonial';
import OnlineApplicationPage from './Pages/OnlineApplicationPage ';
import ForStudentGIC from './Pages/ForStudentGIC';
import ForStudentIR from './Pages/ForStudentIR';
import ForStudentEndowedLecture from './Pages/ForStudentEndowedLecture';
import Obituaries from './Pages/Obituaries';
import GalleryPage from './Pages/GalleryPage';
import AwardPage from './Pages/AwardPage';
import DistinguishedAlumnusAwards from './Pages/DistinguishedAlumnusAwards';
import ResearchAward from './Pages/ResearchAward';
import OutstandingAwards from './Pages/OutstandingAwards';
import RamKumarPrize from './Pages/RamKumarPrize';
import PreviousDistinguishedAlumnus from './Pages/PreviousDistinguishedAlumnus';
import IITRDF from './Pages/IITRDF';
import IITRDFCSR from './Pages/IITRDFCSR';
import GlobalAlumniPage from './Pages/GlobalAlumniPage';
import Events from './Components/Events';
import AwardeesTable from './Pages/AwardeesTable';
import AlumSchemes from './Pages/AlumSchemes';
import DonorPage from './Pages/DonorsPage';
import DonorSchemePage from './Pages/DonorSchemePage';
import DonationAccountPage from './Components/DonationAccountPage';
import ScrollToTop from "./Components/ScrollToTop";
import BatchDonors from './Pages/BatchDonors';
import IndividualDonors from './Pages/IndividualDonors';
import Global_network_alumni from './Pages/Global_network_alumni';

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
    const location = useLocation();
    const noLayoutRoutes = ["/forms/visiting-abroad-application", "/forms/gic-form", "/forms/IR-guidelines", "/forms/international-intern-research-form", "/forms/dyaa-2023", "/forms/da-2023", "/forms/osa-2023", "/forms/dyaa-2022", "/forms/da-2022", "/forms/osa-2022", "/forms/dyaa-2021", "/forms/da-2021", "/forms/osa-2021", "/forms/dyaa-2020", "/forms/da-2020", "/forms/dyaa-2019", "/forms/da-2019", "/forms/awardee/2005-2023", "/forms/research-2022", "/forms/research-2021", "/forms/research-2017-2018", "/forms/global-network", "/forms/alumni-signup-form", "/forms/alumni-login", "/forms/visitor-guidline", "/forms/visitor-form", "/forms/faculty-visiting-abroad-guidline", "/forms/faculty-visiting-abroad-form", "/forms/gic-testimonial", "/forms/ir-intern-testimonial", "/forms/sem-exchange-testimonial"];
    const hideLayout = noLayoutRoutes.includes(location.pathname);

    return (
        <div className="App">
            {!hideLayout && <Header />}
            {/* <Header /> */}
            <div className="font-poltawski text-lg">
            <ScrollToTop />
            <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/dora-staff" element={<DoraStaff />} />
                <Route path="/giving-back" element={<GivingBack />} />
                <Route path="/message-dora" element={<DoraMessage />} />
                <Route path="/about-dora" element={<AboutDora />} />
                <Route path="/schemes-page" element={<SchemesPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/esteemed-donor" element={<EsteemedDonors />} />
                <Route path="/book-alumni" element={<BooksPage />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/fcra" element={<FCRA />} />
                <Route path="/csr-contri" element={<CSR_Contribution />} />
                <Route path="/tax-exemp" element={<TaxExemption />} />
                <Route path="/avenues" element={<Avenues_alumni />} />
                <Route path="/dir-message" element={<DirectorMessage />} />
                <Route path="/social-media" element={<SocialMedia />} />
                <Route path="/jubilee" element={<Jubilee />} />
                <Route path="/faculty" element={<ForFaculty />} />
                <Route path="/visitor" element={<ForVisitor />} />
                <Route path="/student/visiting_abroad" element={<ForStudent />} />
                <Route path="/student/gic" element={<ForStudentGIC />} />
                <Route path="/student/ir" element={<ForStudentIR />} />
                <Route path="/student/lecture" element={<ForStudentEndowedLecture />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/obituaries" element={<Obituaries />} />
                <Route path="/gallery/:year" element={<GalleryPage />} />
                <Route path="/award-page" element={<AwardPage/>} />
                <Route path="/gallery/:year" element={<GalleryPage />} />
                <Route path="/gallery/:year" element={<GalleryPage />} />
                <Route path="/gallery/:year" element={<GalleryPage />} />
                <Route path="/distinguished-alumnus-awards" element={<DistinguishedAlumnusAwards />} />
                <Route path="/research-award" element={<ResearchAward />} />
                <Route path="/outstanding-awards" element={<OutstandingAwards />} />
                <Route path="/ramkumar-prize" element={<RamKumarPrize />} />
                <Route path="/previous-awardee" element={<PreviousDistinguishedAlumnus />} />
                <Route path="/iitrdf" element={<IITRDF />} />
                <Route path="/iitrdf_csr" element={<IITRDFCSR />} />
                <Route path="/global_alumni_page" element={<GlobalAlumniPage />} />
                <Route path="/event_list" element={<Events />} />
                <Route path="/awardees-table" element={<AwardeesTable />} />
                <Route path="/alum-schemes" element={<AlumSchemes />} />
                <Route path="/DonorPage" element={<DonorPage />} />
                <Route path="/donor-scheme-page" element={<DonorSchemePage />} />
                <Route path="/donation-account-page" element={<DonationAccountPage />} />
                <Route path="/batch-donors" element={<BatchDonors />} />
                <Route path="/individual-donors" element={<IndividualDonors />} />
                <Route path="/global_network_alumni" element={<Global_network_alumni />} />
                {/*<Route path="/login" element={<Login />} />*/}
                {/*<Route path="/donate" element={<Donate />} />*/}
                {/*<Route path="/dora-office" element={<DoraOffice />} />*/}
                {/*<Route path="/jubilee-reunions" element={<JubileeReunions />} />*/}
                {/*<Route path="/global-network" element={<GlobalNetwork />} />*/}
                {/*<Route path="/gallery" element={<Gallery />} />*/}
                {/*<Route path="/iarc" element={<IARC />} />*/}
                {/*<Route path="/amp" element={<AMP />} />*/}
                {/*<Route path="/obituaries" element={<Obituaries />} />*/}
                
                <Route path="/forms/:pageId" element={<OnlineApplicationPage />} />

                {/* <Route path="/online-application" element={<OnlineApplicationPage />} /> */}

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
            </div>
            {/* <Footer /> */}
            {!hideLayout && <Footer />}
        </div>
    );
}

export default App;
