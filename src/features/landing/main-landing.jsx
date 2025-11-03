import AboutUs from "./landing-component/about-us";
import { ArtikelPage } from "./landing-component/artikel-section";
import FeatureSection from "./landing-component/feature";
import { FeatureUnggulanPage } from "./landing-component/feature-unggulan-page";
import Footer from "./landing-component/footer";
import { GaleriKarya } from "./landing-component/galeri-karya";
import HeaderSection from "./landing-component/hero-page";


export function MainLanding() {
    return (
        <>
        {/* taruh semua komponen page landing page disini */}

        <HeaderSection/>
        <FeatureSection/>
        <AboutUs/>
        


        {/* page feature unggulan VVV */}
        <FeatureUnggulanPage/>
        <ArtikelPage/>
        <GaleriKarya/>
        <Footer/>
        </>
    )
}