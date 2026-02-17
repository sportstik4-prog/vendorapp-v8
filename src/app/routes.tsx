import { createBrowserRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Dashboard } from "./components/Dashboard";
import { BookingManagement } from "./components/BookingManagement";
import { CourtManagement } from "./components/CourtManagement";
import { CoachingModule } from "./components/CoachingModule";
import { PlayerManagement } from "./components/PlayerManagement";
import { Payments } from "./components/Payments";
import { GamesManagement } from "./components/GamesManagement";
import { Notifications } from "./components/Notifications";
import { VenueProfile } from "./components/VenueProfile";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: Dashboard },
      { path: "bookings", Component: BookingManagement },
      { path: "courts", Component: CourtManagement },
      { path: "games", Component: GamesManagement },
      { path: "coaching", Component: CoachingModule },
      { path: "players", Component: PlayerManagement },
      { path: "payments", Component: Payments },
      { path: "notifications", Component: Notifications },
      { path: "profile", Component: VenueProfile },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);