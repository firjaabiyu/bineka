import Navbar from "../landing/landing-component/navbar";
import MapContainer from "./peta-component/map-container";
import ProvinsiDetail from "./peta-component/provinsi-detail";
import { useState } from "react";

export function PetaPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <div className="p-6 flex-col flex items-center mt-32 relative w-full min-h-screen">
        <h1 className="text-2xl font-semibold mb-6">Jelajahi Peta Indonesia</h1>

        <div className="max-w-2xl mb-10 py-4 px-6 rounded-lg outline-1 outline-[#CF392C] bg-[#FDF6F5] text-center">
          <p className="mb-3">
            Setiap pulau menyimpan kisah, tradisi, dan kearifan lokal yang membentuk identitas
            Indonesia. Jelajahi peta interaktif ini untuk menemukan ciri khas dari tiap daerah.
          </p>
          <span className="text-[#CF392C] font-bold">
            Arahkan kursor dan klik pulau di peta untuk mulai menjelajah!
          </span>
        </div>

        <MapContainer onSelectProvince={(id) => setSelected(id)} />

        {/* render detail provinsi */}
        {selected ? (
          <ProvinsiDetail selectedProv={selected} />
        ) : (
          <p className="mt-4 text-gray-700">Klik provinsi untuk melihat detailnya</p>
        )}
      </div>
    </>
  );
}
