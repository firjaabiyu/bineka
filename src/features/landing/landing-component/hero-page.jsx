import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeaderSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-['Plus_Jakarta_Sans'] bg-gradient-to-b from-black via-[#111111] to-[#1a1a1a] text-white">

      {/* Background map */}
      <img
        src="src/assets/map-hero.svg"
        alt="Background Map"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Left figure */}
      <div className="absolute left-0 bottom-0 w-[38%] max-w-[480px] hidden md:block z-20">
        <img
          src="src/assets/header-left.png"
          alt="Cultural Person"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right figure */}
      <div className="absolute right-0 bottom-0 w-[38%] max-w-[480px] hidden md:block z-20">
        <img
          src="src/assets/header-right.png"
          alt="Smiling Child Reading"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-jakarta bg-white/10 border border-white/20 px-5 py-1.5 rounded-full mb-5"
        >
          Be The Change, Action Today
        </motion.p>

        {/* Header title (3 lines) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold leading-snug"
        >
          <div>
            <span className="text-[#b5ff48] font-jakarta"># </span>
            <span className="font-jakarta">Dari </span>
            <span className="text-[#A4D214] font-jakarta">Sabang</span>
          </div>
          <div className="font-jakarta">
            Sampai{" "}
            <span className="text-[#FBC02D] font-jakarta">Merauke</span>
          </div>
          <div className="font-jakarta">
            Kita <span className="text-[#b5ff48] font-jakarta">Lestarikan</span>
          </div>
        </motion.div>

        <p className="text-gray-300 text-sm md:text-base mt-5 font-jakarta">
          Bersama kita wujudkan harapan, untuk generasi yang lebih cemerlang
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Ganti tombol biasa jadi Link */}
          <Link
            to="/komunitas"
            className="flex items-center gap-2 px-6 py-3 bg-[#C6FF4D] font-jakarta text-black font-semibold rounded-full hover:bg-[#b5ff48] transition"
          >
            <img
              src="src/assets/icons/community.svg"
              alt="Join Icon"
              className="w-5 h-5"
            />
            Join Komunitas
          </Link>

          <button className="flex items-center font-jakarta gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition">
            <img
              src="src/assets/icons/location.svg"
              alt="Map Icon"
              className="w-5 h-5"
            />
            Jelajahi Peta
          </button>
        </div>
      </div>

      {/* Batik pattern bottom border */}
      <div
        className="absolute bottom-0 left-0 w-full h-10 md:h-14 z-30"
        style={{
          backgroundImage: "url('src/assets/batik-header.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
}
