import coin from "../../../assets/coin-bineka.svg";
export function ArtikelPage() {

    return (
        <div className="w-full flex flex-col gap-10 items-center py-10">
            <div className="flex flex-col gap-2 items-center">
                <p className="text-black text-2xl font-medium">Pilih Bacaanmu dan dapatkan Point nya!</p>
                <div className="w-16 h-[3px] bg-[#CF392C] rounded-full mt-1"></div>
            </div>

            <div className="w-3/4 gap-3 grid grid-cols-4">
            <div className="p-4 w-full rounded-xl bg-[#CF392C] flex flex-col gap-2 ">
                <div className="w-full rounded-lg bg-white h-40"></div>
                <p className="text-white font-bold">Rehabilitasi Kuntilanak yang Sehat-Sehar</p>
                <div className="flex gap-1 items-center px-2 py-1 w-fit rounded-md bg-[#AA2216]">
                    <img src={coin} alt="" />
                    <p className="text-white text-sm font-bold">+200 Poin</p>
                </div>

                <div className="w-full mt-8 py-2 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
                    Baca Cerita
                </div>
            </div>
            <div className="p-4 w-full rounded-xl bg-[#CF392C] flex flex-col gap-2 ">
                <div className="w-full rounded-lg bg-white h-40"></div>
                <p className="text-white font-bold">Rehabilitasi Kuntilanak yang Sehat-Sehar</p>
                <div className="flex gap-1 items-center px-2 py-1 w-fit rounded-md bg-[#AA2216]">
                    <img src={coin} alt="" />
                    <p className="text-white text-sm font-bold">+200 Poin</p>
                </div>

                <div className="w-full mt-8 py-2 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
                    Baca Cerita
                </div>
            </div>
            <div className="p-4 w-full rounded-xl bg-[#CF392C] flex flex-col gap-2 ">
                <div className="w-full rounded-lg bg-white h-40"></div>
                <p className="text-white font-bold">Rehabilitasi Kuntilanak yang Sehat-Sehar</p>
                <div className="flex gap-1 items-center px-2 py-1 w-fit rounded-md bg-[#AA2216]">
                    <img src={coin} alt="" />
                    <p className="text-white text-sm font-bold">+200 Poin</p>
                </div>

                <div className="w-full mt-8 py-2 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
                    Baca Cerita
                </div>
            </div>
            <div className="p-4 w-full rounded-xl bg-[#CF392C] flex flex-col gap-2 ">
                <div className="w-full rounded-lg bg-white h-40"></div>
                <p className="text-white font-bold">Rehabilitasi Kuntilanak yang Sehat-Sehar</p>
                <div className="flex gap-1 items-center px-2 py-1 w-fit rounded-md bg-[#AA2216]">
                    <img src={coin} alt="" />
                    <p className="text-white text-sm font-bold">+200 Poin</p>
                </div>

                <div className="w-full mt-8 py-2 rounded-lg text-black font-bold flex bg-[#B0E639] items-center justify-center">
                    Baca Cerita
                </div>
            </div>
            
            </div>
        </div>
    )

}