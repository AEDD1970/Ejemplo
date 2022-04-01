import { Grid, TextField, Button } from "@material-ui/core";
import React, { useRef } from "react";
import logo from "../Assets/images/logopurple.png";
import { BottonCustom, Pcustom, Title, LineRow, TextFieldWhite, Acustom } from "../styles/styles";
import "../Components/styles.css";
import google from "../Assets/icons/icons8-google 1.png";
import { Link } from 'react-router-dom';

export default function Login() {
  const email = useRef();
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
    };
  };
  return (
    <div className={"containerRoot"}>
      <form onSubmit={handleRegister} className="formContainer">
        <img src={logo} alt="logo" className="logo" />
        <Title>Iniciar sesión</Title>
        <Button color="secondary" variant="contained" fullWidth >
          <img src={google} alt="logo-google" />
          <Pcustom color="#fffffe">Continuar con Google</Pcustom>
        </Button>
        <LineRow />
        <Pcustom color="#fffffe">Correo electrónico</Pcustom>
        <TextFieldWhite
          variant="filled"
          label="Ingrese su correo electronico"
          inputRef={email}
          fullWidth
        />
        <Button color="secondary" variant="contained" fullWidth >
          Ingresar
        </Button>
        <Pcustom color="#11620b">¿se te olvidó tu contraseña?</Pcustom>
        <div className="register">
          <Pcustom color="#fffffe">¿Aún no tienes una cuenta?</Pcustom>
          <Link to={"/register"}>
            <Pcustom color="#11620b">Inscribirse</Pcustom>
          </Link>
        </div>

      </form>
    </div>
  );
}
