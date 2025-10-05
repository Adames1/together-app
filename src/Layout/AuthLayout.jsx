function AuthLayout({ children }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-linear-to-t from-[#FAB2B2] to-[#FF86A6]">
      {/* logo and slogan */}
      <div className="text-center text-white">
        <h1 className="logo-font text-6xl">ToGether</h1>
        <p className="text-lg">Que lo nuestro sea eterno</p>
      </div>

      {/* separate */}
      <div className="w-40 h-0.5 bg-white"></div>

      {/* content form */}
      <div className="w-full max-w-sm px-6 py-2">{children}</div>
    </div>
  );
}

export default AuthLayout;
