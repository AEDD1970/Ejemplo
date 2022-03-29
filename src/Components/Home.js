import React from 'react'
import { Ejemplo, LogoContent } from '../styles/styles';
import logo from '../Assets/images/logopurple.png'

export default function Home() {
  return (
    <LogoContent color="red" >
        <img src={logo} alt="" id="login" />
        <Ejemplo >
        ejemplo de mostar
    </Ejemplo>
    </LogoContent>
    
  )
}
