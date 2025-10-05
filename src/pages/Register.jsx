import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { validate } from "email-validator";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import { saveDataUser } from "../services/user";
import { toast } from "react-toastify";

import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import AuthLayout from "../Layout/AuthLayout";

function Register() {
  const { loading } = useAuth();
  const [state, setState] = useState({
    fullname: "",
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

    if (emailValidator && state.fullname && state.password) {
      try {
        const { user } = await registerUser(state.email, state.password);
        await saveDataUser(user.uid, state.fullname, state.email);

        navigate("/");
        toast.success("Registro exitoso");
      } catch (error) {
        toast.error("Error al registrar usuario");
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
            label="Nombre completo"
            type="text"
            name="fullname"
            id="fieldName"
            onChange={handleForm}
          />
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
          <Button>{loading ? "Creando cuenta..." : "Crear cuenta"}</Button>
        </form>
        <p className="text-white text-sm text-center">
          Si ya tienes una cuenta,{" "}
          <Link to="/login" className="text-[#FF85A6] underline font-medium">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Register;
