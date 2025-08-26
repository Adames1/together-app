import { logOut } from "../../services/auth";
import { LogOut } from "lucide-react";

function ProfileMenu() {
  return (
    <div className="absolute -bottom-17 right-2 bg-white border w-35 rounded-md p-2">
      <div className="w-full flex flex-col items-start justify-center divide-y-2 divide-slate-100">
        <button type="button" className="w-full py-1 cursor-pointer text-left">
          Ver perfil
        </button>
        <button
          onClick={logOut}
          type="button"
          className="w-full py-1 cursor-pointer text-left flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileMenu;
