import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
      <AppBar position="fixed" color="primary" className="footer">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button color="inherit">Estadisticas</Button>
        <Button color="inherit">Perfil</Button>
      </Toolbar>
    </AppBar>
  );
}
