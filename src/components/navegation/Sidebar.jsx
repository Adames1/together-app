import NavegationMobile from "./NavegationMobile";
import NavegationDesktop from "./NavegationDesktop";

function Sidebar() {
  return (
    <aside className="fixed bottom-0 w-full bg-white rounded-tl-3xl rounded-tr-3xl md:static md:rounded-none md:max-w-[280px]">
      {/* navegation for mobile */}
      <NavegationMobile />

      {/* navegation for tablet or desktop */}
      <NavegationDesktop />
    </aside>
  );
}

export default Sidebar;
