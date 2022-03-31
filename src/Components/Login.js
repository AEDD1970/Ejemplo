import { Grid, TextField } from '@material-ui/core';
import React, { useRef } from 'react'
import logo from '../Assets/images/logopurple.png'
import { BottonCustom, Pcustom, Title, LineRow } from '../styles/styles';
import styles from '../Components/styles.css'
import google from '../Assets/icons/icons8-google 1.png'

export default function Login() {
  const email = useRef()
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value 
    };

  };
  return (
    <div className={styles.containerlogin}>
      <form onSubmit={handleRegister}>
            <img src={logo} alt="logo" />
            <Title>
              Iniciar sesión
            </Title>
            <BottonCustom
            color="#ef4565"
            borderRadius="6px"
            >
              <img src={google} alt="logo-google" />
              <Pcustom color="#fffffe">Continuar con Google</Pcustom>
            </BottonCustom>
            <LineRow />
            <Pcustom color="#fffffe">
              Correo electrónico
            </Pcustom>
            <TextField
            variant="outlined"
            label="Ingrese su correo electronico"
            color="primary"
            inputRef={email}
            >
            </TextField>
            <BottonCustom  type="submit" color='secondary'>Ingresar</BottonCustom>
         
      </form>
    </div>
  )
}
