import React from "react";

const AboutUs = () => {
  return (
    <section className="font-[Plus Jakarta Sans] w-full flex flex-col md:flex-row items-center justify-between md:pl-0 md:pr-16 py-10 gap-10 overflow-hidden">
      {/* Gambar di kiri */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="src/assets/img-aboutus.png" 
          alt="Tari Tradisional"
          className="w-[130%] max-w-none md:w-[110%] h-auto md:ml-[-5%]" 
        />
      </div>

      <div className="w-full md:w-1/2 text-[#2C2C2C] px-6 md:px-0">
        <div className="inline-block border border-[#E94E35] rounded-full px-4 py-1 text-[#E94E35] font-medium mb-4 font-jakarta">
          • Mengenal Warisan Budaya Indonesia di Era Digital
        </div>

        <p className="leading-relaxed text-[16px] mb-6">
          Indonesia memiliki beragam warisan budaya. Di era digital, pelestarian budaya dilakukan melalui platform digital sebagai cara kreatif mengenalkan dan melestarikan budaya secara menarik bagi generasi muda. Melalui teknologi, masyarakat kini dapat:
        </p>

        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
          <div className="flex items-start gap-3">
            <img
              src="src/assets/icons/check-aboutus.svg"
              alt="Check Icon"
              className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <p>Menjelajahi peta interaktif untuk mengenal cerita rakyat dan budaya setiap daerah.</p>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="src/assets/icons/check-aboutus.svg"
              alt="Check Icon"
              className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <p>Bermain game interaktif yang memperkenalkan kuliner dan nilai budaya Indonesia.</p>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="src/assets/icons/check-aboutus.svg"
              alt="Check Icon"
              className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <p>Berinteraksi dengan chatbot berbahasa daerah guna melestarikan bahasa lokal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
