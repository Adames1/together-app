import { Navigate, Outlet } from "react-router-dom";
import { appConsumer } from "../context/AppContext";

function ProtectedRoutes() {
  const { session } = appConsumer();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
