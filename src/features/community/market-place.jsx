import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export function MarketPlace() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("newest");
    const [activeCategory, setActiveCategory] = useState("Kerajinan");

    const products = useMemo(() => ([
        { id: 1, category: "Kerajinan", name: "Gelang Manik Bali", price: 65000, location: "Gianyar, Bali", image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop", likes: 20, createdAt: 1741000000000 },
        { id: 2, category: "Tenun", name: "Kain Tenun Sumba", price: 350000, location: "Sumba", image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop", likes: 52, createdAt: 1742000000000 },
        { id: 3, category: "Patung", name: "Topeng Malangan", price: 180000, location: "Malang", image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop", likes: 11, createdAt: 1740000000000 },
        { id: 4, category: "Aksesori", name: "Kalung Kerang Lombok", price: 85000, location: "Mataram", image: "https://images.unsplash.com/photo-1543093479-4d73a69530fd?q=80&w=1200&auto=format&fit=crop", likes: 31, createdAt: 1742100000000 },
        { id: 5, category: "Lukisan", name: "Lukisan Batik Pekalongan", price: 420000, location: "Pekalongan", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop", likes: 17, createdAt: 1740500000000 },
        { id: 6, category: "Pakaian Adat", name: "Ikat Kepala Bali", price: 95000, location: "Denpasar", image: "https://images.unsplash.com/photo-1461727885569-b2ddec0c432d?q=80&w=1200&auto=format&fit=crop", likes: 27, createdAt: 1742200000000 },
        { id: 7, category: "Kerajinan", name: "Anyaman Rotan Kalimantan", price: 250000, location: "Samarinda", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", likes: 44, createdAt: 1742300000000 }
    ]), []);

    const list = useMemo(() => {
        let l = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        if (filter === "popular") l = [...l].sort((a,b)=>b.likes-a.likes);
        if (filter === "newest") l = [...l].sort((a,b)=>b.createdAt-a.createdAt);
        if (filter === "oldest") l = [...l].sort((a,b)=>a.createdAt-b.createdAt);
        return l;
    }, [products, search, filter]);

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Market Budaya</h1>
                    <button onClick={()=>navigate(-1)} className="text-sm px-3 py-1.5 rounded-full border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2]">Kembali</button>
                </div>

                {/* Toolbar */}
                <div className="mt-4 flex flex-wrap gap-3 items-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E2E2] w-full sm:w-auto flex-1">
                        <span className="icon-[material-symbols--search] text-[#9CA3AF]"></span>
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Cari produk budaya..." className="w-full outline-none text-sm bg-transparent" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        {[
                            {key:"popular", label:"Terpopuler"},
                            {key:"newest", label:"Terbaru"},
                            {key:"oldest", label:"Terlama"}
                        ].map(opt => (
                            <button key={opt.key} onClick={()=>setFilter(opt.key)} className={`px-3 py-1.5 rounded-full border ${filter===opt.key?"bg-[#CF392C] text-white border-[#CF392C]":"bg-white border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2]"}`}>{opt.label}</button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {list.map(p => (
                        <button key={p.id} onClick={()=>navigate(`/komunitas/market/${p.id}`)} className="text-left rounded-xl overflow-hidden bg-white border border-[#E2E2E2] hover:shadow-md transition">
                            <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold">{p.name}</h3>
                                <p className="text-sm text-[#6B7280] mt-1">{p.location}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="font-bold">Rp{p.price.toLocaleString("id-ID")}</div>
                                    <div className="text-[#6B7280] text-sm flex items-center gap-1"><span className="icon-[mdi--heart-outline]"></span>{p.likes}</div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Extra components: categories + info card */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="rounded-xl border border-[#E2E2E2] bg-white p-5 lg:col-span-2">
                        <p className="font-semibold mb-3">Kategori Populer</p>
                        <div className="flex flex-wrap gap-2">
                            {['Kerajinan','Tenun','Aksesori','Patung','Lukisan','Pakaian Adat'].map(c => (
                                <button
                                    key={c}
                                    onClick={()=>setActiveCategory(c)}
                                    className={`px-3 py-1.5 rounded-full border text-sm ${activeCategory===c?"bg-[#CF392C] text-white border-[#CF392C]":"border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2]"}`}
                                >{c}</button>
                            ))}
                        </div>

                        {/* Category products */}
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {products.filter(p=>p.category===activeCategory).map(p => (
                                <button key={`cat-${p.id}`} onClick={()=>navigate(`/komunitas/market/${p.id}`)} className="text-left rounded-xl overflow-hidden bg-white border border-[#E2E2E2] hover:shadow-md transition">
                                    <img src={p.image} alt={p.name} className="w-full h-36 object-cover" />
                                    <div className="p-4">
                                        <h4 className="font-semibold text-sm">{p.name}</h4>
                                        <div className="mt-2 flex items-center justify-between text-sm">
                                            <span className="font-bold">Rp{p.price.toLocaleString('id-ID')}</span>
                                            <span className="text-[#6B7280]">{p.location}</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl border border-[#E2E2E2] bg-white p-5">
                        <p className="font-semibold">Dukungan</p>
                        <p className="text-sm text-[#6B7280] mt-1">Bagikan Market Budaya ke teman-temanmu dan ikut dukung pelestarian budaya Indonesia!</p>
                        <button onClick={()=>{}} className="w-full mt-4 px-4 py-2.5 rounded-lg bg-[#CF392C] text-white">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}