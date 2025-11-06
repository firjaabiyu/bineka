import { useState } from "react";
import { provinsiData } from "../../../data/provinsi_data";
import FlipCard from "./flipcard";
import CeritaPopup from "./cerita-popup";
import CeritaCard from "./cerita-card";

export default function ProvinsiDetail({ selectedProv }) {
  const prov = provinsiData[selectedProv];
  const [selectedStory, setSelectedStory] = useState(null);
  if (!prov) return null;

  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Nama Provinsi */}
      <h2 className="text-2xl font-bold text-[#000000] mb-6">Provinsi <span className="border-b-2 border-[#5DAA00]">{prov.nama}</span></h2>

      {/* Cerita Rakyat */}
      <h3 className="text-xl font-semibold w-11/12 md:w-10/12 text-start text-[#000000] mb-3">Cerita Rakyat <span className="text-[#9A1C1E]">{prov.nama}</span></h3>
      
      <div className="w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {prov.cerita.map((item) => (
          <CeritaCard key={item.id} item={item} onOpen={setSelectedStory} />
        ))}
      </div>

      {/* Popup */}
      {selectedStory && (
        <CeritaPopup item={selectedStory} onClose={() => setSelectedStory(null)} />
      )}

      {/* Budaya */}
        <h3 className="text-xl font-semibold w-11/12 md:w-10/12 text-start text-[#000000] mb-3">
        Jejak Budaya <span className="text-[#9A1C1E]">{prov.nama}</span>
        </h3>

        <div className="w-11/12 md:w-10/12 flex flex-wrap justify-start gap-8 mb-20">
            {prov.budaya.map((item, index) => (
            <FlipCard
                key={index}
                title={item.nama}
                image={item.gambar}
                desc={item.summary}
            />
            ))}
        </div>
    </div>
  );
}
