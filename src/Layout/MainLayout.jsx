import Header from "../components/main/Header";
import Sidebar from "../components/navegation/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="h-screen bg-linear-to-t from-[#FAB2B2] to-[#FF86A6] md:flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
