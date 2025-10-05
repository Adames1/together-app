import { NavLink } from "react-router-dom";
import { Home, Calendar, List, History } from "lucide-react";
import NavLinkComponent from "./NavLinkComponent";

function NavegationMobile() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-6 md:hidden">
      <div className="flex gap-8">
        <NavLinkComponent to="/">
          <Home size={22} />
        </NavLinkComponent>
        <NavLinkComponent to="/calendar">
          <Calendar size={22} />
        </NavLinkComponent>
      </div>
      <button className="w-12 h-12 bg-[#FF85A6] text-white rounded-full cursor-pointer text-3xl font-normal">
        +
      </button>
      <div className="flex gap-8">
        <NavLinkComponent to="/list">
          <List size={22} />
        </NavLinkComponent>
        <NavLinkComponent to="/history">
          <History size={22} />
        </NavLinkComponent>
      </div>
    </nav>
  );
}

export default NavegationMobile;
