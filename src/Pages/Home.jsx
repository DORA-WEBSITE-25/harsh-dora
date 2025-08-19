import ImageShowcase from "../Components/ImageShowcase";
import AboutUs from "../Components/AboutUs";
import EventsSection from "../Components/EventsSection";
import GivingBackSection from "../Components/GivingBackSection";
import TopDonors from "../Components/TopDonors";
import StatsSection from "../Components/StatsSection";
import Testimonials from "../Components/Testimonials";
import OtherLinks from "../Components/OtherLinks";

function Home() {
    return(
            <div>
                <ImageShowcase />
                <AboutUs/>
                <EventsSection/>
                <GivingBackSection/>
                <TopDonors/>
                <StatsSection/>
                <Testimonials/>
                <OtherLinks/>
            </div>
    )
}

export default Home;