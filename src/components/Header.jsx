import { appConsumer } from "../context/AppContext";
import { IoMdLogOut } from "react-icons/io";

function Header() {
  const { signOut, currentUser } = appConsumer();

  const handleClick = () => {
    signOut();
  };

  return (
    <header className="w-full h-22 bg-white rounded-b-3xl shadow-md container mx-auto">
      <div className="flex justify-between items-center h-full px-5">
        <h1 className="text-lg font-medium tracking-wider text-[#5F5050]">
          Hola, {currentUser?.name}
        </h1>
        <button
          type="button"
          onClick={handleClick}
          className="bg-[#FFC4C5] rounded-md p-1"
        >
          <IoMdLogOut className="text-white text-2xl" />
        </button>
      </div>
    </header>
  );
}

export default Header;
