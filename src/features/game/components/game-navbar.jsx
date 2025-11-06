import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar({ score = 0 }) {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-8 z-50 border-b border-white
                    bg-white/30 backdrop-blur-md text-[18px]">
      
      <Link to="/" className="flex items-center gap-2">
        <ArrowLeft size={24} color="black" />
        <span>Game Interaktif</span>
      </Link>

      <div className="rounded-[40px] w-[147px] h-[38px] bg-[#CF392C] flex items-center justify-center">
        <h1 className="text-[18px] text-white">Skor : {score}</h1>
      </div>
    </nav>
  );
}
