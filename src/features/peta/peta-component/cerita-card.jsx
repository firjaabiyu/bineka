import coin from "../../../assets/coin-bineka.svg";

export default function CeritaCard({ item, onOpen }) {
  return (
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
      <button
        onClick={() => onOpen(item)}
        className="w-full mt-6 py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center cursor-pointer"
      >
        Baca Cerita
      </button>
    </div>
  );
}
