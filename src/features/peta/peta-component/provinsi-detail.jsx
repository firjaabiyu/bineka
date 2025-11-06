import { provinsiData } from "../../../data/provinsi_data";
import coin from "../../../assets/coin-bineka.svg";
import FlipCard from "./flipcard";

export default function ProvinsiDetail({ selectedProv }) {
  const prov = provinsiData[selectedProv];
  if (!prov) return null;

  return (
    <div className="w-full flex flex-col items-center mt-12">
      {/* Nama Provinsi */}
      <h2 className="text-2xl font-bold text-[#000000] mb-6">Provinsi <span className="border-b-2 border-[#5DAA00]">{prov.nama}</span></h2>

      {/* Cerita Rakyat */}
      <h3 className="text-xl font-semibold w-11/12 md:w-10/12 text-start text-[#000000] mb-3">Cerita Rakyat <span className="text-[#9A1C1E]">{prov.nama}</span></h3>
      <div className="w-11/12 md:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {prov.cerita.map((item) => (
          <div
            key={item.id}
            className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-full rounded-lg bg-white h-36 md:h-40 overflow-hidden">
              <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover" />
            </div>
            <p className="text-white font-bold text-base md:text-lg leading-tight">{item.judul}</p>
            <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
              <img src={coin} alt="coin" className="w-4 h-4" />
              <p className="text-white text-sm font-bold">+{item.poin} Poin</p>
            </div>
            <div className="w-full mt-6 py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
                Baca Cerita
            </div>
          </div>
        ))}
      </div>

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
