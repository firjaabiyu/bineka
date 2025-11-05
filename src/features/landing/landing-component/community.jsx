import React from "react";

const CommunitySection = () => {
  return (
    <section className="flex justify-center items-center px-5 py-10">
      <div className="w-full max-w-7xl bg-[#FDF2E3] rounded-3xl px-10 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-[#000] font-jakarta">
            Jual karya terbaikmu di Komunitas{" "}
            <span className="text-[#D8674D]">Bineka.</span> <br />
            Tingkatkan literasi dan raih banyak poin! <br />
          </h1>

          <p className="text-[#333] text-base leading-relaxed font-jakarta">
            blablablablablablablablablablablablablablablablabla <br />
            blablablablablablablablablablabla
          </p>

          <button className="bg-[#C14C34] text-white font-medium font-jakarta px-8 py-3 rounded-full hover:bg-[#a63e2b] transition">
            Join Komunitas
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="src/assets/img-community.png"
            alt="Komunitas"
            className="w-[90%] max-w-md rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
