import { NavLink } from "react-router-dom";

function NavLinkComponent({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#FF86A6] flex gap-2 items-center"
          : "text-[#8C8C8C] flex gap-2 items-center"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavLinkComponent;
