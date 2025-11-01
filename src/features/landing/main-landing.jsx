import { ArtikelPage } from "./landing-component/artikel-section";
import { FeatureUnggulanPage } from "./landing-component/feature-unggulan-page";
import { GaleriKarya } from "./landing-component/galeri-karya";


export function MainLanding() {
    return (
        <>
        {/* taruh semua komponen page landing page disini */}




        {/* page feature unggulan VVV */}
        <FeatureUnggulanPage/>
        <ArtikelPage/>
        <GaleriKarya/>
        </>
    )
}