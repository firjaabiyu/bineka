import React from "react";
import { motion } from "framer-motion";

const MonumenMarquee = () => {
  const images = [
    {
      id: 1,
      bw: "src/assets/marquee-bw1.png",
      color: "src/assets/marquee-color1.png",
    },
    {
      id: 2,
      bw: "src/assets/marquee-bw2.png",
      color: "src/assets/marquee-color2.png",
    },
    {
      id: 3,
      bw: "src/assets/marquee-bw3.png",
      color: "src/assets/marquee-color3.png",
    },
    {
      id: 4,
      bw: "src/assets/marquee-bw4.png",
      color: "src/assets/marquee-color4.png",
    },
    {
      id: 5,
      bw: "src/assets/marquee-bw5.png",
      color: "src/assets/marquee-color5.png",
    },
    {
      id: 6,
      bw: "src/assets/marquee-bw6.png",
      color: "src/assets/marquee-color6.png",
    },
  ];

  return (
    <div className="overflow-hidden py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div key={i} className="relative group w-28 h-28 flex-shrink-0">
              <img
                src={img.bw}
                alt="monumen"
                className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={img.color}
                alt="monumen color"
                className="w-full h-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MonumenMarquee;
