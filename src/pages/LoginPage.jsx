import { useState } from "react";
import { sessionAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { IoIosArrowBack } from "react-icons/io";

function LoginPage() {
  const { signIn } = sessionAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);

      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast.error(
          "Credenciales invalidas. Favor verificar tu correo o contraseña"
        );
      } else {
        toast.error("Error al iniciar sesion");
      }
    }
  };

  return (
    <section className="min-h-screen bg-[#FFF5F3]">
      <header className="fixed top-0 left-0 z-50 w-full h-14 px-8 py-8 sm:px-32">
        <Link to={"/"} className="flex gap-1 items-center text-xl text-white">
          <IoIosArrowBack className="text-2xl" />
          Volver
        </Link>
      </header>

      <div className="relative bg-[url('./assets/background.png')] bg-no-repeat bg-cover bg-center w-full h-screen flex items-center justify-center sm:bg-contain sm:bg-right">
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a717c] to-[#555555] z-10"></div>

        <div className="bg-white/80 z-20 px-4 py-10 rounded-xl flex flex-col items-center justify-center shadow border-t-4 border-[#D9594C] max-w-2xs sm:max-w-xs">
          <h2 className="text-center text-md font-semibold text-[#D9594C] sm:text-lg">
            ¿Listos para su próxima cita? Inicien sesión
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4 items-center w-full px-3"
          >
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="inputEmail"
                className="text-[#032930] text-md tracking-wide ml-3"
              >
                Tu correo
              </label>
              <input
                type="email"
                name="email"
                id="inputEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#FFF5F3] rounded-full border-2 border-[#FF7A71] py-2 px-4 outline-none text-sm"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="inputPassword"
                className="text-[#032930] text-md tracking-wide ml-3"
              >
                Tu contraseña
              </label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#FFF5F3] rounded-full border-2 border-[#FF7A71] py-2 px-4 outline-none text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#FF7A71] text-white border-2 border-white uppercase rounded-full px-6 py-2 font-semibold"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
