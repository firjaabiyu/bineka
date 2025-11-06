import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Game", path: "/game" },
    { name: "Chatbot", path: "/bineka-ai" },
    { name: "Peta", path: "/" }, // ganti sesuai kebutuhan
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] bg-gradient-to-r from-[#2c2c2c]/90 to-[#3a3a3a]/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between text-white shadow-lg border border-white/10"
    >
      {/* Logo kiri */}
      <div className="font-bold text-2xl z-10">Bineka</div>

      {/* Menu tengah */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-10 font-normal text-balance">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="relative group transition text-white"
          >
            {item.name}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-[2px] bg-[#C6FF4D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Tombol kanan */}
      <div className="hidden md:flex">
        <Link
          to="/komunitas"
          className="flex items-center gap-2 bg-[#C6FF4D] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#b5ff48] transition"
        >
          <img src="src/assets/icons/community.svg" alt="Join" className="w-5 h-5" />
          Join Komunitas
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full mt-3 left-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center space-y-3 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-[#C6FF4D] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/komunitas"
            className="flex items-center gap-2 bg-[#C6FF4D] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#b5ff48] transition"
            onClick={() => setIsOpen(false)}
          >
            <img src="src/assets/icons/community.svg" alt="Join" className="w-5 h-5" />
            Join Komunitas
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
