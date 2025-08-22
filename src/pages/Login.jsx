import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

function Login() {
  return (
    <AuthLayout>
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10 space-y-8">
        <h2 className="text-center text-xl font-semibold text-slate-700">
          Inicia sesión para empezar la aventura
        </h2>
        <form className="space-y-6">
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="ejemplo@email.com"
            id="input-email"
          />
          <Input
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres"
            id="input-password"
          />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
