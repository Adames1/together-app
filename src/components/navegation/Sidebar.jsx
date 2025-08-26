import { NavLink } from "react-router-dom";
import ProfileMenu from "../profile/ProfileMenu";
import {
  EllipsisVertical,
  Wrench,
  Home,
  ChartBar,
  Calendar,
  Pin,
} from "lucide-react";

function Sidebar({ show, onSet, showMenu, onShowMenuProfile }) {
  return (
    <aside
      className={`fixed inset-0 z-50 p-6 bg-white shadow-sm w-full h-full md:w-[300px] transform -translate-x-full md:inset-auto md:rounded-br-3xl md:rounded-tr-3xl md:translate-x-0 transition ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full h-full flex flex-col gap-4 overflow-auto bg-white">
        {/* button close sidebar */}
        <button
          onClick={onSet}
          type="button"
          className="w-8 h-8 bg-slate-200 ml-auto rounded-full text-sm flex items-center justify-center font-medium cursor-pointer md:hidden"
        >
          X
        </button>

        {/* info user */}
        <div className="w-full flex items-center justify-between border-b border-slate-200 py-4 relative">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 bg-black rounded-full text-white flex items-center justify-center text-[18px] font-medium">
              A
            </span>
            <h2 className="text-md font-medium">Argenis Adames</h2>
          </div>
          <button type="button" onClick={onShowMenuProfile}>
            <EllipsisVertical size={20} />
          </button>

          {/* menu profile user */}
          {showMenu && <ProfileMenu />}
        </div>

        {/* navegation */}
        <nav className="w-full h-full flex flex-col gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 w-full py-2.5 px-4 rounded-full ${
                isActive
                  ? "bg-slate-100 text-pink-600"
                  : "hover:bg-slate-50 text-gray-700"
              }`
            }
          >
            <Home size={20} />
            <span className="">Inicio</span>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 w-full py-2.5 px-4 rounded-full ${
                isActive
                  ? "bg-slate-100 text-pink-600"
                  : "hover:bg-slate-50 text-gray-700"
              }`
            }
          >
            <ChartBar size={20} />
            <span className="">Dashboard</span>
          </NavLink>
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              `flex items-center gap-2 w-full py-2.5 px-4 rounded-full ${
                isActive
                  ? "bg-slate-100 text-pink-600"
                  : "hover:bg-slate-50 text-gray-700"
              }`
            }
          >
            <Pin size={20} />
            <span className="">Planes</span>
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `flex items-center gap-2 w-full py-2.5 px-4 rounded-full ${
                isActive
                  ? "bg-slate-100 text-pink-600"
                  : "hover:bg-slate-50 text-gray-700"
              }`
            }
          >
            <Calendar size={20} />
            <span className="">Calendario</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
