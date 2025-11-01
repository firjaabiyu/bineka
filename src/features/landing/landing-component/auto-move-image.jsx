import React from "react";
import "./scrollAnimation.css";

export default function AutoScrollImages() {
  const images = Array(19).fill(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWvHY6cYV65LtYat9-F8C5cP0x8IsZfixrA&s"
  );

  return (
    <div className="flex flex-col gap-6 w-full overflow-hidden">
      {[...Array(3)].map((_, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden group">
          <div
            className={`scroll-container group-hover:paused ${
              rowIndex % 2 === 1 ? "reverse" : ""
            }`}
          >
            {/* duplicate dua kali agar loop mulus */}
            {[...Array(1)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {images.map((src, index) => (
                  <img
                    key={`${rowIndex}-${i}-${index}`}
                    src={src}
                    alt=""
                    className="w-76 h-48 object-cover "
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
