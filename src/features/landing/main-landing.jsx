import AboutUs from "./landing-component/about-us";
import { ArtikelPage } from "./landing-component/artikel-section";
import CommunitySection from "./landing-component/community";
import FeatureSection from "./landing-component/feature";
import { FeatureUnggulanPage } from "./landing-component/feature-unggulan-page";
import Footer from "./landing-component/footer";
import { GaleriKarya } from "./landing-component/galeri-karya";
import HeaderSection from "./landing-component/hero-page";
import MonumenMarquee from "./landing-component/marquee-ornamen";
import Navbar from "./landing-component/navbar";



export function MainLanding() {
    return (
        <>
        {/* taruh semua komponen page landing page disini */}
        <Navbar/>
        <HeaderSection/>
        <FeatureSection/>
        <MonumenMarquee/>
        <AboutUs/>

        {/* page feature unggulan VVV */}
        <FeatureUnggulanPage/>
        <CommunitySection/>
        <ArtikelPage/>
        
        <GaleriKarya/>
        <Footer/>
        </>
    )
}