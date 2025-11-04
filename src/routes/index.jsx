import { createBrowserRouter } from "react-router-dom";
import { MainLanding } from "../features/landing/main-landing";
import { ChatbotMainPage } from "../features/chatbot/chatbot-main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding />,
  },

  // tambahkan route dan panggil elemtn disini

  {
    path: "/bineka-ai",
    element: <ChatbotMainPage />,
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