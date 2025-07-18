import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ReservationFormPage from "../pages/ReservationFormPage";
import ProtectedRoutes from "../components/ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-reservation" element={<ReservationFormPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
