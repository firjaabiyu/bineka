import { useState } from "react"; 
import coin from "../../../assets/coin-bineka.svg";
import { provinsiData } from "../../../data/provinsi_data";
import CeritaPopup from "../../peta/peta-component/cerita-popup";
import danauToba from "../../../assets/cerita-danautoba.png"
import prambanan from "../../../assets/cerita-prambanan.png"
import kuntilanak from "../../../assets/cerita-kuntilanak.png"
import malinKundang from "../../../assets/cerita-malinkundang.png"

export function ArtikelPage() {
  const [selectedStory, setSelectedStory] = useState(null);

  // dummy dari cerita Aceh
  const dummyStory = provinsiData["IDAC"].cerita[0];

  const handleOpenDummyPopup = () => {
    setSelectedStory(dummyStory);
  };

  return (
    <div className="w-full flex flex-col gap-10 items-center py-10 font-[Plus Jakarta Sans]">
      {/* Title */}
      <div className="flex flex-col gap-2 items-center text-center">
        <p className="text-black text-2xl md:text-3xl font-medium">
          Pilih Bacaanmu dan dapatkan Point nya!
        </p>
        <div className="w-16 h-[3px] bg-[#CF392C] rounded-full mt-1"></div>
      </div>

      {/* Cards Section */}
      <div className="w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Rehabilitasi Kuntilanak yang Sehat-Sehat", poin: 5, gambar: kuntilanak  },
          { title: "Legenda Danau Toba", poin: 6, gambar: danauToba },
          { title: "Asal Usul Candi Prambanan", poin: 5, gambar: prambanan },
          { title: "Kisah Malin Kundang", poin: 5, gambar: malinKundang },
        ].map((card, index) => (
          <div
            key={index}
            className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300"
          >
          <div className="w-full rounded-lg bg-white h-36 md:h-40 overflow-hidden">
            <img src={card.gambar} alt={card.title} className="w-full h-full object-cover scale-110" />
          </div>
            <p className="text-white font-bold text-base md:text-lg leading-tight">
              {card.title}
            </p>
            <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
              <img src={coin} alt="coin" className="w-4 h-4" />
              <p className="text-white text-sm font-bold">+{card.poin} Poin</p>
            </div>
            <button
              onClick={handleOpenDummyPopup}
              className="w-full mt-auto py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center cursor-pointer"
            >
              Baca Cerita
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedStory && (
        <CeritaPopup
          item={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
}
