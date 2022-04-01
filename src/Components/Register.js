import React, { useRef } from "react";
import "../Components/styles.css";
import { LogoContent, TextFieldWhite } from "../styles/styles";
import { Button } from "@material-ui/core";
import logo from '../Assets/images/logopurple.png'

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const handleRegisterUser = () => {};
  return (
    <div className={"containerRoot"}>
        <div className="logoRegister">
            <img src={logo} alt="" id="login"  />
        </div>
            
      <form onSubmit={handleRegisterUser} className="formContainer">
        <TextFieldWhite
          variant="filled"
          label="Ingrese su nombre"
          inputRef={name}
          fullWidth
        />
        <TextFieldWhite
          variant="filled"
          label="Ingrese su email"
          inputRef={email}
          fullWidth
        />
        <TextFieldWhite
          variant="filled"
          label="Ingrese su contraseña"
          inputRef={password}
          fullWidth
        />
        <Button color="secondary" variant="contained" fullWidth>
          Registrar
        </Button>
      </form>
    </div>
  );
}
