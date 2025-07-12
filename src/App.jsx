import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
