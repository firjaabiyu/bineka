import { createBrowserRouter } from "react-router-dom";
import { MainLanding } from "../features/landing/main-landing";
import { GamePage } from "../features/game/game-page";
import { ChatbotMainPage } from "../features/chatbot/chatbot-main";
import { MainCommunity } from "../features/community/main";
import { MarketPlace } from "../features/community/market-place";
import { MarketPlaceDetail } from "../features/community/market-place-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },

  // tambahkan route dan panggil elemtn disini

  {
    path: "/bineka-ai",
    element: <ChatbotMainPage />,
  },

  {
    path: "/komunitas",
    element: <MainCommunity />,
  },

  {
    path: "/komunitas/market",
    element: <MarketPlace />,
  },

  {
    path: "/komunitas/market/:id",
    element: <MarketPlaceDetail />,
  },






  //abaikan ini
//   {
//     path: "/dashboard",
//     element: <DashboardLayout />,
//     children: [
//       { index: true, element: <DashboardIndex /> },
//       { path: "users", element: <Users /> },
//       { path: "settings", element: <Settings /> },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
]);