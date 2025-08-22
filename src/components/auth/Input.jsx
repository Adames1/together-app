import { useState } from "react";
import { Mail, KeyRound, Eye, EyeOff } from "lucide-react";

function Input({ label, type, placeholder, id }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const renderIcon = () => {
    switch (type) {
      case "email":
        return <Mail size={20} className="text-pink-400" />;
      case "password":
        return <KeyRound size={20} className="text-pink-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-600">
        {label}
      </label>
      <div className="input-box">
        {renderIcon()}
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          className="flex-1 min-w-0 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
        {isPassword && (
          <span className="flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <Eye size={20} className="text-pink-400" />
              ) : (
                <EyeOff size={20} className="text-pink-400" />
              )}
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Input;
