import indonesiaIsland from "../../assets/indonesia-island.svg"
import traditionalShirt from "../../assets/traditiona-shirt.svg"
import traditionalBg from "../../assets/baju-adat.png"
import senjataIcon from "../../assets/senjata.svg"
import senjataBg from "../../assets/senjata-traditional.png"
import makanananIcon from "../../assets/makanan.svg"
import languageIcon from "../../assets/language.svg"
import makananBg from "../../assets/makanan-traditional.png"
import { useState } from "react"

export function ChatbotMainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("indonesia");
    return (
        <div className="flex h-screen w-screen bg-linear-to-t from-[rgb(247,228,225)]  to-[#FFFFFF] items-center justify-center">
            <img src={indonesiaIsland} alt="" className="w-4/5 absolute h-4/5 " />
            <div className="flex w-1/2 items-center justify-center flex-col z-10 gap-8">
                <div className="flex gap-2 flex-col justify-center items-center">
                    <div className="w-24 h-24 rounded-full bg-red-200"></div>
                    <div className="flex flex-col items-center">
                        <p className="text-[#1B1B1B] font-semibold text-xl">Selamat Datang Anak <span className="text-[#9A1C1E] italic font-bold">Bangsa!</span></p>
                        <p className="text-[#1B1B1B] font-semibold text-3xl">Mulai Cari Tahu <span className="text-[#9A1C1E] italic font-bold">Budaya</span> Kita Yuk!</p>
                    </div>

                </div>
                <div className="flex w-full flex-col gap-3 items-center">
                    <div className="w-full flex text-xs items-center gap-1 rounded-full relative bg-white focus:outline-none border-[#9A1C1E] border py-3 px-4">
                        <textarea className="w-full focus:outline-none py-1 px-2"></textarea>
                        {isOpen && (
                            <div className="flex p-2 bg-white rounded-md flex-col gap-1 absolute -right-24 -top-16">
                                <p onClick={() => setLanguage("sunda")} className={`${language === "sunda" && "underline text-[#9A1C1E]"} text-xs font-medium text-[#1b1b1b] hover:italic hover:cursor-pointer hover:underline hover:text-[#9A1C1E]`}>Bahasa Sunda</p>
                                <p onClick={() => setLanguage("indonesia")} className={`text-xs ${language === "indonesia" && "underline text-[#9A1C1E]"} font-medium text-[#1b1b1b] hover:italic hover:cursor-pointer hover:underline hover:text-[#9A1C1E]`}>Bahasa Indonesia</p>
                                <p onClick={() => setLanguage("jawa")} className={`text-xs ${language === "jawa" && "underline text-[#9A1C1E]"} font-medium text-[#1b1b1b] hover:italic hover:cursor-pointer hover:underline hover:text-[#9A1C1E]`}>Bahasa Jawa</p>
                            </div>
                        )}

                        <div onClick={() => setIsOpen(!isOpen)} className="p-2 w-fit h-fit rounded-full bg-red-100"><img src={languageIcon} alt="" className="w-4 h-4" /></div>
                    </div>
                    <div className="flex w-full justify-between gap-8">
                        <div className="flex w-full rounded-md border py-3 px-4.5 border-[#9A1C1E] gap-2" style={{ backgroundImage: `url(${traditionalBg})` }}>
                            <img src={traditionalShirt} alt="" className="size-6" />
                            <div className="flex flex-col font-medium text-[#1b1b1b]">
                                <p className="text-sm">Baju Adat</p>
                                <p className="text-xs">Cari Tahu Baju Adat Daerah Di Wilayah Kamu!</p>
                            </div>
                        </div>
                        <div className="flex w-full rounded-md border py-3 px-4.5 border-[#9A1C1E] gap-2" style={{ backgroundImage: `url(${senjataBg})` }}>
                            <img src={senjataIcon} alt="" className="size-6" />
                            <div className="flex flex-col font-medium text-[#1b1b1b]">
                                <p className="text-sm">Senjata Traditional</p>
                                <p className="text-xs">Cari Tahu Senjata Traditional Daerah Di Wilayah Kamu!</p>
                            </div>
                        </div>
                        <div className="flex w-full rounded-md border py-3 px-4.5 border-[#9A1C1E] gap-2" style={{ backgroundImage: `url(${makananBg})` }}>
                            <img src={makanananIcon} alt="" className="size-6" />
                            <div className="flex flex-col font-medium text-[#1b1b1b]">
                                <p className="text-sm">Makanan Traditional</p>
                                <p className="text-xs">Cari Tahu Makanan Traditional Daerah Di Wilayah Kamu!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}