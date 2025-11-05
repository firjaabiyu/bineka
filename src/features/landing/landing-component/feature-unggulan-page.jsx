// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import komunitas from "../../../assets/komunitas-bineka.webp";

export function FeatureUnggulanPage() {

    const tabs = [
        "Komunitas Penjualan",
        "Komunitas Marketing",
        "Komunitas Support",
        "Komunitas Operasional",
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="w-full flex flex-col gap-10 items-center pb-15">
            <div className="flex flex-col gap-2 items-center">
                <p className="text-black text-2xl font-medium">Fitur Unggulan</p>
                <div className="w-16 h-[3px] bg-[#CF392C] rounded-full mt-1"></div>
                <p className="text-black text-sm text-center">Berinteraksi dengan chatbot berbahasa daerah guna melestarikan<br /> bahasa lokal.</p>
            </div>

            <div className="relative w-3/5 flex items-center rounded-full p-1.5 bg-[#ECEAEA] overflow-hidden">
              
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute top-1 bottom-1 rounded-full bg-[#CF392C]"
                    style={{
                        left: `${(100 / tabs.length) * activeIndex}%`,
                        width: `${100 / tabs.length}%`,
                    }}
                />

                {tabs.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className="relative z-10 w-1/4 py-3 rounded-full flex items-center justify-center transition-colors"
                    >
                        <p
                            className={`font-semibold transition-colors ${activeIndex === index ? "text-white" : "text-black"
                                }`}
                        >
                            {label}
                        </p>
                    </button>
                ))}
            </div>

            <div className="flex w-3/4 justify-between">
            <div className="flex w-full flex-col justify-between">
                <div className="flex flex-col gap-2">
                <p className="text-black text-xl font-medium">Komunitas Penjualan Karya Anak Bangsa</p>
                <div className="w-20 h-[3px] bg-[#CF392C] rounded-full mt-1"></div>
                <p className="text-black leading-[21px] text-sm mt-4 w-4/5">Indonesia memiliki beragam warisan budaya, dari bahasa daerah hingga seni dan adat. Di era digital, pelestarian budaya dilakukan melalui platform digital sebagai cara kreatif mengenalkan dan melestarikan budaya secara menarik bagi generasi muda. Melalui teknologi, masyarakat kini dapat:</p>
                </div>
                <div className="flex justify-center items-center text-sm font-light py-3 text-white bg-[#CF392C] rounded-lg hover:bg-[#d83021]">Bergabung Ke Komunitas</div>
            </div>
            <div className=" w-full flex justify-end items-center">
                {/* <div className="w-5/6 h-80 bg-[#CF392C] rounded-xl" style={{backgroundImage: `url(${komunitasImg})`, backgroundSize: "cover"}}></div> */}
                <img src={komunitas} className=" w-5/6 h-80  rounded-xl bg-cover bg-no-repeat" alt="" />
            </div>

            </div>
        </div>
    )
}