import React from 'react'
import { Routes as Routing, Route } from "react-router-dom";
import Home from '../Components/Home';
import Login from '../Components/Login';




export default function Routes() {
  return (
    <Routing>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routing>
  )
}
