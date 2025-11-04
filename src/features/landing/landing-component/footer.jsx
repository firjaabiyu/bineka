import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D8442D] text-white font-['Plus_Jakarta_Sans'] px-8 md:px-20 py-12">
      {/* Bagian atas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/60">
        {/* Kolom 1 */}
        <div>
          <h1 className="text-3xl font-bold mb-4 font-jakarta">Bineka</h1>
          <p className="text-white/90 leading-relaxed mb-6 font-jakarta">
            Deskripsi singkat Deskripsi singkat Deskripsi singkat Deskripsi
            singkat Deskripsi singkat
          </p>

          <div className="flex gap-5">
            <SocialIcon src="src/assets/icons/facebook.svg" alt="Facebook" />
            <SocialIcon src="src/assets/icons/instagram.svg" alt="Instagram" />
            <SocialIcon src="src/assets/icons/email.svg" alt="Mail" />
            <SocialIcon src="src/assets/icons/whatsapp.svg" alt="WhatsApp" />
          </div>
        </div>

       
        <div>
          <h1 className="text-3xl font-semibold mb-4 font-jakarta">Navigasi Utama</h1>
          <ul className="space-y-2 text-white/90 font-jakarta">
            <li>Game</li>
            <li>Chatbot</li>
            <li>Peta</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-3xl font-semibold mb-4 font-jakarta">Fitur Unggulan</h3>
          <ul className="space-y-2 text-white/90 font-jakarta">
            <li>Tentang Kami</li>
            <li>Menu</li>
            <li>Testimoni</li>
            <li>Kontak</li>
          </ul>
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="text-center mt-8 text-white/90 text-sm space-y-2 font-jakarta">
        <p>© 2025 - Super nnova</p>
        <p>
          Dibangun dengan <span className="text-red-400 font-jakarta">❤️</span> untuk
          pelestarian budaya Indonesia
        </p>
      </div>
    </footer>
  );
};

// Komponen ikon sosial
const SocialIcon = ({ src, alt }) => (
  <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/20 transition">
    <img src={src} alt={alt} className="w-5 h-5" />
  </div>
);

export default Footer;
