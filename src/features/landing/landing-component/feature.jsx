export default function FeatureSection() {
  const features = [
    {
      title: "Komunitas penjualan karya Indonesia",
      desc: "blablablablablablablablablablablablablablablablablablabla",
      bg: "bg-[#FFF4E5]",
      icon: "src/assets/icons/iconf-1.svg",
    },
    {
      title: "Penukaran point menjadi voucher",
      desc: "blablablablablablablablablablablablablablablablablablabla",
      bg: "bg-[#EEFFD8]",
      icon: "src/assets/icons/iconf-2.svg",
    },
    {
      title: "Chatbot Berbahasa Daerah",
      desc: "blablablablablablablablablablablablablablablablablablabla",
      bg: "bg-[#E6F0FF]",
      icon: "src/assets/icons/iconf-3.svg",
    },
    {
      title: "Peta Interaktif",
      desc: "blablablablablablablablablablablablablablablablablablabla",
      bg: "bg-[#FFE9E9]",
      icon: "src/assets/icons/iconf-4.svg",
    },
  ];

  return (
    <section className="w-full py-16 flex justify-center font-['Plus_Jakarta_Sans']">
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 ${item.bg}  transition w-[300px] h-[300px] flex flex-col justify-start`}
          >
            <div className="flex flex-col gap-3">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-semibold leading-snug text-black font-jakarta">
                {item.title}
              </h2>
             <p className="text-black text-sm leading-relaxed break-words overflow-hidden text-ellipsis font-jakarta">
  {item.desc}
</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
