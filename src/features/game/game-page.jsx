import { GameCanvas } from "./components/game-canvas";
import { Navbar } from "./components/game-navbar";

export function GamePage() {
    return (
        <>
        <Navbar/>
        <GameCanvas/>
        </>
    )
}