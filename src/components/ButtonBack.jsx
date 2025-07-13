import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function ButtonBack() {
  return (
    <Link to={"/"} className="flex gap-1 items-center text-xl text-white">
      <IoIosArrowBack className="text-2xl" />
      Volver
    </Link>
  );
}

export default ButtonBack;
