 import { CirclePoundSterling, Heart, MessageSquareText } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export function MainCommunity() {
    const navigate = useNavigate();

    // Simulated auth and data (replace with real data later)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("newest");
    const [composerText, setComposerText] = useState("");
    const [composerImage, setComposerImage] = useState(null);

    const posts = useMemo(() => ([
        {
            id: 1,
            user: "Super nnova",
            avatar: "https://i.pravatar.cc/64?img=8",
            time: "2 minggu lalu",
            title: "Budaya Indonesia",
            body: "ini renacanya untuk post kayak funfact, terus pengamalan orang dalam merasakan budaya di indonesia",
            image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop",
            likes: 20,
            comments: [
                { user: "User1", text: "Great post about Indonesian culture!" },
                { user: "User2", text: "Love the insights!" },
                { user: "User3", text: "Very informative." }
            ],
        },
        {
            id: 2,
            user: "Sanggar Nusantara",
            avatar: "https://i.pravatar.cc/64?img=12",
            time: "5 hari lalu",
            title: "Harimau Sumatra",
            body: "ini renacanya untuk post kayak funfact, terus pengamalan orang dalam merasakan budaya di indonesia",
            image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1200&auto=format&fit=crop",
            likes: 52,
            comments: [
                { user: "User4", text: "Amazing photo!" },
                { user: "User5", text: "Sumatran tiger is so majestic." },
                { user: "User6", text: "Thanks for sharing." },
                { user: "User7", text: "Need more conservation efforts." }
            ],
        }
    ]), []);

    const filteredPosts = useMemo(() => {
        let list = posts.filter(p => (
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.body.toLowerCase().includes(search.toLowerCase())
        ));
        if (filter === "popular") list = [...list].sort((a,b) => b.likes - a.likes);
        if (filter === "newest") list = [...list].sort((a,b) => b.id - a.id);
        if (filter === "oldest") list = [...list].sort((a,b) => a.id - b.id);
        return list;
    }, [posts, search, filter]);

    const onUploadImage = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setComposerImage(url);
    };

    const submitPost = () => {
        if (!composerText && !composerImage) return;
        setComposerText("");
        setComposerImage(null);
        // In real app, push to backend and refresh list
        alert("Postingan terkirim! (mock)");
    };

    return (
        <div className="w-full min-h-screen bg-[#FAFAFA] pb-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mt-6">
                {/* Left content */}
                <div className="flex flex-col gap-6">
                    {/* Welcome banner (matches provided design) */}
                    <div className="rounded-xl border border-[#CF392C] bg-[#FFF4F1] p-5">
                        <div className="text-center">
                            <p className="text-[#1B1B1B] font-semibold">Selamat Datang di Komunitas!</p>
                            <p className="text-[#535353] text-sm mt-1">Tukarkan poin bacamu dengan voucher lokal & kenalan dengan kreator dari berbagai daerah.</p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="w-full rounded-full border border-[#E2E2E2] bg-white flex items-center gap-3 px-4 py-2">
                        <span className="icon-[material-symbols--search] text-[#9CA3AF]"></span>
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Cari produk atau kerajinan favoritmu..." className="w-full outline-none text-sm bg-transparent" />
                    </div>

                    {/* Filter caption + buttons */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#6B7280]">Postingan berdasarkan:</span>
                        <span className="font-semibold">{filter === "popular" ? "Terpopuler" : filter === "oldest" ? "Terlama" : "Terbaru"}</span>
                        <div className="ml-auto flex gap-2">
                            {[
                                {key:"popular", label:"Terpopuler"},
                                {key:"newest", label:"Terbaru"},
                                {key:"oldest", label:"Terlama"}
                            ].map(opt => (
                                <button
                                    key={opt.key}
                                    onClick={()=>setFilter(opt.key)}
                                    className={`px-3 py-1.5 rounded-full border transition ${filter===opt.key?"bg-[#CF392C] text-white border-[#CF392C]":"bg-white border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2]"}`}
                                >{opt.label}</button>
                            ))}
                        </div>
                    </div>

                    {/* Composer or login note */}
                    {!isLoggedIn ? (
                        <div className="rounded-xl border border-[#E2E2E2] bg-white p-5 text-[#9A1C1E] flex flex-col items-center">
                            <p className="text-sm">Login untuk membuka semua fitur komunitas!</p>
                            <div className="mt-3">
                                <button onClick={()=>setIsLoggedIn(true)} className="px-4 py-2 rounded-full bg-[#CF392C] text-white text-sm">Login</button>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-xl border border-[#E2E2E2] bg-white p-5 flex flex-col gap-3">
                            <div className="flex items-start gap-3">
                                <img src="https://i.pravatar.cc/40" alt="me" className="w-10 h-10 rounded-full" />
                                <textarea value={composerText} onChange={(e)=>setComposerText(e.target.value)} placeholder="Tulis sesuatu tentang budaya..." className="w-full min-h-20 p-2 rounded-lg border border-[#E2E2E2] outline-none" />
                            </div>
                            {composerImage && (
                                <div className="ml-13">
                                    <img src={composerImage} alt="preview" className="w-full max-h-64 object-cover rounded-lg" />
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <label className="text-sm px-3 py-2 rounded-full border border-[#CF392C] text-[#CF392C] hover:bg-[#fff3f2] cursor-pointer">
                                    Upload Gambar
                                    <input type="file" accept="image/*" className="hidden" onChange={onUploadImage} />
                                </label>
                                <button onClick={submitPost} className="px-4 py-2 rounded-full bg-[#CF392C] text-white">Posting</button>
                            </div>
                        </div>
                    )}

                    {/* Posts list */}
                    {filteredPosts.map(p => (
                        <PostCard key={p.id} post={p} />
                    ))}
                </div>

                {/* Right card */}
                <div className="lg:sticky lg:top-6 h-fit">
                    <div className="rounded-xl border border-[#E2E2E2] bg-white p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xl font-semibold">Hai, User</p>
                                <p className="text-sm text-[#6B7280] mt-1">Poin Kamu:</p>
                                <div className="mt-1 inline-flex items-center gap-1 py-2 rounded-md  text-[#C2410C] text-sm font-semibold">
                                    <img src="src/assets/icons/icon-coin.svg" alt="" />
                                     200
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[#CF392C]"></div>
                        </div>
                        <button onClick={()=>navigate("/komunitas/market")} className="w-full mt-5 px-4 py-2.5 rounded-lg bg-[#CF392C] text-white hover:bg-[#d83021]">Belanja Produk</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PostCard({ post }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [showComments, setShowComments] = useState(false);

    const toggleLike = () => {
        setLiked((v)=>!v);
        setLikes((n)=> n + (liked?-1:1));
    };

    return (
        <>
            <div className="rounded-xl border border-[#E2E2E2] bg-white overflow-hidden">
                <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <span className="w-3 h-3 rounded-full bg-[#CF392C]"></span>
                        <span className="text-[#111]"><strong>{post.user}</strong></span>
                        <span>•</span>
                        <span>{post.time}</span>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
                        <img src={post.image} alt="thumb" className="w-full h-48 md:h-44 object-cover rounded-lg" />
                        <div>
                            <h3 className="font-semibold text-lg">{post.title}</h3>
                            <p className="text-sm text-[#374151] mt-1">{post.body}</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-3 border-t border-[#F0F0F0] flex items-center gap-8 text-[#6B7280]">
                    <button onClick={toggleLike} className={`flex items-center gap-2 ${liked?"text-[#CF392C]":""}`}>
                        <Heart className={`w-5 h-5 ${liked?"fill-[#CF392C]":""}`} />
                        {likes}
                    </button>
                    <button onClick={() => setShowComments(true)} className="flex items-center gap-2">
                        <MessageSquareText className="w-5 h-5" />
                        {post.comments.length}
                    </button>
                </div>
            </div>

            {/* Comments Pop-up */}
            {showComments && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Komentar</h3>
                            <button onClick={() => setShowComments(false)} className="text-gray-500 hover:text-gray-700">
                                <span className="text-2xl">&times;</span>
                            </button>
                        </div>
                        <div className="space-y-3">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="flex gap-3">
                                    <img src={`https://i.pravatar.cc/32?img=${index + 1}`} alt="avatar" className="w-8 h-8 rounded-full" />
                                    <div>
                                        <p className="font-semibold text-sm">{comment.user}</p>
                                        <p className="text-sm text-gray-700">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <input placeholder="Tulis komentar..." className="flex-1 px-3 py-2 rounded-lg border border-[#E2E2E2] outline-none" />
                            <button className="px-4 py-2 rounded-lg bg-[#CF392C] text-white">Kirim</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
