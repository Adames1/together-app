import Sidebar from "../components/navegation/Sidebar";
import Button from "../components/common/Button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

function MainLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuProfile, setShowMenuProfile] = useState(false);

  return (
    <div className="bg-white w-full h-screen flex relative">
      {/* component sidebar */}
      <Sidebar
        show={showSidebar}
        showMenu={showMenuProfile}
        onSet={() => setShowSidebar(false)}
        onShowMenuProfile={() => setShowMenuProfile(!showMenuProfile)}
      />
      {/* component header */}
      <main className="w-full h-full overflow-x-hidden p-6 md:ml-[300px]">
        {children}
      </main>

      <Button
        type="button"
        className="fixed bottom-4 right-4 bg-black text-white cursor-pointer w-10 h-10 rounded-full flex items-center justify-center md:hidden"
        onSet={() => setShowSidebar(true)}
      >
        <AlignJustify size={20} />
      </Button>
    </div>
  );
}

export default MainLayout;
