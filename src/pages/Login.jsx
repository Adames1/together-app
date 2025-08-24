import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import validator from "validator";
import { Loader2Icon } from "lucide-react";

function Login() {
  const { loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const isValidEmail = validator.isEmail(email.trim());
    const isValidPassword = password.trim();

    try {
      if (!isValidEmail && !isValidPassword) {
        setErrors(true);
        return;
      }

      await signIn(email, password);

      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10 space-y-8">
        <h2 className="text-center text-xl font-semibold text-slate-700">
          Inicia sesión para empezar la aventura
        </h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="ejemplo@email.com"
            id="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors && (
            <p className="text-sm text-red-400 -mt-6">
              Este correo es invalido.
            </p>
          )}

          <Input
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres"
            id="input-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors && (
            <p className="text-sm text-red-400 -mt-6">
              Contraseña debe ser minimo 8 caracteres.
            </p>
          )}

          <Button type="submit" loading={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2Icon size={22} className="animate-spin" />
                Entrando...
              </span>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
