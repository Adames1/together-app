function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full bg-[#FF86A6] font-medium border-2 border-white py-3 rounded-md text-lg cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
