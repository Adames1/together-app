import { useEffect, useState } from "react";
import { appConsumer } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import toast from "react-hot-toast";

function LoginPage() {
  const { signIn, loading, session } = appConsumer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session) {
      navigate("/", { replace: true });
    }
  }, [session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      toast.error("Ingresa un correo válido");
      return;
    }

    try {
      await signIn(formData.email, formData.password);
      setFormData({ email: "", password: "" });
    } catch (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Correo o contraseña incorrectos");
      } else if (error.message.includes("Email not confirmed")) {
        toast.error("Por favor, confirma tu correo");
      } else {
        toast.error("Ocurrió un error al iniciar sesión");
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FFA6A7] to-white flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <img
            src={logo}
            alt="Logo"
            className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-[#5F5050]">
            Iniciar sesión
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#5F5050]"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#FFE5E5] text-[#5F5050] placeholder:text-[#A37C7C] border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF8B8D] transition"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#5F5050]"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#FFE5E5] text-[#5F5050] placeholder:text-[#A37C7C] border border-[#FFDADA] focus:outline-none focus:ring-2 focus:ring-[#FF8B8D] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FF8B8D] text-white font-semibold tracking-wide hover:bg-[#ff6b6d] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
