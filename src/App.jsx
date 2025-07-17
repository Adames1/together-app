import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
