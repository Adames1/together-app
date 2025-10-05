import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { validate } from "email-validator";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import { toast } from "react-toastify";

import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import AuthLayout from "../Layout/AuthLayout";

function Login() {
  const { loading } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleForm = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValidator = validate(state.email);

    if (emailValidator && state.password) {
      try {
        await loginUser(state.email, state.password);

        navigate("/");
        toast.success("Has iniciado sesion con exito");
      } catch (error) {
        toast.error("Error al iniciar sesion");
        console.log(error);
      }
    } else {
      toast.error("Los campos no pueden estar vacíos");
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col gap-8">
        <form
          onSubmit={handleSubmit}
          className="w-full text-sm text-white flex flex-col gap-6"
        >
          <Input
            label="Correo electronico"
            type="email"
            name="email"
            id="fieldEmail"
            onChange={handleForm}
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            id="fieldPassword"
            onChange={handleForm}
          />
          <Button>{loading ? "Iniciando Sesion..." : "Iniciar Sesion"}</Button>
        </form>
        <p className="text-white text-sm text-center">
          ¿Aun no tienes una cuenta?,{" "}
          <Link to="/register" className="text-[#FF85A6] underline font-medium">
            Registrate
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
