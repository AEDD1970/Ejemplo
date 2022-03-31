import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import styles from "./styles.css"
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div >
      <AppBar position="static" className={styles.footer}>
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Estadisticas</Button>
          <Button color="inherit">Perfil</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
