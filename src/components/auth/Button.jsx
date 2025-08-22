function Button({ type, children, loading }) {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full bg-gradient-to-r from-[#FF477B] to-[#ff96b4] text-white font-semibold py-3 rounded-full hover:opacity-90 disabled:opacity-50 transition-all"
    >
      {children}
    </button>
  );
}

export default Button;
