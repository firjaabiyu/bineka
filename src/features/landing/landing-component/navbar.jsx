import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] bg-gradient-to-r from-[#2c2c2c]/90 to-[#3a3a3a]/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between text-white shadow-lg border border-white/10"
    >
    
      <div className="font-bold text-2xl">Bineka</div>

      
      <div className="hidden md:flex items-center space-x-10 font-normal text-balance">
        {["Game", "Chatbot", "Peta"].map((item) => (
  <a
    key={item}
    href="#"
    className="relative group transition text-white"
  >
    {item}
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-[2px] bg-[#C6FF4D] transition-all duration-300 group-hover:w-full"></span>
  </a>
))}
      </div>

    
      <button className="hidden md:flex items-center gap-2 bg-[#C6FF4D] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#b5ff48] transition">
        <img src="src/assets/icons/community.svg" alt="Join" className="w-5 h-5" />
        Join Komunitas
      </button>

    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
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

   
      {isOpen && (
        <div className="absolute top-full mt-3 right-0 w-full bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center space-y-3 py-4 md:hidden">
          <a href="#" className="hover:text-[#C6FF4D] transition">Game</a>
          <a href="#" className="hover:text-[#C6FF4D] transition">Chatbot</a>
          <a href="#" className="hover:text-[#C6FF4D] transition">Peta</a>
          <button className="flex items-center gap-2 bg-[#C6FF4D] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#b5ff48] transition">
            <img src="src/assets/icons/community.svg" alt="Join" className="w-5 h-5" />
            Join Komunitas
          </button>
        </div>
      )}
    </motion.nav>
  );
}
