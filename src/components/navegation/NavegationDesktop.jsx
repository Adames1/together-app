import { Home, Calendar, List, History, LogOut } from "lucide-react";
import NavLinkComponent from "./NavLinkComponent";
import { signOutUser } from "../../services/auth";

function NavegationDesktop() {
  return (
    <nav className="hidden h-full px-4 py-8 md:flex md:flex-col md:gap-6">
      <div className="">
        <h1 className="logo-font text-4xl text-[#FF86A6]">ToGether</h1>
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <NavLinkComponent to="/">
          <Home size={22} />
          <span className="">Inicio</span>
        </NavLinkComponent>
        <NavLinkComponent to="/calendar">
          <Calendar size={22} />
          <span className="">Calendario</span>
        </NavLinkComponent>
        <NavLinkComponent to="/list">
          <List size={22} />
          <span className="">Lista</span>
        </NavLinkComponent>
        <NavLinkComponent to="/history">
          <History size={22} />
          <span className="">History</span>
        </NavLinkComponent>
      </div>

      {/* button logout */}
      <button
        className="flex gap-2 cursor-pointer text-slate-600 hover:text-red-500"
        onClick={signOutUser}
      >
        <LogOut size={22} />
        <span className="">Logout</span>
      </button>
    </nav>
  );
}

export default NavegationDesktop;
