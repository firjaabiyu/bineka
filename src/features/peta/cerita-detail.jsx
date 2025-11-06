import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { provinsiData } from "../../data/provinsi_data";
import { MapPin, ArrowLeft } from "lucide-react";

export default function CeritaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  let cerita = null;
  Object.values(provinsiData).forEach((prov) => {
    const found = prov.cerita.find((c) => c.id.toString() === id);
    if (found) cerita = { ...found, provinsi: prov.nama };
  });

  if (!cerita) return <p className="text-center mt-10">Cerita tidak ditemukan.</p>;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-jakarta">
      <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 pt-6 mb-6">
          <button
            onClick={() => navigate("/peta")}
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E2E2] bg-white hover:bg-[#F5F5F5] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#1B1B1B]" />
          </button>
          <span className="text-[#1B1B1B] font-semibold text-lg">{cerita.judul}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-0 py-8">
        {/* Gambar Cover */}
        <div className="w-full rounded-lg overflow-hidden bg-gray-200 h-56 md:h-72 flex items-center justify-center mb-6">
          <img
            src={cerita.gambar}
            alt={cerita.judul}
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          {cerita.judul}
        </h2>

        {/* Lokasi & Poin */}
        <div className="flex justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-[#E5F5D5] text-[#3E6E00] px-3 py-1.5 rounded-full text-sm font-semibold">
            <MapPin className="w-4 h-4" />
            {cerita.provinsi}
          </div>
          <div className="flex items-center gap-2 bg-[#FFE7B3] text-[#AA2216] px-3 py-1.5 rounded-full text-sm font-semibold">
            
            +{cerita.poin} Poin
          </div>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Isi Cerita */}
        <div className="text-gray-700 leading-relaxed space-y-6">
          {cerita.deskripsi?.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
