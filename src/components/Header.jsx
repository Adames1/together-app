import { appConsumer } from "../context/AppContext";
import { IoMdLogOut } from "react-icons/io";

function Header() {
  const { signOut, currentUser } = appConsumer();

  const handleClick = () => {
    signOut();
  };

  return (
    <header className="w-full bg-white rounded-b-3xl shadow-md container mx-auto max-w-4xl">
      <div className="flex justify-between items-center px-6 py-4 sm:py-5">
        <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-[#5F5050]">
          Hola, <span className="capitalize">{currentUser?.name}</span>
        </h1>
        <button
          type="button"
          onClick={handleClick}
          aria-label="Cerrar sesión"
          className="bg-[#FF8B8D] hover:bg-[#ff6b6d] transition rounded-md p-2 flex items-center justify-center shadow-sm"
          title="Cerrar sesión"
        >
          <IoMdLogOut className="text-white text-2xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
