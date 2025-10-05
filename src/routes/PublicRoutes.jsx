import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return !user ? <Outlet /> : <Navigate to="/" replace />;
}

export default PublicRoutes;
