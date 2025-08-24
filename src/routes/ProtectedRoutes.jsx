import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
