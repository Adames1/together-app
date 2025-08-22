function AuthLayout({ children }) {
  return (
    <section className="min-h-screen w-full bg-image-login flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="w-full md:w-[45%] lg:w-[40%] flex items-center justify-center p-6 md:p-12">
        <div className="text-white text-center lg:text-left space-y-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#FF477B] tracking-tight">
            BIENVENIDO A LOVEBOOKING
          </h1>
          <p className="text-base lg:text-lg leading-relaxed">
            Compartamos nuestros mejores momentos cada día.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[55%] lg:w-[60%] flex items-center justify-center px-4 py-8">
        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
