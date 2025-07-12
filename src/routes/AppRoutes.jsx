import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ReservationPage from "../pages/ReservationPage.jsx";
import BookingListPage from "../pages/BookingListPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="/reservationslisting" element={<BookingListPage />} />
    </Routes>
  );
}

export default AppRoutes;
