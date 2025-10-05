function Input({ label, type, id, name, onChange }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="ml-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full bg-white border-2 border-[#FF85A6] rounded-md px-3 py-3.5 text-slate-500 outline-none"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
