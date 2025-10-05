import { EllipsisVertical } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-[80px] bg-white px-6 flex items-center rounded-bl-3xl shadow-sm md:rounded-none">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
            A
          </div>
          <span className="text-sm text-slate-600">Hola, Argenis Adames</span>
        </div>
        <EllipsisVertical size={24} className="text-slate-500 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
