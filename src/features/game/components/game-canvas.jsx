import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bgGame from "../../../assets/game/bg-game.svg";
import playerImg from "../../../assets/game/orang-game.svg";
import dendengImg from "../../../assets/game/dendeng.svg";
import udangImg from "../../../assets/game/udang.svg";
import { Navbar } from "./game-navbar";

// Audio imports
import backsound from "../../../assets/audio/backsound.mp3";
import coinSound from "../../../assets/audio/coint.wav";
import successSound from "../../../assets/audio/success.wav";
import countdownSound from "../../../assets/audio/countdown.wav";
import voiceEffect from "../../../assets/audio/voice_effect.mp3";

export function GameCanvas() {
  const navigate = useNavigate();

  const [playerX, setPlayerX] = useState(50);
  const [foods, setFoods] = useState([
    { id: 1, x: 30, y: -10, type: "dendeng", speed: 0.6 },
    { id: 2, x: 60, y: -40, type: "udang", speed: 0.8 },
  ]);
  const [score, setScore] = useState(0);
  const [badHits, setBadHits] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const keysRef = useRef({ left: false, right: false });
  const rafRef = useRef(null);
  const playerXRef = useRef(playerX);

  // Audio refs
  const bgAudioRef = useRef(null);
  const coinAudioRef = useRef(null);
  const successAudioRef = useRef(null);
  const countdownAudioRef = useRef(null);
  const voiceAudioRef = useRef(null);

  const respawnFood = (id) => {
    const type = Math.random() < 0.75 ? "dendeng" : "udang";
    return {
      id,
      x: Math.floor(Math.random() * 80) + 10,
      y: -10 - Math.floor(Math.random() * 40),
      type,
      speed:
        type === "dendeng"
          ? 0.5 + Math.random() * 0.3
          : 0.7 + Math.random() * 0.4,
    };
  };

  useEffect(() => {
    playerXRef.current = playerX;
  }, [playerX]);

  const handleStart = () => setShowCountdown(true);

  useEffect(() => {
    if (!showCountdown) return;
    if (countdown === 0) {
      setStarted(true);
      setShowCountdown(false);
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
      countdownAudioRef.current.play();
    }, 1000);
    return () => clearTimeout(timer);
  }, [showCountdown, countdown]);

  useEffect(() => {
    if (started && !gameOver) {
      bgAudioRef.current.loop = true;
      bgAudioRef.current.play();
    } else {
      bgAudioRef.current.pause();
      bgAudioRef.current.currentTime = 0;
    }
  }, [started, gameOver]);

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      setFoods((prevFoods) =>
        prevFoods.map((food) => {
          let newY = food.y + food.speed;

          const playerTopY = 78;
          const playerBottomY = 95;
          const playerWidth = 14;

          const isOverlapX = Math.abs(food.x - playerXRef.current) < playerWidth / 2;
          const isOverlapY = newY >= playerTopY && newY <= playerBottomY;

          if (food.type === "dendeng" && isOverlapX && isOverlapY) {
            setScore((s) => s + 10);
            coinAudioRef.current.play();
            return respawnFood(food.id);
          }

          if (food.type === "udang" && isOverlapX && isOverlapY) {
            setBadHits((b) => {
              const next = b + 1;
              if (next >= 3) {
                setGameOver(true);
                successAudioRef.current.play();
              }
              return next;
            });
            return respawnFood(food.id);
          }

          if (food.type === "dendeng" && newY > 100) {
            setBadHits((b) => {
              const next = b + 1;
              if (next >= 3) {
                setGameOver(true);
                successAudioRef.current.play();
              }
              return next;
            });
            return respawnFood(food.id);
          }

          if (newY > 110) return respawnFood(food.id);

          return { ...food, y: newY };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [started, gameOver]);

  useEffect(() => {
    const speed = 0.8;
    const move = () => {
      if (started && !gameOver) {
        setPlayerX((x) => {
          let next = x;
          if (keysRef.current.left) next -= speed;
          if (keysRef.current.right) next += speed;
          if (next < 5) next = 5;
          if (next > 95) next = 95;
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(move);
    };
    rafRef.current = requestAnimationFrame(move);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, gameOver]);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = true;
      if (e.key === "ArrowRight" || e.key === "d") keysRef.current.right = true;
    };
    const up = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") keysRef.current.left = false;
      if (e.key === "ArrowRight" || e.key === "d") keysRef.current.right = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  const restart = () => {
    setScore(0);
    setBadHits(0);
    setGameOver(false);
    setPlayerX(50);
    setFoods([respawnFood(1), respawnFood(2)]);
    setStarted(false);
    setShowCountdown(false);
    setCountdown(3);
    bgAudioRef.current.currentTime = 0;
  };

  const getImgForFood = (food) =>
    food.type === "dendeng" ? dendengImg : udangImg;

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgGame})` }}
    >
      <Navbar score={score} />

      {/* Foods */}
      {foods.map((food) => (
        <img
          key={food.id}
          src={getImgForFood(food)}
          alt={food.type}
          className="absolute w-24"
          style={{
            top: `${food.y}%`,
            left: `${food.x}%`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Player */}
      <img
        src={playerImg}
        alt="player"
        className="absolute bottom-0 w-74"
        style={{
          left: `${playerX}%`,
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* HUD */}
      <div className="absolute top-20 left-5 text-white font-medium">
        Kesalahan: {badHits} / 3
      </div>

      {/* Start + Countdown */}
      {!started && !showCountdown && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white z-50">
          <button
            onClick={handleStart}
            className="px-6 py-3 bg-[#CF392C] rounded-md text-lg hover:bg-[#B73327]"
          >
            Mulai Game
          </button>
        </div>
      )}
      {!started && showCountdown && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white z-50">
          <h1 className="text-6xl font-bold">{countdown}</h1>
        </div>
      )}

      {/* Game Over overlay */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl p-8 text-center w-80 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
            <p className="mb-4">Score akhir: {score}</p>

            {/* Tombol Main Lagi */}
            <button
              onClick={restart}
              className="px-4 py-2 bg-[#CF392C] text-white rounded-md hover:bg-[#B73327] mb-2 w-full transition-colors duration-200"
            >
              Main Lagi
            </button>

            {/* Tombol Kembali ke Beranda */}
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 w-full transition-colors duration-200"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      )}


      {/* Audio elements */}
      <audio ref={bgAudioRef} src={backsound} />
      <audio ref={coinAudioRef} src={coinSound} />
      <audio ref={successAudioRef} src={successSound} />
      <audio ref={countdownAudioRef} src={countdownSound} />
      <audio ref={voiceAudioRef} src={voiceEffect} />
    </div>
  );
}
