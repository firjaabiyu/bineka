import { ArrowLeft, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function MarketPlaceDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useMemo(() => {
        const map = {
            1: { id:1, category: "Kerajinan", name: "Gelang Manik Bali", price: 65000, location: "Gianyar, Bali", image: "https://images.unsplash.com/photo-1559555698-cc683c339bdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670", desc: "Dibuat dari kaca daur ulang, tiap pola unik.", rating: 4.6, reviews:[{user:"Dewi", stars:5, text:"Cantik dan ringan, cocok buat hadiah."},{user:"Rama", stars:4, text:"Kualitas bagus sesuai foto."}] },
            2: { id:2, category: "Tenun", name: "Kain Tenun Sumba", price: 350000, location: "Sumba", image: "https://images.unsplash.com/photo-1661144050353-1d2566cbdf03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287", desc: "Tenun ikat bermotif kuda khas Sumba.", rating: 4.8, reviews:[{user:"Sinta", stars:5, text:"Motifnya indah, warna kuat."}] },
            3: { id:3, category: "Patung", name: "Topeng Malangan", price: 180000, location: "Malang", image: "https://jadesta.kemenparekraf.go.id/imgpost/150688.jpg", desc: "Topeng kayu handmade, cocok dekorasi.", rating: 4.3, reviews:[{user:"Bagus", stars:4, text:"Detail ukiran rapi."}] },
            4: { id:4, category: "Aksesori", name: "Kalung Kerang Lombok", price: 85000, location: "Mataram", image: "https://images.unsplash.com/photo-1596187404741-1ee205c1c353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287", desc: "Kalung kerajinan kerang khas Lombok.", rating: 4.2, reviews:[{user:"Mila", stars:4, text:"Manis dan simple."}] },
            5: { id:5, category: "Lukisan", name: "Lukisan Batik Pekalongan", price: 420000, location: "Pekalongan", image: "https://images.unsplash.com/photo-1693988112036-fbb124e6b082?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335", desc: "Lukisan batik dengan motif flora.", rating: 4.7, reviews:[{user:"Rafi", stars:5, text:"Sangat elegan."}] },
            6: { id:6, category: "Pakaian Adat", name: "Ikat Kepala Bali", price: 95000, location: "Denpasar", image: "https://img.id.my-best.com/contents/6df95f5f0f4070bc72ae2f1ab5d08308.png?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=cb08ddcb67d83269a5ad897eb520d3f2", desc: "Ikat kepala tradisional Bali.", rating: 4.5, reviews:[{user:"Made", stars:5, text:"Pas dan nyaman."}] },
            7: { id:7, category: "Kerajinan", name: "Anyaman Rotan Kalimantan", price: 250000, location: "Samarinda", image: "https://images.unsplash.com/photo-1668008555730-c390ae0b0247?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335", desc: "Anyaman rotan serbaguna.", rating: 4.4, reviews:[{user:"Indah", stars:4, text:"Kuat dan rapi."}] },
        };
        return map[Number(id)] || map[1];
    }, [id]);

    const [showCheckout, setShowCheckout] = useState(false);
    const [showVoucher, setShowVoucher] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [payment, setPayment] = useState("qris");
    const [chatMessage, setChatMessage] = useState("");
    const [feedbackText, setFeedbackText] = useState("");
    const [feedbackRating, setFeedbackRating] = useState(5);
    const [hasPurchased, setHasPurchased] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] py-8">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center gap-2">
                    <button onClick={()=>navigate(-1)} className="text-sm px-3 flex gap-1 items-center cursor-pointer py-1.5 rounded-full border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2]"> <ArrowLeft className="w-4 h-4" />Kembali</button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img src={product.image} alt={product.name} className="w-full h-80 md:h-full object-cover rounded-xl" />
                    <div className="rounded-xl bg-white border border-[#E2E2E2] p-5">
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <p className="text-[#6B7280] mt-1">{product.location}</p>
                        <div className="mt-2 flex items-center gap-3">
                            <div className="text-2xl font-bold">Rp{product.price.toLocaleString("id-ID")}</div>
                            <div className="text-sm px-2 py-1 rounded-md bg-[#FFF7E6] text-[#C2410C]">⭐ {product.rating}</div>
                        </div>
                        <p className="mt-4 text-sm text-[#374151]">{product.desc}</p>
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="rounded-lg border border-[#E2E2E2] p-4">
                                <p className="font-semibold">Deskripsi Produk</p>
                                <p className="text-[#6B7280] mt-1">Bahan: kaca daur ulang / kayu / serat alam. Perawatan: lap kering, hindari air berlebihan, simpan di tempat kering.</p>
                            </div>
                            <div className="rounded-lg border border-[#E2E2E2] p-4">
                                <p className="font-semibold">Tag</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {['kerajinan','daur ulang','bali','kado'].map(t => (
                                        <span key={t} className="px-2 py-1 rounded-full border border-[#CF392C] text-[#CF392C]">#{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button onClick={()=>setShowChat(true)} className="px-4 py-2 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Chat Penjual</button>
                            <button onClick={()=>setShowCheckout(true)} className="px-4 py-2 rounded-lg bg-[#CF392C] text-white hover:bg-[#d83021] cursor-pointer">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seller Info */}
            <div className="max-w-5xl mx-auto px-4 mt-6">
                <div className="rounded-xl bg-white border border-[#E2E2E2] p-5">
                    <h3 className="font-semibold">Informasi Penjual</h3>
                    <div className="mt-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#CF392C]"></div>
                        <div>
                            <p className="font-medium">Pelestari Budaya Nusantara</p>
                            <p className="text-sm text-[#6B7280]">Rating: ⭐️⭐️⭐️⭐️☆ (142 ulasan)</p>
                        </div>
                        <div className="ml-auto flex gap-2">
                            {/* <button className="px-3 py-2 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Kunjungi Toko</button> */}
                            <button onClick={()=>setShowChat(true)} className="px-3 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer">Chat</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipping */}
            <div className="max-w-5xl mx-auto px-4 mt-4">
                <div className="rounded-xl bg-white border border-[#E2E2E2] p-5">
                    <h3 className="font-semibold">Pengiriman</h3>
                    <p className="text-sm text-[#6B7280] mt-1">Pilih kurir dan cek estimasi ongkir serta waktu pengiriman.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {['JNE','SiCepat','POS','J&T','AnterAja'].map(k => (
                            <button key={k} className="px-3 py-1.5 rounded-full border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] text-sm cursor-pointer">{k}</button>
                        ))}
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="col-span-2 flex items-center gap-2">
                            <input placeholder="Kota tujuan" className="flex-1 px-3 py-2 rounded-lg border border-[#E2E2E2] outline-none" />
                            <button className="px-4 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer">Cek</button>
                        </div>
                        <div className="rounded-lg bg-[#FFF4F1] text-[#C2410C] px-3 py-2">Estimasi 2-5 hari kerja</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[{svc:'Reguler',price:18000,eta:'3-5 hari'},{svc:'Kilat',price:26000,eta:'2-3 hari'},{svc:'Same Day',price:45000,eta:'< 1 hari'}].map((o,i)=>(
                            <label key={i} className="rounded-lg border border-[#E2E2E2] p-3 cursor-pointer hover:border-[#CF392C]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{o.svc}</p>
                                        <p className="text-sm text-[#6B7280]">{o.eta}</p>
                                    </div>
                                    <input type="radio" name="svc" defaultChecked={i===0} />
                                </div>
                                <p className="mt-2 font-semibold">Rp{o.price.toLocaleString('id-ID')}</p>
                            </label>
                        ))}
                    </div>
                    <p className="mt-3 text-xs text-[#6B7280]">Biaya kirim final dapat berbeda sesuai alamat detail dan berat aktual.</p>
                </div>
            </div>

            {/* Buyers Feedback */}
            <div className="max-w-5xl mx-auto px-4 mt-8">
                <div className="rounded-xl bg-white border border-[#E2E2E2] p-5">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Ulasan Pembeli</h3>
                        <div className="text-sm px-2 py-1 rounded-md bg-[#FFF7E6] text-[#C2410C]">⭐ {product.rating}</div>
                    </div>
                    <div className="mt-4 space-y-4">
                        {product.reviews?.map((r, idx) => (
                            <div key={idx} className="flex gap-3">
                                <img src={`https://i.pravatar.cc/40?img=${idx+3}`} alt="avatar" className="w-10 h-10 rounded-full" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium">{r.user}</p>
                                        <span className="text-xs px-2 py-0.5 rounded bg-[#FFF7E6] text-[#C2410C]">{"⭐".repeat(r.stars)}</span>
                                    </div>
                                    <p className="text-sm text-[#374151] mt-1">{r.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {hasPurchased && (
                        <div className="mt-6 pt-6 border-t border-[#E2E2E2]">
                            <h4 className="font-semibold mb-3">Berikan Ulasan Anda</h4>
                            <div className="mb-3">
                                <p className="text-sm text-[#6B7280] mb-2">Rating:</p>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => setFeedbackRating(star)}
                                            className={`text-2xl cursor-pointer ${star <= feedbackRating ? 'text-[#F59E0B]' : 'text-[#E2E2E2]'}`}
                                        >
                                            ⭐
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <textarea
                                value={feedbackText}
                                onChange={(e) => setFeedbackText(e.target.value)}
                                placeholder="Bagikan pengalaman Anda tentang produk ini..."
                                className="w-full min-h-24 p-3 rounded-lg border border-[#E2E2E2] outline-none resize-none"
                            />
                            <button
                                onClick={() => {
                                    if (feedbackText.trim()) {
                                        alert("Ulasan Anda telah dikirim! Terima kasih atas feedback Anda.");
                                        setFeedbackText("");
                                        setFeedbackRating(5);
                                    }
                                }}
                                className="mt-3 px-4 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer hover:bg-[#d83021]"
                            >
                                Kirim Ulasan
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Checkout Modal */}
            {showCheckout && (
                <Modal onClose={()=>setShowCheckout(false)}>
                    <div className="p-1"></div>
                    <h2 className="text-xl font-semibold">Ringkasan Pembelian</h2>
                    <div className="mt-4 flex gap-4">
                        <img src={product.image} alt={product.name} className="w-28 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-[#6B7280]">{product.location}</p>
                            <p className="mt-1 font-bold">Rp{product.price.toLocaleString("id-ID")}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm mb-2 font-medium">Metode Pembayaran</p>
                        <div className="flex gap-2 text-sm">
                            {[
                                {key:"qris", label:"QRIS"},
                                {key:"transfer", label:"Transfer Bank"},
                                {key:"cod", label:"COD"}
                            ].map(opt => (
                                <button key={opt.key} onClick={()=>setPayment(opt.key)} className={`cursor-pointer px-3 py-1.5 rounded-full border ${payment===opt.key?"bg-black text-white border-black":"bg-white border-[#E2E2E2]"}`}>{opt.label}</button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <button onClick={()=>setShowVoucher(true)} className="px-4 py-2 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Gunakan Kupon</button>
                        <button onClick={()=>{setShowCheckout(false); setShowSuccess(true); setHasPurchased(true);}} className="px-5 py-2.5 rounded-lg bg-[#CF392C] text-white cursor-pointer">Bayar</button>
                    </div>
                </Modal>
            )}

            {/* Voucher Modal */}
            {showVoucher && (
                <Modal onClose={()=>setShowVoucher(false)}>
                    <div className="flex items-start gap-3">
                        <span className="icon-[mdi--ticket-percent] text-[#F59E0B] text-3xl"></span>
                        <h2 className="text-xl font-bold">Gunakan Voucher Kamu</h2>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm">Saldo voucher kamu:</p>
                        <p className="text-2xl font-extrabold text-[#D8442D]">Rp30.000</p>
                        <p className="mt-4">Gunakan kode voucher berikut untuk belanja produk dari komunitas:</p>
                        <div className="mt-3 flex items-center justify-between rounded-lg border border-[#E2E2E2] p-3">
                            <div>
                                <p className="font-extrabold text-lg tracking-wider">A9XK-30K-USER01</p>
                                <p className="text-xs text-[#6B7280]">(Nominal: Rp30.000)</p>
                            </div>
                            <button className="text-sm px-3 py-1.5 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Salin</button>
                        </div>
                        <div className="mt-5">
                            <p className="font-semibold">Cara Pakai:</p>
                            <ol className="list-decimal ml-5 mt-2 text-sm space-y-1">
                                <li>Beri kode di atas ke penjual saat beli produk.</li>
                                <li>Penjual masukkan kode ini di halaman "Tukar Kode Voucher".</li>
                                <li>Potongan harga otomatis diterapkan.</li>
                            </ol>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-3">
                            <button className="px-4 py-2 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Generate Ulang Kode</button>
                            <button onClick={()=>setShowVoucher(false)} className="px-4 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer">Selesai</button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <Modal onClose={()=>setShowSuccess(false)}>
                    <div className="text-center py-4">
                        <div className="mx-auto w-16 h-16 rounded-full bg-[#CF392C] flex items-center justify-center text-white">
                            <span className="icon-[mdi--check-bold]"></span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold">Pembayaran Berhasil</h3>
                        <p className="mt-1 text-sm text-[#6B7280]">Terima kasih telah mendukung karya budaya Indonesia.</p>
                        <div className="mt-5 flex justify-center gap-3">
                            <button onClick={()=>{setShowSuccess(false); navigate("/komunitas/market");}} className="px-4 py-2 rounded-lg border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">Kembali ke Market</button>
                            <button onClick={()=>setShowSuccess(false)} className="px-4 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer">Tutup</button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Chat Modal */}
            {showChat && (
                <Modal onClose={()=>setShowChat(false)}>
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E2E2E2]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#CF392C]"></div>
                            <div>
                                <p className="font-semibold">Pelestari Budaya Nusantara</p>
                                <p className="text-xs text-[#6B7280]">Online</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 overflow-y-auto space-y-4 mb-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#CF392C]"></div>
                            <div className="flex-1">
                                <div className="bg-[#F5F5F5] rounded-lg p-3">
                                    <p className="text-sm">Halo! Ada yang bisa saya bantu?</p>
                                </div>
                                <p className="text-xs text-[#6B7280] mt-1">10:30</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && chatMessage.trim()) {
                                    setChatMessage("");
                                }
                            }}
                            placeholder="Ketik pesan..."
                            className="flex-1 px-3 py-2 rounded-lg border border-[#E2E2E2] outline-none"
                        />
                        <button
                            onClick={() => {
                                if (chatMessage.trim()) {
                                    setChatMessage("");
                                }
                            }}
                            className="px-4 py-2 rounded-lg bg-[#CF392C] text-white cursor-pointer hover:bg-[#d83021]"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    )
}

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
            <div className="relative z-10 w-[90%] max-w-lg rounded-2xl bg-white border border-[#E2E2E2] p-5 shadow-xl">
                <button onClick={onClose} className="absolute right-3 top-3 text-[#6B7280] cursor-pointer">✕</button>
                {children}
            </div>
        </div>
    );
}