import { useState } from "react";
import { RefreshCw } from "lucide-react";

export default function FlipCard({ title, image, desc }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-[90%] sm:w-[320px] md:w-[360px] h-[250px] [perspective:1200px]">
      {/* wrapper rotasi */}
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl border border-gray-200 shadow-md flex flex-col justify-between overflow-visible">
          {/* Image area */}
          <div className="flex-1 m-4 rounded-lg bg-gray-200 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Title & icon */}
          <div className="flex items-center justify-between px-4 pb-4">
            <p className="font-bold text-black text-lg">{title}</p>

            {/* Tooltip wrapper */}
            <div className="relative group">
              <button
                onClick={() => setFlipped(true)}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <RefreshCw size={20} className="text-[#CF392C]" />
              </button>

              {/* Tooltip */}
              <span
                className="
                  absolute bottom-full right-1/2 translate-x-1/2 mb-3
                  px-3 py-1.5 text-sm text-white bg-[#CF392C] rounded-md
                  opacity-0 group-hover:opacity-100 transition-opacity
                  whitespace-nowrap z-50
                  after:content-[''] after:absolute after:top-full after:left-1/2 
                  after:-translate-x-1/2 after:border-8 after:border-transparent 
                  after:border-t-[#CF392C]
                "
              >
                Click to flip
              </span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#CF392C] text-white rounded-2xl shadow-md p-6 flex flex-col justify-between overflow-visible">
          <div>
            <p className="font-bold text-lg mb-2">{title}</p>
            <p className="text-sm opacity-90 leading-relaxed">{desc}</p>
          </div>

          <div className="relative group self-end">
            <button
              onClick={() => setFlipped(false)}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <RefreshCw size={20} />
            </button>

            {/* Tooltip back */}
            <span
              className="
                absolute bottom-full right-1/2 translate-x-1/2 mb-3
                px-3 py-1.5 text-sm text-white bg-white/20 rounded-md
                opacity-0 group-hover:opacity-100 transition-opacity
                whitespace-nowrap z-50
                after:content-[''] after:absolute after:top-full after:left-1/2 
                after:-translate-x-1/2 after:border-8 after:border-transparent 
                after:border-t-white/20
              "
            >
              Flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
