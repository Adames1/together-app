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
    <section className="min-h-screen bg-gradient-to-b from-[#FFA6A7] to-[#FFFFFF] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center space-y-2">
          <img src={logo} alt="Logo Page" className="w-20" />
          <h1 className="text-xl font-semibold text-[#5F5050] tracking-wide">
            Iniciar sesión
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[#5F5050] mb-1 ml-2"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-[#FFCCCC] text-[#5F5050] border border-white focus:outline-none focus:ring-2 focus:ring-[#FF8B8D]"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-[#5F5050] mb-1 ml-2"
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full bg-[#FFCCCC] text-[#5F5050] border border-white focus:outline-none focus:ring-2 focus:ring-[#FF8B8D]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full text-white bg-[#FF8B8D] hover:bg-[#ff7375] transition font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
