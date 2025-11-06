import coin from "../../../assets/coin-bineka.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { X, BookOpen } from "lucide-react";

export default function CeritaPopup({ item, onClose }) {
  if (!item) return null;
  const navigate = useNavigate();
  const location = useLocation();

  const handleLihatPeta = () => {
    navigate("/peta");
    };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose} >
      <div className="bg-white rounded-2xl p-6 w-11/12 max-w-md relative"
      onClick={(e) => e.stopPropagation()}>

        <button
        onClick={onClose}
        className="absolute z-10 top-3 right-3 bg-white/80 hover:bg-white text-[#323232c7] hover:text-[#000000] shadow-md rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
        >
        <X className="w-5 h-5" />
        </button>

        <div className="rounded-lg overflow-hidden bg-gray-200 h-40 flex items-center justify-center mb-4 relative">
          <img src={item.gambar} alt={item.judul} className="object-cover object-top w-full h-full" />
          <div className="flex gap-2 items-center absolute bottom-3 px-3 py-1.5 w-fit right-3 bg-[#AA2216] text-white rounded text-sm font-bold">
            <img src={coin} alt="coin" className="w-4 h-4" />
            <p className="text-white text-sm font-bold">+{item.poin} Poin</p>
          </div>
        </div>

        <h2 className="font-bold text-lg mb-1">{item.judul}</h2>
        <p className="text-[#AA2216] text-sm font-semibold mb-3 flex items-center gap-1">
        <img
            src="src/assets/icons/location2.svg"
            alt="Map Icon"
            className="w-4 h-4 text-[#AA2216]"
        />
        {item.daerah}
        </p>

        <p className="text-gray-700 mb-6">{item.deskripsi}</p>

        <button
            onClick={() => navigate(`/peta/cerita/${item.id}`)}
            className="w-full bg-[#B0E639] font-bold text-black py-2.5 rounded-lg mb-2 cursor-pointer flex items-center justify-center gap-2 hover:bg-[#9ed02f] transition-all"
            >
            <BookOpen className="w-5 h-5" />
            Baca Cerita
        </button>

        {location.pathname !== "/peta" && (
        <button
            onClick={handleLihatPeta}
            className="w-full text-[#555] rounded-lg hover:text-black hover:bg-[#eee] transition-all py-2.5 font-semibold cursor-pointer"
        >
            Lihat Peta
        </button>
        )}
      </div>
    </div>
  );
}
