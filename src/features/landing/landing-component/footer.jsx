import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D8442D] text-white font-['Plus_Jakarta_Sans'] px-8 md:px-20 py-12">
      {/* Bagian atas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/60">
        {/* Kolom 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Bineka</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            Deskripsi singkat Deskripsi singkat Deskripsi singkat Deskripsi
            singkat Deskripsi singkat
          </p>

          {/* Ikon Sosial */}
          <div className="flex gap-5">
            <SocialIcon src="src/assets/icons/facebook.svg" alt="Facebook" />
            <SocialIcon src="src/assets/icons/instagram.svg" alt="Instagram" />
            <SocialIcon src="src/assets/icons/email.svg" alt="Mail" />
            <SocialIcon src="src/assets/icons/whatsapp.svg" alt="WhatsApp" />
          </div>
        </div>

        {/* Kolom 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi Utama</h3>
          <ul className="space-y-2 text-white/90">
            <li>Game</li>
            <li>Chatbot</li>
            <li>Peta</li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Fitur Unggulan</h3>
          <ul className="space-y-2 text-white/90">
            <li>Tentang Kami</li>
            <li>Menu</li>
            <li>Testimoni</li>
            <li>Kontak</li>
          </ul>
        </div>
      </div>

      {/* Bagian bawah */}
      <div className="text-center mt-8 text-white/90 text-sm space-y-2">
        <p>© 2025 - Super nnova</p>
        <p>
          Dibangun dengan <span className="text-red-400">❤️</span> untuk
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
