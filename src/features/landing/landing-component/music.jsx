import { useState, useRef } from "react";
import { Music } from "lucide-react";
import wonderland from "../../../assets/audio/wonderland.mp3";

export default function MusicPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleMusic}
        className={`
          w-14 h-14 flex items-center justify-center bg-[#D8442D] rounded-full shadow-lg
          hover:bg-red-600 transition
          ${isPlaying ? "animate-spin" : ""}
        `}
      >
        <Music size={24} color="white" />
      </button>
       <audio ref={audioRef} src={wonderland} loop />
    </div>
  );
}
