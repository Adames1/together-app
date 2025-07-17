import { useRef } from "react";
import { appConsumer } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import toast from "react-hot-toast";

function LoginPage() {
  const { signIn, loading } = appConsumer();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(emailRef.current.value, passwordRef.current.value);

      emailRef.current.value = "";
      passwordRef.current.value = "";

      navigate("/");
    } catch (error) {
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Correo o contraseña incorrectos");
      } else if (error.message.includes("Email not confirmed")) {
        toast.error("Por favor, confirme su correo antes de iniciar sesión");
      } else {
        toast.error("Error al iniciar sesión");
      }
    }
  };

  return (
    <section className="h-screen bg-linear-to-b from-[#FFA6A7] to-[#FFFFFF]">
      <div className="h-full flex flex-col items-center justify-center space-y-8">
        <img src={logo} alt="Logo Page" />

        <div className="w-full px-8 sm:max-w-md">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col space-y-6"
          >
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="inputEmail"
                className="text-[#5F5050] tracking-wider ml-5"
              >
                Tu correo
              </label>
              <input
                type="email"
                id="inputEmail"
                ref={emailRef}
                className="w-full outline-none border-2 border-white bg-[#FFCCCC] rounded-full px-5 py-3 text-[#5F5050]"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="inputPassword"
                className="text-[#5F5050] tracking-wider ml-5"
              >
                Tu contraseña
              </label>
              <input
                type="password"
                id="inputPassword"
                ref={passwordRef}
                className="w-full outline-none border-2 border-white bg-[#FFCCCC] rounded-full px-5 py-3 text-[#5F5050]"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF8B8D] border-2 border-white font-medium text-lg w-44 mx-auto text-white tracking-wider py-2 rounded-full"
            >
              {loading ? "CARGANDO..." : "ENTRAR"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
