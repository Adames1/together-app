import { sessionAuth } from "../context/AuthContext";
import { IoExitOutline } from "react-icons/io5";

function ButtonSignOut() {
  const { signOut } = sessionAuth();

  const handleClick = async () => {
    await signOut();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="absolute top-7 right-0 flex gap-1 items-center bg-white px-2 py-1 cursor-pointer tracking-wider font-semibold rounded hover:bg-red-400 hover:text-white transition"
    >
      Logout <IoExitOutline className="text-xl" />
    </button>
  );
}

export default ButtonSignOut;
