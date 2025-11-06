import coin from "../../../assets/coin-bineka.svg";

export function ArtikelPage() {
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
        {/* Card 1 */}
        <div className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
          <div className="w-full rounded-lg bg-white h-36 md:h-40"></div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">
            Rehabilitasi Kuntilanak yang Sehat-Sehar
          </p>
          <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
            <img src={coin} alt="coin" className="w-4 h-4" />
            <p className="text-white text-sm font-bold">+200 Poin</p>
          </div>
          <div className="w-full  mt-8 py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
            Baca Cerita
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
          <div className="w-full rounded-lg bg-white h-36 md:h-40"></div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">
            Legenda Danau Toba
          </p>
          <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
            <img src={coin} alt="coin" className="w-4 h-4" />
            <p className="text-white text-sm font-bold">+150 Poin</p>
          </div>
          <div className="w-full  mt-auto py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
            Baca Cerita
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
          <div className="w-full rounded-lg bg-white h-36 md:h-40"></div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">
            Asal Usul Candi Prambanan
          </p>
          <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
              <img src={coin} alt="coin" className="w-4 h-4" />
            <p className="text-white text-sm font-bold">+180 Poin</p>
          </div>
          <div className="w-full  mt-auto py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
            Baca Cerita
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-3.5 rounded-2xl bg-[#CF392C] flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300">
          <div className="w-full rounded-lg bg-white h-36 md:h-40"></div>
          <p className="text-white font-bold text-base md:text-lg leading-tight">
            Kisah Malin Kundang
          </p>
          <div className="flex gap-2 items-center px-3 py-1.5 w-fit rounded-md bg-[#AA2216]">
            <img src={coin} alt="coin" className="w-4 h-4" />
            <p className="text-white text-sm font-bold">+220 Poin</p>
          </div>
          <div className="w-full  mt-auto py-2.5 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
            Baca Cerita
          </div>
        </div>
      </div>
    </div>
  );
}
