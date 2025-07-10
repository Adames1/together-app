import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function HomePage() {
  return (
    <section className="min-h-screen bg-[#FFF5F3]">
      <header className="fixed top-0 left-0 z-50 w-full h-14 px-8 py-8 sm:px-32">
        <div className="flex justify-between items-center">
          <img src={Logo} className="w-40 sm:w-48" alt="Logo App" />
          <Link
            to={"/login"}
            className="quaternaryColor text-md font-semibold text-white rounded-full px-6 py-2 sm:text-lg sm:tracking-wider sm:px-8 sm:py-3"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* hero */}
      <div className="relative bg-[url('./assets/background.png')] bg-no-repeat bg-cover bg-center w-full h-screen flex items-center justify-center sm:bg-contain sm:bg-right">
        {/* Overlay con degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7a717c] to-[#555555] z-10"></div>
        <div className="w-full px-2 z-20 sm:max-w-[700px]">
          <h1 className="text-center font-bold text-[#032930] text-4xl mb-2 sm:text-5xl">
            ¡Bienvenidos a Nuestro Momento!
          </h1>
          <p className="text-white font-alex text-3xl text-center sm:text-4xl">
            Aquí comienza la magia de compartir juntos: organiza cenas,
            escapadas o simplemente una cita especial solo para ustedes dos.
          </p>
        </div>
        <div>{/* mostrar contenido dinamico */}</div>
      </div>
    </section>
  );
}

export default HomePage;
