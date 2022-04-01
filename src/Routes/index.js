import React from "react";
import { Routes as Routing, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Questions from '../Components/Questions';

export default function Routes() {
  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/quest" element={<Questions />} />

    </Routing>
  );
}
