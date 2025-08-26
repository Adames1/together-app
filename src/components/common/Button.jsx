function Button({ type, className, children, onSet }) {
  return (
    <button onClick={onSet} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
